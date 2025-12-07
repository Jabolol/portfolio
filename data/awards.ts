import Trophy from "$icons/trophy.tsx";
import { CardProps } from "~/types.ts";
import { TROPHY_COLOR } from "~/constants/index.ts";

export const awards: CardProps[] = [
  {
    title: "NYU Hackathon for Social Good",
    description:
      "1st place in NYU Social Good Hackathon using Decoded Quantum Interferometry.",
    Component: Trophy,
    inject: TROPHY_COLOR,
    link:
      "https://www.linkedin.com/posts/javierriosur_im-excited-to-share-that-my-team-and-i-won-activity-7323101788851650560-nkWd",
    date: "May 2025",
  },
  {
    title: "ETHGlobal San Francisco",
    description:
      "Polygon Best Consumer App (1st), Uniswap Foundation (3) and NounsDAO (3) prizes for integrations and public infra.",
    Component: Trophy,
    inject: TROPHY_COLOR,
    link: "https://ethglobal.com/showcase/autoretrofunding-bxy5k",
    date: "Oct 2024",
  },
  {
    title: "EU Sparks for Climate Citizens",
    description:
      "Winner of the Madrid edition with a sustainable tourism redesign for the Canary Islands.",
    Component: Trophy,
    inject: TROPHY_COLOR,
    link:
      "https://www.linkedin.com/posts/javierriosur_brussels-activity-7203036962813808640-3BZf",
    date: "Jun 2024",
  },
  {
    title: "ETHGlobal London",
    description:
      "Morpho Blue / MetaMorpho winner; additional awards from Arbitrum, Chiliz, and Worldcoin.",
    Component: Trophy,
    inject: TROPHY_COLOR,
    link:
      "https://www.linkedin.com/posts/javierriosur_last-week-i-participated-in-ethglobal-london-activity-7176583503734575105-F4A_",
    date: "Mar 2024",
  },
  {
    title: "42 Telefónica Block & Change",
    description:
      "Dual 1st places: NEAR BOS decentralized frontend and Arthera DeFi & dApps track.",
    Component: Trophy,
    inject: TROPHY_COLOR,
    link:
      "https://www.linkedin.com/posts/javierriosur_with-alex-arteaga-c-and-david-salvatella-activity-7117627293572751360-gNjI",
    date: "Oct 2023",
  },
  {
    title: "ETH Barcelona",
    description:
      "Best DeFi project plus XDC Social Media Crypto Bot recognition.",
    Component: Trophy,
    inject: TROPHY_COLOR,
    link:
      "https://www.linkedin.com/posts/javierriosur_last-week-i-had-the-opportunity-to-participate-activity-7084512255098126336-hiaL",
    date: "Jul 2023",
  },
  {
    title: "Google Open Source Jam",
    description:
      "Winner for impactful contributions to the JavaScript ecosystem.",
    Component: Trophy,
    inject: TROPHY_COLOR,
    link:
      "https://www.linkedin.com/posts/javierriosur_thrilled-to-share-that-i-emerged-as-a-winner-activity-7078410738955882497-ciRz",
    date: "Jun 2023",
  },
  {
    title: "Mediamarkt Hackathon",
    description:
      "1st place for a React Native + Solidity security proof of concept.",
    Component: Trophy,
    inject: TROPHY_COLOR,
    link:
      "https://www.linkedin.com/posts/javierriosur_letsgomediamarkt-mediamarktsaturntechnology-activity-7052268380841553921-7OsO",
    date: "Mar 2023",
  },
  {
    title: "IBM Metaverse Social Club",
    description:
      "Runner-up with a mini-game to help local businesses step into the metaverse.",
    Component: Trophy,
    inject: "text-gray-400",
    link:
      "https://www.linkedin.com/posts/javierriosur_this-sunday-the-metaverse-social-club-hackathon-activity-7003371720011059200-Ri0_",
    date: "Dec 2022",
  },
];
