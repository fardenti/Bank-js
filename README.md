# Bank

Bank app using JavaScript to practice TDD and OOD.

## Specification

### Requirements

* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### User story

```
As a user
So that I can have a bank statement
I would like to be able to make deposit
```

```
As a user
So that I can have a bank statement
I would like to be able to withdraw
```

### Tech used

* JavaScript
* Jest
* ESLint
* npm
* Node

### Setup

```
run npm install
```

To update npm dependencies
```
npm update --save/--save-dev
```

For Testing
```
npm run test
npm test -- --coverage
```

To run EsLint
```
eslint . 
```
### How to run

The app should be run in Terminal in node:

```
var Bank  = require('./lib/bank')
bank = new Bank()
bank.deposit(1000)
bank.deposit(2000)
bank.withdraw(500)
bank.printStatement()
```
### Example of output

<img src="output.png" width="400px" height="400px">


