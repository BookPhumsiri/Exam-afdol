import React, {useEffect, useState} from 'react'
import { Card, Image, Row, Col } from "antd";

function FetchApi() {
     const [data, setData] = useState([]);
     useEffect(() => {
    fetch("https://fakesstoreapi.com/products")
      .then((res) => res.json())
      .then((apiData) => setData(apiData.products));
  }, []);
  return (
    <div>
        <h1>ข้อมูลต่างๆ</h1>
        <Row gutter={[20, 20]}>
        {data.map((item, index) => {
          return (
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card key={index} title={item.title}>
                <Image
                  src={item.images[0]}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    marginBottom: "1rem",
                  }}
                />
                <p>{item.description}</p>
                <p>price : {item.price}</p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  )
}

export default FetchApi