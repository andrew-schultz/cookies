	
$(document).ready(function(){
	var ic = parseInt(Cookies.get('choc'));
	var io = parseInt(Cookies.get('oat'));
	var is = parseInt(Cookies.get('snick'));
	// var ic = 0;
	// var io = 0;
	// var is = 0;
	$('#chocbasket').text(Cookies.get('choc'));
	$('#oatbasket').text(Cookies.get('oat'));
	$('#snickbasket').text(Cookies.get('snick'));



	
		
	$('#choc').on('click', function(){
		ic += 1
		Cookies.set('choc', ic);
		console.log("You've selected " + ic + " chocolate chip cookies");
		console.log(Cookies.get('choc'));
		$('#chocbasket').text(Cookies.get('choc'));
	});

	$('#chocclear').on('click', function(){
		ic = 0
		Cookies.set('choc', 0)
		$('#chocbasket').text(Cookies.get('choc'));
		console.log("Cookies Cleared");
	});

	$('#oat').on('click', function(){
		io += 1
		Cookies.set('oat', io);
		console.log("You've selected " + io + " oatmeal raisin cookies");
		console.log(Cookies.get('oat'));
		$('#oatbasket').text(Cookies.get('oat'));
	});

	$('#oatclear').on('click', function(){
		io = 0
		Cookies.set('oat', 0)
		$('#oatbasket').text(Cookies.get('oat'));
		console.log("Cookies Cleared " + Cookies.get('oat') + ".");
	});

	$('#snick').on('click', function(){
		is += 1
		Cookies.set('snick', is);
		console.log("You've selected " + is + " oatmeal raisin cookies");
		console.log(Cookies.get('snick'));
		$('#snickbasket').text(Cookies.get('snick'));
	});

	$('#snickclear').on('click', function(){
		is = 0
		Cookies.set('snick', 0)
		$('#snickbasket').text(Cookies.get('snick'));
		console.log("Cookies Cleared " + Cookies.get('snick') + ".");
	});

});