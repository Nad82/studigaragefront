import React, {useEffect, useState} from 'react';

function Header(props) {
    return (
        <div>
            <h1>Bonjour {props.name}</h1>
        </div>
    );
}

export default Header;