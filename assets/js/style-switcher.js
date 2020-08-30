// Theme color settings
$(document).ready(function(){

	$("*[theme]").click(function(e){
		e.preventDefault();
		var currentStyle = $(this).attr('theme');
		$('#theme').attr({href: 'assets/css/colors/'+currentStyle+'.css'})
	});

	// color selector
	$('#themecolors').on('click', 'a', function(){
		$('#themecolors li a').removeClass('working');
		$(this).addClass('working')
	});

});
