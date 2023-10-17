class Color {
	input;
	valueColor;

	constructor ( input ) {
		this.input = document.querySelector( input );
		this.init();
	}

	init () {
		this.input.addEventListener( 'input', () => {
			this.valueColor = this.input.value;
			console.log( this.valueColor );
			this.changeColor(); 
		} );
	}

	changeColor () {
		document.body.style.setProperty( '--skin-color', this.valueColor );
	}
}

const color = new Color( "aside .theme input" );
 
