import  {  useState } from 'react'
import swal from 'sweetalert';
import './commentList.css'
import UpdateComment from './updateComment';
import Moment from 'react-moment'
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../../redux/apiCalls/commentApi';

const CommentList = ({comments}) => {
  const dispatch=useDispatch()
    const {user} =useSelector((state)=>state.auth)
  const [updateComment,setupdateComment]=useState(false)
  const [updateCommentModel,setupdateCommentModel]=useState(null)

  const handleUpdateComment=(comment)=>{
    setupdateCommentModel(comment)
    setupdateComment(true)
  }


    const handleDelete=(commentId)=>{
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this comment !",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((isOk) => {
          if (isOk) {
            dispatch(deleteComment(commentId))
            interval()
          } else {
            swal("Something went Wrong!");
          }
        })
      } 
      function interval(){
        const myInterval=setInterval(()=>{
          window.location.reload()
        },2000)
        return () => {
          clearInterval(myInterval);
        };
      }
      return (
    <div className="comment-list">
    <h4 className="comment-list-count">{comments?.length} comments</h4>
    {comments?.map((comment) => (
      <div key={comment._id} className="comment-item">
        <div className="comment-item-info">
          <div className="comment-item-user-info">
        
            <span className="comment-item-username">{comment?.username}</span>
          </div>
          <div className="comment-item-time"> 
          <Moment >
          {comment?.createdAt} 
          </Moment> {""}
          ago
          </div>
        </div>
        <p className="comment-item-text">{comment?.text}</p>
        {user?._id === comment?.user&&
        <div className="comment-item-icon-wrapper">
          <i
    onClick={()=>handleUpdateComment(comment)}
            className="fa-solid fa-pencil"
          style={{color:"#0275d8",fontSize:"24px"}}
            
          ></i>
          <i  className="fa-solid fa-trash mx-3"
          style={{color:"#df1616",fontSize:"24px"}}
          onClick={()=>handleDelete(comment?._id)}></i>
        </div>}
      </div>
        ))}
  {updateComment&&<UpdateComment 
  setupdateComment={setupdateComment} updateCommentModel={updateCommentModel} />}
  </div>
  )
}

export default CommentList