$(function () {

 //mapSize
 function mapSize() {
    var w = $(window).width();
  var h = $(window).height();
  //  var mapWidth = w - 40;
  var mapHeight = h - 20 - $("header").outerHeight() - $("nav").outerHeight() - $("footer").outerHeight();
  /*
  $("#map").css({
   "width": mapWidth + "px"
  });
  */
		if( w > 768) {
			$("#map").css({
   "height": mapHeight + "px"
  });
		} else {
			if( w > h) {
				$("#map").css({
   "height": 300 + "px"
		});
			} else {
				$("#map").css({
   "height": 400 + "px"
		});
			}
 }
	}

 mapSize();
 $(window).resize(mapSize);

 var lat = "35.800567";
 var lng = "139.955321";
 var zoomSize = '';


 //zoomSize
 var w = $(window).width();
 if (w <= 768) {
  zoomSize = 15;
 } else {
  zoomSize = 16;
 };

	//map set
 var map = L.map('map').setView([lat, lng], zoomSize);

	//現在地
	 var lc = L.control.locate({
  layer: new L.LayerGroup(),
  drawCircle: false,
  keepCurrentZoomLevel: true,
  icon: 'fa fa-map-marker',
  follow: true,
  showPopup: true,
  strings: {
   title: "現在地",
   popup: "現在地",
  }
 }).addTo(map);


//polyline style
 var streetStyle = {
  "color": "#EE9D9E",
  "fiilColor": "#EE9D9E",
  "fillOpacity": 0.8
 };

	var ukairoStyle = {
		"color": "#0971B2",
		"weight": "5",
		"fillOpacity": 1.0
	}

 var paradeStyle = {
  "color": "#E8580C",
  "weight": "7",
  "fillOpacity": 1.0
 };

	//text用polyline style
	var polylineForTextStyle = {
		"color": "#EE9D9E",
  "fiilColor": "#EE9D9E",
  "fillOpacity": 0.8
	}

	//会場のtext
		function textOnEachFeature(feature, layer) {
   layer.setText(
				feature.properties.name,
				{
					center: true,
					offset: 16,
					attributes: {
						fill: '#F15662',
						'font-weight': 'bold',
						'font-size': '14'
					}
				}
			);
 };

//迂回路のtext
	function ukairoTextOnEachFeature(feature, layer) {
   layer.setText(
				feature.properties.name,
				{
					center: true,
					offset: 16,
					attributes: {
						fill: '#0971B2',
						'font-weight': 'bold',
						'font-size': '14'
					}
				}
			);
 };

//会場
    L.geoJson(sakuradori, {
         style: streetStyle
     }).addTo(map);

	//会場のtext用
	L.geoJson(sakuradoriText, {
		onEachFeature: textOnEachFeature,
		style: polylineForTextStyle
	}).addTo(map);

	//迂回路
	L.geoJson(ukairo, {
		onEachFeature: ukairoTextOnEachFeature,
		style: ukairoStyle
	}).addTo(map);


//marker popup
 function onEachFeature(feature, layer) {
  if (feature.properties && feature.properties["popup"]) {
   layer.bindPopup(feature.properties["popup"]);
  }
 };

	//marker
 function markerPointToLayer(feature, latlng) {
  return L.marker(latlng, {
   icon: L.icon({
    iconUrl: feature.properties["icon"],
    shadowUrl: 'common/img/shadow.png',
    iconSize: [39, 46],
    shadowSize: [31, 25],
    shadowAnchor: [0, 5],
    popupAnchor: [0, -20]
   })
  });
 };


 /*


    var csvContents = L.geoCsv(null,{
    fieldSeparator: ',',
    lineSeparator: '\n',
    firstLineTitles: true,
    onEachFeature: onEachFeature,
    pointToLayer: pointToLayer
    });

    function getData(url) {
        return $.ajax({
            type: 'get',
            url: url
        });
    }
    var toiletcsv;
     getData('./data/toilet.csv').then(function(data){
        toiletcsv = data;

    })
     var toiletLayer = csvContents.addData(toiletcsv);
    console.log(toiletLayer);


*/
 var tyuouLayer = L.geoJson(tyuou, {
  onEachFeature: onEachFeature,
  pointToLayer: markerPointToLayer
 });

 var charityLayer = L.geoJson(charity, {
  onEachFeature: onEachFeature,
  pointToLayer: markerPointToLayer
 });

 var ekimaeLayer = L.geoJson(ekimae, {
  onEachFeature: onEachFeature,
  pointToLayer: markerPointToLayer
 });

 var tentomuraLayer = L.geoJson(tentomura, {
  onEachFeature: onEachFeature,
  pointToLayer: markerPointToLayer
 });

 var wakuwakuLayer = L.geoJson(wakuwaku, {
  onEachFeature: onEachFeature,
  pointToLayer: markerPointToLayer
 });

 var bloodDonationLayer = L.geoJson(bloodDonation, {
  onEachFeature: onEachFeature,
  pointToLayer: markerPointToLayer
 });

 var paradeTyuoLayer = L.geoJson(paradeTyuo, {
  style: paradeStyle
 });

 var paradeZenLayer = L.geoJson(paradeZen, {
  style: paradeStyle
 });

 var paradeGokoLayer = L.geoJson(paradeGoko, {
  style: paradeStyle
 })


 var honbuLayer = L.geoJson(honbu, {
  onEachFeature: onEachFeature,
  pointToLayer: markerPointToLayer
 });

 var tent3Layer = L.geoJson(tent3, {
  onEachFeature: onEachFeature,
  pointToLayer: markerPointToLayer
 });
 var tent4Layer = L.geoJson(tent4, {
  onEachFeature: onEachFeature,
  pointToLayer: markerPointToLayer
 });
 var tent5Layer = L.geoJson(tent5, {
  onEachFeature: onEachFeature,
  pointToLayer: markerPointToLayer
 });
 var shelterLayer = L.geoJson(shelter, {
  onEachFeature: onEachFeature,
  pointToLayer: markerPointToLayer
 });

 var toiletLayer = L.geoJson(toilet, {
  onEachFeature: onEachFeature,
  pointToLayer: markerPointToLayer
 }).addTo(map);


 //baseMap
 var osmLayer = L.tileLayer.provider('OpenStreetMap').addTo(map);

 /*
     var osmFranceLayer = L.tileLayer.provider('OpenStreetMap.France').addTo(map);
     var mqoLayer = L.tileLayer.provider('MapQuestOpen').addTo(map);
     var stamenLayer = L.tileLayer.provider('Stamen.TonerLite').addTo(map);
     var cartoDbLayer = L.tileLayer.provider('CartoDB').addTo(map);
     var thunderforestLayer = L.tileLayer.provider('Thunderforest').addTo(map);
 */

 var url = window.location.href.split("/").pop();

 var overlays = [

  {
   groupName: "イベント",
   expanded: false,
   exclusive: true,
   layers: {
    "中央ステージ": tyuouLayer,
    "チャリティライブ": charityLayer,
    "駅前ひろば": ekimaeLayer,
    "テント村": tentomuraLayer,
    "わくわくマーケット": wakuwakuLayer,
    "献血": bloodDonationLayer
   }
        },
  {
   groupName: "パレード",
   expanded: false,
   layers: {
    "中央パレード": paradeTyuoLayer,
    "全さくら通りパレード": paradeZenLayer,
    "五香パレード": paradeGokoLayer
   }
        },
  {
   groupName: "テント・避難",
   expanded: false,
   layers: {
    "本部テント": honbuLayer,
    "3丁目テント": tent3Layer,
    "4丁目テント": tent4Layer,
    "5丁目テント": tent5Layer,
    "緊急避難場所": shelterLayer
   }
        },
  {
   groupName: "トイレ",
   expanded: true,
   layers: {
    "仮設トイレ": toiletLayer,
   }
        },
];

 if (url == "index_en.html") {
  overlays = [
   {
    groupName: "Event",
    expanded: false,
    exclusive: true,
    layers: {
     "Main Stage": tyuouLayer,
     "Charity Stage": charityLayer,
     "Station Square": ekimaeLayer,
     "Tent Village": tentomuraLayer,
     "Waku-Waku Market": wakuwakuLayer,
     "Blood Drive": bloodDonationLayer
    }
        },
   {
    groupName: "Parade",
    expanded: false,
    layers: {
     "Central Parade Route": paradeTyuoLayer,
     "Sakura Dori Parade Route ": paradeZenLayer,
     "Goko Parade Route": paradeGokoLayer
    }
        },
   {
    groupName: "Help",
    expanded: false,
    layers: {
     "Main Tent": honbuLayer,
     "3Chome Tent": tent3Layer,
     "4Chome Tent": tent4Layer,
     "5Chome Tent": tent5Layer,
     "Evac. Zone": shelterLayer
    }
        },
   {
    groupName: "Toilets",
    expanded: true,
    layers: {
     "temp. toilets": toiletLayer
    }
        }
      ];
 }

 var options = {
  container_maxHeight: "500px",
  collapsed: false,
  exclusive: false,
  position: 'topright'

 };

 var control = L.Control.styledLayerControl('', overlays, options);
 map.addControl(control);

});
