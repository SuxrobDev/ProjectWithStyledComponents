import React from 'react';
import {Img , ImgWrapper ,SubTitle , Heading , TopLine , InfoRow, InfoSec , InfoColumn , TextWrapper} from "./InfoSection.elements";
import {Container , Button} from "../../globalStyles";
import {Link} from "react-router-dom";

const InfoSection = ({start , alt ,img ,primary , topLine , headLine , description , buttonLabel, lightBg ,imgStart , lightTopLine , lightText , lightTextDesc}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                                <Link to="/sign-up">
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
};

export default InfoSection;