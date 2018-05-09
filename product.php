<?php require ("include/dbConnect.php") ?>

<section class="section_one">
		<div class="container">
			<div class="row">
				<div class="col-xl-12 d-flex justify-content-center">
					<div class="popular__product">
						Popular product
					</div>
				</div>
					<?php 
						$result = mysql_query("SELECT * FROM products_popular", $link);

						if (mysql_num_rows($result) > 0){
							$row = mysql_fetch_array($result);

							do {
								
								echo "<div class='col-xl-4 d-flex justify-content-center'>
										<div class='card__product' id='card__product'>
											<div><img class ='card__img' src='/img/".$row['img']."'></div>
											<p class='card__name'>".$row['title']."</p>
											<p class'card__price'> $ ".$row['price']."</p>
											<p class='add__card'>+</p>
										</div>
									</div>";

							}while($row = mysql_fetch_array($result));
						}
					 
					 ?>
			</div>
		</div>
	</section>