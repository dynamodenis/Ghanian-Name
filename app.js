function btnClick(){
    var write =new Date(document.getElementById("dombox").value);
    var d=write.getDay();
    console.log(d);
}
var males=["Kwasi","Kwadwo", "Kwabena", "Kwaku","Yaw","Kofi","Kwame"];
var females=["Akosua","Adwao","Abenaa","Akua","Yaa","Afua","Ama"];

var males;
var females;
var d;
var Mselected;
var Fselected;
var malename;
var femalename;

 
function output(){
    btnClick();
    if(Mselected===true){
        malename=males[d];
        alert(malename);
    }
    else if(Mselected===false){
        Fselectedd===true;
    }
    else if(Fselected===true){
        femalename=females[d];
        alert(femalename);
    }
    else{
        Mselected===true;
    }
}

function male(){
    Mselected=true;
}
function female(){
    Fselected=true;
}