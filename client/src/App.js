import { useSelector, useDispatch } from "react-redux";
import PostItem from "./components/PostItem";
import ModalPost from "./components/ModalPost";
import { setShowModalCreate, getPostAction } from "./redux/TodoSlice";
import { useEffect } from "react";
import ModalUpdatePost from "./components/ModalUpdatePost";

function App() {
  const posts = useSelector((state) => {
    return state.post.posts;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAction());
  }, []);

  // Show Modal Create

  const handleClickShowCreate = () => {
    dispatch(setShowModalCreate(true));
  };

  return (
    <div id="btnpos">
      <div style={{ display: "flex", marginLeft:'-5px',marginRight:'-5px', flexWrap: "wrap"}}>
        {posts.map((item, index) => (
          <PostItem post={item} key={index} />
        ))}
      </div>

      <button
        onClick={handleClickShowCreate}
        id="btnadd"
      ><i className="fa fa-plus"
      aria-hidden="true"></i></button>

      <ModalPost />
      <ModalUpdatePost />
    </div>
  );
}

export default App;
