const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Item = require('../../models/Item');
const Category = require('../../models/Category');
// const Profile = require('../../models/Profile');

// Load Input Validation
const validateItemInput = require('../../validation/item');

// @route   GET api/items/test
// @desc    Tests items route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Items Works' }));

// @route   GET api/categories
// @desc    Get categories
// @access  Public
router.get('/', (req, res) => {
  console.log('get Categories backend');
  Category.find()
    .sort({ date: -1 })
    .then(categories => {
      res.json(categories);
    })
    .catch(err =>
      res.status(404).json({ nocategoriesfound: 'No categories found' })
    );
});

// @route   GET api/items
// @desc    Get items
// @access  Public
router.get('/', (req, res) => {
  console.log('get Items backend');
  Item.find()
    .sort({ date: -1 })
    .then(items => {
      console.log(JSON.stringify(items));
      res.json(items);
    })
    .catch(err => res.status(404).json({ noitemsfound: 'No items found' }));
});

// @route   GET api/items/:id
// @desc    Get item by id
// @access  Public
router.get('/:id', (req, res) => {
  // console.log('get with', req.params.id);

  console.log('get with certain ID', req.params.id);

  Item.find({ location: req.params.id })
    .then(items => {
      console.log('PASSING BACK THE ITEM');
      console.log(items);
      res.json(items);
    })
    .catch(err =>
      res.status(404).json({ noitemfound: 'No item found with that ID' })
    );
});

// @route   POST api/items
// @desc    Create item
// @access  Public
router.post('/create', (req, res) => {
  console.log('add item api');
  const { errors, isValid } = validateItemInput(req.body);

  // Check Validation
  if (!isValid) {
    console.log('item is invalid');
    return res.status(400).json(errors);
  }

  console.log('item valid');
  const newItem = new Item({
    description: req.body.description,
    longDescription: req.body.longDescription,
    location: req.body.location,
    category: req.body.category,
    value: req.body.value
  });

  newItem.save().then(item => res.json(item));
});

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
