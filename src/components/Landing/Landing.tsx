import { Landing as LandingDiv, LandingContainer, LandingContainerLeft, LandingContainerRight, LeftContent, LandingSocial, RightContent, LandingImage } from "./Landing.styled";
import {
    FaGithub,
    FaDiscord,
    FaTwitter,
    FaStackOverflow
} from 'react-icons/fa';
import landingImage from '../../assets/png/image_processing20200510-10310-1kcucxz.png';

function Landing() {

    return (
        <LandingDiv>
            <LandingContainer>
                <LandingContainerLeft>
                    <LeftContent>
                        <LandingSocial>
                            <FaGithub />
                        </LandingSocial>
                        <LandingSocial>
                            <FaDiscord />
                        </LandingSocial>
                        <LandingSocial>
                            <FaTwitter />
                        </LandingSocial>
                        <LandingSocial>
                            <FaStackOverflow />
                        </LandingSocial>
                    </LeftContent>
                </LandingContainerLeft>
                <LandingImage 
                    src={landingImage}
                    alt="moyai"
                >

                </LandingImage>
                <LandingContainerRight>
                    <RightContent>
                        <h6>Full Stack Developer</h6>
                        <h1>Ananth</h1>
                        <p>Not so interesting stuff goes here</p>
                    </RightContent>
                </LandingContainerRight>
            </LandingContainer>
        </LandingDiv>
    )
}

export default Landing;