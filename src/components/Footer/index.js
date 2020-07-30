import React from 'react';
import { FooterBase } from './styles';

import Logo from '../../assets/img/littleflix.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={Logo} alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <p>Desenvolvido por <a href="https://www.linkedin.com/in/jonathanlm/">Jonathan Matos</a></p>
    </FooterBase>
  );
}

export default Footer;
