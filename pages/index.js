import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Alert, Container, Snackbar} from "@mui/material";
import DataList from "../components/DataList";
import Employeeform from "../components/Employeeform";
import {useState} from "react";
import {EmployeeContext} from "./EmployeeContext";


export default function Home() {
    const [open, setOpen] = useState(false);
    const [alertType,setAlertType] = useState("success");
    const [alertMessage,setAlertMessage] = useState("");


    const showAlert = (type,msg) => {
        setAlertType(type);
        setAlertMessage(msg);
        setOpen(true);
    }

    const handleClose = (event,reason) =>{
        if(reason =='clickaway'){
            return;
        }

        setOpen(false);
    }

    return (
        <EmployeeContext.Provider value={{ showAlert }}>
           <Container maxWidth="sm">
               <Employeeform/>

               <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>

                   <Alert onClose={handleClose} severity={alertType} sx={{ width: '100%' }}>
                       {alertMessage}
                   </Alert>
               </Snackbar>

             <DataList/>
           </Container>
        </EmployeeContext.Provider>

  )
}
