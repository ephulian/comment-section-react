// APIs
import { data } from './API/data';

// Styles
import './App.css';

// Components
import SectionCenter from './components/SectionCenter';
import Comment from './components/Comment';

function App() {
	const currentUser = data.currentUser;
	const allComments = data.comments;

	return (
		<section className='section-center'>
			{allComments.map((comment) => {
				return <Comment key={comment.id} currentUser={currentUser} {...comment}></Comment>;
			})}
		</section>
	);
}

export default App;
