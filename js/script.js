// console.log('hello world');

$(document).ready(function(){

  const btn = $('#getPeople');
  btn.click(function(){
    // console.log('got a click');
    $.ajax({
      // ajax requests need the five following parameters:
      type: 'GET',
      url: 'people.json',
      dataType: 'json',
      success: function(data){
        console.log('success');
        console.log(data);
      },
      error: function(error){
        // bad URL, no connection, bad request, errors in json file ...
        console.log(error);
        console.log('error');
      }
    })
  })

});
