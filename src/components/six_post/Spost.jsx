import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import "./spost.css";

export default function Posth() {

  const [listPost, setListPost] = useState([]);

  useEffect(() => {
    const getListPost = async () => {
      const res = await axios.get("http://localhost:3001/news?page=1&limit=6");
      setListPost(res.data);
      console.log("check",res.data)
   };
   
   getListPost()
  },[]);
   


    return (
      <div className="list-user-container">
                <div className="title">
                    123
                </div>
                <div className="list-user-content">
                    {listPost.length > 0  &&
                        listPost.map((item) => {
                            return (
                              <div className="post">
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
                                <span className="postTitles">
                                  <Link to="/post/abc" className="link">
                                             abv
                                  </Link>
                                    <br/>
                                    <span className="postDate">{item.createAt}</span>            
                                </span>
                                <hr />
                              </div>
                            </div>

                            )
                        })
                    }

                </div>

            </div>
      
    );
  }



  