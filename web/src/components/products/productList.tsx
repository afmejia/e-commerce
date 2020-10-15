import React from "react";
import { List, Card } from "antd";

const { Meta } = Card;

const ProductList = (props: any) => {
  const renderItem = (item: any) => (
    <List.Item>
      <Card hoverable cover={<img alt="example" src={item.imgSrc} />}>
        <Meta title={item.title} description="www.instagram.com" />
      </Card>
    </List.Item>
  );

  return (
    <List
      grid={{ gutter: 10, column: 3 }}
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={props.data}
      renderItem={renderItem}
    ></List>
  );
};

export default ProductList;
