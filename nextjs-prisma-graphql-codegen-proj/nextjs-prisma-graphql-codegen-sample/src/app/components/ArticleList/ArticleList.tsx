'use client'
import type { FC, FormEventHandler } from 'react'
import { useEffect, useState } from 'react'

import type { ArticlesQuery } from '@/generated/request'
import {
  useAddArticleMutation,
  useArticlesQuery,
  useDeleteArticleMutation,
  useUpdateArticleMutation,
} from '@/generated/request'

export const ArticleList: FC = () => {
  const [articleTitle, setArticleTitle] = useState('')
  const [articles, setArticles] = useState<ArticlesQuery['articles']>([])
  const { loading, error, data } = useArticlesQuery()
  const [addArticleMutation] = useAddArticleMutation()
  const [updateArticleMutation] = useUpdateArticleMutation()
  const [deleteArticleMutation] = useDeleteArticleMutation()

  useEffect((): void => {
    setArticles(data?.articles ?? [])
  }, [data?.articles])

  if (loading) return <div>loading...</div>
  if (error) return <div>error! {error.message}</div>
  if (!data?.articles) return null

  return <div className="p-5 border rounded">article List</div>
}
