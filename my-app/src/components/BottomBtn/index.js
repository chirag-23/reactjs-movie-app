import React from "react";
import PropTypes from 'prop-types';

import { Wrapper } from "./bottombtn.style";

const Bottombtn = ({text, callback}) => (
    <Wrapper type="button" onClick={callback}>
        {text}
    </Wrapper>
);

Bottombtn.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func,
}

export default Bottombtn;