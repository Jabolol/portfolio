import Trophy from "$icons/trophy.tsx";
import Card from "~/components/Card.tsx";
import { CardProps } from "~/types.ts";

const details: (CardProps & { link: string })[] = [
  {
    title: "XDC Foundation",
    description: "1st place in the Social Media Crypto Bot category.",
    Component: Trophy,
    inject: "text-yellow-500",
    link:
      "https://www.linkedin.com/posts/javierriosur_last-week-i-had-the-opportunity-to-participate-activity-7084512255098126336-hiaL",
  },
  {
    title: "Mediamarkt Hackathon",
    description:
      "1st place building a mobile app and blockchain Proof of Concept.",
    Component: Trophy,
    inject: "text-yellow-500",
    link:
      "https://www.linkedin.com/posts/javierriosur_letsgomediamarkt-mediamarktsaturntechnology-activity-7052268380841553921-7OsO",
  },
  {
    title: "Google & Interacso Open Source Jam",
    description: "1st place contributing to open-source projects on GitHub.",
    Component: Trophy,
    inject: "text-yellow-500",
    link:
      "https://www.linkedin.com/posts/javierriosur_thrilled-to-share-that-i-emerged-as-a-winner-activity-7078410738955882497-ciRz",
  },
  {
    title: "NEAR Web3 Hackathon",
    description: "1st place building a decentralised certification storage.",
    Component: Trophy,
    inject: "text-yellow-400",
    link:
      "https://www.linkedin.com/posts/alex-arteaga-c_honored-to-have-participated-in-this-weekends-activity-7053675065107750913-6uq4",
  },
  {
    title: "ETH Barcelona Hackathon",
    description: "Best Decentralized Finance project in the hackathon.",
    Component: Trophy,
    inject: "text-yellow-500",
    link:
      "https://www.linkedin.com/posts/alex-arteaga-c_great-news-im-elated-to-share-with-activity-7084461331734511616-0y0g",
  },
  {
    title: "IBM Metaverse Hackathon",
    description: "2nd place creating a Metaverse demo using Unity.",
    Component: Trophy,
    inject: "text-gray-400",
    link:
      "https://www.linkedin.com/posts/javierriosur_this-sunday-the-metaverse-social-club-hackathon-activity-7003371720011059200-Ri0_",
  },
];

export default function Awards() {
  return (
    <>
      <hr
        class="w-48 h-1 mt-12 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
        id="awards"
      />
      <div class="flex items-center justify-center my-5">
        <div class="mx-auto lg:px-6 lg:text-center text-center md:pb-5 lg:pb-5">
          <h1 class="font-black text-dim text-4xl mt-10 text-3xl">
            Awards
          </h1>
          <p class="mt-4 text-lg lg:text-2xl dark:text-gray-400 text-gray-600 max-w-[18rem] md:max-w-[30rem] lg:max-w-[60rem]">
            Some of my hackathon feats.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mb-5 md:mb-15 lg:mb-15">
        {details.map(({ link, title, description, Component, inject }) => (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Card
              title={title}
              description={description}
              Component={Component}
              inject={inject}
            />
          </a>
        ))}
      </div>
    </>
  );
}
