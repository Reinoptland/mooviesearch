import React from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const routeParameters = useParams();
  console.log(routeParameters);

  return <div>DETAILS</div>;
}
