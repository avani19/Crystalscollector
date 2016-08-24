$(document).ready(function(){
  $("#bt1").on("click" , function(){
    var x = document.getElementById("randomNumber")
    x.innerHTML = Math.floor((Math.random() * 100) - 1);
    console.log("working properly");
    $("#randomNumber");

})
})
