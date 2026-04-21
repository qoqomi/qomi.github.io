import React from 'react';
import { FiMoon, FiSun, FiTag, FiCpu } from 'react-icons/fi';

import {
  HeaderWrap,
  LogoText,
  Nav,
  NavItem,
  NavIconLink,
  NavIconButton,
} from './Header.style';
import useScrollDirection from '@/hooks/useScrollDirection';
import { useDarkMode } from '@/contexts/DarkModeContext';

function Header() {
  const isHidden = useScrollDirection();
  const { isDark, toggle } = useDarkMode();

  return (
    <HeaderWrap isHidden={isHidden}>
      <Nav>
        <LogoText href="/">My Blog</LogoText>
        <NavItem>
          <NavIconLink href="/category" title="태그">
            <FiTag />
          </NavIconLink>
          <NavIconLink href="/archive" title="AI 보관소">
            <FiCpu />
          </NavIconLink>
          <NavIconButton
            title={isDark ? '라이트모드' : '다크모드'}
            onClick={toggle}
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </NavIconButton>
        </NavItem>
      </Nav>
    </HeaderWrap>
  );
}

export default Header;
