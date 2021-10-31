import React from 'react';
import {SocialIconLink , SocialIcons , WebsiteRights , SocialIcon , SocialLogo , SocialMediaWrap , SocialMedia , FooterLink , FooterLinkTitle , FooterLinksItems , FooterLinksWrapper , FooterLinksContainer ,FormInput, Form, FooterSubText, FooterSubHeading, FooterSubscription, FooterContainer} from "./Footer.elements";
import {Button} from "../../globalStyles";
import {FaFacebook , FaInstagram , FaYoutube , FaTwitter , FaLinkedin} from "react-icons/fa";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>You can unsubscribe at any time.</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email"/>
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                            ULTRA
                    </SocialLogo>
                    <WebsiteRights>ULTRA &copy; 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink aria-label="Facebook" href="/" target="_blank">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink aria-label="Instagram" href="/" target="_blank">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink rel="noopener noreferrer" aria-label="Youtube" href="/" target="_blank">
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink aria-label="Twitter" href="/" target="_blank">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink aria-label="Linkedin" href="/" target="_blank">
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;