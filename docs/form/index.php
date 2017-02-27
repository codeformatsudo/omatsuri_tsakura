<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<title>info text</title>
</head>
<body>
<p>お知らせの書き込み</p>

<form method="POST" action="<?php print($_SERVER['PHP_SELF']) ?>">
	<textarea name="contents" cols="40" rows="20"></textarea><br>
	<input type="submit" name="btn1" value="投稿する">
</form>

	<?php
	if(isset($_POST['contents'])){
		$contents = $_POST['contents'];
$contents = nl2br($contents);

		$text_file = '../common/data/info.txt';
		$fp = fopen($text_file, 'r+');

		if($fp){
			if(flock($fp, LOCK_EX)){
				if(fwrite($fp, $contents) === FALSE){
					print('ファイルの書き込みに失敗しました');
				}
				flock($fp, LOCK_UN);
			} else {
				print('ファイルロックに失敗しました');
			}
		}
		fclose($fp);
	print('<p>'.$contents.'<p>');
	}
	?>
</body>
</html>
