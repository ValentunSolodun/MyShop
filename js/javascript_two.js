window.onload = function () {		
		
		var add_card = document.getElementsByClassName("add__card");

		var id_add = document.getElementById("id__add");
		var img_add = document.getElementById("img__add");
		var name_add = document.getElementById("name__add");
		var price_add = document.getElementById("price__add");

		for (var h = 0; h < add_card.length; h++){
			add_card[h].addEventListener("click",addToCart);
		}

		function addToCart(){
			alert("adwdwa");
		}

}