// Reference: https://webpack.js.org/configuration/#options
// Reference: https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9

const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const appEntryPath = "./ClientApp/app/app.module.ts";
const bundleOutputPath = path.resolve(__dirname + "/ClientApp/dist");

const devBundleName = "[name].bundle.js";
const prodBundleName = "[name].[chunkhash].min.js";
const prodCssBundleName = "[name].[contenthash].css";

const babelOptions = {
    "babelrc": false,
    "presets": ["env"],
    "plugins": ["angularjs-annotate"]
};

module.exports = (env) => {
    console.log("webpack build env: " + env);
    const isDevBuild = !(env === "prod");
    
    const sharedConfig = {
        /* 
         * default val: current directory for webpack; recommended to pass a value in your configuration. This makes your configuration independent from CWD (current working directory).
           entry and module.rules.loader option is resolved relative to this directory
         */
        context: __dirname,
        target: "web", // compile for useage in a browser-like environment
        resolve: { extensions: [".ts", ".js", ".tsx", ".jsx" ] },
        // entry: the module webpack uses to build its internal dependency graph. Webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).
        entry: { app: appEntryPath },
        output: {
            filename: devBundleName,
            path: bundleOutputPath//,
            // Defining a global var that can used to call functions from within ASP.NET Razor pages.
            //library: "TransportLibrary", // variable 'TransportLibrary' will be bound with return value of entry file, if the resulting output is included as a script tag in an HTML page.  NOTE: default output.libraryTarget is 'var'
        },
        module: {
            // TODO: when ready to figure out how to work with spec files: https://webpack.js.org/configuration/#options
            // Loaders are additional node modules that help ‘load’ or ‘import’ files of various types into browser acceptable formats like JS, Stylesheets and so on. Further loaders also allow importing such files into JS via “require” or “import” in ES6.
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules)/,
                    use: [{
                        loader: "babel-loader",
                        options: babelOptions
                    }]
                },
                {
                    test: /\.tsx?$/,
                    exclude: /(node_modules)/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: babelOptions
                        },
                        "ts-loader"
                    ]
                },
                { test: /\.html$/, use: [ "html-loader?minimize" ] },
                { test: /\.css$/, use: [ "to-string-loader", isDevBuild ? "css-loader" : "css-loader?minimize" ] },
                { test: /\.scss/, use: [ "style-loader", "css-loader", "sass-loader" ] },
                { test: /\.(png|svg|jpg|jpeg|gif)$/, use: [ "file-loader" ] },//[ 'url-loader?limit=25000' ] }, // use url-loader if pulling from static content url source
                { test: /\.(woff|woff2|eot|ttf|otf)$/, use: [ "file-loader" ] }
            ]
        },
        plugins: [
            // allow jquery usage outside webpack modules
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            }),
            
            new CleanWebpackPlugin([ "ClientApp/dist", "Views/Shared/_Layout.cshtml" ], {
                root: __dirname,
                verbose: true // write logs to console
            }),

            // avoid publishing when compilation failed
            new webpack.NoEmitOnErrorsPlugin(),

            /* 
             * The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags. Just add the plugin to your webpack config as follows:
               inject: 'body' => all javascript resources will be placed at the bottom of the body element
               filename => the file to write the HTML to
               template => webpack require path to the template
            */
            new HtmlWebpackPlugin({
                inject: "body",
                filename: path.join(__dirname, "Views/Shared/_Layout.cshtml"),
                template: path.join(__dirname, "Views/Shared/_Layout_Template.cshtml")
            }),
            // async error reporting.  needed to detect a --watch mode.  May be removed after resolution of https://github.com/webpack/webpack/issues/3460
            new CheckerPlugin()
        ],
        // pretty terminal output
        stats: { colors: true }
    };

    // Production Configuration
    if (!isDevBuild) {
        console.log("merging production config");
        return Merge(sharedConfig, {
            mode: "production",
            entry: {
                // code splitting: we take all of our vendor code and put it in a separate bundle (vendor.[chunkhash].js)
                // this way it will have better caching/cache hits since it changes infrequently
                vendor: [
                    "angular",
                    "angular-animate",
                    "angular-sanitize",
                    "bootstrap",
                    "jquery",
                    "jquery-validation",
                    "jquery-validation-unobtrusive",
                    "popper.js",
                    "toastr"
                ]
            },

            output: {
                filename: prodBundleName
                //publicPath: // static content URL path (if used)
            },

            optimization: {
                runtimeChunk: { name: "vendor" },
                splitChunks: {
                    cacheGroups: {
                        commons: {
                            test: /[\\/]node_modules[\\/]/,
                            name: "vendor",
                            chunks: "all"
                        }
                    }
                }
            },

            module: {
                rules: [{
                    // https://github.com/aspnet/jquery-validation-unobtrusive/issues/79
                    // TODO: remove this once jquery-validation-unobtrusive bug is fixed v3.2.10
                    parser: {
                        amd: false
                    }
                }]
            },
            // https://webpack.js.org/plugins/define-plugin/
            plugins: [
                new webpack.DefinePlugin({
                    "process.env": {
                        "NODE_ENV": JSON.stringify("production")
                    }
                }),
                // Split out library into seperate bundle and remove from app bundle.
                new webpack.HashedModuleIdsPlugin(),

                // Write out CSS bundle to its own file:
                new ExtractTextPlugin({
                    filename: prodCssBundleName
                }),
                new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
                new UglifyJSPlugin({
                    uglifyOptions: {
                        mangle: { keep_fnames: true },
                        output: { comments: false, beautify: false }
                    }
                })
            ]
        });
    }
    // Development Configuration
    else {
        console.log("merging development config");
        return Merge(sharedConfig, {
            mode: "development",
            // enhance debugging by adding meta info for the browser devtools
            // source-map most detailed at the expense of build speed.
            devtool: "source-map",//"inline-source-map", // enum

            // https://webpack.js.org/plugins/define-plugin/
            plugins: [
                new webpack.DefinePlugin({
                    "process.env": {
                        "NODE_ENV": JSON.stringify("development")
                    }
                })
            ]
        });
    }
};