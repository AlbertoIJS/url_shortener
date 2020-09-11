import React, { useEffect, useRef, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const Shortener = () => {
  const [urls, setUrls] = useState([]);
  const [links, setLinks] = useState([]);
  const [copy, setCopy] = useState(false);
  const [error, setError] = useState(false);
  const inputUrl = useRef(null);

  // Focus input at the start
  useEffect(() => {
    inputUrl.current.focus();
  }, []);

  useEffect(() => {
    if (copy) {
      setTimeout(function () {
        setCopy(false);
      }, 1200);
    }
  }, [copy]);
  // Get shortened url
  async function getUrl(url) {
    try {
      const hashid = await fetch('https://rel.ink/api/links/', {
        method: 'POST',
        body: JSON.stringify({ url: url }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => res.json())
        .then((json) => json.hashid);
      setLinks((links) => [...links, `https://rel.ink/${hashid}`]);
    } catch (error) {
      console.error(error);
    }
  }

  // Check for a valid link
  const validUrl = (s) => {
    const regexp = new RegExp(
      /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gi
    );
    return regexp.test(s);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let url = inputUrl.current.value;
    if (validUrl(url)) {
      setError(false);
      setUrls((urls) => [...urls, url]);
      getUrl(url);
    } else {
      setError(true);
      return;
    }
  };

  const handleCopy = () => {
    setCopy(true);
    // setTimeout(() => {
    //   setCopy(false);
    // }, 1500);
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
            ref={inputUrl}
            type="url"
            placeholder="Write a url to shorten..."
            style={{ margin: '0 auto .5rem auto' }}
          />
          <small style={{ display: 'block', color: 'red', fontSize: '.8rem' }}>
            {error ? 'Introduce a valid url' : ''}
          </small>
        </div>
        <button
          type="button"
          onClick={(e) => handleClick(e)}
          style={{ alignSelf: 'flex-start' }}
        >
          Shorten It!
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
          <ResponsiveEllipsis
            text={urls[i]}
            trimRight
            basedOn="letters"
            style={{ marginTop: '1rem' }}
          />
          <a href={l} style={{ color: 'lightblue' }}>
            {l}
          </a>
          <CopyToClipboard onCopy={handleCopy} text={l}>
            <button onClick={handleCopy}>{copy ? 'Copied' : 'Copy'}</button>
          </CopyToClipboard>
        </div>
      ))}
    </div>
  );
};

export default Shortener;
