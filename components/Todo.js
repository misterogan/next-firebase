import {IconButton,ListItem, ListItemText} from "@mui/material";
import moment from "moment";
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {deleteDoc,doc} from "firebase/firestore";
import {db} from "../firebase";
import {useContext} from "react";
import {EmployeeContext} from "../pages/EmployeeContext";

const Todo = ({id,timestamp,name,position,division}) => {

    const {showAlert} = useContext(EmployeeContext)
    const deleteEmployee = async (id,e)=>{
        e.stopPropagation();
        const docRef = doc(db,"json-data",id);
        await deleteDoc(docRef);
        showAlert('error',`Employee with id ${id} deleted`)
    }
    return(
        <ListItem
            sx={{mt: 3, boxShadow: 3}}
            style={{backgroundColor:'#FAFAFA'}}
            secondaryAction={
                <>
                    <IconButton onClick={ e=>deleteEmployee(id,e)}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </>
            }
            >
            <ListItemText
                primary={name}
                secondary={moment(timestamp).format("MMMM dd,yyyy")}
                third={position}
                fourth={division}
            >
            </ListItemText>
        </ListItem>
    )
}

export default Todo