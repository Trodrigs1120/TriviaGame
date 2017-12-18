// change some scope
var QuestionTitle=["What which of the following was a name for modern day Portugal?", "Where is the ancient prophetic oracle site of Delphii?", "In Roman mythology Mars was the diety of what?"];
var QuestionAnswers=[
    ["Lusitiana" , "Gallia", "Numidia","Latium"],["Italy","Spain","Egypt","Greece"],["Love","War","Wisdom","The Sky"]
];


var QuestionCorrectAnswer=["Lusitania","Greece","War"];
var RightAnswers;
var WrongAnswers;
var RemainingTime;
var RoundCounter;
var PostQuestion;
var AnswerPicked;
//console.log(QuestionAnswers[0][0]);
$("#start").click(Intialize);

function Intialize(){
    RoundCounter=0;
    NextQuestion();
}
function NextQuestion() {
        RemainingTime=999;
        PostQuestion=0;
        
    run();
    $("#buttons").empty();
    $("#QuestionTitle").text(QuestionTitle[RoundCounter]);
    for (var i=0; i<4; i++){
       // $("#QuestionAnswers").append(QuestionAnswers[RoundCounter][i]+" ");
      // $() 
       $(".p"+i).append(QuestionAnswers[RoundCounter][i]+" ");
        
        
    }
    // add in onclick stuff
    // we'll take the answer assign to to a variable and check it against the array variable
    // could do a for loop for the entire array honestly
    
    }
    function decrement() {
    
              RemainingTime--;

              $("#Timer").html("<h2>" + RemainingTime + "</h2>");
        
              //  Once number hits zero...
              if (RemainingTime === 0) {
        
                //  ...run the stop function.
                stop();
            
                ForceAnswer();
              }
            }
function run() {
    intervalId = setInterval(decrement, 1000);
              }            
function stop() {
    clearInterval(intervalId);
 }

function TimesUp(){
    $("#QuestionTitle").text("");  
    $("#QuestionAnswers").text("");
    $("#QuestionTitle").text("The correct answer is: " + QuestionCorrectAnswer[RoundCounter]+"!");
    
//    intervalId = setInterval(decrement, 1000);
//   if (RemainingTime === 0) {
//            NextQuestion(); 
//                  }
}
function ForceAnswer(){
    if (PostQuestion===1){
        NextQuestion(); 
    } else{
        TimesUp();
        RemainingTime=5;
        PostQuestion=1;
        intervalId = setInterval(decrement, 1000);
        RoundCounter++;
    }
}

//$("#QuestionAnswers").on("click",function(){
    $(".Answers").on("click",function(){
    PickAnAnswer()
   // if (AnswerPicked === QuestionCorrectAnswer[RoundCounter]){
   // RightAnswers++;
   // } else {
   // WrongAnswers++;
   // }
});
function PickAnAnswer(){
    //var AnswerPicked = ($('.p0').text());
    //console.log(AnswerPicked);
}
switch ($.attr('class')) {
    // in case the the class of the element is only menu-intro
    case 'p0':
    AnswerPicked = ($('.p0').text());
    console.log(AnswerPicked);
      break;
    case 'p1':
    AnswerPicked = ($('.p1').text());
    console.log(AnswerPicked);
    case 'p2':
    AnswerPicked = ($('.p2').text());
    console.log(AnswerPicked);
      break;
    
    case 'p3':
    AnswerPicked = ($('.p3').text());
    console.log(AnswerPicked);
      break;
  }