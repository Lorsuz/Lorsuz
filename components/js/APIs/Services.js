let Services = document.querySelector( "#services-container" );

fetch( "data.json" ).then( ( response ) => {
	response.json().then( ( data ) => {
		data.services.map( ( card ) => {
			Services.innerHTML +=
				`
				<li class="card">
					<div class="i"><i class="fas fa-${card.icon}"></i></div>
					<h2>${card.service}</h2>
					<p>${card.description}</p>
				</li>
				`;
		} );
	} );
} );