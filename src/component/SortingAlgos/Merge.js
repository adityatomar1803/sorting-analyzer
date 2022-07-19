import { ACTION_TYPES } from "../../context/ActionTypes";

function merge(arr, left, mid, right, dispatch) {
  let collection = document.getElementsByClassName("scraper");
  let leftSubArr = arr.slice(left, mid + 1);
  let rightSubArr = arr.slice(mid + 1, right + 1);

  let i = 0;
  let j = 0;
  let k = left;

  while (i < leftSubArr.length && j < rightSubArr.length) {
    // setTimeout(() => {
    if (leftSubArr[i] <= rightSubArr[j]) {
      arr[k] = leftSubArr[i];
      i++;
    } else {
      arr[k] = rightSubArr[j];
      j++;
      //   dispatch({ type: ACTION_TYPES.NUMBERS, payload: arr });
    }
    k++;
    // }, 2000);
  }
  while (i < leftSubArr.length) {
    arr[k] = leftSubArr[i];
    i++;
    k++;
    // dispatch({ type: ACTION_TYPES.NUMBERS, payload: arr });
  }

  while (j < rightSubArr.length) {
    arr[k] = rightSubArr[j];
    j++;
    k++;
    // dispatch({ type: ACTION_TYPES.NUMBERS, payload: arr });
  }
}
let des = 0;
// let img = 9;
function sort(arr, left, right, dispatch, timer) {
  let mid = parseInt((left + right) / 2);
  if (left >= right) return;
  sort(arr, left, mid);
  sort(arr, mid + 1, right);

  des++;
  setTimeout(() => {
    merge(arr, left, mid, right, dispatch);
    dispatch({ type: ACTION_TYPES.NUMBERS, payload: arr });
  }, des * 500);
}

export function merge_sort(demoArr, dispatch, state) {
  sort(demoArr, 0, demoArr.length - 1, dispatch);
}
