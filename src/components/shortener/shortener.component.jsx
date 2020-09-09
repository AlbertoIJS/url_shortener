import React, { Fragment, useEffect, useState } from 'react';

const Shortener = () => {
  const [url, setUrl] = useState('');
  const [links, setLinks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getUrl() {
      const res = await fetch('https://rel.ink/api/links/', {
        method: 'POST',
        body: JSON.stringify({ url: url }),
        headers: { 'Content-Type': 'application/json' },
      });
      const json = await res.json();
      const link = `https://rel.ink/${json.hashid}`;
      return link;
    }

    if (!url) {
      return;
    } else {
      const link = async () => await getUrl();
      setLinks((links) => [...links, link]);
    }
  }, [url, links]);

  return (
    <Fragment>
      <form method="POST" style={{ textAlign: 'center' }}>
        <h1>Shorten a url</h1>
        <input
          type="url"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Write a url to shorten..."
        />
        <button type="button" onClick={() => setUrl(search)}>
          Shorten!
        </button>
      </form>
      {/* useEffect(() => {
    if (links) {

      }
  }, [links]) */}
      {/* links
        ? ''
        :  */}
      {links.map((l, i) => (
        <div key={i.toString()} style={{ textAlign: 'center' }}>
          <p>{url}</p>
          <a href={l}>{l}</a>
        </div>
      ))}
    </Fragment>
  );
};

export default Shortener;
