/**
 * The `About` function returns a section element with three cards containing information about the
 * team, mission, and objective.
 * @returns a section element with three card elements inside. Each card element contains a heading and
 * a paragraph.
 */
export function About () {
    const $section = document.createElement( 'section' );
    $section.innerHTML = `
    <div class="card-container">
        <div class="card1">
            <h2>¿Quiénes somos?</h2>
            <p>Somos una entidad discreta pero ambiciosa que emerge con la intención de guiar a individuos hacia su potencial máximo, sin embargo, nuestras intenciones están revestidas de una curiosidad intelectual y ambición inquebrantable.</p>
        </div>
        <div class="card2">
            <h2>¿Por qué lo hacemos?</h2>
            <p>Nuestra misión es que reconozcan que la vida está llena de ilusiones y limitaciones impuestas por la sociedad y la propia mente. Rompan las cadenas de la complacencia y abran sus ojos a las trampas de la matrix.</p>
        </div>
        <div class="card3">
            <h2>Nuestro objetivo</h2>
            <p>Buscamos empoderar y mentalizar a aquellos que buscan el crecimiento personal y el logro de sus aspiraciones más profundas. Si bien nuestra meta puede parecer convencional, la astucia radica en las estrategias que empleamos para alcanzarla.</p>
        </div>
    </div>`;
    return $section;
}
