alert("This cookie clicker is under devloppement. Game version: 1.1");

//variable
var x=0;
var lv=1;

function onclick() {
    x+=lv;
    textUpdate();
    console.log(x);
};

function textUpdate() {
    document.getElementById("point").innerHTML = x+"Cookie"
}

function achiv() {
    if (x=100){
        alert("gg");
    }
}