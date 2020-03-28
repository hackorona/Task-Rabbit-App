import React,{useState} from "react";
import axios from 'axios';
import { useDispatch} from "react-redux";
import  {login} from '../Store/actions/actionCreators';
export default props => {
  const dispatch = useDispatch();
  const { onClose } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const handleSubmit=async (e)=>{
      e.preventDefault();
      if(username&&password)
      {
        const credentials={username,password};
        const url='http://localhost:3001/user/login';
        try{
          const res=await axios.post(url,credentials);
          console.log('success login',res.data);
          dispatch(login(res.data));
          onClose(false);
        }catch(e){
          console.log('error in  login')
          //clear fields faild login
        }
      }
 
    }
  return (
    <section className="sign-in">
      <div className="u-modal-backdrop" onClick={() => onClose(false)}></div>
      <div className="sign-in__container">
        <h1 className="heading-sub"> Sign-in </h1>
        <form className="u-form"onSubmit={handleSubmit}>
        <label name="username">username</label>
        <input className="u-input-style" name="username" type="text" onChange={e=>setUsername(e.target.value)}/>
        <label name="password">password</label>
        <input className="u-input-style" type="text" name="password"  onChange={e=>setPassword(e.target.value)}/>
        <button>Go</button>
        </form>
      </div>
    </section>
  );
};
