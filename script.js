document.addEventListener('DOMContentLoaded',function(){
    const data = JSON.parse(content);
    const thumbnail = document.getElementById('paintings').querySelector('ul'); 
    thumbnail.textContent = '';

    data.forEach((obj) =>{
	const li= document.createElement('li');
	imageLocation = 'images/small/'+obj.id+'.jpg';
	const img =document.createElement('img');	
	img.src=imageLocation;
	li.appendChild(img);
	thumbnail.appendChild(li);
	console.log(imageLocation);
    })


   


});
