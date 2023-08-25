/**
 * The `PostCard` function creates a div element that contains a postCard based on the provided
 * data.
 * @param postsData - The `postsData` parameter is an object that contains the data for each post.
 * @returns The function `PostCard` returns a dynamically created HTML div element that contains
 * a postCard.
 */
export function PostCard ( postsData ) {
    const $divPost = document.createElement( 'div' );
    $divPost.classList.add( 'post' );
    $divPost.innerHTML = `
            <div class="main-content">
                <div class="header">
                    <span>Publicación:</span>
                    <span>${ postsData.date }</span>
                </div>
                <p class="post-title">${ postsData.title }</p>
                <div class="img-container">
                    <img src="app/assets/${ postsData.img }" alt="post-image" class="post-img">
                </div>
            </div>
            <div class="post-footer">
                <a href="#/${ postsData.category }/articulo/${ postsData.id }">Leer más...</a>
            </div>`;
    return $divPost;
}
