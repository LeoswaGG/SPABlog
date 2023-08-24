/**
 * The function `PostCard` creates a section element with multiple post cards based on the data
 * provided(date, title, img).
 * @param postsData - The `postsData` parameter is an object that contains the data for each post. It
 * has the following structure:
 * @returns a dynamically created HTML section element that contains multiple post cards.
 */
export function PostCard ( postsData ) {
    const $section = document.createElement( 'section' );
    $section.innerHTML = `
    <div class="post-container">
        <div class="post">
            <div class="main-content">
                <div class="header">
                    <span>Publicación:</span>
                    <span>${ postsData.post1.date }</span>
                </div>
                <p class="post-title">${ postsData.post1.title }</p>
                <div class="img-container">
                    <img src="app/assets/${ postsData.post1.img }" alt="post-image" class="post-img">
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
                    <span>${ postsData.post2.date } </span>
                </div>
                <p class="post-title">${ postsData.post2.title }</p>
                <div class="img-container">
                    <img src="app/assets/${ postsData.post2.img }" alt="post-image" class="post-img">
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
                    <span>${ postsData.post3.date } </span>
                </div>
                <p class="post-title">${ postsData.post3.title }</p>
                <div class="img-container">
                    <img src="app/assets/${ postsData.post3.img }" alt="post-image" class="post-img">
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
                    <span>${ postsData.post4.date } </span>
                </div>
                <p class="post-title">${ postsData.post4.title }</p>
                <div class="img-container">
                    <img src="app/assets/${ postsData.post4.img }" alt="post-image" class="post-img">
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
                    <span>${ postsData.post5.date } </span>
                </div>
                <p class="post-title">${ postsData.post5.title }</p>
                <div class="img-container">
                    <img src="app/assets/${ postsData.post5.img }" alt="post-image" class="post-img">
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
                    <span>${ postsData.post6.date } </span>
                </div>
                <p class="post-title">${ postsData.post6.title }</p>
                <div class="img-container">
                    <img src="app/assets/${ postsData.post6.img }" alt="post-image" class="post-img">
                </div>
            </div>
            <div class="post-footer">
                <a href="#/">Leer más...</a>
            </div>
        </div>        
    </div>`;
    return $section;
}
