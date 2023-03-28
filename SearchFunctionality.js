

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3175a60233msh10bd93a81a5f8b0p171adfjsnd5e2df15191d',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};
   
	async function searchPlace(){
		const searchText = document.getElementById("place").value;
		localStorage.setItem('placeName',searchText);
		const res = await fetch(`https://travel-advisor.p.rapidapi.com/locations/search?query=${searchText}&limit=4`, options)
		.then(response => response.json());
		const firstLocationId = res.data[0].result_object.location_id;
		const places = await fetch(`https://travel-advisor.p.rapidapi.com/attractions/list?location_id=${firstLocationId}&limit=6`, options)
			.then(response => response.json());
			console.log(places);
			
			localStorage.setItem('apiData',JSON.stringify(places.data));
			window.location.href= 'places.html';
			//showData();
			
}

function showData(){
		const data = JSON.parse(localStorage.getItem('apiData'));
		data.forEach((place, index) => {
			const card = document.getElementById(`card${index + 1}`);
		   card.style.visibility ='visible';
			// update the title
			const title = card.querySelector('.title');
			title.textContent = place.name;
		  
			// update the description
			const description = card.querySelector('.description');
			description.textContent = place.description;
		  
			// update the image
			// const image = card.querySelector('.image');
			// image.src = response.image;
			// image.alt = response.title;
		  
			// update the opening hours
		  
			// update the location
			const location = card.querySelector('.location');
			location.textContent = place.data.address;
		  });	

}