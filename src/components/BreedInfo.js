import React from 'react';
import PropTypes from 'prop-types';
import placeholder from './images/dog-placeholder.jpg';
import { Link } from 'react-router-dom';
import TemperamentBadge from './TemperamentBadge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    Badge,
    Card, 
    CardImg, 
    CardText, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
} from 'reactstrap';


export default class BreedInfo extends React.Component {

    getTemperamentBadges() {
        return this.props.breedInfo.temperament.split(',').map(
            trait => <TemperamentBadge key={trait} path={`/trait/${trait}`} color="secondary">{trait}</TemperamentBadge>
        )
    }

    render() {
        const { breedInfo } = this.props;
        return (
            <Card>
                <CardImg top width="100%" src={breedInfo.image_url || placeholder}/>
                <CardBody>
                    <CardTitle><strong>{breedInfo.name}</strong></CardTitle>
                    <strong>Bred for:</strong> {breedInfo.bred_for} <br/>
                    <strong>Temperament:</strong> {breedInfo.temperament ? this.getTemperamentBadges() : null}
                    <Link to={`/breed/${breedInfo.id}`}>View more</Link>
                </CardBody>
            </Card>
        );
    }
}

BreedInfo.propTypes = {
    breedInfo: PropTypes.object.isRequired
};