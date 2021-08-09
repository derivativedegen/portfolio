import conspira from "./images/projects/conspira.png";
import pyramid from "./images/projects/pyramid.png";
import grammable from "./images/projects/grammable.png";
import mindshift from "./images/projects/mindshift.png";
import nota from "./images/projects/nota.png";
import tacoloco from "./images/projects/tacoloco.png";
import todos from "./images/projects/todoster.png";
import mello from "./images/projects/mello.png";
import portfolio from "./images/projects/portfolio.png";
import flixer from "./images/projects/flixer.png";
import cointrack from "./images/projects/cointrack.png";
import nftwars from "./images/projects/nftwars.png";
import raremojis from "./images/projects/raremojis.png";

export const projectData = [
  {
    title: "NFT Wars",
    description: `NFT Wars was created for a client in the NFT gaming space, running on both the Ethereum 
    and Polygon Blockchain Networks.It features front-end blockchain libraries such as Web3 and Ethers, 
    seemless blockchain network switching, WebGL for Unity game implementation, Redux for state management, 
    IPFS data fetching, ERC20 staking and ERC721 minting. Users can buy the project's WAR token in-app via 
    Uniswap and stake them to earn yield in the form of FIGHT tokens. They can also play the in-app game and 
    battle other players to earn more FIGHT tokens. These FIGHT tokens can be used to purchase rare, exclusive 
    NFTs from the built-in NFT Marketplace. Users can also supply liquidity in-app to the ETH-WAR pool on 
    Uniswap.`,
    technologies: `React, Redux, Web3, Ethers, IPFS, ERC721, ERC20, Unity, WebGL, React Router, Async/Await Promises, 
      JavaScript, HTML, CSS, Git, Netlify`,
    image: nftwars,
    date_created: "March 2021 - July 2021",
    link: "https://app.nftwars.io/",
    github: "https://github.com/derivativedegen/nft_wars",
    test_user: "Must have Web3-enabled browser or wallet extension.",
    test_password: "Wallet private key",
  },
  {
    title: "Raremojis",
    description: `Raremojis was a NFT Project created for a client featuring front-end blockchain libraries 
    such as Web3 and Ethers, Redux for state management, IPFS data fetching, and ERC721 minting. Users can 
    connect their web3 enabled browser wallets with the app, facilitated by Web3Modal. They can then mint 
    NFT Tokens by paying for a transaction to the Raremoji's smart contract on the EVM, and receive a 
    "Raremoji" - a combination of different emoji faces, eyes, mouths, and accessories. Once minted, user's 
    can see their full collection on the "My Collection" page, and have easy access to listing their tokens 
    on the leading NFT auction site, Opensea.`,
    technologies: `React, Redux, Web3, Ethers, IPFS, ERC721, React Router, Functional Components, Async/Await Promises, 
      JavaScript, HTML, CSS, Git, Netlify`,
    image: raremojis,
    date_created: "July 2021",
    link: "https://raremojis.com/",
    github: "https://github.com/derivativedegen/raremojis",
    test_user: "Must have Web3-enabled browser or wallet extension.",
    test_password: "Wallet private key",
  },
  {
    title: "Pyramid",
    description: `Pyramid was designed and built for a cryptocurrency hedge fund startup.
        It is a single-page web app which pulls live data from the Ethereum blockchain, 
        using the Web3 JS library, to feed the statistics featured on each asset's page. 
        Additional functionality includes the ability to chart and buy assets directly 
        on the site.`,
    technologies: "React, Web3, Infura.io, JavaScript, HTML, CSS, Git, Netlify",
    image: pyramid,
    date_created: "November 2020",
    link: "https://pyramid-app.netlify.app",
    github: "https://github.com/derivativedegen/food_pyramid",
  },
  {
    title: "Cointrack",
    description: `Cointrack is a simple cryptocurrency price tracking application. It features JavaScript Async/Await 
    requests to fetch the top 250 cryptocurrencies by market cap from Coingecko.com's API.
    With built-in instant search utilizing React's useState, users are able to easily locate crypto symbols and names.`,
    technologies:
      "React, Coingecko API, Hooks, Functional Components, Async/Await Promises, JavaScript, HTML, CSS, Git",
    image: cointrack,
    date_created: "June 2021",
    link: "https://cointrack-app.netlify.app/",
  },
  {
    title: "Flixer",
    description: `Flixer is a clone of Netflix's web interface. This app was created using React 
    functional components, Redux state management, axios async/await requests, and deployed on Google Firebase. 
    Firebase Authentication allows user account creation, and Firebase Firestore is the database used to store 
    customer and product records. Additional functionality includes customer subscription checkout powered by 
    the Stripe Firebase Extension and Stripe API integration. Once a user is subscribed, movie data is pulled 
    from The Movie Database (TMDB) for trending movies and movie poster images. Movie trailers are integrated 
    from YouTube if one is successfully found.`,
    technologies:
      "React, Redux, Stripe API, Firebase Authentication, Firebase Firestore, JavaScript, HTML, CSS, Git",
    image: flixer,
    date_created: "February 2021",
    link: "https://flix-97e6f.web.app/profile",
    test_user: "test@test.com",
    test_password: "abc123",
    cc: {
      number: "4242 4242 4242 4242",
      expiration: "04/24",
      cvv: "424",
      billing: "Anything",
    },
  },
];
