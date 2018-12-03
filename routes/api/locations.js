const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Locations = require('../../models/Location');
// const Profile = require('../../models/Profile');

// Validation
// const validatePostInput = require('../../validation/post');

// @route   GET api/locations/test
// @desc    Tests locations route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Locations Works' }));

// @route   GET api/locations
// @desc    Get locations
// @access  Public
router.get('/all', (req, res) => {
  console.log('get backend');
  Locations.find()
    .sort({ date: -1 })
    .then(locations => {
      res.json(locations);
      console.log(locations);
    })
    .catch(err =>
      res.status(404).json({ nolocationsfound: 'No locations found' })
    );
});

// @route   GET api/locations/:id
// @desc    Get location by id
// @access  Public
router.get('/:id', (req, res) => {
  Locations.findById(req.params.id)
    .then(location => res.json(location))
    .catch(err =>
      res
        .status(404)
        .json({ nolocationfound: 'No location found with that ID' })
    );
});

// // @route   POST api/posts
// // @desc    Create post
// // @access  Private
// router.post(
//   '/',
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     const { errors, isValid } = validatePostInput(req.body);

//     // Check Validation
//     if (!isValid) {
//       // If any errors, send 400 with errors object
//       return res.status(400).json(errors);
//     }

//     const newPost = new Post({
//       text: req.body.text,
//       name: req.body.name,
//       avatar: req.body.avatar,
//       user: req.user.id
//     });

//     newPost.save().then(post => res.json(post));
//   }
// );

// // @route   DELETE api/posts/:id
// // @desc    Delete post
// // @access  Private
// router.delete(
//   '/:id',
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     Profile.findOne({ user: req.user.id }).then(profile => {
//       Post.findById(req.params.id)
//         .then(post => {
//           // Check for post owner
//           if (post.user.toString() !== req.user.id) {
//             return res
//               .status(401)
//               .json({ notauthorized: 'User not authorized' });
//           }

//           // Delete
//           post.remove().then(() => res.json({ success: true }));
//         })
//         .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
//     });
//   }
// );

module.exports = router;
