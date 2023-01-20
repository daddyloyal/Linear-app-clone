import ramp  from "../assets/company1.svg";
import loom  from "../assets/company2.svg";
import vercel  from "../assets/company3.svg";
import descript  from "../assets/company4.svg";
import cashapp  from "../assets/company5.svg";
import raycast  from "../assets/company6.svg";
import mercury  from "../assets/company7.svg";
import retool  from "../assets/company8.svg";
import alan  from "../assets/company9.svg";
import arc  from "../assets/company10.svg";
import opensea from "../assets/company11.svg";
import pitch from "../assets/pitch.svg";
import file from "../assets/file.svg";
import backlog from "../assets/backlog.svg";
import workflow from "../assets/workflow.svg";
import filters from "../assets/filter.svg";
import discussion from "../assets/discussion.svg";
import issues from "../assets/issue.svg";
import robot from "../assets/robot.svg";
import clock from "../assets/clock.svg"
import settings from "../assets/settings.svg";
import scope from "../assets/scope.svg";
import warning from "../assets/warning.svg";
import prepare from "../assets/prepare.svg";
import team from "../assets/team.svg";
import document from "../assets/document.svg";
import roadmaps from "../assets/roadmap.svg";
import timeline from "../assets/timeline.svg";
import notification from "../assets/notification.svg";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "method",
    title: "Method",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
  {
    id: "company",
    title: "Company",
  },
];
export const navButton = [
  {
    id: "login",
    title: "Log in",
  },
  {
    id: "signup",
    title: "Sign up",
  },
];

export const logoCloud = [
  {
    id: "ramp",
    img: ramp,
    title: "Ramp",
    display_small: "block",
  },
  {
    id: "loom",
    img: loom,
    title: "Loom",
    display_small: "block",
  },
  {
    id: "vercel",
    img: vercel,
    title: "Vercel",
    display_small: "block",
  },
  {
    id: "descript",
    img: descript,
    title: "Descript",
    display_small: "block",
  },
  {
    id: "cashapp",
    img: cashapp,
    title: "Cashapp",
    display_small: "block",
  },
  {
    id: "raycast",
    img: raycast,
    title: "Raycast",
    display_small: "block",
  },
  {
    id: "mercury",
    img: mercury,
    title: "Mercury",
    display_small: "hidden",
  },
  {
    id: "retool",
    img: retool,
    title: "Retool",
    display_small: "hidden",
  },
  {
    id: "alan",
    img: alan,
    title: "Alan",
    display_small: "hidden",
  },
  {
    id: "arc",
    img: arc,
    title: "Arc",
    display_small: "hidden",
  },
  {
    id: "opensea",
    img: opensea,
    title: "Opensea",
    display_small: "hidden",
  },
  {
    id: "pitch",
    img: pitch,
    title: "Pitch",
    display_small: "hidden",
  },

];

export const issueItem = [
  {
    id: "sub-issues",
    icon: file,
    title: "Parent and sub-issues.",
    content: "Break larger tasks into smaller issues.",
  },
  {
    id: "backlog",
    icon: backlog,
    title: "Automated backlog",
    content: "Linear will auto-close and auto-archive issues.",
  },
  {
    id: "workflow",
    icon: workflow,
    title: "Custom workflows",
    content: "Define unique issue states for each team.",
  },
  {
    id: "filters",
    icon: filters,
    title: "Filters and custom views",
    content: "See only what’s relevant for you.",
  },
  {
    id: "discussion",
    icon: discussion,
    title: "Discussion",
    content: "Collaborate on issues without losing context.",
  },
  {
    id: "issue",
    icon: issues,
    title: "Issue templates",
    content: "Guide your team to write effective issues."
  }
]
export const momentum = [
  {
    id: "tracking",
    icon: robot,
    title: "Automatic tracking",
    content: "Any started issues are added to the current cycle.",
  },
  {
    id: "scheduled",
    icon: clock,
    title: "Scheduled",
    content: "Unfinished work rolls over to the next cycle automatically.",
  },
  {
    id: "configurable",
    icon: settings,
    title: "Fully configurable",
    content: "Define start date, end date, duration, and more.",
  },
  {
    id: "predict",
    icon: warning,
    title: "Predict delays",
    content: "Get warnings for at-risk cycles.",
  },
  {
    id: "scope",
    icon: scope,
    title: "Scope creep",
    content: "Understand which issues are added mid-cycle.",
  },
  {
    id: "preparation",
    icon: prepare,
    title: "Be prepared",
    content: "Schedule work in advance with upcoming cycles."
  }
]

