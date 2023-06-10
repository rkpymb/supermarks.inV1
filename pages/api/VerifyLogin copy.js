import jwt from 'jsonwebtoken';

export default function handler(req, res) {
    // Retrieve the login credentials from the request body
    const  usermobile  = req.body.usermobile;
    if (usermobile !== '') {
        console.log(usermobile)
        // Generate a JWT token
        const decoded = jwt.verify(usermobile, process.env.MYKEY);
        // Return the token as a response
        console.log(decoded)
        res.status(200).json({ decoded });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
}
