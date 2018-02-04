const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const ROLES = {
    SuperAdmin: 'superAdmin',
    TeamLeader: 'teamLeader',
    TeamMember: 'teamMember'
};

const DAYS_STATUS = {
    InOffice: 'inOffice',
    Vacation: 'vacation',
    Course: 'course',
    University: 'university'
}

const userSchema = new Schema({
    googleId: String,
    displayName: String,
    email: { type: String, trim: true, unique: true },
    isTeamLeader: {type: Boolean, default: false},
    teamLeaderTeamId: String,
    isSuperAdmin: { type: Boolean, default: false },
    datesReported: [],
    userRole: { type: String, default: ROLES.TeamMember }
});









// put on mongoose model new collection named users with type userSchema
mongoose.model('users', userSchema);