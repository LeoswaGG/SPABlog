/**
 * The function "OurPact" returns a section element with a title and paragraphs describing the purpose
 * of the blog and encouraging readers to reflect and make positive changes in their lives.
 * @returns a dynamically created HTML section element with a class of "section-pact". The section
 * contains a title, "Nuestro compromiso", and a div with class "pact-container". Inside the div, there
 * are several paragraphs with class "pact-content" that contain text about the purpose of the blog and
 * the commitment to personal growth and change.
 */
export function OurPact () {
    const $section = document.createElement( 'section' );
    $section.classList.add( 'section-pact' );
    $section.innerHTML = `
    <h2 class="title-pact-section">Nuestro compromiso</h2>
    <div class="pact-container"> 
    <p class="pact-content">Posiblemente todos los artículos de este blog no revolucionen tu vida. Al contrario, el propósito es crear <span style="color: red; font-weight: bold;">consciencia</span> en tu mente para exponer tu miedo a la mediocridad y así poder despertar todo tu potencial. El primer paso para el cambio es la <span style="color: red; font-weight: bold;">consciencia</span>.</p>
    <p class="pact-content">Los artículos no solo transmiten conocimiento, en las palabras de cada artículo se ocultan secretos que despiertan el pensamiento crítico, esperando a ser descubiertos por aquellos que son suficientemente astutos para mirar más allá de la <span style="color: red; font-weight: bold;">superficie</span>. Los perdedores y mediocres son conducidos a un espejo implacable, donde deben enfrentar la pálida imagen de su propia <span style="color: red; font-weight: bold;">insuficiencia</span>.</p>
    <p class="pact-content">El compromiso se convierte en una lanza afilada que penetra profundamente en tu alma, forzándote a confrontar la dura realidad de tu <span style="color: red; font-weight: bold;">posición actual</span>. La punzante <span style="color: red; font-weight: bold;">consciencia</span> de estar en el abismo de la mediocridad se convierte en un <span style="color: red; font-weight: bold;">catalizador irresistible</span> para el cambio. La <span style="color: red; font-weight: bold;">estrategia</span> detrás de esta narrativa no es solo instruir, sino agitar las <span style="color: red; font-weight: bold;">emociones</span> y despertar los <span style="color: red; font-weight: bold;">instintos más profundos</span>.</p>
    <p class="pact-content">Para sacarle el máximo provecho a todo lo que encuentres en el blog te recomiendo que <span style="color: red; font-weight: bold;">profundices</span> en los artículos e intentes <span style="color: red; font-weight: bold;">adaptar</span> y aplicar a tu vida los <span style="color: red; font-weight: bold;">hábitos</span> y todas las <span style="color: red; font-weight: bold;">sugerencias</span> o cosas que encuentres útiles para cambiar y conseguir lo que quieres, es todo lo que pido.</p>
    </div>`;
    return $section;
}
