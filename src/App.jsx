import { Button, Container, Typography} from  "@mui/material"
import  AgricultureIcon  from "@mui/icons-material/Agriculture";
import AirIcon from "@mui/icons-material/Air";



export default function App() {
    return(
      <Container>
      <h1>App</h1>
      <Typography variant="h3" color="primary">H3 titulo</Typography>
      <Button 
      variant="outlined"
      color="error"
      startIcon={<AgricultureIcon/>}
    >
      Botón chulisimo
    </Button>
      <Button 
      variant="contained" 
      color="success"
      endIcon={<AirIcon/>}
      >
      Botón chulisimo
      </Button>
      </Container>
    );
}