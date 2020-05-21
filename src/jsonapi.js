import React from "react";

function JsonAPI() {
  const onTellJoke = () => {
    fetch("https://icanhazdadjoke.com", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(responseFromAPI => responseFromAPI.json()) //take response, format into JSON
      .then(dataFromResponse => console.log(dataFromResponse.joke)); //take JSON data, console log the joke
  };
  return <button onClick={onTellJoke}>Tell me a joke</button>;
}
export default JsonAPI;
