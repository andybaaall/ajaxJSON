// console.log('hello world');

$(document).ready(function(){

  let firstName;
  let lastName;
  let email;
  let gender;
  let birthYear;
  let city;
  let idealBreakfast;

  const btn = $('#getPeople');
  btn.click(function(){
    // console.log('got a click');
    $.ajax({
      // ajax requests need the five following parameters:
      type: 'GET',
      url: 'data/MOCK_DATA.json',
      dataType: 'json',
      success: function(data){
        for (var i = 0; i < 10; i++) {
          firstName = data[i].first_name;
          lastName = data[i].last_name;
          email = data[i].email;
          gender = data[i].gender;
          birthYear = data[i].birth_year;
          city = data[i].city;
          idealBreakfast = data[i].ideal_breakfast;

          // const cardContainer = $('#cardContainer');
          // cardContainer.innerHTML += 'hello world';

          let cardContainer = document.getElementById('cardContainer');
          cardContainer.innerHTML += `<div class="card m-2">
                                        <div class="card-body">
                                          <h4 class="card-title">${firstName} ${lastName}</h4>
                                          <div class="card-text"> birth year : ${birthYear}</div>
                                          <div class="card-text"> ideal breakfast : ${idealBreakfast}</div>
                                        </div>
                                      </div>`;


        }
      },
      error: function(error){
        // bad URL, no connection, bad request, errors in json file ...
        console.log(error);
        console.log('error');
      }
    })
  })


});
