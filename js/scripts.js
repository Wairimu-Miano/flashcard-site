$(document).ready(function(){
  $(".word").click(function(event){
    var terms=["JavaScript","Variables","Operators","Functions","Strings","Booleans","Comments"]
    terms.forEach(function(term){
      var wordDefinition=$("#def"+(terms.indexOf(term)+1)+" ."+"definition")
      wordDefinition.slideToggle()
  });
  event.preventDefault()
  });
});
