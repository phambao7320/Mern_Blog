import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { setShowModalUpdate , updatePostAction } from "../redux/TodoSlice";


const ModalUpdatePost = () => {

    const dispatch = useDispatch() ;

    const showModalUpdate =  useSelector((state) => {
        return state.post.showModalUpdate;
    });

    const post = useSelector((state) => {
        return state.post.post ;
    })

    useEffect ( () => {
        setId(post?post._id:'') ;
        setAuthor(post?post.author:'') ;
        setDesciption(post?post.desciption:'') ;
        setTitle(post?post.title:'') ;
    }, [post])

    const [author,setAuthor] = useState('') ;
    const [desciption,setDesciption] = useState('') ;
    const [title,setTitle] = useState('') ;
    const [_id,setId] = useState('') ;

    const handleChangeTitle = (e) => {
      setTitle(e.target.value) ;
    }
    const handleChangeDescription = (e) => {
      setDesciption(e.target.value) ;
    }
    const handleChangeAuthor = (e) => {
      setAuthor(e.target.value) ;
    }

    const handleUpdate = () => {
        const updatePost = {_id,author,title,desciption} ;
        dispatch(updatePostAction(updatePost)) ;
        closeDialog() ;
    }

    const closeDialog = () => {
      dispatch(setShowModalUpdate(false)) ;
    }

  return (
    <Modal show={showModalUpdate} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Modal Update Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>Author: </div>
        <input
          type="text"
          placeholder="Enter Author"
          onChange={handleChangeAuthor}
          value={author}
        />
        <div>Title: </div>
        <input
          type="text"
          placeholder="Enter title"
          onChange={handleChangeTitle}
          value={title}
        />
        <div>Description: </div>
        <input
          type="text"
          placeholder="Enter Description"
          onChange={handleChangeDescription}
          value={desciption}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeDialog}>Cancle</Button>
        <Button variant="primary" onClick={handleUpdate}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUpdatePost;
