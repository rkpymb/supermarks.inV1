import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        
        axios.post(`${process.env.API_URL}admin/submitjob.php`, { updatekey: process.env.MYKEY, Name: req.body.Name, Email: req.body.Email, Address: req.body.Address, Resume: req.body.Resume, Mobile: req.body.Email })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {
        // Handle any other HTTP method
    }
}