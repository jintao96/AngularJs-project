angular.
    module('questionForm').
        component('questionForm',{
            templateUrl: 'question-form/question-form.template.html',
            controller: ['$http',function QuestionFormController($http){
                var self = this;
                this.questionId = "questionTest";
                this.question ={}
                this.question[self.questionId] = {
                    title : '',
                    author : '某某某',
                    date: Date.now(),
                    course : '',
                    description : '',
                    img : '某照片'
                }

                this.postQuestion = function(){
                    console.log(self.question[self.questionId])
                }
            }]
        })