import React,{useState} from "react";
import AddDeedModal from "../Layout/AddDeedModal";
export default () => {
    const [toggleAddModal,setToggleAddModal]=useState(false);
  return <section className="deeds">
        <button onClick={()=>setToggleAddModal(true)}>Add deed</button>
        {toggleAddModal && <AddDeedModal onClose={setToggleAddModal}/>}
  </section>;
};
