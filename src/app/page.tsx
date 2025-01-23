"use client";
import { useState } from "react";
import 'animate.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import 'remixicon/fonts/remixicon.css'
import Home from "@/components/Home";
import Teacher from "@/components/Teacher";
import Holiday from "@/components/Holidays";
import Contact from "@/components/ContactUs";

const Page = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teacher />} />
        <Route path="/holiday" element={<Holiday />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Page;

