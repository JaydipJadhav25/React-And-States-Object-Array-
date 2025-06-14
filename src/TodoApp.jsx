import React, { useState } from 'react'

export default function TodoApp() {
    const[todos , setTodos] =useState([]);
    const [task , setTask] = useState({id : null , name : "" , isdone : false});
    const [isupdate , setIsUpdate] = useState(false)
    const[taskupdate ,setTaskUpdate] = useState({id : null , name : ""})

    function addTodo(){
        console.log("tack : " , task);
        setTodos(prve =>{
            return [...prve , task]
        })
     setTask({id : null , name : "" , isdone : false})

    }

  function deleteTodo(id) {
//   const newArr = todos.filter(todo => todo.id !== id);
//   setTodos(newArr); 

   setTodos((preveTodo) => preveTodo.filter((preveTodo) =>preveTodo.id !== id))



}

function upperCaseAll(){
 const newArr = todos.map(todo =>{
   return {...todo , name : todo.name.toUpperCase()}
    
  })
  console.log(newArr)
  setTodos(newArr)

}
function lowerCaseAll(){
 const newArr = todos.map(todo =>{
   return {...todo , name : todo.name.toLowerCase()}
    
  })
  console.log(newArr)
  setTodos(newArr)

}


function editTodo(todo) {
//   console.log("todo" , todo);

    setIsUpdate(true)
  setTask({ id: todo.id, name: todo.name }); // Load into input
//   console.log("task" , task);
}

// function updateToados(){
//     // const filtredArray = todo   
//   console.log("task updateToados " , task);

//     // console.log("update caall.............")         
//     const updatedTodos = todos.map(item =>  item.id === taskupdate.id ? { ...item, name: task.name } : item ); 

//     console.log("updated : " , updatedTodos);   
//     // setTodos(updateToados);
    
//     setIsUpdate(false)
//     setTodos(updateToados); //update values arary    

//     console.log("update array todos : " , todos)
//     //  setTodos(newupdtaedArray);
//     //  setTask({id : null , name : ""})



//     //  setTodos(prve => [...prve , task]);  no add new object

// }



function updateToados() {
  console.log("task to update:", taskupdate);

  const updatedTodos = todos.map(item =>
    item.id === taskupdate.id ? { ...item, name: task.name } : item
  );

  setTodos(updatedTodos);             // ✅ Update the todos array
  setTaskUpdate({ id: null, name: "" }); // ✅ Clear the taskupdate state
  setTask( {id: null, name: "" })
  setIsUpdate(false);                 // ✅ Set back to "Add" mode
}


function isDoneTask(todo){
    const newarra = todos.map(item =>  item.id === todo.id ? {...todo , isdone : true} : item);
    setTodos(newarra);
}



console.log("todos : " , todos);

   
  return (
   <>
   <h1>TODO APP</h1>
   <p >addTodo :</p>

  <input
//   onChange={(e)=>{
//      setTask(prev =>{
//         {...prev , 
//         id : Math.floor(Math.random()*100+1),
//         name : e.target.value}
//      });
//   }}
   onChange={(e) => setTask({ ...task, name: e.target.value , isdone : false ,  id : Math.floor(Math.random()*100+1)})}
    type="text" name='todo' id='todo' value={task.name}/>
    {/* <button onClick={addTodo}>add</button> */}
     {
        isupdate ? <button
        onClick={updateToados}
        >update</button>
        :
        <button onClick={addTodo}>add</button>
      
     }

<hr />
    <p>Todos ::</p>
    <button onClick={upperCaseAll}>upperCase</button>
<button onClick={lowerCaseAll}>lowerCase</button>

    <ul>
        {
            todos?.map((todo ) => <>
            <li style={{
    backgroundColor: todo.isdone ? "green" : "red",
    textDecorationLine : todo.isdone ? "line-through" : "none",
           }} key={todo.id}>
                {
                    todo.name 


                }
                
            </li>
             <button onClick={()=>{
                deleteTodo(todo.id)
             }}> delete </button>
          
              {
                todo.isdone ? <></> : <>
                     <button onClick={()=>{
               editTodo(todo)
               setTaskUpdate({
                id : todo.id,
                name : todo.name
               })
             }}>edite</button>
                 <button onClick={()=>{
                isDoneTask(todo);
             }}>done</button>
                </>
              }
            </>)
        }
    </ul>

   </>
  )
}
