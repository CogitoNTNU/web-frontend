import { Metadata } from "next";
import { articles } from "../../../../data/articles";
import ArticleClient from "./article-client";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ projectId: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({
    projectId: article.articleId,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { projectId } = await params;
  const article = articles.find((article) => article.articleId === projectId);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.landingPage.title,
    description: article.landingPage.description,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { projectId } = await params;
  const article = articles.find((article) => article.articleId === projectId);

  if (!article) {
    notFound();
  }

  return <ArticleClient article={article} />;
}
