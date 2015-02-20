/**
 * Created by kelly on 13/02/15.
 */
(function() {
  'use strict';

  angular.module('reminderApp').controller('CardListController', ['Cards', '$scope',
    function(Cards, $scope) {

    $scope.cards = Cards.getCards();

    $scope.setTabTo = function(url) {
      chrome.tabs.create({ url: url });
    };

    $scope.delete = function(item) {
      var index = $scope.cards.indexOf(item);

      if (index >= 0 && index < $scope.cards.length) {
        $scope.cards.splice(index, 1);
      }
      Cards.saveCards($scope.cards);
    };

  }])
})();
