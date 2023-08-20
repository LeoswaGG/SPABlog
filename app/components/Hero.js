/**
 * The Hero function creates a section element with a hero class and inner HTML content for a website's
 * hero section.
 * @returns a section element with the class "hero" and the following HTML content:
 */
export function Hero () {
    const $section = document.createElement( 'section' );
    $section.classList.add( 'hero' );
    $section.innerHTML = `
    <div class="hero-content">
        <img src="app/assets/logo-no-background.png" alt="disciplinaXcelencia-logo" class="about-logo">
        <h1>¡Bienvenidos a Nuestra Historia!</h1>
        <p class="phrase">Ve por la excelencia en cada una de tus acciones</p>
    </div>`;
    return $section;
}
