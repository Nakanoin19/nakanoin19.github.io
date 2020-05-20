<?php 
$source = file_get_contents("https://api.github.com/repos/hayao-serene/serene-startdash-scripts-bionic/releases/latest", false, stream_context_create(array(
    'http'=>array(
        'method'=>"GET",
        'header'=>"User-Agent: Mozilla/5.0 (Windows NT 5.1; rv:13.0) Gecko/20100101 Firefox/13.0.1",
        'ignore_errors'=>true,
    ),
)));
$user = json_decode($source, true);
$user_data = array(
  'tag_name' => $user['tag_name']
);
header("Location: https://github.com/hayao-serene/serene-startdash-scripts-bionic/archive/".$user['tag_name'].".tar.gz");exit;
