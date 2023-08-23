/**
 * The function "Phrases" creates a new HTML section element and sets its innerHTML property to display
 * a list of quotes and their authors.
 * @param quotes - The "quotes" parameter is an object that contains six properties: quote1, quote2,
 * quote3, quote4, quote5, and quote6. Each property represents a quote and its author.
 * @returns a new HTML section element with its innerHTML property set to a multi-line string.
 */
export function Phrases ( quotes ) {
    const $section = document.createElement( 'section' );
    $section.innerHTML = `
    <h2 class="phrase-title" >Chispazos de Genialidad</h2>
        <div class="quote-container">
            <div class="quote">
                <div class="card-name">Frase del Mes</div>
                <div class="body-text">"${ quotes.quote1.quote }".</div>
                <div class="author"><br> <span>-${ quotes.quote1.author }</span> <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" width="18">
                        <path fill="none" d="M0 0H24V24H0z"></path>
                        <path
                            d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z">
                        </path>
                    </svg>
                </div>
            </div>
            <div class="quote">
                <div class="card-name">Frase del Mes</div>
                <div class="body-text">"${ quotes.quote2.quote }".</div>
                <div class="author"><br> <span>-${ quotes.quote2.author }</span> <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" width="18">
                        <path fill="none" d="M0 0H24V24H0z"></path>
                        <path
                            d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z">
                        </path>
                    </svg>
                </div>
            </div>
            <div class="quote">
                <div class="card-name">Frase del Mes</div>
                <div class="body-text">"${ quotes.quote3.quote }".</div>
                <div class="author"><br> <span>-${ quotes.quote3.author }</span> <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" width="18">
                        <path fill="none" d="M0 0H24V24H0z"></path>
                        <path
                            d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z">
                        </path>
                    </svg>
                </div>
            </div>
            <div class="quote">
                <div class="card-name">Frase del Mes</div>
                <div class="body-text">"${ quotes.quote4.quote }".</div>
                <div class="author"><br> <span>-${ quotes.quote4.author }</span> <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" width="18">
                        <path fill="none" d="M0 0H24V24H0z"></path>
                        <path
                            d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z">
                        </path>
                    </svg>
                </div>
            </div>
            <div class="quote">
                <div class="card-name">Frase del Mes</div>
                <div class="body-text">"${ quotes.quote5.quote }".</div>
                <div class="author"><br> <span>-${ quotes.quote5.author }</span> <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" width="18">
                        <path fill="none" d="M0 0H24V24H0z"></path>
                        <path
                            d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z">
                        </path>
                    </svg>
                </div>
            </div>
            <div class="quote">
                <div class="card-name">Frase del Mes</div>
                <div class="body-text">"${ quotes.quote6.quote }".</div>
                <div class="author"><br> <span>-${ quotes.quote6.author }</span> <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" width="18">
                        <path fill="none" d="M0 0H24V24H0z"></path>
                        <path
                            d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z">
                        </path>
                    </svg>
                </div>
            </div>
        </div>`;
    return $section;
}   
