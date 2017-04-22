
$(document).ready(function () {
	$('#fill-div').click(function(event){
		console.log("Clicked");
		//$(this).parents('container').find('.card').nextAll('.card').eq(0).show();
		//$(this).closest('.card').nextAll('.card').eq(0).show();

		var card = $("div:hidden").eq(0);
		card.show();
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		event.preventDefault();	

		var isVisible = $('.series').is(':visible');
		if(isVisible){
			$('#show-more').hide();
		}

	});		
});
