import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './Categories';

/*
https://jsonplaceholder.typicode.com/todos/1
*/
function App() {
  // const [data, setData] = useState("안녕하세요");

  // const onClick = async () => {
  //   //서버에 자료를 얻어 설정하면 됨
  //   // const response = await fetch(
  //   //   "https://jsonplaceholder.typicode.com/todos/1"
  //   // );
  //   // const jsonData = await response.json();
  //   // setData(JSON.stringify(jsonData));

  //   try {
  //     const response = await axios.get(
  //       "https://newsapi.org/v2/top-headlines?country=kr&apiKey=ae3df86896064a709c97f5898afccbc5"
  //     );
  //     setData(JSON.stringify(response.data));
  //   } catch (e) {
  //     console.log(e);
  //   }

  //   // fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   //   .then(response => {
  //   //     console.log(response);
  //   //     if (response.status === 200) {
  //   //       return response.json();
  //   //     } else {
  //   //       throw new Error("Something went wrong on api server!");
  //   //     }
  //   //   })
  //   //   .then(response => {
  //   //     setData(JSON.stringify(response));
  //   //     console.log("응답자료 문자열 -> ", JSON.stringify(response));
  //   //   })
  //   //   .catch(error => {
  //   //     console.error(error);
  //   //   });
  // };

  return (
    <div>
      <Categories />
      <NewsList />
    </div>
  );
}

export default App;
