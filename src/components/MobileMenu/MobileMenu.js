/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { WEIGHTS } from '../../constants';

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
        <CloseButton
          onClick={onDismiss}
        >
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" />
        </CloseButton>
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

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  padding: 16px;
`;

const MenuBackdrop = styled(DialogOverlay)`
  background: var(--color-backdrop);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: flex-end;
`;

const MenuDialogContent = styled(DialogContent)`
  height: 100%;
  width: 300px;
  background: var(--color-white);
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// Taken from Header.js
const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary-);
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
  color: var(--color-gray-700);
  font-weight: ${WEIGHTS.normal};
`;

export default MobileMenu;
