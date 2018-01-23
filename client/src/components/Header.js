import React, { Component } from 'react'
import { Menu, Button, Icon } from 'semantic-ui-react'

export default class MenuExampleStackable extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu size='small'>
                <Menu.Item name='home' onClick={this.handleItemClick} >
                    <img src='https://image.flaticon.com/icons/svg/693/693854.svg' />
                </Menu.Item>
                <Menu.Item name='Report an Issue' active={activeItem === 'Report an Issue'} onClick={this.handleItemClick} />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button color='google plus'>
                            <Icon name='google plus' /> Login via Google Plus
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}
