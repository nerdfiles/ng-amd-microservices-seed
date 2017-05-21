// ./client/scripts/component/meta/index.js
/**
 * @ngdoc overview
 * @name app.core.hypermedia:meta
 * @description Dynamic meta-content settings.
 */
define(['interface'], metaSpec);
function metaSpec (__interface__) {
  'use strict';

  function MetaSpecController ($scope, $rootScope) {
    $scope.vm.sep = ' ';
    var defaultIcon = '📝';
    $scope.vm.prefix = $scope.vm.construct.icon || defaultIcon;
  }

  /**
   * @ngdoc component
   * @memberOf app.core.hypermedia:meta
   * @name metaSpec
   */
  __interface__.component('metaSpec', {
    templateUrl: 'assets/scripts/component/meta/index.html',
    controller: MetaSpecController,
    controllerAs: 'vm',
    bindings: {
      type      : '@',
      construct : '='
    }
  });
}
