import { Container } from 'reactstrap';
import Moment from 'react-moment';
import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="scroom-footer">
      <Container>
        Copyright &copy; <Moment format="YYYY" />{' '} &bull; Team Doom &bull; Daniëlle &bull; Glenn &bull; Jasper
      </Container>
    </footer>
  );
};

export default Footer;
