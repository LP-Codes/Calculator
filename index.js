var c = (document.getElementById("inpt1").value = "");

function clearall() {
  //   alert("s");
  document.getElementById("inpt1").value = "";
}

function divd1() {
    let lastChar = document.getElementById("inpt1").value;
    // console.log(lastChar.slice(-1))
     
    
    if (lastChar.slice(-1)=="/") {
    console.log("repeated press ignoring")
    
    }
    else{
        document.getElementById("inpt1").value += "/";
    }
  
//   document.getElementById("inpt1").value += "/";
}
function plus(e) {
   let lastChar = document.getElementById("inpt1").value;
    // console.log(lastChar.slice(-1))
     
    
    if (lastChar.slice(-1)=="+") {
    console.log("repeated press ignoring")
    
    }
    else{
        document.getElementById("inpt1").value += "+";
    }
  
    
 


  

  
      
    
  
}
function minus() {
    let lastChar = document.getElementById("inpt1").value;
    // console.log(lastChar.slice(-1))
     
    
    if (lastChar.slice(-1)=="-") {
    console.log("repeated press ignoring")
    
    }
    else{
        document.getElementById("inpt1").value += "-";
    }
  
}
function into() {
    let lastChar = document.getElementById("inpt1").value;
    // console.log(lastChar.slice(-1))
     
    console.log(lastChar.slice(1))
    if (lastChar.slice(-1)=="*") {
    console.log(lastChar.slice(-1));
    console.log("repeated press ignoring")
    
    }
    else{
        document.getElementById("inpt1").value += "*";
    }
  
}

function inpt1() {
  document.getElementById("inpt1").value += 1;
}
function inpt2() {
  document.getElementById("inpt1").value += 2;
}

function inpt3() {
  document.getElementById("inpt1").value += 3;
}

function inpt4() {
  document.getElementById("inpt1").value += 4;
}

function inpt5() {
  document.getElementById("inpt1").value += 5;
}

function inpt6() {
  document.getElementById("inpt1").value += 6;
}

function inpt7() {
  document.getElementById("inpt1").value += 7;
}

function inpt8() {
  document.getElementById("inpt1").value += 9;
}

function inpt9() {
  document.getElementById("inpt1").value += 9;
}

function inpt0() {
  document.getElementById("inpt1").value += 0;
}

function inptdot() {
  document.getElementById("inpt1").value += ".";
}

function equal1() {
  var c2 = document.getElementById("inpt1").value;
  console.log(c2);

  if (c2 == "") {
    alert("input is empty");
  } else {
    document.getElementById("inpt1").value = eval(
      document.getElementById("inpt1").value
    );
  }
}

document.getElementById("btn1").addEventListener("click", inpt1);
document.getElementById("btn2").addEventListener("click", inpt2);
document.getElementById("clear").addEventListener("click", clearall);
document.getElementById("divd").addEventListener("click", divd1);
document.getElementById("eqal2").addEventListener("click", equal1);
document.getElementById("btn3").addEventListener("click", inpt3);
document.getElementById("btn4").addEventListener("click", inpt4);
document.getElementById("btn5").addEventListener("click", inpt5);
document.getElementById("btn6").addEventListener("click", inpt6);
document.getElementById("btn7").addEventListener("click", inpt7);
document.getElementById("btn8").addEventListener("click", inpt8);
document.getElementById("btn9").addEventListener("click", inpt9);
document.getElementById("btn0").addEventListener("click", inpt0);
document.getElementById("dot").addEventListener("click", inptdot);
document.getElementById("plus").addEventListener("click", plus);
document.getElementById("into").addEventListener("click", into);
document.getElementById("minus").addEventListener("click", minus);

