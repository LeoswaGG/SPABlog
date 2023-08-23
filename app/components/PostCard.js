/**
 * The `PostCard` function generates a section element with multiple post cards, each containing a
 * title, image, and date.
 * @param titles - An array of post titles.
 * @param images - The `images` parameter is an array that contains the names of the image files. These
 * image files are located in the "app/assets/" directory. The images are used to display a post image
 * for each post in the PostCard component.
 * @param date - The `date` parameter is an array that contains the dates of the posts. Each element in
 * the array represents the date of a specific post.
 * @returns a dynamically created HTML section element that contains multiple post cards. Each post
 * card includes a title, image, and date.
 */
export function PostCard ( titles, images, date ) {
    const $section = document.createElement( 'section' );
    $section.innerHTML = `
    <div class="post-container">
        <div class="post">
            <div class="main-content">
                <div class="header">
                    <span>Publicación:</span>
                    <span>${ date[ 0 ] }</span>
                </div>
                <p class="post-title">${ titles[ 0 ] }</p>
                <div class="img-container">
                    <img src="app/assets/${ images[ 0 ] }" alt="post-image" class="post-img">
                </div>
            </div>
            <div class="post-footer">
                <a href="#/">Leer más...</a>
            </div>
        </div>
        <div class="post">
            <div class="main-content">
                <div class="header">
                    <span>Publicación:</span>
                    <span>${ date[ 1 ] } </span>
                </div>
                <p class="post-title">${ titles[ 1 ] }</p>
                <div class="img-container">
                    <img src="app/assets/${ images[ 1 ] }" alt="post-image" class="post-img">
                </div>
            </div>
            <div class="post-footer">
                <a href="#/">Leer más...</a>
            </div>
        </div>
        <div class="post">
            <div class="main-content">
                <div class="header">
                    <span>Publicación:</span>
                    <span>${ date[ 2 ] } </span>
                </div>
                <p class="post-title">${ titles[ 2 ] }</p>
                <div class="img-container">
                    <img src="app/assets/${ images[ 2 ] }" alt="post-image" class="post-img">
                </div>
            </div>
            <div class="post-footer">
                <a href="#/">Leer más...</a>
            </div>
        </div>
        <div class="post">
            <div class="main-content">
                <div class="header">
                    <span>Publicación:</span>
                    <span>${ date[ 3 ] } </span>
                </div>
                <p class="post-title">${ titles[ 3 ] }</p>
                <div class="img-container">
                    <img src="app/assets/${ images[ 3 ] }" alt="post-image" class="post-img">
                </div>
            </div>
            <div class="post-footer">
                <a href="#/">Leer más...</a>
            </div>
        </div>
        <div class="post">
            <div class="main-content">
                <div class="header">
                    <span>Publicación:</span>
                    <span>${ date[ 4 ] } </span>
                </div>
                <p class="post-title">${ titles[ 4 ] }</p>
                <div class="img-container">
                    <img src="app/assets/${ images[ 4 ] }" alt="post-image" class="post-img">
                </div>
            </div>
            <div class="post-footer">
                <a href="#/">Leer más...</a>
            </div>
        </div>
        <div class="post">
            <div class="main-content">
                <div class="header">
                    <span>Publicación:</span>
                    <span>${ date[ 5 ] } </span>
                </div>
                <p class="post-title">${ titles[ 5 ] }</p>
                <div class="img-container">
                    <img src="app/assets/${ images[ 5 ] }" alt="post-image" class="post-img">
                </div>
            </div>
            <div class="post-footer">
                <a href="#/">Leer más...</a>
            </div>
        </div>        
    </div>`;
    return $section;
}
