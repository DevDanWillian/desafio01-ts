import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount:number): void => {
    if (this.validateStatus()) {
      this.balance += amount;
    
    console.log("Voce pegou um emprestimo");}
    else {
      console.log("Voce nao pode pegar um emprestimo de:", amount);
    }
  };
}
