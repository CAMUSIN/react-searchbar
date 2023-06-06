import { useState } from "react";
import SearchBar from "./components/searchBar";
import { styled } from "styled-components";

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: white;
  border: solid 1px #ccc;
  cursor: pointer;

  &hover{
    background-color: #efefef;
  }
`;

const people = [
  {
    id: "people-1",
    title: "Itzel Gomez Rivero"
  },
  {
    id: "people-2",
    title: "Daniela Gomez Rivero"
  },
  {
    id: "people-3",
    title: "Guadalupe Gomez Rivero"
  },
  {
    id: "people-4",
    title: "Nora Gomez Rivero"
  },
  {
    id: "people-5",
    title: "Maresi Moralez"
  },
  {
    id: "people-6",
    title: "Panfila Perez"
  },
];

const calendar = [
  {
    id: "calendar-1",
    title: "Cita Doctor"
  },
  {
    id: "calendar-2",
    title: "Trabajo Chido"
  },
  {
    id: "calendar-3",
    title: "Trabajo feo"
  },
  {
    id: "calendar-4",
    title: "Descanzar"
  },
  {
    id: "calendar-5",
    title: "Paseo"
  },
  {
    id: "calendar-6",
    title: "Panfila Perez"
  },
];

const emails = [
  {
    id: "email-1",
    title: "Cita Doctor"
  },
  {
    id: "email-2",
    title: "Trabajo Chido"
  },
  {
    id: "email-3",
    title: "Trabajo feo"
  },
  {
    id: "email-4",
    title: "Descanzar"
  },
  {
    id: "email-5",
    title: "Paseo"
  },
  {
    id: "email-6",
    title: "Panfila Perez"
  },
];

function App() {
  const [data, setData] = useState([...people, ...calendar, ...emails]);
  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState('all');

  function handleClick(e){
    const op = e.target.name;
  
    switch(op){
      case "all":
        setData([...people, ...calendar, ...emails]);
        setCurrentOption('all');
        break;
      case "people":
        setData([...people]);
        setCurrentOption('people');
        break;
      case "calendar":
        setData([...calendar]);
        setCurrentOption('calendar');
        break;
      case "emails":
        setData([...emails]);
        setCurrentOption('emails');
        break;
      default:
        setData([...people, ...calendar, ...emails]);
        setCurrentOption('all');
    }
  }

  function handleItemSelected(item){
    setSelection(item);
  }

  return (
    <div>
      <Button onClick={handleClick} name="all">All</Button>
      <Button onClick={handleClick} name="people">People</Button>
      <Button onClick={handleClick} name="calendar">Calendar</Button>
      <Button onClick={handleClick} name="emails">Emails</Button>
      {selection ? <div>You selected {selection.title}</div> : ''}
      <SearchBar items={data} onItemSelected={handleItemSelected} />
    </div>
  );
}

export default App;
