$(document).ready(function() {
console.log('app.js loaded');

$.ajax({
	method:'GET',
	url:'/api/places',
	success: handleSuccess,
	error: handleError
});


}); //doc ready ending. DONT DELETE

  function handleSuccess(place){
      place.forEach(function(place){
        renderCountry(place);
      });
  }
  function handleError (err){
    console.log('There is an error', + err); 
  }


// var placeList = [{
//   _id:132,
//   photo:"./images/Barcelona.jpg",
//   country: 'Spain',
//   dateVisited: 'July 2003',
//   notes:"Visited Barcelona."
// },
// {
//   _id:133,
//   photo:"./images/Paris.jpeg",
//   country: 'France',
//   dateVisited: 'July 2003',
//   notes:"Visited Paris, Provence, Nice, and Cassis."
// }];


function renderCountry(place){

	$('#countries').append(`
	      <div data-country-id="country._id" class="row album">
	            <div class="col-md-10 col-md-offset-1">
	              <div class="panel panel-default">
	                <div class="panel-body">

	                <!-- begin album internal row -->
	                  <div class='row'>
	                    <div class="col-md-3 col-xs-12 thumbnail country-photo">
	                      <img src="${place.photo}" alt="country image">
	                    </div>

	                    <div class="col-md-9 col-xs-12">
	                      <ul class="list-group">
	                        <li class="list-group-item">
								<h4 class='inline-header'>Country:</h4>
								<span class='country-name'>${place.country}</span>
	                        </li>

	                        <li class="list-group-item">
								<h4 class='inline-header'>Dates Visited:</h4>
								<span class='dateVisited'>${place.dateVisited}</span>
	                        </li>

	                        <li class="list-group-item">
			                    <h4 class='inline-header'>Notes:</h4>
			                    <span class='dateVisited'>${place.notes}</span>
	                        </li>
	                      </ul>
	                    </div>

	                  </div>
		              <div class='footer'>
		                  <button class='btn btn-primary add-place'>Add Destination</button>
		              </div>
	                </div>

	              </div>

	            </div>

	        </div>`);
}