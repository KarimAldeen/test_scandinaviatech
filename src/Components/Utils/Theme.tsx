import React, { memo } from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { useChangeTheme } from '../../Hooks/useChangeTheme';

const Theme: React.FC = () => {
  const { currentTheme, changeTheme } = useChangeTheme();
  const { t } = useTranslation();

  const LightTheme = memo(() => (
    <div className="MenuChange" onClick={lightThemeClickHandler}>
      <BsFillSunFill />
      {t('light')}
    </div>
  ));
  
  const DarkTheme = memo(() => (
    <div className="MenuChange" onClick={darkThemeClickHandler}>
      <BsFillMoonStarsFill />
      {t('dark')}
    </div>
  ));

  
  const lightThemeClickHandler = React.useCallback(() => {
    changeTheme('light');
  }, [changeTheme]);
  
  const darkThemeClickHandler = React.useCallback(() => {
    changeTheme('dark');
  }, [changeTheme]);
  
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <LightTheme />,
    },
    {
      key: '2',
      label: <DarkTheme />,
    },
  ];

  return (
    <Space direction="vertical">
      <Dropdown menu={{ items }} placement="top">
        <Button>{currentTheme === 'dark' ? <DarkTheme /> : <LightTheme />}</Button>
      </Dropdown>
    </Space>
  );
};

export default Theme;
