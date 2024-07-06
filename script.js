document.addEventListener('DOMContentLoaded',function(){
    const data = JSON.parse(content);
    const thumbnail = document.getElementById('paintings').querySelector('ul'); 
    const figure = document.querySelector('figure');
    
    // Event Handler for handling image clicked
    thumbnail.addEventListener("click",(e)=>{
	if(e.target && e.target.nodeName == "IMG") {
	    figure.text
	    
	    console.log('You clicked image with id=' + e.target.dataset.id);

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
