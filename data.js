// Static data and configuration for the portfolio

export const GITHUB_USERNAME = "mlaasya07";

export const typedStrings = [
  "student developer",
  "creative technologist",
  "AI enthusiast",
  "storyteller",
  "curious builder",
];

export const typedConfig = {
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1500,
  loop: true,
};

export const navTabs = [
  { label: "home", value: "home", color: "pink" },
  { label: "skills", value: "skills", color: "green" },
  { label: "projects", value: "projects", color: "blue" },
  { label: "blog", value: "blog", color: "yellow" },
  { label: "socials", value: "socials", color: "red" },
];

export const homeContent = {
  intro: [
    {
      text: 'Welcome to my corner of the internet! I\'m a creative technologist who believes that code should feel alive. I build <span class="text-link">quirky web experiments</span>, write about <span class="text-link-green">tech and musings</span>, and occasionally break things in the name of learning.',
    },
    {
      text: "Currently exploring the intersection of AI and human creativity, building tools that make people smile, and documenting my journey through blog posts and projects.",
    },
  ],
  tags: ["student developer", "creative coder", "AI enthusiast", "storyteller"],
  activities: [
    { arrow: "pink", text: "Building experimental AI-powered tools" },
    { arrow: "green", text: "Writing about tech philosophy and musings" },
    { arrow: "blue", text: "Learning about web accessibility and performance" },
    { arrow: "yellow", text: "Exploring creative coding and generative art" },
  ],
};

export const skills = [
  { name: "Python", level: 90, color: "blue" },
  { name: "JavaScript/TypeScript", level: 85, color: "yellow" },
  { name: "React", level: 80, color: "blue" },
  { name: "Machine Learning", level: 75, color: "pink" },
  { name: "SQL & Databases", level: 70, color: "green" },
  { name: "Cloud & DevOps", level: 65, color: "yellow" },
];

export const technologies = [
  { name: "React", icon: "code", color: "blue" },
  { name: "Python", icon: "terminal", color: "yellow" },
  { name: "PostgreSQL", icon: "database", color: "green" },
  { name: "GitHub", icon: "git-branch", color: "lilac" },
  { name: "HTML/CSS/JS", icon: "layout", color: "cherry" },
  { name: "Node.js", icon: "server", color: "orange" },
  { name: "Docker", icon: "layers", color: "lightgreen" },
  { name: "Mobile Development", icon: "smartphone", color: "red" },
  { name: "AI & Machine Learning", icon: "cpu", color: "pink" },
];


export const projects = [
  {
    name: "Gibberish Oracle",
    description: "Type nonsense and receive enlightenment.",
    url: "https://gibberishoracle.netlify.app/",
    github: "https://github.com/mlaasya07/Gibberish-Oracle",
    tag: "game",
    color: "pink",
  },
  {
    name: "Sophist",
    description: "An AI philosopher that debates you and spins logic circles.",
    url: "https://github.com/mlaasya07/Sophist_",
    github: "https://github.com/mlaasya07/Sophist_",
    tag: "interactive",
    color: "green",
  },
  {
    name: "Sealya",
    description: "Unsent letters and time capsules platform.",
    url: "https://github.com/mlaasya07/Sealya",
    github: "https://github.com/mlaasya07/Sealya",
    tag: "web-app",
    color: "blue",
  },
  {
    name: "Rooted Realms",
    description: "Educational RPG teaching coding, botany, and more.",
    url: "https://github.com/mlaasya07/Rooted-Realms",
    github: "https://github.com/mlaasya07/Rooted-Realms",
    tag: "educational",
    color: "yellow",
  },
  {
    name: "SafeWatch",
    description: "Scans videos for vulgarity or violence.",
    url: "https://github.com/mlaasya07/SafeWatch",
    github: "https://github.com/mlaasya07/SafeWatch",
    tag: "tool",
    color: "pink",
  },
  {
    name: "SheNotes",
    description: "Notes app with a hidden menstrual tracker.",
    url: "https://github.com/mlaasya07/SheNotes",
    github: "https://github.com/mlaasya07/SheNotes",
    tag: "utility",
    color: "green",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/mlaasya07",
    iconType: "github",
    hoverClass: "hover-foreground",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/mlaasya07",
    iconType: "linkedin",
    hoverClass: "hover-blue",
  },
  {
    name: "Substack",
    url: "https://mlaasya07.substack.com/",
    iconType: "substack",
    hoverClass: "hover-pink",
  },
  {
    name: "Medium",
    url: "https://medium.com/@mlaasya07",
    iconType: "medium",
    hoverClass: "hover-foreground",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/mlaasya07",
    iconType: "leetcode",
    hoverClass: "hover-yellow",
  },
  {
    name: "CodinGame",
    url: "https://www.codingame.com/profile/mlaasya07",
    iconType: "codingame",
    hoverClass: "hover-green",
  },
];

export const substackFeedUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://mlaasya07.substack.com/feed";

export const languageColors = {
  TypeScript: "bg-blue",
  JavaScript: "bg-yellow",
  Python: "bg-link-green",
  HTML: "bg-link",
  CSS: "bg-link-blue",
  Astro: "bg-link",
  Unknown: "bg-muted-foreground",
};

export const footerData = {
  authorName: "Laasya",
  authorUrl: "https://aboutme-laasya.netlify.app/",
  email: "mlaasy16@gmail.com",
};
