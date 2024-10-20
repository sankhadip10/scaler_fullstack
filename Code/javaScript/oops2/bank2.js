class Account{
    #username
    #password
    #balance
    
    static totalAccount = 0;

    constructor({username,password,initialDeposit=0,ifsc}){
        if(isNaN(initialDeposit)) throw new Error('Initial deposit must be a number')
        if(!password || password.length<3) throw new Error("password must be 3 or more chars")
        if(!username || username.length<3) throw new Error("Username must be 3 or more chars")
        this.#username = username
        this.#password =password
        this.#balance = Number(initialDeposit)
        this.ifsc = ifsc;
        this.accountNumber = `acc_${username}_${Date.now().toString()}`

        Account.totalAccount++;
    }

    deposit(amt){
        if(isNaN(Number(amt))) throw new Error('Initial deposit must be a number')
        if(Number(amt<0)) throw new Error('Amount must be a number')
        this.#balance += Number(amt)

        console.log(`[${this.#username}] OTP:Credited ${amt} from your account`)

    }

    withdraw(amount){
        const amt = Number(amount)
        if(isNaN(amt)) throw new Error('Amount must be a number')
        if(amt<0) throw new Error('Amount must be gt 0')
        if(amt>this.#balance) throw new Error('Insufficient balance')

        this.#balance -= amt

        console.log(`[${this.#username}] OTP:Debited ${amt} from your account`)

    }

    /**
     * 
     * @param {Account} to 
     * @param {amount} amount
     * @param {string} password 
     */
    transfer(to,amount,password){
        if(this.#password !== password) throw new Error("Password is incorrect")
        if(!(to instanceof Account)) throw new Error("Account should be instance of account")
        this.withdraw(amount);
        to.deposit(amount)
    }

    displayBalance(){
        console.log(`**********Balance********\n
            Account Number:${this.accountNumber}\n
            Account Holder:${this.#username}\n
            Balance:${this.#balance}`)
    }
}

// const akash = new Account({username:'akash',password:'aaww',initialDeposit:100});
// const nitin = new Account({username:'nitin',password:'aaww',initialDeposit:400});
// const prakash = new Account({username:'prakash',password:'wwaa',initialDeposit:200});
// const aniket = new Account({username:'aniket',password:'awwa',initialDeposit:500});


// akash.displayBalance()
// akash.transfer(nitin,50,'aaww')

// akash.displayBalance()
// nitin.displayBalance()

// prakash.transfer(nitin,200,'wwaa')
// nitin.transfer(aniket,600,'aaww')

class Bank{
    constructor(name){
        this.name = name;
        this.db = new Map();
    }
        /**
        @param{Account} account
         * 
         */
    openAccount(account){
        if(!(account instanceof Account)) throw new Error('Account must be an object of Account!')
        if(this.db.has(account.accountNumber)) throw new Error('Account number already exists')
           
        this.db.set(account.accountNumber,account);
        return account;
    }

    /**
     * 
     * @param {string} id 
     * @returns {Account}
     */
    getAccounById(id){
        if(!this.db.has(id)) throw new Error('Wrong Account Number')
        return this.db.get(id);
    }


    /**
     * 
     * @param {Account} from 
     * @param {Account} to
     * @param {string} password 
     */
    static transfer(from,to,amount,password){
        from.transfer(to,amount,password)
    }
    
}

const hdfc = new Bank('HDFC Bank');
const icici = new Bank('ICIC Bank');




const IFSC={
    'HDFC' :hdfc,
    'ICICI' :icici

}




const piyush = hdfc.openAccount(new Account({username:'Piyush',password:'p1234',initialDeposit:200,ifsc:'HDFC'}));
const akash =icici.openAccount(new Account({username:'Akash',password:'a123',initialDeposit:50,ifsc:'ICICI'}))


hdfc.getAccounById(piyush.accountNumber).transfer(
    icici.getAccounById(akash.accountNumber),50,'p1234'
)

Bank.transfer(piyush,akash,50,'p1234')

piyush.displayBalance()
akash.displayBalance()


console.log("Total Account",Account.totalAccount)