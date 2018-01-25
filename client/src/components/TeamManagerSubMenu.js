import React from 'react';
import { Card, Icon, Grid } from 'semantic-ui-react';


class TeamManagerSubMenu extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="teamManagerSubMenu">
                <Grid centered>
                    <Grid.Row centered columns={8}>
                        <Grid.Column>
                            <Card
                                href='#card-example-link-card'
                                header='Team Configuration'
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Card
                                href='#card-example-link-card'
                                header='Check Capacity'
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>







            </div>
        )
    }

}

export default TeamManagerSubMenu;