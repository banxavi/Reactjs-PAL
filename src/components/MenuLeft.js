
import React from 'react';
import { Menu, Switch } from 'antd';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default class MenuLeft extends React.Component {
  state = {
    collapsed: false,
    theme: 'dark',
    current: '1',
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div style={{ width: 256 }}>
         <Switch
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
         <br />
        <br />
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            History
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Monitor
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Policy
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Manage Mails">
            <Menu.Item key="5">Zimbra</Menu.Item>
            <Menu.Item key="6">Gmail</Menu.Item>
            <Menu.Item key="7">OutLook</Menu.Item>
            <Menu.Item key="8">Instagram</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Account">
            <Menu.Item key="9">Help</Menu.Item>
            <Menu.Item key="10">Settings</Menu.Item>
            <Menu.Item key="sub3"><a href = '/'>Logout</a>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
