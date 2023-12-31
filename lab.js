//Hamster

class Hamster{
    constructor(name){
        this.name = name
        this.owner = ''
        price = 15
    }

    wheelRun(){
        console.log("squeak squeak")
    }

    eatFood(){
        console.log("nibble nibble")
    }

    getPrice(){
        return this.price
    }
}

//person

class Person{
    constructor(name){
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }

    getName(){
        return this.name
    }

    getAge(){
        return this.age
    }

    getWeight(){
        return this.weight
    }

    greet(greeting){
        console.log(`${this.name} says ${greeting}`)
    }

    eat(){
        this.weight++
        this.mood++
    }

    exercise(){
        this.weight--
    }

    ageUp(){
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount+=10
    }

    buyHamster(hamster){
        this.hamsters.push(hamster)
        this.mood+=10
        // this.bankAccount-=getPrice()
        this.bankAccount-=hamster.getPrice()
    }
}