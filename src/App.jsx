import { Box, Container} from  "@mui/material"


export default function App() {
    return(
      <Container>
      <h1>App</h1>
      <Box sx={{
        border: 2,
        p: 5,
        borderColor: "peru",
        bgcolor: "#111",
        color: "white",
        }}
      component="span"
      >
        Pero que bonito es MUI
      </Box>
      </Container>
    );
}