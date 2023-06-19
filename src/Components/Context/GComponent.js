import React, { useContext } from "react";
import context from "./Context";

function GComponent(props) {
  const value = useContext(context);
  return (
    <>
      <h1>From Component G</h1>
      <h2> {value.userName} </h2>
    </>
  );
}
//   return (
//     <context.Consumer>
//       {(value) => {
//         return (
//           <>
//             <h1>From Component G</h1>
//             <h2> {value.userName} </h2>
//           </>
//         );
//       }}
//     </context.Consumer>
//);
//}

export default GComponent;
