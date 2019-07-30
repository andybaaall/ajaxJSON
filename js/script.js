// console.log('hello world');

$(document).ready(function(){

  let firstName;
  let lastName;
  let email;
  let gender;
  let title;
  let country;
  let age;

  const btn = $('#getPeople');
  btn.click(function(){
    getPeople(minAge , maxAge);
  })

  let minAge = 0;
  let maxAge = 100;

  $('#currentRange').text(`${minAge} - ${maxAge}`);

  $('#ageRangeSlider').slider({
    range: true,
    min: 0,
    max: 100,
    values: [0, 100],
    slide: function(event, ui){

    },
    stop: function (event, ui){
      console.log(ui.values);
      $('#currentRange').text(`${ui.values[0]} - ${ui.values[1]}`);
      minAge = ui.values[0];
      maxAge = ui.values[1];
      console.log(`min age is ${minAge}, max age is ${maxAge}`);
      getPeople(minAge , maxAge);
    }
  });

  getPeople = (min , max) => {
    console.log('get the people');
    $.ajax({
      // ajax requests need the five following parameters:
      type: 'GET',
      url: `https://my.api.mockaroo.com/peopledata.json?key=d9d07c80&min_age=${min}&max_age=${max}`,
      dataType: 'json',
      success: function(data){
        for (var i = 0; i < 10; i++) {
          console.log(data[i]);
          firstName = data[i].first_name;
          lastName = data[i].last_name;
          email = data[i].email;
          gender = data[i].gender;
          title = data[i].title;
          country = data[i].country;
          age = data[i].age;

          // const cardContainer = $('#cardContainer');
          // cardContainer.innerHTML += 'hello world';

          let cardContainer = document.getElementById('cardContainer');
          cardContainer.innerHTML += ` <div class="card m-2 w-50">
                                          <div class="card-body">
                                              <h4 class="card-title">${firstName} ${lastName}</h4>
                                                <div class="card-text"> email : ${email}</div>
                                                <div class="card-text"> country : ${country}</div>
                                                <div class="card-text"> age : ${age}</div>
                                            </div>
                                        </div>`;


        } // for loop
      }, // function(success)
      error: function(error){
        // bad URL, no connection, bad request, errors in json file ...
        console.log(error);
        console.log('error');
      } // function(error)
    }) // ajax request
  } // getPeople()


});
