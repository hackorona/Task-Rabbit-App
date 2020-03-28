import React, { useState } from "react";
import axios from 'axios';
export default props => {
  const { onClose } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [radius, setRadius] = useState("");
  const [timeRange, setTimeRange] = useState("");
  const [status,setStatus]=useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    if(title&& description && location &&radius && timeRange&& status!=="select"&& status)
    {

        console.log(title,description,location,radius, timeRange,status )
        const userId='das123';
        const reqData={userId,title,description,location,radius, timeRange,status}
        const url='http://localhost:3001/deeds/addDeed';
        try{
          const res=await axios.post(url,reqData);
          console.log('success login',res.data);
          onClose(false);
        }catch(e){
          console.log('error in  login')
          //clear fields faild login
        }
    }
  };
  return (
    <section className="add-deed">
      <div className="u-modal-backdrop" onClick={() => onClose(false)}></div>
      <div className="u-modal-container">
        <h1> add help</h1>
        <form className="u-form" onSubmit={handleSubmit}>
            <label>What do you want?</label>
            <select onChange={e=>setStatus(e.target.value)}>
                <option value="select">Select option</option>
                <option value="1">Help</option>
                <option value="2">Be helped</option>
            </select>
          <label name="title">title</label>
          <input
            className="u-input-style"
            name="title"
            type="text"
            onChange={e => setTitle(e.target.value)}
          />
          <label name="description">description</label>
          <input
            className="u-input-style"
            name="description"
            type="text"
            onChange={e => setDescription(e.target.value)}
          />
          <label name="location"> location</label>
          <input
            className="u-input-style"
            name="location"
            type="text"
            onChange={e => setLocation(e.target.value)}
          />
          <label name="radius"> radius</label>
          <input
            className="u-input-style"
            name="radius"
            type="text"
            onChange={e => setRadius(e.target.value)}
          />
          <label name="time-range"> time-range</label>
          <input
            className="u-input-style"
            name="time-range"
            type="text"
            onChange={e => setTimeRange(e.target.value)}
          />
          <button type="submit">send</button>
        </form>
      </div>
    </section>
  );
};
