import React from "react";

import { Link } from "react-router-dom";

import MyLogo from "../../images/my-logo.png";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.style";

// Context
import { Context } from "../../context";

// function Header(){
//     return(
//     <Wrapper>
//         <Content>
//             <LogoImg src={MyLogo} alt="logo" />
//             <TMDBLogoImg src={TMDBLogo} alt="logo" />
//         </Content>
//     </Wrapper>
//     )
// }

const Header = () => {

    const [user] = React.useContext(Context);

    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <LogoImg src={MyLogo} alt="logo" />
                </Link>

                {user ? (<span className="user">Welcome {user.username}</span>) : ''}

                <Link to='/login'>
                    <TMDBLogoImg src={TMDBLogo} alt="logo" />
                </Link>
            </Content>
        </Wrapper>
    );
};

export default Header;
