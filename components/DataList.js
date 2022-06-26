import {collection,onSnapshot,orderBy,query } from "firebase/firestore"
import {useEffect, useState} from "react";
import {db} from "../firebase";
import Todo from "./Todo";


const DataList = () => {
    const [todos,setTodos] =  useState([])
    useEffect(() =>{
        const collectionRef = collection(db,"json-data")
        const q = query(collectionRef,orderBy("timestamp","desc"))

        const unsubscribe = onSnapshot(q,(querysnapshot)=> {
            setTodos(querysnapshot.docs.map(doc=>({...doc.data(),id:doc.id,timestamp:doc.data().timestamp?.toDate().getTime()})))
        });
         return unsubscribe;
    },[])


  return(
      <div>
        {todos.map(todo => <Todo key={todo.id}
            id={todo.id}
            name={todo.name+' / '+ todo.position+' / '+todo.division}
            division={todo.division}
        />)}
      </div>
  )
}

export default DataList