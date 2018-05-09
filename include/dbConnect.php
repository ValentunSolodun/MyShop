<?php 
	$db_host = "localhost";
	$db_user = "ShopAdmin";
	$db_pass = "admin123";
	$db_database = "Shop";

	$link = mysql_connect($db_host, $db_user, $db_pass);

	mysql_select_db($db_database, $link) or die("Нет соедиенния с БД".mysql_error());
	mysql_query("SET names cp1251");
 ?>