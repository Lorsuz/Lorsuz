let HardSkills = document.querySelector( "#hardSkills-container" );

fetch( "data.json" ).then( ( response ) => {

	response.json().then( ( data ) => {
		
		var amountItems = data.skills.length;
		var itemCurrent = 0;
		var sections = [ "Linguagens", "Pré-processadores", "Frameworks", "Acessórios", "Engines" ];
		var newUlStart = [ 0, 8, 10, 12, 16 ];
		var nameSection = 0;
		data.skills.map( ( card ) => {

			function newSection ( index = 0 ) {
				if ( itemCurrent == index ) {
					HardSkills.innerHTML +=
						`
						<h4>${ sections[ nameSection ] }</h4>
						<ul class="${ sections[ nameSection ] }"></ul>
						`;
					nameSection++;
				}
			}
			for ( let index = 0; index < newUlStart.length; index++ ) {
				newSection( newUlStart[ index ] );
			}

			let divUl = document.querySelector( `#hardSkills-container > ul.${ sections[ nameSection - 1 ] }` );
			divUl.innerHTML +=
				`
				<li>
					<div class="progress">
						<div class="name-porcent">
							<span>${ card.technology }</span>
							<div class="details">${ card.details }</div>
							<span>${ card.percent }%</span>
						</div>
						<div class="progress-bar">
							<div class="progress-value" style="width: ${ card.percent }%;"></div>
						</div>
					</div>
				</li>
				`;
			itemCurrent++;
		} );
	} );
} );