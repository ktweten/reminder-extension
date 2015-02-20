/**
 * Created by kelly on 13/02/15.
 */
(function() {
  'use strict';

  angular.module('reminderApp').controller('CreateCardController', ['Cards', '$scope',
    function(Cards, $scope) {

    $scope.initializeCard = function() {
      $scope.favIcon = '';
      $scope.title = '';
      $scope.url = '';
      $scope.card = '';
      $scope.due = null;
      $scope.active = false;
    };

    $scope.initializeCard();

    $scope.openCard = function() {
      if (!$scope.active) {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
          if (tabs.length > 0) {
            $scope.$apply(function () {
              $scope.favIcon = tabs[0].favIconUrl;
              $scope.title = tabs[0].title;
              $scope.url = tabs[0].url;
            });
          }
        });
        $scope.active = true;
      }
    };

    $scope.submitCard = function() {
        if ($scope.url) {
          $scope.$parent.cards.push({
            created: Date.now(),
            due: $scope.due || null,
            favIcon: $scope.favIcon || '',
            note: $scope.card || '',
            title: $scope.title || '',
            url: $scope.url
          });

          Cards.saveCards($scope.$parent.cards);
        }
        $scope.active = false;
      };

    }])
})();