export const roadmapping = [
  {
    id: "team",
    icon: team,
    title: "Multi-team projects",
    content: "Collaborate across teams and departments.",
  },
  {
    id: "document",
    icon: document,
    title: "Project documents",
    content: "Write project briefs and specs directly in Linear.",
  },
  {
    id: "roadmaps",
    icon: roadmaps,
    title: "Custom roadmaps",
    content: "Organize projects across multiple roadmaps.",
  },
  {
    id: "timeline",
    icon: timeline,
    title: "Timeline view",
    content: "Visualize the product journey ahead.",
  },
  {
    id: "insights",
    icon: scope,
    title: "Project insights",
    content: "Track scope, velocity, and progress over time.",
  },
  {
    id: "notification",
    icon: notification,
    title: "Personal notifications",
    content: "Stay in the loop on project activity and updates."
  }
]
// export const features = [
//   {
//     id: "feature-1",
//     icon: star,
//     title: "Rewards",
//     content:
//       "The best credit cards offer some tantalizing combinations of promotions and prizes",
//   },
//   {
//     id: "feature-2",
//     icon: shield,
//     title: "100% Secured",
//     content:
//       "We take proactive steps make sure your information and transactions are secure.",
//   },
//   {
//     id: "feature-3",
//     icon: send,
//     title: "Balance Transfer",
//     content:
//       "A balance transfer credit card can save you a lot of money in interest charges.",
//   },
// ];

// export const feedback = [
//   {
//     id: "feedback-1",
//     content:
//       "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
//     name: "Herman Jensen",
//     title: "Founder & Leader",
//     img: people01,
//   },
//   {
//     id: "feedback-2",
//     content:
//       "Money makes your life easier. If you're lucky to have it, you're lucky.",
//     name: "Steve Mark",
//     title: "Founder & Leader",
//     img: people02,
//   },
//   {
//     id: "feedback-3",
//     content:
//       "It is usually people in the money business, finance, and international trade that are really rich.",
//     name: "Kenn Gallagher",
//     title: "Founder & Leader",
//     img: people03,
//   },
// ];

// export const stats = [
//   {
//     id: "stats-1",
//     title: "User Active",
//     value: "3800+",
//   },
//   {
//     id: "stats-2",
//     title: "Trusted by Company",
//     value: "230+",
//   },
//   {
//     id: "stats-3",
//     title: "Transaction",
//     value: "$230M+",
//   },
// ];

// // export const footerLinks = [
// //   {
// //     title: "Useful Links",
// //     links: [
// //       {
// //         name: "Content",
// //         link: "https://www.hoobank.com/content/",
// //       },
// //       {
// //         name: "How it Works",
// //         link: "https://www.hoobank.com/how-it-works/",
// //       },
// //       {
// //         name: "Create",
// //         link: "https://www.hoobank.com/create/",
// //       },
// //       {
// //         name: "Explore",
// //         link: "https://www.hoobank.com/explore/",
// //       },
// //       {
// //         name: "Terms & Services",
// //         link: "https://www.hoobank.com/terms-and-services/",
// //       },
// //     ],
// //   },
// //   {
// //     title: "Community",
// //     links: [
// //       {
// //         name: "Help Center",
// //         link: "https://www.hoobank.com/help-center/",
// //       },
// //       {
// //         name: "Partners",
// //         link: "https://www.hoobank.com/partners/",
// //       },
// //       {
// //         name: "Suggestions",
// //         link: "https://www.hoobank.com/suggestions/",
// //       },
// //       {
// //         name: "Blog",
// //         link: "https://www.hoobank.com/blog/",
// //       },
// //       {
// //         name: "Newsletters",
// //         link: "https://www.hoobank.com/newsletters/",
// //       },
// //     ],
// //   },
// //   {
// //     title: "Partner",
// //     links: [
// //       {
// //         name: "Our Partner",
// //         link: "https://www.hoobank.com/our-partner/",
// //       },
// //       {
// //         name: "Become a Partner",
// //         link: "https://www.hoobank.com/become-a-partner/",
// //       },
// //     ],
// //   },
// // ];

// export const socialMedia = [
//   {
//     id: "social-media-1",
//     icon: github,
//     link: "https://www.github.com/daddyloyal",
//   },
//   {
//     id: "social-media-2",
//     icon: twitter,
//     link: "https://www.twitter.com/",
//   },
//   {
//     id: "social-media-3",
//     icon: linkedin,
//     link: "https://www.linkedin.com/",
//   },
// ];

// export const clients = [
//   {
//     id: "client-1",
//     logo: ramp,
//   },
//   {
//     id: "client-2",
//     logo: vercel,
//   },
//   {
//     id: "client-3",
//     logo: cashapp,
//   },
//   {
//     id: "client-4",
//     logo: raycast,
//   },
//   {
//     id: "client-5",
//     logo: mercury,
//   },
//   {
//     id: "client-6",
//     logo: retool
//   }
// ];
