const Student = require('../models/studentModel');

// Get all students
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        const formattedStudents = students.map(student => ({
            id: student._id, // Map _id to id
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            course: student.course,
            enrolledDate: student.enrolledDate
        }));
        res.status(200).json(formattedStudents);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching students', error });
    }
};

// Get one student by ID
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching student', error });
    }
};

// Create a new student
const createStudent = async (req, res) => {
    try {
        const { firstName, lastName, email, course, enrolledDate } = req.body;
        const newStudent = new Student({ firstName, lastName, email, course, enrolledDate });
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(500).json({ message: 'Error creating student', error });
    }
};

// Update an existing student
const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(500).json({ message: 'Error updating student', error });
    }
};

// Delete a student
const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStudent = await Student.findByIdAndDelete(id);
        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting student', error });
    }
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};