import { ACTION_TYPES } from "../../context/ActionTypes";

export default function bubble(demoArr, dispatch, state, setPlay) {
  let collection = document.getElementsByClassName("scraper");
  for (let i = 0; i < demoArr.length - 1; i++) {
    setTimeout(() => {
      for (let j = 0; j < demoArr.length - i - 1; j++) {
        setTimeout(() => {
          collection[j].style.backgroundColor = "blue";

          setTimeout(() => {
            collection[j].style.backgroundColor = "pink";
            collection[j + 1].style.backgroundColor = "blue";
          }, state.speed);

          if (demoArr[j] > demoArr[j + 1]) {
            let a = demoArr[j];
            let b = demoArr[j + 1];

            demoArr[j] = b;
            demoArr[j + 1] = a;

            dispatch({ type: ACTION_TYPES.NUMBERS, payload: demoArr });
          }
        }, (i * demoArr.length + (j + 1)) * state.speed);
      }
    }, (i + 1) * state.speed);
  }

  setTimeout(() => {
    collection[0].style.backgroundColor = "blue";
    for (let i = 0; i < demoArr.length; i++) {
      setTimeout(() => {
        collection[i].style.backgroundColor = "green";
      }, (i * state.speed) / 2 + 500);
    }
    setTimeout(() => {
      setPlay((prev) => !prev);
    }, (demoArr.length * state.speed) / 2 + 1000);
  }, demoArr.length * demoArr.length * state.speed);
}
