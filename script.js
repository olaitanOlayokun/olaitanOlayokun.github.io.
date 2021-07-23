var clickCount=0;


//connecting to our HTML element
var factButton = document.getElementById("factButton");

var factTextArea = document.getElementById("factTextArea");

//lsten for the usar clicks

factButton.addEventListener("click",sendFact);

//Adding the function for when

function sendFact(){

  //Increase variable clickCount by 1

  clickCount +=1;

  console.log(clickCount);

  if(clickCount ==1 ){

    //changes our TextArea variable
     factTextArea.textContent="Bullying can lead to more severe emotions like lonliness, depression, and anxiety";
  }else if (clickCount ==2 ){ 
    factTextArea.textContent="In a study nearly 70% of tweens who were cyberbullied said it negatively impacted their feelings about themselves.";

  }else if (clickCount ==3 ){ 
    factTextArea.textContent="Of all the social networks, kids on YouTube are the most likely to be cyberbullied at 79 percent, followed by Snapchat at 69 percent, TikTok at 64 percent, and Facebook at 49 percent.";

  }else{ 
    resetFact();
  }
}



function resetFact(){
  clickCount= 0;
  factTextArea.textContent= "reset";
}
