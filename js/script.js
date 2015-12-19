"use strict";
var personalData;
var defaultUrl = "https://s.idsympa.com/u-23.json";
var user = window.location.search.substring(1);
var currentPosition;
var usersId = ["1","2","3","4","5","06","7","8","9","10","11","12","13","14","15","16","17","19","20","21","22","23","24"];
var userUrl = defaultUrl;
for (var i = 0; i < usersId.length; i++){
	if (usersId[i] == user){
		userUrl = "https://s.idsympa.com/u-" + user + ".json";
		currentPosition = i;
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
			},
			error : function(){
				console.log('Erreur de récupération ajax');
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
			$('#previous').on('click', function(){app.previousUser()});
			$('#next').on('click', function(){app.nextUser()});
		},
		disp : function(target, file, data){
			$(target).load(file);
			ajaxCall(user);		
			$('#current-page').html(data);
		},
		popup : function(){
			$('.overlay').toggle();
		},
		nextUser : function(){
			currentPosition++;
			if (currentPosition >= usersId.length){
				currentPosition = 0;
			}
			userUrl = "https://s.idsympa.com/u-" + usersId[currentPosition] + ".json";
			ajaxCall();
		},
		previousUser : function(){
			currentPosition--;
			if (currentPosition < 0){
				currentPosition = 23;
			}
			userUrl = "https://s.idsympa.com/u-" + usersId[currentPosition] + ".json";
			ajaxCall();
		}
	};
	app.init();
});