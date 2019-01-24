import React from 'react';
import PropTypes from 'prop-types';
import { 
    Pagination, 
    PaginationItem, 
    PaginationLink, 
    InputGroup,
    Input
} from 'reactstrap';

export default class Paginator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pageSize: props.pageSize
        };
    }

    render() {
        return (
            <Pagination aria-label="Page navigation">
                <PaginationItem>
                    <PaginationLink previous/>
                </PaginationItem>
                <PaginationItem>
                    <InputGroup >
                        <Input className="item-count-input" type="number" step="1" min="1" valid={this.state.pageSize}/>
                    </InputGroup>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next/>
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

