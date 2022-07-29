import { ACTION_TYPES } from "../../context/ActionTypes";

export default function selection(demoArr, dispatch, state, setPlay) {
  let collection = document.getElementsByClassName("scraper");
  let len = demoArr.length;

  for (let i = 0; i < len; i++) {
    setTimeout(() => {
      let smallest_index = i;

      for (let j = i; j < len; j++) {
        setTimeout(() => {
          collection[smallest_index].style.backgroundColor = "blue";

          if (j > i) {
            if (collection[j - 1].style.backgroundColor !== "blue") {
              collection[j - 1].style.backgroundColor = "pink";
            }
            collection[j].style.backgroundColor = "red";
          }

          if (demoArr[j] < demoArr[smallest_index]) {
            collection[smallest_index].style.backgroundColor = "pink";
            smallest_index = j;
            collection[smallest_index].style.backgroundColor = "blue";
          }
          // }, (j * state.speed * 20) / 10);
        }, j * state.speed * 2);
      }

      setTimeout(() => {
        let scapegoat = demoArr[i];
        demoArr[i] = demoArr[smallest_index];
        demoArr[smallest_index] = scapegoat;
        dispatch({ type: ACTION_TYPES.NUMBERS, payload: demoArr });
        collection[smallest_index].style.backgroundColor = "pink";
        collection[len - 1].style.backgroundColor = "pink";
        collection[i].style.backgroundColor = "blue";
      }, state.speed * len * 2);
    }, i * state.speed * len * 2);
  }

  setTimeout(() => {
    // collection[0].style.backgroundColor = "blue";
    for (let i = 0; i < len; i++) {
      setTimeout(() => {
        collection[i].style.backgroundColor = "green";
      }, (i * state.speed) / 2 + 500);
    }
    setTimeout(() => {
      setPlay((prev) => !prev);
    }, (len * state.speed) / 2 + 1000);
  }, len * len * state.speed * 2 + 1000);
}
