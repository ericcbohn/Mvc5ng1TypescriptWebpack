import * as angular from 'angular';
import * as sinon from 'sinon';

export namespace SpecHelper {
    export const FakeLogger = ($provide: ng.auto.IProvideService) => {
        $provide.value('ILoggerService', sinon.stub({
            error: function () { },
            info: function () { },
            warning: function () { },
            success: function () { }
        }));
    };

    export const GetFnParams = (fn: Function) => {
        let fnText: string;
        let argDecl: RegExpMatchArray;

        let FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
        let FN_ARG_SPLIT = /,/;
        let FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
        let STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
        let params: string[] = [];
        if (fn.length) {
            fnText = fn.toString().replace(STRIP_COMMENTS, '');
            argDecl = <RegExpMatchArray>fnText.match(FN_ARGS);
            let argMatch: RegExpExecArray;
            angular.forEach(argDecl[1].split(FN_ARG_SPLIT), function (arg: string) {
                argMatch = <RegExpExecArray>FN_ARG.exec(arg);
                params.push(argMatch[2]);
                //arg.replace(FN_ARG, function (all: string, underscore: string, name: string) {
                //    params.push(name);
                //});
            });
        }
        return params;
    };

    export const Injector = function() {
        let annotation: string,
            body: string = '',
            cleanupBody: string = '',
            mustAnnotate: boolean = false,
            params: string[];

        if (typeof arguments[0] === 'function') {
            params = GetFnParams(arguments[0]);
        }
        // else from here on assume that arguments are all strings
        else if (angular.isArray(arguments[0])) {
            params = arguments[0];
        }
        else {
            params = Array.prototype.slice.call(arguments);
        }

        annotation = params.join('\',\''); // might need to annotate

        angular.forEach(params, function (name, ix) {
            var _name,
                pathName = name.split('.'),
                pathLen = pathName.length;

            if (pathLen > 1) {
                // name is a path like 'block.foo'. Can't use as identifier
                // assume last segment should be identifier name, e.g. 'foo'
                name = pathName[pathLen - 1];
                mustAnnotate = true;
            }

            _name = '_' + name + '_';
            params[ix] = _name;
            body += name + '=' + _name + ';';
            cleanupBody += 'delete window.' + name + ';';

            // todo: tolerate component names that are invalid JS identifiers, e.g. 'burning man'
        });

        var fn = 'function(' + params.join(',') + '){' + body + '}';

        if (mustAnnotate) {
            fn = '[\'' + annotation + '\',' + fn + ']';
        }

        var exp = 'inject(' + fn + ');' +
            'afterEach(function(){' + cleanupBody + '});'; // remove from window.

        //Function(exp)(); // the assigned vars will be global. `afterEach` will remove them
        /* jshint evil:true */
        new Function(exp)();

        // Alternative that would not touch window but would require eval()!!
        // Don't do `Function(exp)()` and don't do afterEach cleanup
        // Instead do ..
        //     return exp;
        //
        // Then caller must say something like:
        //     eval(specHelper.injector('$log', 'foo'));
    };
}