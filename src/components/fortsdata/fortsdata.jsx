import SudhagadImg from "../../assets/Sudhagad.jpg";
import HarishchandragadImg from "../../assets/HarishchandragadFort.jpg";
import DaulatabadImg from "../../assets/Daulatabad Fort.jpg";
import PanhalaImg from "../../assets/Panhala Fort.jpg"; 
import VijaydurgImg from "../../assets/Vijaydurg Fort.jpg";
import ShivneriImg from "../../assets/Shivneri Fort.jpg";
import LohagadImg from "../../assets/Lohagad Fort.jpg";
import TornaImg from "../../assets/Torna Fort.jpg";
import RajgadImg from "../../assets/Rajgad Fort.png";
import SinhagadImg from "../../assets/Sinhagad Fort.jpeg";
import RaigadImg from "../../assets/Raigad Fort.jpg";
import PratapgadImg from "../../assets/Pratapgad Fort.jpg";
import PurandarImg from "../../assets/Purandar Fort.jpg";
import KorigadImg from "../../assets/Korigad Fort.jpg"; 
import RatangadImg from "../../assets/Ratangad Fort.jpg";
import MurudJanjiraImg from "../../assets/Murud-Janjira Fort.jpg";
import SindhudurgImg from "../../assets/Sindhudurg Fort.jpg";
import VisapurImg from "../../assets/Visapur Fort.jpg";
import React from "react";


const fortsData = [
  {
    name: "Sudhagad Fort",
    year: "2nd Century BC",
    image: SudhagadImg,
    brief: "Considered as a capital alternative to Raigad.",
    bulletPoints: [
      "Well-preserved structure",
      "Bhorai Devi temple",
      "Trekking destination"
    ]
  },
  {
    name: "Harishchandragad Fort",
    year: "6th Century AD",
    image: HarishchandragadImg,
    brief: "Ancient fort with caves and the Konkan Kada cliff.",
    bulletPoints: [
      "Saptatirtha Pushkarni",
      "Kedareshwar Cave",
      "Famous for sunrise view"
    ]
  },
  {
    name: "Daulatabad Fort",
    year: "1187 AD",
    image: DaulatabadImg,
    brief: "Built by Yadavas, famous for its defense mechanisms.",
    bulletPoints: [
      "Moat with crocodiles",
      "Only one entrance",
      "Secret tunnels"
    ]
  },
  {
    name: "Panhala Fort",
    year: "1178 AD",
    image: PanhalaImg,
    brief: "Largest fort in Deccan region.",
    bulletPoints: [
      "Near Kolhapur",
      "Linked to Rani Laxmibai",
      "Massive fortification walls"
    ]
  },
  {
    name: "Vijaydurg Fort",
    year: "1205 AD",
    image: VijaydurgImg,
    brief: "Sea fort built by Shilahara dynasty and strengthened by Shivaji.",
    bulletPoints: [
      "Surrounded by sea on three sides",
      "Naval base",
      "Underground tunnel exists"
    ]
  },
  {
    name: "Shivneri Fort",
    year: "1599 AD",
    image: ShivneriImg,
    brief: "Birthplace of Chhatrapati Shivaji Maharaj.",
    bulletPoints: [
      "Located in Junnar",
      "Well-preserved structure",
      "Includes Shivai Devi temple"
    ]
  },
  {
    name: "Lohagad Fort",
    year: "1564 AD",
    image: LohagadImg,
    brief: "Hill fort near Lonavala with a scorpion-tail-shaped entrance.",
    bulletPoints: [
      "Linked to Visapur Fort",
      "Famous for Monsoon treks",
      "Used to store treasury"
    ]
  },
  {
    name: "Torna Fort",
    year: "1643 AD",
    image: TornaImg,
    brief: "First fort captured by Shivaji Maharaj at age 16.",
    bulletPoints: [
      "Also called Prachandagad",
      "Highest fort near Pune",
      "Popular trek"
    ]
  },
  {
    name: "Rajgad Fort",
    year: "1646 AD",
    image: RajgadImg,
    brief: "First capital of Shivaji’s empire.",
    bulletPoints: [
      "Large and complex",
      "Balekilla and Padmavati Machi",
      "Panoramic views"
    ]
  },
  {
    name: "Sinhagad Fort",
    year: "1647 AD",
    image: SinhagadImg,
    brief: "Famous for the battle involving Tanaji Malusare.",
    bulletPoints: [
      "Near Pune",
      "Known for bravery",
      "Great trekking spot"
    ]
  },
  {
    name: "Raigad Fort",
    year: "1674 AD",
    image: RaigadImg,
    brief: "Capital fort of Chhatrapati Shivaji Maharaj’s empire.",
    bulletPoints: [
      "Located in Raigad district",
      "Strategic military base",
      "Contains Shivaji’s samadhi"
    ]
  },
  {
    name: "Pratapgad Fort",
    year: "1656 AD",
    image: PratapgadImg,
    brief: "Site of Shivaji-Afzal Khan battle.",
    bulletPoints: [
      "Located near Mahabaleshwar",
      "Statue of Shivaji Maharaj",
      "Divided into upper and lower forts"
    ]
  },
  {
    name: "Purandar Fort",
    year: "1600s",
    image: PurandarImg,
    brief: "Birthplace of Sambhaji Maharaj.",
    bulletPoints: [
      "Military training base",
      "Twin fort Vajragad",
      "Strategic Maratha fort"
    ]
  },
  {
    name: "Korigad Fort",
    year: "1500 AD",
    image:  KorigadImg,
    brief: "Near Lonavala, known for intact walls and temples.",
    bulletPoints: [
      "Two lakes on top",
      "Sturdy stone walls",
      "Scenic views"
    ]
  },
  {
    name: "Ratangad Fort",
    year: "1600s",
    image: RatangadImg,
    brief: "Favorite fort of Shivaji Maharaj.",
    bulletPoints: [
      "Located in Bhandardara",
      "Natural rock hole (Nedhe)",
      "Water cisterns"
    ]
  },
  {
    name: "Murud-Janjira Fort",
    year: "17th Century",
    image: MurudJanjiraImg,
    brief: "Impenetrable sea fort of the Siddis.",
    bulletPoints: [
      "Only fort undefeated by Marathas",
      "Located in Arabian Sea",
      "Accessible only by boat"
    ]
  },
  {
    name: "Sindhudurg Fort",
    year: "1664 AD",
    image: SindhudurgImg,
    brief: "Built on an island by Shivaji for naval defense.",
    bulletPoints: [
      "Sea-facing fort",
      "Handprint of Shivaji",
      "Well-preserved"
    ]
  },
  {
    name: "Visapur Fort",
    year: "1713 AD",
    image: VisapurImg,
    brief: "Twin fort of Lohagad with expansive ruins.",
    bulletPoints: [
      "Higher than Lohagad",
      "British captured in 1818",
      "Panoramic views"
    ]
  },

];

export default fortsData;
