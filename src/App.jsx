import { Container, Grid } from  "@mui/material"



export default function App() {
    return(
      <Container>
        <Grid container spacing={5}>
          <Grid
            item 
            xs={12}
            sm={6}
            md={4}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti esse illum quia sed, eum necessitatibus ipsa. Aperiam exercitationem recusandae quis dicta aliquid incidunt aliquam numquam eum rerum molestias, vel voluptatem!
            </p>
          </Grid>
          <Grid 
            item 
            xs={12}
            sm={6}
            md={4}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti esse illum quia sed, eum necessitatibus ipsa. Aperiam exercitationem recusandae quis dicta aliquid incidunt aliquam numquam eum rerum molestias, vel voluptatem!
            </p>
          </Grid>
          <Grid 
            item 
            xs={12}
            sm={12}
            md={4}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti esse illum quia sed, eum necessitatibus ipsa. Aperiam exercitationem recusandae quis dicta aliquid incidunt aliquam numquam eum rerum molestias, vel voluptatem!
            </p>
          </Grid>
        </Grid>
      </Container>
    );
}