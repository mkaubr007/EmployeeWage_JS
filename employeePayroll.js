class EmployeePayrollData{
    id;
    salary;
    gender;
    startDate;
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }
    get name(){return this._name;}
    set name(name){this._name=name;}
    toString(){
        const options={year: 'numeric',month: 'long',day: 'numeric'};
        const empDate=this.startDate===undefined ? "undefined":
                      this.startDate.toLocaleDateString("en-US", options);
        return "id="+this.id+",name="+this.name+",salary="+this.salary+"gender="+this.gender+"startDate="+this.startDate;
    }
}
let employeePayrollData=new EmployeePayrollData(1,"Manish",30000);
console.log(employeePayrollData.toString());
employeePayrollData.name="David";
console.log(employeePayrollData.toString());
let newEmployeePayrollData=new EmployeePayrollData(1,"Rajendra",30000,"M",new Date());
console.log(newEmployeePayrollData.toString());