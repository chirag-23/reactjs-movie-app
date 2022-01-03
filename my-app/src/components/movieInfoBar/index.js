import React from "react";
import PropTypes from 'prop-types';

// Helper
import { calcTime, convertMoney} from '../../helpers';

import { Wrapper,Content } from "./movieInfoBar.style";

const MovieInfoBar = ({time, budget, revenue}) =>(
    <Wrapper>
        <Content>
            <div className="clm">
                <p>Duration: {calcTime(time)}</p>
            </div>
            <div className="clm">
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className="clm">
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
)

MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}

export default MovieInfoBar;