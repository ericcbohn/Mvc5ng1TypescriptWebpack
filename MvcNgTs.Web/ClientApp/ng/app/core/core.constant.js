'use strict';

/*
 * Since simple values, like URL prefixes, don't have dependencies or configuration, it's often handy to make them available in both the configuration and run phases. This is what the Constant recipe is for.
 */
angular.module('app.core')
    .constant('toastr', toastr);