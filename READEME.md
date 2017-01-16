# omatsuri_tsakura

## Description
千葉県松戸市の常盤平さくらまつり用Webアプリです。  
		お祭りプロジェクトの拡張版になります。  
		https://github.com/codeformatsudo/omatsuri_project  
		ツイッタータイムライン、地図のポイントなどのグループ化を追加しています。

## Demo
  https://codeformatsudo.github.io/omatsuri_tsakura/
		
## Usage
### 情報の掲載
* 必要のないファイルでも削除しないでください。
* dataフォルダ内の各csvファイルを編集してください。1行目の項目は削除せず、2行目以降で必要がない場合は空のセルにしてください。
* イベントスケジュール（event-1.csvとevent-2.csv）は項目がありません。必要ない場合はテキストをすべて削除してください。
* テンプレートの基本色は「赤」「ピンク」「黒」「黄色」です。info.csvの基本色項目にお好みの色を入力してください。
* 目立たせたいお知らせはinfo.txtに入力してください。お知らせがない場合はテキストを削除してください。
* マップはmapdataフォルダのgeojsonとjsフォルダのmap.jsを編集してください。

### コードの修正
* 修正はresourceフォルダ内で作業してください。gulpでdocsに出力しています。