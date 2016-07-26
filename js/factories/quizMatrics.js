(function(){

    angular.module("animeFacts")
            .factory("quizMatrics", quizMatrics);

            quizMatrics.$inject = ['dataService'];

            function quizMatrics(dataService){
                var quizObj = {
                    quizActive: false,
                    resultActive: false,
                    changeState: changeState,
                    markQuiz: markQuiz,
                    correctAnswers : [],
                    numCorrect : 0
                };
                return quizObj;

                function changeState(matric, state){
                    if(matric === 'quiz'){
                        quizObj.quizActive = state;
                    }
                    if(matric === 'results'){
                      quizObj.resultActive = state;
                    }
                    else{
                      return false;
                    }
                  };  //end changeState

                function markQuiz(){
                    quizObj.correctAnswers = dataService.correctAnswers;
                    for(var i=0 ; i < dataService.quizQuestions.length; i++){
                      if(dataService.quizQuestions[i].selected === dataService.correctAnswers[i]){
                        dataService.quizQuestions[i].correct = true;
                        quizObj.numCorrect++;
                      }
                      else{
                          dataService.quizQuestions[i].correct = false;
                      }
                    }
                } ; //end markQuiz



        };    //end quizMatrics
})();
