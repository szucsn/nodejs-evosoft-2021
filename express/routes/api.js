var express = require('express');
var router = express.Router();
const { readFile } = require('fs').promises;
const { join } = require('path');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name: String,
    email: String,
    created: Date,
    address: String
});

const UserModel = mongoose.model('User', UserSchema);

const findAll = (model, query = {}) => {
    return new Promise((resolve, reject) => {
        model.find(query, (err, data) => {
            if (err) {
                return reject(JSON.stringify(err));
            }
            resolve(data);
        });
    });
};

const find = (model, query = {}) => {
    return new Promise((resolve, reject) => {
        model.findOne(query, (err, data) => {
            if (err) {
                return reject(JSON.stringify(err));
            }
            resolve(data);
        });
    });
};

const remove = (model, query = {}) => {
    return new Promise((resolve, reject) => {
        model.remove(query, (err, data) => {
            if (err) {
                return reject(JSON.stringify(err));
            }
            resolve(data);
        });
    });
};

const idReg = /^[0-9a-z]{24}$/;

/* GET home page. */
router.get('/', function (req, res, next) {
    next();
});

router.get('/users', async (req, res, next) => {
    const users = await findAll(UserModel);
    res.json(users);
});

router.get('/users/:id', async (req, res, next) => {
    if (!idReg.test(req.params.id)) {
        next();
    }
    const user = await find(UserModel, { _id: req.params.id });
    res.json(user);
});

router.delete('/users/:id', async (req, res, next) => {
    if (!idReg.test(req.params.id)) {
        next();
    }
    const user = await remove(UserModel, { _id: req.params.id });
    res.json({ success: true });
});

router.patch('/users/:id', async (req, res, next) => {
    if (!idReg.test(req.params.id)) {
        next();
    }
    const user = await find(UserModel, { _id: req.params.id });
    for (let k in req.body) {
        if (user[k]) {
            user[k] = req.body[k];
        }
    }
    user.save((err) => {
        if (err) {
            return res.json(err);
        }
        res.json({ success: true, user: user });
    });
});


router.post('/users', async (req, res, next) => {
    const userObject = {
        ...{ created: new Date(), name: '', address: '', email: '' },
        ...req.body
    };
    const instance = new UserModel(userObject);
    instance.save((err) => {
        res.json({ success: true, user: instance });
    });
});

// example test script
// fetch('http://localhost:3000/api/users', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ name: 'Test2', email: 'test2@gmail.com', address: 'Kecskemét' })
// }).then(
//     r => r.json()).then(
//         d => console.log(d)
//     );

// JSON based database
// router.get('/users', async (req, res, next) => {
//     const usersContent = await readFile(join(__dirname, '../db/users.json'), 'utf8');
//     res.json(JSON.parse(usersContent));
// });

// router.get('/users/:id', async (req, res, next) => {
//     const usersContent = await readFile(join(__dirname, '../db/users.json'), 'utf8');
//     const users = JSON.parse(usersContent);
//     const user = users.filter(u => u.id === Number(req.params.id))[0];

//     if (!user) {
//         next();
//     }

//     res.json(user);
// });

module.exports = router;
