import React from 'react';
import { GoLinkExternal, GoRss } from 'react-icons/go';

import {
  Contents,
  Copyright,
  FooterWrap,
  LogoText,
  LogoWrap,
  Menu,
  Nav,
  NavLinkItem,
  NavMoreItem,
  NavTitle,
} from './Footer.style';
import { COPYRIGHT, NAV_LINK_ITEMS, RSS_URL } from '@/constants/constants';

function Footer() {
  return (
    <FooterWrap>
      <Contents>
        <LogoWrap>
          <LogoText href="/">qomlog</LogoText>
          <Copyright>{COPYRIGHT}</Copyright>
        </LogoWrap>
        <Menu>
          <Nav>
            <NavTitle>Links</NavTitle>
            {NAV_LINK_ITEMS.map(item => (
              <NavLinkItem key={item.title} href={item.url}>
                {item.title}
              </NavLinkItem>
            ))}
          </Nav>
          <Nav>
            <NavTitle>Contact</NavTitle>
            <NavMoreItem>
              <a href="mailto:your@email.com" aria-label="Email">
                Email <GoLinkExternal />
              </a>
            </NavMoreItem>
            <NavMoreItem>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Github"
              >
                GitHub <GoLinkExternal />
              </a>
            </NavMoreItem>
          </Nav>
          <Nav>
            <NavTitle>More</NavTitle>
            <NavMoreItem>
              <a href={RSS_URL} aria-label="RSS 구독">
                RSS <GoRss />
              </a>
            </NavMoreItem>
          </Nav>
        </Menu>
      </Contents>
    </FooterWrap>
  );
}

export default Footer;
