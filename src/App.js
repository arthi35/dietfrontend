import './App.css';
import {useState} from "react";
import { Msg } from './Msg';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { BMI } from './BMI';
import { Notfound } from './Notfound';
import { DietList } from './DietList';
import { INITIAL_DIET_LIST } from './INITIAL_DIET_LIST';
import { Dietdetails } from './Dietdetails';
import { AddDiet } from './AddDiet';
import { EditDiet } from './EditDiet';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function App() {
  // const INITIAL_DIET_LIST=[
  //   {
  //   name:"Banana",
  //   poster:"https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg?quality=90&resize=556,505",
  //   benifits:"It has more protien&less amount of fat.While eating banana in morning it brings the weight loss,while eating in night It reduce stress and increase in weight .Bananana was recommended for both body types (Ectomorphic&Endomorphic)in day to day life."
  //   },
  //   {
  //   name:"Pomegranate",
  //   poster:"https://s1.1zoom.me/big0/252/Pomegranate_Juice_Grain_Highball_glass_512596_1280x884.jpg",
  //   benifits:"It has an optimum level of Calcium,Magnesium & Protien helps to maintain body weight in an optimum level.It will be more useful for  mesomorphic body type",
  //   },
    
  //   {
    
  //   name:"Bottleguard",
  //   poster:"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_1000,c_limit/v1639663209/BW%20BLOG/Untitled-design---2021-12-16T192632.659.jpg",
  //   benifits:"I has great nutrition content which helps in reduce belly fat and also it is helpful for cells of belly to stimulate more",
  //   },
  //   {
  //   name:"Pumpkin",
  //   poster:"https://png.pngtree.com/png-clipart/20201009/ourlarge/pngtree-pumpkin-clip-art-png-image_2355303.jpg",
  //   benifits:"It has more nutrition like Zinc,Magnesium,Calcium & helps in aid weight loss.Scientists have proven seeds of pumpkin gives great weight loss",
  //   },
  //   {
  //   name:"Watermelon",
  //   poster:"https://www.pngitem.com/pimgs/m/406-4068886_clipart-hearts-watermelon-hd-png-download.png",
  //   benifits:"It has enourmous number of nutrition level.It gives more staminal power,& decrease in weight.Scientists has proven that the obese persons can eat this to reduction of the weight",
  //   },
  //   {
  //   name: "Groundnut",
  //   poster:"https://bhuvi99.com/wp-content/uploads/2021/03/Um20Groundnut-2.jpg",
  //   benifits:"It has more protien especially the body builders can take this more to increase their muscle tissue.Avoid eating in the morning before breakfast (or) empty stomach because it causes enormous number of heat &Increase The body temerature",
  //   },
  //   {
  //   name:"Almond",
  //   poster:"https://static.toiimg.com/photo/71490367.cms",
  //   benifits:"It contains Omega-Fatty Acid and it also helps to decrease your weight.Endomorph body type person can consume four almonds to decrease their weight.But (6-10) of almonds will in body weight",
  //   },
  //   {
    
  //   name:"Fenugreek",
  //   poster:"https://res.cloudinary.com/grohealth/image/upload/v1583847096/DCUK/Content/iStock-880909002.jpg",
  //   benifits:"It contains calcium,magnisium,protien,zinc,iron.It also helps to reduce the body weight,and cools the body temperature.(1 spoon of fenugreek) is enough to consume daily,It recommends to the Endomorphic Body type person",
  //   },
  //   {
   
  //   name:"Sprouts",
  //   poster:"https://www.funfoodfrolic.com/wp-content/uploads/2020/09/Sprout-Salad-Thumbnail.jpg",
  //   benifits:"The rich protein food is Sprouts and it was very low in cost.It is the best food for the body builders to bring their body into an core",
  //   },
  //   {
  //      name:"Lady's Finger",
  //   poster:"https://png.pngtree.com/png-clipart/20210107/ourlarge/pngtree-fresh-vegetable-okra-clipart-png-image_2705306.jpg",
  //   benifits:"It has more fibre content and also it helps to lose weight.It specially recommends for Rheumatoid Arthritis & for Endomorphic body type person",
  //   },
  //   {
  //      name:"Orange",
  //   poster:"https://images.all-free-download.com/images/graphiclarge/orange_310898.jpg",
  //   benifits:"More number of Calcium,helps in bone strength & also muscle strength. Mesomorphic best fruit is orange.🍊",
  //   }  
    
  //   ];
    const[dietList,setDietList]=useState(INITIAL_DIET_LIST);
    // const[name,setName]=useState('');
    // const[poster,setPoster]=useState('');
    // const[benifits,setBenifits]=useState('');
    const history=useHistory();
    const[mode,setMode]=useState('dark');
    const theme = createTheme({
      palette: {
        mode: mode,
      },
    });
  return (
    <ThemeProvider theme={theme}>
     <Paper style={{borderRadius:"0px",minHeight:"100vh"}} elevation={4} >
    <div className='App'>
      {/* <BMI/> */}
      {/* <BMI/> */}
     
<AppBar position="static">
        <Toolbar>
          
          <Button color="inherit" onClick={()=>history.push("/")}>Home</Button>
          <Button color="inherit"onClick={()=>history.push("/dietlist")}>Your Diet list</Button>
          <Button color="inherit"onClick={()=>history.push("/dietbmi")}>BMI</Button>
          <Button color="inherit" onClick={()=>history.push("/dietlist/add")}>Add Diets</Button>
          <Button color="inherit"
          style={{marginLeft:"auto"}}
          startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}  
          onClick={()=>setMode(mode==='light'?'dark':'light')}>{mode==='light'?'dark':'light'}mode</Button>

        </Toolbar>
      </AppBar>
      <div className='route-container'>
<Switch>
<Route exact path="/">
    <Msg/>
  </Route>
  <Route path="/dietapp">
    <Redirect to="/dietlist"/>
  </Route>
  <Route path="/dietlist/add">
  <AddDiet/>
  </Route>
  <Route path="/dietlist/edit/:id">
    <EditDiet/>
  </Route>
  <Route path="/dietlist/:id">
    <Dietdetails/>
  </Route>
  <Route path="/dietlist">
  {/* <div className='add-diet-form'> */}
   {/* <TextField  onChange={(event)=>setName(event.target.value)} label="Name" variant="outlined" /> */}
    {/* <input text="" placeholder='Food name'onChange={(event)=>setName(event.target.value)} /> */}
    {/* <input text="" placeholder='poster'onChange={(event)=>setPoster(event.target.value)}/> */}
    {/* <TextField onChange={(event)=>setPoster(event.target.value)}  label="Poster" variant="outlined"/> */}
    {/* <input text="" placeholder='benifits'onChange={(event)=>setBenifits(event.target.value)}/> */}
    {/* <TextField onChange={(event)=>setBenifits(event.target.value)} label="Benifits" variant="outlined" /> */}
    {/* <button onClick={()=>{
      const newDiet={
        name:name,
        poster:poster,
        benifits:benifits,
      }
      setDietList([...dietList,newDiet]);
    }}>Add</button> */}
    {/* <Button 
    onClick={()=>{
      const newDiet={
        name:name,
        poster:poster,
        benifits:benifits,
      }
      setDietList([...dietList,newDiet]);
    }}
    variant="contained">Add</Button>
    </div> */}
    {/* <div className="diet-list">
    {dietList.map(({name,poster,benifits},index)=>(<Diet 
    key={index}
    name={name}
    poster={poster}
    benifits={benifits}/>))}
    </div> */}
    {/* <AddDiet dietList={dietList}setDietList={setDietList}/> */}
    <DietList/>
  </Route>
  <Route path="/dietbmi">
    <BMI/>
  </Route>
  {/* <Route path="/">
    <Msg/>
  </Route> */}
 <Route path="/**">
   <Notfound/>
  </Route>

</Switch>
</div>


      {/* <Msg/> */}
   
   {/* destructuring in map */}
  
 
  </div>
  </Paper>
  </ThemeProvider>

  );
}

// fetch("https://6209ed7192946600171c55be.mockapi.io/diet",{
//   method:"GET",
// })
// .then((data)=>data.json())//response object
// .then((dt)=>console.log(dt))