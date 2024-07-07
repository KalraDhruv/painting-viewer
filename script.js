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
	    
	    const painting = data.find(obj => obj.id == e.target.dataset.id);
	    
	    const title= document.createElement('h2');
	    const artist= document.createElement('h3');

	    title.textContent = painting.title;
	    artist.textContent = painting.artist;

	    figure.appendChild(title);
	    figure.appendChild(artist);
	    figure.appendChild(image);


	    painting.features.forEach((feature)=>{

		const upperLeft = feature.upperLeft;
		const lowerRight = feature.lowerRight;
		const description = feature.description;
	        const rectangle = document.createElement('div');

		rectangle.classList.add('box');		
		const width = lowerRight[0]-upperLeft[0];
		const height = lowerRight[1]-upperLeft[1];


		rectangle.style.position = 'absolute';
		rectangle.style.left = upperLeft[0]+'px';
		rectangle.style.top = upperLeft[1]+'px';
		rectangle.style.width = width+'px';
		rectangle.style.height = height+'px';

		figure.appendChild(rectangle);

	    })

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
