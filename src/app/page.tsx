"use client"

import '@/src/app/globals.css'
import Header from "@/src/app/components/Header";
import HomeComponent from "@/src/app/components/Home";
import Service from "@/src/app/components/Service";
import Destination from "@/src/app/components/Destination";
import Gallery from "@/src/app/components/Gallery";
import Contact from "@/src/app/components/Contact";
import Footer from "@/src/app/components/Footer";
import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
        const ScrollReveal = require("scrollreveal").default;
        const sr = ScrollReveal({
          distance: '50px',
          duration: 1000,
          reset: false, 
        });

        sr.reveal('.section__header', { 
            origin: 'bottom',
            interval: 600,
            delay: 300
        }); 

        sr.reveal('.section__description', { 
            origin: 'bottom',
            interval: 600,
            delay: 600
        }); 
    
        sr.reveal('.tour__search', { 
            origin: 'bottom',
            interval: 600,
            delay: 900
        }); 

        sr.reveal('.service__card', { 
            origin: 'bottom',
            interval: 600,
            delay:900,
            afterReveal: (el: HTMLElement) => {
              el.style.transform = '';   
              el.style.transition = '';  
            }
        }); 

        sr.reveal('.destination__card', { 
            origin: 'bottom',
            interval: 600,
            delay:900,
            afterReveal: (el: HTMLElement) => {
              el.style.transform = '';   
              el.style.transition = '';  
            }
        }); 

        sr.reveal('.gallery__card', { 
            origin: 'bottom',
            interval: 600,
            delay:900
        }); 

        sr.reveal('.contact__content', { 
            origin: 'bottom',
            interval: 600,
            delay:900
        }); 

        sr.reveal('footer', { 
            origin: 'bottom',
            interval: 600,
            delay:900
        }); 

    }, []); 

  return (
    <>
      <Header></Header>
      <HomeComponent></HomeComponent>
      <Service></Service>
      <Destination></Destination>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
