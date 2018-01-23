import React from 'react';
import { Grid, Button, Message, Label } from 'semantic-ui-react'
import TeamMembers from './TeamMembers';
const TeamManager = () => {
    return(
        <div>
            <Grid>
                <Grid.Row>
<Grid.Column>
    <h1>Team Members: </h1>
</Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <TeamMembers/>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )


}


export default TeamManager;