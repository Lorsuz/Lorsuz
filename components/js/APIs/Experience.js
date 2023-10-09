import Slide from "../classes/Slide.js";

let divExperience = document.querySelector( "#experience" );

async function fetchData () {
	try {
		const response = await fetch( "data.json" );
		const data = await response.json();

		data.experience.forEach( ( card ) => {
			divExperience.innerHTML +=
				`
        <li class="slides-pag">
          <h4>${ card.area }</h4>
          <p>${ card.description }</p>
        </li>
        `;
		} );

		new Slide(
			"main section.about .container .geral-data .data-self .xp .slides #experience li",
			"main section.about .container .geral-data .data-self .xp .slides .prev",
			"main section.about .container .geral-data .data-self .xp .slides .next",
			"main section.about .container .geral-data .data-self .xp .slides .dots .dot"
		);
	} catch ( error ) {
		console.error( "Error fetching data:", error );
	}
}

fetchData();



