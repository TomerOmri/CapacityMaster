import React from 'react';
import { Button, Icon, Label, Grid, Input, Form } from 'semantic-ui-react';

class TeamMembers extends React.Component {
    constructor(props){
        super(props);
    }

    state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state;

        return(
            <div>
               <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Label image>
                                <img src='https://react.semantic-ui.com/assets/images/avatar/small/joe.jpg' />
                                Adrienne
                                <Icon name='delete' />
                            </Label>
                            <Label image>
                                <img src='https://react.semantic-ui.com/assets/images/avatar/small/elliot.jpg' />
                                Zoe
                                <Icon name='delete' />
                            </Label>
                            <Label image>
                                <img src='https://react.semantic-ui.com/assets/images/avatar/small/stevie.jpg' />
                                Nan
                                <Icon name='delete' />
                            </Label>                   </Grid.Column>
                        <Grid.Column width={4}>
                            <Input
                                defaultValue='tomer.omri@sap.com'
                                size="mini"
                            />
                            <Button onClick={this.show('small')} circular icon='plus' />
                        </Grid.Column>
                    </Grid.Row>

                   <Grid.Row>
                       sdf
                   </Grid.Row>

               </Grid>

            </div>
        );
    }
}

export default  TeamMembers;