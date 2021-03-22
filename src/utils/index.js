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

const merge = (left, right) => {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return [ ...arr, ...left, ...right ];
}

export const mergeSort = async(list, setNumArr, speed, setOn, on, setIndex, sorted, setSorted) => {
    const half = list.length / 2;
    
    if(list.length < 2){
      return list; 
    }
    
    const left = list.splice(0, half);
    return merge(mergeSort(left),mergeSort(list))

  }



