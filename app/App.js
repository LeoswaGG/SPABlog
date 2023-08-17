/**
 * The App function sets up the root element, adds the Header and Main components to it, and
 * initializes the Router.
 */
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";

export function App () {
    const $root = document.getElementById( 'root' );

    $root.innerHTML = null; // cleans the page before charges content
    $root.appendChild( Header() );
    $root.appendChild( Main() );

    Router();
}
