// ./client/scripts/section/notification/index.js
/**
 * @ngdoc overview
 * @name app.notification.section:index
 * @description Notification Section Index Controller.
 */
define([
  'service/error'
], function () {
  'use strict';

  var sectionInterface = [
    '$rootScope',
    'ErrorService',
    NotificationSectionIndexController
  ];
  return sectionInterface;
  function NotificationSectionIndexController ($rootScope, ErrorService) {
    var vm = this;
    vm.sectionTitle = 'Notification';

    $rootScope.$on('client:info', function (event, data) {
      ErrorService.addNote(data);
    });

    $rootScope.$on('client:warn', function (event, data) {
      ErrorService.addNote(data);
    });

    $rootScope.$on('client:debug', function (event, data) {
      ErrorService.addNote(data);
    });

    $rootScope.$on('client:error', function (event, data) {
      ErrorService.addNote(data);
    });

    ////////////
  }
});