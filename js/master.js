function Place(location, landmark, season){
  this.location = location;
  this.landmark = landmark;
  this.season = season;
}


$(document).ready(function(){
  $('#buttonSubmit').click(function() {
    var location = $('input#placeForm').val();
    var landmark = $('input#landmarkForm').val();
    var season = $('input#seasonForm').val();
    var newPlace = new Place(location, landmark, season);

    $('.locationNameList').append("<li><span class='locationNames'>" + newPlace.location + "</span></li>");

    $('.locationNames').last().click(function() {
      $('#showLocation').show();
      $('.landmarkInfo').text(newPlace.landmark);
      $('.seasonInfo').text(newPlace.season);
    });
    event.preventDefault();
  });
});
