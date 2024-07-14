import React from "react";
import { useParams } from "react-router-dom";
export default function NewsDetail() {
  const { id } = useParams();
  return <div>Hello News with {id}</div>;
}
