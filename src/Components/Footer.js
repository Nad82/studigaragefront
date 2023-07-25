import React, {useEffect} from 'react';

const Footer = () => {
    const [message, setMessage] = useState("Hello World");

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={()=>setMessage("Hello World")}>Hello</button>
            <button onClick={()=>setMessage("Goodbye World")}>Goodbye</button>
        </div>
    )
}

export default Footer;