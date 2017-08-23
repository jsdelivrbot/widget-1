	(function() {
		var data = [];
		//	Commonly container
		var jn_container = document.getElementById('joinnusWidgetContainer');

		var widget = document.createElement('div');
		widget.setAttribute('id', 'rppJoinnusWidget');
		widget.innerHTML = '<nav class="rppJoinnusHeader"><img src="https://www.joinnus.com/inc/img/logo-header.png" alt=""><span>Tus mejores eventos</span></nav><div id="event-content"></div>';
		jn_container.appendChild(widget);
		//	Commonly container


		var el = document.getElementById('event-content');
		var search = document.createElement('div');
		search.setAttribute('class', 'jn-search');
		search.innerHTML = '<input type="search" id="txtSearch" class="joinnusSearch" onkeydown="jnMethods.watch(event);"><button id="btnsearch" onclick="jnMethods.search();">Buscar</button>';

		var bindData = function(data) {
			//	for(var i=1; i<data.length; i++) {
			for(var i=1; i<4; i++) {
				var child = document.createElement('div');
				child.setAttribute('class','jn-events');
				child.innerHTML = '<article><a href="https://www.joinnus.com/PE/'+ data[i].category +'/' + data[i].url + '-' + data[i].id +'" target="_blank"><p class="title">' + data[i].title + '</p>'+
			'<img src="' + data[i].imageUrl+'">'+
			'</a></article>';
				el.appendChild(child);
			}
				el.appendChild(search);
		};

		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://api.joinnus.com/v1/PE/events?page=1');
		xhr.onload = function() {
		    if (xhr.status === 200) {
		    	data = JSON.parse(xhr.responseText);
		    	data = jnMethods.translate(data[0].featured);
		    	bindData(data);
		    }
		    else {
		        console.log('Hubo un problema al recuperar los eventos de Joinnus');
		    }
		};
		xhr.send();

		//	var btnsearch = document.getElementById('btnsearch');
	})();

	var jnSearch = function() {
		var text = document.getElementById('txtSearch').value;
		var redirect = 'https://www.joinnus.com/searchc/PE?q=' + text;
		if(text.length == 0) {
			redirect = 'https://www.joinnus.com';
		}
		window.open(redirect, '_blank');
	};

	var watchKey = function(e) {
		if(e.keyCode == 13) {
			jnSearch();
		}
	};

	var categoryTranslator = function(data) {
		data.forEach(function(key) {
			switch(key.category) {
				case 'conf-lectures':
					key.category = 'charlas-y-conferencias';
				break;
				case 'entertainment':
					key.category = 'entretenimiento';
				break;
				case 'trip-adventure':
					key.category = 'viaje-y-aventura';
				break;
				case 'art-culture':
					key.category = 'arte-y-cultura';
				break;
				case 'tech':
					key.category = 'tecnologia';
				break;
				case 'sports':
					key.category = 'deportes';
				break;
				case 'food-drinks':
					key.category = 'comidas-y-bebidas';
				break;
				case 'kids':
					key.category = 'ninos';
				break;
				case 'theater':
					key.category = 'teatro';
				break;
				case 'community-service':
					key.category = 'ayuda-social';
				break;
				default: 'unknown category';														
			}
		});
		return data;
	}

	var jnMethods = {
		search: jnSearch,
		watch: watchKey,
		translate: categoryTranslator
	};