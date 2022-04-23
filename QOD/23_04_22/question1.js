const findOutput=(num)=>{

    return {
        'perimeter':4*num,
        'area':num*num,
        'surfaceArea':6*num*num,
        'Volume':num*num*num

    }
}



const res=findOutput(4);
console.log(res);