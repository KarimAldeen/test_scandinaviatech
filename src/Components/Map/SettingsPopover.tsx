import React from 'react';
import { Button, Popover, Switch } from 'antd';
import { IoSettings } from 'react-icons/io5';

interface SettingsPopoverProps {
  group: boolean;
  setGroup: (value: boolean) => void;
  ping: boolean;
  setPing: (value: boolean) => void;
}

const SettingsPopover: React.FC<SettingsPopoverProps> = ({ group, setGroup, ping, setPing }) => {
  const onChangeGrouping = (checked: boolean) => {
    setGroup(checked);
  };
  const onChangePing = (checked: boolean) => {
    setPing(checked);
  };
  const Settingcontent = (
    <div className='setting-content'>
      <div>
        <Switch defaultChecked onChange={onChangeGrouping} />
        <h6>Markers Grouping</h6>
      </div>
      <div>
        <Switch defaultChecked onChange={onChangePing} />
        <h6>Markers Ping Angle</h6>
      </div>
    </div>
  );

 

  return (
    <div className='settings-container'>
      <Popover content={Settingcontent} trigger='click'>
        <Button shape='circle' icon={<IoSettings />} />
      </Popover>
    </div>
  );
};

export default SettingsPopover;
