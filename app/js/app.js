(function(){
  // come on
  'use strict';


  angular.module('startupBootstrap', [])

  .controller('ReadingListController', function(){
    this.books = books;
    this.genres = genres;
    this.showForm = false;
  });

})();
