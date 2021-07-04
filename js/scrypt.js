const menuToggle = document.querySelector('.toggle');
const exploreBtn = document.querySelector('.explore');
const carouselVisible = document.querySelector('#carousel')
const textVisible = document.querySelector('.text')
const mainImage = document.querySelector('.main-image')
let btn_prev = document.querySelector('.prev');
let btn_next = document.querySelector('.next');
let images = document.querySelectorAll('#carousel .photos img');



const Menu = function Menu () {
	const menuToggle = document.querySelector('.toggle');
	const menu = document.querySelector('.menu');
	const menuItem = document.querySelectorAll('.menu-item')
	menuToggle.classList.toggle('active')
	menu.classList.toggle('active')
	menuItem.forEach(item => {
	item.classList.toggle('active')
	})
}

if (menuToggle) {
menuToggle.addEventListener('click', ()=>{
	Menu()		
	if(mainImage){
		mainImage.style.display="block"
	}
	if(textVisible){
		textVisible.style.display="block";
	}
	if(carouselVisible) {
		carouselVisible.style.display="none";
	}
	})
}
//включаем карусель
// const exploreBtn = document.querySelector('.explore');
// const carouselVisible = document.querySelector('#carousel')
// const textVisible = document.querySelector('.text')
if(exploreBtn){
exploreBtn.addEventListener('click', ()=>{
	if(menuToggle.classList.value =='toggle active'){
		Menu();	
	}
	mainImage.style.display="none";
	textVisible.style.display="none";
	carouselVisible.style.display="block";
	})
}

// Карусель

let Carousel = function Carousel (images,btn_next,btn_prev) {
	let numImage = 0;
	if (images[numImage]) {
	images[numImage].style.display = 'none';
	numImage++ ;
	if(numImage >= images.length){
			numImage = 0; 
	}
	btn_prev.onclick = function(){
	images[numImage].style.display = 'none';
	numImage = numImage - 1;
		if(numImage < 0){
		numImage = images.length - 1;
	}
		images[numImage].style.display = 'block';
	}
	btn_next.onclick = function(){
	images[numImage].style.display = 'none';
	numImage = numImage + 1;
		if(numImage > images.length - 1){
		numImage = 0;
	}
		images[numImage].style.display = 'block';
	}
	images[0].style.display='block'
	}
}

Carousel(images,btn_next,btn_prev)





// const menuToggle = document.querySelector('.toggle');
// 		//const showcase = document.querySelector('.showcase');
// 		const menuItem = document.querySelectorAll('.menu-item')
// 		menuToggle.addEventListener('click', ()=>{
// 			menuToggle.classList.toggle('active')
// 			//showcase.classList.toggle('active')
// 			menuItem.forEach(item => {
// 			item.classList.toggle('active')
// 			})	
//             console.log(menuItem)	
// 		})

const yaltaId = document.querySelector('#yalta');
const yaltaGallery = document.querySelector('.yalta');
yaltaId.addEventListener('click', ()=>{
	yaltaGallery.classList.toggle('active');
})

const alushtaId = document.querySelector('#alushta');
const alushtaGallery = document.querySelector('.alushta');
alushtaId.addEventListener('click', ()=>{
	alushtaGallery.classList.toggle('active');
})

const gursufId = document.querySelector('#gursuf');
const gursufGallery = document.querySelector('.gursuf');
	gursufId.addEventListener('click', ()=>{
	gursufGallery.classList.toggle('active');
})


const gallery = document.querySelectorAll('.gallery-item__image'); 
if(gallery){
	gallery.forEach(item => {
		item.addEventListener('click', ()=>{
		Carousel(gallery,btn_prev,btn_next);
		})
	})
}

