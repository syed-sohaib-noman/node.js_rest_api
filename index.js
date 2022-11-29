// ~ Import Packages ~
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


// ~ Import Model ~
const users_model = require('./models').Users;


// ~ Basic Configuration ~
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));


// ~ REST APIs ~
app.post('/api/users', async (request, response)=> {
    await users_model.create(request.body).then(()=> {
        response.status(200).send("Supplier Successfully Added");
    }).catch(error=> {
        response.status(500).send(error);
    });
}); /* Submit Data Request */


app.get('/api/users', async (request, response)=> {
    await users_model.findAll().then(result=> {
        response.status(200).send(result);
    }).catch(error=> {
        response.status(500).send(error);
    });
}); /* Fetch All Data Request */


app.get('/api/users/:id', async (request, response)=> {
    await users_model.findAll({where: {id: request.params.id}}).then(result=> {
        response.status(200).send(result);
    }).catch(error=> {
        response.status(500).send(error);
    });
}); /* Fetch Specific Data Request */


app.put('/api/users/:id', async (request, response)=> {
    await users_model.update(request.body, {where: {id: request.params.id}}).then(()=> {
        response.status(200).send("Supplier Successfully Updated");
    }).catch(error=> {
        response.status(500).send(error);
    });
}); /* Update Data Request */


app.delete('/api/users/:id', async (request, response)=> {
    await users_model.destroy({where: {id: request.params.id}}).then(()=> {
        response.status(200).send("Supplier Successfully Deleted");
    }).catch(error=> {
        response.status(500).send(error);
    });
}); /* Delete Data Request */


// ~ Define Port ~
app.listen(3200);