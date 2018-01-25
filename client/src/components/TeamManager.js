import React from 'react';
import TeamMembers from './TeamMembers';
import TaktCapcityTable from "./TaktCapacityTable";

const TeamManager = () => {
    return(
        <div className="containerInPage">
            <div>
                <h2>Team Manager Space</h2>
            </div>

            <div className="teamManagerRow">
                <TeamMembers/>
            </div>

            <div className="teamManagerRow">
                <TaktCapcityTable />

            </div>

        </div>
    )


}


export default TeamManager;