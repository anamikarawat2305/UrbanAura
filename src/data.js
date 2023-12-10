// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
 
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import Features1Img from './assets/img/features-1.png';
import Features2Img from './assets/img/features-2.png';
import ChairImg from './assets/img/chair.png';
import BedImg from './assets/img/bed.png';
import CupboardImg from './assets/img/cupboard.png';
import LightingImg from './assets/img/lighting.png';

import TestimonialImg from './assets/img/testimonial.png';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';
import Avatar4Img from './assets/img/avatar-4.png';

export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'features',
    href: 'features',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

export const hero = {
  title: 'Creative Home Simplify your Furniture',
  subtitle:
    'Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto',
  buttonText: 'Try Now',
};

export const stats = [
  {
    value: '1',
    text: 'Year Experience',
  },
  {
    value: '1',
    text: 'Opened in the country',
  },
  {
    value: '10k+',
    text: 'Furniture ideas',
  },
  {
    value: '260+',
    text: 'Variant Furniture',
  },
];

export const features = {
  image: <Features1Img />,
  title: 'We Create your home more aesthetic',
  subtitle:
    'Furniture power is a software as services for multipurpose business management system',
  buttonText: 'Show Now',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Valuation Services',
      subtitle:
        'Sometimes features require a short description.  This can be detailed description',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Development of Furniture Models',
      subtitle:
        'Sometimes features require a short description.  This can be detailed description',
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: 'The Best Furniture of your choice',
    subtitle:
      'Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services.',
  },
};

export const newInStore = {
  title: 'New In Technology Now',
  subtitle: 'Get the latest items immediately with this...',
  link: 'Check all',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'chair',
      image: <ChairImg />,
    },
    {
      name: 'bed',
      image: <BedImg />,
    },
    {
      name: 'cupboard',
      image: <CupboardImg />,
    },
    {
      name: 'lighting',
      image: <LightingImg />,
    },
  ],
};

export const testimonial = {
  title: 'What people are saying about us',
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'Josh Smith',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
    {
      avatar: <Avatar2Img />,
      name: 'Brandi Johns',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
    {
      avatar: <Avatar3Img />,
      name: 'Paula Pfeffer',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
    {
      avatar: <Avatar4Img />,
      name: 'Paula Pfeffer',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
  ],
};


export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: '#',
    },
    {
      icon: <IoLogoInstagram />,
      href: '#',
    },
    {
      icon: <IoLogoGithub />,
      href: '#',
    },
    {
      icon: <IoLogoFacebook />,
      href: '#',
    },
  ],
  copyright: 'UrbanAura 2023 - All Rights Reserved.',
};
