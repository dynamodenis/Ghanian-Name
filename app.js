function getDate(){
    var day=new Date(document.getElementById("myDate").value);
    dd=day.getDay();
    mm=day.getMonth();
    yy=day.getFullYear();
}

var dd, mm,yy,malenames,femalenames 
var Mselected;
var Fselected;

function male(){
    Mselected=true;
}
function female(){
    Fselected=true;
}

function btnClicked(){
    getDate();
    if(Mselected===true){
        Manswer=malenames[dd];
        alert(Manswer);
    }
    else if(Mselected===true){
        Fselected===true;
    }
    else if(Fselected===true){
        Fanswer= femalenames[dd];
        alert(Fanswer);
    }
    else{
        Mselected===true;
    }

}
   
malenames=["kwasi","kwadwo","kwabena","kwaku","yaw","kofi","kwame"];
femalenames=["Akosua","Adwao","Abenaa","Akua","Yaa","Afua","Ama"];