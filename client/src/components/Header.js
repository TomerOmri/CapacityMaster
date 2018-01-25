import React, { Component } from 'react'
import { Menu, Button, Icon } from 'semantic-ui-react'


export default class HeadMenu extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

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
                        <Button floated='right' color='google plus'>
                            <Icon name='google plus' /> Sign in with Google Plus
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}