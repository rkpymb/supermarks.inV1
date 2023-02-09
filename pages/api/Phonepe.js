import axios from 'axios';
import { sha256, sha224 } from 'js-sha256';
export default function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body.encoded)
        const options = {
            method: 'POST',
            url: 'https://mercury-uat.phonepe.com/v3/qr/init',
            headers: {
                accept: 'application/json',
                'X-VERIFY': sha256(req.body.encoded + "/v3/charge" +'6b451f58-d565-4890-836f-6fb1gjt84d97'),
                'X-CALLBACK-URL': 'http://localhost:3000/Phonepe',
                'Content-Type': 'application/json',
                
            },
            data: {
                request: req.body.encoded
            }
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    } else {

    }
}
