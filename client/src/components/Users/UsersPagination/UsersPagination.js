//Core
import React from 'react';
import PropTypes from 'prop-types';
//Packages
import ReactPaginate from 'react-paginate';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
//Styles
import './UsersPagination.scss';

const UsersPagination = ({ totalPages, onChangePaginate }) => {
	const clientWidth = document.body.clientWidth;
	const mobWidth = clientWidth >= 320 && clientWidth <= 767 && 2;
	const tabWidth = clientWidth >= 768 && 3;

	return (
		<div>
			<ReactPaginate
				previousLabel={<FaAngleLeft />}
				nextLabel={<FaAngleRight />}
				breakLabel={'...'}
				breakClassName={'break-me'}
				initialPage={0}
				pageCount={totalPages}
				marginPagesDisplayed={0}
				pageRangeDisplayed={mobWidth || tabWidth}
				onPageChange={onChangePaginate}
				containerClassName={'pagination'}
				activeClassName={'active'}
			/>
		</div>
	);
};

UsersPagination.propTypes = {
	totalPages: PropTypes.number.isRequired,
	onChangePaginate: PropTypes.func.isRequired,
};

export default UsersPagination;
