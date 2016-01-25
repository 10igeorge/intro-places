describe('Place', function() {
  it('will pass true if all objects match constructor', function() {
    var newPlace = new Place("Vancouver, BC", "Tim's House", "Winter");
    expect(newPlace.location).to.equal("Vancouver, BC");
    expect(newPlace.landmark).to.equal("Tim's House");
    expect(newPlace.season).to.equal("Winter");
  });
});




// Example Spec below:

// describe('functionname', function(){
//   it('first spec here...', function(){
//     expect(functionname(parameter)).to.equal('placeholder');
//   });
// });
