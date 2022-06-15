import React from "react";

const Bubble = ({}) => {
  return <div>Bubble</div>;
};

export default Bubble;

// export default async function bubble(finalBar, setFinalBar) {

//   console.log("the final bar in bubble is ", finalBar);

//   for (var i = 0; i < finalBar.length - 1; i++) {
//     for (var j = 0; j < finalBar.length - i - 1; j++) {
//       if (finalBar[j].props.style.height > finalBar[j + 1].props.style.height) {
//         var a = finalBar[j];
//         var b = finalBar[j + 1];

//         setFinalBar((prev) => {
//           prev[j] = b;
//           prev[j + 1] = a;
//         });
//         console.log("the finalBar inside bubble is ", finalBar);
//         break;
//         // finalBar[j] = b;
//         // finalBar[j + 1] = a;
//       }
//     }
//   }
// }
