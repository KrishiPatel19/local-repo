const username = document.querySelector('#username');
var place = document.querySelector('#username1');
place.textContent=username;
function gotoindex(){
    var username = document.getElementById('username').value;
    if(username){
        localStorage.setItem('username', username);
        window.location.href="index.html";
       // document.getElementById("username1").textContent=username;
    }
    else{
        alert("Please enter your name!");
    }
} 

function goto_math(){
    window.location.href="math.html";
    document.getElementById("question").textContent="abc";
}
function goto_sci(){
    window.location.href="sci.html";
}
function goto_HTML(){
    window.location.href="HTML.html";
}
function goto_CSS(){
    window.location.href="CSS.html";
}
//document.getElementById("username1").textContent = document.getElementById("username")
//let user = document.getElementById("username").innerText;
//document.getElementById("username1").innerHTML = user ;
const mathquestion = [
    { 
        question: "What is the value of x in the equation 2x+3=11?",
        a: "4",
        b: "5",
        c: "3",
        d: "6",
        answer: "a"
    },
    { 
        question: "If sin(x)=3/5 and x is in the second quadrant, what is cos(x)?",
        a: "4/5",
        b: "-4/5",
        c: "-3/5",
        d: "3/5",
        answer: "b"
    },
    { 
        question: "What is the sum of the first 5 prime numbers?",
        a: "15",
        b: "18",
        c: "26",
        d: "28",
        answer: "d"
    },
    { 
        question: "What is the circumference of a circle with a radius of 7 units? (Use 𝜋 ≈ 3.14)",
        a: "14",
        b: "28",
        c: "44",
        d: "22",
        answer: "c"
    },
    { 
        question: "What is the probability of drawing a King from a standard deck of 52 playing cards?",
        a: "1/13",
        b: "1/26",
        c: "1/52",
        d: "4/48",
        answer: "a"
    }
];
const sciencequestion = [
    { 
        question: "Which animal have 3 hearts, 9 brains and blue blood?",
        a: "Octopus",
        b: "Whale",
        c: "Okapi",
        d: "Iguana",
        answer: "a"
    },
    { 
        question: "Whom did Albert Einstein call 'The Father of Modern Science'?",
        a: "Nikola Tesla",
        b: "Galileo Galilei",
        c: "Isaac Newton",
        d: "Thomas Edison",
        answer: "b"
    },
    { 
        question: "Letter which dosen't appear on periodic table?",
        a: "V",
        b: "D",
        c: "R",
        d: "J",
        answer: "d"
    },
    { 
        question: "Which mammals have wings ?",
        a: "Ostrich",
        b: "Eagels",
        c: "Bats",
        d: "Owl",
        answer: "c"
    },
    { 
        question: "What is the Mpemba effect?",
        a: "Hot water freezing faster than cold water",
        b: "Cold water freezing faster than hot water",
        c: "Hot water Evaporating faster than cold water",
        d: "Cold water Evaporating faster than hot water",
        answer: "a"
    }
];