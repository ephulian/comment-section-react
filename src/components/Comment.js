import '../App.css';
// import '../images/avatars/'

function Comment(props) {
	// console.log(props);
	const { content, createdAt, currentUser, id, score, user } = props;
	const imgSrc = user.image.png;
	console.log(typeof imgSrc);

	return (
		<div className='comment-container'>
			<div className='score'>
				<div className='score-btn-container'>
					<h1 className='up'>+</h1>
				</div>
				<h1 className='current-score'>{score}</h1>
				<div className='score-btn-container'>
					<h1 className='down'>-</h1>
				</div>
			</div>
			<div className='main-section'>
				<div className='user'>
					<div className='user-info'>
						<div className='user-img-container'>
							<img
								className='user-img'
								src='./image-amyrobson.png'
								// src='../src/images/avatars/image-amyrobson.png'
								alt='profile photo'
							/>
						</div>
						<h2 className='username'>{user.username}</h2>
						<h2 className='created-at'>{createdAt}</h2>
					</div>
					<div className='reply-delete-buttons-container'>
						<h1 className='delete'>Delete</h1>
						<h1 className='reply-edit'>Reply</h1>
					</div>
				</div>
				<p className='comment-content'>{content}</p>
			</div>
		</div>
	);
}

export default Comment;
