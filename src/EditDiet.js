import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { API } from "./global";
import { dietValidationSchema } from "./AddDiet";
import { useFormik } from "formik";
export function EditDiet() {
    const { id } = useParams();
    // const diet = dietList[id];
    // console.log(diet);
    const[diet,setDiet]=useState(null);
console.log(diet)
  useEffect(()=>{
    fetch(`${API}/diets/${id}`,{
        method:"GET",
      })
      .then((data)=>data.json())//response object
      .then((dt)=>setDiet(dt))
  },[])
  // const [name, setName] = useState(diet.name);
  // const [poster, setPoster] = useState(diet.poster);
  // const [benifits, setBenifits] = useState(diet.benifits);
  // const[chart,setChart]=useState(diet.chart);
  // const history=useHistory();
  return (
    <div>
      {diet?<EditdietForm diet={diet}/>:<h1>Loading</h1>}
    </div>
  );
}
function EditdietForm({diet}){
  // const [name, setName] = useState(diet.name);
  // const [poster, setPoster] = useState(diet.poster);
  // const [benifits, setBenifits] = useState(diet.benifits);
  // const[chart,setChart]=useState(diet.chart);
  const history=useHistory();
  const formik=useFormik({
    initialValues:{
      name:diet.name,
     poster:diet.poster,
     benifits:diet.benifits,
     chart:diet.chart,
    },
    validationSchema:dietValidationSchema,
    onSubmit:(updatedDiet)=>{
      editDiet(updatedDiet)
      
    },
})
  const editDiet=(updatedDiet)=>{
    // const updatedDiet = {
    //   name: name,
    //   poster: poster,
    //   benifits: benifits,
    //   chart:chart,
    // };
console.log("Updated",updatedDiet);
    fetch(`${API}/diet/${diet.id}`,{
      method:"PUT",
      body:JSON.stringify(updatedDiet),
      headers:{
        "Content-type":"application/json",
      },
      }).then(()=>history.push("/dietlist"))
  }
  return(
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
    {/* <TextField value={name}onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" /> */}
    {/* <input text="" placeholder='Food name'onChange={(event)=>setName(event.target.value)} /> */}
    {/* <input text="" placeholder='poster'onChange={(event)=>setPoster(event.target.value)}/> */}
    {/* <TextField value={poster}onChange={(event) => setPoster(event.target.value)} label="Poster" variant="outlined" /> */}
    {/* <input text="" placeholder='benifits'onChange={(event)=>setBenifits(event.target.value)}/> */}
    {/* <TextField value={benifits}onChange={(event) => setBenifits(event.target.value)} label="Benifits" variant="outlined" /> */}
    {/* <TextField value={chart}onChange={(event) => setChart(event.target.value)} label="Chart" variant="outlined" /> */}
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
        // const copyDietList=[...dietList];
        // copyDietList[id]=updatedDiet;
        // setDietList(copyDietList);
        // history.push("/dietlist")
      //   setDietList([...dietList, newDiet]);
      
      variant="contained"color="success">Save</Button>
  </form>
  )
}