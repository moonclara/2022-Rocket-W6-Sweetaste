$(function () {
  console.log('Hello Bootstrap5');
});

//product.html
$('.product-list-item').click(function (e) {
  e.preventDefault();
  $( this).toggleClass( "active" );
 })