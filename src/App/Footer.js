import { Container } from 'reactstrap';
import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="scroom-footer">
      <Container>
        Team Doom <span className="people">&bull; Daniëlle &bull; Glenn &bull; Jasper</span>
      </Container>
    </footer>
  );
};

export default Footer;
