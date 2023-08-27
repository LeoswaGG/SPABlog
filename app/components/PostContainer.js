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
      <blockquote>"Frase."</blockquote>
    </div>
    <p>Mas contenido</p>
  </article>
  <div class="summary-card">
    <h3>Síntesis del Artículo</h3>
      <p>Descubre los secretos mejor guardados de los lugares remotos.</p>
          <p>Exploración audaz de la naturaleza.</p>
          <p>Captura de momentos inolvidables.</p>
          <p>Conexiones profundas con culturas locales.</p>
  </div>`;
  return $section;
}
