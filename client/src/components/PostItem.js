import { useDispatch } from 'react-redux';
import '../App.css'
import { deletePostAction , setShowModalUpdate , setPostClick } from '../redux/TodoSlice';

const PostItem = ({post}) => {

    const dispatch = useDispatch() ;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 pubg">
            <div className="our-team">
                <div className="picture">
                    <img className="img-fluid" src="https://picsum.photos/130/130?img=1027" />
                </div>
                <div className="team-content">
                    <h3 className="name">{post.author}</h3>
                    <h4 className="title">{post.title}</h4>
                </div>
                <ul className="social">
                    <li><i className="fa fa-heart" aria-hidden="true"></i></li>
                    <li><i className="fa fa-edit" aria-hidden="true"
                        onClick= { () => {
                            dispatch(setPostClick(post))
                            dispatch(setShowModalUpdate(true))
                        }}
                    ></i></li>
                    <li><i className="fa fa-remove" aria-hidden="true"
                        onClick= { () => 
                            dispatch(deletePostAction(post._id))
                        }
                    ></i></li>
                </ul>
            </div>
        </div>
    )
}

export default PostItem