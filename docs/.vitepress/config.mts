import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "#SCS25",
  base: "/scs25-copilot-studio-extensibility/",
  description: "#SCS25 - Copilot Studio Extensibility",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Labs",
        items: [
          { text: "Lab 01", link: "/lab-01/" },
          { text: "Lab 02", link: "/lab-02/" },
          { text: "Lab 03", link: "/lab-03/" },
          { text: "Lab 04", link: "/lab-04/" },
          { text: "Lab 05 (Bonus)", link: "/lab-05/" },
        ],
      },
      { text: "Resources", link: "/resources" },
    ],

    sidebar: [
      {
        text: "Labs",
        items: [
          { text: "Lab 01", link: "/lab-01/" },
          { text: "Lab 02", link: "/lab-02/" },
          { text: "Lab 03", link: "/lab-03/" },
          { text: "Lab 04", link: "/lab-04/" },
          { text: "Lab 05 (Bonus)", link: "/lab-05/" },
        ],
      },
      {
        text: "Resources",
        items: [{ text: "Resources", link: "/resources" }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/microsoft/scs25-copilot-studio-extensibility",
      },
    ],
  },
});
