import './App.css';
import Card from './Components/Card';
import axios from "axios";
import { useState,  useEffect } from "react";

const ApiUrl = 'https://randomuser.me/api/?results=20'

function App() {
  const [User, setUser] = useState([]);

  const AllData = async() =>{
    try {
      const dataApp = await axios.get(ApiUrl);
      setUser(dataApp.data.results);
      console.log(dataApp.data.results);
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
   AllData()
  }, []);

  return (
    <div className="conteiner p-3">
    <h2>User Details</h2>
    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, autem magnam recusandae soluta dicta voluptates ullam reprehenderit minima consectetur alias. Sapiente voluptatum, fugiat velit facere officiis magni vero, minima mollitia nostrum veritatis repellat dicta! Aliquam perspiciatis porro iure possimus tenetur quas eos quaerat ea. Inventore, nam ex ad quibusdam alias exercitationem excepturi iusto neque ut molestias consequuntur delectus asperiores rerum ea autem, necessitatibus eveniet distinctio quasi impedit illum? Consectetur accusantium sequi impedit culpa numquam. Quos excepturi consequatur rerum alias, quisquam deserunt praesentium? Totam voluptas, reprehenderit architecto voluptatum praesentium veniam, odit libero voluptate qui delectus nulla, explicabo doloremque fugit minima perspiciatis?</p>
    <div>
      <label>All</label>
      <input type="radio" name='gender' className='mx-3' defaultChecked/>
      <label>Male</label>
      <input type="radio" name='gender' className='mx-3'/>
      <label>Female</label>
      <input type="radio" name='gender' className='mx-3'/>
    </div>
    <Card userData={User} />
    </div>
  );
}

export default App;
