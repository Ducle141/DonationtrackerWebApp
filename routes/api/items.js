const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Item = require('../../models/Item');
// const Profile = require('../../models/Profile');

// Validation
// const validatePostInput = require('../../validation/post');

// @route   GET api/items/test
// @desc    Tests items route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Items Works' }));

// @route   GET api/items
// @desc    Get items
// @access  Public
router.get('/', (req, res) => {
  console.log('get Items backend');
  Item.find()
    .sort({ date: -1 })
    .then(items => {
      res.json(items);
      console.log(items);
    })
    .catch(err => res.status(404).json({ noitemsfound: 'No items found' }));
});

// @route   GET api/items/:id
// @desc    Get item by id
// @access  Public
router.get('/:id', (req, res) => {
  console.log('get with', req.params.id);

  Item.find()
    .select({ location: req.params.id })
    .then(items => {
      res.json(items);
      console.log(items);
    })
    .catch(err =>
      res.status(404).json({ noitemfound: 'No item found with that ID' })
    );
});

// @route   POST api/items
// @desc    Create item
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateItemInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newItem = new Item({
      description: req.body.description,
      longDescription: req.body.longDescription,
      location: req.body.location,
      category: req.body.category,
      value: req.body.value
    });

    newItem.save().then(item => res.json(item));
  }
);

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
