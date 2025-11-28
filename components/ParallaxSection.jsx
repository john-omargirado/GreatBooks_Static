'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ParallaxSection() {
    const containerRef = useRef(null);
    const backgroundRef = useRef(null);
    const foregroundRef = useRef(null);

    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        const background = backgroundRef.current;
        const foreground = foregroundRef.current;

        if (!container || !background || !foreground) return;

        // Create parallax effect for background layer (slower movement)
        gsap.to(background, {
            y: 300,
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                markers: false, // Set to true for debugging
            },
        });

        // Create parallax effect for foreground layer (faster movement)
        gsap.to(foreground, {
            y: 150,
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: 'bottom top',
                scrub: 0.5,
                markers: false, // Set to true for debugging
            },
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen overflow-hidden bg-black"
        >
            {/* Background Layer - Ancient Greek Battlefield */}
            <div
                ref={backgroundRef}
                className="absolute inset-0 w-full h-full z-0"
                style={{
                    willChange: 'transform',
                }}
            >
                <div className="relative w-full h-full">
                    <Image
                        src="/images/Background.png"
                        alt="Ancient Greek battlefield"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                </div>
            </div>

            {/* Foreground Layer - Warriors and Troy */}
            <div
                ref={foregroundRef}
                className="absolute inset-0 w-full h-full z-10"
                style={{
                    willChange: 'transform',
                }}
            >
                <div className="relative w-full h-full">
                    <Image
                        src="/images/Foreground.png"
                        alt="Greek warriors and the walls of Troy"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                </div>
            </div>

            {/* Hero Content - The Iliad Title and Description */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <div className="text-center px-4 max-w-5xl mx-auto">
                    {/* Greek Key Pattern Decoration */}
                    <div className="mb-6 flex justify-center">
                        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60"></div>
                    </div>

                    {/* Epic Title */}
                    <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 drop-shadow-2xl mb-6 tracking-wider">
                        THE ILIAD
                    </h1>

                    {/* Subtitle */}
                    <p className="text-2xl md:text-3xl text-amber-100 font-serif italic mb-4 drop-shadow-lg">
                        by Homer
                    </p>

                    {/* Epic Description */}
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg mb-8">
                        An ancient Greek epic poem of war, honor, and the wrath of Achilles.
                        Experience the legendary tale of the Trojan War.
                    </p>

                    {/* Greek Key Pattern Decoration */}
                    <div className="flex justify-center mb-8">
                        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60"></div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="animate-bounce mt-12">
                        <svg
                            className="w-8 h-8 mx-auto text-amber-400"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                        <p className="text-amber-300 text-sm mt-2 tracking-widest">SCROLL TO EXPLORE</p>
                    </div>
                </div>
            </div>

            {/* Seamless Bottom Gradient Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-30 pointer-events-none" />
        </section>
    );
}
