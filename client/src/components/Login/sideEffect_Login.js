


function getFocus(e) {
    let getId = document.getElementById("s-name_login");
    let label = document.getElementById("l-name_login");
    console.log(e.target.id)
    let element = document.getElementById(e.target.id);
    if(getId.style.color != "rgb(99, 99, 182)"){
    label.style.visibility = "hidden";
    getId.style.background = "white";
    getId.style.color = " rgb(99, 99, 182)";
    element.style.border = "2px solid rgba(106, 18, 156,1)";
    }
 }
 function getBlur(e) {
    let element = document.getElementById(e.target.id);
   var getId = document.getElementById("s-name_login");
    if (getId.style.color == "rgb(99, 99, 182)" &&  e.target.value == "") {
       document.getElementById("l-name_login").style.visibility = "visible";
       getId.style.color = "transparent";
       getId.style.background = "transparent";
       element.style.border = "2px solid rgba(106, 18, 156,0.5)";
     }
 
 }
 
 
 function getFocus1(e) {
    var getId = document.getElementById("s-pwd_login");
    var label = document.getElementById("l-pwd_login");
    let element = document.getElementById(e.target.id);
    if(getId.style.color != "rgb(99, 99, 182)"){
    label.style.visibility = "hidden";
    getId.style.background = "white";
    getId.style.color = " rgb(99, 99, 182)";
    element.style.border = "2px solid rgba(106, 18, 156,1)";
 }
 }
 function getBlur1(e) {
   var getId = document.getElementById("s-pwd_login");
   let element = document.getElementById(e.target.id);
    if (getId.style.color == "rgb(99, 99, 182)" &&  e.target.value == "") {
       document.getElementById("l-pwd_login").style.visibility = "visible";
       getId.style.color = "transparent";
       getId.style.background = "transparent";
       element.style.border = "2px solid rgba(106, 18, 156,0.5)";
     }
 
 }


  function show(e) {
     
        let element = document.getElementById(e.target.id)
        element.style.visibility = "collapse"
        document.getElementById('o-eye_login').style.visibility = "visible"
        document.getElementById('pwd_login').type = "text"
        
 }
 function show1(e) {
     
    let element = document.getElementById(e.target.id)
    element.style.visibility = "collapse"
    document.getElementById('c-eye_login').style.visibility = "visible"
    document.getElementById('pwd_login').type = "password"
    
}
export { getFocus, getBlur, getFocus1, getBlur1, show, show1};
 