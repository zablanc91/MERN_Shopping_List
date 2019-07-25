import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

/*since using arrow functions, do not need to bind custom methods, also do not need constructor

    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }

        this.toggle = this.toggle.bind(this);
    }

*/
class AppNavBar extends Component {
    state = {
        isOpen : false  
    }

    toggle = () => {
        this.setState({
            isOpen : !this.state.isOpen
        });
    }

    render() {
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">
                            Shopping List
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://www.google.com">google</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>

                </Navbar>
            </div>
        );
    }

}

export default AppNavBar;