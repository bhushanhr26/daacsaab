import React, { lazy, Suspense, suspense } from "react";
import * as ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import OneTap from "./views/One-tap/js/OneTap";
export default function DaacSaabRoutes() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/One-tap" element={<OneTap />} />

      </Routes>
    </Suspense>
  );
}
