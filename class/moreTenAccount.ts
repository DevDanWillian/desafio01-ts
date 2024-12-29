import { DioAccount } from "./DioAccount"

class moreTenAccount extends DioAccount {
  constructor(name: string, accountNumber:number, balance:number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance + value + 10;
      console.log(`Você depositou ${value} e ganhou mais 10`);
    }
  };
}

//exemplo de conta deste tipo
const contaMoreTen = new moreTenAccount("Dan", 15456, 1000);
contaMoreTen.deposit(100);