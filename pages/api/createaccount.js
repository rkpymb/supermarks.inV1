import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request - Example:
      
        axios.post(`${process.env.API_URL}create_p.php`, { updatekey: process.env.MYKEY, mob: req.body.usermobile, email: req.body.email, name: req.body.name } )
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {
        // Handle any other HTTP method
    }
}