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
            $main.appendChild( Phrases( {
                quote1: {
                    quote: 'El éxito son las metas, todo lo demás son comentarios',
                    author: 'Brian Tracy'
                },
                quote2: {
                    quote: 'Somos lo que somos porque primero lo hemos imaginado',
                    author: 'Donald Curtis'
                },
                quote3: {
                    quote: 'Cada ser nació con algún destino, ¿para qué fuiste creado tú?',
                    author: 'Marco Aurelio'
                },
                quote4: {
                    quote: 'Si no puedes controlar tu mente, entonces no puedes controlar nada más',
                    author: 'Napoleon Hill'
                },
                quote5: {
                    quote: 'La negación es la máxima zona de confort',
                    author: 'David Goggins'
                },
                quote6: {
                    quote: 'Un hombre es dueño de su destino en la medida en que es dueño de su atención',
                    author: 'La ducha fría'
                }
            } ) );
            $main.appendChild( OurPact() );
            $main.appendChild( ContactForm() );
            $loader.style.display = 'none';
        }, 500 );
    } else if ( hash === '#/disciplina' ) {
        setTimeout( () => {
            $main.appendChild( HeaderSection( 'Dominio Propio' ) );
            $main.appendChild( PostCard( [], [], [] ) );
            $loader.style.display = 'none';
        }, 500 );
    } else if ( hash === '#/productividad' ) {
        setTimeout( () => {
            $main.appendChild( HeaderSection( 'Momentum' ) );
            $main.appendChild( PostCard( [], [], [] ) );
            $loader.style.display = 'none';
        }, 500 );
    } else if ( hash === '#/mentalidad' ) {
        setTimeout( () => {
            $main.appendChild( HeaderSection( 'Voluntad Inquebrantable' ) );
            $main.appendChild( PostCard( [], [], [] ) );
            $loader.style.display = 'none';
        }, 500 );
    } else if ( hash === '#/masculinidad' ) {
        setTimeout( () => {
            $main.appendChild( HeaderSection( 'Titanes de excelencia' ) );
            $main.appendChild( PostCard( [], [], [] ) );
            $loader.style.display = 'none';
        }, 500 );
    } else { // if is other route that doesn't exist...
        $root.innerHTML = Error404();
    }
}

