/**
 * The `Loader` function creates and returns an image element with a loader SVG, alt text, and a CSS
 * class.
 * @returns an HTML image element with the following properties:
 * - src: 'app/assets/loader.svg'
 * - alt: 'Cargando...'
 * - class: 'loader'
 */
export function Loader () {
    const $loader = document.createElement( 'img' );
    $loader.src = 'app/assets/loader.svg';
    $loader.alt = 'Cargando...';
    $loader.classList.add( 'loader' );
    return $loader;
}
