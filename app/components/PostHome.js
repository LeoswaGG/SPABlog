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
                    <p class="tip">Título 1</p>
                    <p class="second-text">Fecha</p> 
                </div>
                <div class="card">
                    <p class="tip">Titulo 2</p>
                    <p class="second-text">Fecha</p>
                </div>
                <div class="card">
                    <p class="tip">Titulo 3</p>
                    <p class="second-text">Fecha</p>
                </div>
            </div>
            <div class="cards-row">     
                <div class="card">
                    <p class="tip">Titulo 4</p>
                    <p class="second-text">Fecha</p>
                </div>
                <div class="card">
                    <p class="tip">Titulo 5</p>
                    <p class="second-text">Fecha</p>
                </div>
            </div>
        </div>`;
    return $section;
} 
