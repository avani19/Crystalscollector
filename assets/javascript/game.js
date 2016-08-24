$(document).ready(function(){
    var selectedNumbers=[20];
    var selectedNumbersx=[1];
    var selectedNumbersy=[14];
    var selectedNumbersz=[8];
    var counter=0;
    var score = "Your total score is: ";
    var x = document.getElementById("randomNumber")
    x.innerHTML = Math.floor((Math.random() * 100) - 1);
  
    $("#randomNumber");
    // console.log("working properly");
    $("#score").text(score + counter);
  
  for(i=0; i<selectedNumbers.length; i++){
    // give every image an single value
     var crystalImage = $('<img>');

     crystalImage.attr('data-num', selectedNumbers[i]);
     crystalImage.attr('src', 'assets/images/ruby1.jpg');
      crystalImage.attr('alt', 'crystals');
       crystalImage.addClass('image');
       // for every single value add an image
       $('#img1').append(crystalImage);
  }
   for(i=0; i<selectedNumbersx.length; i++){
    // give every image an single value
     var crystalImage = $('<img>');

     crystalImage.attr('data-num', selectedNumbersx[i]);
     crystalImage.attr('src', 'assets/images/ruby4.jpg');
      crystalImage.attr('alt', 'crystals');
       crystalImage.addClass('image');
       // for every single value add an image
       $('#img1').append(crystalImage);
  }
  for(i=0; i<selectedNumbersy.length; i++){
    // give every image an single value
     var crystalImage = $('<img>');

     crystalImage.attr('data-num', selectedNumbersy[i]);
     crystalImage.attr('src', 'assets/images/ruby2.jpg');
      crystalImage.attr('alt', 'crystals');
       crystalImage.addClass('image');
       // for every single value add an image
       $('#img1').append(crystalImage);
  }
  for(i=0; i<selectedNumbersz.length; i++){
    // give every image an single value
     var crystalImage = $('<img>');

     crystalImage.attr('data-num', selectedNumbersz[i]);
     crystalImage.attr('src', 'assets/images/ruby3.jpg');
      crystalImage.attr('alt', 'crystals');
       crystalImage.addClass('image');
       // for every single value add an image
       $('#img1').append(crystalImage);
  }

  $('.image').on('click', function(){
      counter = counter + parseInt($(this).data('num'));;
      $("#score").text(score + counter);
      var w = "Wins: ";
      var l = "Losses: ";
      var ww = "you won!!"
      var win = 0;
      var loss = 0;
      if(counter == x.innerHTML){
        win++;
       $("#win").text(w + win);
      }else if (counter > x.innerHTML){
        loss++;
        $("#loss").text(l + loss);
      }
    });

});

