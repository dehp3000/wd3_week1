document.querySelector("#blog h2").innerHTML = "Best Parks Myrtle Beach <strong>South Carolina</strong>";
//use ajax to load JSON file
var xhr = new XMLHttpRequest();
xhr.onload = function(){
	//save JSON data
	var data = JSON.parse(xhr.responseText);
	var locationSection = document.querySelector('#blog');
	console.log(xhr.status);
	if(locationSection){

		var locations = '';
		for(var i = 0; i < data.locations.length; i++){
			locations+='<article>';
			locations+='<p class="thumbnail"><img src ="'+data.locations[i].image+
			'"alt="'+data.locations[i].location+'"></p>';
			locations+= '<p>'+data.locations[i].description+'</p>';
			locations +='<p><a href="www.test.com">Load More</a></p>';
			console.log("more = "+data.locations[i].status);
			//<input type="button" onclick="location.href='https://google.com';" value="Go to Google" />
			locations+='</article>';

		}
		locationSection.querySelector('h2').insertAdjacentHTML('afterend',locations);
	}
};

//call ajax
xhr.open('GET','https://dehp3000.github.io/wd3_week1/js/data.JSON',true); 
xhr.send(null);