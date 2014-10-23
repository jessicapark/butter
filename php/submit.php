<?php

/*-------------------------
©2014 Zhang Suiyu. All rights reserved.
 QQ:264317980
---------------------------*/
$email=mysql_escape_string(isset($_GET['email'])?$_GET['email']:'');


$con=mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);
mysql_query("set names 'utf8'",$con);
if (!$con){die('Could not connect: ' . mysql_error());}
mysql_select_db(SAE_MYSQL_DB,$con);

$sql="INSERT INTO email (email) VALUES ('$email')";
$res  = mysql_query($sql);

mysql_close($con);

?>