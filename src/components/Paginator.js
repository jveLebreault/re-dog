import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { 
    Pagination, 
    PaginationItem, 
    PaginationLink, 
    InputGroup,
    Input
} from 'reactstrap';

export default class Paginator extends React.Component {

    render() {
        return (
            <Pagination aria-label="Page navigation">
                <PaginationItem>
                    <PaginationLink>
                        <FontAwesomeIcon icon="angle-double-left"/>
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink>
                        <FontAwesomeIcon icon="angle-left"/>
                    </PaginationLink>
                </PaginationItem>

                {/* <PaginationItem>
                    <PaginationLink>

                    </PaginationLink>
                </PaginationItem> */}

                <PaginationItem>
                    <PaginationLink>
                            <FontAwesomeIcon icon="angle-right"/>
                        </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink>
                        <FontAwesomeIcon icon="angle-double-right"/>
                    </PaginationLink>
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

