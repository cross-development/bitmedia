//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styled
import './Layout.scss';

const Layout = ({ children }) => <main className="main">{children}</main>;

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
