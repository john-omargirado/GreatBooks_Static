'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function ImmortalLineCard({ imageSrc, alt, speaker, line, soundSrc, design }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        const onEnded = () => setIsPlaying(false);
        audio.addEventListener('ended', onEnded);
        return () => audio.removeEventListener('ended', onEnded);
    }, []);

    const togglePlay = async () => {
        const audio = audioRef.current;
        if (!audio) return;
        try {
            if (isPlaying) {
                audio.pause();
                setIsPlaying(false);
            } else {
                await audio.play();
                setIsPlaying(true);
            }
        } catch (e) {
            console.warn('Audio play failed', e);
        }
    };

    return (
        <div className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/90 backdrop-blur-md p-6 rounded-2xl border-2 border-amber-800/40 hover:border-amber-500/70 transition-all duration-500 overflow-hidden flex items-center gap-6 hover:shadow-2xl hover:shadow-amber-900/30 hover:scale-[1.02]">
            <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-amber-500/40 group-hover:ring-amber-400/60 transition-all duration-500 shadow-lg shadow-amber-900/50">
                <Image src={imageSrc} alt={alt} width={112} height={112} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
            </div>

            <div className="flex-1">
                <div className="flex items-start gap-4">
                    <div className="flex-1">
                        <div className="relative">
                            <div className="bg-gradient-to-br from-black/70 to-gray-900/80 backdrop-blur-sm text-gray-100 italic font-serif text-lg p-5 rounded-xl shadow-xl border border-amber-900/30 group-hover:border-amber-700/50 transition-colors duration-500">
                                <span className="text-amber-500/40 text-5xl font-serif absolute top-0 left-2 leading-none select-none">&ldquo;</span>
                                <span className="relative z-10">{line}</span>
                                <span className="text-amber-500/40 text-5xl font-serif absolute bottom-0 right-2 leading-none select-none">&rdquo;</span>
                            </div>
                            <div className="absolute -left-3 top-6 w-5 h-5 bg-gradient-to-br from-black/70 to-gray-900/80 rotate-45 border-l border-t border-amber-900/30" />
                        </div>

                        <div className="mt-4 flex items-center gap-3 pl-2">
                            <div className="w-8 h-px bg-gradient-to-r from-amber-500/70 to-transparent"></div>
                            <p className="text-amber-400 text-base font-bold tracking-wide">{speaker}</p>
                            <span className="text-amber-300/30 mx-1">|</span>
                            <p className="text-sm text-gray-400/90 italic">{design}</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2">
                        <button
                            onClick={togglePlay}
                            aria-pressed={isPlaying}
                            className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-900/50 hover:shadow-xl hover:shadow-amber-800/60 hover:scale-110 transition-all duration-300 active:scale-95 border-2 border-amber-300/30"
                            title={`Play ${speaker}`}
                        >
                            {isPlaying ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-900">
                                    <rect x="6" y="4" width="4" height="16" rx="1" />
                                    <rect x="14" y="4" width="4" height="16" rx="1" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-900 ml-0.5">
                                    <path d="M5 3l16 9-16 9V3z" />
                                </svg>
                            )}
                        </button>

                        <audio ref={audioRef} src={soundSrc} preload="none" />
                        <p className="text-xs text-amber-400/70 font-semibold tracking-wider uppercase">Play</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
