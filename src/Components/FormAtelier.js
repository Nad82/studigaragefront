import { useState } from "react";

const FormAtelier = (promps) => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState(""); 
    const [telephone, setTelephone] = useState("");
    const [message, setMessage] = useState("");
}
const handleNomChange = (e) => {
    if(e.target.value.length < 20){
        setNom(e.target.value.substr(0,20));
    consolelog (e.target.value);
    }
}
const handlePrenomChange = (e) => {
    if(e.target.value.length < 20){
        setPrenom(e.target.value.substr(0,20));
    consolelog (e.target.value);
    }
}
const handleEmailChange = (e) => {
    if(e.target.value.length < 35){ 
        setEmail(e.target.value.substr(0,35));
    consolelog (e.target.value);
    }
}
const handleTelephoneChange = (e) => {
    if(!isNaN(e.target.value)){
        setTelephone(e.target.value);
    consolelog (e.target.value);
    }
}
const handleMessageChange = (e) => {
    if(e.target.value.length < 250){
        setMessage(e.target.value.substr(0,250));
    consolelog (e.target.value);
    }
}
    

return(
    <form>
        <h1>Formulaire d'atelier</h1>
        <label 
        for='nom'>Nom: </label>
        <input 
            type="text" 
            name="nom" 
            value={nom} 
            onChange={(handleNomChange)} 
        />
        <label
        for='prenom'>Prenom: </label>
        <input
            type="text"
            name="prenom"
            value={prenom}
            onChange={(handlePrenomChange)}
        />
        <label
        for='email'>Email:</label>
        <input
            type="text"
            name="email"
            value={email}
            onChange={(handleEmailChange)}
        />
        <label
        for='telephone'>Telephone: </label>
        <input
            type="text"
            name="telephone"
            value={telephone}
            onChange={(handleTelephoneChange)}
        />
        <label
        for='message'>Message: </label>
        <input
            type="text"
            name="message"
            value={message} 
            onChange={(handleMessageChange)}
        />
    </form>
)

