export function ContactForm () {
    const $section = document.createElement( 'section' );
    $section.innerHTML = `
    <h2 class="title-section-form">Conecta Tu Camino Interior</h2>
    <form class="form" autocomplete="off">
    <p class="form-title">Contáctanos</p>
    <p class="message">¡Conéctate con nosotros! Estamos aquí para escucharte. Ya sea que tengas preguntas, comentarios o simplemente quieras compartir tus pensamientos, estamos emocionados por recibir tu mensaje. ¡Esperamos con ansias saber de ti!.</p>
    <label>
        <input class="input" type="text" name="name" required>
            <span>Nombre Completo</span>
        </label>
    <label>
        <input class="input" type="email" name="email" required>
        <span>Email</span>
    </label>
    <label>
        <input class="input" type="text" name="message" required>
        <span>Escribe tu mensaje</span>
    </label>
    <button class="submit">Enviar</button>
    <p class="response">Los datos se han enviado correctamente</p>
    <p class="response-error">Something went wrong. Error de conexión, intenta mas tarde</p>
    <p class="response2-error"></p>
    <div class="loader-form">
        <img src="app/assets/loader-dark.svg" alt="Cargando...">
    </div>
    </form>`;

    document.addEventListener( 'submit', async ( element ) => {
        element.preventDefault();
        document.querySelector( '.submit' ).disabled = true;
        const $form = document.querySelector( '.form' );
        const $formData = new FormData( $form );
        const name = $formData.get( 'name' );
        const email = $formData.get( 'email' );
        const message = $formData.get( 'message' );
        if ( element.target.matches( '.form' ) ) {
            try {
                document.querySelector( '.loader-form' ).style.display = 'block';
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify( {
                        name,
                        email,
                        message
                    } )
                };
                const response = await fetch( 'https://formsubmit.co/ajax/smartmart.comerce@gmail.com', options );
                if ( !response.ok ) throw `An error ocurred: ${ response.status } ${ response.statusText }`;
                const data = await response.json();
                console.log( data );
                $form.reset();
                document.querySelector( '.loader-form' ).style.display = 'none';
                document.querySelector( '.response' ).style.display = 'block';
                document.querySelector( '.submit' ).disabled = false;
            } catch ( error ) {
                if ( error instanceof TypeError ) {
                    $form.reset();
                    document.querySelector( '.loader-form' ).style.display = 'none';
                    document.querySelector( '.response-error' ).style.display = 'block';
                    document.querySelector( '.submit' ).disabled = false;
                } else {
                    $form.reset();
                    const message = `Something went wrong, ${ error }. Intenta mas tarde`;
                    console.log( message );
                    document.querySelector( '.loader-form' ).style.display = 'none';
                    document.querySelector( '.response2-error' ).textContent = message;
                    document.querySelector( '.response2-error' ).style.display = 'block';
                    document.querySelector( '.submit' ).disabled = false;
                }
            } finally {
                setTimeout( () => {
                    document.querySelector( '.response' ).style.display = 'none';
                    document.querySelector( '.response-error' ).style.display = 'none';
                    document.querySelector( '.response2-error' ).style.display = 'none';
                }, 3000 );
            }
        }
    } );
    return $section;
}


