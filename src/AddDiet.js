import { useState } from "react";
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import { API } from "./global";
import * as yup from "yup";
export const dietValidationSchema=yup.object({
  name:yup
  .string()
  .required("why not fill this name?😊"),
  poster:yup
  .string()
  .required("why not fill this poster?😊")
  .min(4,"Need a longer poster😊"),
  benifits:yup
  .string()
  .required("why not fill this benifits?😊")
  .min(20,"Need a longer benifits😊"),
  chart:yup
  .string()
  .required("why not fill this chart?😊")
  .min(4,"Need a longer chart😊"),
  
})
export function AddDiet() {
  // const [name, setName] = useState('');
  // const [poster, setPoster] = useState('');
  // const [benifits, setBenifits] = useState('');
  // const[chart,setChart]=useState('');
  const history=useHistory();
  const formik=useFormik({
    initialValues:{
      name:"",
     poster:"",
     benifits:"",
     chart:"",
    },
    validationSchema:dietValidationSchema,
    onSubmit:(newDiet)=>{
      addDiet(newDiet)
      
    },
})
  const addDiet=(newDiet)=>{
    // const newDiet = {
    //   name: name,
    //   poster: poster,
    //   benifits: benifits,
    //   chart:chart,
    // };
    console.log("onSubmit",newDiet)
    fetch(`${API}/diets`,{
      method:"POST",
      body:JSON.stringify(newDiet),
      headers:{
        "Content-type":"application/json",
      },
      }).then(()=>history.push("/dietlist"))
  }
  return (
    <form onSubmit={formik.handleSubmit}className='add-diet-form'>
      <TextField 
      // onChange={(event) => setName(event.target.value)} 
      onChange={formik.handleChange}
      value ={formik.values.name} 
      onBlur={formik.handleBlur}
      label="Name" 
      id="name"
      name="name"
      variant="outlined"
      error={formik.touched.name && formik.errors.name}
      helperText={formik.touched.name && formik.errors.name ? formik.errors.name:""}
      />
      {/* {formik.touched.name && formik.errors.name ? formik.errors.name:""} */}
      {/* <input text="" placeholder='Food name'onChange={(event)=>setName(event.target.value)} /> */}
      {/* <input text="" placeholder='poster'onChange={(event)=>setPoster(event.target.value)}/> */}
      <TextField 
      // onChange={(event) => setPoster(event.target.value)} 
      onChange={formik.handleChange}
      value ={formik.values.poster} 
      onBlur={formik.handleBlur}
      id="poster"
      name="poster"
      label="Poster" 
      variant="outlined" 
      error={formik.touched.poster && formik.errors.poster}
      helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster:""}
      />
      {/* {formik.touched.poster && formik.errors.poster ? formik.errors.poster:""} */}
      {/* <input text="" placeholder='benifits'onChange={(event)=>setBenifits(event.target.value)}/> */}
      <TextField 
      // onChange={(event) => setBenifits(event.target.value)} 
      onChange={formik.handleChange}
      value ={formik.values.benifits} 
      onBlur={formik.handleBlur}
      id="benifits"
      name="benifits"
      label="Benifits" 
      variant="outlined" 
      error={formik.touched.benifits && formik.errors.benifits}
      helperText={formik.touched.benifits && formik.errors.benifits ? formik.errors.benifits:""}
      />
      {/* {formik.touched.benifits && formik.errors.benifits ? formik.errors.benifits:""} */}
      <TextField 
      // onChange={(event) => setChart(event.target.value)} 
      onChange={formik.handleChange}
      value ={formik.values.chart} 
      onBlur={formik.handleBlur}
      id="chart"
      name="chart"
      label="Chart" 
      variant="outlined" 
      error={formik.touched.chart && formik.errors.chart}
      helperText={formik.touched.chart && formik.errors.chart ? formik.errors.chart:""}
      />
      {/* {formik.touched.chart && formik.errors.chart ? formik.errors.chart:""} */}
      {/* <button onClick={()=>{
              const newDiet={
                name:name,
                poster:poster,
                benifits:benifits,
              }
              setDietList([...dietList,newDiet]);
            }}>Add</button> */}
      <Button
      type="submit"
        // onClick={()=>addDiet()}
          // history.push("/dietlist")
          // setDietList([...dietList, newDiet]);
        
        variant="contained">Add</Button>
    </form>
  );
}

