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
import github from "../assets/github.svg";
import slack from "../assets/slack.svg";
import sentry from "../assets/sentry.svg";
import airbyte from "../assets/airbyte.svg";
import front from "../assets/front.svg";
import figma from "../assets/figma.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";

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
    id: "customer",
    title: "Customer",
  },
  {
    id: "changelog",
    title: "Changelog",
  },
  {
    id: "integration",
    title: "Integration",
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
export const exponential = [
  {
    id: "git",
    icon: github,
    title: "GitHub and GitLab",
    content: "Sync PRs with issues that close automatically.",
  },
  {
    id: "slack",
    icon: slack,
    title: "Slack and Discord",
    content: "Create issues and set up alerts.",
  },
  {
    id: "sentry",
    icon: sentry,
    title: "Sentry",
    content: "Automatically create issues from code exceptions.",
  },
  {
    id: "airbyte",
    icon: airbyte,
    title: "Airbyte",
    content: "Sync workspace data to external warehouses and databases.",
  },
  {
    id: "front",
    icon: front,
    title: "Front, Intercom, Zendesk",
    content: "Keep a tight loop with your users.",
  },
  {
    id: "figma",
    icon: figma,
    title: "Figma",
    content: "Embed design files in issues and documents."
  }
]


export const footerLinks = [
  {
    title: "Products",
    links: [
      {
        name: "Features",
        link: "",
      },
      {
        name: "Integrations",
        link: "",
      },
      {
        name: "Pricing",
        link: "",
      },
      {
        name: "Explore",
        link: "",
      },
      {
        name: "Terms & Services",
        link: "",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "About us",
        link: "",
      },
      {
        name: "Blog",
        link: "",
      },
      {
        name: "Careers",
        link: "",
      },
      {
        name: "Customers",
        link: "",
      },
      {
        name: "Brand",
        link: "",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Community",
        link: "",
      },
      {
        name: "Contact",
        link: "",
      },
      {
        name: "DPA",
        link: "",
      },
      {
        name: "Terms of service",
        link: "",
      },
      {
        name: "Report a vulnerability",
        link: "",
      },
    ],
  },
  {
    title: "Developers",
    links: [
      {
        name: "API",
        link: "",
      },
      {
        name: "Status",
        link: "",
      },
      {
        name: "github",
        link: "https://github.com/daddyloyal",
      },
      {
        name: "Terms of service",
        link: "",
      },
      {
        name: "Report a vulnerability",
        link: "",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: github,
    link: "https://www.github.com/daddyloyal",
  },
  {
    id: "social-media-2",
    icon: twitter,
    link: "https://twitter.com/lifeofemmany6",
  },
  {
    id: "social-media-3",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];
