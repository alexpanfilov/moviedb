import React from 'react';
import * as s from './styled';
import logo from '../../images/mdb.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <s.Header>
            <Link to="/"><s.Logo src={logo} alt="Logo" /></Link>
        </s.Header>
    )
}
