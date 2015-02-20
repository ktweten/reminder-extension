/**
 * Created by kelly on 13/02/15.
 */
(function() {
  'use strict';

  angular.module('reminderApp').service('Cards', [function() {

    this.getCards = function() {
      var stored = localStorage.getItem('reminders'),
        cards = [];

      if (stored) {
        cards = JSON.parse(stored);
      }

      return cards;
    };

    this.saveCards = function(cards) {
      var stringed = JSON.stringify(cards);
      localStorage.setItem('reminders', stringed);
      updateIcon();
    };

  }]);
})();
