import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import React, { FC } from 'react';


export enum AppLinkTheme {
	LINK_ONE = 'link-one',
	LINK_TWO = 'link-two',
	LINK_THREE = 'link-three',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}
export const AppLink: FC<AppLinkProps> = (props) => {

	const {
		to,
		className,
		children,
		theme = AppLinkTheme.LINK_ONE,
		...otherProps
	} = props

	return (
		<Link
			to={to}
			className={classNames(cls?.AppLink || '', {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	)
}