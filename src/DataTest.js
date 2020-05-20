import React from "react";

//Data to iterate through
const grouplistz1 = [
  {
    name: "Person 1",
    spiritAnimal: "Kiwi"
  },
  {
    name: "Person 2",
    spiritAnimal: "Penguin"
  },
  {
    name: "Person 3",
    spiritAnimal: "Otter"
  },
  {
    name: "Person 4",
    spiritAnimal: "Bunny"
  }
];

const Group = () => {
  return (
    <div>
      <Person individualDataz2={grouplistz1} />
    </div>
  );
};

// class Group extends React.Component {
//   render() {
//     return (
//       <div>
//         <Person individualDataz2={grouplistz1} />
//       </div>
//     );
//   }
// }

const Person = props => {
  const rows = props.individualDataz2.map((row, index) => {
    return (
      <div key={index}>
        <span>{row.name}: </span>
        <span>{row.spiritAnimal}</span>
      </div>
    );
  });

  return <div>{rows}</div>;
};

export default Group;

// export default function Names() {

// }
