import { useState } from 'react';
import axios from 'axios';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send the login credentials to the API route
            const response = await axios.post('/api/login', { email, password });

            // Save the JWT token to local storage or session storage
            localStorage.setItem('token', response.data.token);

            // Redirect the user to a protected route or perform other actions
            // e.g., route navigation
        } catch (error) {
            // Handle login error
            console.error('Login failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
}
