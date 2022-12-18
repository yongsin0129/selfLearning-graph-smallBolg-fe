import { gql } from '@apollo/client'

export const GET_All_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
    }
  }
`
export const GET_All_POSTS = gql`
  query PostsForAuthor {
    posts {
      id
      title
      body
    }
  }
`
export const ADD_POST = gql`
  mutation AddPost($input: AddPostInput!) {
    addPost(input: $input) {
      id
      title
      body
    }
  }
`
export const GET_SinglePost = gql`
  query PostDetail($postId: ID!) {
    post(id: $postId) {
      id
      title
      body
      author {
        name
      }
      likeGivers {
        id
        name
      }
    }
  }
`
export const LIKE_POST = gql`
  mutation ($postId: ID!) {
    likePost(postId: $postId) {
      id
      title
      body
      author {
        id
        name
      }
      likeGivers {
        id
        name
      }
    }
  }
`