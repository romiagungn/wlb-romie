import { Home, CreatePost, EditPost, PostDetail } from "./pages";

const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/post/:id", name: "Post", component: PostDetail },
  { path: "/create", name: "Create Post", component: CreatePost },
  { path: "/edit/:id", name: "Edit Post", component: EditPost },
];

export default routes;
