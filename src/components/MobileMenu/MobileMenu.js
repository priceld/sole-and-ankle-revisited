/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <MenuBackdrop
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <MenuDialogContent aria-label="Navigation menu">
        <CloseButtonWrapper>
          <UnstyledButton
            onClick={onDismiss}
          >
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
            <Icon id="close" />
          </UnstyledButton>
        </CloseButtonWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </MenuDialogContent>
    </MenuBackdrop>
  );
};

const CloseButtonWrapper = styled.div`
  align-self: flex-end;
`;

const MenuBackdrop = styled(DialogOverlay)`
  background: hsla(220, 5%, 40%, 0.8);
  position: absolute;
  inset: 0;
`;

const MenuDialogContent = styled(DialogContent)`
  background: ${COLORS.white};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 75px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

// Taken from Header.js
const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.normal};
`;

export default MobileMenu;
