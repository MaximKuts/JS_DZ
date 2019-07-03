var select;
window.onload = function() {
  select = document.getElementById('dropdown');
  console.log(select);
}
var god ="";
changeHiddenInput=(objDropDown) =>{
  var objHidden = document.getElementById("hiddenInput");
  objHidden.value = objDropDown.value;
  god = objHidden.value;
}
 var calcul = document.getElementById("calc");
 var SumAkz="";
 var sum= "";
calcul= ()=>{
   var CenaAvto = document.getElementById("Cena").value;
    var poshlina= CenaAvto*0.1;
var dvig= document.getElementById("ob_bv").value;
dvig <3000?SumAkz=50:SumAkz=100;
var akz= SumAkz*(dvig/1000)*god;
var nds=(+CenaAvto+poshlina+akz)*0.2
sum = (+CenaAvto+poshlina+akz+nds)
result.innerHTML = ("Сумма растаможки авто: "+sum || "");
}

