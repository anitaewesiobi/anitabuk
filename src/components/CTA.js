import React from 'react';

function CTA({ cta }) {
    return (
        <div className='cta'>
            <span className='cta-text'>
                {cta}
            </span>
            <span className='cta-button'>
                <a href='#'>
                    LET'S TALK.{' '}
                    <span className='right-arrow'>
                        &#8594;
                </span>
                </a>
            </span>
        </div>
    );
}

export default CTA;