import { useState} from "react";

const NotesSelector = (props) => {
    props= {'1':'2','3':'4','5':'6'}}
    if (props.notes === '1'){
        return(
            <div>
                <h1>1</h1>
            </div>
        )
    }
    if (props.notes === '2'){
        return(
            <div>
                <h1>2</h1>
            </div>
        )
    }
    if (props.notes === '3'){
        return(
            <div>
                <h1>3</h1>
            </div>
        )
    }
    if (props.notes === '4'){
        return(
            <div>
                <h1>4</h1>
            </div>
        )
    }
    if (props.notes === '5'){
        return(
            <div>
                <h1>5</h1>
            </div>
        )
    }

const FormTemoignage = (promps) => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [commentaires, setCommentaires] = useState(""); 
    const [notes, setNotes] = useState("");
}


/*const [primaryTemoignage, setPrimaryTemoignage] = useState({
    nom: "",
    prenom: "",
    commentaires: "",
    notes: "",
});*/
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
const handleCommentairesChange = (e) => {
    if(e.target.value.length < 250){
        setCommentaires(e.target.value.substr(0,250));
    consolelog (e.target.value);
    }
}
const handleNotesChange = (e) => {
    if(!isNaN(e.target.value)){
        setNotes(e.target.value);
    consolelog (e.target.value);    
    }
}

return(
    <form>
        <h1>Formulaire de temoignage</h1>
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
        <label>Commentaires</label>
        <input
            type="text"
            name="commentaires"
            value={commentaires}
            onChange={(handleCommentairesChange)}
        />
        <label>Notes</label>
        <input
            type="text"
            name="notes"
            value={notes}
            onChange={(handleNotesChange)}
        />
        <button type="submit">Envoyer</button>
    </form>
)