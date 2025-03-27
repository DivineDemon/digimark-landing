import {
  AppWindow,
  Code,
  CreditCard,
  Languages,
  Link,
  Settings,
  Shield,
  Video,
} from "lucide-react";

import GoogleIcon from "@/assets/icons/google.svg";
import LinearIcon from "@/assets/icons/linear.svg";
import MetaIcon from "@/assets/icons/meta.svg";
import MicrosoftIcon from "@/assets/icons/microsoft.svg";
import OutlookIcon from "@/assets/icons/outlook.svg";
import PaypalIcon from "@/assets/icons/paypal.svg";
import SalesforceIcon from "@/assets/icons/salesforce.svg";
import SupabaseIcon from "@/assets/icons/supabase.svg";
import TrustedOne from "@/assets/img/trusted1.svg";
import TrustedTwo from "@/assets/img/trusted2.svg";
import TrustedThree from "@/assets/img/trusted3.svg";
import TrustedFour from "@/assets/img/trusted4.svg";
import TrustedFive from "@/assets/img/trusted5.svg";
import TrustedSix from "@/assets/img/trusted6.svg";
import TrustedSeven from "@/assets/img/trusted7.svg";
import TrustedEight from "@/assets/img/trusted8.svg";
import TrustedNine from "@/assets/img/trusted9.svg";
import TrustedTen from "@/assets/img/trusted10.svg";

export const trusted = [
  {
    id: 1,
    image: TrustedOne,
  },
  {
    id: 2,
    image: TrustedTwo,
  },
  {
    id: 3,
    image: TrustedThree,
  },
  {
    id: 4,
    image: TrustedFour,
  },
  {
    id: 5,
    image: TrustedFive,
  },
  {
    id: 6,
    image: TrustedSix,
  },
  {
    id: 7,
    image: TrustedSeven,
  },
  {
    id: 8,
    image: TrustedEight,
  },
  {
    id: 9,
    image: TrustedNine,
  },
  {
    id: 10,
    image: TrustedTen,
  },
];

export const howItWorks = [
  {
    id: 1,
    title: "Connect your calendar",
    description:
      "We'll handle all the cross-referencing, so you don't have to worry about double bookings.",
  },
  {
    id: 2,
    title: "Set your availability",
    description:
      "Want to block off weekends? Set up any buffers? We make that easy.",
  },
  {
    id: 3,
    title: "Choose how to meet",
    description: "It could be a video chat, phone call, or a walk in the park!",
  },
];

export const benefits = [
  {
    id: 1,
    title: "Avoid meeting overload",
    description:
      "Only get booked when you want to. Set daily, weekly or monthly limits and add buffers around your events to allow you to focus or take a break.",
  },
  {
    id: 2,
    title: "Stand out with a custom booking link",
    description:
      "Customize your booking link so it's short and easy to remember for your bookers. No more long, complicated links one can easily forget.",
  },
  {
    id: 3,
    title: "Streamline your bookers' experience",
    description:
      "Let your bookers overlay their calendar, receive booking confirmations via text or email, get events added to their calendar, and allow them to reschedule with ease.",
  },
  {
    id: 4,
    title: "Reduce no-shows with automated meeting reminders",
    description:
      "Easily send sms or meeting reminder emails about bookings, and send automated follow-ups to gather any relevant information before the meeting.",
  },
];

export const subBenefits = [
  {
    id: 1,
    name: "Accept payments",
    icon: CreditCard,
  },
  {
    id: 2,
    name: "Built-in video conferencing",
    icon: Video,
  },
  {
    id: 3,
    name: "Short booking links",
    icon: Link,
  },
  {
    id: 4,
    name: "Privacy first",
    icon: Shield,
  },
  {
    id: 5,
    name: "65+ languages",
    icon: Languages,
  },
  {
    id: 6,
    name: "Easy embeds",
    icon: Code,
  },
  {
    id: 7,
    name: "All your favourite apps",
    icon: AppWindow,
  },
  {
    id: 8,
    name: "Simple customization",
    icon: Settings,
  },
];

