export const randomArrCreate = (width) => {
    let randomArr = [];
    let length;
    let range;
    if(width < 800){
        length = 20
    } else {length = 50}

    if(length == 20){
        range = 50;
    } else {
        range = 100
    }
    while(randomArr.length < length){
        let randNum = (Math.floor(Math.random() * range)) + 1;
        !randomArr.includes(randNum) && randomArr.push(randNum);
    }
    return randomArr;
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

export const insertionSort = async(list, setNumArr, speed, setOn, on, setIndex, sorted, setSorted) => {
    setOn(!on)

    let len = list.length;

    for(let i = 1; i < len +1; i++){

        for(let j = i; j > 0; j--){
            if(list[j] < list[j-1]){
                setIndex(j)
                let temp = list[j - 1];
                list[j-1] = list[j];
                list[j] = temp;
                await sleep(6000 / ((speed + j + 1) * 2));
                setNumArr([...list]);
            }
        }    
    }
    setOn(on)
    setSorted(!sorted)
}
export const bubbleSort = async(list, setNumArr, speed, setOn, on, setIndex, sorted, setSorted) => {
    setOn(!on)
    for(let j =0; j < list.length ; j++){

        for(let i = 0; i < list.length ; i++){
            if(list[i] > list[i+1]){
                let small = list[i+1];
                let big = list[i];
                list[i+1] = big;
                list[i] = small;
                setIndex(i +1);
                setNumArr([...list]);
                await sleep(6000 / ((speed + ((1/i) * 7) + 1) * 2));
            } 

        }
    }
    setOn(on)
    setSorted(!sorted)
}

export const selectionSort = async(list, setNumArr, speed, setOn, on, setIndex, sorted, setSorted) => {
    let len = list.length;
    setOn(!on)

    for(let i = 0; i < len; i++){
        for(let j = i; j < len; j++){
            if(list[i] > list[j]){
                setIndex(j);
                let temp = list[i];
                list[i] = list[j];
                list[j] = temp;
                await sleep(6000 / ((speed + j + 1) * 2));
                setNumArr([...list]);
            }
        }
    }
    setOn(on)
    setSorted(!sorted)
}


const merge = async(left,right, arr2, setNumArr) => {
    let index = arr2.indexOf((left.concat(right))[0]);
    let sorted = [];

    while(left.length  && right.length){
        if(left[0] < right[0]){
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }
    let len = sorted.concat(left.concat(right)).length;
    arr2.splice(index, len)
    let temp = sorted.concat(left.concat(right))
    for(let i = temp.length - 1 ; i >= 0 ; i--){
        arr2.splice(index , 0,temp[i] )
    }
    await sleep(100)
    setNumArr([...arr2])
    return sorted.concat(left.concat(right))
}
export const mergeSort = async(arr, arr2, setNumArr, setOn, on, setIndex, sorted, setSorted) => {

    if(arr.length < 2){ 
        return arr;
    }
    let left = arr.splice(0, arr.length/2);
    let right = arr; 

    return await merge(await mergeSort(left, arr2, setNumArr), await mergeSort(right, arr2, setNumArr), arr2,setNumArr)

}


