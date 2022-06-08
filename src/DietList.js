import { Diet } from './Diet';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { API } from './global';
// const API="https://6209ed7192946600171c55be.mockapi.io"
export function DietList() {
  const history=useHistory()
  const[dietList,setDietList]=useState([]);

  const getDiets=()=>{
    fetch(`${API}/diets`,{
      method:"GET",
    })
    .then((data)=>data.json())//response object
    .then((dt)=>setDietList(dt))
  }
  useEffect(()=>getDiets(),[]);
  const deleteDiet=(id)=>{
    fetch(`${API}/diets/${id}`,{
      method:"DELETE",
    }).then(()=>getDiets());
  }
  return (
    <div className="diet-list">
      {dietList.map(({ name, poster, benifits,id }, index) => (<Diet
        key={index}
        name={name}
        poster={poster}
        benifits={benifits} 
        deleteButton={  <IconButton  
          style={{marginLeft:"auto"}}
          onClick={()=>deleteDiet(id)}
          aria-label="delete"color="error">
        <DeleteIcon />
      </IconButton>}
    
      editButton={  
      <IconButton  onClick={()=>
      history.push(`/dietlist/edit/${id}`)
       
      }aria-label="Edit"color="secondary">
    <EditIcon/>
    </IconButton>
    }
     id={id}
      
        />
        ))}
    </div>
  );
}
{/* <button onClick={()=>{
  console.log(index);
  const copyDietList=[...dietList];
  copyDietList.splice(index,1);
  setDietList(copyDietList);
}
 
}>Delete Me🧨🧨</button> */}
// deleteButton={  <IconButton  
//   style={{marginLeft:"auto"}}
//   onClick={()=>{
//   console.log(index);
//   const copyDietList=[...dietList];
//   copyDietList.splice(index,1);
//   setDietList(copyDietList);
// }
 
// }aria-label="delete"color="error">
// <DeleteIcon />
// </IconButton>}