import { Wrapper,Content } from "./footer.style";

const Footer = () => (
    <Wrapper>
        <Content>
            <p>Hello! I'm Chirag Chouhan </p>
            <div>
            <label>Check out my other projects </label>
            <a href="https://github.com/chirag-23" target="_blank" className="github"  >  <i className="fa fa-github" aria-hidden="true"></i> GitHub</a>
            </div>
            <div>
            <label>Contact me </label> 
            <a href="https://www.linkedin.com/in/chirag-chouhan-b48311228/" target="_blank" className="ln"  >  <i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
            </div>
        </Content>
    </Wrapper>
)

export default Footer;