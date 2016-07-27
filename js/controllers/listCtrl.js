(function(){

  angular.module("animeFacts")
  .controller("listCtrl", listController);

  listController.$inject =['quizMatrics','dataService'];

  function listController(quizMatrics, dataService){
    var an = this;
    an.data = dataService.animeData;
    an.quizMatrics = quizMatrics;

    an.activeAnime = {};
    an.changeActiveAnime = changeActieAnime;
    an.search="";

    an.activateQuiz = activateQuiz;


    function changeActieAnime(index){
      an.activeAnime = index;
    };

    function activateQuiz(){
      quizMatrics.changeState('quiz', true);
    };


  };

})();
