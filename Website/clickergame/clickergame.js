window.addEventListener('DOMContentLoaded',init,false);

var numpointsadd;
var numpoints;
var pcost;
var ac;
var acost;
var t = new Date();

function init() {
    alert ('Welcome to my game!');
    var buttons = document.getElementsByTagName("button");
    var button1 = buttons[1];
    var button2 = buttons[2];
    var button3 = buttons[3];
    var showhidebutton = buttons[0];
    showhidebutton.addEventListener('click',show_hide,false);
    button1.addEventListener('click',addpoints,false);
    button2.addEventListener('click',addpoints2,false);
    button3.addEventListener('click',autoclickyf,false);
    numpointsadd = 1;
    numpoints = 0;
    pcost = 10;
    document.getElementById("costid").innerHTML = pcost;
    ac = 1;
    acost = Math.round(Math.pow(ac, 1.1) * 50);;
    document.getElementById("costid2").innerHTML = acost;
    document.getElementById("autoc").innerHTML = ac;
    setInterval(runac, 1000);
    }
    
function runac() {
    for (i=0; i<ac; i++){addpoints();}
}

function addpoints() {
    var points = document.getElementById("points").innerHTML;
    var points2 = points / 1;
    numpoints = points2 + numpointsadd;
    document.getElementById("points").innerHTML = numpoints;
}

function addpoints2() {
    var currpoints = document.getElementById("points").innerHTML;
    currpoints = currpoints / 1;
    if (currpoints >= pcost){
        numpointsadd = numpointsadd + 1;
        currpoints = currpoints - pcost;
    }
    document.getElementById("points").innerHTML = currpoints;
    pcost = Math.round(Math.pow(numpointsadd, 1.1) * 10);
    document.getElementById("costid").innerHTML = pcost;
    document.getElementById("ppc").innerHTML = numpointsadd;
}

function autoclickyf() {
    var currpoints = document.getElementById("points").innerHTML;
    currpoints = currpoints / 1;
    if (currpoints >= acost){
        ac = ac + 1;
        currpoints = currpoints - acost;
    }
    document.getElementById("points").innerHTML = currpoints;
    acost = Math.round(Math.pow(ac, 1.5) * 50);
    document.getElementById("costid2").innerHTML = acost;
    document.getElementById("autoc").innerHTML = ac;
}

function show_hide() {
    var p = document.getElementById("instructions");
    if (p.style.display == "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
}