import CheckloginContext from './CheckloginContext'
import { useState, useEffect } from 'react'
const CheckloginStates = (props) => {
    const [Data, setData] = useState({});
    const [IsLogin, setIsLogin] = useState(false);

   
    useEffect(() => {
        // check login
        try {
            if (localStorage.getItem('userid')) {
                const usermobnow = localStorage.getItem('userid');
                const sendUser = { usermobnow }
                const data = fetch("/api/check", {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(sendUser)
                }).then((a) => {
                    return a.json();
                })
                    .then((parsedUser) => {
                        setData(parsedUser.data)
                        setIsLogin(true)
                        // console.log('Data Chacked')
                    })
            } else {
               
            }
        } catch (error) {
            console.error(error)
            // localStorage.clear()
        }
        // check login credential end

    },[]);

    return (
        <CheckloginContext.Provider value={{ Data, IsLogin }}>
            {props.children}
        </CheckloginContext.Provider>
    )
    
}
export default CheckloginStates;