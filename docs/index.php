<!DOCTYPE html>
<html lang="ja">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0">
	<meta property="og:title" content="常盤平さくらまつり" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://code4matsudo/t-sakuramatsuri" />
    <meta property="og:image" content="http://code4matsudo/t-sakuramatsuri/img/ogp.png" />
    <meta property="og:site_name" content="常盤平さくらまつり" />
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@Codeformatsudo">
    <meta name="twitter:creator" content="@Codeformatsudo">
    <meta name="twitter:image" content="http://code4matsudo.org/t-sakuramatsuri/img/twitter_cards.png">
    <meta name="twitter:domain" content="code4matsudo.org/t-sakuramatsuri/">
    <link rel="apple-touch-icon" sizes="57x57" href="img/favicons/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="img/favicons/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="img/favicons/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="img/favicons/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="img/favicons/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="img/favicons/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="img/favicons/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="img/favicons/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="img/favicons/apple-touch-icon-180x180.png">
    <link rel="icon" type="image/png" href="img/favicons/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="img/favicons/android-chrome-192x192.png" sizes="192x192">
    <link rel="icon" type="image/png" href="img/favicons/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="img/favicons/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="img/favicons/manifest.json">
    <link rel="mask-icon" href="/img/favicons/safari-pinned-tab.svg" color="#eb7680">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage" content="img/favicons/mstile-144x144.png">
    <meta name="theme-color" content="#ffffff">
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.2/leaflet.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/5.7.8/css/jquery.mmenu.all.css">
	<link rel="stylesheet" href="common/css/styledLayerControl.min.css">
	<link rel="stylesheet" href="common/css/hamburgers.min.css">
	<link rel="stylesheet" href="common/css/for_sns.css">
	<link rel="stylesheet" href="common/css/style.css">
	<title></title>
	<script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-74441674-1', 'auto');
        ga('send', 'pageview');
        var trackOutboundLink = function (url) {
            ga('send', 'event', 'outbound', 'click', url, {
                'transport': 'beacon',
                'hitCallback': function () {
                    document.location = url;
                }
            });
        }
    </script>
</head>

