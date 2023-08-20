/**
 * The `Router` function is responsible for updating the content of the `main` element based on the
 * current URL hash.
 */
import { Error404 } from "./Error404.js";
import { Phrases } from "./Phrases.js";
import { PostHome } from "./PostHome.js";
import { ContactForm } from "./ContactForm.js";
import { Hero } from "./Hero.js";
import { About } from "./About.js";

export function Router () { // aquí no puedes usar await porque el código no devuelve una promesa
    const $main = document.getElementById( 'main' );
    const $root = document.getElementById( 'root' );
    const $loader = document.querySelector( '.loader' );
    const { hash } = location;
    $main.innerHTML = null; // cleans the page before charges content 
    document.querySelector( '.loader' ).style.display = 'block';
    if ( !hash || hash === '#/' || hash === '#/inicio' ) {
        setTimeout( () => { // add delay  
            $main.appendChild( Hero() );
            $main.appendChild( About() );
            $main.appendChild( PostHome() );
            $main.appendChild( Phrases() );
            $main.appendChild( ContactForm() );
            $loader.style.display = 'none';
        }, 500 );
    } else if ( hash === '#/disciplina' ) {
        setTimeout( () => {
            $main.innerHTML = '<h2>Disciplina</h2>';
            $loader.style.display = 'none';
        }, 500 );
    } else if ( hash === '#/productividad' ) {
        setTimeout( () => {
            $main.innerHTML = '<h2>Productividad</h2>';
            $loader.style.display = 'none';
        }, 500 );
    } else if ( hash === '#/mentalidad' ) {
        setTimeout( () => {
            $main.innerHTML = '<h2>Mentalidad</h2>';
            $loader.style.display = 'none';
        }, 500 );
    } else if ( hash === '#/masculinidad' ) {
        setTimeout( () => {
            $main.innerHTML = '<h2>Masculinidad</h2>';
            $loader.style.display = 'none';
        }, 500 );
    } else { // if is other route that doesn't exist...
        $root.innerHTML = Error404();
    }
}
