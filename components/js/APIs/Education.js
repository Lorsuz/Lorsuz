let divEducation = document.querySelector( "#education" );

fetch( "data.json" ).then( ( response ) => {
	response.json().then( ( data ) => {
		data.education.map( ( card ) => {
			divEducation.innerHTML +=
				`
				<li>
					<div class="point"></div>
					<div class="time"><i class="fa-solid fa-calendar"></i><span>${ card.startYear } - ${ card.finalYear }</span></div>
					<h4>${ card.nameSchool }</h4>
					<p>${ card.description }</p>
				</li>
				`;
		} );
	} );
} );