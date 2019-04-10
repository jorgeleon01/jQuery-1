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

        //Funcion para ocultar todos los productos
        $('.product-item').css('transform','scale(0)');
        function hideProduct(){
            $('.product-item').hide();
        }setTimeout(hideProduct,400);
        //Funcion para mostrar los productos de la categoria seleccionada
        function showProduct(){
            $('.product-item[category="'+catProduct+'"]').show();
            $('.product-item[category="'+catProduct+'"]').css('transform','scale(1)');
        }setTimeout(showProduct,400);
    });

    //Funcion para mostrar todos los productos
    $('.category_item[category="all"]').click(function(){
        function showAll(){
            $('.product-item').show();
            $('.product-item').css('transform','scale(1)');
        }setTimeout(showAll,400);
    });
});