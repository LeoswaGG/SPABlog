/**
 * The `Header` function creates a header element with a menu and returns it.
 * @returns The `Header` function is returning a newly created `header` element with the class name
 * "header" and an appended `Menu` component.
 */
import { Menu } from "./Menu.js";

export function Header () {
    const $header = document.createElement( 'header' );
    $header.classList.add( 'header' );
    $header.appendChild( Menu() );
    return $header;
}
