var bday1a = "Don’t worry, if Plan A doesn’t work, there are 25 more letters in the alphabet";
var bday1b = "Butter my butt and call me a biscuit!";
var bday2a = "Always remember: you're unique, just like everyone else";
var bday2b = "Death is hereditary";
var bday3a = "It is not my fault that I never learned to accept responsibility!";
var bday3b = "Constipated people don't give a crap";
var bday4a = "I’d like to help you out. Which way did you come in?";
var bday4b = "If you can't beat them, arrange to have them beaten";
var bday5a = "The sex was so good that even the neighbors had a cigarette";
var bday5b = "Sometimes I wake up grumpy; other times I let her sleep";
var bday6a = "Everyone hates me because I'm paranoid";
var bday6b = "Silence is golden, but duck tape is silver";
var bday7a = "I get enough exercise pushing my luck";
var bday7b = "Alcohol does not solve any problems, but then again, neither does milk.";
var bday8a = "Come over to the dark side…we’ve got candy";
var bday8b = "I’m never late. The others are just too early";
var bday9a = "As long as cocoa beans grow on trees, chocolate is fruit to me";
var bday9b = "Silence is golden. Unless you have kids. Then it’s suspicious";
var bday10a = "I put the ‘pro’ in ‘procrastinate'";
var bday10b = "Doing nothing is hard, you never know when you’re done";
var bday11a = "I’m not lazy. I’m just highly motivated to do nothing";
var bday11b = "Fart when people hug you. You’ll make them feel strong";
var bday12a = "Smile like a monkey with a new banana";
var bday12b = "Whoever said, “Out of sight, out of mind” never had a spider disappear in their bedroom.”";
var bday13a = "Don’t drink while driving – you might spill the beer"; 
var bday13b = "Whenever I’m bored, I go to my favorite place: The fridge"; 
var bday14a = "I don’t care what people think of me. Mosquitos find me attractive!";
var bday14b = "If you’re not supposed to eat at night, why is there a light in the refrigerator?"; 
var bday15a = "I’d agree with you, but then we’d both be wrong";
var bday15b = "If you don't like the fortune don't eat the cookie";
var a = document.getElementById("bdayIn").value;

