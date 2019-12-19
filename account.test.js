const BankAccount = require('./account.js');
const bankaccount = new BankAccount(6000, 'kathryn', 123);

test('should return true if the account is open', () => {
    bankaccount.open(); 
    console.log("BankAccount:", bankaccount);
    expect(bankaccount.isActive).toBeTruthy();
    expect(bankaccount.acctName).toBe('kathryn');
    expect(bankaccount.acctNo).toBe(123); 
});

test('should return the current account balance', () => {
    expect(bankaccount.getBalance()).toBe(6000);
});

test('should return the current balance + the amount deposited', () => {
    bankaccount.deposit(2000);
    expect(bankaccount.getBalance()).toBe(8000)
});

test('should return the amount withdrawn', () => {
    const balance= bankaccount.getBalance();
    const amount = 2300;
    bankaccount.withdraw(amount);
    expect(bankaccount.getBalance()).toBe(5700);
});

test('should return false if account is closed ', () => {
     bankaccount.close();
    expect(bankaccount.isActive).toBeFalsy();
});




 