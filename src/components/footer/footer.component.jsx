import React from "react";

import { ReactComponent as Logo } from "../../images/logo-white.svg";
import { ReactComponent as Facebook } from "../../images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../../images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../../images/icon-instagram.svg";

import {
  FooterContainer,
  ListContainer,
  SocialmediaContainer
} from "./footer.styles";

const Footer = () => (
  <FooterContainer>
    <Logo />

    <ListContainer>
      <h3>Features</h3>
      <li>Link Shortening</li>
      <li>Branded Links</li>
      <li>Analytics</li>
    </ListContainer>

    <ListContainer>
      <h3>Resources</h3>
      <li>Blog</li>
      <li>Developers</li>
      <li>Support</li>
    </ListContainer>

    <ListContainer>
      <h3>Company</h3>
      <li>About</li>
      <li>Our team</li>
      <li>Careers</li>
      <li>Contact</li>
    </ListContainer>

    <SocialmediaContainer>
      <Facebook />
      <Twitter />
      <Pinterest />
      <Instagram />
    </SocialmediaContainer>
  </FooterContainer>
);

export default Footer;
