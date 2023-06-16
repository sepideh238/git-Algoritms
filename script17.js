let x=Math.PI/6;
let n=10;
let sin=0;
let factor=1;
 for (let i=1;i<=n;i+=2){
                    for(let j=1;j<=i;j++){ 
                        for(k=1;k<=4;k++){
                            if(k % 2 === 0){
                                factor*=j;
                                let M=x**i;
                                let S=M/factor;
                                let T=-S;
                         sin+=T;
                            }
                        }
                        }
                        }      
console.log(sin);
