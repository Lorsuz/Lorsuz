let divExperience = document.querySelector( "#experience" );

fetch( "data.json" ).then( ( response ) => {

	response.json().then( ( data ) => {
		data.experience.map( ( card ) => {
			divExperience.innerHTML +=
				`
				<li class="slides-pag">
				<h4>${ card.area }</h4>
				<p>${ card.description }</p>
				</li>
				`;

		} );
	} );
} );