import React from 'react';
import BreedInfo from './BreedInfo';
import Paginator from './Paginator';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { 
    fetchBreedList, 
    changeCurrentPage,
    changePageSize
} from '../store/actions/actions';

const mapStateToProps = (state, {location}) => {
    return {
        breedList: state.breedList,
        isRequestPending: state.isRequestPending,
        pageSize: state.pageSize,
        currentPage: state.currentPage,
        location
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBreeds: () => dispatch(fetchBreedList()),
        changePage: (toPage) => dispatch(changeCurrentPage(toPage)),
        changePageSize: (pageSize) => dispatch(changePageSize(pageSize))
    }
}


class BreedList extends React.Component {

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);

        const pageParam = Number(params.get('page')) - 1;
        const pageSizeParam = Number(params.get('page_size'));

        if (pageParam != this.props.currentPage) {
            this.props.changePage(pageParam);
        }
        if (pageSizeParam != this.props.pageSize) {
            this.props.changePageSize(pageSizeParam);
        }

        this.props.fetchBreeds();
    }

    getCurrentSlice() {
        const { currentPage, pageSize } = this.props
        return this.props.breedList.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
    }


    render() {
        return (
            <React.Fragment>
                <Row>
                    {this.getCurrentSlice().map(breed => 
                        (
                            <Col key={breed.id} xs="3">
                                <BreedInfo breedInfo={breed}/>
                            </Col>
                        )
                    )}
                </Row>

                <Row>
                    <Col xs={{size: 5, offset: 5}}>
                        <Paginator currentPage={this.props.currentPage} pageSize={this.props.pageSize} itemCount={this.props.breedList.length}/>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedList);