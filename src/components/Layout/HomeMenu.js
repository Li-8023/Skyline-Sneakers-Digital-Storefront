"use client";
import MenuItem from "@/components/Menu/MenuItem";
import SectionHeaders from "@/components/Layout/SectionHeaders";
import { useEffect, useState } from "react";
export default function HomeMenu() {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((menuItems) => {
        setBestSellers(menuItems.slice(-3));
      });
    });
  }, []);
  return (
    <section>
      <div className="text-center mt-4 mb-4">
        <SectionHeaders
          subHeader={"check out"}
          mainHeader={"Our Best Sellers"}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {bestSellers?.length > 0 && bestSellers.map(item => (
          <MenuItem {...item} />
        ))}
      </div>
    </section>
  );
}
