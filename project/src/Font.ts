import {Montserrat} from "next/font/google";
import {Poppins} from "next/font/google";

const montserrat= Montserrat({
  subsets:['latin'],
  weight:['300','400','500','900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
})

const poppins= Poppins({
    subsets:['latin'],
    weight:['400','500','900','700'],
    style: ['normal', 'italic'],
    variable: '--font-poppins',
  })