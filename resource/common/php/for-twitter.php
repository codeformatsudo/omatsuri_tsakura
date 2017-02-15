require 'TwistOAuth.phar';

$consumer_key = 'xxxxxxxxxxx';
$consumer_secret = 'xxxxxxxxxxx';
$access_token = 'xxxxxxxxxxx';
$access_token_secret = 'xxxxxxxxxxx';

$connection = new TwistOAuth($consumer_key, $consumer_secret, $access_token, $access_token_secret);

// 自分のツイートを取得
$user_params = ['count' => '10'];
$user = $connection->get('statuses/user_timeline', $user_params);

foreach ($user as $value) {
    $text = htmlspecialchars($value->text, ENT_QUOTES, 'UTF-8', false);
    // ツイート表示のHTML生成
    disp_tweet($value, $text);
}


function disp_tweet($value, $text){
    $tweet_id = $value->id_str;
    $url = 'https://twitter.com/' . $screen_name . '/status/' . $tweet_id;

    echo '
' . $text . '
' . PHP_EOL;
    echo '
' . PHP_EOL;
}
