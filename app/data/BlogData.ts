import ManImage from "@/public/images/man.png";
import pigi from "@/public/images/pigi.png";
import coin from "@/public/images/coinImage.png";
import protectimage from "@/public/images/protectimage.png";
import cryptomobile from "@/public/images/cryptomobile.png";
import minecraft from "@/public/images/minecraft.png";

import { BlogContent } from "./Blogtype";

export const BlogData: BlogContent[] = [
  {
    title: "Getting Started with Bitcoin Wallets",
    subtitle:
      "If you’re new to crypto, setting up a wallet is your first step. Here’s a quick guide to help you get started.",
    slug: "getting-started-with-bitcoin-wallets",
    image: pigi,
    data: "2026-01-12",
    author: "Arthur Moore",
    authorPosition: "Blockchain Lead",
    content: [
      {
        type: "paragraph",
        text: "Bitcoin wallets are the gateway to the decentralized world of cryptocurrency. If you’re new to crypto, setting up a wallet is your first step.",
      },

      {
        type: "heading",
        level: 2,
        text: "What Is a Bitcoin Wallet?",
      },
      {
        type: "paragraph",
        text: "A Bitcoin wallet is a digital tool that allows you to store, send, and receive Bitcoin. Think of it as your personal bank account — but without a bank.",
      },
      {
        type: "paragraph",
        text: "Wallets come in different forms:",
      },
      {
        type: "list",
        items: ["Mobile apps", "Hardware devices", "Desktop software"],
      },

      {
        type: "heading",
        level: 2,
        text: "Choosing the Right Wallet",
      },
      {
        type: "paragraph",
        text: "There are two main types of wallets.",
      },
      {
        type: "paragraph",
        text: "Hot wallets are connected to the internet and are convenient for daily transactions.",
      },
      {
        type: "paragraph",
        text: "Cold wallets store assets offline and offer higher security.",
      },
      {
        type: "paragraph",
        text: "For beginners, mobile wallets are often the best choice.",
      },

      {
        type: "heading",
        level: 2,
        text: "Setting Up Your Wallet",
      },
      {
        type: "list",
        items: [
          "Download a trusted wallet app such as Leather Wallet or Electrum",
          "Create an account and back up your recovery phrase",
          "Enable two-factor authentication (2FA)",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Sending and Receiving Bitcoin",
      },
      {
        type: "paragraph",
        text: "To receive Bitcoin, share your wallet address with the sender.",
      },
      {
        type: "paragraph",
        text: "To send Bitcoin, enter the recipient’s address, choose the amount, and confirm the transaction.",
      },

      {
        type: "paragraph",
        text: "With your wallet set up, you’re ready to explore the Bitcoin ecosystem. Always keep your recovery phrase safe.",
      },
    ],
  },
  {
    title: "What Are Ordinals and Why Are They Important?",
    subtitle:
      "Ordinals have become a buzzword in the Bitcoin community, but what are they exactly? Let’s break it down.",
    slug: "what-are-ordinals-and-why-are-they-important",
    image: coin,
    data: "2026-01-12",
    author: "John Williams",
    authorPosition: "Marketing Lead",
    content: [
      {
        type: "paragraph",
        text: "Ordinals have become a buzzword in the Bitcoin community — but what are they exactly? Let’s break it down in a simple way.",
      },

      {
        type: "heading",
        level: 2,
        text: "Understanding Ordinals",
      },
      {
        type: "paragraph",
        text: "Ordinals are unique identifiers assigned to individual satoshis, the smallest unit of Bitcoin. These identifiers allow users to track and organize specific satoshis, giving them distinct value.",
      },
      {
        type: "paragraph",
        text: "Think of it like assigning serial numbers to dollar bills.",
      },

      {
        type: "heading",
        level: 2,
        text: "Why Are Ordinals Useful?",
      },
      {
        type: "paragraph",
        text: "Ordinals unlock new possibilities within the Bitcoin ecosystem, including:",
      },
      {
        type: "list",
        items: [
          "Digital Collectibles — Artists can create NFTs directly on the Bitcoin blockchain using Ordinals",
          "Proof of Ownership — Assigning ordinals to specific satoshis enables transparency and traceability",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "How Are Ordinals Used?",
      },
      {
        type: "paragraph",
        text: "Ordinals rely on Bitcoin’s Taproot upgrade, which enhances Bitcoin’s ability to store and transfer metadata.",
      },
      {
        type: "paragraph",
        text: "Using this upgrade, users can inscribe data — such as images or text — onto a satoshi, effectively turning it into a digital collectible.",
      },

      {
        type: "heading",
        level: 2,
        text: "Getting Started with Ordinals",
      },
      {
        type: "paragraph",
        text: "To explore Ordinals, you’ll need:",
      },
      {
        type: "list",
        items: [
          "A Taproot-enabled Bitcoin wallet",
          "A platform to inscribe or trade Ordinals, such as Ordinals Market",
        ],
      },

      {
        type: "paragraph",
        text: "The Ordinals protocol is pushing Bitcoin beyond simple currency usage, unlocking creative use cases like art, gaming, and digital ownership. Whether you’re a collector or a creator, Ordinals represent an exciting new frontier in the crypto space.",
      },
    ],
  },
  {
    title: "What Is Bitcoin Layer 2 and How Does It Work?",
    subtitle:
      "The Bitcoin network is powerful, but it has its limitations, such as higher fees during peak times. Layer 2 solutions aim to solve these issues.",
    slug: "what-is-bitcoin-layer-2-and-how-does-it-work",
    image: protectimage,
    data: "2026-01-12",
    author: "John Williams",
    authorPosition: "Marketing Lead",
    content: [
      {
        type: "paragraph",
        text: "The Bitcoin network is powerful, but it has its limitations — such as slower transaction speeds and higher fees during peak times. To overcome these challenges, Layer 2 solutions are designed to improve scalability and efficiency without compromising security.",
      },

      {
        type: "heading",
        level: 2,
        text: "What Is Layer 2?",
      },
      {
        type: "paragraph",
        text: "Layer 2 refers to secondary protocols or frameworks built on top of the Bitcoin blockchain. These solutions enhance transaction speed and scalability while maintaining the security of the main network.",
      },

      {
        type: "heading",
        level: 2,
        text: "Popular Layer 2 Solutions",
      },
      {
        type: "list",
        items: [
          "Lightning Network — Enables instant and low-cost micropayments by creating off-chain transaction channels",
          "Stacks (STX) — Brings smart contract functionality to Bitcoin, enabling decentralized applications and ecosystems",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "How Does It Work?",
      },
      {
        type: "paragraph",
        text: "Layer 2 solutions process most transactions off-chain and only interact with the main blockchain for final settlement. This reduces congestion and transaction fees while enabling faster transfers.",
      },

      {
        type: "heading",
        level: 2,
        text: "Benefits of Layer 2",
      },
      {
        type: "list",
        items: [
          "Scalability — Supports a higher volume of transactions",
          "Cost-Effective — Significantly lowers transaction fees",
          "Innovative Use Cases — Enables smart contracts and decentralized applications",
        ],
      },

      {
        type: "paragraph",
        text: "Layer 2 solutions are essential for Bitcoin’s long-term growth, unlocking new possibilities while preserving the core network’s integrity.",
      },
    ],
  },
  {
    title: "How to Secure Your Crypto Assets",
    subtitle:
      "When it comes to cryptocurrency, security is paramount. Unlike traditional banking, managing your crypto security is entirely your responsibility.",
    slug: "how-to-secure-your-crypto-assets",
    image: cryptomobile,
    data: "2026-01-12",
    author: "John Williams",
    authorPosition: "Marketing Lead",
    content: [
      {
        type: "paragraph",
        text: "When it comes to cryptocurrency, security is paramount. Unlike traditional banking, managing your crypto security is entirely your responsibility. Here’s how you can keep your assets safe.",
      },

      {
        type: "heading",
        level: 2,
        text: "Use a Hardware Wallet",
      },
      {
        type: "paragraph",
        text: "A hardware wallet is one of the safest ways to store your crypto assets. These devices keep your private keys offline, protecting them from online threats such as hacking or phishing attacks.",
      },

      {
        type: "heading",
        level: 2,
        text: "Avoid Public Wi-Fi for Transactions",
      },
      {
        type: "paragraph",
        text: "Public Wi-Fi networks can expose your transactions to cybercriminals. Always use a secure and private internet connection when accessing your wallet or making trades.",
      },

      {
        type: "heading",
        level: 2,
        text: "Enable Two-Factor Authentication (2FA)",
      },
      {
        type: "paragraph",
        text: "Add an extra layer of protection by enabling 2FA on your exchange accounts and wallets. Even if someone obtains your password, they won’t be able to access your account without the second verification step.",
      },

      {
        type: "heading",
        level: 2,
        text: "Regularly Update Your Software",
      },
      {
        type: "paragraph",
        text: "Keep your wallets, apps, and devices updated with the latest security patches. Updates often fix vulnerabilities that attackers could exploit.",
      },

      {
        type: "heading",
        level: 2,
        text: "Beware of Scams",
      },
      {
        type: "paragraph",
        text: "Stay alert for unsolicited messages, phishing emails, and fake websites. Always verify the source before sharing sensitive information or confirming transactions.",
      },

      {
        type: "paragraph",
        text: "By following these best practices, you can significantly reduce security risks and enjoy a safer crypto experience.",
      },
    ],
  },
  {
    title: "A Beginner’s Guide to Bitcoin Mining",
    subtitle:
      "Bitcoin mining is the backbone of the Bitcoin network, ensuring transactions are validated and new coins are created.",
    slug: "a-beginners-guide-to-bitcoin-mining",
    image: minecraft,
    data: "2026-01-12",
    author: "John Williams",
    authorPosition: "Marketing Lead",
    content: [
      {
        type: "paragraph",
        text: "Bitcoin mining is the backbone of the Bitcoin network, ensuring transactions are validated and new coins are created. Here’s a simplified guide to help you understand how mining works.",
      },

      {
        type: "heading",
        level: 2,
        text: "What Is Bitcoin Mining?",
      },
      {
        type: "paragraph",
        text: "Mining is the process of solving complex mathematical problems to validate transactions on the Bitcoin blockchain. Miners use specialized hardware to perform these computations securely and efficiently.",
      },

      {
        type: "heading",
        level: 2,
        text: "How Does Mining Work?",
      },
      {
        type: "list",
        items: [
          "Transactions are grouped into blocks",
          "Miners compete to solve a cryptographic puzzle",
          "The first miner to solve the puzzle validates the block and adds it to the blockchain",
          "The miner is rewarded with newly minted Bitcoin",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "What Do You Need to Mine Bitcoin?",
      },
      {
        type: "list",
        items: [
          "Hardware — ASIC (Application-Specific Integrated Circuit) miners are the most efficient",
          "Electricity — Mining consumes significant energy, so electricity cost is a critical factor",
          "Mining Pool — Joining a mining pool increases your chances of earning rewards",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Is Mining Profitable?",
      },
      {
        type: "paragraph",
        text: "Mining profitability depends on several factors, including electricity costs, hardware efficiency, and Bitcoin’s market price.",
      },

      {
        type: "paragraph",
        text: "Bitcoin mining is a fascinating yet highly competitive process. While it may not be suitable for everyone, it remains a vital component of the Bitcoin ecosystem.",
      },
    ],
  },
];
