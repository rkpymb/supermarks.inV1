import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request - Example:
        
        axios.get(`${process.env.API_URL}check_mobile.php?mob=${req.body.usermobile}`)
            .then((rest) =>
                res.status(200).json(rest.data));
       
    } else {
        // Handle any other HTTP method
    }
}