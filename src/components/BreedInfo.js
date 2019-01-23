import React from 'react';
import PropTypes from 'prop-types';
import placeholder from './images/dog-placeholder.jpg';
import { 
    Badge,
    Card, 
    CardImg, 
    CardText, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
} from 'reactstrap';

const imgStyles = {
    margin: '0 auto'
}

export default class BreedInfo extends React.Component {

    render() {
        const { breedInfo } = this.props;
        return (
            <Card>
                <CardImg top width="100%" src={breedInfo.image_url || placeholder}/>
                <CardBody>
                    <CardTitle><strong>{breedInfo.name}</strong></CardTitle>
                    <strong>Bred for:</strong> {breedInfo.bred_for} <br/>
                    <strong>Temperament:</strong> {breedInfo.temperament.split(',').map(trait => <Badge key={trait} color="secondary">{trait}</Badge>)}
                </CardBody>
            </Card>
        );
    }
}

BreedInfo.propTypes = {
    breedInfo: PropTypes.object.isRequired
};