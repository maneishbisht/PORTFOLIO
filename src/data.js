// All portfolio content lives here. Edit this file, not the components.

export const profile = {
  name: "Maneish Bisht",
  role: "Full-stack developer · Cloud & DevOps",
  headline: "I build full-stack apps, then build the pipeline that ships them.",
  summary:
    "Final-year B.Tech (CSE) student who works across the whole path from code to production: Next.js and MERN apps on one end, AWS, Terraform, Kubernetes and Argo CD on the other.",
  email: "maneishbisht7342@gmail.com",
  phone: "+91 73028 43429",
  github: "https://github.com/maneishbisht",
};

// The hero strip. Matches the CI/CD tab.
export const pipeline = [
  { step: "Commit", tool: "GitHub" },
  { step: "Build and test", tool: "GitHub Actions" },
  { step: "Provision", tool: "Terraform" },
  { step: "Run", tool: "Docker on EKS" },
  { step: "Sync", tool: "Argo CD" },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "C++"],
  },
  {
    title: "Web stack",
    items: ["MERN", "PERN", "Next.js"],
  },
  {
    title: "AWS",
    items: [
      "VPC", "EC2", "S3", "RDS", "Elastic Beanstalk", "EBS", "Lambda", "IAM",
      "Config Rules", "Systems Manager", "Secrets Manager", "SNS",
      "Security Groups", "NACLs",
    ],
  },
  {
    title: "Infrastructure and delivery",
    items: [
      "Terraform: infrastructure provisioning",
      "Docker: containerization",
      "Kubernetes on AWS EKS and self-managed clusters",
      "GitHub Actions + Argo CD: CI/CD",
      "VPS deployments with NGINX",
      "Vercel: managed deployment",
    ],
  },
  {
    title: "Performance and real-time",
    items: [
      "Apache Kafka: pub/sub",
      "Redis: in-memory DB and caching",
      "WebSockets: real-time communication",
      "WebRTC: serverless peer-to-peer",
    ],
  },
  {
    title: "Tools",
    items: ["Claude Code", "AntiGravity", "OpenCode", "Postman"],
  },
  {
    title: "CS fundamentals",
    items: [
      "SDLC",
      "Data structures and algorithms (C++)",
      "Computer networks and cloud infrastructure",
      "Computer architecture and operating systems",
    ],
  },
  {
    title: "Spoken languages",
    items: ["English", "Hindi"],
  },
];

export const projects = [
  {
    name: "Travel Agency Ride Booking",
    summary: "A website for booking travel services, live in production.",
    details:
      "Built with Next.js and TypeScript for a travel agency that takes ride bookings online.",
    tags: ["Next.js", "TypeScript"],
    links: [{ label: "Live site", url: "https://luxewayride.com" }],
  },
  {
    name: "Repo Explorer",
    summary: "Explore any GitHub profile and its repositories after signing in with GitHub.",
    details:
      "Uses GitHub authentication for profile-based exploration, with Redis for caching and rate limiting. Infrastructure and deployment are being moved onto a Terraform + Kubernetes automation pipeline (see the CI/CD tab).",
    tags: ["Redis", "GitHub Auth", "Terraform", "Kubernetes"],
    links: [{ label: "Live site", url: "https://gitrepoexplorer.vercel.app" }],
  },
  {
    name: "Chat App",
    summary: "A real-time chat application on the MERN stack.",
    details: "Messages are delivered instantly over WebSockets.",
    tags: ["MERN", "WebSockets"],
    links: [{ label: "GitHub", url: "https://github.com/maneishbisht/CHAT-APP" }],
  },
  {
    name: "Recipe Sharing Website",
    summary: "A platform for sharing recipes, built on the MERN stack.",
    details: "Full-stack CRUD app with a React front end and a Node, Express and MongoDB back end.",
    tags: ["MERN"],
    links: [{ label: "GitHub", url: "https://github.com/maneishbisht/MY-RECIPE-APP" }],
  },
];

// Descriptions are based on each repo's name. Edit them to match what's inside.
export const cicd = {
  intro:
    "The Repo Explorer app is delivered through a GitOps setup split across five repositories: Terraform creates the infrastructure and the cluster, and Argo CD keeps the cluster in sync with the application config.",
  repos: [
    {
      name: "TERRAFORM_ROOT_REPO_EXPLORER",
      role: "Infrastructure",
      description:
        "The root Terraform configuration for Repo Explorer. It provisions the base AWS infrastructure the rest of the pipeline builds on.",
      url: "https://github.com/maneishbisht/TERRAFORM_ROOT_REPO_EXPLORER",
    },
    {
      name: "TF_CLUSTER_ADMIN_REPO_EXPLORER",
      role: "Cluster",
      description:
        "Terraform for the Kubernetes cluster itself: cluster setup and administration, kept separate from the root infrastructure.",
      url: "https://github.com/maneishbisht/TF_CLUSTER_ADMIN_REPO_EXPLORER",
    },
    {
      name: "REPO_EXPLORER_APPLICATION_CONFIG",
      role: "GitOps",
      description:
        "The application-level configuration that Argo CD watches, tying the frontend and backend deployments together.",
      url: "https://github.com/maneishbisht/REPO_EXPLORER_APPLICATION_CONFIG",
    },
    {
      name: "REPO_EXPLORER_FRONTEND_CONFIG",
      role: "GitOps",
      description:
        "Deployment configuration for the Repo Explorer frontend, applied to the cluster through Argo CD.",
      url: "https://github.com/maneishbisht/REPO_EXPLORER_FRONTEND_CONFIG",
    },
    {
      name: "REPO_EXPLORER_BACKEND_CONFIG",
      role: "GitOps",
      description:
        "Deployment configuration for the Repo Explorer backend, applied to the cluster through Argo CD.",
      url: "https://github.com/maneishbisht/REPO_EXPLORER_BACKEND_CONFIG",
    },
  ],
};

export const education = [
  {
    title: "B.Tech, Computer Science & Engineering",
    place: "Galgotias University, Greater Noida (UP)",
    years: "2022 – 2026",
    result: "8.4 CGPA",
  },
  {
    title: "Class 12 (PCM)",
    place: "Army Public School, Roorkee (Uttarakhand)",
    years: "2016 – 17",
    result: "81.2%",
  },
  {
    title: "Class 10",
    place: "Army Public School, Roorkee (Uttarakhand)",
    years: "",
    result: "9.4 CGPA",
  },
];

export const codingProfiles = [
  { name: "LeetCode", url: "https://leetcode.com/u/ManeishBisht/" },
  { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/maneishbisht/" },
  {
    name: "Code360 (Naukri)",
    url: "https://www.naukri.com/code360/profile/bc196866-994c-4ad-b93c-b2137acbd846",
  },
  { name: "GitHub", url: "https://github.com/maneishbisht" },
];
