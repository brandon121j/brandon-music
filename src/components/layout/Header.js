import React from 'react';
import '../styles/Header.css';
import { Row, Col, Input, Dropdown, Menu, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const Header = () => {
  const menu = (
    <Menu
      items={[
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item
            </a>
          ),
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item
            </a>
          ),
        },
      ]}
    />
  );

  return (
	<div>
	<Row align='middle' className='navbar'>
      <Col className="item1">Brandon Music</Col>
      <Col className="item2"><Input placeholder="input search text" style={{ width: 500, backgroundColor: 'rgb(28, 28, 30)', color: 'rgb(229, 229, 234)' }} /></Col>
      <Col className="item3"><Dropdown  placement="bottom" overlay={menu}><Button style={{ backgroundColor: 'inherit', color: 'inherit'}}>bottom</Button></Dropdown></Col>
    </Row>
	</div>
  );
  };

export default Header;
