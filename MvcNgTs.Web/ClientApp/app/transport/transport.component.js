'use strict';

//import angular from 'angular';
//import transportTemplate from './transport.component.html';
//import transportStyles from './transport.component.scss';

function TransportController() {//logger) {
    this.phones = [
        {
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
        }, {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
        }, {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
        }
    ];

    this.throwException = function () {
        throw new Error('transport.component.js throwException() test error');
    };
}

angular.module('transportApp')
    .component('appTransport', {
        templateUrl: 'ClientApp/app/transport.component.html',
        controller: TransportController
    });