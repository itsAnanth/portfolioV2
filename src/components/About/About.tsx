import { useTheme } from 'styled-components';
import { AboutContainer, AboutContent, About as AboutDiv, AboutImage } from "./About.styled";
import { Divider } from '../';
import about from '../../data/about.json';


function About() {
    const theme = useTheme();

    const aboutContent = about.content.split('\n');
    

    

    return (
        <AboutDiv>
            <Divider />
            <AboutContainer>
                <AboutContent>
                    <h2>{about.heading}</h2>
                    <p>{aboutContent.map((item, i) => (<span key={i}>{item} <br /><br /></span>))}</p>
                </AboutContent>
                <AboutImage
                    src={theme.aboutimg1}
                />
            </AboutContainer>
        </AboutDiv>
    )
}

export default About;