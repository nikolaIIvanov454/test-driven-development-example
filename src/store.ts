export default class Store{
    name: string
    budget: number
    inventory: string[]

    constructor(name:string, budget:number, inventory:string[]){
        this.name = name;
        this.budget = budget;
        this.inventory = inventory;
    }

    storeBuyProduct = (product:string, price:number) =>{
        this.budget -= price;
        this.inventory.push(product);
    }

    storeSellProduct = (product:string, price:number) =>{
        this.budget += price;

        this.inventory.forEach((item:string) => {
            if(item === product){
                this.inventory.splice(this.inventory.indexOf(product), 1);
            }
        });
    }

    printBudget = () =>{
        return 'The budget of the store is: ' + this.budget;
    }
}