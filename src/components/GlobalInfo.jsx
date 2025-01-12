import { FaFacebookF, FaInstagram, FaTiktok , FaPhone, FaLinkedin } from "react-icons/fa";
import { FaCompactDisc } from "react-icons/fa";
import { GiMusicSpell,GiMusicalNotes,GiTechnoHeart,GiGuitarBassHead   } from "react-icons/gi";
import { SiYoutubemusic,SiMusicbrainz } from "react-icons/si";
import { TbBrandNeteaseMusic } from "react-icons/tb";
import { MdLibraryMusic } from "react-icons/md";

export const conctInfo = {
    phone: "+381 62-96-12-186",
    email: "takikibodjs@gmail.com",
  };

export const SocialShare = [
    { Social: <FaFacebookF />, link: "https://www.facebook.com/people/Djs-Taki-Kibo/100063518410015/" },
    { Social: <FaInstagram />, link: "https://www.instagram.com/djs_taki_kibo/" },
    { Social: <FaTiktok />, link: "https://www.tiktok.com/@djs_taki_kibo" },
    { Social: <FaPhone />, link: 'tel:$(conctInfo.phone)' },
  ];
  
  export const SocialShareDesinger = [
    { Social: <FaFacebookF />, link: "https://www.facebook.com/dobri99/" },
    { Social: <FaInstagram />, link: "https://www.instagram.com/_dobrijevic__/" },
    { Social: <FaLinkedin />, link: "https://www.linkedin.com/in/stevan-dobrijevi%C4%87-5ab260252/" },
    { Social: <FaPhone />, link: 'tel:+381691022966' },
  ];
export const ServiceContent = [
  {
    icon: <GiMusicSpell />,
    title: "music.trance",
    descriptions: "music.tranceDescription",
    delayAnimation: "",
  },
  {
    icon: <SiYoutubemusic  />,
    title: "music.house",
    descriptions: "music.houseDescription",
    delayAnimation: "200",
  },
  {
    icon: <SiMusicbrainz  />,
    title: "music.deepHouse",
    descriptions: "music.deepHouseDescription",
    delayAnimation: "400",
  },
  {
    icon: <TbBrandNeteaseMusic  />,
    title: "music.electro",
    descriptions: "music.electroDescription",
    delayAnimation: "600",
  },
  {
    icon: <GiMusicalNotes />,
    title: "music.folk",
    descriptions: "music.folkDescription",
    delayAnimation: "800",
  },
  {
    icon: <MdLibraryMusic />,
    title: "music.90s",
    descriptions: "music.90sDescription",
    delayAnimation: "1000",
  },
  {
    icon: <GiTechnoHeart />,
    title: "music.techno",
    descriptions: "music.technoDescription",
    delayAnimation: "1200",
  },
  {
    icon: <GiGuitarBassHead />,
    title: "music.exYu",
    descriptions: "music.exYuDescription",
    delayAnimation: "1400",
  },
  {
    icon: <FaCompactDisc/>,
    title: "music.2000s",
    descriptions: "music.2000sDescription",
    delayAnimation: "1600",
  },
];