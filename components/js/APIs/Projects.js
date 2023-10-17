let Projects = document.querySelector( "#projects-container" );

fetch( "data.json" ).then( ( response ) => {
	response.json().then( ( data ) => {
		data.projects.map( ( card ) => {
			Projects.innerHTML +=
				`
				<li class="card">
					<div class="img"><img src="components/static/img/projects/${card.image}" alt="${card.image}">
					</div>
					<div class="details">
					<h3>${card.project}</h3>
						<div class="skill-tags">${
							card.skills.map( ( skill ) => {
								return `<span class="tag">${skill}</span>`;
							} ).join( "" )
						}
						</div>
						<p>${card.description}</p>
						<div class="links">
							<a href="https://github.com/Lorsuz/${card.repository}" target="_blank">Repository</a>
							${
								card.pages ?	`<a href="${card.pages}" target="_blank">Web Site</a>`:""
							}
						</div>
					</div>
				</li>
				`;
		} );
	} );
} );