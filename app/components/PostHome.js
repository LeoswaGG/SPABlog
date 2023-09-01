/**
 * The `PostHome` function creates a section element with a title and a set of cards, each containing a
 * title and a date.
 * @returns a dynamically created HTML section element with a title and a set of cards.
 */
export function PostHome () {
    const $section = document.createElement( 'section' );
    $section.innerHTML = `
        <h2 class="post-title">Eleva Tu Potencial</h2>
        <div class="cards">
            <div class="cards-row">
                <div class="card">
                    <p class="tip">No te conformes con menos de lo que mereces. Lucha con intensidad por tu felicidad y no dejes que nada ni nadie te detenga..</p>
                    <a href="#/disciplina" class="post-link">Ver más...</a>
                    </div>
                <div class="card">
                    <p class="tip">El éxito no espera a los indecisos. Ábrete paso con audacia y valentía hacia tus objetivos, y la victoria será tuya.</p>
                    <a href="#/productividad" class="post-link">Ver más...</a>
                    </div>
                <div class="card">
                    <p class="tip">La mediocridad es el enemigo del éxito. Abraza la excelencia en cada aspecto de tu vida y desafía tus límites constantemente..</p>
                    <a href="#/mentalidad" class="post-link">Ver más...</a>
                </div>
            </div>
            <div class="cards-row">     
                <div class="card">
                    <p class="tip">El tiempo es tu recurso más valioso. No lo desperdicies en excusas. Actúa con pasión y convicción, y alcanzarás tus metas..</p>
                    <a href="#/masculinidad" class="post-link">Ver más...</a>
                </div>
                <div class="card">
                    <p class="tip">No permitas que el miedo te detenga. Rompe las cadenas que te limitan y conquista tus sueños con determinación feroz.</p>
                    <a href="#/disciplina" class="post-link">Ver más...</a>
                </div>
            </div>
        </div>`;
    return $section;
} 
