import { useState } from "react";

const Anecdote = ({ title, text }) => (
  <div>
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
);

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Vote = ({ votes }) => <p>has {votes} votes</p>;

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length));

  const getRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const vote = () => {
    const pointsCopy = [...points];
    pointsCopy[selected] += 1;
    setPoints(pointsCopy);
  };

  const maxVotesIndex = () => {
    let maxVal = -Infinity;
    let index;
    for (let i = 0; i < points.length; i++) {
      if (points[i] > maxVal) {
        maxVal = points[i];
        index = i;
      }
    }
    return index;
  };

  return (
    <div>
      <Anecdote title="Anecdote of the day" text={anecdotes[selected]} />
      <Vote votes={points[selected]} />
      <Button onClick={vote} text="vote" />
      <Button onClick={getRandomAnecdote} text="next anecdote" />
      <Anecdote
        title="Anecdote with most votes"
        text={anecdotes[maxVotesIndex()]}
      />
    </div>
  );
};

export default App;
