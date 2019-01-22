import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'grommet';


export default class BreedInfo extends React.Component {

    render() {
        const { breedInfo } = this.props;
        return (
            <div>
                <Heading level="4">{breedInfo.name}</Heading>
                <p>
                    <a href="google.com" target="_blank">Hola</a>
                </p>
            </div>
        );
    }
}

BreedInfo.propTypes = {
    breedInfo: PropTypes.object.isRequired
};