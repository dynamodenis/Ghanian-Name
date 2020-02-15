# MY GHANIAN NAME APPLICATION

DEVELOPER: Denis Mbugua

EMAIL: dmbugua66@gmail.com

VISIT SITE: [My Ghanian Name]( https://dynamodenis.github.io/Ghanian-Name/)

## APP DESCRIPTION

---

Everyone can easily tell the year ,month and the day they were born, but most peope can'ttell the specific day which takes away the excitement of a birthday. But luckily for us in Ghana they give a name according to the day a child is born, this exciting method is called ***AKAN NAMES.***  How exciting would t be if I had a Ghanian name. Well you don't have to worry cause I can give you a legit name. Just fill below and try it.....

# BEHAVIOUR DRIVEN DEVELOPMENT(BDD)

---
This application is supposed to fill your curiosity about having a name in a country where you dont consider your home.
you just input information in the text boxes provided.
### **Dates inputs**

You are going to input your birthdates in critria given that is **year**,**month**,**day** born where we use the following formula to determine the specific day of the week number.
```
Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

 where;

 CC - is the century digits. For example 1989 has CC = 19

 YY - is the Year digits (1989 has YY = 89)

 MM -  is the Month

 DD - is the Day of the month 

 mod - is the modulus function ( % )
 ```
The general formula will then be transferred to javascript and rounded off to the nearest whole number.
```
var getDate=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
getDate=Math.floor(getDate);
```

 After date inputs you are required to choose your gender for allocation of names depending on your gender to avoid gender insesitive names. The names are arranged as arrays below:
 ```
 var maleClicked =["Kwasi","Kwado","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleClicked=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
```

To receive the gender chosen an ***if statement is called*** as illustrated below to determine gender:
```
var sex;
if(gender==="male"){
    sex= maleClicked;
}else if(gender==="female"){
    sex=femaleClicked;
}else{
    alert("Insert gender.")
}
```

### **When TRY IT is clicked**

When clicked Try It button a function ***btnClick()*** is run which changes the inputs fron string to integers. The year is sliced into two using the ***.slice()*** method to separate the year into CC & YY where CC= century digits i.e in 1994 CC is the 19 while the YY is the year 94.
This figures will then be used in the formula above. This is how the dates are sliced and turned to integers:
```
function btnClick(){
    var date=document.getElementById("year").value;
    var MM=parseInt(document.getElementById("month").value);
    var DD=parseInt(document.getElementById("day").value);
    var CC=parseInt(date.slice(0,2));
    var YY=parseInt(date.slice(2,4));
```
### **Output**

After the day and gender are received and assigned the ouput is ready. The output will be displayed on the landing page of your site. The day of the week received will then choose from the array name provided and will be called :
```
var answer=sex[getDate];
answer=document.getElementById("display").innerHTML="Congratulation your Ghanian name is"  + answer;
```
---
## Project Development Contribution

---

Fell free to contribute or help to make the portfolio module better. Follow the above instructiom.

- Fork the project repository
- Creat this new Branch (git checkout -b improve-portfolio)
- Make intended changes and Add the changes made
- Make the commit(**git commit -m "improve-ghanian app"**)
- Create an upstream if u dont have one(**git remote add origin https://github.com/dynamodenis/Ghanian-Name.git**)
- Push the changes to my repo(**git push origin improve-ghanian app**)
- Create a pull request.

## Bug Request

---

Just by any chance you get caught up or the site is not responding to certain results, feel to post your issue [**here**](https://github.com/dynamodenis/Ghanian-Name/issues/new)

## License

---
By Dynamo Denis Mbugua

License by  [MIT](License.txt)

