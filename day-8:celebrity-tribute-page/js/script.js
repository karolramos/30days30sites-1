
var fadeInNav = document.getElementById('fadein-nav');

var standardNav = document.getElementById('standard-nav');
var navHeight = standardNav.offsetHeight;
var windowHeight = window.innerHeight;

var mobileNav = document.getElementById('mobile-nav');
var mobileNavHeight = mobileNav.offsetHeight;

var mq = window.matchMedia("(max-width: 599px)").matches;

// var reflections = document.getElementById('reflections');

var shootingStar = document.getElementById('shooting-star');

$(document).ready(function(){

	$('.memoriam-text').fadeIn(4000);
	
    setTimeout(function(){
    	$('#memoriam').fadeOut({
    		duration: 6000,
    		queue: false
    	});
    }, 4000);


   if (mq){
   	mobileNav.classList.add('animation');
   	//standardNav.style.display = 'none';
   	window.addEventListener('scroll', function(){

   		if ( (window.scrollY >= windowHeight - mobileNavHeight) && (window.scrollY < shootingStar.offsetTop - mobileNavHeight) ){
   			mobileNav.style.display = 'flex';
   			mobileNav.style.opacity = '1';
   			mobileNav.style.backgroundColor = '#010126';
   		} else if (window.scrollY >= (shootingStar.offsetTop - mobileNavHeight) ) {
   			mobileNav.style.display = 'none';
   			mobileNav.classList.remove('animation');
   		} else {
   			mobileNav.style.display = 'flex'
   			mobileNav.style.backgroundColor = 'transparent';
   		}
   		
   	});
   } else {
   	//standardNav.classList.add('animation');
   	fadeInNav.classList.add('animation');
   	//mobileNav.style.display = 'none';
   	window.addEventListener('scroll', function(){

   		if ( (window.scrollY >= windowHeight - navHeight) && (window.scrollY < shootingStar.offsetTop - navHeight) ){
   			standardNav.style.display = 'block';
   			standardNav.style.opacity = '1';
   			fadeInNav.style.opacity = '1';
   			standardNav.style.backgroundColor = '#010126';
   		}  else if (window.scrollY >= (shootingStar.offsetTop - navHeight)){
   			standardNav.style.display = 'none';
   			//standardNav.classList.remove('animation');
   			fadeInNav.classList.remove('animation');

   		} else {
   			standardNav.style.display = 'block';
   			fadeInNav.style.opacity = '1';
   			standardNav.style.backgroundColor = 'transparent';
   		}
   		
   	});
   }



/*
    if (mq){
    	window.addEventListener('scroll', function(){

    		if ( (window.scrollY >= windowHeight - mobileNavHeight) && (window.scrollY < shootingStar.offsetTop - mobileNavHeight) ){
    			mobileNav.style.backgroundColor = '#010126';
    		} else {
    			mobileNav.style.backgroundColor = 'transparent';
    		}
    		
    	});
    } else {
    	window.addEventListener('scroll', function(){

    		if ( (window.scrollY >= windowHeight - navHeight) && (window.scrollY < shootingStar.offsetTop - navHeight) ){
    			standardNav.style.backgroundColor = '#010126';
    		}  else {
    			standardNav.style.backgroundColor = 'transparent';

    		}
    		
    	});
    }

*/


}) 



/*

window.addEventListener('scroll', function(){

	if ( (window.scrollY >= windowHeight - navHeight) && (window.scrollY < shootingStar.offsetTop - navHeight) ){
		standardNav.style.backgroundColor = '#010126';
	}  else {
		standardNav.style.backgroundColor = 'transparent';

	}
	
});


*/

