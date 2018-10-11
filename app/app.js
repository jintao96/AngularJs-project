'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'questionList',
  'questionDetail',
  'questionForm'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
    when('/questions',{
      template: '<question-list></question-list>'
    }).
    when('/questions/questionDetail',{
      template: '<question-detail></question-detail>'
    }).
    when('/questions/questionForm',{
      template: '<question-form></question-form>'
    }).
    otherwise({redirectTo: '/questions'});
}]);
