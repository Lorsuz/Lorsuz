export default class Slide {
	slide;
	prev;
	next;
	dot;
	slideCurrent = 0;
	totalSlides;
	interval;

	constructor ( slide, prev, next, dot ) {
		this.slide = document.querySelectorAll( slide );
		this.prev = document.querySelector( prev ).addEventListener( "click", () => {
			this.calculateSlideCurrent( -1 );
		} );
		this.next = document.querySelector( next ).addEventListener( "click", () => {
			this.calculateSlideCurrent( 1 );
		} );
		this.dot = document.querySelectorAll( dot );
		for ( let index = 0; index < this.dot.length; index++ ) {
			this.dot[ index ].addEventListener( "click", () => {
				this.removeAnimation();
				this.animationEffect( this.slideCurrent, index );
				this.changeSlideCurrent( index );
			} );
		}
		this.totalSlides = this.slide.length - 1;
		this.slide[ 0 ].classList.add( "active" );

		this.init();
	}

	init () {
		this.interval = setInterval( () => {
			this.calculateSlideCurrent( 1 );
		}, 5000 );
	}

	calculateSlideCurrent ( value ) {
		this.removeAnimation();
		var index = this.slideCurrent;
		index += value;
		if ( index < 0 ) {
			index = this.totalSlides;
		}
		if ( index > this.totalSlides ) {
			index = 0;
		}
		this.animationEffect( this.slideCurrent, index, value );
		this.changeSlideCurrent( index );
	}

	animationEffect ( slideCurrent, index, value = 0 ) {
		if ( value == 1 ) {
			this.slide[ slideCurrent ].classList.add( "toRightOld" );
			this.slide[ index ].classList.add( "toRightNew" );
		} else if ( value == -1 ) {
			this.slide[ this.slideCurrent ].classList.add( "toLeftOld" );
			this.slide[ index ].classList.add( "toLeftNew" );
		} else if ( slideCurrent < index ) {
			this.slide[ slideCurrent ].classList.add( "toRightOld" );
			this.slide[ index ].classList.add( "toRightNew" );
		} else if ( slideCurrent > index ) {
			this.slide[ slideCurrent ].classList.add( "toLeftOld" );
			this.slide[ index ].classList.add( "toLeftNew" );
		}

	}

	changeSlideCurrent ( index ) {
		this.slide[ this.slideCurrent ].classList.remove( "active" );
		this.dot[ this.slideCurrent ].classList.remove( "active" );
		this.slideCurrent = index;
		this.slide[ this.slideCurrent ].classList.add( "active" );
		this.dot[ this.slideCurrent ].classList.add( "active" );

		this.init();
	}

	removeAnimation () {
		clearInterval( this.interval );
		this.slide.forEach( element => {
			element.classList.remove( "toRightOld" );
			element.classList.remove( "toRightNew" );
			element.classList.remove( "toLeftOld" );
			element.classList.remove( "toLeftNew" );
		} );
	}

}