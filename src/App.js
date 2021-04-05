import './App.css';
import { React, useEffect, useState } from 'react';
import PageUi from './components/PageUi'
import LayoutUi from './components/LayoutUi'
import data from './store/data.json'


function App() {
  const [pages, setPages] = useState(null);
  const [slug, setSlug] = useState(data.pages[0].slug);
  let handleSlug = (slug) => {
    setSlug(slug)
  }
  useEffect(() => {
    setPages(data.pages);
  }, []);

  return (
    <div>
      <LayoutUi pages={pages} handleSlug={handleSlug} slug={slug} />
      {pages ? pages.map((item) => {
        if (item.slug == slug) {
          return <PageUi block={item.blocks[0]} key={item.slug} />
        }
      }) : null}
    </div>
  );
}
export default App;
