import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`https://examapp.vercel.app/api/setjwt`, { usermobile: req.body.usermobile })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {
        // Handle any other HTTP method
    }
}