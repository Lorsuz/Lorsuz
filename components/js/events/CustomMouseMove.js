const dotIn = document.querySelector( '.dot-in' );
const dotOut = document.querySelector( '.dot-out' );
const dotPointer = document.querySelector('.dot-pointer');



document.addEventListener( 'mousemove', ( e ) => {
	var x = e.clientX;
	var y = e.clientY;

	var radiusDotIn = dotIn.offsetWidth / 2;
	var radiusDotOut = dotOut.offsetWidth / 2;
	var radiusDotPointer = dotPointer.offsetWidth / 2;

	var Dot = {
		In: {
			x: x - radiusDotIn,
			y: y - radiusDotIn
		},
		Out: {
			x: x - radiusDotOut,
			y: y - radiusDotOut
		},
		Pointer: {
			x: x - radiusDotPointer,
			y: y - radiusDotPointer
		}
	};

	function calcElementPositionInScreenMargin ( cursorPosition, elementPosition, sizeScreen, elementRadius ) {
		var result;
		if ( cursorPosition >= sizeScreen - elementRadius ) result = sizeScreen - ( elementRadius * 2 );
		else if ( cursorPosition <= elementRadius ) result = 0;
		else result = elementPosition;
		return result;
	}

	dotIn.style.transform = `translate(
		${ calcElementPositionInScreenMargin( x, Dot.In.x, window.innerWidth, radiusDotIn ) }px,
		${ calcElementPositionInScreenMargin( y, Dot.In.y, window.innerHeight, radiusDotIn ) }px)`;
	dotOut.style.transform = `translate(
			${ calcElementPositionInScreenMargin( x, Dot.Out.x, window.innerWidth, radiusDotOut ) }px,
			${ calcElementPositionInScreenMargin( y, Dot.Out.y, window.innerHeight, radiusDotOut ) }px)`;
	dotPointer.style.transform = `translate(
			${ calcElementPositionInScreenMargin( x, Dot.Pointer.x, window.innerWidth, radiusDotPointer ) }px,
			${ calcElementPositionInScreenMargin( y, Dot.Pointer.y, window.innerHeight, radiusDotPointer ) }px)`;
} );