export const brands = [
  {
    id: 1,
    image: GoogleIcon,
  },
  {
    id: 2,
    image: LinearIcon,
  },
  {
    id: 3,
    image: MetaIcon,
  },
  {
    id: 4,
    image: MicrosoftIcon,
  },
  {
    id: 5,
    image: OutlookIcon,
  },
  {
    id: 6,
    image: PaypalIcon,
  },
  {
    id: 7,
    image: SalesforceIcon,
  },
  {
    id: 8,
    image: SupabaseIcon,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    social_handle: "@alicej",
    social_logo: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    client_image: "https://randomuser.me/api/portraits/women/1.jpg",
    description:
      "I couldn't be happier with the service. Super responsive and highly professional!",
  },
  {
    id: 2,
    name: "Michael Lee",
    social_handle: "@michaellee",
    social_logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    client_image: "https://randomuser.me/api/portraits/men/2.jpg",
    description:
      "The attention to detail was incredible. From start to finish, I felt like a valued client. Highly recommend!",
  },
  {
    id: 3,
    name: "Sophia Brown",
    social_handle: "@sophiab",
    social_logo: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    client_image: "https://randomuser.me/api/portraits/women/3.jpg",
    description:
      "Absolutely fantastic! I rarely leave reviews, but this experience was worth every penny. Thank you!",
  },
  {
    id: 4,
    name: "Daniel Garcia",
    social_handle: "@danielg",
    social_logo: "https://cdn-icons-png.flaticon.com/512/145/145802.png",
    client_image: "https://randomuser.me/api/portraits/men/4.jpg",
    description:
      "A seamless and enjoyable experience. If you're considering their services, just go for it!",
  },
  {
    id: 5,
    name: "Emma Wilson",
    social_handle: "@emmawilson",
    social_logo: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    client_image: "https://randomuser.me/api/portraits/women/5.jpg",
    description:
      "Super professional, quick turnaround, and exceeded expectations!",
  },
  {
    id: 6,
    name: "James Miller",
    social_handle: "@jamesm",
    social_logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    client_image: "https://randomuser.me/api/portraits/men/6.jpg",
    description:
      "Top-notch service! Everything was handled efficiently, and communication was superb.",
  },
  {
    id: 7,
    name: "Olivia Martinez",
    social_handle: "@oliviam",
    social_logo: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    client_image: "https://randomuser.me/api/portraits/women/7.jpg",
    description:
      "It was such a pleasure working with them. They took my vague ideas and turned them into something amazing!",
  },
  {
    id: 8,
    name: "William Anderson",
    social_handle: "@williamand",
    social_logo: "https://cdn-icons-png.flaticon.com/512/145/145802.png",
    client_image: "https://randomuser.me/api/portraits/men/8.jpg",
    description:
      "I was blown away by their level of professionalism and quality of work. Simply outstanding!",
  },
  {
    id: 9,
    name: "Charlotte Thompson",
    social_handle: "@charlottet",
    social_logo: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    client_image: "https://randomuser.me/api/portraits/women/9.jpg",
    description:
      "They went above and beyond! I was truly impressed by how much effort they put into making everything perfect.",
  },
  {
    id: 10,
    name: "Benjamin White",
    social_handle: "@benwhite",
    social_logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    client_image: "https://randomuser.me/api/portraits/men/10.jpg",
    description:
      "I usually don't write testimonials, but this experience deserves recognition. Excellent work!",
  },
  {
    id: 11,
    name: "Isabella Harris",
    social_handle: "@isabellah",
    social_logo: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    client_image: "https://randomuser.me/api/portraits/women/11.jpg",
    description:
      "One of the best teams I've ever worked with! They listened, adapted, and delivered a flawless result.",
  },
  {
    id: 12,
    name: "Mason Clark",
    social_handle: "@masonc",
    social_logo: "https://cdn-icons-png.flaticon.com/512/145/145802.png",
    client_image: "https://randomuser.me/api/portraits/men/12.jpg",
    description: "Perfect execution! Couldn't be happier with the results.",
  },
  {
    id: 13,
    name: "Ava Lewis",
    social_handle: "@aval",
    social_logo: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    client_image: "https://randomuser.me/api/portraits/women/13.jpg",
    description:
      "Honestly, I was skeptical at first, but they absolutely delivered! I'll be back for sure.",
  },
  {
    id: 14,
    name: "Liam Walker",
    social_handle: "@liamw",
    social_logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    client_image: "https://randomuser.me/api/portraits/men/14.jpg",
    description:
      "I had a great experience! Professional, responsive, and they really know their stuff.",
  },
  {
    id: 15,
    name: "Mia Hall",
    social_handle: "@miah",
    social_logo: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    client_image: "https://randomuser.me/api/portraits/women/15.jpg",
    description:
      "The customer service was next level. They made sure everything was just right!",
  },
  {
    id: 16,
    name: "Noah Allen",
    social_handle: "@noaha",
    social_logo: "https://cdn-icons-png.flaticon.com/512/145/145802.png",
    client_image: "https://randomuser.me/api/portraits/men/16.jpg",
    description:
      "What a great experience! They truly care about their clients and it shows.",
  },
  {
    id: 17,
    name: "Evelyn Young",
    social_handle: "@evelyny",
    social_logo: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    client_image: "https://randomuser.me/api/portraits/women/17.jpg",
    description:
      "From the initial call to the final result, everything was smooth. I'll be recommending them to everyone I know!",
  },
];
