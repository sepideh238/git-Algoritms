let numbers=[12,27,6,39,10];
let Max=numbers[1];
numbers.map(el =>{
    if(el <Max){
        console.log('Max:',Max);
    }else if(el>Max){
        Max=el;
        console.log(el)
    }})
