var personalData;
var defaultUrl = "https://s.idsympa.com/u-23.json";
var user = window.location.search.substring(1);
var usersId = ["-666","2","3","4","5","06","7","8","9","10","11","12","13","14","15","16","17","19","20","21","22","23","24"];
var userUrl = defaultUrl;
for (var i = 0; i < usersId.length; i++){
	if (usersId[i] == user){
		userUrl = "https://s.idsympa.com/u-" + user + ".json";
	}
};

$(document).ready(function(){
	function ajaxCall(){
		$.ajax({
			url : userUrl,
			type : "GET",
			dataType : 'json',
			success : function(json){
				personalData = json;
				var userInfos = $('#idTemplate').html();
				var html = Mustache.to_html(userInfos, json);
				$('.popup').html(html);
				var userHead = "<h1>{{first_name}} {{last_name}}</h1><h2>{{occupation}}</h2>";
				var html2 = Mustache.to_html(userHead, json);
				$('#head-template').html(html2);
				console.log("Ajax transfert complete");
			},
			error : function(){
				console.log('Erreur de récupération ajax');
			},
			complete : function(){
				console.log('Requête ajax complete');
			}
		});
	}
	
	var app = {
		init : function(){
			ajaxCall();
			app.elements();
			$('.overlay').hide();
		},
		elements : function(){
			$('#personal-data').on('click', function(event){app.disp('#data-content','ajax/data.html', 'Données Personnelles');});
			$('#cv').on('click', function(event){app.disp('#data-content', 'ajax/cv.html', 'Cursus Scolaire');});
			$('#pro').on('click', function(event){app.disp('#data-content', 'ajax/pro.html', 'Compétences Professionnelles');});
			$('#contact').on('click', function(event){app.popup()});
			$('.overlay').on('click', function(event){app.popup()});
		},
		disp : function(target, file, data){
			$(target).load(file);
			ajaxCall(user);		
			$('#current-page').html(data);
		},
		popup : function(){
			$('.overlay').toggle();
		}
	};
	app.init();
});