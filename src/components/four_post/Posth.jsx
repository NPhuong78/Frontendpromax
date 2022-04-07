import { Link } from "react-router-dom";
import { useEffect , useState } from "react";
import axios from "axios";
import "./posth.css";

export default function Posth({img}) {
  const [listPost, setListPost] = useState([]);

  useEffect(() => {
    const getListPost = async () => {
      const res = await axios.get("http://localhost:3001/news?page=1&limit=4");
      setListPost(res.data);
      console.log("check",res.data)
   };
   
   getListPost()
  },[]);
   
  
  return (
    
    <div className="list-user-container">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    {listPost.length > 0  &&
                        listPost.map((item) => {
                            return (
                              <div className="post">
                              //   <img
                                  className="postImg"
                                  src={item.image}
                                  alt=""
                                />
                                <div className="postInfo">
                                  <div className="postCats">
                                    <span className="postCat">
                                      <Link className="link" to="/posts?cat=Music">
                                        Music
                                      </Link>
                                    </span>
                                    <span className="postCat">
                                      <Link className="link" to="/posts?cat=Life">
                                        Life
                                      </Link>
                                    </span>
                                  </div>
                                  <div className="postTitle">
                                    <Link to="/post/abc" className="link">
                                       {item.title}
                                    </Link>
                                    <br/>
                                      <span className="postDate">1 hour ago</span>            
                                  </div>
                                </div>
                              </div>
                            )
                        })
                    }

                </div>

            </div>



    // <div className="post">
    //   <img
    //     className="postImg"
    //     src={img}
    //     alt=""
    //   />
    //   <div className="postInfo">
    //     <div className="postCats">
    //       <span className="postCat">
    //         <Link className="link" to="/posts?cat=Music">
    //           Music
    //         </Link>
    //       </span>
    //       <span className="postCat">
    //         <Link className="link" to="/posts?cat=Life">
    //           Life
    //         </Link>
    //       </span>
    //     </div>
    //     <div className="postTitle">
    //       <Link to="/post/abc" className="link">
    //         Lorem ipsum dolor sit amet
    //       </Link>
    //       <br/>
    //         <span className="postDate">1 hour ago</span>            
    //     </div>
    //   </div>
    // </div>
  );
}
