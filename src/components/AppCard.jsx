/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function AppCard({ content, icon }) {
  return (
    <div className="appCard">
      <div className="appCard__icon cursor-pointer p-5 scale-100">
        <img
          src={icon}
          alt="app icon"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          className=" rounded-lg w-[240px] h-[140px]"
        />
      </div>
    </div>
  );
}
