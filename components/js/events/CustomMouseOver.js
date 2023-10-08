const square = document.querySelector( '.custom-cursor' );
const dotOut = document.querySelector( '.dot-out' );
const pointer = document.querySelector( '.custom-pointer' );
const buttonsAndLinks = document.querySelectorAll( 'button, a' );

function checkCursorType ( event ) {
	if ( event.type === 'mouseover' && getComputedStyle( event.target ).cursor === 'pointer' ) {

		square.style.display = 'none';
		dotout.style.display = 'none';
		pointer.style.display = 'block';
	}
	else{
		square.style.display = 'block';
		dotOut.style.display = 'block';
		pointer.style.display = 'none';
	}
}

buttonsAndLinks.forEach( element => {
	element.addEventListener( 'mouseenter', checkCursorType );
} );
