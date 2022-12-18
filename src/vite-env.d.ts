/// <reference types="vite/client" />

type FCProps = { singlePost: {}; children?: any } // 自行定義一個 props 的格式
type IProps = React.PropsWithChildren<{ singlePost: Post }> // 使用 react 內建的 PropsWithChildren

type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  custom_Date: any
}
/** 貼文 */
type Post = {
  __typename?: 'Post'
  /** 作者 */
  author?: Maybe<User>
  /** 作者Id */
  authorId?: Maybe<Scalars['String']>
  /** 內容 */
  body?: Maybe<Scalars['String']>
  /** 建立時間 (ISO 格式) */
  createdAt?: Maybe<Scalars['String']>
  /** 識別碼 */
  id: Scalars['ID']
  /** 按讚者Id */
  likeGiverIds?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 按讚者 */
  likeGivers?: Maybe<Array<Maybe<User>>>
  /** 標題 */
  title?: Maybe<Scalars['String']>
}
/** 使用者 */
type User = {
  __typename?: 'User'
  /** 年齡 */
  age?: Maybe<Scalars['Int']>
  /** 帳號 email */
  email: Scalars['String']
  /** 朋友們的Id */
  friendIds?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 朋友 */
  friends?: Maybe<Array<Maybe<User>>>
  /** 識別碼 */
  id: Scalars['ID']
  /** 名字 */
  name?: Maybe<Scalars['String']>
  /** 貼文的Id */
  postIds?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 貼文 */
  posts?: Maybe<Array<Maybe<Post>>>
}
