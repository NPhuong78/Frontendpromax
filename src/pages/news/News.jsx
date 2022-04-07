import "./news.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import { BackTop } from 'antd';
import { Container } from "react-bootstrap";
export default function News() {

    return (
      <>
        <Container>
          <div class="NewsTitle">Tin Tức Và Sự Kiện</div>
        </Container>
        <div className="home">

          <Posts />
          <Sidebar />

       </div>
       <div className="pagination">
        <Pagination defaultCurrent={1} total={50} />
        </div>
            <>
              <BackTop />
              <strong className="site-back-top-basic"></strong>
            </>,
            <Footer /> 
        </>


    
    );
  }