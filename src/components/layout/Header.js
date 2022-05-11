import React from 'react';
import '../styles/Header.css';
import { Layout as AntLayout } from 'antd';
const { Header: AntHeader } = AntLayout;

const Header = () => (
	<AntHeader className="navbar">
		<div>
		<div><h1>Brandon Music</h1></div>
		<div></div>
		<div></div>
		</div>
	</AntHeader>
);

export default Header;
