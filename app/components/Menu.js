/**
 * The `Menu` function creates a navigation menu with various links and icons.
 * @returns a dynamically created HTML element representing a menu.
 */
export function Menu () {
    const $menu = document.createElement( 'nav' );
    $menu.classList.add( 'navbar' );
    $menu.innerHTML = `
        <ul class="navbar-nav">
                <li class="logo">
                    <a class="nav-link">
                        <span class="link-text ">disciplinaXcelencia</span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right"
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x">
                            <g class="fa-group">
                                <path fill="currentColor"
                                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                    class="fa-secondary"></path>
                                <path fill="currentColor"
                                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                    class="fa-primary"></path>
                            </g>
                        </svg>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#/inicio" class="nav-link">
                        <img src="app/assets/home.png" alt="inicio">
                        <span class="link-text">Inicio</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#/disciplina" class="nav-link">
                        <img src="app/assets/achievement.png" alt="disciplina">
                        <span class="link-text">Disciplina</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#/productividad" class="nav-link">
                        <img src="app/assets/hourglass.png" alt="productividad">
                        <span class="link-text">Productividad</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#/mentalidad" class="nav-link">
                        <img src="app/assets/brain.png" alt="mentalidad">
                        <span class="link-text">Mentalidad</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#/masculinidad" class="nav-link">
                        <img src="app/assets/pillars.png" alt="masculinidad">
                        <span class="link-text">Masculinidad</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="theme">
                        <img src="app/assets/light.png" alt="tema" id="theme-2">
                        <span class="link-text">Tema</span>
                    </a>
                </li>
            </ul>`;
    return $menu;
}
