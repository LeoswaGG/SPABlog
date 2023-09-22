/**
 * The `PostContainer` function returns a section element with a header, article, and a summary card.
 * @returns a dynamically created HTML section element with various nested elements and content.
 */
export function PostContainer ( postsData ) {
  const $section = document.createElement( 'section' );
  $section.classList.add( 'section-post' );
  $section.innerHTML = `
  <header class="post-header">
    <h2 class="title-post">${ postsData.title }</h2>
    <p class="quote-italic"></p>
  </header>
  <article class="post-content">
    ${ postsData.content }
    <div class="quote-post">
      <blockquote>"${ postsData.quote }."</blockquote>
    </div>
  </article>
  <div class="summary-card">
    <h2 class="title-p">De las palabras a la acción</h2>
        ${ postsData.resume }
    <p class="post-message">Recuerda que la consistencia es clave en la implementación de estas técnicas. Debes adaptarlas a tu estilo de vida y necesidades específicas porque lo que funciona para alguien más, puede que no funcione para ti.</p>
        </div>`;
  return $section;
}
