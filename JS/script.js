function inform(){
    alert("나는 alert 입니다.");
    }
function grade(){
    var kor1 = parseInt(document.getElementById("kor1").innerHTML);
    var kor2 = parseInt(document.getElementById("kor2").innerHTML);
    var first=document.getElementById("first_g");
    first.innerHTML=kor1+kor2;
    first.style.color="red"
    var eng1 = parseInt(document.getElementById("eng1").innerHTML);
    var eng2 = parseInt(document.getElementById("eng2").innerHTML);
    var second= document.getElementById("second_g");
    second.innerHTML=eng1+eng2;
    second.style.color="red"
   
    var z1 = parseInt(document.getElementById("z1").innerHTML);
    var z2 = parseInt(document.getElementById("z2").innerHTML);
    var third=document.getElementById("third_g");
    third.innerHTML=z1+z2;
    third.style.color="red"
}