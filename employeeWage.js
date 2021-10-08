const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOURS=20;
const NUM_OF_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=160;
let totalEmpHrs=0;
let totalWorkingDays=0;
let empHrs=0; 
let empDailyWageArr=new Array();
let empCheck=Math.floor(Math.random()*10)%3;
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            empHrs=PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            empHrs=FULL_TIME_HOURS;
            break;
        default:
            empHrs=0;
    }
}
for(let day=0;day<NUM_OF_WORKING_DAYS;day++){
    let empCheck=Math.floor(Math.random()*10)%3;
    empHrs+=getWorkingHours(empCheck);
}
function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOURS;
}
while(totalEmpHrs<MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs+=getWorkingHours(empCheck);
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage=calcDailyWage(totalEmpHrs);
console.log("Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wage"+empWage);

