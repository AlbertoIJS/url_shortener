import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Shortener = () => {
  const [url, setUrl] = useState('');
  const [links, setLinks] = useState([]);
  const [search, setSearch] = useState('');
  // eslint-disable-next-line
  const [copy, setCopy] = useState(false);
  const [urls, setUrls] = useState([]);
  const [showUrl, setShowUrl] = useState(false);

  useEffect(() => {
    async function getUrl() {
      const res = await fetch('https://rel.ink/api/links/', {
        method: 'POST',
        body: JSON.stringify({ url: url }),
        headers: { 'Content-Type': 'application/json' },
      });
      const json = await res.json();
      const link = `https://rel.ink/${json.hashid}`;
      setLinks((links) => [...links, link]);
    }

    if (!url) {
      return;
    } else {
      getUrl();
    }
  }, [url, setLinks]);

  console.log(links);
  const validUrl = (s) => {
    const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    return regexp.test(s);
  };
  const handleClick = (s) => {
    if (validUrl(s) && s !== '') {
      setUrls([...urls, s]);
      setUrl(s);
    } else {
      return;
    }
  };

  const handleChange = (e) => {
    setSearch(e);
    validUrl(e);
    setShowUrl(e);
  };
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>Shorten a url</h1>
      <form
        method="POST"
        style={{
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <input
            type="url"
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Write a url to shorten..."
            style={{ margin: '0 auto .5rem auto' }}
          />
          {showUrl ? (
            ''
          ) : (
            <small
              style={{ display: 'block', color: 'red', fontSize: '.8rem' }}
            >
              Introduce a valid url
            </small>
          )}
        </div>
        <button
          type="button"
          onClick={() => handleClick(search)}
          style={{ alignSelf: 'flex-start' }}
        >
          Shorten!
        </button>
      </form>

      {links.map((l, i) => (
        <div
          key={i.toString()}
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <p>{urls[i]}</p>
          <a href={l} style={{ color: 'lightblue' }}>
            {l}
          </a>
          <CopyToClipboard onCopy={() => setCopy(true)} text={l}>
            <button>Copy</button>
          </CopyToClipboard>
        </div>
      ))}
    </div>
  );
};

export default Shortener;
