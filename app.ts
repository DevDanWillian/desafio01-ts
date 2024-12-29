import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(12)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(50)
console.log(companyAccount)

const exemploPessoa: PeopleAccount = new PeopleAccount(123, "Pessoa X", 101, 10, 21122024);
console.log(exemploPessoa);
exemploPessoa.deposit(100);
exemploPessoa.withdraw(50);
exemploPessoa.getBalance();

// Criação de instância de CompanyAccount
const exemploEmpresa: CompanyAccount = new CompanyAccount("Empresa Y", 202, 500, 21122024);
console.log(exemploEmpresa);
exemploEmpresa.deposit(200);
exemploEmpresa.withdraw(100);
exemploEmpresa.getLoan(1000);
exemploEmpresa.getBalance();