export interface ArticleModel {
  id: number
  headline: string,
  summary: string,
  content: string,
  topics: string[],
  publishDate: Date
  imagePath: string,
}
