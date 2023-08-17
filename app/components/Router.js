/**
 * The `Router` function is responsible for updating the content of the `main` element based on the
 * current URL hash.
 */
import { Error404 } from "./Error404.js";

export async function Router () {
    const $main = document.getElementById( 'main' );
    const $root = document.getElementById( 'root' );
    const { hash } = location;
    $main.innerHTML = null; // cleans the page before charges content 

    if ( !hash || hash === '#/' || hash === '#/inicio' ) {
        $main.innerHTML = '<h2>Inicio</h2>';
    } else if ( hash === '#/disciplina' ) {
        $main.innerHTML = '<h2>Disciplina</h2>';
    } else if ( hash === '#/productividad' ) {
        $main.innerHTML = '<h2>Productividad</h2>';
    } else if ( hash === '#/mentalidad' ) {
        $main.innerHTML = '<h2>Mentalidad</h2>';
    } else if ( hash === '#/masculinidad' ) {
        $main.innerHTML = '<h2>Masculinidad</h2>';
    } else { // if is other route that doesn't exist...
        $root.innerHTML = Error404();
    }
}
