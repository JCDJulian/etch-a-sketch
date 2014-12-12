var numSquares=16;

$(document).ready(function(){
	
	$('body').prepend('<div class="frame"></div>');
	drawPad(numSquares);


});

function drawPad(boxes){
		for(var i = 0; i < numSquares * numSquares; i++){
			$('.frame').append('<div class="square"></div>');
			}

		$('.square').css({
		'height': '20px',
		'width': '20px',
		'border': '1px black solid',
		'background-color' :'white'
	});
}
