$(document).ready(function(){
	//Esta clase activa el primer enlace
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	$('.category_item').click(function(){
		//Guarda en variable la categoria seleccionada
		var catProduct = $(this).attr('category');
		//Quita clase al anterior enlace seleccionado
		$('.category_item').removeClass('ct_item-active');
		//Agrega clase al nuevo enlace seleccionado
		$(this).addClass('ct_item-active');

		//Ocultar productos
		$('.product-item').hide();
		//Filtar productos
		$('.product-item[category="'+catProduct+'"]').show();

	});
});










// $(document).ready(function(){

// 	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
// 	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

// 	// FILTRANDO PRODUCTOS  ============================================

// 	$('.category_item').click(function(){
// 		var catProduct = $(this).attr('category');
// 		console.log(catProduct);

// 		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
// 		$('.category_item').removeClass('ct_item-active');
// 		$(this).addClass('ct_item-active');

// 		// OCULTANDO PRODUCTOS =========================
// 		$('.product-item').css('transform', 'scale(0)');
// 		function hideProduct(){
// 			$('.product-item').hide();
// 		} setTimeout(hideProduct,400);

// 		// MOSTRANDO PRODUCTOS =========================
// 		function showProduct(){
// 			$('.product-item[category="'+catProduct+'"]').show();
// 			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
// 		} setTimeout(showProduct,400);
// 	});

// 	// MOSTRANDO TODOS LOS PRODUCTOS =======================

// 	$('.category_item[category="all"]').click(function(){
// 		function showAll(){
// 			$('.product-item').show();
// 			$('.product-item').css('transform', 'scale(1)');
// 		} setTimeout(showAll,400);
// 	});
// });