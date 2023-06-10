import jwt from 'jsonwebtoken';

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.MYKEY);
        return decoded;
    } catch (error) {
        // Token verification failed
        return null;
    }
};
