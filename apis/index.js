const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const app = express();
const port = 5000;

const serviceAccount = require('./accare_firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const collection = 'items';

app.use(cors());
app.use(express.json());
// console.log(admin.app().options.credential.projectId);
// CREATE
app.post('/items', async (req, res) => {
  try {
    const data = req.body;
    const docRef = await db.collection(collection).add(data);
    res.status(201).send({ id: docRef.id });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// READ ALL
app.get('/items', async (req, res) => {
  try {
    const snapshot = await db.collection('admin_login').get();
    
    const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// READ ONE
app.get('/items/:id', async (req, res) => {
  try {
    const id = req.params.id;
    console.log("Requested ID:", id);  // Debug: Print ID in terminal

    const query = db.collection('admin_login');
    let getdata = query.where('id', '==', id);
    
    const snapshot = await getdata.get();  // 🔍 await the query

    if (snapshot.empty) {
      console.log("No document found with id:", id);
      return res.status(404).send('Item not found');
    }

    // Loop over results
    const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    // console.log("Fetched data:", items); // Debug: print the data  

    res.status(200).send({status:'sucess',data:items});

  } catch (error) {
    console.error("Error occurred:", error); // Debug: print error in terminal
    res.status(500).send(error.message);
  }
});


// UPDATE
app.put('/items/:id', async (req, res) => {
  try {
    const data = req.body;
    await db.collection(collection).doc(req.params.id).update(data);
    res.status(200).send('Item updated');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETE
app.delete('/items/:id', async (req, res) => {
  try {
    await db.collection(collection).doc(req.params.id).delete();
    res.status(200).send('Item deleted');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
