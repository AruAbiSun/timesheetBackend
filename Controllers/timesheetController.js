import Timesheet from "../Models/timesheetSchema.js";

export const createTimesheet = async(req, res) => {
    try {
        const {date, hoursWorked, leaveType, remarks} = req.body;

        if (!req.employee || !req.employee._id) {
            return res.status(401).json({ message: 'Unauthorized: Employee not authenticated' });
        }
        
         const employeeId = req.employee._id

        const newTimesheet = new Timesheet({ date, hoursWorked, leaveType, remarks, employeeId})
        await newTimesheet.save()
        res.status(201).json({message:'Timesheet entry created successfully', data: newTimesheet})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Error creating timesheet entry'})
    }
}

export const updateTimesheet = async(req, res) => {
    try {
        const employeeId = req.employee._id
        const {id} =req.params
        const {date, hoursWorked, leaveType, remarks}= req.body;
        const timesheet = await Timesheet.findByIdAndUpdate({_id: id, employeeId}, {date, hoursWorked, leaveType, remarks}, {new: true})
        if(!timesheet){
            return res.status(404).json({message:'Timesheet entry not found'})
        }
        res.status(200).json({message:'Timesheet updated successfully', data:timesheet})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error updating timesheet entry'})
    }
}

export const getTimesheet = async(req, res) => {
    try {
        if (!req.employee || !req.employee._id) {
            return res.status(401).json({ message: "Unauthorized: Employee not authenticated" });
        }
        const employeeId = req.employee._id
        const timesheet = await Timesheet.find({employeeId})
        // if(!timesheet || timesheet.length === 0){
        //     return res.status(404).json({message: 'No timesheet find for this employee'})
        // }
        res.status(200).json({data:timesheet})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Error fetching timesheets"})
    }
}