import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Counter } from './Counter';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom";
export function Diet({ name, poster, benifits,deleteButton,id,editButton }) {

  const [show, setShow] = useState(true);
  const history=useHistory();
  //Conditional Styling
  //  const summaryStyles={
  //    display:show ? "block":"none"
  //  };
  return (
    <Card className="diet-container">
      <img src={poster} alt={name} className="diet-poster" />
      <CardContent>
        <h2 className="diet-name">
          {name}
          <IconButton
            onClick={() => setShow(!show)}
            color="primary" aria-label="Toggle Summary">
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <IconButton
            onClick={() => history.push(`/dietlist/${id}`)}
            color="primary" aria-label="Toggle Summary">
            <InfoIcon/>
          </IconButton>
        </h2>
        {/* <IconButton
            onClick={()=>setShow(!show)}
            color="primary" aria-label="Toggle Summary">
            {show?<ExpandLessIcon/>:<ExpandMoreIcon/>}
            </IconButton> */}
        {/* <button onClick={()=>setShow(!show)}>Toggle</button> */}
        {/* <p style={summaryStyles}className="diet-benefits">{benifits}</p> */}
        {/* Conditional Rendering */}
        {show ? <p className="diet-benefits">{benifits}</p> : ""}
      </CardContent>
      <CardActions>
        <Counter />{deleteButton}{editButton}
      </CardActions>
    </Card>
  );

}
