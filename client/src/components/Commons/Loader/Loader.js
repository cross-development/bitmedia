//Core
import React from 'react';
import PropTypes from 'prop-types';
//Additional components
import BeatLoader from 'react-spinners/BeatLoader';
//Styles
import { css } from '@emotion/core';
import './Loader.scss';

const beatCss = css`
	display: block;
	margin: calc(100vh * 0.4) auto;
`;

const Loader = ({ onLoad }) => (
	<div className="loader-wrapper">
		<BeatLoader size={30} color="#3A80BA" loading={onLoad} css={beatCss} />
	</div>
);

Loader.propTypes = {
	onLoad: PropTypes.bool,
};

Loader.defaultProps = {
	onLoad: false,
};

export default Loader;
