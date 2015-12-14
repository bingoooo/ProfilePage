console.log('Linked : script.js');

$(document).ready(function(){
	console.log('Linked : zepto');
	$('.text-info').hide();
	$('.default').show();

	$('#personal-data').on('click', function(){
		$('.text-info').hide();
		$('#personal-data-content').show();
		$('#current-page').html('Données Personnelles');
	});
	$('#cv').on('click', function(){
		$('.text-info').hide();
		$('#cv-content').show();
		$('#current-page').html('Cursus Scolaire');
	});
	$('#pro').on('click', function(){
		$('.text-info').hide();
		$('#pro-content').show();
		$('#current-page').html('Compétences Professionnelles');
	});
	$('#other').on('click', function(){
		$('.text-info').hide();
		$('#other-content').show();
		$('#current-page').html('Autres');
	})
});
/*$.each(['a', 'b', 'c'], function(index, item){
  console.log('item %d is: %s', index, item)
});*/

/*$(document).ready(function(){
	console.log('Linked : jquery.js');
});*/