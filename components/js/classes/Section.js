class Section {
	section;
	button;
	indexCurrent = 0;
	zIndex = 1;

	constructor ( section, button ) {
		this.section = document.querySelectorAll( section );
		this.button = document.querySelectorAll( button );
		for ( let index = 0; index < this.button.length; index++ ) {
			this.button[ index ].addEventListener( "click", () => {
				this.appearSection( index );
			} );
		}
	}

	appearSection ( index ) {
		if ( this.indexCurrent != index ) {
			this.zIndex++;
			this.section[ this.indexCurrent ].classList.remove( "sectionAppear" );

			this.button[ this.indexCurrent ].classList.remove( "active" );
			this.button[ index ].classList.add( "active" );

			this.section[ index ].style.zIndex = "" + this.zIndex;

			this.section[ index ].classList.add( "sectionAppear" );

			this.indexCurrent = index;

		}
	}
}

const section = new Section(
	"main section",
	"aside nav ul li button"
);