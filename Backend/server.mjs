//Import Libaries here
import express from "express";
import morgan from "morgan";
import mongoose from 'mongoose';
import axios from 'axios'
import cors from "cors";
const serverless = require("serverless-http")

// Generate App and Morgan to use
const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('short'))

// Choosing Starting Variable
const PORT = process.env.PORT || 4000

// Database Connection
mongoose.connect(`mongodb+srv://bakhtawar:bakhtawar@cluster0.3xft5.mongodb.net/notes?retryWrites=true&w=majority`,


    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((e) => {
        console.log("Something went wrong due to this error", e);
    })

// Database Structure / Scehema
const Problem = mongoose.model('Problem', {
    Proheading: String,
    Protext: String,
    ProBtn: String,
    Provisit: String,
    Web: String
});
// All Areas Name List Schema
const AreasName = mongoose.model('AreasName', {
    AreaName: String,
    AreaStatus: String,
    DistrictPopulation: String,
    CreatedOn: { type: Date, default: Date.now() }

});
// Contact Form Schema
const Contact = mongoose.model('Contact', {
    Name: String,
    Email: String,
    Message: String,
    CreatedOn: { type: Date, default: Date.now() }

});
// Vote Form Schema
const Vote = mongoose.model('Vote', {
    CNIC: Number,
    Name: String,
    Email: String,
    Area: String,
    Problem: String,
    ProblemDetail: String,
    CreatedOn: { type: Date, default: Date.now() }

});



// Post Problem Api --- Problems Start
app.post('/problem', (req, res) => {
    try {
        const Problems = new Problem(
            {
                Proheading: req.body.Proheading,
                Protext: req.body.Protext,
                ProBtn: req.body.ProBtn,
                Provisit: req.body.Provisit,
                Web: req.body.Web
            }
        );
        Problems.save().then(() => {
            console.log('Problem page data inserted')
            res.send('Problem page data inserted')
        })
    }
    catch (e) {
        console.log('Error in POST Problems ' + e)
    }
})

app.get('/problems', (req, res) => {
    try {
        Problem.find({}, (err, users) => {
            if (!err) {
                res.send(users)
            } else {
                res.status(500).send("error happened")
            }
        })
    }
    catch (e) {
        console.log('Error in GET API Problem ' + e)
    }
})

// Problems End

// All Areas Start
app.post('/allarea', (req, res) => {
    try {
        const AllAreas = new AreasName(
            {
                AreaName: req.body.AreaName,
                AreaStatus: req.body.AreaStatus,
                DistrictPopulation: req.body.DistrictPopulation
            }
        );
        AllAreas.save().then(() => {
            console.log('AllAreas page data inserted')
            res.send('AllAreas page data inserted')
        })
    }
    catch (e) {
        console.log('Error in AllAreas POST Problems ' + e)
    }
})
app.get('/allareas', (req, res) => {
    try {
        AreasName.find({}, (err, users) => {
            if (!err) {
                res.send(users)
            } else {
                res.status(500).send("error happened")
            }
        })
    }
    catch (e) {
        console.log('Error in AllAreas GET API ' + e)
    }
})

// Contact Form Api Start
app.post('/contact', (req, res) => {
    try {
        const AllContact = new Contact(
            {
                Name: req.body.Name,
                Email: req.body.Email,
                Message: req.body.Message
            }
        );
        AllContact.save().then(() => {
            console.log('AllContact page data inserted')
            res.send('AllContact page data inserted')
        })
    }
    catch (e) {
        console.log('Error in AllContact POST Problems ' + e)
    }
})
app.get('/contacts', (req, res) => {
    try {
        Contact.find({}, (err, users) => {
            if (!err) {
                res.send(users)
            } else {
                res.status(500).send("error happened")
            }
        })
    }
    catch (e) {
        console.log('Error in AllContact GET API ' + e)
    }
})
// Contact Form Api End

// Vote Submit API Start
app.post('/vote', (req, res) => {
    try {
        const AllVote = new Vote(
            {
                CNIC: req.body.CNIC,
                Name: req.body.Name,
                Email: req.body.Email,
                Area: req.body.Area,
                Problem: req.body.Problem,
                ProblemDetail: req.body.ProblemDetail
            }
        );
        AllVote.save().then(() => {
            console.log('Vote has been Submitted')
            res.send('Vote has been Submitted')
        })
    }
    catch (e) {
        console.log('Error in Voting POST Problems ' + e)
    }
})
app.get('/votes', (req, res) => {
    try {
        Vote.find({}, (err, users) => {
            if (!err) {
                res.send(users)
            } else {
                res.status(500).send("error happened")
            }
        })
    }
    catch (e) {
        console.log('Error in Vote GET API ' + e)
    }
})
// Vote Submit API End



// Boiler Plate Code
app.get('/', (req, res) => {
    res.send('Hi I am the Server Of eVoting Pakistan developed by Syed Bakhtawar Fahim')
})
app.get('/home', (req, res) => {
    res.send('I am the Home Page Of eVoting Pakistan developed by Syed Bakhtawar Fahim')
})
app.get('*', (req, res) => {
    res.send('Hi I am the Server Of eVoting Pakistan developed by Syed Bakhtawar Fahim')
})


app.use("/.netlify/functions/server/votes");
app.use("/.netlify/functions/server/vote");
app.use("/.netlify/functions/server/contacts");
app.use("/.netlify/functions/server/contact");
app.use("/.netlify/functions/server/problems");
app.use("/.netlify/functions/server/problem");
app.use("/.netlify/functions/server/allareas");
app.use("/.netlify/functions/server/allarea");


// app.listen(PORT, () => {
//     console.log(`The Server Of eVoting Pakistan developed by Syed Bakhtawar Fahim listening at http://localhost:${PORT}`)
// })

server.close(() => {
    process.exit(1);
  });

module.exports.handler = serverless(server)