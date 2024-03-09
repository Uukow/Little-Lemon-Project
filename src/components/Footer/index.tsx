import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Content, Copyright, Column, Image } from "./styles";
import restaurant from "../../assets/restaurant.jpg";

const Footer: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Content>
        <Image src={restaurant} alt="Restaurant Food" />
        <Column>
          <h4>
            Little
            <br />
            Lemon
          </h4>
          <ul>
            <li>
              {" "}
              <HashLink to="/">Home</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/#">Menu</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/bookings">Reservations</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/#">Order Online</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/#">Login</HashLink>{" "}
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Contact</h4>
          <ul>
            <li>
              <address>
                Little Lemon <br />
                331 E Chicago <br />
                LaSalle Street Chicago,
                <br />
                Illinois 60602 <br />
                USA
              </address>
            </li>
            <li>
              {" "}
              <a href="tel:+252617119990" target="_blank" rel="external">
                +252 617 119990
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="mailto:abdulkadiruukow@gmail.co"
                target="_blank"
                rel="external"
              >
                abdulkadiruukow@gmail.com
              </a>{" "}
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Social Media</h4>
          <ul>
            <li>
              {" "}
              <a
                href="https://www.facebook.com/uukow2017"
                target="_blank"
                rel="external"
              >
                Facebook
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="https://www.instagram.com/uukow_media"
                target="_blank"
                rel="external"
              >
                Instagram
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="https://twitter.com/abdulkadiruukow"
                target="_blank"
                rel="external"
              >
                Twitter
              </a>{" "}
            </li>
          </ul>
        </Column>
      </Content>
      <Copyright>
        <span>Developed by Abdulkadir Uukow.</span>
        <p>© 2024 Little Lemon. All rights reserved.</p>
      </Copyright>
    </Container>
  );
};

export default Footer;
