/*setTimeout (() => {
console.log('data fetching..');
}, 2000);

console.log('data processing..');*/

function fetchData(callback){
    setTimeout(() => {
       console.log('data fetching..');
       callback(); 
    }, 2000);
}

function processData() {
    console.log('data processing..');
}

fetchData(processData);

function printOrders(orders, callback) {
    setTimeout (() =>{
        callback();
    }, 1000);
}

const printAll=() => {
    printOrder("1", ()=>{
        printOrder("2", ()=>{
            printOrder("3", ()=>{
                console.log("All orders printed!");
            })
        })
    })
}
//callback hell
printAll();