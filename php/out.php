<?php

/*-------------------------
©2014 Zhang Suiyu. All rights reserved.
 QQ:264317980
---------------------------*/

$con=mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);
mysql_query("set names 'utf8'",$con);
if (!$con){die('Could not connect: ' . mysql_error());}
mysql_select_db(SAE_MYSQL_DB,$con);


$sql="SELECT * FROM email";

$res  = mysql_query($sql);
$arr=array();

while($row = mysql_fetch_array($res,MYSQL_ASSOC))
 {
echo $row['email'].'<br>';

 }
 


mysql_close($con);


?>