<?php
if(isset($_GET['comment'])){
$comment = $_GET['comment'];
echo $comment;
}
?>
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<title>Form</title>
</head>
<body>
	<?php
	if(isset($_POST['text1'])){

	$input_data = $_POST['text1'];
	echo $input_data;
	}
	?>
</body>
</html>
