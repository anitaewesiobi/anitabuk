import React from 'react';
import Logo from './Logo'
import Menu from './Menu'
function LayoutUi({ pages, handleSlug, slug}) {
    return (
        <div>
            <Logo />
            {pages ? pages.map((item) => {
                const menuFocus = item.slug == slug
                return <Menu title={item.title} handleSlug={handleSlug} slug={item.slug} key={item.slug} menuFocus={menuFocus}/>
            }) : "loading"}
        </div>
    );
}

export default LayoutUi;