import { ACTION_TYPES } from "../../context/ActionTypes";

export default function selection(demoArr, dispatch, state, setPlay) {
  let collection = document.getElementsByClassName("scraper");
  let len = demoArr.length;

  // for (let i = 0; i < len; i++) {
  //   setTimeout(() => {
  //     let smallest_index = i;

  //     for (let j = i; j < len; j++) {
  //       setTimeout(() => {
  //         collection[smallest_index].style.backgroundColor = "blue";

  //         if (j > i) {
  //           if (collection[j - 1].style.backgroundColor !== "blue") {
  //             collection[j - 1].style.backgroundColor = "pink";
  //           }
  //           collection[j].style.backgroundColor = "red";
  //         }

  //         if (demoArr[j] < demoArr[smallest_index]) {
  //           collection[smallest_index].style.backgroundColor = "pink";
  //           smallest_index = j;
  //           collection[smallest_index].style.backgroundColor = "blue";
  //         }
  //         // }, (j * state.speed * 20) / 10);
  //       }, j * state.speed * 2);
  //     }

  //     setTimeout(() => {
  //       let scapegoat = demoArr[i];
  //       demoArr[i] = demoArr[smallest_index];
  //       demoArr[smallest_index] = scapegoat;
  //       dispatch({ type: ACTION_TYPES.NUMBERS, payload: demoArr });
  //       collection[smallest_index].style.backgroundColor = "pink";
  //       collection[len - 1].style.backgroundColor = "pink";
  //       collection[i].style.backgroundColor = "orange";
  //     }, state.speed * len * 2);
  //   }, i * state.speed * len * 2);
  // }

  // ---different code begins---
  let delay = 0;
  for (let i = 0; i < len; i++) {
    let smallest = i;

    // ---small for creation of regular elements' background ---
    let small = smallest;

    setTimeout(() => {
      console.log(small);
      collection[small].style.backgroundColor = "blue";
    }, ++delay * state.speed * 4);

    for (let j = i + 1; j < len; j++) {
      let innerSmall = small;
      setTimeout(() => {
        console.log(innerSmall);
        if (collection[j - 1].style.backgroundColor !== "blue") {
          collection[j - 1].style.backgroundColor = "pink";
        }
        collection[j].style.backgroundColor = "red";
      }, ++delay * state.speed * 4);

      if (demoArr[j] < demoArr[smallest]) {
        let prevSmall = smallest;
        smallest = j;
        let innerSmall = smallest;

        setTimeout(() => {
          collection[prevSmall].style.backgroundColor = "pink";
          collection[innerSmall].style.backgroundColor = "blue";
        }, ++delay * state.speed * 4);
      }
    }

    let demo = demoArr[i];
    demoArr[i] = demoArr[smallest];
    demoArr[smallest] = demo;

    let tempArr = [...demoArr];

    setTimeout(() => {
      collection[i].style.backgroundColor = "orange";
      collection[smallest].style.backgroundColor = "pink";
      if (i < len - 1) {
        collection[len - 1].style.backgroundColor = "pink";
      }
      dispatch({ type: ACTION_TYPES.NUMBERS, payload: tempArr });
    }, ++delay * state.speed * 4);
  }
  // --- different code ends ---

  // setTimeout(() => {
  //   for (let i = 0; i < len; i++) {
  //     setTimeout(() => {
  //       collection[i].style.backgroundColor = "green";
  //     }, (i * state.speed) / 2 + 500);
  //   }
  //   setTimeout(() => {
  //     setPlay((prev) => !prev);
  //   }, (len * state.speed) / 2 + 1000);
  // }, len * len * state.speed * 2 + 1000);
}
