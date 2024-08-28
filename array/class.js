class BanckAccount{
    #balance;
    constructor(name, balance){
        this.accountHolder = name;
        this.#balance = balance;
    }
    getBalance(){
        console.log(this.#balance);
    }
    deposit(amount){
        if(amount>0){
            this.#balance+=amount;
        }
    }
    withdraw(amount){
        if(amount>0 && amount<=this.#balance){
            this.#balance-=amount;
        }
    }
}
let account = new BanckAccount('Pinki', 2000);
account.getBalance()
account.deposit(500)
account.getBalance()
account.withdraw(2000)
account.getBalance()
