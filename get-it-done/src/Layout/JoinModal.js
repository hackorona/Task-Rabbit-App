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
  const [phone,setPhone]=useState('');
  const [city,setCity]=useState('');
    const handleSubmit=async (e)=>{
      e.preventDefault();

      if(password===confirmPassword && username&& password&&phone&&city)
        {
         
          const user={username,password,phone,city};
          const url='http://localhost:3001/user/register';
          try{

            const res=await axios.post(url,user);
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
      <div className="u-modal-container">
        <div className="join__wrapper">

        <h1 className="join__title t-sub-header"> Sign-up! </h1>
        <div className="join__logo">
          <img src="https://res.cloudinary.com/thelegend27/image/upload/v1585391297/img/logo_d6ciuu.png"/>
        </div>
        <div className="join__input-wrapper">

        <p className="join__sub-title">Welcome to Deeds! were excited for
to join the community</p>
        <form  className="u-form" onSubmit={handleSubmit}>
        <input placeholder="Full Name"className="u-input-style" name="full-name" type="text" onChange={e=>setUsername(e.target.value)}/>
        <input placeholder="Password"className="u-input-style" type="password" name="password"  onChange={e=>setPassword(e.target.value)}/>
        <input placeholder="Re-Password"className="u-input-style" type="password" name="confirm-password"  onChange={e=>setConfirmPassword(e.target.value)}/>
        <input placeholder="City"className="u-input-style" type="text" name="city"  onChange={e=>setCity(e.target.value)}/>
        <input placeholder="Phone-number"className="u-input-style" type="tel" name="phone"  onChange={e=>setPhone(e.target.value)}/>
        
        <div className="join__btn-container">
        <button type="submit" className="u-submit-btn">Get-Started!</button>
        </div>
        </form>
        </div>
        </div>
      </div>
    </section>
  );
};
