/**
 * Created by Kelly on 2/15/2015.
 */
(function() {
  'use strict';

  angular.module('reminderApp').controller('EditCardController', ['Cards', '$scope',
    function(Cards, $scope) {

    this.openCard = function(card) {
      if (card.due) {
        $scope.due = new Date(card.due);
      }
      this.editing = true;
    };

    this.updateCard = function(card) {
      card.due = $scope.due;
      Cards.saveCards($scope.$parent.cards);
      this.editing = false;
    }

  }])
})();
