import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import Departments from "../../components/Department/Department";
import Features from "../../components/features/Features";
import Footer from "../../components/Footer/Footer";
import { BackTop } from "antd";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
      <Departments />
      </div>

      <div className="news">
        <Features />
        {/* <Posts />
        <Sidebar /> */}
      </div>

     <BackTop/>
      <div className="bottom">
        <Footer />
      </div>

    </>
  );
}
