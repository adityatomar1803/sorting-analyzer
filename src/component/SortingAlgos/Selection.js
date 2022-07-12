import { ACTION_TYPES } from "../../context/ActionTypes";

export default function selection(demoArr, dispatch, state) {
  console.log("inside selection", dispatch);

  let collection = document.getElementsByClassName("scraper");

  function calculateTimeout(len, i, j) {
    let wait;
    for (let k = 0; k <= i; k++) {
      wait += len;
      len -= 1;
    }
    return wait + j - i;
  }

  for (let i = 0; i < demoArr.length; i++) {
    setTimeout(() => {
      let smallest_index = i;
      for (let j = i; j < demoArr.length; j++) {
        setTimeout(() => {
          if (demoArr[j] < demoArr[smallest_index]) {
            smallest_index = j;
          }
          collection[smallest_index].style.backgroundColor = "blue";
          console.log(Date.now());
        }, (demoArr.length * i + j - 1) * state.speed);
      }

      let scapeGoat = demoArr[i];
      demoArr[i] = demoArr[smallest_index];
      demoArr[smallest_index] = scapeGoat;
      console.log("inside setTimeout");
      dispatch({ type: ACTION_TYPES.NUMBERS, payload: demoArr });
    }, (i + 1) * state.speed);
  }

  //   setTimeout(() => {
  //     console.log("the array after selection is", demoArr);
  //   }, (demoArr.length + 1) * state.speed + 1000);
}
