import axios from 'axios';
export default function handler(req, res) {

    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/TestCourse/AllQues_test.php`, { updatekey: process.env.MYKEY, ChapterIDData: req.body.ChapterIDData })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}