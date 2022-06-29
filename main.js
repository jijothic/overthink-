import blog, { ga, redirects } from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "George Kibaru",
  author: "George Kibaru",
  avatar: "jijo.jpg",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:kibarugeorge@gmail.com" },
    { title: "GitHub", url: "https://github.com/jijothic" },
  ],
  background: "#edebe8",
  middlewares: [
    ga("UA-91675022-1"),
    redirects({
      "iocp-links.html": "iocp_links",
      "rant.html": "rant",
    }),
  ],
});
