/**
 * The Main function creates and returns a new HTML main element with the id "main".
 * @returns a newly created HTML element with the tag name 'main'.
 */
export function Main () {
    const $main = document.createElement( 'main' );
    $main.id = 'main';
    return $main;
}
