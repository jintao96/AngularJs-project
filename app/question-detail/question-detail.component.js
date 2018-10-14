

angular.
    module('questionDetail').
        component('questionDetail',{
            templateUrl: 'question-detail/question-detail.template.html',
            controller: ['$http','$routeParams', 
                    function QuestionDetailController($http,$routeParams){
                    var self = this;

                    $http.get('questions/questions.json').success(function(response){
                        var questionId = $routeParams.questionId;
                        self.question =  response[questionId];
                        //  console.log(self.question);
                        
                    })
            }]
        })