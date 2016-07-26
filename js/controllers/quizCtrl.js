(function(){

    angular.module("animeFacts")
            .controller("quizCtrl", quizController)

            quizController.$inject = ['quizMatrics','dataService'];



            function quizController(quizMatrics, dataService){
                var an = this;
                an.quizMatrics = quizMatrics;
                an.dataService =  dataService;
                an.questionAnswered = questionAnswered;
                an.setActiveQuestion = setActiveQuestion;
                an.selectAnswer = selectAnswer;
                an.finaliseAnswer = finaliseAnswer;

                an.finalise = false;
                an.error = false;
                an.activeQuestion = 0;
                var numQuestionAnswered = 0;

            //set next question on screen by taking into mind that which question has been answered and which has not been answered




              function setActiveQuestion(index){
                if(index === undefined){
                    var breakOut = false;
                    var quizLength = dataService.quizQuestions.length - 1;
                      while (!breakOut) {
                        an.activeQuestion = an.activeQuestion < quizLength?++an.activeQuestion:0;
                        if(an.activeQuestion == 0){
                          an.error = true;
                        }

                        if(dataService.quizQuestions[an.activeQuestion].selected === null){
                          breakOut = true;
                        }
                    }
                }
                else an.activeQuestion = index;
              };  //setActiveQuestion end


              function selectAnswer(index){
                an.dataService.quizQuestions[an.activeQuestion].selected = index;
              };


              function questionAnswered(){
                  quizLength = dataService.quizQuestions.length;
                  if(dataService.quizQuestions[an.activeQuestion].selected !== null){
                    numQuestionAnswered++;
                    if(numQuestionAnswered >= quizLength){
                        //finalize quiz here
                        for(var i=0; i<quizLength; i++){
                          if(dataService.quizQuestions[i].selected === null){
                            setActiveQuestion(i);
                            return;
                          }
                        }
                        an.error = false;
                        an.finalise = true;
                        return;
                      }
                    }
                  an.setActiveQuestion();
                };    //questionAnswered end


              function finaliseAnswer() {
                    an.finalise = false;
                    an.numQuestionAnswered = 0;
                    an.activeQuestion = 0;
                    quizMatrics.markQuiz();
                    quizMatrics.changeState('quiz', false);
                    quizMatrics.changeState('results',true);

                  }   //finaliseAnswer end




        }; //controller end

})();
