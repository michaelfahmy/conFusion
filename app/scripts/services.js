'use strict';

angular.module('confusionApp')

  .constant('baseURL', "http://localhost:3000/")

  .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {

    this.getDishes = function(){
      return $resource(baseURL+"dishes/:id", null, {'update':{method:'PUT'}});
    };

    // this.getDish = function (index) {
    //   return $http.get(baseURL+"dishes/"+index);
    // };

    this.getPromotion = function() {
      return $resource(baseURL+"promotions/:id", null, null);
    };

  }])

  .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {

    var corpfac = {};

    corpfac.getLeaders = function() {
      return $resource(baseURL+"leadership/:id", null, null);
    };

    return corpfac;
  }])

  .service('FeedbackFactory', ['$resource', 'baseURL', function($resource, baseURL) {

    this.saveFeedback = function() {
      return $resource(baseURL+"feedback", null, null);
    };

  }])


;
