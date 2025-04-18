const express = require('express');
const {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
} = require('../controllers/studentController');

const router = express.Router();

// Routes
router.get('/', getAllStudents); // Get all students
router.get('/:id', getStudentById); // Get one student by ID
router.post('/', createStudent); // Create a new student
router.put('/:id', updateStudent); // Update an existing student
router.delete('/:id', deleteStudent); // Delete a student

module.exports = router;