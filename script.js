function scrollInfo(){
	var sectionInfo = document.querySelector(".gallery--section");
	// var info = document.querySelector(".section--title--wrapper--gal");
	sectionInfo.scrollIntoView({block:'start', behavior:'smooth'});
};	

function scrollAbout(){
	var about = document.querySelector(".about");
	about.scrollIntoView({ block:'start', behavior:'smooth'});
};

