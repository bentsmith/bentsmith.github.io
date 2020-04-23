
// when the document finishes loading run this function
$(function(){

	//	Set a constant for height of the navigation
	const navOffset = 60;

	//	The slider element
	const $slider = $("#customRange");
	const $navItems = $(".nav-link");


	const sections = {
		0: 'top',
		1: 'about',
		2: 'resume',
		3: 'projects',
		4: 'contact'
	}

	function onChangeSlider(event){
		console.log($(this).val());
		console.log(sections[ $(this).val() ] );

		window.location.hash = sections[$(this).val()];
	}

	function onClickNavItem(event){
		event.preventDefault();

		let hash = new URL($(this).prop('href')).hash;

		navigate(hash);
	}	

	function navigate(hash){
		$("html, body").animate({
		    scrollTop: ($(hash).offset().top - navOffset < 0)? 0 : $(hash).offset().top - navOffset;
		 }, 500);

		window.location.replace(window.location + hash) 
	}

	console.log($slider.val());



	$navItems.on("click", onClickNavItem);
	$slider.on("change", onChangeSlider);	

}) 


