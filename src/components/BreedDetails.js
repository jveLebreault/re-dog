import React from 'react';
import {connect} from 'react-redux';
import {
    Col,
    Row,
    Table
} from 'reactstrap';
import TemperamentBadge from './TemperamentBadge';

const mapStateToProps = (state) => ({breedList: state.breedList})

class BreedDetails extends React.Component {

    componentDidMount() {
        console.log('COMPONENTDIDMOUNT')
    }

    getTemperamentBadges(temperaments) {
        return temperaments.split(',').map(
            trait => {
                trait = trait.trim();
                return <TemperamentBadge key={trait} path={`/trait/${trait}`} color="secondary">{trait}</TemperamentBadge>
            }
        )
    }

    render() {
        const breed = this.props.breedList.find(breed => breed.id == this.props.match.params.breedId)
        return (
            
            <div>
                {breed &&
                <React.Fragment>
                    <Row>
                        <Col xs="12">
                            <h4 className="display-4">{breed.name}</h4>
                            {breed.temperament && this.getTemperamentBadges(breed.temperament)}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6">
                            {breed.origin && 
                            <div>
                                <strong>Origin: </strong> <span>{breed.origin}</span>
                            </div>}
                        </Col>

                        <Col xs="6">
                            {breed.life_span && 
                            <div>
                                <strong>Life span: </strong> <span>{breed.life_span}</span>
                            </div>}
                        </Col>

                        <Col xs="6">
                            {breed.bred_for && 
                            <div>
                                <strong>Bred for: </strong> <span>{breed.bred_for}</span>
                            </div>}
                        </Col>

                        <Col xs="6">
                            {breed.breed_group && 
                            <div>
                                <strong>Breed group: </strong> <span>{breed.breed_group}</span>
                            </div>}
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="6" md="3">
                            <Table size="sm" borderless>
                                <tbody>
                                    <tr>
                                        <th rowSpan="2" className="vertical-center">
                                            Height
                                        </th>

                                        <td>
                                            {breed.height.imperial} in
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            {breed.height.metric} cm
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>

                        <Col xs="6" md="3">
                            <Table size="sm" borderless>
                                <tbody>
                                    <tr>
                                        <th rowSpan="2" className="vertical-center">
                                            Weight
                                        </th>

                                        <td>
                                            {breed.weight.imperial} lb
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            {breed.weight.metric} kg
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </React.Fragment>}
            </div>
        );
    }
}

export default connect(mapStateToProps)(BreedDetails);