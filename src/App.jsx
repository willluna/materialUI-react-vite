import {Button, Container, Typography} from  "@mui/material"


export default function App() {
    return(
      <Container sx={{border: 3, boxShadow: 3, pb: 2}}>
      <h1>App</h1>
      <Typography 
      variant="h1"
      component="h2"
      
      >
        Titulo 1
      </Typography>
      <Typography variant="h1">Titulo 2</Typography>
      <Typography
        variant="body1"
        textAlign="center"
        mt={50}
      >
          Titulo 3
        </Typography>
    <Button variant="contained">Mi primer botón</Button>
    </Container>
    );
}