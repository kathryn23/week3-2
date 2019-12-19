class BankAccount {  
      constructor(currentAmount, acctName, acctNo) {
        this.balance  = currentAmount;
        this.acctName = acctName;
        this.acctNo   = acctNo;
        this.isActive = false;

        console.info('Account created for holder: ' + acctName);
        }

        getBalance(){
              return this.balance;
               }

        open() {
              this.isActive = true;
              }

        deposit(currentAmount) {
           this.balance += currentAmount;
               }
            
        withdraw(currentAmount){
            this.balance -= currentAmount;
                 }

        close(){
            this.isActive = false;
               }
             
        info(){
              return {
                  accountName  : this.acctName,
                  accountNumber: this.acctNo,
                  balance      : this.getBalance,
                  status       : this.isActive
              };
        }}
        module.exports = BankAccount;
