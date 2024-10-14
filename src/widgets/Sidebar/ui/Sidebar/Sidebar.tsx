import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const { t } = useTranslation('main')

	const onToggle = () => {
		setCollapsed(prevCollapsed => !prevCollapsed);
	}

	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal(prev => !prev)
	}, [])

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<Button
				theme={ThemeButton.PRIMARY}
				onClick={onToggleModal}
			>
				{t("Войти")}
			</Button>
			<Modal
				isOpen={isAuthModal}
				onClose={onToggleModal}
			>
				fadsfsadf asdfsadf asdfadsfsadf asdfsadf adsfasdf aadsfsadfa asdfsadf asdf sdfsdfsadf  dsfsdfasdf dfasdasf adsfasdf
			</Modal>
			<Button
				theme={ThemeButton.SECONDARY}
				data-testid="sidebar-toggle"
				onClick={onToggle}
				className={cls.collapsedBtn}
			>
				{collapsed ? ' >' : ' <'}
			</Button>
			<div className={cls.switchers}>
				<LangSwitcher short={collapsed} />
			</div>
		</div>
	)
}