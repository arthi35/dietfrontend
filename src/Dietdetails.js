import { useParams ,useHistory} from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect, useState } from 'react';
import { API } from './global';
export function Dietdetails() {
  const { id } = useParams();
  

  const[diet,setDiet]=useState({});

  useEffect(()=>{
    fetch(`${API}/diets/${id}`,{
        method:"GET",
      })
      .then((data)=>data.json())//response object
      .then((dt)=>setDiet(dt))
  },[])
  const history=useHistory();
  return (
    <div>
      <img width='70%' src={diet.chart} alt="diet-chart"/>
      <div className='diet-detail-container'>
        <h1 className='diet-name'>{diet.name}</h1>
        <p className='diet-benifits'>{diet.benifits}</p>
        <Button variant="contained" onClick={()=>history.goBack()} startIcon={<ArrowBackIosIcon />}>
  Back
</Button>
      </div>
    </div>
  );
}
