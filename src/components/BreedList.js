import React from 'react';
import BreedInfo from './BreedInfo';
import { Row, Column } from 'reactackle';
import { connect } from 'react-redux';
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

const margin = {
    vertical: '1.5%',
    horizontal: '15%'
}

class BreedList extends React.Component {

    // constructor(props) {
    //     super(props)

    //     this.getCurrentSlice = this.getCurrentSlice.bind(this);
    //     this.getImages = this.getImages.bind(this);
    // }

    componentDidMount() {
        this.props.fetchBreeds();
    }

    getCurrentSlice() {
        const { currentPage, itemCount } = this.props
        return this.props.breedList.slice(currentPage * itemCount, (currentPage + 1) * itemCount);
    }

    getImages() {
        
        const currentBreedPage = this.getCurrentSlice();
        for (let i = 0; i < currentBreedPage.length; i++) {
            if (!currentBreedPage[i].imageUrl) {
                this.props.fetchBreedImage(i,currentBreedPage[i].id);
            }
        }
    }


    render() {
        return (
            <Row layoutDirection="horizontal" wrapContent={true}>
                {this.getCurrentSlice().map(breed => 
                    (
                        <Column key={breed.id} size={{ xsmall: 4 }}>
                            <BreedInfo breedInfo={breed}/>
                        </Column>
                     )
                )}
            </Row>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedList);