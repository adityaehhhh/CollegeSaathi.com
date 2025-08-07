"use client";

import React, { useRef } from "react";
import { TextScroll } from "@/components/ui/text-scroll";
import { CardCarousel } from "@/components/ui/card-carousel";
import Navbar from "@/components/ui/navbar";
import "./page.css";
import { Swiper as SwiperType } from "swiper";
import FeatureCard from "@/components/ui/compiler";
import FeatureCardRight from "@/components/ui/card";
import IconShowcase from "@/components/ui/icons";
import AnimatedRing from "@/components/ui/users";

const images = [
  {
    src: "/assets/1.png",
    alt: "Image 1",
    title: "Smart Analyser",
    description: "Analyze your code with AI insights",
  },
  {
    src: "/assets/2.png",
    alt: "Image 2",
    title: "Code Battles",
    description: "Challenge peers in coding duels",
  },
  {
    src: "/assets/3.jpg",
    alt: "Image 3",
    title: "Creative Playground",
    description: "Build and test your ideas in real-time",
  },
  {
    src: "/assets/4.jpeg",
    alt: "Image 4",
    title: "AI Assistant",
    description: "Your intelligent coding companion",
  },
  {
    src: "/assets/4.jpeg",
    alt: "Image 5",
    title: "AI Assistant",
    description: "Your intelligent coding companion",
  },
  {
    src: "/assets/4.jpeg",
    alt: "Image 6",
    title: "AI Assistant",
    description: "Your intelligent coding companion",
  },
];

const isLoggedIn = false;

const Analyser = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="page-wrapper">

      <video autoPlay muted loop playsInline className="background-video">
        <source src="/assets/dash-back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Navbar isLoggedIn={isLoggedIn} />

      <div className="content">

        <FeatureCardRight
          title="Smart Code Analyser"
          subtitle="AI-Powered Insights"
          description="Transform your coding experience with our AI-driven code analyser. Get real-time feedback, suggestions, and improvements to enhance your coding skills."
          imageSrc="/assets/1.png"
          buttonText="Try Now"
          blurStrength="backdrop-blur-lg"/>

        <FeatureCard
          title="Resume Checker & Suggester"
          subtitle="AI-Powered Resume Insights"
          description="Boost your job prospects with our intelligent resume analyzer. Get personalized feedback and smart suggestions to make your resume stand out to recruiters."
          imageSrc="/assets/1.png"
          buttonText="Check My Resume"
          blurStrength="backdrop-blur-lg"
          onClick={() => console.log('Resume check initiated')}
          />

        <FeatureCardRight
          title="Mock Interviews"
          subtitle="AI-Powered Insights"
          description="Transform your coding experience with our AI-driven code analyser. Get real-time feedback, suggestions, and improvements to enhance your coding skills."
          imageSrc="/assets/1.png"
          buttonText="Try Now"
          blurStrength="backdrop-blur-lg"/>


    </div>
  </div>
  );
};

export default Analyser;