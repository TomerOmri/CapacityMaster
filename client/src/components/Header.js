import React, { Component } from 'react'
import { Menu, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';


class HeadMenu extends Component {

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleLoginWithGoogleClick = () => {
        window.location = '/auth/google'
    }




    renderContent() {
        console.log(this.props)
        switch (this.props.auth) {
            case null:
                return 'Waiting for data'
            case false:
                return (
                    <Button onClick={this.handleLoginWithGoogleClick} floated='right' color='google plus'>
                        <Icon name='google plus' /> Sign in with Google Plus
                    </Button>
                )
            default:
                return (
                    <span>
                        {this.props.auth.displayName} <span className="logOutStyle"> <a href='/api/logout'> (Log out)</a> </span>
                    </span>
                )
        }

    }




    render() {
        const { activeItem } = this.state
        console.log(this.props);
        return (
            <Menu stackable>
                <Menu.Item>
                    <img src='https://image.flaticon.com/icons/svg/184/184657.svg' />
                </Menu.Item>

                <Menu.Item
                    name='userCalander'
                    active={activeItem === 'userCalander'}
                    onClick={this.handleItemClick}>
                    Your Calander
                </Menu.Item>

                <Menu.Item
                    name='teamCalander'
                    active={activeItem === 'teamCalander'}
                    onClick={this.handleItemClick}>
                    Team Calander
                </Menu.Item>

                <Menu.Item
                    name='help'
                    active={activeItem === 'help'}
                    onClick={this.handleItemClick}>
                    Help
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item
                        name='teamManage'
                        active={activeItem === 'teamManage'}
                        onClick={this.handleItemClick}>
                        Team Management
                    </Menu.Item>
                    <Menu.Item>
                        {this.renderContent()}
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}


function mapStateToProp(state){
    return { auth: state.auth }
}

export default connect(mapStateToProp)(HeadMenu);