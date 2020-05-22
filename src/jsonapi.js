import React, { useState } from "react";

function JsonAPI() {
  const [joke, setJoke] = useState();

  const onTellJoke = () => {
    fetch("https://icanhazdadjoke.com", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(responseFromAPI => responseFromAPI.json())
      //take response, format into JSON
      .then(dataFromResponse => {
        setJoke(dataFromResponse.joke);
        console.log(dataFromResponse.joke);
        //take JSON data, console log the joke
      });
  };
  return (
    <div>
      <p>{joke}</p>
      <button onClick={onTellJoke}>Tell me a joke</button>
    </div>
  );
}
export default JsonAPI;

// Example of useState Hooks
// function JsonAPI() {
//   const [count, setCount] = useState(0);
//   const addButton  = () => {
//     setCount(count + 1);
//     console.log({count});
//   }
//   return (
//     <div>
//       <p> You clicked {count} times</p>
//       <button onClick={() => addButton()}>Click</button>
//     </div>
//   );
// }
//  export default JsonAPI;

// class JsonAPI extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       joke: null
//     };
//     this.onTellJoke = this.onTellJoke.bind(this);
//   }

//   onTellJoke() {
//     fetch("https://icanhazdadjoke.com/", {
//       method: "GET",
//       headers: {
//         Accept: "application/json"
//       }
//     })
//       .then(response => response.json())
//       .then(json => {
//         this.setState({ joke: json.joke });
//       });
//   }

//   render() {
//     console.log("RENDER");

//     return (
//       <div>
//         <button onClick={this.onTellJoke}>Tell me a joke</button>
//         <p>{this.state.joke}</p>
//       </div>
//     );
//   }
// }
// export default JsonAPI;

// function JsonAPI() {
//   const onTellJoke = () => {
//     fetch("https://icanhazdadjoke.com", {
//       method: "GET",
//       headers: {
//         Accept: "application/json"
//       }
//     })
//       .then(responseFromAPI => responseFromAPI.json())
//         //take response, format into JSON
//       .then(dataFromResponse => console.log(dataFromResponse.joke));
//         //take JSON data, console log the joke
//   };
//   return <button onClick={onTellJoke}>Tell me a joke</button>;
// }
