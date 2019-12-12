abstract class Department {
    static fiscalYear = 2020;
    protected employees: string[] = [];

    constructor(protected readonly id: string, private name: string) {

    }

    static createEmployee(name: string) {
        return {name: name}
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    describeEmployees() {
        console.log(this.employees.length);
        console.log(...this.employees);
    }
}

class AccountingDepartment extends Department {
    private static instance: AccountingDepartment;

    private constructor(id: string, name: string) {
        super(id, name);
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;;
        }
        this.instance = new AccountingDepartment('d1', 'Accounting');
        return this.instance;
    }

    describe() {
        console.log('Department - ID - ' + this.id);
    }
}

class AdminedDepartment extends Department {
    admins: string[];
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport){
            return this.lastReport;
        }
        throw new Error('No reports')
    }

    set mostRecentReport(value: string) {
        if (value) {
            this.addReport(value);
            return;
        }
        throw new Error("No report to add");
    }

    constructor(id: string, admins: string[], private reports: string[]) {
        super(id, 'Development');
        this.admins = admins;
        this.lastReport = reports[0];
    }

    addEmployee(name: string) {
        if (name === 'Trump') {
            return;
        }
        
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    describe() {
        console.log('IT Department - ID - ' + this.id);
    }
}

//const accounting = new AccountingDepartment('d1', 'Accounting');
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