function reverse(num,array){
    let newArray=[]

    for (let i=0; i<num; i++) {
        newArray.push(array[i]+" ");
    }
    let revArray=newArray.reverse();
    console.log(revArray);

}
reverse(3, [10, 20, 30, 40, 50] )