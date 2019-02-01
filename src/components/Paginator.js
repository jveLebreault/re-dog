import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { 
    Pagination, 
    PaginationItem, 
    PaginationLink, 
    InputGroup,
    Input
} from 'reactstrap';


export default class Paginator extends React.Component {

    render() {
        const {currentPage, pageSize, itemCount} = this.props;
        const lastPage = Math.ceil(itemCount / pageSize);
        return (
            <Pagination aria-label="Page navigation">
                <PaginationItem disabled={currentPage-1 ? null:  true}>
                    <NavLink to={{pathname: "/breeds", search: `?page=1&page_size=${pageSize}`}}>
                        <PaginationLink>
                            <FontAwesomeIcon icon="angle-double-left"/>
                            1
                        </PaginationLink>
                    </NavLink>
                </PaginationItem>

                <PaginationItem disabled={currentPage-1 ? null: true}>
                    <NavLink to={{pathname: "/breeds", search: `?page=${currentPage-1}&page_size=${pageSize}`}}>
                        <PaginationLink>
                            <FontAwesomeIcon icon="angle-left"/>
                        </PaginationLink>
                    </NavLink>
                </PaginationItem>

                {/* <PaginationItem>
                    <PaginationLink>

                    </PaginationLink>
                </PaginationItem> */}

                <PaginationItem disabled={currentPage == lastPage}>
                    <NavLink to={{pathname: "/breeds", search: `?page=${currentPage + 1}&page_size=${pageSize}`}}>
                        <PaginationLink>
                            <FontAwesomeIcon icon="angle-right"/>
                        </PaginationLink>
                    </NavLink>
                </PaginationItem>

                <PaginationItem disabled={currentPage == lastPage}>
                    <NavLink to={{pathname: "/breeds", search: `?page=${lastPage}&page_size=${pageSize}`}}>
                        <PaginationLink>
                            {lastPage}
                            <FontAwesomeIcon icon="angle-double-right"/>
                        </PaginationLink>
                    </NavLink>
                </PaginationItem>
            </Pagination>
        );
    }
}

Paginator.propTypes = {
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    itemCount: PropTypes.number.isRequired
};

