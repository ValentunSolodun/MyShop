window.onload = function (){

	var cart = document.getElementById("cart");
	cart.addEventListener("click",open);

	function open(){
		var table = document.getElementById("table");
		var check = table.getAttribute("class");
		if (check == "table_close"){
			table.setAttribute("class", "table_open");
		}
		else {
			table.setAttribute("class", "table_close");
		}

	}

	var card_img = document.getElementsByClassName("card__img");
	var card_name = document.getElementsByClassName("card__name");
	var card_price = document.getElementsByClassName("card__price");

	var product = {
			0 : {
				0 : 1,
				1 : "BootsOne",
				2 : 143,
				3 : "D:/PROGECTSITE/2/img/product.png"
				},

			1 : {
				0 : 2,
				1 : "BootsTwo",
				2 : 1112,
				3 : "D:/PROGECTSITE/2/img/product2.png"
				},
			2 : {
				0 : 3,
				1 : "BootsThree",
				2 : 4523,
				3 : "D:/PROGECTSITE/2/img/product3.png"
				},
			3 : {
				0 : 3,
				1 : "BootsFour",
				2 : 523,
				3 : "D:/PROGECTSITE/2/img/product4.png"
				},
			4 : {
				0 : 3,
				1 : "BootsFive",
				2 : 453,
				3 : "D:/PROGECTSITE/2/img/product5.png"
				},
			5 : {
				0 : 3,
				1 : "BootsSix",
				2 : 732,
				3 : "D:/PROGECTSITE/2/img/product6.png"
				}
		};

		for (var i = 0; i < 6; i++){
			for (var j = 0; j < 4; j++){
				card_name[i].innerHTML = product[i][1];
				card_price[i].innerHTML = "$" + product[i][2];
				card_img[i].src = product[i][3];
			}
		}	
}