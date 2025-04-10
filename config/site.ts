export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "BTTN",
  description: "Bringing Blessing to all Nations.",
  navItems: [
    
    {
      label: "About us",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/pricing",
    },
    {
      label: "Write",
      href: "/blog",
    },
    {
      label: "Donate",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    }
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://xmainc-bloom.kindful.com/?campaign=1295533",
  },
};
