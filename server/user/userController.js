// /*** userController ***/
//
// let User = require('./userModel');;
// // console.log('User model: ', User);
//
//
// let request = require('request');
//
// const cookieController = require('./../util/cookieController');
// const sessionController = require('./../session/sessionController');
// const bcrypt = require('bcryptjs');
//
// const userController = {};
//
// let currentUserName;
//
// /**
// * createUser - create a new User model and then save the user to the database.
// * @param req - http.IncomingRequest
// * @param res - http.ServerResponse
// */
// userController.createUser = (req, res, next) => {
//   currentUserName = req.body.username;
//   User.create(req.body, (err, result) => {
//     if (err) {
//       return res.render('./../client/signup', {error: err});
//     }
//     req.currentUserId = result._id;
//     req.currentUN = req.body.username;
//     next();
//   });
// };
//
//
// /**
// * verifyUser - Obtain username and password from the request body, locate
// * the appropriate user in the database, and then authenticate the submitted password
// * against the password stored in the database.
// *
// * @param req - http.IncomingRequest
// * @param res - http.ServerResponse
// */
// userController.verifyUser = (req, res, next) => {
//   console.log('verify user ', req.body);
//   const verify = new Promise((resolve, reject) => {
//     User.findOne({username: req.body.username}, (err, doc) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(doc);
//       }
//     });
//   });
//
//   verify
//     .then((result) => {
//       if (result.length === 0) {
//         return res.redirect('/signup');
//       } else {
//         // STORE USER NAME FROM RESPONSE BODY IN GLOAL VARIABLE
//         // THIS VARIABLE WILL UPDATE EVERY TIME WE VERIFY A USER.
//         // VARIABLE WILL BE USED IN GETTING ALL SESHES
//         currentUserName = req.body.username;
//         result.comparePassword(req.body.password, (isMatch) => {
//           if (isMatch) {
//             req.currentUserId = result._id;
//             next();
//           } else {
//             res.redirect('/');
//           }
//         });
//       }
//     })
//     .catch((err) => {
//       console.log('error: ', err);
//     });
// };
//
// module.exports = userController;
