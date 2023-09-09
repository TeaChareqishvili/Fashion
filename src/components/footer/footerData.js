import img1 from "../../assets/footerimg1.webp";
import img2 from "../../assets/footerimg2.webp";
import img3 from "../../assets/footerimg3.webp";
import img4 from "../../assets/footerimg4.webp";
import img5 from "../../assets/footerimg5.webp";
import img6 from "../../assets/footerimg6.webp";

import payment from "../../assets/payment.webp";
import visa from "../../assets/visa.webp";
import discover from "../../assets/disocver.webp";
import paypal from "../../assets/paypal.webp";
import cirrus from "../../assets/cirrus.webp";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const footerSlide =[
    {
        image:img1
    },
    {
        image:img2
    },
    {
        image:img3
    },
    {
        image:img4
    },
    {
        image:img5
    },
    {
        image:img6
    },
    {
        image:img1
    },
    {
        image:img3
    },
    {
        image:img2
    },
    {
        image:img6
    },
]

export {footerSlide}

const pay = [
    {
       image:payment
    },
    {
        image:visa
     },
     {
        image:discover
     },
     {
        image:paypal
     },
     {
        image:cirrus
     },
];

export {pay}

const social = [
    {
        soc:<FaInstagram style={{ width: '20px', height: '20px' }} />,
        link: 'https://www.instagram.com'
    },
    {
        soc:<FaFacebook style={{ width: '20px', height: '20px' }}/>,
        link:'https://www.facebook.com'
    },
    {
        soc:<FaTwitter style={{ width: '20px', height: '20px' }}/>,
        link:'https://www.twitter.com',
    },
    {
        soc:<FaYoutube style={{ width: '20px', height: '20px' }}/>,
        link:'https://www.youtube.com'
    },
    {
        soc:<FaPinterest style={{ width: '20px', height: '20px' }}/>,
        link:'https://www.pinterest.com'
    }
]

export {social}

