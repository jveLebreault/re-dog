import React from 'react';
import {Link} from 'react-router-dom';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';

class TemperamentBadge extends React.Component {

    getLink() {
        return (
            <Link to={this.props.path}>
                {this.props.children || this.props.temperament}
            </Link>
        );
    }

    render() {
        return (
            <Badge color={this.props.color || 'secondary'}>
                {this.props.path ? this.getLink() : this.props.children || this.props.temperament}
            </Badge>
        );
    }

}

TemperamentBadge.propTypes = {
    temperament: PropTypes.string,
    path: PropTypes.string,
    color: PropTypes.string
}

export default TemperamentBadge;