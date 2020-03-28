import React,{useState} from "react";
import axios from 'axios';
import { useDispatch} from "react-redux";
import  {login} from '../Store/actions/actionCreators';
export default props => {
  const dispatch = useDispatch();
  const { onClose } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email,setEmail]=useState('');
  const [adress,setAdress]=useState('');
    const handleSubmit=async (e)=>{
      e.preventDefault();

      if(password===confirmPassword && username&& password&&email&&adress)
        {
          console.log('sending request');
          const user={username,password,email,adress};
          const url='http://localhost:3001/user/register';
          try{

            const res=await axios.post(url,user);
            console.log('success register',res.data);
            dispatch(login(res.data));
            onClose(false);
          }catch(e){
            console.log('error in  register')
          }
        }
        

    }
  return (
    <section className="join">
      <div className="u-modal-backdrop" onClick={() => onClose(false)}></div>
      <div className=".u-modal-container">
        <h1 className="heading-sub"> Sign-in </h1>
        <form  className="u-form" onSubmit={handleSubmit}>
        <label name="username">username</label>
        <input className="u-input-style" name="username" type="text" onChange={e=>setUsername(e.target.value)}/>
        <label name="password">password</label>
        <input className="u-input-style" type="password" name="password"  onChange={e=>setPassword(e.target.value)}/>
        <label name="confirm-password">Confirm password</label>
        <input className="u-input-style" type="password" name="confirm-password"  onChange={e=>setConfirmPassword(e.target.value)}/>
        <label name="email">Email</label>
        <input className="u-input-style" type="email" name="email"  onChange={e=>setEmail(e.target.value)}/>
        <label name="adress">adress</label>
        <input className="u-input-style" type="text" name="adress"  onChange={e=>setAdress(e.target.value)}/>
        <button type="submit">Go</button>
        </form>
      </div>
    </section>
  );
};
