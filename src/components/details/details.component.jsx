import React from 'react';

import {
  DetailsContainer,
  DescriptionContainer,
  CardsContainer,
  CardContainer,
  IconContainer,
  BlueHr,
  CardTitle,
} from './details.styles';

import Shortener from '../shortener/shortener.component';
import Card from '../card/card.component';

import brand from '../../images/icon-brand-recognition.svg';
import speedGauge from '../../images/icon-detailed-records.svg';
import pens from '../../images/icon-fully-customizable.svg';

const Details = () => (
  <DetailsContainer>
    <Shortener />
    <DescriptionContainer>
      <h1>Advanced Statistics</h1>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </DescriptionContainer>
    <BlueHr></BlueHr>
    <CardsContainer>
      <Card>
        <IconContainer>
          <img src={brand} alt="graph" />
        </IconContainer>
        <CardTitle>Brand Recognition</CardTitle>
        <p>
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </Card>

      <CardContainer m4>
        <IconContainer>
          <img src={speedGauge} alt="speed gauge" />
        </IconContainer>
        <CardTitle>Detailed Records</CardTitle>
        <p>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </CardContainer>

      <CardContainer m6>
        <IconContainer>
          <img src={pens} alt="pens" />
        </IconContainer>
        <CardTitle>Fully Customizable</CardTitle>
        <p>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </CardContainer>
    </CardsContainer>
  </DetailsContainer>
);

export default Details;
