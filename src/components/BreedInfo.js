import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardAreaMain, CardHeaderPrimary, CardContent, Tag } from 'reactackle'


export default class BreedInfo extends React.Component {

    render() {
        const { breedInfo } = this.props;
        return (
            <div>
                <h3>{breedInfo.name}</h3>
                <strong>Bred for:</strong> {breedInfo['bred_for']} <br/>
                <strong>Temperament:</strong> {breedInfo.temperament.split(',').map(trait => <Tag text={trait}/>)}
            </div>
        );
    }
}

BreedInfo.propTypes = {
    breedInfo: PropTypes.object.isRequired
};