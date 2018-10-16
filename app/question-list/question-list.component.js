angular.
    module('questionList').
        component('questionList',{
            templateUrl: 'question-list/question-list.template.html',
            controller: ['$http',function QuestionListController($http){
                var self = this;
                this.orderProp = 'date';
                this.isDescending = false;
                this.dateIsDescending = false;
                this.veiwsIsDescending = false;
                this.answerNumIsDescending = false;
                this.orderByDate = function(){
                    self.orderProp = 'date';
                    self.isDescending = !self.dateIsDescending;
                    self.dateIsDescending = self.isDescending;
                    self.veiwsIsDescending = false;
                    self.answerNumIsDescending = true;
                }
                this.orderByVeiws = function(){
                    self.orderProp = 'veiws';
                    self.isDescending = !self.veiwsIsDescending;
                    self.veiwsIsDescending = self.isDescending;
                    self.dateIsDescending = true;
                    self.answerNumIsDescending = true;
                }
                this.orderByAnswerNum = function(){
                    self.orderProp = 'answerInfo';
                    self.isDescending = !self.answerNumIsDescending;
                    self.answerNumIsDescending = self.isDescending;
                    self.dateIsDescending = true;
                    self.veiwsIsDescending = false;                 
                }
                $http.get('questions/questions.json').then(function(response){
                    self.questions = response.data;
                    //  console.log(self.questions[0]);

                })
            }]
        })