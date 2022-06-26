import { Button, TextField } from "@mui/material";
import {useContext, useRef, useState} from "react";
import {addDoc,collection,serverTimestamp} from "firebase/firestore";
import {db} from "../firebase";
import {EmployeeContext} from "../pages/EmployeeContext";


const Employeeform = () =>{
    const inputAreaRef=useRef()
    const [employee,setEmployee] = useState({name:'',position:'',division:''})
    const {showAlert} = useContext(EmployeeContext)
    const onSubmit = async () =>{
        const collectionRef = collection(db,"json-data")
        const docRef = await addDoc(collectionRef,{...employee,timestamp: serverTimestamp() })
        setEmployee({name: '',position: '',division: ''})
        showAlert('success',`Employee with id ${docRef.id} is added succesfully`);


    }
        return(
            <div ref={inputAreaRef}>
                {/*<pre>{JSON.stringify(employee)}</pre>*/}
                <TextField fullWidth label="Name" margin="normal" value={employee.name} onChange={e=>setEmployee({...employee,name:e.target.value})} />
                <TextField fullWidth label="Position" margin="normal" value={employee.position} onChange={e=>setEmployee({...employee,position:e.target.value})} />
                <TextField fullWidth label="Division" margin="normal" value={employee.division} onChange={e=>setEmployee({...employee,division:e.target.value})} />
                <Button onClick={onSubmit} variant="contained" sx={{mt:3}}>Add Employee</Button>
            </div>
        )
}

export default Employeeform