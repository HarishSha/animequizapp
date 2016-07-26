(function(){

    angular.module('animeFacts')
          .controller('resultsCtrl', resultsController);

          resultsController.$inject = ['quizMatrics','dataService'];

          function resultsController(quizMatrics, dataService){
                var an = this;
                an.quizMatrics = quizMatrics;
                an.dataService = dataService;
                an.activeQuestion = 0;
                an.getAnswerClass= getAnswerClass;
                an.setActiveQuestion = setActiveQuestion;
                an.calculatePerc = calculatePerc;
                an.reset = reset;

                function setActiveQuestion(index){
                    an.activeQuestion = index;
                };  //end setActiveQuestion

                function calculatePerc(){
                  return quizMatrics.numCorrect / dataService.quizQuestions.length * 100;
                };  //end calculatePerc

                function getAnswerClass(index){
                    if(index === quizMatrics.correctAnswers[an.activeQuestion]){
                      return "bg-success";
                    }
                    else if (index === dataService.quizQuestions[an.activeQuestion].selected) {
                      return "bg-danger";
                    }
                };    //end getAnswerClass

                function reset(){
                  quizMatrics.changeState("results", false);
                  quizMatrics.numCorrect = 0;
                  for (var i = 0; i < dataService.quizQuestions.length; i++) {
                    var data = dataService.quizQuestions[i];

                    data.selected = null;
                    data.correct = null;
                  }
                }; //end reset

          };
})();
