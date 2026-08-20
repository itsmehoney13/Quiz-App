import React from "react";
import ReactDOM from "react-dom/client";
// import Card from "./Card.jsx";
// import Sdata from "./Sdata.jsx";
// import "./Crd.css";
// import App from "./SlotApp.jsx";
// import "./Slot.css";
// import counterApp from "./Counter";
// import TimeApp from "./TimeOn";
// import "./Time.css";                   // this file use below 3 projects
// import EventApp from "./Events.jsx";
// import FormApp from "./Form";
// import LoginFormApp from "./LoginForm"
// import App from "./TodoApp";
// import "./TodoApp.css";
// import App from "./Inc_Dec";
// import "./Inc_Dec.css";
// import "./index.css";
// import App from "./App";
// import App from "./Accordion.jsx";
// import App from "./ComA";
// import App from "./UseEffect.jsx";
// import App from "./PokemonAPI";
// import App from "./ReactRouter";
import App from "./QuizApp";
import "./QuizApp.css";

// function ncard(val){     // function to return the Card component for each element in the Sdata array
//   return (
//     <Card 
//      imgsrc={val.imgsrc}     
//      sname={val.sname}
//      title={val.title}
//      link={val.link}
//     />
//   );
// }


const root = ReactDOM.createRoot(
  document.getElementById("root")
);


root.render(<App/>
  // <>
  //   <h1 className="heading__style">List of top 5 Netflix Series in 2026</h1>

  //    {Sdata.map((val) => {          // map function is used to iterate over the Sdata array and return a new array of Card components
  //      return (
  //        <Card                      // returning the Card component for each element in the Sdata array
  //          key={val.id}             // each chid in a list should have a unique "key" prop.
  //          imgsrc={val.imgsrc}     // passing the imgsrc prop to the Card component
  //          sname={val.sname}
  //          title={val.title}
  //          link={val.link}
  //        />
  //      );
  //    })}
  // </>
);




 
//   <>
//     <h1>React JSX Challenge.</h1>
//     <p>List of 5 Best Series.</p>
//     <ul>
//       <li>1. Harry Potter</li>
//       <li>2. Ouija</li>
//       <li>3. Jurassic Park</li>
//       <li>4. Pritam Pedro</li>
//       <li>5. Raakh</li>
//     </ul>
//   </>
// );



