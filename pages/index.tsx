import { useState, useEffect } from "react";
import Auth from "./components/auth";

export default function Home() {
  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      <Auth></Auth>
    </div>
  );
}
