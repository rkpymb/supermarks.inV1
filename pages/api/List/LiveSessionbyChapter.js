import axios from 'axios';
export default function handler(req, res) {
    
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/Datalist/LiveSessionbyChapter.php`, { updatekey: process.env.MYKEY, ChapterID: req.body.ChapterID })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}