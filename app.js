function btnClick(){
    var da=new Date(document.getElementById('myDate').value);
    // var cc=da.slice(0,2);
    // var yy=da.slice(2,4);
    //var mm=da.slice(5,7);
    var cc=da.getDate();
    var mm=da.getMonth();
    var yy=da.getFullYear(); 
    //alert(year);
    alert(cc);
    alert(mm);
    alert(yy);
}
 