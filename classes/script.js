//Classes- - starts with 'new'
//methods
//properties


//constructor

//this --- refers to 

class car{
	constructor(name, color, speed){
		//properties
		this.name= name
		this.color= color
		this.speed= speed
	}
	//methods
	drive(){
		console.log('just started driving')
		}
	break(){
		console.log('just halted')
	}

}

const ferrari = new car('ferrar', 'white', 240)
console.log(car)
ferrari.drive()
ferrari.break()


class Bank {
	constructor(balance){
		this.balance = balance
		
	}
	withdraw(amount){
		if(this.balance - amount == 0){
			console.log('You do not have upto that amount')
		return
		}

		this.balance -= amount
		console.log(`you just withdrew $${amount}`)
		console.log(`your balance is $${this.balance}`)
		// console.log(`balance: ${this.balance}`)

	}

	deposit(amount){
		this.balance += amount
		console.log(`you just deposit $${amount}`)
		console.log(`your balance is $${this.balance}`)

	}
}

const RichAccount = new Bank(300)
console.log(RichAccount.balance)
RichAccount.deposit(200)
console.log(RichAccount.balance)
RichAccount.withdraw(400)
console.log(RichAccount.balance)
RichAccount.withdraw(1000)
console.log(RichAccount.balance)
RichAccount.deposit(1000)
RichAccount.withdraw(100)

//DOM
const amountInput = document.getElementById('amount')
const deposit = document.getElementById('deposit')
const withdraw = document.getElementById('withdraw')
const balance = document.getElementById('balance')

deposit.onclick = ()=> {
	RichAccount.deposit(Number(amountInput.value))
	console.log(Number(amountInput.value))
	balance.innerText = `Balance: $${Number(RichAccount.balance)}`
}
withdraw.onclick =() => {
	RichAccount.withdraw(Number(amountInput.value))
	console.log(Number(amountInput.value))
	balance.innerText = `Balance: $${Number(RichAccount.balance)}`
}

