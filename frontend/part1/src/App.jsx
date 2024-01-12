import { useState, useEffect } from "react";
import Note from "./components/Note";
import "./App.css";
// import axios from "axios";
import noteService from "./services/notes";
// import Course from "./components/Course"

// const App = () => {
//    const courses = [
//    {
//     name: 'Half Stack application development',
//     id: 1,
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10,
//         id: 1
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7,
//         id: 2
//       },
//       {
//         name: 'State of a component',
//         exercises: 14,
//         id: 3
//       },
//       {
//           name: 'Redux',
//           exercises: 11,
//           id: 4
//         }
//     ]
//   },
//    {
//       name: 'Node.js',
//       id: 2,
//       parts: [
//         {
//           name: 'Routing',
//           exercises: 3,
//           id: 1
//         },
//         {
//           name: 'Middlewares',
//           exercises: 7,
//           id: 2
//         }
//       ]
//     }
//   ]

//   return <Course course={courses}/>
// }

/**  USING STATES  */
// const Display = ({counter}) => {
//   return (
//     <div>
//       {counter}
//     </div>
//   )
// }

// const Button = ({ onClick, text }) => {
//   return(
//     <button onClick={onClick}>
//         {text}
//       </button>
//   )
// }

// const App = () => {

//  const [counter, setCounter] = useState(0)
//  console.log('rendering with counter value', counter)

// const increaseByOne = () => setCounter(counter + 1)
// console.log('increasing, value before', counter)

// const decreaseByOne = () => setCounter(counter - 1)
// console.log('decreasing, value before', counter)

// const setToZero = () => setCounter(0)
// console.log('resetting to zero, value before', counter)

//   return(
//     <div>
//       <Display counter={counter}/>
//       <Button onClick={increaseByOne} text='plus' />
//       <Button onClick={setToZero} text='zero' />
//       <Button onClick={decreaseByOne} text='minus' />

//     </div>
//   )
// }

// HANDLING MULTIPLE STATES
// const App = () => {
//  const [clicks, setClicks] = useState({
//     left: 0, right: 0
//  })

//  const handleLeftClicks = () => {
//      setClicks({ ...clicks, left: clicks.left + 1,})
//  }

//  const handleRightClicks = () => {
//   setClicks({...clicks,right: clicks.right + 1})
//  }

//   return(
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClicks}> left</button>
//       <button onClick={handleRightClicks}> right</button>
//       {clicks.right}
//     </div>
//   )
// }

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

//   return (
//     <div>
//       {left}
//       <button onClick={() => setLeft(left+1)}>left</button>
//       <button onClick={() => setRight(right+1)}>right</button>
//       {right}
//     </div>
//   )
// }

// const App = () => {
//  const [left, setLeft] = useState(0)
//  const [right, setRight] = useState(0)
//  const [allClicks, setAll] = useState([])
//  const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left + 1
//     console.log('left before', left)
//     setLeft(updatedLeft)
//     console.log('left after', left)
//     setTotal(updatedLeft + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updatedRight = right + 1
//     console.log('right before', right)
//     setRight(updatedRight)
//      console.log('right after', right)
//     setTotal(left + updatedRight)
//   }

//   const History = (props) => {
//     if(props.allClicks.length === 0){
//       return (
//         <div>
//           <p>The app is used by pressing the buttons</p>
//         </div>
//       )
//     }
//     return (
//       <div>
//         <p>Button press history: {props.allClicks.join(' ')}</p>
//       </div>
//     )
//   }

//   const Button = ({handleClick, text}) => {
//     return (
//        <button onClick={handleClick}>
//         {text}
//       </button>
//     )
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks} />
//       <p>Total clicks: {total}</p>
//     </div>
//   )
// }

// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = (newValue) => {
//     console.log('value now', newValue)
//     setValue(newValue)
//   }

//   return (
//     <div>
//       {value}
//       <button onClick={() => setToValue(1000)}>
//         thousand
//       </button>
//       <button onClick={() => setToValue(0)}>
//         reset
//       </button>
//       <button onClick={() => setToValue(value + 1)}>
//         increment
//       </button>
//     </div>
//   )
// }

// UNICAFE FEEDBACK START HERE

// const Statistics = ({good, neutral, bad, total}) => {
//   if(good || neutral || bad){
//     return(
//        <div>
//       <h2>statistics</h2>
//       <p>good {good}</p>
//       <p>neutral {neutral}</p>
//       <p>bad {bad}</p>
//       <p>total {total}</p>
//       <p>average {(good+bad+neutral)/3}</p>
//     </div>
//     )
//   }
//   return (
//    <div>
//         <h2>statistics</h2>
//         <p>No feedback has been given</p>
//       </div>
//   )
// }

// const Button = ({handleClick, text}) => {
//   return (
//     <button onClick={handleClick}>{text}</button>
//   )
// }

// const App = () => {

//   const feedback = 'Give Feedback'

//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const [total, setTotal] = useState(0)

//   const handleClickGood = () => {
//     const updatedGood = good + 1
//     setGood(updatedGood)
//     setTotal(updatedGood + neutral + bad)

//   }

//    const handleClickNeutral = () => {
//     const updatedNeutral = neutral + 1
//     setNeutral(updatedNeutral)
//     setTotal(updatedNeutral + good + bad)
//   }

//   const handleClickBad = () => {
//     const updatedBad = bad + 1
//     setBad(updatedBad)
//     setTotal(updatedBad + neutral + good)
//   }

//   return (
//     <div>
//       <h2>{feedback}</h2>
//       <Button handleClick={handleClickGood} text='good' />
//       <Button handleClick={handleClickNeutral} text='neutral' />
//       <Button handleClick={handleClickBad} text='bad' />
//       <Statistics good={good} neutral={neutral} bad={bad} total={total}/>

//     </div>
//   )
// }

// UNICAFE FEEDBACK END HERE

// NOTE APP STARTS HERE
//_____________________________________________

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState(" ");
  const [showAll, setShowAll] = useState(true);

  const toggleImportanceOf = (id) => {
    // const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        alert(`the note '${note.content}' was already deleted from server`);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  console.log("render", notes.length, "notes");

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  console.log(notesToShow);

  const addNote = (event) => {
    event.preventDefault(); // prevents default submission of form
    const noteObject = {
      content: newNote,
      important: Math.random < 0.5,
    };

    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });

    // setNotes(notes.concat(noteObject))
    // setNewNote('')
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportanceOf={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
