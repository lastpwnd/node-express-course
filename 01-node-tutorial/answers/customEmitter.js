const EventEmitter = require("events")

// const customEmitter = new EventEmitter() 
// setInterval(() => {  
//   customEmitter.emit("timer", "hi there")  
// }, 2000)
// customEmitter.on("timer", (msg) => console.log(msg)) 

const emitter = new EventEmitter();  
const waitForEvent = () => {  
  return new Promise((resolve) => {  
    emitter.on("happens", (msg) => resolve(msg));  
  });  
};  
const doWait = async () => {  
  const msg = await waitForEvent();  
  console.log("We got an event! Here it is: ", msg);  
};  
doWait();  
emitter.emit("happens", "Hello World!");  