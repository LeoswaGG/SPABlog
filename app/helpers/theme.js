/**
 * The above function is a JavaScript code that handles the theme switching functionality on a webpage
 * using localStorage.
 */
export function Theme () {
    const $themeImg = document.getElementById( 'theme-2' );
    const $body = document.querySelector( 'body' );
    const $loader = document.querySelector( '.loader' );
    const theme = localStorage.getItem( 'theme' ); // default value - null
    const moon = 'app/assets/dark.webp';
    const sun = 'app/assets/light.webp';
    const darkLoader = 'app/assets/loader-dark.svg';
    const lightLoader = 'app/assets/loader.svg';
    const lightTheme = () => {
        localStorage.setItem( 'theme', 'light' );
        $body.classList.add( 'body-light' );
        $themeImg.src = moon;
        $loader.src = darkLoader;
    };
    const darkTheme = () => {
        localStorage.setItem( 'theme', 'dark' );
        $body.classList.remove( 'body-light' );
        $themeImg.src = sun;
        $loader.src = lightLoader;
    };
    if ( theme === null ) {
        localStorage.setItem( 'theme', 'dark' );
    }
    if ( theme === 'dark' ) {
        darkTheme();
    }
    if ( theme === 'light' ) {
        lightTheme();
    }
    document.addEventListener( 'click', ( element ) => {
        if ( element.target === $themeImg ) {
            if ( element.target.src.includes( sun ) ) {
                lightTheme();
            } else {
                darkTheme();
            }
        }
    } );
};

