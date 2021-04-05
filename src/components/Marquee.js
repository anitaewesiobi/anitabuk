import { React, useEffect, useState } from 'react';
import PageUi from './PageUi'
import LayoutUi from './LayoutUi'
import data from '../store/data.json'
import Menu from './Menu'

function Marquee({ match }) {
    const [slug, setSlug] = useState(data.pages[0].slug);
    return (
        <div>
{
data.pages.map((item)=>{
    if (match.params.id == item.slug){
        console.log(match)
    } else if (match.params.path == "/" && match.params.isExact) {
        console.log(match)
    }
})
}
        </div>
    );
}

export default Marquee;