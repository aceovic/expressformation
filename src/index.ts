import express from "express" ;
// création de serveur express
const app = express() 
const port = 3000 

app.listen(port, () => {
    console.log('server lancé sur le port ' + port);
    
})