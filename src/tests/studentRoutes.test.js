const request = require('supertest');
const app = require('../app'); // Adjust the path if necessary
const mongoose = require('mongoose');
const Student = require('../models/studentModel');

describe('Student Routes', () => {
    beforeAll(async () => {
        const uri = process.env.MONGODB_URI; // Ensure this is set in your .env file
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    beforeEach(async () => {
        await Student.deleteMany({});
    });

    it('should create a new student', async () => {
        const studentData = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            course: 'Computer Science',
            enrolledDate: new Date(),
        };

        const response = await request(app)
            .post('/students')
            .send(studentData)
            .expect(201);

        expect(response.body).toHaveProperty('_id');
        expect(response.body.firstName).toBe(studentData.firstName);
    });

    it('should get all students', async () => {
        await Student.create({
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'jane.doe@example.com',
            course: 'Mathematics',
            enrolledDate: new Date(),
        });

        const response = await request(app)
            .get('/students')
            .expect(200);

        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBe(1);
    });

    it('should get a student by ID', async () => {
        const student = await Student.create({
            firstName: 'Alice',
            lastName: 'Smith',
            email: 'alice.smith@example.com',
            course: 'Physics',
            enrolledDate: new Date(),
        });

        const response = await request(app)
            .get(`/students/${student._id}`)
            .expect(200);

        expect(response.body).toHaveProperty('_id', student._id.toString());
    });

    it('should update a student', async () => {
        const student = await Student.create({
            firstName: 'Bob',
            lastName: 'Brown',
            email: 'bob.brown@example.com',
            course: 'Chemistry',
            enrolledDate: new Date(),
        });

        const updatedData = { firstName: 'Robert' };

        const response = await request(app)
            .put(`/students/${student._id}`)
            .send(updatedData)
            .expect(200);

        expect(response.body).toHaveProperty('firstName', updatedData.firstName);
    });

    it('should delete a student', async () => {
        const student = await Student.create({
            firstName: 'Charlie',
            lastName: 'Johnson',
            email: 'charlie.johnson@example.com',
            course: 'Biology',
            enrolledDate: new Date(),
        });

        await request(app)
            .delete(`/students/${student._id}`)
            .expect(204);

        const response = await request(app)
            .get(`/students/${student._id}`)
            .expect(404);
    });
});