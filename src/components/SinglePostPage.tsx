import { useParams, Link } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import * as gqlHelper from '../gql'

const VotePostButton: React.FC<IProps> = props => {
  const countVotes = (array: (User|null)[] | null | undefined) => array?.length || 0
  // array 也可以指定為 Maybe<Array<Maybe<Scalars['String']>>> | undefined
  const { singlePost } = props

  const [LIKE_POST_Mutation, mutationRes] = useMutation(gqlHelper.LIKE_POST)
  if (mutationRes.loading) return <p>mutation Loading...</p> // 因為 mutation 點下去也會 call useQuery 的 hook 所以不能有太多 return ?
  if (mutationRes.error) return <p>mutation Error </p>

  return (
    <div>
      <i
        className='material-icons'
        style={{ cursor: 'pointer' }}
        onClick={() => {
          LIKE_POST_Mutation({
            variables: {
              postId: singlePost.id
            }
          })
        }}
      >
        thumb_up
      </i>
      <span>{countVotes(singlePost.likeGivers)}</span>
    </div>
  )
}

const SinglePostPage = () => {
  let { id } = useParams()

  // const [LIKE_POST_Mutation, mutationRes] = useMutation(gqlHelper.LIKE_POST)
  // if (mutationRes.loading) return <p>mutation Loading...</p> // 因為 mutation 點下去也會 call useQuery 的 hook 所以不能有太多 return ?
  // if (mutationRes.error) return <p>mutation Error </p>

  const queryRes = useQuery(gqlHelper.GET_SinglePost, {
    variables: { postId: id }
  })
  if (queryRes.loading) return <p>query Loading...</p>
  if (queryRes.error) return <p>query Error </p>
  const { post } = queryRes.data
  const singlePage = (
    <div>
      <h3>title : {post.title}</h3>
      <h6>post id : {post.id}</h6>
      <h6>body : {post.body}</h6>
      <h6>author : {post.author.name}</h6>
      <hr />
      <VotePostButton singlePost={post} />
      <br />
      <Link to='/'>Back</Link>
    </div>
  )

  return singlePage
}
export default SinglePostPage
