import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({breedList: state.breedList})

class BreedDetails extends React.Component {

    render() {
        const breed = this.props.breedList.find(breed => breed.id == this.props.match.params.breedId)
        return (
            <div>
                <p>BreedDetails</p>
                <p>{breed.id}</p>
                <p>{breed.name}</p>
            </div>
        );
    }
}

export default connect(mapStateToProps)(BreedDetails);