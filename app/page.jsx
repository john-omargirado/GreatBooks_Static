import ParallaxSection from '../components/ParallaxSection';

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Epic Parallax Hero Section - The Iliad */}
            <ParallaxSection />

            {/* Battlefield Scene Section */}
            <section className="relative min-h-screen w-full overflow-hidden -mt-1">
                {/* Background Image with Gradient Transition */}
                <div className="absolute inset-0 w-full h-full">
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: 'url(/images/troy-battlefield.png)',
                        }}
                    />
                    {/* Seamless Gradient Transition Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-transparent to-orange-900/20" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center px-4 py-32">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-block">
                                <h2 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-400 to-orange-300">
                                    The Battlefield of Troy
                                </h2>
                                <div className="h-1 w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-60"></div>
                            </div>
                        </div>

                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10 font-serif italic text-center max-w-4xl mx-auto">
                            "As is the generation of leaves, so is that of humanity. The wind scatters the leaves on the ground,
                            but the live timber burgeons with leaves again in the season of spring returning."
                        </p>

                        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-16 text-center">
                            On the blood-soaked plains before the walls of Troy, two armies clash in a war that will echo
                            through eternity. Here, heroes are forged in bronze and fire, where the fate of kingdoms hangs
                            in the balance with every thrust of the spear and every swing of the sword.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            <div className="group relative bg-gradient-to-br from-orange-950/90 to-gray-900/90 p-8 backdrop-blur-md border-2 border-orange-800/40 hover:border-orange-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-900/50 overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="w-12 h-12 border-2 border-orange-400 rotate-45 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                                            <div className="w-6 h-6 bg-orange-500/30"></div>
                                        </div>
                                        <div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-transparent"></div>
                                    </div>
                                    <h4 className="text-3xl font-bold mb-2 text-orange-300 uppercase tracking-wider">10 Years</h4>
                                    <p className="text-gray-200 leading-relaxed text-sm">The duration of the legendary siege of Troy</p>
                                </div>
                            </div>
                            <div className="group relative bg-gradient-to-br from-red-950/90 to-gray-900/90 p-8 backdrop-blur-md border-2 border-red-800/40 hover:border-red-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/50 overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="w-12 h-12 border-2 border-red-400 rotate-45 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                                            <div className="w-6 h-6 bg-red-500/30"></div>
                                        </div>
                                        <div className="h-px flex-1 bg-gradient-to-r from-red-500/50 to-transparent"></div>
                                    </div>
                                    <h4 className="text-3xl font-bold mb-2 text-red-300 uppercase tracking-wider">Two Armies</h4>
                                    <p className="text-gray-200 leading-relaxed text-sm">Greeks vs Trojans in an epic clash</p>
                                </div>
                            </div>
                            <div className="group relative bg-gradient-to-br from-amber-950/90 to-gray-900/90 p-8 backdrop-blur-md border-2 border-amber-800/40 hover:border-amber-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-900/50 overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="w-12 h-12 border-2 border-amber-400 rotate-45 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                                            <div className="w-6 h-6 bg-amber-500/30"></div>
                                        </div>
                                        <div className="h-px flex-1 bg-gradient-to-r from-amber-500/50 to-transparent"></div>
                                    </div>
                                    <h4 className="text-3xl font-bold mb-2 text-amber-300 uppercase tracking-wider">Helen</h4>
                                    <p className="text-gray-200 leading-relaxed text-sm">The face that launched a thousand ships</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Bottom Fade - Extended for Smooth Transition */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/90 to-transparent z-10"></div>
            </section>

            {/* Story Overview Section */}
            <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4 relative z-10 -mt-1">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <div className="inline-block">
                            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                                The Epic of Troy
                            </h2>
                            <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60"></div>
                        </div>
                    </div>

                    {/* Epic Introduction */}
                    <div className="space-y-8 text-gray-300 text-lg max-w-4xl mx-auto mb-16">
                        <p className="text-xl leading-relaxed text-gray-200 font-serif italic text-center">
                            "Sing, O goddess, the anger of Achilles son of Peleus, that brought countless ills upon the Achaeans..."
                        </p>
                        <p className="leading-relaxed">
                            The Iliad, composed by the legendary poet Homer around the 8th century BCE, stands as one of
                            the greatest works of ancient literature. Set during the final weeks of the ten-year siege of
                            Troy, this epic poem weaves together tales of heroism, honor, divine intervention, and the
                            devastating consequences of pride and wrath.
                        </p>
                        <p className="leading-relaxed">
                            At its heart lies the rage of Achilles, the greatest of all Greek warriors, whose quarrel
                            with King Agamemnon sets in motion a chain of events that will determine the fate of both
                            Greeks and Trojans alike.
                        </p>
                    </div>

                    {/* Key Themes Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="group relative bg-gradient-to-br from-red-950/40 to-gray-900/40 p-8 backdrop-blur-sm border-2 border-red-800/40 hover:border-red-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/50 overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="w-12 h-12 border-2 border-red-400 rotate-45 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                                        <div className="w-6 h-6 bg-red-500/30"></div>
                                    </div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-red-500/50 to-transparent"></div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-red-300 uppercase tracking-wider">War & Honor</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    The brutal reality of warfare and the pursuit of eternal glory through heroic deeds
                                    on the battlefield. Victory or death, there is no middle ground.
                                </p>
                            </div>
                        </div>
                        <div className="group relative bg-gradient-to-br from-amber-950/40 to-gray-900/40 p-8 backdrop-blur-sm border-2 border-amber-800/40 hover:border-amber-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-900/50 overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="w-12 h-12 border-2 border-amber-400 rotate-45 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                                        <div className="w-6 h-6 bg-amber-500/30"></div>
                                    </div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-amber-500/50 to-transparent"></div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-amber-300 uppercase tracking-wider">Fate & Gods</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    The intervention of Olympian deities in mortal affairs and the inescapable nature
                                    of destiny. Even gods bow to the will of fate.
                                </p>
                            </div>
                        </div>
                        <div className="group relative bg-gradient-to-br from-orange-950/40 to-gray-900/40 p-8 backdrop-blur-sm border-2 border-orange-800/40 hover:border-orange-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-900/50 overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="w-12 h-12 border-2 border-orange-400 rotate-45 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                                        <div className="w-6 h-6 bg-orange-500/30"></div>
                                    </div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-transparent"></div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-orange-300 uppercase tracking-wider">Love & Loss</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    The human cost of conflict, from Achilles' grief for Patroclus to Hector's
                                    farewell to Andromache. War spares no one.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Key Characters */}
                    <div className="mt-20">
                        <div className="text-center mb-12">
                            <h3 className="text-4xl font-bold text-amber-300 mb-4">Legendary Heroes</h3>
                            <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                            <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-amber-600 to-transparent mt-1"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* Achilles */}
                            <div className="group relative bg-gradient-to-br from-red-950/50 to-gray-900/50 overflow-hidden border-2 border-amber-700/40 hover:border-amber-400/80 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/50">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
                                <img
                                    src="/images/achilles.png"
                                    alt="Achilles"
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
                                            <h4 className="text-3xl font-bold text-amber-400 tracking-wider">ACHILLES</h4>
                                        </div>
                                        <p className="text-amber-500/60 text-xs uppercase tracking-widest font-semibold ml-11">Son of Peleus & Thetis</p>
                                    </div>
                                    <p className="text-gray-200 mb-3 leading-relaxed text-sm">
                                        The mightiest Greek warrior, son of the sea-goddess Thetis. His rage and eventual
                                        return to battle form the poem's central narrative.
                                    </p>
                                    <div className="flex items-center gap-2 ml-11">
                                        <div className="w-2 h-2 bg-amber-500 rotate-45"></div>
                                        <p className="text-sm text-amber-400/80 italic font-serif">"The best of the Achaeans"</p>
                                    </div>
                                </div>
                            </div>

                            {/* Hector */}
                            <div className="group relative bg-gradient-to-br from-orange-950/50 to-gray-900/50 overflow-hidden border-2 border-amber-700/40 hover:border-amber-400/80 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/50">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
                                <img
                                    src="/images/Hector.png"
                                    alt="Hector"
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
                                            <h4 className="text-3xl font-bold text-amber-400 tracking-wider">HECTOR</h4>
                                        </div>
                                        <p className="text-amber-500/60 text-xs uppercase tracking-widest font-semibold ml-11">Prince of Troy</p>
                                    </div>
                                    <p className="text-gray-200 mb-3 leading-relaxed text-sm">
                                        Troy's greatest defender and crown prince. A devoted husband and father,
                                        fighting to protect his city and family.
                                    </p>
                                    <div className="flex items-center gap-2 ml-11">
                                        <div className="w-2 h-2 bg-amber-500 rotate-45"></div>
                                        <p className="text-sm text-amber-400/80 italic font-serif">"Tamer of horses"</p>
                                    </div>
                                </div>
                            </div>

                            {/* Agamemnon */}
                            <div className="group relative bg-gradient-to-br from-amber-950/50 to-gray-900/50 overflow-hidden border-2 border-amber-700/40 hover:border-amber-400/80 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/50">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
                                <img
                                    src="/images/Agammenon.png"
                                    alt="Agamemnon"
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
                                            <h4 className="text-3xl font-bold text-amber-400 tracking-wider">AGAMEMNON</h4>
                                        </div>
                                        <p className="text-amber-500/60 text-xs uppercase tracking-widest font-semibold ml-11">King of Mycenae</p>
                                    </div>
                                    <p className="text-gray-200 mb-3 leading-relaxed text-sm">
                                        King of Mycenae and commander of the Greek forces. His conflict with Achilles
                                        sets the tragic events in motion.
                                    </p>
                                    <div className="flex items-center gap-2 ml-11">
                                        <div className="w-2 h-2 bg-amber-500 rotate-45"></div>
                                        <p className="text-sm text-amber-400/80 italic font-serif">"Lord of men"</p>
                                    </div>
                                </div>
                            </div>

                            {/* Odysseus */}
                            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 overflow-hidden border-2 border-amber-700/40 hover:border-amber-400/80 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/50">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-amber-500 to-gray-600"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
                                <img
                                    src="/images/Oddyseus.png"
                                    alt="Odysseus"
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
                                            <h4 className="text-3xl font-bold text-amber-400 tracking-wider">ODYSSEUS</h4>
                                        </div>
                                        <p className="text-amber-500/60 text-xs uppercase tracking-widest font-semibold ml-11">King of Ithaca</p>
                                    </div>
                                    <p className="text-gray-200 mb-3 leading-relaxed text-sm">
                                        The cunning king of Ithaca, known for his wisdom and eloquence. His own
                                        adventures would later be told in The Odyssey.
                                    </p>
                                    <div className="flex items-center gap-2 ml-11">
                                        <div className="w-2 h-2 bg-amber-500 rotate-45"></div>
                                        <p className="text-sm text-amber-400/80 italic font-serif">"Man of many wiles"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Books & Structure Section */}
            <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black py-20 px-4 relative overflow-hidden">
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(251, 191, 36, 0.1) 50px, rgba(251, 191, 36, 0.1) 51px)',
                    }}></div>
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(251, 191, 36, 0.1) 50px, rgba(251, 191, 36, 0.1) 51px)',
                    }}></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block">
                            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                                The 24 Books
                            </h2>
                            <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60"></div>
                        </div>
                        <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
                            The Iliad is divided into 24 books, spanning 51 days during the final year of the Trojan War.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        <div className="group bg-gradient-to-br from-amber-900/30 to-gray-900/20 p-6 rounded-xl border border-amber-800/40 hover:border-amber-500/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-900/30">
                            <div className="flex items-start gap-3 mb-3">
                                <span className="text-4xl font-bold text-amber-500/30 group-hover:text-amber-500/50 transition-colors">I-IX</span>
                                <div>
                                    <h4 className="text-xl font-semibold text-amber-400 mb-1">The Quarrel</h4>
                                    <p className="text-amber-300/70 text-sm mb-2">Achilles' Wrath</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                The conflict between Achilles and Agamemnon leads to Achilles withdrawing from battle,
                                leaving the Greeks vulnerable.
                            </p>
                        </div>

                        <div className="group bg-gradient-to-br from-red-900/30 to-gray-900/20 p-6 rounded-xl border border-red-800/40 hover:border-red-500/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-900/30">
                            <div className="flex items-start gap-3 mb-3">
                                <span className="text-4xl font-bold text-red-500/30 group-hover:text-red-500/50 transition-colors">X-XV</span>
                                <div>
                                    <h4 className="text-xl font-semibold text-red-400 mb-1">Greek Defeats</h4>
                                    <p className="text-red-300/70 text-sm mb-2">Trojan Advance</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Without Achilles, the Greeks suffer devastating losses at the hands of Hector and
                                the Trojans who push to the ships.
                            </p>
                        </div>

                        <div className="group bg-gradient-to-br from-orange-900/30 to-gray-900/20 p-6 rounded-xl border border-orange-800/40 hover:border-orange-500/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-900/30">
                            <div className="flex items-start gap-3 mb-3">
                                <span className="text-4xl font-bold text-orange-500/30 group-hover:text-orange-500/50 transition-colors">XVI-XVIII</span>
                                <div>
                                    <h4 className="text-xl font-semibold text-orange-400 mb-1">Patroclus</h4>
                                    <p className="text-orange-300/70 text-sm mb-2">Death & Grief</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Patroclus, wearing Achilles' armor, is slain by Hector, igniting an unquenchable
                                fury in Achilles.
                            </p>
                        </div>

                        <div className="group bg-gradient-to-br from-red-950/30 to-gray-900/20 p-6 rounded-xl border border-red-900/40 hover:border-red-600/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-950/30">
                            <div className="flex items-start gap-3 mb-3">
                                <span className="text-4xl font-bold text-red-600/30 group-hover:text-red-600/50 transition-colors">XIX-XXII</span>
                                <div>
                                    <h4 className="text-xl font-semibold text-red-500 mb-1">Revenge</h4>
                                    <p className="text-red-400/70 text-sm mb-2">Achilles' Return</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Achilles returns to battle in a terrifying rampage and kills Hector in single
                                combat before the walls of Troy.
                            </p>
                        </div>

                        <div className="group bg-gradient-to-br from-amber-950/30 to-gray-900/20 p-6 rounded-xl border border-amber-900/40 hover:border-amber-600/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-950/30">
                            <div className="flex items-start gap-3 mb-3">
                                <span className="text-4xl font-bold text-amber-600/30 group-hover:text-amber-600/50 transition-colors">XXIII-XXIV</span>
                                <div>
                                    <h4 className="text-xl font-semibold text-amber-500 mb-1">Funeral Rites</h4>
                                    <p className="text-amber-400/70 text-sm mb-2">Reconciliation</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Patroclus' funeral games and Priam's heartbreaking plea to Achilles for Hector's
                                body bring tragic closure.
                            </p>
                        </div>

                        <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-amber-700/40 hover:border-amber-500/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-800/30 flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-amber-600 mb-2">15,693</p>
                                <p className="text-amber-400 text-sm font-semibold tracking-wider">TOTAL LINES</p>
                                <p className="text-gray-500 text-xs mt-2">In dactylic hexameter</p>
                            </div>
                        </div>
                    </div>

                    {/* Famous Quotes Section */}
                    <div className="mt-20">
                        <h3 className="text-3xl font-bold mb-10 text-center text-amber-300">Immortal Lines</h3>
                        <div className="space-y-6 max-w-4xl mx-auto">
                            <div className="group relative bg-gradient-to-r from-gray-900/60 to-gray-800/60 p-8 rounded-xl border border-amber-800/30 hover:border-amber-600/50 transition-all duration-300 overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-amber-500 to-orange-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                                <div className="absolute top-4 left-4 text-6xl text-amber-900/20 font-serif">"</div>
                                <p className="text-gray-200 font-serif italic text-lg mb-4 pl-8 relative z-10 group-hover:text-gray-100 transition-colors">
                                    "Be strong, saith my heart; I am a soldier; I have seen worse sights than this."
                                </p>
                                <div className="flex items-center gap-2 pl-8">
                                    <span className="text-amber-500 text-sm">—</span>
                                    <p className="text-amber-400/80 text-sm font-semibold">Odysseus</p>
                                </div>
                            </div>

                            <div className="group relative bg-gradient-to-r from-gray-900/60 to-gray-800/60 p-8 rounded-xl border border-amber-800/30 hover:border-amber-600/50 transition-all duration-300 overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-500 to-orange-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                                <div className="absolute top-4 left-4 text-6xl text-amber-900/20 font-serif">"</div>
                                <p className="text-gray-200 font-serif italic text-lg mb-4 pl-8 relative z-10 group-hover:text-gray-100 transition-colors">
                                    "Even in the house of Hades the men below win glory."
                                </p>
                                <div className="flex items-center gap-2 pl-8">
                                    <span className="text-red-500 text-sm">—</span>
                                    <p className="text-red-400/80 text-sm font-semibold">Achilles</p>
                                </div>
                            </div>

                            <div className="group relative bg-gradient-to-r from-gray-900/60 to-gray-800/60 p-8 rounded-xl border border-amber-800/30 hover:border-amber-600/50 transition-all duration-300 overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-amber-500 to-yellow-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                                <div className="absolute top-4 left-4 text-6xl text-amber-900/20 font-serif">"</div>
                                <p className="text-gray-200 font-serif italic text-lg mb-4 pl-8 relative z-10 group-hover:text-gray-100 transition-colors">
                                    "There is no creature among all the Beasts of the world which is so fair and dear to the gods as man."
                                </p>
                                <div className="flex items-center gap-2 pl-8">
                                    <span className="text-amber-500 text-sm">—</span>
                                    <p className="text-amber-400/80 text-sm font-semibold">Homer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-12 px-4 text-center relative z-10 border-t border-amber-900/30">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-4">
                        <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-40 mx-auto mb-6"></div>
                    </div>
                    <p className="text-amber-300/60 text-sm font-serif italic mb-2">
                        "There is nothing alive more agonized than man of all that breathe and crawl across the earth."
                    </p>
                    <p className="text-gray-600 text-sm mb-4">— Homer, The Iliad</p>
                    <p className="text-gray-500 text-sm">
                        &copy; 2025 The Iliad Showcase | Girado, Lising, San Jose, Vademoro | BSCS 4C
                    </p>
                </div>
            </footer>
        </main>
    );
}
