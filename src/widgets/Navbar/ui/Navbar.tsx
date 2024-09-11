import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>

			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.INVERTED} to={'/'}>Home</AppLink>
				<AppLink theme={AppLinkTheme.INVERTED} to={'/about'}>About</AppLink>
				<AppLink theme={AppLinkTheme.INVERTED} to={'/contacts'}>Contacts</AppLink>
			</div>
		</div>
	)
}