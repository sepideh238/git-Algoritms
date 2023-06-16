const numbers=[24000, 28000, 35000, 50000];
numbers.map(el =>{
    let add=0;
    let final=0;
    if(el <= 25000){
        add+= el * .05;
        final = el+add;
        console.log(el, add,final)
    }else if(el > 25000 && el <= 35000){
        add+= el * .07;
        final = el+add;
        console.log(el, add, final)
    }else if(el >35000){
        add+= el * .10;
        final = el+add;
        console.log(el, add, final)
    }
})