import { useState } from "react";

const FormVehicule = (promps) => {
    const [id, getId] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [message, setMessage] = useState("");
}
const handleIdChange = (e) => {
    if(e.target.value.length < 200000){
        getId(e.target.value.substr(0,200000));
    consolelog (e.target.value);
    }
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
        <h1>Formulaire de vehicule</h1>
        <label>Id</label>
        <input
            type="text"
            name="id"
            value={id}
            onChange={(handleIdChange)}
        />
        <label>Nom</label>
        <input
            type="text"
            name="nom"
            value={nom}
            onChange={(handleNomChange)}
        />
        <label>Prenom</label>
        <input
            type="text"
            name="prenom"
            value={prenom}
            onChange={(handlePrenomChange)}
        />
        <label>Email</label>
        <input
            type="text"
            name="email"
            value={email}   
            onChange={(handleEmailChange)}
        />
        <label>Telephone</label>
        <input
            type="text"
            name="telephone"
            value={telephone}
            onChange={(handleTelephoneChange)}
        />
        <label>Message</label>
        <input
            type="text"
            name="message"
            value={message}
            onChange={(handleMessageChange)}
        />  
    </form>
)
return(
    get.data.map((item, index) => {
        return(
            <div key={index}>
                <h1>{item.nom}</h1>
                <p>{item.prenom}</p>
                <p>{item.email}</p>
                <p>{item.telephone}</p>
                <p>{item.message}</p>
            </div>
        )
    }
)
/*export default FormVehicule;*