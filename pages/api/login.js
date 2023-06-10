import jwt from 'jsonwebtoken';

export default function handler(req, res) {
    // Retrieve the login credentials from the request body
    const { email, password } = req.body;

    // Perform the authentication logic
    // Replace this with your own authentication logic
    if (email === 'user@example.com' && password === 'password') {
        // Generate a JWT token
        const token = jwt.sign({ email }, 'xyz', { expiresIn: '1h' });

        // Return the token as a response
        res.status(200).json({ token });
    } else {
        // Return an error response if authentication fails
        res.status(401).json({ message: 'Invalid credentials' });
    }
}
