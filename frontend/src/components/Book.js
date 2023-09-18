import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';

export default function Book() {
  const paperStyle = {padding:'50px 20px', width:600, margin:"20px auto"}
  const[name, setName] = React.useState('')
  const[author,setAuthor]=React.useState('')


  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
      <h1>Add Book</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Book name" variant="outlined" fullWidth 
      value={name}
      onChange= {(e)=>setName(e.target.value)}/>
      <TextField id="outlined-basic" label="Book author" variant="outlined" fullWidth
      value={author}
      onChange= {(e)=>setAuthor(e.target.value)}/>


      
    </Box>
    {name}
    <br></br>
    {author}
    <br></br>
    <br></br>

    </Paper>
    </Container>
  );
}