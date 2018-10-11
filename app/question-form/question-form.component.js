angular.
    module('questionForm').
        component('questionForm',{
            templateUrl: 'question-form/question-form.template.html',
            controller: ['$http',function QuestionFormController($http){
                var self = this;
                this.question = {
                    title : '',
                    course : '',
                    description : '',
                    img : '',
                    date: 0 
                }
                
                // $http({
                //     method:"post",
                //     url: "questions.php",
                //     date: self.question
                // }).success(function(res){
                //     console.log(res)
                // })
            }]
        })