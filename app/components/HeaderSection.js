/**
 * The `HeaderSection` function creates a section element with a logo, title, and search box.
 * @param title - The title parameter is a string that represents the title of the header section.
 * @returns a dynamically created HTML section element with a header section. The title parameter is
 * used to populate the heading element in the section.
 */

export function HeaderSection ( title ) {
	const $section = document.createElement( 'section' );
	$section.innerHTML = ` 
		<div class="container">
			<div class="logo-card">
				<img src="app/assets/logo-no-background.png" alt="logo" class="logo-section">
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
		</div>`;
	return $section;
}
