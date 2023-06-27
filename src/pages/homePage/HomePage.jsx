import React, { useState } from "react";
import {
  Button,
  Space,
  Col,
  Row,
  Card,
  Radio,
  Carousel,
  Rate,
  Input,
} from "antd";
import {
  RightOutlined,
  LeftOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { CancelButton } from "../../components/buttonComponent/ButtonComponent";
import "./homePage.css";
import { menu, service, minum, feedback, heroex, heroex2 } from "./constant";
import {
  GoogleButton,
  Logo,
  Herobackground,
  Herofood,
  iga,
  sateayam,
  satedaging,
  empal,
  jahe,
  mangga,
  cincau,
  teh,
  Heromob,
  pap,
} from "../../assets/index";

import {
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { useQuery, gql } from "@apollo/client";
import { GET_CV } from "./querydata";

import useMediaQuery from "./query";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";
// import { Link } from 'react-router-dom';

import axios from "axios";
const { Meta } = Card;

const HomePage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { loading, error, data } = useQuery(GET_CV);

  const [section, setSection] = useState("food");
  const onChange = ({ target: { value } }) => {
    setSection(value);
  };
  if (loading)
    return (
      <p>
        <LoadingComponent />
      </p>
    );
  if (error) return <p>Error : {error.message}</p>;

  const { cv } = data;
  console.log("CV Data:", cv);

  return (
    <div>
      {cv.map((item) => (
        <div key={item.id}>
          <div className="heroback">
            <h1
              style={{
                color: "white",
                marginTop: "-2%",
              }}
            >
              test
            </h1>
            <div className="hero">
              <div className="herocontai">
                <img
                  class="herofood"
                  src={pap}
                  alt="Image"
                  style={{ borderRadius: "50%", width: "40%" }}
                />

                <div className="heroleft">
                  <div className="herotext1">
                    <h1 className="herodis">Hi Everyone, I am</h1>
                    <h1 className="heroher">{item.nama}</h1>
                    <p style={{ width: "500px" }}>{item.deskripsi} </p>{" "}
                  </div>
                  <br />
                  <Button
                    type="primary"
                    className="buttonget"
                    style={{
                      backgroundColor: "#2B2A4C",
                      borderColor: "#2B2A4C",
                    }}
                  >
                    Contact me{" "}
                  </Button>
                  <Space
                    wrap
                    direction="horizontal"
                    className="herosocial"
                    style={{ marginRight: "80px" }}
                  >
                    <Button
                      className="heroic"
                      icon={
                        <a
                          href="https://www.linkedin.com/in/cantikafiralya/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkedinOutlined className="heroicon" />
                        </a>
                      }
                    />

                    <Button
                      className="heroic"
                      icon={
                        <a
                          href="https://github.com/cantikafiralya"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GithubOutlined className="heroicon" />
                        </a>
                      }
                    />

                    <Button
                      className="heroic"
                      icon={
                        <a
                          href="mailto:tikafiralya@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MailOutlined className="heroicon" />
                        </a>
                      }
                    />

                    <Button
                      className="heroic"
                      icon={
                        <a
                          href="https://wa.me/+6281333144271"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <WhatsAppOutlined className="heroicon" />
                        </a>
                      }
                    />
                  </Space>
                </div>
              </div>
            </div>
            <h1
              style={{
                color: "white",
                marginTop: "-2%",
              }}
            >
              test
            </h1>
          </div>

          <section id="services" className="SERVICE">
            <h2 className="titleS">Skill</h2>
            <div>
              <div className="heroexcess">
                <Space direction="horizontal">
                  <Row justify="center">
                    {heroex.map((item) => (
                      <Col className="heroexc">
                        <div className="herocontent">
                          <img
                            className="hlogo"
                            src={item.logo}
                            alt="logo"
                            style={{ width: "200px" }}
                          />
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Space>
              </div>
            </div>
          </section>

          <section id="menu" className="MENU">
            <h2 className="titleM">Project</h2>

            <Space direction="horizontal" style={{ justifyContent: 'center', margin: '20px' }}>
            <Row justify="center" gutter={[16, 16]}>
  {heroex2.map((item) => (
    <Col className="heroexc2" key={item.id}>
      <Card hoverable style={{ width: "240px", height: "320px" }}>
        <img
          className="hlogo"
          src={item.logo}
          alt="logo"
          style={{ width: "100%", height: "auto", maxHeight: "200px" }}
        />
        <Meta
          title={item.judul}
          description={<a href={item.desc} target="_blank" rel="noopener noreferrer">{item.desc}</a>}
        />
      </Card>
    </Col>
  ))}
</Row>

</Space>


          </section>


        </div>
      ))}
    </div>
  );
};
export default HomePage;

function FoodMenu() {
  return (
    <Space direction="horizontal">
      <Row justify="center" gutter={15}>
        {menu.map((item) => (
          <Col span={6} xs={24} sm={24} md={24} lg={6} xl={6}>
            <Card
              className="cardM"
              value="food"
              cover={<img className="imgM" alt="example" src={item.foto} />}
            >
              <p className="judulM">{item.judul}</p>
              <p className="kotaM">{item.kota}</p>
              <div className="hargakalor">
                <p className="hargaM">{item.harga}</p>
                <p className="kalori">{item.kalor}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Space>
  );
}

function DrinkMenu() {
  return (
    <Space direction="horizontal">
      <Row justify="center" gutter={15}>
        {minum.map((item) => (
          <Col span={6} xs={24} sm={24} md={24} lg={6} xl={6}>
            <Card
              className="cardM"
              value="drink"
              cover={<img className="imgM" alt="example" src={item.foto} />}
            >
              <p className="judulM">{item.judul}</p>
              <p className="kotaM">{item.kota}</p>
              <div className="hargakalor">
                <p className="hargaM">{item.harga}</p>
                <p className="kalori">{item.kalor}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Space>
  );
}

function FoodMenuCarousel() {
  return (
    <div className="carousel" style={{ zIndex: 0 }}>
      <div className="swiper-wrapper">
        <Space>
          <Row gutter={[40, 16]} justify="center" align="middle">
            <Carousel
              arrows={true}
              prevArrow={<LeftOutlined />}
              nextArrow={<RightOutlined />}
              style={{
                width: 265,
              }}
            >
              {menu.map((item) => (
                <Col xl={{ span: 8 }} md={{ span: 24 }}>
                  <div className="swiper-slide">
                    <img
                      style={{
                        width: 230,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                      src={item.foto}
                      alt="logo"
                    />
                    <p className="judulM">{item.judul}</p>
                    <p className="kotaM">{item.kota}</p>
                    <div className="hargakalor">
                      <p className="hargaM">{item.harga}</p>
                      <p className="kalori">{item.kalor}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Carousel>
          </Row>
        </Space>
      </div>
    </div>
  );
}

function DrinkMenuCarousel() {
  return (
    <div className="carousel" style={{ zIndex: 0 }}>
      <div className="swiper-wrapper">
        <Space>
          <Row gutter={[40, 16]} justify="center" align="middle">
            <Carousel
              arrows={true}
              prevArrow={<LeftOutlined />}
              nextArrow={<RightOutlined />}
              style={{
                width: 265,
              }}
            >
              {minum.map((item) => (
                <Col xl={{ span: 8 }} md={{ span: 24 }}>
                  <div className="swiper-slide">
                    <img
                      style={{
                        width: 230,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                      src={item.foto}
                      alt="logo"
                    />
                    <p className="judulM">{item.judul}</p>
                    <p className="kotaM">{item.kota}</p>
                    <div className="hargakalor">
                      <p className="hargaM">{item.harga}</p>
                      <p className="kalori">{item.kalor}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Carousel>
          </Row>
        </Space>
      </div>
    </div>
  );
}

function HeroRow() {
  return (
    <div className="heroexcess">
      <Space direction="horizontal">
        <Row justify="center">
          {heroex.map((item) => (
            <Col className="heroexc">
              <div className="herocontent">
                <img className="hlogo" src={item.logo} alt="logo" />
                <div className="hjuduldes">
                  <p className="hjudul">{item.judul}</p>
                  <p className="hdes">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Space>
    </div>
  );
}
function HeroCarousel() {
  return (
    <div className="heroexcess">

        {heroex.map((item) => (
          <Col className="heroexc">
            <div className="herocontent" style={{backgroundColor:"white"}}>
              <img className="hlogo" src={item.logo} alt="logo" />
              <div className="hjuduldes">
                <p className="hjudul">{item.judul}</p>
                <p className="hdes">{item.desc}</p>
              </div>
            </div>
          </Col>
        ))}
    </div>
  );
}

function FeedBackReviewMobile() {
  return (
    <div className="feedback">
      <Row gutter={[40, 16]} justify="center" align="middle">
        <Carousel
          arrows={true}
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
        >
          {feedback.map((item) => (
            <Col xl={{ span: 8 }} md={{ span: 24 }}>
              <Card className="card-feedback">
                <div className="ava-name">
                  <img className="ava-feedback" src={item.ava} alt="logo" />
                  <div className="name-role">
                    <p className="name-feedback">{item.nama}</p>
                    <p className="role-feedback">{item.role}</p>
                  </div>
                </div>
                <Rate disabled defaultValue={5} />
                <p className="desc-feedback">{item.desc}</p>
              </Card>
            </Col>
          ))}
        </Carousel>
      </Row>
    </div>
  );
}

function FeedBackReview() {
  return (
    <div className="feedback">
      <Row
        gutter={[40, 16]}
        justify="center"
        align="middle"
        className="row-feedback"
        style={{ marginLeft: 52 }}
      >
        {feedback.map((item) => (
          <Col xl={{ span: 8 }} md={{ span: 24 }}>
            <Card className="card-feedback">
              <div className="ava-name">
                <img className="ava-feedback" src={item.ava} alt="logo" />
                <div className="name-role">
                  <p className="name-feedback">{item.nama}</p>
                  <p className="role-feedback">{item.role}</p>
                </div>
              </div>
              <Rate disabled defaultValue={5} />
              <p className="desc-feedback">{item.desc}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

function SubsForm() {
  return (
    <div className="subscribe-form">
      <div className="subscribe-content">
        <p className="title-subs">Get more updates of Nusantara Foods</p>
        <p className="subs-text">
          Never miss out on the taste of Indonesia - Subscribe for exclusive
          updates
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Space.Compact className="input-button">
            <Input placeholder="Your email..." />
            <Button type="primary">Subscribe</Button>
          </Space.Compact>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

function SubsFormMobile() {
  return (
    <div className="subscribe-form-mobile">
      <div className="subscribe-content">
        <p className="title-subs-mobile">
          Get more updates of Nusantara Foods
          <br />
          <span className="subs-text-mobile">
            Never miss out on the taste of Indonesia - Subscribe for exclusive
            updates
          </span>
        </p>
        <Space>
          <Space.Compact className="input-button-mobile">
            <Input placeholder="Your email..." />
            <Button type="primary">Subscribe</Button>
          </Space.Compact>
        </Space>
      </div>
    </div>
  );
}
