// UC 1 -- To check for the attendance of the employee
const IS_ABSENT = 0;
let employeeCheck = Math.floor((Math.random()*10) % 2);
if(employeeCheck == IS_ABSENT)
{
    console.log("Employee is Absent");
    return;
}
else
{
    console.log("Employee is Present");
}

// UC 2 -- Check for daily wage based on whether the employee is part time or full time
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

//UC-3 Refactor the Code to write a function to get work hours and 
function GetEmployeeHour(employeeTypeCheck)
{
    switch(employeeTypeCheck)
    {
    case IS_PART_TIME:
        return PART_TIME_HOURS;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
    default:
        return 0;
    }
}
//UC-4 Constant indicating number of working days in a month
const NUM_OF_WORKING_DAYS = 20;
// Constant indicating the number of the maximum hours in a month as the limit of month end
const MAX_HRS_IN_MONTH = 100;


// Counter for the employee working hours and working days
let totalEmployeeHour = 0;
let totalWorkingDays = 0;

//UC5 -- Replacing the for loop with the while loop and then evaluating the employee wage

while(totalWorkingDays < NUM_OF_WORKING_DAYS && totalEmployeeHour <= MAX_HRS_IN_MONTH)
{
    // Incrementing the day
    totalWorkingDays++;
    // Generating the type of employee using random function
    let employeeTypeCheck = Math.floor((Math.random()*10) % 3);
    // Incrementing the employee Hour from the value returned from the get employee hour class
    employeeHour += GetEmployeeHour(employeeTypeCheck);
}
// Computing the employee wage
let employeeWage = employeeHour * WAGE_PER_HOUR;
console.log("Employee Wage :" + employeeWage);