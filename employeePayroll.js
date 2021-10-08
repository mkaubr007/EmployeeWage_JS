class EmployeePayrollData{
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
    set name(name){
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
        this._name=name;
    }
    get id(){return this._id}
    set id(id){
        let idRegex=RegExp('^[1-9][0-9]*$');
        if(idRegex.test(id))
        this._id=id;
    }
    get salary(){return this._salary}
    set salary(salary){
        let salaryRegex=RegExp('^[1-9][0-9]*$');
        if(salaryRegex.test(salary))
        this._salary=salary;
    }
    get gender(){return this._gender}
    set gender(gender){
        let genderRegex=RegExp('^[1-9][0-9]*$');
        if(genderRegex.test(gender))
        this._gender=gender;
    }
    toString(){
        const options={year: 'numeric',month: 'long',day: 'numeric'};
        const empDate=this.startDate===undefined ? "undefined":
                      this.startDate.toLocaleDateString("en-US", options);
        return "id="+this.id+",name="+this.name+",salary="+this.salary+"gender="+this.gender+"startDate="+this.startDate;
    }
}
let employeePayrollData=new EmployeePayrollData(1,"Manish",30000);
console.log(employeePayrollData.toString());
try{
employeePayrollData.name="David";
console.log(employeePayrollData.toString());
}catch(e){
    console.error(e);
}
try{
    employeePayrollData.id=2;
    console.log(employeePayrollData.toString());
}catch(e){
    console.error(e);
}
try{
    employeePayrollData.salary=48555;
    console.log(employeePayrollData.toString());
}catch(e){
    console.error(e);
}
try{
    employeePayrollData.gender="Male";
    console.log(employeePayrollData.toString());
}catch(e){
    console.error(e);
}
let newEmployeePayrollData=new EmployeePayrollData(1,"Rajendra",30000,"M",new Date());
console.log(newEmployeePayrollData.toString());