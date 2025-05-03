"use client";

import { useEffect, useState } from "react";

export default function ViewportWidthBox() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-4 left-4 p-2 bg-black text-white rounded shadow-lg text-sm z-50">
      Width: {width}px
    </div>
  );
}
