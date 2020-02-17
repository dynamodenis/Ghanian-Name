function btnClick(){
    var year=document.getElementById('year').value;
    var MM=parseInt(document.getElementById('month').value);
    var DD=parseInt(document.getElementById('day').value);
    var CC=parseInt(year.slice(0,2));
    var YY=parseInt(year.slice(2,4));

    var DOB=[year,MM,DD];
    var fullName=DOB.join("/");


var maleClicked =["Kwasi","Kwado","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleClicked=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var gender=document.getElementById("gender").value;

var getDate=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
getDate=Math.floor(getDate);
alert(getDate);

var sex;
if(gender==="male"){
    sex= maleClicked;
}else if(gender==="female"){
    sex= femaleClicked;
}else{
    alert("Insert gender.")
}

//set conditions of the values accepted in the text box//

if(MM<1 || MM>12){
    alert("Please insert correct month");
}
if(DD<1 || DD>31){
    alert("Please insert the correct date");
}
var answer;
var answer=sex[getDate];
/*answer=document.getElementsById('answer');*/
alert("Congratulation you were born on" +" "+ fullName +" " + "and your Ghanian name is"  +" "+ answer);
}