function siiPhraseOpen() {
    var x = document.forms["myPhrase"]["bdayIn"].value;
    //maurice
    if(x == "6-26"){
        document.getElementById("phrase").innerHTML = "Phrase 1: " + bday1a;
        document.getElementById("phrase2").innerHTML = "Phrase 2: " + bday1b;
        return false;
    }//nikki
    else if(x == "2-6"){
            document.getElementById("phrase").innerHTML = "Phrase 1: " + bday2a;
            document.getElementById("phrase2").innerHTML = "Phrase 2: " + bday2b;    
            return false;
        }
        //tish
        else if(x == "7-12"){
            document.getElementById("phrase").innerHTML = "Phrase 1: " + bday3a;
            document.getElementById("phrase2").innerHTML = "Phrase 2: " + bday3b;    
            return false;
        }
        //leelee
        else if(x == "2-22"){
            document.getElementById("phrase").innerHTML = "Phrase 1: " + bday4a;
            document.getElementById("phrase2").innerHTML = "Phrase 2: " + bday4b;    
            return false;
        }
        //brit
        else if(x == "8-20"){
            document.getElementById("phrase").innerHTML = "Phrase 1: " + bday5a;
            document.getElementById("phrase2").innerHTML = "Phrase 2: " + bday5b;    
            return false;
        }
        //justin
        else if(x == "11-19"){
            document.getElementById("phrase").innerHTML = "Phrase 1: " + bday6a;
            document.getElementById("phrase2").innerHTML = "Phrase 2: " + bday6b;    
            return false;
        }
        //steph
        else if(x == "5-4"){
            document.getElementById("phrase").innerHTML = "Phrase 1: " + bday7a;
            document.getElementById("phrase2").innerHTML = "Phrase 2: " + bday7b;    
            return false;
        }
        //panache
        else if(x == "3-26"){
            document.getElementById("phrase").innerHTML = "Phrase 1: " + bday8a;
            document.getElementById("phrase2").innerHTML = "Phrase 2: " + bday8b;    
            return false;
        }
        //dino
        else if(x == "12-14"){
            document.getElementById("phrase").innerHTML = "Phrase 1: " + bday9a;
            document.getElementById("phrase2").innerHTML = "Phrase 2: " + bday9b;    
            return false;
        }
        //marlana
        else if(x == "5-11"){
            document.getElementById("phrase").innerHTML = "Phrase 1: " + bday10a;
            document.getElementById("phrase2").innerHTML = "Phrase 2: " + bday10b;    
            return false;
        }
        //wally
        else if(x == "6-1"){
            document.getElementById("phrase").innerHTML = "Phrase 1: " + bday11a;
            document.getElementById("phrase2").innerHTML = "Phrase 2: " + bday11b;    
            return false;
        }
        //matt
        else if(x == "4-11"){
            document.getElementById("phrase").innerHTML = "Phrase 1: " + bday12a;
            document.getElementById("phrase2").innerHTML = "Phrase 2: " + bday12b;    
            return false;
        }
        //malelia
        else if(x == "10-10"){
            document.getElementById("phrase").innerHTML = "Phrase 1: " + bday13a;
            document.getElementById("phrase2").innerHTML = "Phrase 2: " + bday13b;    
            return false;
        }
        //max
        else if(x == "11-26"){
            document.getElementById("phrase").innerHTML = "Phrase 1: " + bday14a;
            document.getElementById("phrase2").innerHTML = "Phrase 2: " + bday14b;    
            return false;
        }
        //zyron
        else if(x == "5-22"){
            document.getElementById("phrase").innerHTML = "Phrase 1: " + bday15a;
            document.getElementById("phrase2").innerHTML = "Phrase 2: " + bday15b;    
            return false;
        }

        else {
            document.getElementById("phrase").innerHTML = "enter you birthday in...geez";
            document.getElementById("phrase2").innerHTML = "like this...10-20...the number of your month, dash, the number of the day";
            return false;
        }           
}

var mM1 = "BLACK CAT"
var mM2 = "SPEAKERS"

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
document.getElementById("overlay").style.display = "none";
}

function on2() {
document.getElementById("overlay2").style.display = "block";
}

function off2() {
document.getElementById("overlay2").style.display = "none";
}

function on3() {
document.getElementById("overlay3").style.display = "block";
}

function off3() {
document.getElementById("overlay3").style.display = "none";
}

function on4() {
document.getElementById("overlay4").style.display = "block";
}

function off4() {
document.getElementById("overlay4").style.display = "none";
}

function on5() {
document.getElementById("overlay5").style.display = "block";
}

function off5() {
document.getElementById("overlay5").style.display = "none";
}

function on6() {
document.getElementById("overlay6").style.display = "block";
}

function off6() {
document.getElementById("overlay6").style.display = "none";
}

function on7() {
document.getElementById("overlay7").style.display = "block";
}

function off7() {
document.getElementById("overlay7").style.display = "none";
}

function on8() {
document.getElementById("overlay8").style.display = "block";
}

function off8() {
document.getElementById("overlay8").style.display = "none";
}

function on9() {
document.getElementById("overlay9").style.display = "block";
}

function off9() {
document.getElementById("overlay9").style.display = "none";
}

function on10() {
document.getElementById("overlay10").style.display = "block";
}

function off10() {
document.getElementById("overlay10").style.display = "none";
}

function on11() {
document.getElementById("overlay11").style.display = "block";
}

function off11() {
document.getElementById("overlay11").style.display = "none";
}

function on12() {
document.getElementById("overlay12").style.display = "block";
}

function off12() {
document.getElementById("overlay12").style.display = "none";
}

 
