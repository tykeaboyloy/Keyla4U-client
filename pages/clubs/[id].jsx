import React from "react";
import { useRouter } from "next/router";

const club = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>{id}</div>;
};

export default club;
