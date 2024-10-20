class Bank{
    constructor(accountname){
        if(!accountname) throw new Error("Account name is requires is required")
        this.accountname = accountname
    }

    withdraw(amt){
        console.log(`Withdraw ${amt} from ${this.accountname}`)
    }

    deposit(amt){
        console.log(`Deposit ${amt} from ${this.accountname}`)
    }
}

const nitin = new Bank('Nitin')
const sharma = new Bank('Sharma')

sharma.deposit(100)
nitin.deposit(100)