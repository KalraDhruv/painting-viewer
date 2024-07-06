document.addEventListener('DOMContentLoaded',function(){
    const data = JSON.parse(content);
    const thumbnail = document.getElementById('paintings').querySelector('ul'); 
    const figure = document.querySelector('figure');
    
    // Event Handler for handling image clicked
    thumbnail.addEventListener("click",(e)=>{

	if(e.target && e.target.nodeName == "IMG") {
	    figure.textContent = '';
	    imageLocation = 'images/large/'+e.target.dataset.id+'.jpg';

	    console.log(imageLocation);
	    const image = document.createElement('img');

	    image.src=imageLocation;
	    figure.appendChild(image);
	    
	    const painting = data.find(obj => obj.id == e.target.dataset.id);
	    
	    const title= document.createElement('h2');
	    const artist= document.createElement('h3');

	    title.textContent = painting.title;
	    artist.textContent = painting.artist;

	    figure.appendChild(title);
	    figure.appendChild(artist);

	}
    })

    // Emptying the content inside thumbnail
    thumbnail.textContent = '';

    // Loop for making thumbnails and adding id to each image.
    data.forEach((obj) =>{
	const li= document.createElement('li');

	imageLocation = 'images/small/'+obj.id+'.jpg';
	const img =document.createElement('img');	

	img.dataset.id = obj.id;
	img.src=imageLocation;

	li.appendChild(img);
	thumbnail.appendChild(li);

	console.log(imageLocation);
    })


   


});
