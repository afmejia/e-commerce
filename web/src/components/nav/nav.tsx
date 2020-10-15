import React from "react";
import "antd/dist/antd.css";
import ProductList from "../products/productList";
import { Tabs, Pagination } from "antd";

const { TabPane } = Tabs;

const Nav = () => {
  const data = [
    {
      title: "Uhd-4k led",
      imgSrc:
        "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/7/7/7705191036373_2.jpg",
    },
    {
      title: "Crystal 43 FullHd' ",
      imgSrc:
        "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/7/7/7705191036373_2.jpg",
    },
    {
      title: "Uhd-4k led",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREjlwtPP97l_qDQ8mkoiXJZT8DJrY0bR00KTSxceWmzYMtKk88wOg41olX6CIn3n0wrUUWXP4&usqp=CAc",
    },
    {
      title: "Uhd-4k led",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREjlwtPP97l_qDQ8mkoiXJZT8DJrY0bR00KTSxceWmzYMtKk88wOg41olX6CIn3n0wrUUWXP4&usqp=CAc",
    },
  ];

  const mainMenu = (
    <div>
      <Tabs defaultActiveKey="1" onChange={() => console.log("hii")} centered>
        <TabPane
          tab="Tecnología"
          key="1"
          style={{ marginLeft: 8, marginTop: 20 }}
        >
          <Tabs defaultActiveKey="1.1" tabPosition="left">
            <TabPane tab="Televisores" key="1.1">
              <ProductList data={data} />
              <Pagination defaultCurrent={1} total={50} />
            </TabPane>
            <TabPane tab="Celulares" key="1.2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Computadores" key="1.3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </TabPane>
        <TabPane tab="Hogar" key="2" style={{ marginLeft: 8, marginTop: 20 }}>
          <Tabs defaultActiveKey="2.2" tabPosition="left">
            <TabPane tab="Neveras" key="2.1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Lavadoras" key="2.2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Muebles" key="2.3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </TabPane>
        <TabPane tab="Hogar" key="3" style={{ marginLeft: 8, marginTop: 20 }}>
          <Tabs defaultActiveKey="3.2" tabPosition="left">
            <TabPane tab="Clásicos de ayer y hoy" key="3.1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="En oferta" key="3.2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Lo nuevo" key="3.3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </TabPane>
      </Tabs>
    </div>
  );

  return mainMenu;
};

export default Nav;
