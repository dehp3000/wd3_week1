document.querySelector("#blog h2").innerHTML = "Best Parks Myrtle Beach <strong>South Carolina</strong>";
//use ajax to load JSON file
var xhr = new XMLHttpRequest();
xhr.onload = function(){
	//save JSON data
	var data = JSON.parse(xhr.responseText);
	var locationSection = document.querySelector('#blog');
	if(locationSection){

		var locations = '';
		for(var i = 0; i < data.locations.length; i++){
			locations+='<article>';
			locations+='<p class="thumbnail"><img src ="'+data.locations[i].image+
			'"alt="'+data.locations[i].location+'"></p>';
			locations+= '<p>'+data.locations[i].description+'</p>';
			locations +='<p><button onclick="location.href ='+data.locations[i].more+';">Load More</button></p>';
			console.log("more = "+data.locations[i].status);
			//<input type="button" onclick="location.href='https://google.com';" value="Go to Google" />
			locations+='</article>';

		}
		locationSection.querySelector('h2').insertAdjacentHTML('afterend',locations);
	}
}

//call ajax
xhr.open('GET','https://raw.githubusercontent.com/dehp3000/wd3_week1/master/js/data.JSON',true); 
xhr.send(null);