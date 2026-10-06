import droppauction from "../assets/droppauction.png";
import dropplanding from "../assets/dropplanding.png";
import storefrontlanding from "../assets/storefrontlanding.png";
import storefrontproduct from "../assets/storefrontproduct.png";
import bloglandingpage from "../assets/bloglandingpage.png";
import blogcarousel from "../assets/blogcarousel.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  main: string;
  image: string;
  image2: string;
  alt: string;
  alt2: string;
  stack: string[];
  caption: string;
  liveUrl: string;
  githubUrl: string;
}

export const projects = [
  {
    id: "semester-project",
    title: "DROPP",
    image: dropplanding,
    image2: droppauction,
    alt: "landing page for the auction page",
    alt2: "Product detail page for the auction store",
    caption: "DROPP, auction item detail page.",
    description:
      "An online auction platform where users can list items, place bids and track auctions in real time, built with vanilla JavaScript, Vite and Tailwind CSS on top of the Noroff Auction API.",
    main: "DROPP is an online auction platform built as my Semester Project 2 at Noroff, where I independently took an auction website from idea to finished product. The design started in Figma, where I created a style guide and a full design prototype before writing any code. I wanted DROPP// to have a modern, clean look with consistent branding, and I designed it to be fully responsive across mobile and desktop, with universal design guidelines in mind. Clear loading states, error messages and user feedback were part of the design from the start, so users always know what is happening. The application is a front end for the Noroff Auction API, and most of the work went into connecting the interface to it. I built a modular JavaScript structure for handling API requests, covering registration and login, authenticated requests using an access token and API key, fetching and searching listings, creating new listings, placing bids and updating profiles. I also handled errors and edge cases from the API, such as invalid bids or expired sessions, and turned them into clear messages for the user. Users with a stud.noroff.no email can register and receive 1000 credits to spend on the platform. Once logged in, they can create listings with a title, description, deadline and media gallery, bid on other users' items, see the bid history and current highest bid on each listing, and follow live countdown timers as auctions come to an end. They can also manage their profile by updating their avatar and bio and keep track of their credit balance. Visitors who aren't registered can still browse and search all listings, but need an account to place a bid.",
    stack: [
      "JavaScript",
      "Tailwind",
      "Vite",
      "Playwright",
      "Vitest",
      "Husky",
      "Figma",
    ],
    liveUrl: "https://dropp-semester-project-2.netlify.app/",
    githubUrl: "https://github.com/tin-kri/Semester-Project-2",
  },
  {
    title: "Blog",
    id: "exam-project",
    image: bloglandingpage,
    image2: blogcarousel,
    alt: "landing page for the blog project",
    alt2: "close up of the carousel in the blog project",
    caption: "Latest blog posts carousel",
    description:
      "A blog website built as my first-year exam project at Noroff, using WordPress as a headless CMS via the WordPress REST API.",
    main: "The site's content is stored in a WordPress installation used as a headless CMS, and the front end fetches and renders it dynamically with JavaScript. The landing page features a custom JavaScript carousel showcasing the latest posts. The blog page initially displays the first nine posts, with a view more option that loads additional posts below the existing ones. Each blog post page is built dynamically using a query string parameter taken from the link the user clicks. On the post pages, clicking an image opens it in a modal for a larger view, and clicking outside the image closes it. The contact page uses JavaScript form validation to make sure user input is correct before submission.",
    stack: ["JavaScript", "HTML", "CSS", "WordPress"],
    githubUrl: "https://github.com/tin-kri/project-exam-1-tin-kri",
    liveUrl: "https://lambent-llama-93fe7c.netlify.app/",
  },
  {
    title: "StoreFront",
    id: "frameworks-project",
    image: storefrontlanding,
    image2: storefrontproduct,
    alt: "Landing page for the ecommerce store",
    alt2: "Product page for the ecommerce store",
    caption: "StoreFront, product detail page.",
    description:
      "A responsive e-commerce storefront built with Next.js and TypeScript, featuring live search, a persistent shopping cart and validated forms, deployed on Vercel.",
    main: "This project was built for the JavaScript Frameworks course at Noroff, where the goal was to create a fully functional, responsive online shop using a modern framework with TypeScript. The assignment focused on integrating an external API, managing application state, applying software architecture principles, and being able to justify framework and library choices in a real-world context. The storefront fetches product data from the Noroff API and includes a home page with a hero section showcasing sale products, a shop page with a full product grid, and individual product pages displaying images, pricing with discount badges, ratings, reviews and tags. Users can find products through a debounced, client-side live search with a dropdown of results linking directly to product pages. The shopping cart supports adding, removing and updating quantities, and persists across page refreshes using localStorage. The checkout flow is simulated, clearing the cart and redirecting to a confirmation page, while the contact form is validated with Zod and React Hook Form before redirecting to a success page. I chose Next.js over the Vite and React Router setup covered in the curriculum, partly for its seamless deployment on Vercel and partly because of its strong presence in the industry and job market. For state management I went with Zustand rather than Redux Toolkit, as it offers a lighter, more intuitive approach with far less boilerplate. Zod was paired with TypeScript to define schemas that serve both as runtime validators and as the source of TypeScript types, keeping the two in sync through z.infer. For styling I chose Tailwind CSS over Bootstrap to avoid a generic look and to challenge myself to strengthen my CSS skills",
    stack: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "Zustand",
      "Zod",
      "React Hook Form",
    ],
    githubUrl:
      "https://github.com/NoroffFEU/jsfw-2025-v1-tina-js-framework/tree/main/storefront",
    liveUrl: "https://jsfw-2025-v1-tina-js-framework.vercel.app/",
  },
];
