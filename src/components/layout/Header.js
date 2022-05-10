import React from 'react';
import '../styles/Header.css'
import { Layout as AntLayout, Menu } from 'antd';
const { Header: AntHeader } = AntLayout;




const Header = () => (

		<AntHeader>
			<Menu
				theme="light"
				mode="horizontal"
				defaultSelectedKeys={['2']}
				items={new Array(15).fill(null).map((_, index) => {
					const key = index + 1;
					return {
						key,
						label: `nav ${key}`,
					};
				})}
			/>
		</AntHeader>

);

export default Header;
