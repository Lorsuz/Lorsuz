const dotIn = document.querySelector( '.dot-in' );
const dotOut = document.querySelector( '.dot-out' );
const dotPointer = document.querySelector( '.dot-pointer' );

const buttonsAndLinks = document.querySelectorAll( 'button, a' );

function checkCursorType ( event ) {
	if ( event.type === 'mouseover' && getComputedStyle( event.target ).cursor === 'pointer' ) {
		dotIn.style.opacity = '0';
		dotOut.style.opacity = '0';
		dotPointer.style.opacity = '0.5';
	} else {
		dotIn.style.opacity = '1';
		dotOut.style.opacity = '1';
		dotPointer.style.opacity = '0';
	}
}

buttonsAndLinks.forEach( element => {
	element.addEventListener( 'mouseover', checkCursorType );
	element.addEventListener( 'mouseout', checkCursorType );
} );

