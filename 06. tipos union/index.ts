// 1. crear union de tipos 

function printId( id: string | number ):void{
    console.log(`Tu id es: ${id}`);
}

printId('2324');
printId(3434);
printId(false);

// 2. métodos específicos a tipos de datos

function getBudget(obj: {budget: string | number}):string{
    if(typeof obj.budget === 'string'){
        return obj.budget;
    }else{
        return `$${obj.budget}`;
    }
}

console.log(getBudget({budget: '$500,000'}));
console.log(getBudget({budget: 340_000}));


// 3. propiedades compartidas
function countPeople(people:string | string[]){
    return people.length;
}

console.log(countPeople(['Luis', 'Maria', 'Toño']));
console.log(countPeople('José'));

