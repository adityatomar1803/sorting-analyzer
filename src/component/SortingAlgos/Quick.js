import { ACTION_TYPES } from "../../context/ActionTypes";

export function quickSort(demoArr, dispatch, state, setPlay) {
  let delay = 0;
  let collection = document.getElementsByClassName("scraper");
  demoArr = [...demoArr, Infinity];
  let low = 0,
    high = demoArr.length - 1;
  quick(low, high);

  function partition(low, high) {
    let i = low,
      j = high;

    let pivot = demoArr[low];
    // collection[low].style.backgroundColor = "blue";

    while (i < j) {
      do {
        // setTimeout(() => {
        // collection[i - 1].style.backgroundColor = "pink";
        // collection[i].style.backgroundColor = "yellow";
        i++;
        // }, ++delay * state.speed * 4);
      } while (demoArr[i] <= pivot);
      do {
        // setTimeout(() => {
        // collection[j - 1].style.backgroundColor = "pink";
        // collection.style.backgroundColor = "red";
        j--;
        // }, ++delay * state.speed * 4);
      } while (demoArr[j] > pivot);

      // setTimeout(() => {
      if (i < j) {
        let scapeGoat = demoArr[i];
        demoArr[i] = demoArr[j];
        demoArr[j] = scapeGoat;
      }
      // }, ++delay * state.speed * 4);
    }

    let demo;
    // setTimeout(() => {
    let scapeGoat = demoArr[low];
    demoArr[low] = demoArr[j];
    demoArr[j] = scapeGoat;
    demo = demoArr.slice();
    // }, ++delay * state.speed * 4);
    setTimeout(() => {
      console.log("dispatched");
      dispatch({ type: ACTION_TYPES.NUMBERS, payload: demo.slice(0, -1) });
      collection[j].style.backgroundColor = "blue";
    }, ++delay * state.speed * 4);
    return j;
  }

  function quick(low, high) {
    if (low < high) {
      let j = partition(low, high);
      quick(low, j);
      quick(j + 1, high);
    }
  }

  setTimeout(() => {
    console.log("largest ran");
    for (let k = 0; k < collection.length; k++) {
      setTimeout(() => {
        collection[k].style.backgroundColor = "green";
      }, (k * state.speed) / 2);
    }
  }, ++delay * state.speed * 4);
}
