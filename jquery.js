var gridSize=16;
$(document).ready(function(){
	
	$('body').prepend('<div class="frame"></div>');
	drawPad(gridSize);

	//Gradient Black mode
	$('body').prepend('<button type="button" id="gradient">Gradient</button>');
	$('#gradient').on('click', function(){
		$('.square')
		.hover(function(){
			$(this).css('background-color', 'black');
		});

		$('.square').hover(function(){
			var currentOpacity = $(this).css("opacity");
			console.log(currentOpacity);
			if (currentOpacity != 0){
			$(this).css('opacity', currentOpacity - .1);
			}
		});
	});

	//Random Color mode
	$('body').prepend('<button type="button" id="random">Random Colors</button>');
	$('#random').on('click', function(){
		$('.square').css({})
		.hover(function(){
			var randColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
			$(this).css('background-color',randColor)
		});
	});

	//Resize
	$('body').prepend('<button type="button" id="resize">Resize</button>');
	$('#resize').on('click', function(){//when resize is clicked,
		gridSize = prompt("Please enter the desired grid size: (e.g. 16 will create a 16 x 16 grid)", "16");//prompt for size
		$('.row').remove();//remove all rows
		drawPad(gridSize);//redraw with new grid
	});



});

function drawPad(gridSize){
		for(var i = 0; i < gridSize; i++){//create rows
			$('.frame').append('<div class="row"></div>');
		}
		for (var j = 0; j < gridSize; j++){//create colums
			$('.row').append('<div class="square"></div>');
		}

		var square_size = $('.frame').width()/gridSize-5;//set size of squares to be proportional to the frame width

		$('.square').css({
		display: 'inline-block',
		'height': square_size,
		'width': square_size,
		'border': '1px black solid',
		'background-color' :'white'
	})

		.hover(function(){
			$(this).css('background-color','lavender')
		});


}

