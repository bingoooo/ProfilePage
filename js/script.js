console.log('Linked : script.js');
var personalData;
/*$.ajax({
	url : '/perso',
	type : "GET",
	dataType : 'json',
	success : function(json){
		data = json;
		console.log(data);
	},
	error : function(){
		console.log('Erreur dans le chargement ajax');
	},
	complete : function(){
		console.log('Fin de la requête ajax.');
	},
});*/

/*$.ajax({
	url : '/perso',
	type : "POST",
	data : personalData,
	dataType : 'json',
	success : function(json){
		console.log('sent : ', json);
	},
	error : function(){
		console.log('Erreur dans l\'envoi de données ajax');
	},
	complete : function(){
		console.log('Fin de la requête ajax.')
	},
})*/


$(document).ready(function(){
	$.ajax({
		url : "user-23.json",
		type : "GET",
		dataType : 'json',
		success : function(json){
			personalData = json;
			console.log(personalData);
			console.log(typeof personalData.contact, personalData.contact);
			for (var item in personalData){
				if (typeof personalData[item] == 'object'){
					for (var elem in personalData[item]){
						console.log(elem);
						$('span[elt=' + elem + ']').html(personalData[item][elem]);
					}
				} else {
					console.log(typeof personalData[item], item);
					$('span[elt=' + item + ']').html(personalData[item]);
				}
			}
			/*for (var item in personalData){
				if (item != 'object'){
					$('span[elt='+item+']').html(personalData[item]);
				};
				if (item == 'object') {
					for (var elem in personalData[item]){
					console.log(elem);
					$('span[elt=' + elem + ']').html(personalData.contact[item][elem]);
				};
			};*/ 
			console.log("Ajax transfert complete");
		},
		error : function(){
			console.log('Erreur de récupération ajax');
		},
		complete : function(){
			console.log('Requête ajax complete');
		}
	});
	console.log('Linked : zepto');
	$('.text-info').hide();
	$('.default').show();

	var app = {
		init : function(){
			//console.log(personalData.length);
			app.elements();
		},
		elements : function(){
			//$("span[elt=first_name]").html(personalData.first_name);
			/*$('#name').html(personalData.first_name + " " + personalData.last_name);
			$('#occupation').html(personalData.occupation);*/
			$('#personal-data').on('click', function(event){app.disp('#personal-data-content', 'Données Personnelles');});
			$('#cv').on('click', function(event){app.disp('#cv-content', 'Cursus Scolaire');});
			$('#pro').on('click', function(event){app.disp('#pro-content', 'Compétences Professionnelles');});
			$('#other').on('click', function(event){app.disp('#other-content', 'Autres');});
			
			
				/*if (typeof personalData == 'object'){
					for each (item in personalData[variable]) {
						$('span[elt=' + item + ']').html(item);
					}
				} else {
					$('span[elt=' + )
				}*/
			/*$('#id').html(personalData.id);
			$('#badges').html(personalData.badges);
			$('#email').html(personalData.contact.email);
			$('#website').html(personalData.contact.website);*/
		},
		disp : function(target, data){
			$('.text-info').hide();
			$(target).show();
			$('#current-page').html(data);
		},
	};

	app.init();

});
/*$.each(['a', 'b', 'c'], function(index, item){
  console.log('item %d is: %s', index, item)
});*/

/*$(document).ready(function(){
	console.log('Linked : jquery.js');
});*/