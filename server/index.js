let trc = require('./controller');

const port = 6660;

const express = require("express");


const app = express();

app.use(express.json());

//Endpoints
//get
app.get('/api/tracker', trc.allTracker);

//post
app.post('/api/tracker', trc.addTracker);

//delete
app.delete('/api/tracker/:index', trc.deleteTracker);

//put
app.put('/api/tracker', trc.editTracker);


//Listen
app.listen(port, () => {
    console.log('6660 is Haunted!')
});