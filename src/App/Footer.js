import { Container } from 'reactstrap';
import Moment from 'react-moment';
import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="elewant-footer">
      <Container>
        Copyright &copy; <Moment format="YYYY" />{' '}
        <a href="#" target="_blank" rel="noopener noreferrer">
          Scroom
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
