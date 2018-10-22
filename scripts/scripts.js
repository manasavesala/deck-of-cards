


$(document).ready(function(){

  $("form").submit(function(event){
    event.preventDefault();
    var suites = ["spades", "clubs", "diamonds", "hearts"];
    var ranks = ["A", "K", "Q", "J",2,3,4,5,6,7,8,9,10];
    var deck =[];
    suites.forEach(function(card){
      ranks.forEach(function(number){
        deck.push(number + " of " + card);
        var combinedCard = (number + " of " + card);
          if(deck.length < 52){
            $(".deck").append("<li>" + combinedCard);
          }
      });
    });
  });
});
