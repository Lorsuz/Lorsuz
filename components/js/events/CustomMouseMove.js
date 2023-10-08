const square = document.querySelector( '.custom-cursor' );
const dotout = document.querySelector( '.dotout' );
const pointer = document.querySelector( '.custom-pointer' );

document.addEventListener( 'mousemove', ( e ) => {
	const x = e.clientX;
	const y = e.clientY;

	pointer.style.background = `var(--color-theme${ 'cc' })`;

	square.style.transform = `translate(${ x - 3 }px, ${ y - 3 }px)`;
	dotout.style.transform = `translate(${ x - 15 }px, ${ y - 15 }px)`;
	pointer.style.transform = `translate(${ x - 25 }px, ${ y - 25 }px)`;
} );