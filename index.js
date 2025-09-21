const display =document.getElementById("display");

function appendToDisplay(input){
    display.value +=input;
    if(input>='0' && input<='9' || input=='00' || input=='.'){
    let sound1 = document.getElementById("normal-btn");
        sound1.currentTime = 0.2;
        sound1.playbackRate=2;
        sound1.play();
    }
    else{
        let sound1 = document.getElementById("operator-btn");
        sound1.currentTime = 0.1;
        sound1.playbackRate=2;
        sound1.play();
    }

}

function appendToDisplay0(input){
    if(display.value=="")
    {
        display.value+='0';
    }
    else if(display.value!="0")
    {
        display.value +=input;
        let sound1 = document.getElementById("normal-btn");
        sound1.currentTime = 0.2;
        sound1.playbackRate=2;
        sound1.play();
    }
   

}



function Reset(){
    display.value ="";
    let sound = document.getElementById("operator-btn");
        sound.currentTime = 0;
        sound.playbackRate=2;
        sound.play();
}

function Calculate(){
    try{
        display.value= eval(display.value);
        let sound = document.getElementById("equal-btn");
        sound.currentTime = 0;
        sound.playbackRate=2;
        sound.play();
    }
    catch(error)
    {
        display.value="Error";
        let sound = document.getElementById("error");
        sound.currentTime = 0.5;
        sound.playbackRate=2;
        sound.play();
    }
}

function Backspace(){
    display.value = display.value.slice(0, -1);
    let sound = document.getElementById("operator-btn");
        sound.currentTime = 0;
        sound.playbackRate=2;
        sound.play();
}
