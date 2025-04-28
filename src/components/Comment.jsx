function Comment({ comment }) {
    return (
      <div className="comment">
        <p>{comment.content}</p>
        <p><small>{new Date(comment.created_at).toLocaleString()}</small></p>
      </div>
    );
  }
  
  export default Comment;
  