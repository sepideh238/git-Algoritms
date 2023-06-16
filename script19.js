const numbers=[45000, 70000,120000];
numbers.map(el =>{
    let add=0;
    if(el <= 50000){
        add+=0;
        console.log(el, add);
    }else if(el > 50000 && el <= 100000){
      let M=el-50000; 
        add+= M * .10;
        console.log(el, add);
    }else if(el >100000){
        let M=el-100000; 
        add+= M * .15;
        console.log(el, add);
    }
})
