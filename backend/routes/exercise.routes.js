const express = require('express');
const Exercise = require('../models/Exercise');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Get all exercises (with filtering)
router.get('/', protect, async (req, res) => {
  const { category, difficulty, limit = 50 } = req.query;
  
  try {
    let query = { isActive: true };
    
    if (category && category !== 'all') {
      query.category = category;
    }
    
    if (difficulty) {
      query.difficulty = difficulty;
    }
    
    const exercises = await Exercise.find(query)
      .sort('order')
      .limit(parseInt(limit));
    
    res.json(exercises);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching exercises' });
  }
});

// Get single exercise
router.get('/:id', protect, async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) {
      return res.status(404).json({ message: 'Exercise not found' });
    }
    res.json(exercise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching exercise' });
  }
});

// Admin: Create new exercise
router.post('/', protect, async (req, res) => {
  // Check if user is admin (you can add admin check)
  try {
    const exercise = await Exercise.create(req.body);
    res.status(201).json(exercise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating exercise' });
  }
});

// Admin: Update exercise
router.put('/:id', protect, async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!exercise) {
      return res.status(404).json({ message: 'Exercise not found' });
    }
    res.json(exercise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating exercise' });
  }
});

// Admin: Delete exercise
router.delete('/:id', protect, async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndDelete(req.params.id);
    if (!exercise) {
      return res.status(404).json({ message: 'Exercise not found' });
    }
    res.json({ message: 'Exercise deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting exercise' });
  }
});

module.exports = router;