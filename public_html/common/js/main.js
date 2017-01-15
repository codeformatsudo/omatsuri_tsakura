(function () {
	"use strict";

	/*-----注意案内の作成-----*/
	//注意文の読み込み
	$.ajax({
		url: 'common/data/info.txt',
		timeout: 1000,
		success: function (data) {
			if (data.length === 0) {
				$('.fixInfo').css({
					'display': 'none'
				})
			} else {
				$('.fixInfo').append(data);
				fixInfo();
			}
		},
		eroor: function (data) {
			alert("「お知らせ」の取得に失敗しました。再度読み込んでください。");
		}
	});

	$(window).on('load resize orientationchange', function () {
		fixInfo();
	});

	$(window).on('scroll', function () {
		scrollInfo();
	});

	var firstH = 300;
	var fixH = 60;
	var fixContent = document.querySelector('.fixInfo');
	var windowH = window.innerHeight || document.documentElement.clientHeight;
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	fixContent.style.height = firstH + 'px';
	fixContent.style.top = windowH - firstH + 'px';
	document.querySelector('body').style.paddingBottom = fixH + 'px';

	function fixInfo() {
		$('.fixInfo').animate({
			height: fixH,
			top: windowH + scrollTop - fixH + 'px'
		}, 3000, 'easeInQuart');
	}

	function scrollInfo() {
		fixContent.style.top = windowH + scrollTop - fixH + 'px';
	}

	/*-----ツイートの取得-----*/
	! function (d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0],
			p = /^http:/.test(d.location) ? 'http' : 'https';
		if (!d.getElementById(id)) {
			js = d.createElement(s);
			js.id = id;
			js.src = p + "://platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js, fjs);
		}
	}(document, "script", "twitter-wjs");

	/*-----mmenuの設定-----*/
	$(function () {
		var $menu = $("#sideMenu").mmenu({
			"extensions": [
				"shadow-page",
				"theme-white"
			],
			offCanvas: {
				position: "right",
				zposition: "front"
			}
		});

		var $icon = $("#my-icon");
		var API = $menu.data("mmenu");

		$icon.on("click", function () {
			API.open();
		});

		API.bind("opened", function () {
			setTimeout(function () {
				$icon.addClass("is-active");
			}, 100);
		});
		API.bind("closed", function () {
			setTimeout(function () {
				$icon.removeClass("is-active");
			}, 100);
		});
	});

	/*-----sideMenuの設定-----*/
	var a, li, childLi;
	var url = window.location.href;
	var nav = document.querySelector('nav');
	var ul = document.createElement('ul');
	nav.appendChild(ul);
	createNavSns('twitter', 'common/img/twitter.png');
	var tweet = document.querySelector('#twitter');
	tweet.innerHTML = '<a class="twitter-timeline" href="https://twitter.com/hashtag/%E5%B8%B8%E7%9B%A4%E5%B9%B3%E3%81%95%E3%81%8F%E3%82%89%E3%81%BE%E3%81%A4%E3%82%8A" data-widget-id="819089163978821632">#常盤平さくらまつり のツイート</a>';

	function createNavSns(id, imgSrc) {
		createLiA();
		a.href = '#' + id;
		var img = document.createElement('img');
		img.src = imgSrc;
		a.appendChild(img);
		var childUl = document.createElement('ul');
		li.appendChild(childUl);
		childLi = document.createElement('li');
		childLi.id = id;
		childUl.appendChild(childLi);
	}

	createNav('日時', 'home_date');
	createNav('会場・アクセス', 'place');
	createNav('ご注意', 'caution');
	createNav('マップ', 'map');
	createNav('イベント', 'event');
	createNav('主催・後援・協力・協賛', 'sponsors');

	function createNav(content, sectionUrl) {
		createLiA();
		a.innerHTML = content;
		a.setAttribute('href', url + '#' + sectionUrl);
	}

	function createLiA() {
		li = document.createElement('li');
		ul.appendChild(li);
		a = document.createElement('a');
		li.appendChild(a);
	}

	var navAs = document.querySelectorAll('nav a');
	Array.prototype.map.call(navAs, function (navAs) {
		navAs.addEventListener('click', function () {
			nav.classList.remove('mm-current', 'mm-opened');
			var wrap = document.querySelector('.mm-slideout');
			wrap.click();
		})
	})

	/*-----smaoothScrollの設定-----*/
	smoothScroll.init({
		speed: 800,
		updateURL: false,
		easing: 'easeOutQuad'
	});


	/*-----modal-----*/
	/*
 //modal
 $.ajax({
  url: 'common/data/info.txt',
  success: function (data) {
   if (data.length === 0) {
    $('#modal').css({
     'display': 'none'
    })
   } else {
    $('#modal').append(data);
    centeringModal();
   }
  }
 });

 function centeringModal() {
  $('body').append('<div class="modal-overlay"></div>');
  $('.modal-overlay').fadeIn('slow');
  var w = $(window).width();
  var h = $(window).height();
  var cWidth = $('#modal').outerWidth();
  var cHeight = $('#modal').outerHeight();
  var pxLeft = ((w - cWidth) / 2);
  var pxTop = ((h - cHeight) / 2);

  $('#modal').css({
   'left': pxLeft + 'px',
   'top': pxTop + 'px'
  });
  $('.modal-overlay, #modal-close').unbind().click(function () {
   $('.modal-overlay, #modal-close').fadeOut('slow', function () {

    $('.modal-overlay').remove();
    $('#modal').css({
     'left': '0px',
     'top': '0px',
     'position': 'relative',
     'z-index': 1
    });
   });
  });
 }
*/

	/*-----headerの縮小-----*/

	// スクロールして何ピクセルでアニメーションさせるか
	var px_change = 300;
	// スクロールのイベントハンドラを登録
	window.addEventListener('scroll', function (e) {
		// 変化するポイントまでスクロールしたらクラスを追加
		if ($(window).scrollTop() > px_change) {
			$("header").addClass("smaller");
			// 変化するポイント以前であればクラスを削除
		} else if ($("header").hasClass("smaller")) {
			$("header").removeClass("smaller");
		}
	});

	/*-----イベントスケジュールの作成-----*/

	//アクセス
	csvToArray('common/data/access.csv', function (data) {
		//場所
		var accessArea = document.querySelector('.home_place');
		var dataLen = data.length;
		var i = 1; //1行目を除く
		var j = 1; //1列目を除く
		//場所
		var placeArea = document.createElement('div');
		placeArea.classList.add('home_access_palce');
		accessArea.appendChild(placeArea);
		for (i; i < dataLen; i++) {
			var divPlace = document.createElement('div');
			divPlace.innerHTML = data[i][0];
			placeArea.appendChild(divPlace);
		}
		//交通
		if (data[j][1]) {
			var homeArea = document.querySelector('.home');
			var accessSection = document.createElement('section');
			accessSection.classList.add('.home_access');
			homeArea.appendChild(accessSection);

			var h1 = document.createElement('h1');
			h1.classList.add('sectionTitle');
			accessSection.appendChild(h1);

			var span = document.createElement('span');
			span.innerHTML = 'アクセス';
			h1.appendChild(span);

			var trafficArea = document.createElement('ul');
			accessSection.appendChild(trafficArea);
			for (j; j < dataLen; j++) {
				var divTraffic = document.createElement('li');
				divTraffic.innerHTML = data[j][1];
				trafficArea.appendChild(divTraffic);
			}
		}
	});
	//注意
	csvToArray('common/data/caution.csv', function (data) {
			var dataLen = data.length;
			if (dataLen - 1 > 0) {
				var cautionArea = document.createElement('section');
				cautionArea.id = 'caution';
				document.querySelector('.home').appendChild(cautionArea);
				var h1Area = document.createElement('h1');
				var span = document.createElement('span');
				span.innerHTML = "ご注意";
				h1Area.appendChild(span);
				h1Area.classList.add('home-caution');
				h1Area.classList.add('sectionTitle');
				cautionArea.appendChild(h1Area);
				var cautionUl = document.createElement('ul');
				cautionArea.appendChild(cautionUl);
				var i = 1;
				for (i; i < dataLen; i++) {
					var cautionLi = document.createElement('li');
					cautionLi.innerHTML = data[i];
					cautionUl.appendChild(cautionLi);
				}
			}
		})
		//イベントのお知らせ
	csvToArray('common/data/eventinfo.csv', function (data) {
		var dataLen = data.length;
		var eventInfoArea = document.querySelector('.event_info');
		if (data[1][0]) {
			for (var i = 1; i < dataLen; i++) {
				for (var j = 0; j < data[i].length; j++) {
					var div = document.createElement('div');
					if (j > 0) {
						div.classList.add('event_day');
					}
					div.innerHTML = data[i][j];
					eventInfoArea.appendChild(div);
				}
			}
		}
	});
	//イベントスケジュール
	//イベントセクションにevent-scheduleを作る
	var eventArea = document.querySelector('.event');
	var eventSection = document.createElement('section');
	eventSection.classList.add('event_schedule');
	eventArea.appendChild(eventSection);
	//タブを作る
	var eventUl = document.createElement('ul');
	eventUl.classList.add('nav');
	eventUl.classList.add('nav-tabs');
	eventSection.appendChild(eventUl);
	var tabParentDiv = document.createElement('div');
	tabParentDiv.classList.add('tab-content');
	eventSection.appendChild(tabParentDiv);
	//イベントデータを読み込む
	/*
	 for (var k = 1; k < 3; k++) {
	  var eventUrl = 'common/data/event-' + k + '.csv';
	 }
	  var _k = 0;
	  */

	csvToArray('common/data/event-1.csv', function (data) {
		var k = 1;
		if (data) {
			createEventTable(data, k);
		}
		createSmallerTable(k);
	});

	csvToArray('common/data/event-2.csv', function (data) {
		var k = 2;
		if (data) {
			createEventTable(data, k);
		}
		createSmallerTable(k);
	});

	//主催・後援・協力・協賛
	csvToArray('common/data/sponsors.csv', function (data) {
		var i = 0;
		var dataLen = data.length;
		var sponsors = document.querySelector('.sponsors');
		//主催
		createSection(data[1][0], 'sponsors_organizer', '主催', sponsors);
		//連絡先
		var contact = sponsors.children[0];
		createDiv(data[1][1], contact);
		//後援
		createSection(data[1][2], 'sponsors_support', '後援', sponsors);
		//協力
		createSection(data[1][3], 'sponsors_cooperation', '協力', sponsors);
		//協賛
		createSection(data[1][4], 'sponsors_sponsorship', '協賛', sponsors);

		//フッター
		var footer = document.querySelector('footer');
		createDiv(data[1][0], footer);
	});

	//イベントの日時
	csvToArray('common/data/date.csv', function (data) {
		var dataLen = data.length;
		var i = 1; //1行目を除く
		var dateArea = document.querySelector('.home_date');
		var div = document.createElement('div');
		div.classList.add('home_eventInfo');
		dateArea.appendChild(div);
		for (i; i < dataLen; i++) {

			var ul = document.createElement('ul');
			div.appendChild(ul);

			var j = 0;
			var dataILen = data[i].length;
			for (j; j < dataILen; j++) {
				var li = document.createElement('li');
				li.innerHTML = data[i][j];
				if (j === 0) {
					li.classList.add('home_eventDay');
				} else {
					li.classList.add('home_eventTime');
				}
				ul.appendChild(li);
			}
		}
		/*
		for (i; i < dataLen; i++) {
		 var divRow = document.createElement('div');
		 divRow.classList.add('row');
		 dateArea.appendChild(divRow);
		 //日にち
		 var divDay = document.createElement('div');
		 divDay.innerHTML = data[i][0];
		 divDay.classList.add('home_eventDay', 'col-md-3');
		 divRow.appendChild(divDay);
		 //時間
		 var j = 1;
		 var dataILen = data[i].length;
		 for (j; j < dataILen; j++) {
		  var divTime = document.createElement('div');
		  divTime.innerHTML = data[i][j];
		  divTime.classList.add('home_eventTime', 'col-md-3');
		  divRow.appendChild(divTime);
		 }
		}
		*/
	});
	// 基本色、サイトタイトル、サイトの説明、メイン画像を設定
	csvToArray('common/data/info.csv', function (data) {
		//bodyに色のクラスを設定
		var colorData = data[1][0];
		switch (colorData) {
		case '赤':
			document.querySelector('body').classList.add('is_red');
			break;
		case 'ピンク':
			document.querySelector('body').classList.add('is_pink');
			break;
		case '黒':
			document.querySelector('body').classList.add('is_black');
			break;
		case '黄色':
			document.querySelector('body').classList.add('is_yellow');
			break;
		}

		// タイトル
		var title = document.querySelector('.header_siteTitle');

		title.innerHTML = data[1][1];
		// headのタイトル
		var headTitle = document.createElement('meta');
		headTitle.setAttribute('title', title);
		document.getElementsByTagName('head')[0].appendChild(headTitle);
		// headのdescription
		var descriptionData = data[1][2];
		var description = document.createElement('meta');
		description.setAttribute('description', descriptionData);
		document.getElementsByTagName('head')[0].appendChild(description);
		// メイン画像
		if (data[1][2]) {
			var mainImg = document.createElement('img');
			var imgSrc = data[1][3];
			mainImg.src = imgSrc;
			mainImg.className = "mainImg_img";
			document.querySelector('.mainImg').appendChild(mainImg);
		}
		//雨天時の注意
		if (data[1][4]) {
			var caution = document.createElement('div');
			caution.innerHTML = data[1][4];
			caution.classList.add('home_eventTime_caution');
			document.querySelector('.home_date').appendChild(caution);
		}
	});

	//CSVを配列にする
	function csvToArray(filename, cb) {
		$.get(filename, function (csvdata, status) {
			var ret = [];
			if (status == 'success') {
				csvdata = csvdata.replace(/\r/gm, "");
				var line = csvdata.split("\n");

				var i = 0;
				for (i in line) {
					//空行はスルーする。
					if (line[i].length === 0) {
						continue;
					}
					var row = line[i].split(",");
					ret.push(row);
				}
			}
			cb(ret);
		});
	}
	//セクションとh1とdivを作る
	function createSection(data, className, contentName, parent) {
		if (data) {
			var area = document.createElement('section');
			area.classList.add(className);
			var h1 = document.createElement('h1');
			var span = document.createElement('span');
			span.innerHTML = contentName;
			h1.classList.add('sectionTitle');
			var dataDiv = document.createElement('div');
			dataDiv.innerHTML = data;
			parent.appendChild(area);
			area.appendChild(h1);
			h1.appendChild(span);
			area.appendChild(dataDiv);
		}
	}
	//divを作る
	function createDiv(data, parent) {
		if (data) {
			var div = document.createElement('div');
			div.innerHTML = data;
			parent.appendChild(div);
		}
	}
	//イベントスケジュールのテーブルを作る
	function createEventTable(data, k) {
		//タブを作る
		var tabNum = '#tab' + k;
		var tabId = 'tab' + k;
		var tableId = 'event-table' + k;

		//タブのデータを入れる
		var h1A = document.createElement('a');
		h1A.setAttribute('data-toggle', 'tab');
		h1A.setAttribute('href', tabNum);
		var aText = document.createTextNode(data[0][0]);
		var li = document.createElement('li');
		if (k == 1) {
			li.classList.add('active');
			li.classList.add('tab1');
		} else if (k == 2) {
			li.classList.add('tab2');
		}
		h1A.appendChild(aText);
		li.appendChild(h1A);
		eventUl.appendChild(li);
		var tabDiv = document.createElement('div');
		tabDiv.id = tabId;
		tabDiv.classList.add('tab-pane');
		tabDiv.classList.add('fade');
		if (k == 1) {
			tabDiv.classList.add('in');
			tabDiv.classList.add('active');
		}
		tabParentDiv.appendChild(tabDiv);

		//テーブルを作る
		var table = document.createElement('table');
		table.id = tableId;
		table.classList.add('table-large');
		tabDiv.appendChild(table);
		//1行目
		var trTitle = document.createElement('tr');
		var thTime = document.createElement('th');
		thTime.innerHTML = '時間';
		thTime.classList.add('st-head-row');
		table.appendChild(trTitle);
		trTitle.appendChild(thTime);
		//1行目2列以降をまわす
		(function () {
			for (var j = 1; j < data[0].length; j++) {
				var th = document.createElement('th');
				th.innerHTML = data[0][j];
				trTitle.appendChild(th);
			}
		}());
		//2行目以降をまわす
		for (var i = 1; i < data.length; i++) {
			var _i, tr;

			//  var dataILen = data[i].length;
			if (data[i][0]) {
				tr = document.createElement('tr');
				table.appendChild(tr);
			}
			//列をまわす
			for (var j = 0; j < data[i].length; j++) {

				//時間が入っていたらtdを作り、クラスをつける
				if (data[i][0]) {
					var eventClass = 'event' + k + i + j;
					var className = '.' + eventClass;
					_i = i;
					var td = document.createElement('td');
					if (data[i][j] == data[i][0]) {
						td.classList.add('eventTime');
					} else {
						td.classList.add(eventClass);
					}
					td.innerHTML = data[i][j];
					tr.appendChild(td);

					//時間が入っていなくてデータがURLじゃなかったらdivを作り、上のtdに追加
				} else if (!data[i][0] && data[i][j] && data[i][j].indexOf('http')) {
					var targetI;
					var div = document.createElement('div');
					div.innerHTML = data[i][j];

					if (i - _i == 1) {
						targetI = i - 1; //1行上
					} else {
						var num = i - _i;
						targetI = i - num;
					}
					var targetClass = '.event' + k + targetI + j;
					//  var className = '.' + targetClass;
					//      var memberClass = 'member-' + targetClass;
					//     div.classList.add(memberClass);
					var parentTd = document.querySelector(targetClass);
					parentTd.appendChild(div);

					//データがURLだったらaを作る
				} else if (!data[i][0] && data[i][j].match(/http/)) {
					var targetTdI;
					var a = document.createElement('a');
					a.href = data[i][j];
					a.setAttribute('target', '_blank');
					if (i - _i == 2) {
						targetTdI = i - 2; //1行上
					} else {
						var _num = i - _i;
						targetTdI = i - _num;
					}
					var targetElClass = '.event' + k + targetTdI + j;
					var targetTd = document.querySelector(targetElClass);
					var targetEl = targetTd.lastChild;
					a.appendChild(targetEl);
					targetTd.appendChild(a);
				}
			}
		}
	}

	//レスポンシブ用のテーブルを作る
	function createSmallerTable(k) {
		//テーブルを取得
		var tableId = '#event-table' + k;
		var tableObj = document.querySelector(tableId);

		//追加するタブを取得
		var tabId = '#tab' + k;
		var tabArea = document.querySelector(tabId);

		//tableを作成
		var sTable = document.createElement('table');
		sTable.classList.add('table-small');
		tabArea.appendChild(sTable);

		//取得したテーブルのセルを回す
		var rowsLen = tableObj.rows.length;
		var cellsLen = tableObj.rows[0].cells.length;
		for (var i = 1; i < rowsLen; i++) {
			for (var j = 0; j < cellsLen; j++) {
				if (tableObj.rows[i].cells[j].innerHTML) {
					//trを作成
					var tr = document.createElement('tr');
					sTable.appendChild(tr);

					if (tableObj.rows[i].cells[j] == tableObj.rows[i].cells[0]) {
						var th = document.createElement('th');
						th.innerHTML = tableObj.rows[i].cells[0].innerHTML;
						th.setAttribute('colspan', '2');
						th.classList.add('eventTime');
						tr.appendChild(th);
					} else {
						//thを作成
						var _th = document.createElement('th');
						_th.innerHTML = tableObj.rows[0].cells[j].innerHTML;
						tr.appendChild(_th);

						//tdを作成
						var td = document.createElement('td');
						td.innerHTML = tableObj.rows[i].cells[j].innerHTML;
						if (tableObj.rows[i].cells[j] == tableObj.rows[i].cells[0]) {
							td.classList.add('eventTime');
						}
						tr.appendChild(td);
					}
				}
			}
		}
	}

}());