<body>
<script>
        window.fbAsyncInit = function () {
            FB.init({
                appId: '1718922238326539',
                xfbml: true,
                version: 'v2.5'
            });
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>
	<div id="wrap">

		<!--fixInfo-->
		<div class="fixInfo">
			<?php require_once("php/twitter.php"); ?>
		</div>

		<!--header-->
		<header id="header" class="header">
			<div class="row">
				<div class="col-xs-11">
					<h1 class="header_siteTitle"></h1>
				</div>
				<div class="col-xs-1">
					<button id="my-icon" class="hamburger hamburger--collapse" type="button">
						<span class="hamburger-box">
      <span class="hamburger-inner"></span>
						</span>
					</button>
				</div>
			</div>
		</header>

		<!--sideMenu-->
		<nav id="sideMenu">

		</nav>

		<!--main-img-->
		<article class="mainImg"></article>

		<!--home-->
		<article class="home">
			<section class="home_date" id="home_date">
			</section>

			<section class="home_place" id="place">
				<h1 class="sectionTitle"><span>会場</span></h1>
			</section>
		</article>

		<section class="caution" id="caution"></section>

		<!--map-->
		<article class="map">
			<section>
				<div id="map"></div>
			</section>
		</article>

		<!--event-->
		<article class="event" id="event">
			<section class="event_info">
				<h1 class="sectionTitle"><span>イベント</span></h1>
			</section>
		</article>

		<!--sponsor-->
		<article class="sponsors" id="sponsors">
		</article>

<!--sns-->
	                <div class="social-area-syncer">
                    <ul class="social-button-syncer">
                        <!-- Twitter ([Tweet]の部分を[ツイート]にすると日本語にできます) -->
                        <li class="sc-tw">
                            <a data-url="http://code4matsudo.org/t-sakuramatsuri" href="https://twitter.com/share" class="twitter-share-button" data-lang="ja" data-count="vertical" data-dnt="true" target="_blank">
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
                                    <path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fill="#fff" fill-rule="nonzero" />
                                </svg><span>Tweet</span></a>
                        </li>
                        <!-- Facebook -->
                        <li class="sc-fb">
                            <div class="fb-like" data-href="http://code4matsudo.org/t-sakuramatsuri" data-layout="box_count" data-action="like" data-show-faces="true" data-share="false"></div>
                        </li>
                        <!-- Google+ -->
                        <li>
                            <div data-href="http://code4matsudo.org/t-sakuramatsuri" class="g-plusone" data-size="tall"></div>
                        </li>
                        <!-- はてなブックマーク -->
                        <li>
                            <a href="http://b.hatena.ne.jp/entry/http://code4matsudo.org/t-sakuramatsuri" class="hatena-bookmark-button" data-hatena-bookmark-layout="vertical-balloon" data-hatena-bookmark-lang="ja" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border:none;" /></a>
                        </li>
                        <!-- pocket -->
                        <li>
                            <a data-save-url="http://code4matsudo.org/t-sakuramatsuri" data-pocket-label="pocket" data-pocket-count="vertical" class="pocket-btn" data-lang="en"></a>
                        </li>
                        <!-- LINE [画像は公式ウェブサイトからダウンロードして下さい] -->
                        <li class="sc-li">
                            <a href="http://line.me/R/msg/text/?http://code4matsudo.org/t-sakuramatsuri"><img src="common/img/linebutton_36x60.png" width="36" height="60" alt="LINEに送る" class="sc-li-img"></a>
                        </li>
                    </ul>
                    <!-- Facebook用 -->
                    <div id="fb-root"></div>
                </div>

		<!--toTop-->
		<div class="toTop">
			<a href="#header" data-scroll>
				<img src="common/img/totop.png" alt="トップへ戻る">
			</a>
		</div>

		<!--footer-->
		<footer>
		</footer>
	</div>

	<!--mapdata-->
	<script src="common/data/mapdata/sakuradori.geojson"></script>
	<script src="common/data/mapdata/ukairo.geojson"></script>
	<script src="common/data/mapdata/toilet.geojson"></script>
	<script src="common/data/mapdata/ekimae.geojson"></script>
	<script src="common/data/mapdata/tentomura.geojson"></script>
	<script src="common/data/mapdata/tyuou.geojson"></script>
	<script src="common/data/mapdata/wakuwaku.geojson"></script>
	<script src="common/data/mapdata/charity.geojson"></script>
	<script src="common/data/mapdata/donation.geojson"></script>
	<script src="common/data/mapdata/tyuo-parade.geojson"></script>
	<script src="common/data/mapdata/zen-parade.geojson"></script>
	<script src="common/data/mapdata/goko-parade.geojson"></script>
	<script src="common/data/mapdata/honbu.geojson"></script>
	<script src="common/data/mapdata/tent3.geojson"></script>
	<script src="common/data/mapdata/tent4.geojson"></script>
	<script src="common/data/mapdata/tent5.geojson"></script>
	<script src="common/data/mapdata/shelter.geojson"></script>
	<script src="common/data/mapdata/sakuradori-text.geojson"></script>

	<!--js-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
	<script src="http://cdn.leafletjs.com/leaflet-0.7/leaflet.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/5.7.8/js/jquery.mmenu.min.js"></script>
	<script src="common/js/instafeed.min.js"></script>
	<script src="common/js/jquery.easing.1.3.min.js"></script>
	<script src="common/js/jquery.mmenu.min.js"></script>
	<script src="common/js/smooth-scroll.min.js"></script>
	<script src="common/js/Leaflet.ControlledBounds.js"></script>
	<script src="common/js/leaflet-providers.min.js"></script>
	<script src="common/js/L.Control.Locate.min.js"></script>
	<script src="common/js/leaflet.textpath.js"></script>
	<script src="common/js/styledLayerControl.min.js"></script>
	<script src="common/js/map.min.js"></script>
	<script src="common/js/main.min.js"></script>
	<script src="common/js/link_to_checkbox.min.js"></script>

</body>

</html>
