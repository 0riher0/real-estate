import React, { useEffect, useState } from "react";
import HorizontalCard from "../../components/h-card/HCard";
import './horizontalList.scss'

export default function HorizontalList() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="hList">
      <HorizontalCard />
    </div>
  );
}
