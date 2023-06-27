const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// JavaScript
const navToggle = document.getElementById('navToggle');
const navbarMenu = document.querySelector('.navbar__menu');

navToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

$('.announcement-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		prevArrow: $('.prev-arrow-announcement'),
		nextArrow: $('.next-arrow-announcement')
	});

	$('.events').slick({
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		prevArrow: $('.prev-arrow-events'),
		nextArrow: $('.next-arrow-events')
	});

// Get the video element
var video = document.getElementById('autoplay-video');

// Function to check if an element is visible in the viewport
function isElementVisible(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function handleScroll() {
  if (isElementVisible(video)) {
    video.play();
  } else {
    video.pause();
  }
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);
	
const container = document.querySelector('.container');
container.addEventListener('wheel', (event) => {
  event.preventDefault();
  container.scrollLeft += event.deltaY;
});


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
  }

  function toggleDropdown() {
	var dropdown = document.getElementById("myDropdown");
	dropdown.classList.toggle("show");
  }
  
  window.onclick = function(event) {
	if (!event.target.matches(".dropbtn")) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  for (var i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains("show")) {
		  openDropdown.classList.remove("show");
		}
	  }
	}
  };
  