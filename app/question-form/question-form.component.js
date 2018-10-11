angular.
    module('questionForm').
        component('questionForm',{
            templateUrl: 'question-form/question-form.template.html',
            controller: function QuestionFormController(){
                this.title = '';
                this.course = '';
                this.description = '';
                this.img = '';
                
            }
        })