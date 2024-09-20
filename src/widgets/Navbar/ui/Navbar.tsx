import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<ThemeSwitcher className={'btn-thwmw-switcher'} />
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.LINK_ONE} to={'/'}>Home</AppLink>
				<AppLink theme={AppLinkTheme.LINK_ONE} to={'/about'}>About</AppLink>
				<AppLink theme={AppLinkTheme.LINK_ONE} to={'/contacts'}>Contacts</AppLink>
			</div>
		</div>
	)
}