import React from 'react';
import styled from 'styled-components';
import { commonStyles } from '../../styles/commonStyles';
import { Box } from '@mui/system';
import { Icon } from '@iconify/react';
import { IconButton } from '@mui/material';

const FooterWrapper = styled.footer`
  padding: 20px;
  background-color: #370054;
  color: #fff;
  margin-top: 20px;
  
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const FooterLogo = styled.img`
  width: 150px;
  margin-right: 20px;
`;

const FooterLocation = styled.p`
  font-size: 10px;
  margin: 5px;
  margin-left: 25px;
`;

const FooterLinks = styled.ul`
  
  color: #370054;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  `;

const FooterLink = styled.li`
  & + & {
    // margin-left: 20px;
    color: #370054;
    margin: 0.5rem 0;
  }
`;

const FooterSocialLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  `;

const FooterSocialLink = styled.li`
  & + & {
    margin: 0.5rem 0;
    // margin-left: 20px;
  }
  
`;
const FooterCopyright = styled.p`
  margin: 0;
`;

const socialList = [
  { name: "Twitter", link: "" },
  { name: "Facebook", link: "" },
  { name: "LinkedIn", link: "" },
  { name: "GitHub", link: "" },
]
const footerItemList = [
  { name: "About Us", link: "/about" },
  { name: "Our Clients", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Our Team ", link: "/about" },
  { name: "Contact Us", link: "/contact" },
]

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <div>
        <FooterLogo src="./images/white.png" alt="Logo" />
        <FooterLocation>GP cha, 19/1, Mohakhali,</FooterLocation>
        <FooterLocation>Dhaka, Bangladesh</FooterLocation>
      </div>
      <nav>

        <FooterLinks>
          {footerItemList?.map((item, index) => <FooterLink key={index}> 
            <a href={item.link} style={commonStyles.footerLink} key={index}>{item.name}</a>
          </FooterLink>)}
        </FooterLinks>
      </nav>
      <FooterSocialLinks>
        {socialList?.map((item, index) => <FooterSocialLink key={index}>
          <a href="#" style={commonStyles.footerLink}>{item.name}</a>
        </FooterSocialLink>)}
      </FooterSocialLinks>
      <FooterCopyright>
        © Copyright - <b>Carriastic</b> - 2022. All Rights Reserved.
      </FooterCopyright>
    </FooterContent>

    <Box style={{ display: "flex", justifyContent: "center" }}>
      <IconButton aria-label="delete" size="small">
        <Icon icon="ic:baseline-facebook" color="white" width={32} />
      </IconButton>
      <Icon icon="mdi-light:home" color="white" width={32} />
      <Icon icon="mdi-light:home" color="white" width={32} />
    </Box>

  </FooterWrapper>
);

export default Footer;
