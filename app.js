const express = require('express');
const axios = require('axios');
const app = express();

// Add  middleware to parse JSON requests
app.use(express.json());

app.post('/', async function(req, res, next) {
  try {
    // Await all the promises to resolve for the GitHub API requests
    let results = await Promise.all(req.body.developers.map(d => axios.get(`https://api.github.com/users/${d}`)));
    
    // Extract the name and bio from the results
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.json(out);  
  } catch (err) {  
    next(err);
  }
});

app.listen(3000);
