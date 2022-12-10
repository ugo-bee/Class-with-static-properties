 // define an empty class
 class Learnable{
    duration = "26 Weeks"
    learningPlatform = "Teachable"

    static learningPath = 4  //static property

    welcome(){
        console.log("welcome to Learnable 2022")
    }

    Login(){
        console.log("Ensure,you SignUp on Teachable")
    }

    static chooseLearningPath(){              // static method
        console.log(Learnable.learningPath)
    }
 }

 // instantiate an object
 const learnable = new Learnable()
 
 //acessing instance property
 console.log(learnable)

 //accessing the static property
 console.log(Learnable)

 //accessing the static method
 Learnable.chooseLearningPath()