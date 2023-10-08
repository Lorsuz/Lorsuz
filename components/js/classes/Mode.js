class Mode {
	button;
	dark = false;
	icon;
	times = 1;

	constructor ( button ) {
		this.button = document.querySelector( button );
		this.icon = document.querySelector( button + " i" );
		this.button.addEventListener( "click", () => { this.toggleMode(); } );
	}

	toggleMode () {

		this.icon.style.transform = `rotate(${ this.times * 360 }deg)`;
		this.times++;

		if ( this.dark ) {
			this.dark = false;
			setTimeout( () => {
				this.icon.classList.add( 'fa-sun' );
				this.icon.classList.remove( 'fa-moon' );
			}, 200 );
			document.body.classList.remove( "dark" );
		} else {
			this.dark = true;
			setTimeout( () => {
				this.icon.classList.remove( 'fa-sun' );
				this.icon.classList.add( 'fa-moon' );
			}, 200 );
			document.body.classList.add( "dark" );
		}
	}
}

const mode = new Mode( "aside .theme button" );