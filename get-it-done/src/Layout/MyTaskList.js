import React from 'react';
import MyTaskDetails from '../Components/MyTaskDetails/MyTaskDetails'
export default props=>{
    const {myTasks}=props;
    return(<section className="my-task-list">
              {myTasks.map((task,i)=> (
                <MyTaskDetails
               task={task}
                  key={i}
                />
              ))}
    </section>)
}