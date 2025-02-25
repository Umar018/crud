const Expenses = {
  water: 0,
  gas: 0,
  electricity: 0,
  addExpense: function (type, amount) {
    this[type] += amount;
  },
  removeExpense: function (type, amount) {
    this[type] -= amount;
  },
  printMonthlyReport: function () {
    return {
      water: this.water,
      gas: this.gas,
      electricity: this.electricity,
    };
  },
};

Expenses.addExpense("water", 50);
Expenses.removeExpense("gas", 10);

console.log(Expenses.printMonthlyReport()); 


