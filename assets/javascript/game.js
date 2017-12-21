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
$("#start").click(Intialize);

function Intialize(){
    RoundCounter=0;
    NextQuestion();
    $("#start").addClass("ZoomOffScreen");
}
function NextQuestion() {
    
        RemainingTime=30;
        PostQuestion=0;
        console.log(RoundCounter)
        if (RoundCounter===8){
            EndGame();
                
             } else {
                run();
                $("#QuestionTitle").text(QuestionTitle[RoundCounter]);
                for (var i=0; i<4; i++){
                $("#p"+i).attr("answervalue",(QuestionAnswers[RoundCounter][i]));
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
        $(".AnswersOutput").empty();
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
    $(".AnswersOutput").text("You gussed correctly!"); 
    } else {
        $(".AnswersOutput").text("You gussed incorrectly:( ");
    WrongAnswers++;
    if (PostQuestion===1){
         
        WrongAnswers--;
     };
    
    }
    stop();
    ForceAnswer();
});

$
function EndGame(){
    stop();
    $("#QuestionTitle").empty();
    $("#Timer").empty();
    $("#QuestionTitle").append("You got "+RightAnswers+ "/"+ RoundCounter +" questions correct.")
    $("#start").removeClass("ZoomOffScreen");
    for (var i=0; i<4;i++){
        $("#p"+i).empty();  
      }
      $("#start").html("<h2> Try again?</h2>");
       console.log("this ran");
};
