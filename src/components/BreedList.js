import React from 'react';
import BreedInfo from './BreedInfo';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { 
    fetchBreedList, 
    fetchBreedImage 
} from '../store/actions/actions';

const mapStateToProps = state => {
    return {
        breedList: state.breedList,
        isRequestPending: state.isRequestPending,
        itemCount: state.itemCount,
        currentPage: state.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBreeds: () => dispatch(fetchBreedList()),
        fetchBreedImage: (breedIndex, breedId, limit = 1) => dispatch(fetchBreedImage(breedIndex, breedId, limit))
    }
}


class BreedList extends React.Component {

    componentDidMount() {
        this.props.fetchBreeds();
    }

    getCurrentSlice() {
        const { currentPage, itemCount } = this.props
        return this.props.breedList.slice(currentPage * itemCount, (currentPage + 1) * itemCount);
    }


    render() {
        return (
            <Row>
                {this.getCurrentSlice().map(breed => 
                    (
                        <Col key={breed.id} xs="3">
                            <BreedInfo breedInfo={breed}/>
                        </Col>
                     )
                )}
            </Row>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedList);