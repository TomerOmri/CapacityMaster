import React from 'react';
import {Input, Table, Modal, Button, Icon, Form} from 'semantic-ui-react';
import FromToDatePicker from './FromToDatePicker';


class TaktCapcityTable extends React.Component {

    constructor(props){
        super(props);
    }

    state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state
        return(
            <div className="teamTaktTable">
                <Table compact selectable striped color='red'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>Capacity Control</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell>Takt</Table.HeaderCell>
                            <Table.HeaderCell>Dates</Table.HeaderCell>
                            <Table.HeaderCell>Total Team Days</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>02</Table.Cell>
                            <Table.Cell>5.2 - 18.2</Table.Cell>
                            <Table.Cell>66</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>03</Table.Cell>
                            <Table.Cell>18.2 - 11.3</Table.Cell>
                            <Table.Cell>70</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>02</Table.Cell>
                            <Table.Cell>5.2 - 18.2</Table.Cell>
                            <Table.Cell>66</Table.Cell>
                        </Table.Row>
                    </Table.Body>

                    <Table.Footer fullWidth>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell colSpan='4'>
                                <Button onClick={this.show('small')} floated='right' icon labelPosition='left' color='red' size='small'>
                                    <Icon name='add square' /> New Takt
                                </Button>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>

                <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Header>
                        Add New Team Member
                    </Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field id='form-input-control-takt-name' control={Input} label='Takt Name' placeholder='03B' />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <FromToDatePicker/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Checkbox label='Send email notification to team members' />
                            </Form.Group>

                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative>
                            Cancel
                        </Button>
                        <Button positive icon='checkmark' labelPosition='right' content='Create' />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }


}


export default TaktCapcityTable