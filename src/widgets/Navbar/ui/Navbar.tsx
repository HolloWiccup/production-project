import { classNames } from 'shared/lib';
import React from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={classNames(cls.mainLink)}>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          About
        </AppLink>
      </div>
    </div>
  );
}
