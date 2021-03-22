export const randomArrCreate = () => {
    let randomArr = [];

    while(randomArr.length < 60){
        let randNum = (Math.floor(Math.random() * 99)) + 1;
        !randomArr.includes(randNum) && randomArr.push(randNum);
    }
    return randomArr;
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

export const insertionSort = async(list, setNumArr, speed, setOn, on) => {
    setOn(!on)

    let len = list.length;

    for(let i = 1; i < len +1; i++){

        for(let j = i; j > 0; j--){
            if(list[j] < list[j-1]){
                let temp = list[j - 1];
                list[j-1] = list[j];
                list[j] = temp;
                await sleep(6000 / ((speed + 1) * 2));
                setNumArr([...list]);
            }
        }    
    }
    setOn(on)


}
export const bubbleSort = async(list, setNumArr, speed, setOn, on) => {
    setOn(!on)
    for(let j =0; j < list.length ; j++){
        for(let i = 0; i < list.length ; i++){
            if(list[i] > list[i+1]){
                let small = list[i+1];
                let big = list[i];
                list[i+1] = big;
                list[i] = small;
            }
            setNumArr([...list]);
            await sleep(speed * 3);
        }
    }
    setOn(on)
}

export const selectionSort = async(list, setNumArr, speed, setOn, on) => {
    let len = list.length;
    setOn(!on)

    for(let i = 0; i < len; i++){
        for(let j = i; j < len; j++){
            if(list[i] > list[j]){
                let temp = list[i];
                list[i] = list[j];
                list[j] = temp;
                await sleep(speed * 3);
                setNumArr([...list]);
            }
        }
    }
    setOn(on)
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

export const mergeSort = async(list, setNumArr) => {
    const half = list.length / 2;
    
    if(list.length < 2){
      return list; 
    }
    
    const left = list.splice(0, half);
    return merge(mergeSort(left),mergeSort(list))

  }



