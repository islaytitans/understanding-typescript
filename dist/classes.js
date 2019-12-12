"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    describeEmployees() {
        console.log(this.employees.length);
        console.log(...this.employees);
    }
}
Department.fiscalYear = 2020;
class AccountingDepartment extends Department {
    constructor(id, name) {
        super(id, name);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
            ;
        }
        this.instance = new AccountingDepartment('d1', 'Accounting');
        return this.instance;
    }
    describe() {
        console.log('Department - ID - ' + this.id);
    }
}
class AdminedDepartment extends Department {
    constructor(id, admins, reports) {
        super(id, 'Development');
        this.reports = reports;
        this.admins = admins;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No reports');
    }
    set mostRecentReport(value) {
        if (value) {
            this.addReport(value);
            return;
        }
        throw new Error("No report to add");
    }
    addEmployee(name) {
        if (name === 'Trump') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    describe() {
        console.log('IT Department - ID - ' + this.id);
    }
}
const accounting = AccountingDepartment.getInstance();
accounting.addEmployee('Jon');
accounting.addEmployee('Max');
console.log(accounting);
accounting.describe();
accounting.describeEmployees();
const development = new AdminedDepartment('d2', ['Mark'], ['Oh god why']);
development.addEmployee('Mark');
development.addEmployee('Terry');
console.log(development);
development.describe();
development.describeEmployees();
development.addReport("Looks like nothing to me");
development.mostRecentReport = "I got a bad feeling about this";
console.log(development.mostRecentReport);
const employee1 = Department.createEmployee('Claire');
console.log(employee1, Department.fiscalYear);
//# sourceMappingURL=classes.js.map