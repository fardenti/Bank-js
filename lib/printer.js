class Printer {
  constructor() {
  }

  createStatement(log) {
    const allTransactions = log.reverse();
    for (let i = 0; i < allTransactions.length; i++) {
      console.log(
          allTransactions[i].getDate +
        ' || ' +
        allTransactions[i].credit.toFixed(2) +
        ' || ' +
        allTransactions[i].debit.toFixed(2) +
        ' || ' +
        allTransactions[i].balance.toFixed(2)
      );
    }
  }
}

module.exports = Printer;

