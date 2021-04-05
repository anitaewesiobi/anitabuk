import React from 'react';

function Menu({ title, handleSlug, slug, menuFocus }) {
    return (
        <nav>
            <ul>
                <li key={slug}>
                    <button
                        onClick={() => handleSlug(slug)}
                        style={{
                            color:
                                menuFocus
                                    ? '#FFBF04'
                                    : '#fff',
                        }}
                    >
                        {title}
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;