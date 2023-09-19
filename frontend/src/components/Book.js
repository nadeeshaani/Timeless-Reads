import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Book() {
  const paperStyle = {padding:'50px 20px', width:600, margin:"20px auto"}
  const[name, setName] = React.useState('')
  const[author,setAuthor]=React.useState('')
  const[Books,setBooks]=React.useState([])

  const handleClick=(e)=>{
    e.preventDefault()
    const book={name, author}
    console.log(book)
    fetch("http://localhost:8080/book/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(book)
    }).then(()=>{
      console.log("New Book Added")
    })
  }

React.useEffect(()=>{
  fetch("http://localhost:8080/book/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setBooks(result);
  },[])
}

)

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

<Button variant="contained" color="secondary" onClick={handleClick}>Submit</Button>
      
    </Box>
   

    </Paper>
    <h1>Books</h1>
    <Paper elevation={3} style={paperStyle}>
      {Books.map(book=>(
        <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={book.id}>
          id:{book.id}
          Name:{book.name}
          Author:{book.author}
          </Paper>
      ))}
    </Paper>


    </Container>
  );
}