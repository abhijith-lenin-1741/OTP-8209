"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from 'antd';
const { Meta } = Card;

const Documents = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get("api/documents");
        setData(response.data.docs);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []); 


  if (loading) {
    return <p>Loading documents...</p>;
  }

  if (error) {
    return <p>Error fetching documents: {error}</p>;
  }

  // Render the documents
  return (
    <div>
      <h1>Documents</h1>
      <ul className="main">
      {data?.map((user) => (
          <Card key={user?.id}
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img alt="example" src="https://www.blvdca.com/iloveblvdimages/Slide%20-%20Say%20Goodbye%20to%20Summer.jpg" />
            }
          >
            <Meta title={user?.name} description={user?.description} />
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default Documents;
