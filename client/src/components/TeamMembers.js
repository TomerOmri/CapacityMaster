import React from 'react';
import { Icon, Label, Modal, Button, List, Form, Input, Table, Header } from 'semantic-ui-react';


class TeamMembers extends React.Component {
    constructor(props){
        super(props);
    }

    state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state

        return(
            <div className="teamMatesTable">
                <Table celled compact selectable definition striped color='blue'>
                    <Table.Header fullWidth>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>Team Mates</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>E-mail address</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Tomer Omri</Table.Cell>
                            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jawad Margih</Table.Cell>
                            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Tsafrir Skalerski</Table.Cell>
                            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Amir Yahalom</Table.Cell>
                            <Table.Cell>jsdfsdf2@yahoo.com</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Saar Dagan <Icon color='green' name='new pied piper'/></Table.Cell>
                            <Table.Cell>jhl42@yahoo.com</Table.Cell>
                        </Table.Row>
                    </Table.Body>

                    <Table.Footer fullWidth>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell colSpan='4'>
                                <Button onClick={this.show('small')} floated='right' icon labelPosition='left' primary size='small'>
                                    <Icon name='user' /> Add User
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
                                <Form.Field id='form-input-control-first-name' control={Input} label='Name' placeholder='Tomer' />
                                <Form.Input label='Email' placeholder='tomer.omri@sap.com' />
                            </Form.Group>

                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative>
                            Cancel
                        </Button>
                        <Button positive icon='checkmark' labelPosition='right' content='Add New Member' />
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

export default  TeamMembers;