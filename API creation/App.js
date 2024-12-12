const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

const date = new Date();
const formattedDate = date.toISOString().split('T')[0];

app.use(express.json());

const Verifications = [
    {
        "ID": 1,
        "AssetId": 1234,
        "VerificationDate": formattedDate,
        "Location": "Mumbai",
        "Status": "Passed",
        "Comment": "Safe Material",
        "VerificationMethod": "visual inspection",
        "timestamp": new Date(),
    }
];

app.get('/', (req, res) => {
    res.json(Verifications);
});

app.get('/Verification/:ID', (req, res) => {
    const verificationID = parseInt(req.params.ID);
    const verification = Verifications.find(v => v.ID === verificationID); // Use the correct property
    if (!verification) {
        return res.status(404).send('Verification is not done');
    }
    res.json(verification);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});