const express = require('express');

const app=express();
const PORT=5000;

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/',(req,res)=>{
    const reponseObject = {
        username: "hihi",
        'hk232-0': {
            args: [69, -68]
        },
        'hk232-1': {
            args: [[8888, -8888, 9999]]
        }
    };

    res.json(reponseObject);
});


app.post('/submit', (req, res) => {
    console.log(req.body.username);
    console.log(req.body['hk232-1'].result);
    console.log(req.body['hk232-1'].result);
    res.send("Success");
});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});