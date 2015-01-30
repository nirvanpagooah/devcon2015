﻿define([
        'angular',
        'app',
        './module.require'
],
function (angular, app, Sessions) {
    'use strict';

    var loReturn = app.config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('sessions', {
                    abstract: true,
                    url: '/sessions',
                    templateUrl: 'app/sessions/session.html',
                    //resolve: {
                    //    entries: [Sessions + '.sessionService',
                    //      function (sessions) {
                    //          sessions.getList("1");
                    //          return sessions.entries;
                    //      }]
                    //},
                    controller: Sessions + '.sessionController'
                })

                .state('sessions.list', {
                    url: '',
                    templateUrl: 'app/sessions/session.day.html'
        })

                .state('sessions.day', {
                    url: '/{dayId:[0-9]{1}}',
                    templateUrl: 'app/sessions/session.day.html',
                    controller: Sessions + '.sessionController'
                });
        }
    ]);

    return loReturn;
});
