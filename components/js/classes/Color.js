class Color {
	input;
	valueColor;
	constructor ( input ) {
		this.input = document.querySelector( input );
		this.init();
	}
	init () {
		setInterval( () => {
			this.valueColor = this.input.value;
			this.changeColor();
		}, 0 );
	}
	changeColor () {
		document.body.style.setProperty( '--skin-color', this.valueColor );
	}
}

const color = new Color( "aside .theme input" );

