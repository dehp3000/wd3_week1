document.querySelector("#blog h2").innerHTML = "Best Parks Myrtle Beach <strong>South Carolina</strong>";
//use ajax to load JSON file
var xhr = new XMLHttpRequest();

xhr.onload = function(){
	console.log(xhr.status);
	if(xhr.status == 200){
		//save JSON data
		var data = JSON.parse(xhr.responseText);
		var locationSection = document.querySelector('#blog');
		if(locationSection){

			var locations = '';
			for(var i = 0; i < data.locations.length; i++){
				locations+='<article>';
				locations+='<p class="thumbnail"><img src ="'+data.locations[i].image+'" alt="'+data.locations[i].location+'"></p>';
				locations+='<p><h3>'+data.locations[i].location+'</h3></p>';
				locations +='<p>'+data.locations[i].description+'</p>';
				locations+= '<p><h4>City: <strong>'+data.locations[i].city+'</strong></h4></p>';
				locations+='<p><h5>Stars: ';
				var c = data.locations[i].rating;
				for ( var b = 5; b >= 0; b--) {
					if( b <= c){
						locations+='<span class ="fa fa-star checked"></span>';
					}else{
						locations +='<span class ="fa fa-star"></span>';
					}
				}
				locations+=data.locations[i].rating+' out of 5';
				locations+='<br>Status: '+data.locations[i].status+'</h5></p>';
				locations +='<a href="https://southcarolinaparks.com/">More info</a></p>';
				locations+='</article>';
			}
			locationSection.querySelector('h2').insertAdjacentHTML('afterend',locations);
		}
	};
};

//call ajax
xhr.open('GET','https://dehp3000.github.io/wd3_week1/js/data.json',true); 
xhr.send();