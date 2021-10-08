const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOURS=20;
const NUM_OF_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=160;
let totalEmpHrs=0;
let totalWorkingDays=0;
let totEmpWage=0;
let empHrs=0; 
let empDailyWageArr=new Array();
let empDailyWageMap=new Map();
function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOURS;
}
let empCheck=Math.floor(Math.random()*10)%3;
function sum(dailyWage){
    totEmpWage+=dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total Days: "+totalWorkingDays+" Total rs: "+totalEmpHrs+" Emp Wage"+totEmpWage);
function totWages(totalWage,dailyWage){
    return totalWage+dailyWage;
}
console.log("Emp Wage with reduce"+empDailyWageArr.reduce(totWages,0));
let dailyCntr=0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr +"=" +dailyWage;
}
let mapDayWithWageArr=empDailyWageArr.map(mapDayWithWage);
console.log("Daily Wage Map");
console.log(mapDayWithWageArr);
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fulldayWageArr=mapDayWithWageArr.filter(fulltimeWage);
console.log("Daily Wage Filter When full time Wage Earned");
console.log(fulldayWageArr);
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("First time Fulltime was earned on Day: "+mapDayWithWageArr.find(findFulltimeWage));
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("Check All Element has Full time Wage"+fulldayWageArr.every(isAllFulltimeWage));
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("Check If Any Part Time Wage"+mapDayWithWageArr.some(isAnyPartTimeWage));
function totalDayWorked(numOfDays,dailyWage){
    if(dailyWage>0) return numOfDays+1;
    return numOfDays;
}
console.log("Number of Days Emp Worked"+empDailyWageArr.reduce(totalDayWorked,0));
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
    empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));
}
let empWage=calcDailyWage(totalEmpHrs);
console.log("Emp Wage Map totalHrs: "+Array.from(empDailyWageMap.values()).reduce(totWages,0));
const findTotal=(totalVal,dailyVal)=>{
    return totalVal+dailyVal;
}
let count =0;
let totalHours=Array.from(empDailyWageMap.values()).reduce(findTotal,0);
let totalSalary=empDailyWageArr.filter(dailyWage => dailyWage>0).reduce(findTotal,0);
console.log("Emp Wage Wage with Arrow: "+"Total Hours"+totalHours+"Total Wage"+totalSalary);
let nonWorkingDays=new Array();
let parWorkingDays=new Array();
let fullWorkingdays=new Array();
empDailyWageMap.forEach((value,key,map)=>{
    if(value==8)fullWorkingdays.push(key);
    else if (value==4)partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days: "+fullWorkingdays);
console.log("part Working Days"+parWorkingDays);
console.log("Non Working Day: "+nonWorkingDays);
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs +=empHrs;
    empDailyHrsAndWageArr.push({
        dayNum:totalWorkingDays,
        dailyHours:empHrs,
        dailyWage:calcDailyWage(empHrs),
        toString(){
            return '\nDay'+this.dayNum+'=>Working Hours is '+this.dailyHours+
            'And Wage Earned= '+this.dailyWage
        },
    });
}
