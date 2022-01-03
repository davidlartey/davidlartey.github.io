interface ArticleMeta {
  title: string,
  slug: string,
  description: string,
}

interface ArticleInfo {
  meta: ArticleMeta,
  content: string
}

export type {
  ArticleMeta,
  ArticleInfo,
}
