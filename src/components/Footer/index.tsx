import { FooterLogo } from '../../svgComponents/FooterLogo'
import { FooterContainer, Logo, Copyright } from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <Logo>
        <FooterLogo />
      </Logo>
      <Copyright>
        Copyright © 2023 AllowMe News. Todos os direitos reservados
      </Copyright>
    </FooterContainer>
  );
};

