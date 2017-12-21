// change some scope
var QuestionTitle=["What which of the following was a name for modern day Portugal?", "Where is the ancient prophetic oracle site of Delphii?", "In Roman mythology Mars was the diety of what?", "Where did Alexander the Great die?", "Who did Julius Caesar defeat at the battle of Alesia?","The ancient port city of Carthage was located in what modern day country?","Which of the following leaders was not apart of the second Roman Triumvirate that split the empire?", "What was the state religion of the Sasanian Empire"];
var QuestionAnswers=[
    ["Lusitania" , "Gallia", "Numidia","Latium"],["Italy","Spain","Egypt","Greece"],["Love","War","Wisdom","The Sky"],["Greece", "Babylon","India",
"Athens"],["Brutus","Vercingetorix","Boudicca","Herman The German"],["Algeria","Libya","Tunisia","Morocco"],["Lepidus", 
"Marc Anthony","Augustus Caeser","Aurelian"],["Zoroastrianism","Buddhism","Islam","Christianity"]
];


var QuestionCorrectAnswer=["Lusitania","Greece","War","Babylon","Vercingetorix","Tunisia","Aurelian","Zoroastrianism"];
var RightAnswers=0;
var WrongAnswers=0;
var RemainingTime;
var RoundCounter=0;
var PostQuestion;
var AnswerPicked;
var AnswerValue;
//console.log(QuestionAnswers[0][0]);
$("#start").click(Intialize);

function Intialize(){
    RoundCounter=0;
    NextQuestion();
    $("#start").addClass("ZoomOffScreen");
}
function NextQuestion() {
        RemainingTime=999;
        PostQuestion=0;
        console.log(RoundCounter)
        if (RoundCounter===8){
            EndGame();
                
             } else {
                run();
                //$("#buttons").empty();
                $("#QuestionTitle").text(QuestionTitle[RoundCounter]);
                for (var i=0; i<4; i++){
                   // $("#QuestionAnswers").append(QuestionAnswers[RoundCounter][i]+" ");
                
                $("#p"+i).attr("answervalue",(QuestionAnswers[RoundCounter][i]));
                
                  //  $("#p"+i).append(QuestionAnswers[RoundCounter][i]);
                //   $("#QuestionAnswers").append(AnswerValue);
                   $("#p"+i).text(QuestionAnswers[RoundCounter][i])  
                };   
             }    
  
    };

function decrement() {
              RemainingTime--;
              $("#Timer").html("<h2>" + RemainingTime + "</h2>");
              if (RemainingTime === 0) {
                stop();
                ForceAnswer();
              }
            }
function run() {
    intervalId = setInterval(decrement, 1000);
              }            
function stop() {
    clearInterval(intervalId);
 };
function TimesUp(){
    $("#QuestionTitle").text("");  
    $("#QuestionAnswers").text("");
    for (var i=0; i<4;i++){
      $("#p"+i).empty();  
    }
    $("#QuestionTitle").text("The correct answer is: " + QuestionCorrectAnswer[RoundCounter]+"!");
    
};
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
$(".Answers").on("click",function(){
    AnswerPicked = ($(this).attr("answervalue"));
    if (AnswerPicked === QuestionCorrectAnswer[RoundCounter]){
    RightAnswers++;
    } else {
    WrongAnswers++;
    if (PostQuestion===1){
        WrongAnswers--;
     };
    
    }
    stop();
    ForceAnswer();
  //  PlayerTotals();
});

// function PlayerTotals(){
 //   $(".AnswersOutput").text("Correct Answers: "+ RightAnswers+ " Incorrect Answers: "+ WrongAnswers); 
    
// };
function EndGame(){
    stop();
    $("#QuestionTitle").empty();
    $("#Timer").empty();
    $("#QuestionTitle").append("You got "+RightAnswers+ "/"+ RoundCounter +" questions correct.")
    $("#start").removeClass("ZoomOffScreen");
    for (var i=0; i<4;i++){
        $("#p"+i).empty();  
      }
    //  var MakeMeAButton = $("<button>");
    //  MakeMeAButton.addClass("start");
    //  $("#buttons").append(MakeMeAButton);
      
      $("#start").html("<h2> Try again?</h2>");
  //    $(".AnswersOutput").empty();
       console.log("this ran")
};

//   AnswerValue = $("<p>");
                //   AnswerValue.addClass("p"+i);
                //   AnswerValue.addClass("Answers");
                //   AnswerValue.attr("answervalue",(QuestionAnswers[RoundCounter][i])); 

                // potential workaround for the button not working.
                // add a class that moves it 9000 px to the right so the button doesn't exist
                // remove the class when the program finishes running
                //.removeClass()
                // $("#results").empty().append(myHtml); so empty then append?
