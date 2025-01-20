import { useRouter } from "next/router";

const Article = () => {
  const router = useRouter();
  return <div>Article {router.query.projectId}</div>;
};

export default Article;
