// Images
import lover from './lover.png';
import nights from './nights.png';
import perfect from './perfect.png';
import reactLogo from './react.svg';

// Artist Images
import arijit from './artists/arijit.png';
import taylor from './artists/taylor.png';
import karan from './artists/karan.png';
import atif from './artists/atif.png';
import justin from './artists/justin.png';

// Devotional Images
import deva from './devotional/deva.png';
import durga from './devotional/durga.png';
import krishna from './devotional/krishna.png';
import ram from './devotional/ram.png';
import siya from './devotional/siya.png';

// Developer Images
import aditi from './developers/aditi.png';
import aditya from './developers/aditya.png';
import anjali from './developers/anjali.png';
import krishnaBansal from './developers/bansal.png';

// Icons
import facebook from './icons/facebook.png';
import instagram from './icons/insta.png';
import playStore from './icons/play.png';
import appStore from './icons/appStore.png';
import arrow from './icons/arrow.png';
import bell from './icons/bell.png';
import clockIcon from './icons/clock_icon.png';
import home from './icons/home.png';
import leftArrow from './icons/left_arrow.png';
import like from './icons/like.png';
import loop from './icons/loop.png';
import mic from './icons/mic.png';
import miniPlayer from './icons/mini-player.png';
import next from './icons/next.png';
import pause from './icons/pause.png';
import play from './icons/play.png';
import play1 from './icons/play1.png';
import plays from './icons/plays.png';
import plus from './icons/plus.png';
import prev from './icons/prev.png';
import queue from './icons/queue.png';
import rightArrow from './icons/right_arrow.png';
import search from './icons/search.png';
import shuffle from './icons/shuffle.png';
import speaker from './icons/speaker.png';
import stack from './icons/stack.png';
import volume from './icons/volume.png';
import zoom from './icons/zoom.png';

// Songs
import aayeGayeRaghunandan from './Aaye Gaye Raghunandan - PagalWorld.mp3';
import aeMereWatanKeLogon from './Ae Mere Watan Ke Logon - PagalWorld.mp3';
import dieWithASmile from './Die With A Smile - PagalWorld.mp3';
import ekJaisaHaalTeraMera from './Ek Jaisa Haal Tera Mera - PagalWorld.mp3';
import fellForYou from './Fell For You - PagalWorld.mp3';
import huaMain from './Hua Main x Finding Her - PagalWorld.mp3';
import ishqHai from './song2.mp3';
import kailashKherTeriDeewani from './song2.mp3';
import maand from './song2.mp3';
import nainaJoMileHai from './Naina Jo Mile Hai Sarkar Se - PagalWorld.mp3';
import song1 from './song1.mp3';
import song2 from './song2.mp3';
import jhol from './jhol.mp3';
import sanamre from './sanamre.mp3';
import bulleya from './bulleya.mp3';
import khairiyat from './khairiyat.mp3';
import mastMagan from './mastmagan.mp3';
import img8 from './img8.jpg';
import mainShivKaHu from './mainShivKaHu.mp3';


// Exporting all assets
export const assets = {
  images: {
    lover,
    nights,
    perfect,
    reactLogo,
    artists: {
      arijit,
      taylor,
      karan,
      atif,
      justin,
    },
    devotional: {
      deva,
      durga,
      krishna,
      ram,
      siya,
    },
    developers: {
      aditi,
      aditya,
      anjali,
      krishnaBansal,
    },
  },
  icons: {
    facebook,
    instagram,
    playStore,
    appStore,
    arrow,
    bell,
    clockIcon,
    home,
    leftArrow,
    like,
    loop,
    mic,
    miniPlayer,
    next,
    pause,
    play,
    play1,
    plays,
    plus,
    prev,
    queue,
    rightArrow,
    search,
    shuffle,
    speaker,
    stack,
    volume,
    zoom,
  },
  songs: {
    aayeGayeRaghunandan,
    aeMereWatanKeLogon,
    dieWithASmile,
    ekJaisaHaalTeraMera,
    fellForYou,
    huaMain,
    ishqHai,
    kailashKherTeriDeewani,
    maand,
    mainShivKaHu,
    nainaJoMileHai,
    song1,
    song2,
    jhol,
    sanamre,
    bulleya,
    khairiyat,
    mastMagan,
  },
};

export const albumData = [
  {
    id: 0,
    name: "Top 50 Global",
    image: img8,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#2a4365",
  },
  {
    id: 1,
    name: "Bollywood Hits",
    image: img8,
    desc: "The best of Bollywood music",
    bgColor: "#ff6f61",
  },
  {
    id: 2,
    name: "Devotional Songs",
    image: img8,
    desc: "Feel the divine connection",
    bgColor: "#ffd700",
  },
];

export const songData = [
  {
    id: 0,
    name: "Aaye Gaye Raghunandan",
    image: assets.images.devotional.ram, // Correct devotional image
    file: assets.songs.aayeGayeRaghunandan,
    desc: "A devotional song to uplift your spirit",
    duration: "3:45",
    artist: "Unknown Artist",
    title: "Aaye Gaye Raghunandan",
  },
  {
    id: 1,
    name: "Ae Mere Watan Ke Logon",
    image: assets.images.artists.lata, // Add an appropriate artist image
    file: assets.songs.aeMereWatanKeLogon,
    desc: "A patriotic song for the nation",
    duration: "5:20",
    artist: "Lata Mangeshkar",
    title: "Ae Mere Watan Ke Logon",
  },
  {
    id: 2,
    name: "Die With A Smile",
    image: assets.images.lover, // Use a generic image
    file: assets.songs.dieWithASmile,
    desc: "A soulful melody to brighten your day",
    duration: "4:10",
    artist: "Unknown Artist",
    title: "Die With A Smile",
  },
  {
    id: 3,
    name: "Ek Jaisa Haal Tera Mera",
    image: assets.images.artists.arijit, // Arijit Singh's image
    file: assets.songs.ekJaisaHaalTeraMera,
    desc: "A romantic track to set the mood",
    duration: "3:30",
    artist: "Arijit Singh",
    title: "Ek Jaisa Haal Tera Mera",
  },
  {
    id: 4,
    name: "Fell For You",
    image: assets.images.nights, // Use a generic image
    file: assets.songs.fellForYou,
    desc: "A love song to cherish",
    duration: "3:50",
    artist: "Unknown Artist",
  },
  {
    id: 5,
    name: "Song One",
    image: assets.images.perfect, // Use a generic image
    file: assets.songs.aayeGayeRaghunandan,
    desc: "Put a smile on your face with these happy tunes",
    duration: "3:00",
    artist: "Arijit Singh",
  },
  {
    id: 6,
    name: "Song Two",
    image: assets.images.reactLogo, // Use a placeholder image
    file: assets.songs.song2,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:20",
    artist: "Arijit Singh",
  },
  {
    id: 7,
    name: "Song Three",
    image: assets.images.reactLogo, // Use a placeholder image
    file: assets.songs.song2,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:32",
    artist: "Arijit Singh",
  },
  {
    id: 8,
    name: "Song Four",
    image: assets.images.reactLogo, // Use a placeholder image
    file: assets.songs.song2,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:50",
  },
  {
    id: 9,
    name: "Song Five",
    image: assets.images.reactLogo, // Use a placeholder image
    file: assets.songs.song1,
    desc: "Put a smile on your face with these happy tunes",
    duration: "3:10",
  },
  {
    id: 10,
    name: "Song Six",
    image: assets.images.reactLogo, // Use a placeholder image
    file: assets.songs.song2,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:45",
  },
];