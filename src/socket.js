import { io } from "socket.io-client";
// import Selector from "./x-data-spreadsheet/src/component/selector";
// import DataProxy from "./x-data-spreadsheet/src/core/data_proxy";

// const serverURl = "http://localhost:3054";
const serverURl = "http://172.104.174.187:3054";
const socket = io(serverURl);

//Event emitters.

export const emitData = (data) => {
    // console.log(data)
  socket.emit("data-logs", data);
};

export const emitAnalysis = (data) => {
    // console.log(data)
  socket.emit("analysis", data);
};

socket.on("data-logs",(d) => {
    console.log(d);
    // console.log(el);
    // const newDiv = document.createElement('div');
    // newDiv.innerHTML = d;    
    const myDiv = document.getElementById("data").innerHTML
    document.getElementById("data").innerHTML = myDiv + d;
  })

socket.on("analysis",(d) => {
    console.log(d);
    // console.log(el);
    // const newDiv = document.createElement('div');
    // newDiv.innerHTML = d;
    // const myDiv = document.getElementById("result").
    // document.getElementById("data").innerHTML = myDiv + d;

  })

// export const listenerData = () => {
//     socket.on("data-logs",(d) => {
//       console.log("res: ", d);
//     })
//   }

