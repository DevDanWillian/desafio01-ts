export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount:number): void => {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log(this.name, "fez um deposito de", amount);
      console.log("Saldo atual:", this.balance);
    }
  }

  withdraw = (amount:number): void => {
    if (this.validateStatus() && this.balance >= 1) {
      this.balance -= amount;
      console.log(this.name, "fez um saque de", amount, ", agora tendo:", this.balance);
    }
    else{
      console.log("Saldo insuficiente");
    }
  };

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
