import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request - Example:
      
        axios.post(`${process.env.API_URL}GetPassdetails.php`, { updatekey: process.env.MYKEY, passid: req.body.dataid } )
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {
        // Handle any other HTTP method
    }
}