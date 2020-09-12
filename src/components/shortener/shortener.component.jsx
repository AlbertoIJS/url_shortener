import React, { useEffect, useRef, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import {
  Inputshortener,
  ShortenerContainer,
  UrlShortenerContainer,
  ShortenedContainer,
  DisplayError,
} from './shortener.styles';
import CustomButton from '../custom-button/custom-button.component';

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
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };

  return (
    <>
      <UrlShortenerContainer
        method="POST"
        style={{
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ShortenerContainer>
          <Inputshortener
            ref={inputUrl}
            type="url"
            placeholder="Write a url to shorten..."
          />
          <DisplayError>{error ? 'Introduce a valid url' : ''}</DisplayError>
          <CustomButton square onClick={(e) => handleClick(e)}>
            Shorten It!
          </CustomButton>
        </ShortenerContainer>
      </UrlShortenerContainer>
      {links.map((l, i) => (
        <ShortenedContainer key={i.toString()}>
          <ResponsiveEllipsis text={urls[i]} trimRight basedOn="letters" />
          <a href={l}>{l}</a>
          <CopyToClipboard onCopy={handleCopy} text={l}>
            <CustomButton square onClick={handleCopy}>
              {copy ? 'Copied!' : 'Copy'}
            </CustomButton>
          </CopyToClipboard>
        </ShortenedContainer>
      ))}
    </>
  );
};

export default Shortener;
