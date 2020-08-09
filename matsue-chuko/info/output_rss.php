<?php
// タイムゾーンを日本に設定
date_default_timezone_set('Asia/Tokyo');
 
// 取得したいRSSのURLを設定
$url = "http://weather.goo.ne.jp/area/6810.rdf";
// MAXの表示件数を設定
$max = 5;
 
// simplexml_load_file()でRSSをパースしてオブジェクトを取得、オブジェクトが空でなければブロック内を処理
if( $rss = simplexml_load_file( $url ) ){
	$cnt = 0;
	$output = '';
	/*
	* $item->title：タイトル
	* $item->link：リンク
	* strtotime( $item->pubDate )：更新日時のUNIX TIMESTAMP
	* $item->description：詳細
	*/
	// item毎に処理
	foreach( $rss->channel->item as $item ){
		// MAXの表示件数を超えたら終了
		if( $cnt >= $max ) break;
 
		// 日付の表記の設定
		$date = date( 'Y年m月d', strtotime( $item->pubDate ) );
		// 出力する文字列を用意
		$output .= '<a href="'. $item->link .'">' . $date . " " . $item->title . '</a><br>';
		$cnt++;
	}
	// 文字列を出力
	echo $output;
}
