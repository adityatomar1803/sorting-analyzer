import { ACTION_TYPES } from "../../context/ActionTypes";

export function quickSort(demoArr, dispatch, state, setPlay) {
  let delay = 0;
  let collection = document.getElementsByClassName("scraper");
  demoArr = [...demoArr, Infinity];
  let low = 0,
    // high = demoArr.length;
    high = demoArr.length - 1;
  quick(low, high);

  function partition(low, high) {
    let i = low,
      j = high;

    let pivot = demoArr[low];
    setTimeout(() => {
      collection[low].style.backgroundColor = "blue";
    }, ++delay * state.speed * 2);
    while (i < j) {
      do {
        i++;
        let f = i;
        setTimeout(() => {
          if (collection[f - 1].style.backgroundColor !== "blue") {
            collection[f - 1].style.backgroundColor = "pink";
          }
          if (collection[f].style.backgroundColor !== "orange") {
            collection[f].style.backgroundColor = "yellow";
          }
        }, ++delay * state.speed * 2);
      } while (demoArr[i] <= pivot);
      do {
        j--;
        let f = j;
        setTimeout(() => {
          if (collection[f + 1].style.backgroundColor === "red") {
            collection[f + 1].style.backgroundColor = "pink";
          }
          if (collection[f].style.backgroundColor !== "orange") {
            collection[f].style.backgroundColor = "red";
          }
        }, ++delay * state.speed * 2);
      } while (demoArr[j] > pivot);

      if (i < j) {
        let scapeGoat = demoArr[i];
        demoArr[i] = demoArr[j];
        demoArr[j] = scapeGoat;
        let f = i,
          k = j;

        let anotherDemoArr = demoArr.slice();

        setTimeout(() => {
          collection[f].style.backgroundColor = "pink";
          collection[k].style.backgroundColor = "pink";
          dispatch({
            type: ACTION_TYPES.NUMBERS,
            payload: anotherDemoArr.slice(0, -1),
          });
        }, ++delay * state.speed * 2);
      }
    }

    let scapeGoat = demoArr[low];
    demoArr[low] = demoArr[j];
    demoArr[j] = scapeGoat;
    let demo = demoArr.slice();
    setTimeout(() => {
      console.log("dispatched");
      dispatch({ type: ACTION_TYPES.NUMBERS, payload: demo.slice(0, -1) });
      collection[j].style.backgroundColor = "orange";
      if (collection[j + 1].style.backgroundColor !== "orange") {
        collection[j + 1].style.backgroundColor = "pink";
      }
    }, ++delay * state.speed * 2);
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
  }, ++delay * state.speed * 2);
}
