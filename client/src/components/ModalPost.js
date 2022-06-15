import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { setShowModalCreate , createPostAction , getPostAction } from "../redux/TodoSlice";


const ModalPost = () => {

    const showModalCreate =  useSelector((state) => {
        return state.post.showModalCreate;
      });

    const dispatch = useDispatch() ;

    const [author,setAuthor] = useState('') ;
    const [desciption,setDesciption] = useState('') ;
    const [title,setTitle] = useState('') ;

    const handleChangeTitle = (e) => {
      setTitle(e.target.value) ;
    }
    const handleChangeDescription = (e) => {
      setDesciption(e.target.value) ;
    }
    const handleChangeAuthor = (e) => {
      setAuthor(e.target.value) ;
    }

    const handleDefault = () => {
      setAuthor('') ;  
      setDesciption('') ;
      setTitle('') ;
    }

    const handleCreate = () => {
      dispatch(createPostAction({author,title,desciption})) ;
      closeDialog() ;
    }

    const closeDialog = () => {
      handleDefault() ;
      dispatch(setShowModalCreate(false)) ;
    }

  return (
    <Modal show={showModalCreate} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>What do you learn ?</Modal.Title>
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
        <Button variant="primary" onClick={handleCreate}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPost;
