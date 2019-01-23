import React from 'react';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';

export default class NavMenu extends React.Component {

    render() {
        return (
            <Navbar>
                <NavbarBrand href="/">Re-dog</NavbarBrand>
            </Navbar>
        );

    }
}