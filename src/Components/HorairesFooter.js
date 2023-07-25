import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import StateTypes from '../functions/stateTypes';

/*useEffect(() => {
    if (!StateTypes.string(props.horaires)) {return SpeechSynthesisErrorEvent('l'API ne s'est pas lancé!!');}
    getHoraires(props.horaires);

const HorairesFooter = (props) => {
    const [horaires, getHoraires] = useState(props.horaires);

    return (
        <div className="horairesFooter"> 
            <h1>Horaires</h1> 
            const url ='{e.target.value}'
            fetch (url)
            .then(response => {
                if(res.status === 200){
                    Response.json()
                .then(res => {
                    getHoraires(res.body);
                }
            })
            set error('Not found'')
                setHoraires(false)
            .catch(err => {
                else {res.status(404)}
                    setHoraires(false)
        </div>
    );
}
/*Horaires.PropTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        lundi: PropTypes.string.isRequired,
        mardi: PropTypes.string.isRequired,
        mercredi: PropTypes.string.isRequired,
        jeudi: PropTypes.string.isRequired,
        vendredi: PropTypes.string.isRequired,
        samedi: PropTypes.string.isRequired,
        dimanche: PropTypes.string.isRequired,
    })).isRequired,*/
