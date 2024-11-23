import mongoose from "mongoose";

const timesheetSchema = new mongoose.Schema({
    employeeId: {type: mongoose.Schema.Types.ObjectId, ref: "Employee", required:true},
    date: {type: Date, required: true},
    hoursWorked: {type: Number, default: 0},
    leaveType: {type: String, enum: ['Sick Leave','Casual Leave', '']},
    remarks: {type:String, default: ''},
},{timestamps:true});

const Timesheet = mongoose.model('Timesheet', timesheetSchema)
export default Timesheet