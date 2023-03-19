const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: [true, 'You must provide a name'],
        unique: true,
        trim: true,
        maxlength: [20, 'The name cannot be more than 20 characters'],
        minlength: [10, 'The name cannot be less than 10 characters'],
    },
    phoneNumber: {
        type: String,
        required: [true, 'You must provide a phone number'],
        trim: true,
        maxlength: [20, 'The phone number cannot be more than 20 digits, including country code, area code, number and extension'],
        minlength: [10, 'Phone number cannot be less than 10 digits'],
    },
    address: {
        type: String,
        required: [true, 'You must provide an address'],
    },
    loanAmount: {
        type: Number,
        required: [true, 'A loan amount is required'],
        trim: true,
    },
    interest: {
        type: Number,
        required: [true, 'An interest amount is required'],
        trim: true,
    },
    loanTermYears: {
        type: Number,
        required: [true, 'The length of the loan is required'],
        trim: true,
    },
    loanType: {
        type: String,
        required: [true, 'The type of loan is required'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'A description of the loan is required'],
        trim: true,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
    insertedDate: {
        type: Date,
        default: Date.now,
    }
});

const Loan = mongoose.model('Loan', loanSchema);
module.exports = Loan;