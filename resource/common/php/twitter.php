<?php //TwitterOAuthを使う
//https://github.com/abraham/twitteroauth

require_once("twitteroauth-master/autoload.php");
use Abraham\TwitterOAuth\TwitterOAuth;

//設定
$keyword = "#常盤平さくらまつり実行委員会 AND #お知らせ";//検索キーワード　「http」をAND検索するとより確実なように思う
$consumerKey = "";
$consumerSecret = "";
$accessToken = "";
$accessTokenSecret = "";

$connection = new TwitterOAuth($consumerKey, $consumerSecret, $accessToken, $accessTokenSecret);


$string = $connection->OAuthRequest(
	'https://api.twitter.com/1.1/search/tweets.json?q=twitterapi',
	'GET',
	array(
			"q"=>$keyword, //検索キーワード
			"result_type"=>"recent", //新着順に取得
			"count"=>10, //取得件数（100件が上限）
		)
	);
	if($string){
	//検索結果をjson_decodeで配列にしてforeach
		$obj = json_decode($string);

		foreach ($obj->statuses as $result) {
			$str = $result->text;
			$replace = str_replace('#常盤平さくらまつり実行委員会', '', $str);
			$replace = str_replace('#お知らせ', '', $replace);
		  echo $replace . "<br />";
		}
	} else {
		echo "現在、お知らせはありません。";
	}

?>
