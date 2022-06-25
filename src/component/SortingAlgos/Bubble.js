export default function bubble(demoArr, setDemoArr) {
  console.log("inside bubble");
  for (let i = 0; i < demoArr.length - 1; i++) {
    for (let j = 0; j < demoArr.length - i - 1; j++) {
      if (demoArr[j].props.style.height > demoArr[j + 1].props.style.height) {
        let a = demoArr[j];
        let b = demoArr[j + 1];

        demoArr[j] = b;
        demoArr[j + 1] = a;
        let curr_miliseconds = Date.now();

        while (Date.now() - curr_miliseconds < 500) {}
        setDemoArr(demoArr);
      }
    }
  }
}
