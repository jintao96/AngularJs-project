

angular.
    module('questionDetail').
        component('questionDetail',{
            templateUrl: 'question-detail/question-detail.template.html',
            controller: ['$http','$routeParams', 
                    function QuestionDetailController($http,$routeParams){
                    var self = this;
                    this.orderProp = 'support';
                    this.isDescending = true;
                    this.answerDate = false;
                    this.support = true;
                    this.orderBySupport = function(){
                        self.orderProp = 'support';
                        self.isDescending = !self.support;
                        self.support = !self.support;
                        self.answerDate = false;
                    }
                    this.orderByAnswerDate = function(){
                        self.orderProp = 'answerDate';
                        self.isDescending = !self.answerDate;
                        self.answerDate = !self.answerDate;
                        self.support = false;
                    }


                    $http.get('questions/questions.json').success(function(response){
                        var questionId = $routeParams.questionId;
                        self.question =  response[questionId];
                        
                    })
            }]
        })
        