/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function(){

	$('#navigationMenu li .normalMenu').each(function(){

		$(this).before($(this).clone().removeClass().addClass('hoverMenu'));

	});
	
	$('#navigationMenu li').hover(function(){
	
		$(this).find('.hoverMenu').stop().animate({marginTop:'0px'},200);

	},
	
	function(){
	
		$(this).find('.hoverMenu').stop().animate({marginTop:'-35px'},200);

	});
	
});