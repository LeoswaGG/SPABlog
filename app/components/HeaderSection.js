/**
 * The `HeaderSection` function creates a header section with a logo, title, and search box, and
 * includes functionality to filter posts based on a search query.
 * @param title - The title parameter is a string that represents the title of the header section.
 * @returns a dynamically created HTML section element with a header section.
 */
export function HeaderSection ( title ) {
	const $section = document.createElement( 'section' );
	$section.innerHTML = ` 
		<div class="container">
			<div class="logo-card">
				<img src="app/assets/logo-no-background.webp" alt="logo" class="logo-section">
			</div>
			<div class="title-card">
				<h2>${ title }</h2>
			</div>
			<div class="search-card">
				<div class="search-box">
					<input type="search" class="search-input" placeholder="Search...">
					<div class="search-icon">
						<button class="search-button">
							<i class="fas fa-search"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
		<p class="error-query">ola</p>`;
	setTimeout( () => {
		document.addEventListener( 'keyup', ( e ) => {
			if ( e.target.matches( '.search-input' ) ) {
				if ( e.key === 'Enter' ) {
					const query = e.target.value.toLowerCase();
					const $errorQuery = document.querySelector( '.error-query' );
					const $posts = Array.from( document.querySelectorAll( '.post' ) );
					let isCoincidence = false;
					$posts.filter( ( post ) => {
						if ( post.querySelector( '.post-title' ).textContent.toLowerCase().includes( query ) ) {
							isCoincidence = true;
							post.classList.remove( 'post-hidden' );
							post.classList.add( 'post-visible' );
						} else {
							post.classList.remove( 'post-visible' );
							post.classList.add( 'post-hidden' );
						}
					} );
					isCoincidence ? ( $errorQuery.style.display = 'none' ) : ( ( $errorQuery.textContent = `No hay resultados para esta búsqueda: "${ query }"` ), ( $errorQuery.style.display = 'block' ) );
				}
			}
		} );
	}, 100 );
	return $section;
}
