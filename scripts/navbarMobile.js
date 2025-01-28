let active = true; 
const nav = document.querySelector("#menunav");
const button = document.querySelector("#menu-icon");
button.addEventListener("click",()=>{
	if(active){
			nav.style.transform = "translateX(0)";
			active = false;
	}else{
			nav.style.transform = "translateX(-100%)";
			active = true;
		
	}
})