function start(){
/*These statements tell what the project is about and 
what to do in order for the program to run.*/
println("Welcome to the English grade calculator.")
println("Enter your grade as a percent.")
/*These variables use user input to ask the user what their grades 
are for each of the following categories.*/
var homeworkInput = readInt("What is your homework grade? ")
var quizInput = readInt("What is your quiz grade? ")
var testInput = readInt("What is your test/essay/project grade? ")
var classParticipation = readInt("What is your class participation/proffesionalism grade? ")
/*These variables apply the weight of each category
of the grades*/
var hwFinal = weightGrade(homeworkInput, 0.25);
var quizFinal = weightGrade(quizInput, 0.25);
var testFinal = weightGrade(testInput, 0.40);
var participationFinal = weightGrade(classParticipation, 0.10);
/*This variable adds all the final grading categories up
to create the total grade for the english class.*/
var total = (hwFinal + quizFinal + testFinal + participationFinal);
println("Your english 11 overall grade is currently: " + total)
letterGrade(total);


}
/*This function contains two parameters, (score and weight),
and both of these are used to calculate the grade 
in a specific subject and then returning it back into
the start function.*/
function weightGrade(score, weight){
    var score = (score * weight)
    return score;
     

    
  
}
/*This function turns the number grade originally in the start
function into a letter grade with a series of if else
statements, checking to see what number grade would
correspond with the letter.*/
function letterGrade(num){
    if (num >= 90 && num <= 100){
        println("Your score is an A");
    } 
    else if (num >=80 && num < 90){
        println("Your score is a B");
    }
    else if (num >= 70 && num < 80){
        println("Your score is a C");
    }
    else if (num >= 60 && num < 70){
        println("Your score is a D");
    }
    else {
        println("Your score is an E");
    }
    
}