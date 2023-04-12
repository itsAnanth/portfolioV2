import { Landing as LandingDiv, LandingContainer, LandingContainerLeft, LandingContainerRight, LeftContent, LandingSocial, RightContent, LandingImage } from "./Landing.styled";
import {
    FaGithub,
    FaDiscord,
    FaTwitter,
    FaStackOverflow
} from 'react-icons/fa';
import landingImage from '../../assets/png/image_processing20200510-10310-1kcucxz.png';
import Typewriter from "typewriter-effect";
import landingData from '../../data/landing.json';

function Landing() {

    return (
        <LandingDiv>
            <LandingContainer>
                <LandingContainerLeft>
                    <LeftContent>
                        <LandingSocial target="_blank" href={landingData.socials.github}>
                            <FaGithub />
                        </LandingSocial>
                        <LandingSocial target="_blank" href={landingData.socials.discord}>
                            <FaDiscord />
                        </LandingSocial>
                        {/* <LandingSocial href={landingData.socials.github}>
                            <FaTwitter />
                        </LandingSocial> */}
                        <LandingSocial target="_blank" href={landingData.socials.stackoverflow}>
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
                        <Typewriter
                            
                            options={{ wrapperClassName: 'wrap', skipAddStyles: true, loop: true, autoStart: true, strings: ['Professional Bug Dev', 'Student'] }}
                        ></Typewriter>

                        {/* <p>Not so interesting stuff goes here</p> */}
                    </RightContent>
                </LandingContainerRight>
            </LandingContainer>
        </LandingDiv>
    )
}

export default Landing;