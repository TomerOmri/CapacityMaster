import React from 'react';
import {Calendar, CalendarControls} from 'react-yearly-calendar';
import { Grid, Button, Message, Label } from 'semantic-ui-react'
import './Cal.css';

function onDatePicked(date) {
    alert(date);
}

const Cal = () => {
    return(
        <div>

                <Grid.Row>
                    <div>
                        <Label as='a' color='green' tag>Work</Label>
                    </div>
                    <div>
                        <Label as='a' color='red' tag>Out</Label>

                    </div>
                    <div>
                        <Label as='a' color='purple' tag>University</Label>

                    </div>
                    <div>
                        <Label as='a' color='blue' tag>Vacation</Label>

                    </div>
                </Grid.Row>
                <Grid.Row>
                    <Calendar
                        year={2018}
                        onPickDate={onDatePicked}/>
                </Grid.Row>


                <Grid.Row floated='right'>
                    <Button.Group floated='right'>
                        <Button>Revert</Button>
                        <Button.Or />
                        <Button positive>Save</Button>
                    </Button.Group>
                </Grid.Row>
        </div>
    )
}

export default Cal;