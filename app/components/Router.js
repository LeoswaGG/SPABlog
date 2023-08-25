/**
 * The `Router` function is responsible for updating the content of the `main` element based on the
 * current URL hash, and it also handles error cases.
*/
import { Error404 } from "./Error404.js";
import { Phrases } from "./Phrases.js";
import { PostHome } from "./PostHome.js";
import { ContactForm } from "./ContactForm.js";
import { Hero } from "./Hero.js";
import { About } from "./About.js";
import { HeaderSection } from "./HeaderSection.js";
import { PostCard } from "./PostCard.js";
import { OurPact } from "./OurPactSection.js";
import { postsData } from "../helpers/postsData.js";
import { quotes } from "../helpers/quotesData.js";
import { PostContainer } from "./PostContainer.js";

export function Router () { // aquí no puedes usar await porque el código no devuelve una promesa
    const $main = document.getElementById( 'main' );
    const $root = document.getElementById( 'root' );
    const $loader = document.querySelector( '.loader' );
    const categoryPostUrl = location.hash.split( '/' )[ 1 ];
    const idPostUrl = location.hash.split( '/' )[ 3 ];
    const { hash } = location;
    $main.innerHTML = null; // cleans the page before charges content 
    document.querySelector( '.loader' ).style.display = 'block';
    if ( !hash || hash === '#/' || hash === '#/inicio' ) {
        setTimeout( () => { // add delay  
            $main.appendChild( Hero() );
            $main.appendChild( About() );
            $main.appendChild( PostHome() );
            $main.appendChild( Phrases( quotes ) );
            $main.appendChild( OurPact() );
            $main.appendChild( ContactForm() );
            $loader.style.display = 'none';
        }, 500 );
    } else if ( hash === '#/disciplina' ) {
        setTimeout( () => {
            $main.appendChild( HeaderSection( 'Dominio Propio' ) );
            const $fragment = document.createDocumentFragment();
            const $section = document.createElement( 'section' );
            const $divContainer = document.createElement( 'div' );
            $divContainer.classList.add( 'post-container' );
            for ( const post in postsData.disciplina ) {
                $fragment.appendChild( PostCard( postsData.disciplina[ post ] ) );
            }
            $divContainer.appendChild( $fragment );
            $section.appendChild( $divContainer );
            $main.appendChild( $section );
            $loader.style.display = 'none';
        }, 500 );
    } else if ( hash === '#/productividad' ) {
        setTimeout( () => {
            $main.appendChild( HeaderSection( 'Momentum' ) );
            const $fragment = document.createDocumentFragment();
            const $section = document.createElement( 'section' );
            const $divContainer = document.createElement( 'div' );
            $divContainer.classList.add( 'post-container' );
            for ( const post in postsData.productividad ) {
                $fragment.appendChild( PostCard( postsData.productividad[ post ] ) );
            }
            $divContainer.appendChild( $fragment );
            $section.appendChild( $divContainer );
            $main.appendChild( $section );
            $loader.style.display = 'none';
        }, 500 );
    } else if ( hash === '#/mentalidad' ) {
        setTimeout( () => {
            $main.appendChild( HeaderSection( 'Voluntad Inquebrantable' ) );
            const $fragment = document.createDocumentFragment();
            const $section = document.createElement( 'section' );
            const $divContainer = document.createElement( 'div' );
            $divContainer.classList.add( 'post-container' );
            for ( const post in postsData.mentalidad ) {
                $fragment.appendChild( PostCard( postsData.mentalidad[ post ] ) );
            }
            $divContainer.appendChild( $fragment );
            $section.appendChild( $divContainer );
            $main.appendChild( $section );
            $loader.style.display = 'none';
        }, 500 );
    } else if ( hash === '#/masculinidad' ) {
        setTimeout( () => {
            $main.appendChild( HeaderSection( 'Titanes de excelencia' ) );
            const $fragment = document.createDocumentFragment();
            const $section = document.createElement( 'section' );
            const $divContainer = document.createElement( 'div' );
            $divContainer.classList.add( 'post-container' );
            for ( const post in postsData.masculinidad ) {
                $fragment.appendChild( PostCard( postsData.masculinidad[ post ] ) );
            }
            $divContainer.appendChild( $fragment );
            $section.appendChild( $divContainer );
            $main.appendChild( $section );
            $loader.style.display = 'none';
        }, 500 );
    } else if ( hash.includes( 'articulo/' ) ) {
        setTimeout( () => {
            const categoryPost = postsData[ `${ categoryPostUrl }` ]; // recupera la categoría de la url
            // si no existe la categoría o el id del post en la url...
            if ( !categoryPost || !idPostUrl ) $root.innerHTML = Error404();
            const idPost = categoryPost[ `post${ idPostUrl }` ]; // recupera el id del post de la url 
            // si no existe el id del post...
            if ( !idPost ) $root.innerHTML = Error404();
            $main.appendChild( PostContainer( idPost ) );
            $loader.style.display = 'none';
        }, 500 );
    } else { // if is other route that doesn't exist...
        $root.innerHTML = Error404();
    }
}

