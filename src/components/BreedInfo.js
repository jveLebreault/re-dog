import React from 'react';
import PropTypes from 'prop-types';
import placeholder from './images/dog-placeholder.jpg';
import { Link } from 'react-router-dom';
import TemperamentBadge from './TemperamentBadge';
import PopOverBreedInfo from './PopOverBreedInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Button,
    Card,
    CardLink,
    CardImg, 
    CardText, 
    CardBody, 
    CardTitle, 
    CardSubtitle,
} from 'reactstrap';


export default class BreedInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isPopOverOpen: false
        }

        this.togglePopOver = this.togglePopOver.bind(this);
    }


    getTemperamentBadges() {
        return this.props.breedInfo.temperament.split(',').map(
            trait => {
                trait = trait.trim();
                return <TemperamentBadge key={trait} path={`/trait/${trait}`} color="secondary">{trait}</TemperamentBadge>
            }
        )
    }


    togglePopOver() {
        this.setState({
            isPopOverOpen: !this.state.isPopOverOpen
        });
    }

    getPopOverProps() {
        return {
            isOpen: this.state.isPopOverOpen,
            toggle: this.togglePopOver,
            target: `breed-${this.props.breedInfo.id}`,
            trigger: 'legacy',
            placement: 'left-end'
        };
    }


    render() {
        const { breedInfo } = this.props;
        return (
            <Card>
                <CardImg top width="100%" src={breedInfo.image_url || placeholder}/>
                <CardBody>
                    <CardTitle><strong>{breedInfo.name}</strong></CardTitle>
                    <CardText>
                        <strong>Bred for:</strong> {breedInfo.bred_for} <br/>
                        <strong>Temperament:</strong> {breedInfo.temperament ? this.getTemperamentBadges() : null}
                    </CardText>

                    <div className="d-flex">
                        <div className="mr-auto">
                            <Button id={`breed-${breedInfo.id}`} size="sm" outline color="primary" className="info-color" onClick={this.togglePopOver}>
                                <FontAwesomeIcon icon="eye"/>
                            </Button>
                        </div>
                        <div>
                            <Link to={`/breed/${breedInfo.id}`}>Breed Page ></Link>
                        </div>
                    </div>
                </CardBody>

                <PopOverBreedInfo breedInfo={breedInfo} popover={this.getPopOverProps()}/>
            </Card>
        );
    }
}

BreedInfo.propTypes = {
    breedInfo: PropTypes.object.isRequired
};