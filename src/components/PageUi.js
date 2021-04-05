import React from 'react';
import Headline from './Headline'
import CTA from './CTA'
import Subhead from './Subhead'

function PageUi({ block }) {
    const image = require(`../assets/${block.background}`);
    return (
        <div>
            <div
                className='background-image'
                style={{
                    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${image.default})`,
                }}
            ></div>
            <div className='middle-content'>
                <div className='main-content'>
                    <Headline headline={block.headline} />
                    <Subhead subhead={block.subhead} />
                </div>
            </div>
            <CTA cta={block.cta} />
        </div>
    );
}

export default PageUi;