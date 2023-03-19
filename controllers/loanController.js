const Loan = require('../schemas/loanSchema');
const APIFeatures = require('./../dataBaseManager/loanDbContext');

exports.getData = async (req, res) => {
    //  GET ALL LOANS (USING GET METHOD IN POSTMAN)
    try {
        // EXECUTE QUERY
        const features = new APIFeatures(Loan.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const loans = await features.query;

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: loans.length,
            data: {
                loans
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
exports.getDataById = async (req, res) => {
    // GET ONE LOAN FROM DATABASE BY ID (USING GET METHOD IN POSTMAN)
    try {
        const loans = await Loan.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                loans
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
exports.postData = async (req, res) => {
    // CREATE A LOAN (USING POST METHOD IN POSTMAN)
    try {
        const newLoan = req.body;
        const loans = await Loan.create(newLoan);
        res.status(201).json({
            status: 'success',
            data: {
                loans
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};
exports.updateDataById = async (req, res) => {
    //  UPDATE A LOAN BY ID (USING PUT METHOD IN POSTMAN)
    try {
        const loans = await Loan.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                loans
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
exports.deleteDataById = async (req, res) => {
    // DELETE A LOAN FROM DATABASE (USING DELETE METHOD IN POSTMAN)
    try {
        await Loan.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

// exports.getData = (req, res) => res.send('Get All Loans');
// exports.getDataById = (req, res) => res.send('Get Loan by Id');
// exports.postData = (req, res) => res.send('Post A Loan');
// exports.updateDataById = (req, res) => res.send('Update a Loan by ID');
// exports.patchDataById = (req, res) => res.send('Patch a Loan by ID');
// exports.deleteDataById = (req, res) => res.send('Delete a loan by ID');