<?php //TwitterOAuthを使う
//https://github.com/abraham/twitteroauth

require_once("twitteroauth-master/autoload.php");
use Abraham\TwitterOAuth\TwitterOAuth;

//設定
$keyword = "#Mステ AND #XJAPAN -RT ";//検索キーワード　「http」をAND検索するとより確実なように思う
$consumerKey = "5YIrA27Ni7cgIYDIpbMW8nxgv";
$consumerSecret = "eWHDHYWyPcPh8d34uLaW5Bl8i788GrMN3CIevdrJRqrPwHJzaS";
$accessToken = "735349674056527872-GQZ4ouNlxAXJ3v0BqOr0GKzVeAwPBfn";
$accessTokenSecret = "ztpZkxEYupaFqKwhm95Hqjwz0iAi0NacYGO8nnkLFQMHt";

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
		  echo "【".$result->user->screen_name . "】 " . $result->text . "<br />";
		}
	} else {
		echo "現在、迷子の情報はありません。";
	}

?>
