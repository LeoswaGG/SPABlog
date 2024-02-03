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
  </article>`;
  return $section;
}
