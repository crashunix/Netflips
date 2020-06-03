import React from 'react';

import { Text } from 'react-native';

import { Option, Img, Mark, NewEps } from './styles';
import logo from '../../images/Netflix-logo2.png';

export default function Movie(props) {
    return (
        <Option>
            {props.mark ? (
                <Mark source={logo} />
            ) : <></>}
            <Img source={props.image} />
            {props.newEps ? (
                <NewEps>Novos espisódios</NewEps>
            ) : <></>}
        </Option>
    );
}