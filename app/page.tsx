"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
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

const iconsList = [
  { src: '/assets/css.svg', label: 'CSS' },
  { src: '/assets/js.svg', label: 'JavaScript' },
  { src: '/assets/vue.svg', label: 'Vue' },
  { src: '/assets/angular.svg', label: 'Angular' },
  { src: '/assets/react.svg', label: 'React' },
];

const stats = [
  { label: 'Registered Users', percentage: 75, color: '#4F46E5' },
  { label: 'WhatsApp Members', percentage: 50, color: '#10B981' },
  { label: 'Discord Members', percentage: 30, color: '#6366F1' },
  { label: 'Instagram', percentage: 90, color: '#F43F5E' },
];

const isLoggedIn = false;

const Page = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const router = useRouter();

  return (
    <div className="page-wrapper">
      <video autoPlay muted loop playsInline className="background-video">
        <source src="/assets/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Navbar isLoggedIn={isLoggedIn} />

      <div className="content">
        {/* Hero Section */}
        <section className="section full-screen center">
          <h1 className="page-title text-6xl sm:text-7xl md:text-9xl text-white text-center">
            Code Saathi
          </h1>
          <p className="page-subtitle text-4xl sm:text-2xl md:text-4xl text-white text-center mt-4">
            Your AI coding companion
          </p>

          <button
            className="get-started-btn mt-8 px-6 py-3 text-white bg-yellow-500 rounded-full hover:shadow-lg transition"
            onClick={() => router.push("/login")}
          >
            Get Started
          </button>

          <div className="scroll-indicator mt-10 flex flex-col items-center text-white">
            <span className="mb-2 text-sm sm:text-base">Scroll down to explore</span>
            <div className="mouse w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
              <div className="wheel w-1 h-1 bg-white rounded-full animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* Scrolling Text Section */}
        <section className="section center">
          <TextScroll
            text="Welcome to Code Saathi"
            default_velocity={5}
            className="text-4xl sm:text-5xl md:text-8xl font-bold text-white text-center"
          />
        </section>

        {/* Carousel Section */}
        <section className="section center h-screen relative">
          <h1>What We Offer</h1>
          <br />
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-4 top-1/2 z-20 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black"
          >
            ←
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-4 top-1/2 z-20 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black"
          >
            →
          </button>

          <CardCarousel
            images={images}
            autoplayDelay={2000}
            showPagination={true}
            onSwiperInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          />
        </section>

        <FeatureCard
          title="Live Code Pair & Micro Project"
          subtitle="Real-Time Collaboration"
          description="Work together with peers on bite-sized coding projects."
          imageSrc="/assets/1.png"
          buttonText="Start Collaborating"
          blurStrength="backdrop-blur-lg"
          onClick={() => router.push("/playground")}
        />

        <FeatureCardRight
          title="Smart Code Analyser"
          subtitle="AI-Powered Insights"
          description="Transform your coding experience with our AI-driven analyser."
          imageSrc="/assets/1.png"
          buttonText="Try Now"
          blurStrength="backdrop-blur-lg"
          onClick={() => router.push("/analyser")}
        />

        <FeatureCard
          title="Resume Checker & Suggester"
          subtitle="AI-Powered Resume Insights"
          description="Get smart suggestions to improve your resume."
          imageSrc="/assets/1.png"
          buttonText="Check My Resume"
          blurStrength="backdrop-blur-lg"
          onClick={() => router.push("/templates")}
        />

        <FeatureCardRight
          title="Code Battles"
          subtitle="Challenge Peers"
          description="Compete in coding duels and improve your skills."
          imageSrc="/assets/2.png"
          buttonText="Join Battle"
          blurStrength="backdrop-blur-lg"
          onClick={() => router.push("/battleground")}
        />

        <FeatureCard
          title="Creative Playground"
          subtitle="Test Your Ideas"
          description="Experiment with code in a live environment."
          imageSrc="/assets/3.jpg"
          buttonText="Launch Playground"
          blurStrength="backdrop-blur-xl"
          onClick={() => router.push("/playground")}
        />

        {/* Icon & Community Sections */}
        <IconShowcase
          title="50+ Powerful In-Browser IDE Templates to Practice On"
          icons={iconsList}
        />

        <main className="flex items-center justify-center p-8">
          <div className="bg-white/5 backdrop-blur-[20px] rounded-2xl shadow-2xl border border-white/10 px-10 py-12 mx-4">
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-10 tracking-tight">
              Platform Engagement
            </h2>

            <div className="flex flex-wrap justify-center gap-14 px-6">
              {stats.map((item, index) => (
                <AnimatedRing
                  key={index}
                  label={item.label}
                  percentage={item.percentage}
                  color={item.color}
                />
              ))}
            </div>
          </div>
        </main>

        <IconShowcase
          title="Join Our Community of More Than 1000+ Developers"
          icons={iconsList}
        />
      </div>
    </div>
  );
};

export default Page;
