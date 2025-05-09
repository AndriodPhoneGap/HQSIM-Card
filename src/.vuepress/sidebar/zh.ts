import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "产品中心",
      icon: "laptop-code",
      prefix: "Products/",
      link: "Products/",
      children: "structure",
    },
    {
      text: "服务方案",
      icon: "laptop-code",
      prefix: "Solutions/",
      link: "Solutions/",
      children: "structure",
    },
    {
      text: "技术资料",
      icon: "laptop-code",
      prefix: "TechLearn/",
      link: "TechLearn/",
      children: "structure",
    },
    {
      text: "合作案例",
      icon: "laptop-code",
      prefix: "Cases/",
      link: "Cases/",
      children: "structure",
    }, 
    {
      text: "关于我们",
      icon: "laptop-code",
      prefix: "AboutUs/",
      link: "AboutUs/",
      children: "structure",
    }, 
    {
      text: "联系我们",
      icon: "laptop-code",
      prefix: "Contact/",
      link: "Contact/",
      children: "structure",
    },
    {
      text: "获取报价",
      icon: "laptop-code",
      prefix: "CTA/",
      link: "CTA/",
      children: "structure",
    }, 
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
});
