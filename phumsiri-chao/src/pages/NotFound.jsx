import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router";

function NotFound() {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => setCount(count - 1), 1000);
    if (count == 0) navigate("/");
  }, [count]);
  return <div>
    <h1>Page not found 404 {count}</h1> </div>;
}


export default NotFound