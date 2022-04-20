// maximum of all

const maxm=(arg1,...args)=>{
    let max=arg1;
    for(let i=0;i<args.length;i++){
        if(args[i]>max){
            max=args[i];
        }
    }
return max;
}

const res=maxm(3,5,9,1);
console.log(res);


//using inbuilt method

const findMax=(...args)=>{
    let max=Math.max(...args)
    return max;
}
const res1=findMax(3,5);
console.log(res1);