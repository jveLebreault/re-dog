import React from 'react';
import {
    ListGroup,
    ListGroupItem,
    Popover,
    PopoverBody,
    PopoverHeader,
    Table
} from 'reactstrap';

class PopOverBreedInfo extends React.Component {

    render() {
        return (
            <Popover {...this.props.popover}>
                <PopoverHeader>More details</PopoverHeader>

                <PopoverBody>
                    <ListGroup flush>

                        <ListGroupItem>
                            <strong>Life span: </strong>
                            <span>{this.props.breedInfo.life_span}</span>
                        </ListGroupItem>

                        {this.props.breedInfo.breed_group && 
                        <ListGroupItem>
                            <strong>Breed group: </strong>
                            <span>{this.props.breedInfo.breed_group}</span>
                        </ListGroupItem>}

                        {this.props.breedInfo.origin &&
                        <ListGroupItem>
                            <strong>Origin: </strong>
                            <span>{this.props.breedInfo.origin}</span>
                        </ListGroupItem>}

                        <ListGroupItem>
                            <Table size="sm" borderless>
                                    <tbody>
                                        <tr>
                                            <th rowSpan="2" className="vertical-center">
                                                Height
                                            </th>

                                            <td>
                                                {this.props.breedInfo.height.imperial} in
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                {this.props.breedInfo.height.metric} cm
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                        </ListGroupItem>

                        <ListGroupItem>
                            <Table size="sm" borderless>
                                <tbody>
                                    <tr>
                                        <th rowSpan="2" className="vertical-center">
                                            Weight
                                        </th>

                                        <td>
                                            {this.props.breedInfo.weight.imperial} lb
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            {this.props.breedInfo.weight.metric} kg
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </ListGroupItem>

                    </ListGroup>
                </PopoverBody>                
            </Popover>
        );
    }
}

// PopoverInfo.propTypes = {

// }

export default PopOverBreedInfo;