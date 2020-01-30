let myAccount = {
    name: 'Murali Uppangala',
    expenses: 0,
    income: 0
}

let addExpenses = function (account,amout){
    account.expenses += amout
}

let addIncome = function(account,amount){
    account.income += amount
}

let resetAccount = function(account){
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function(account){
    console.log(`Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income and $${account.expenses} in expenses.`)
}


addIncome(myAccount,1000)
addExpenses(myAccount,2.50)
addExpenses(myAccount,300)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)