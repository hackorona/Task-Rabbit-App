import React, { useEffect, useState } from "react";
import Axios from "axios";

export default (props) => {
  const [userData, setUserData] = useState("");
  const { userId } = props.match.params;
  useEffect(() => {
    const fetchUserData = async () => {

      try {
        const url=`http://localhost:3001/user/${userId}`;
        const res = await Axios.post(url,userId);
        setUserData(res.data);
      } catch (e) {
        console.log(e, "faild to load fata from server");
      }
    };
    fetchUserData();
  }, []);
  if (!userData) return <h1>Loading...</h1>;
  else return <section className="user-page">
                    <ul>
<li>username :{userData.username}</li>  
<li>Email : {userData.email}</li>  
<li>Adress: {userData.adress}</li>  
<li>userImg : {<img src={userData.userImg}/>}</li>  
<li>offers : {userData.offers}</li>  
<li>deeds : {userData.deeds}</li>  
                    </ul>

  </section>;
};
