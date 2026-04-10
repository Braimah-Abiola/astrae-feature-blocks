"use client";

import Tab from "@/components/custom/rev-tab";
import { Button } from "@/components/ui/button";
import { FEATURES } from "@/constants";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

const TAB_DURATION = 5;

const RevFeatures = () => {
    const [selected, setSelected] = useState(0);
    const prevSelected = useRef(0);

    const advanceTab = useCallback(() => {
        setSelected((prev) => {
            prevSelected.current = prev;
            return (prev + 1) % FEATURES.length;
        });
    }, []);

    const handleSelect = useCallback((index: number) => {
        setSelected((prev) => {
            prevSelected.current = prev;
            return index;
        });
    }, []);

    const direction = selected > prevSelected.current ? 1 : -1;

    return (
        <section className="max-w-7xl mx-auto py-20 px-2 md:px-4">
            <div className="w-full bg-[#212525]/60 p-6 md:p-16 rounded-2xl border border-white/5">
                <h2 className=" text-2xl md:text-3xl text-balance font-medium text-white mt-2 md:mt-0">
                    Understand every customer &amp; track requests
                </h2>
                <p className="text-white font-normal opacity-70 text-base max-w-3xl mt-2 md:mt-4">
                    See all your customer-facing interactions and data in one place to
                    collaborate across support, product, and GTM teams effortlessly.
                </p>
                <Button className="mt-4" variant="secondary">Explore Solution</Button>

                <div className="relative mt-12 mb-12 rounded-xl md:rounded-2xl overflow-hidden">
                    <Image
                        src="/assets/feature-cover.png"
                        alt="Features backdrop"
                        width={1200}
                        height={600}
                        className="w-full h-auto aspect-3/2 md:aspect-video object-cover rounded-xl md:rounded-2xl"
                        priority
                    />

                    <div className="absolute inset-0 flex items-center justify-center p-2 md:p-2.5">
                        <div className="relative w-full h-full overflow-hidden rounded-lg md:rounded-xl">
                            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                                <motion.div
                                    key={selected}
                                    custom={direction}
                                    variants={{
                                        enter: (d: number) => ({
                                            x: `${d * 100}%`,
                                            opacity: 0,
                                        }),
                                        center: {
                                            x: 0,
                                            opacity: 1,
                                        },
                                        exit: (d: number) => ({
                                            x: `${d * -100}%`,
                                            opacity: 0,
                                        }),
                                    }}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "tween", ease: "easeInOut", duration: 0.4 },
                                        opacity: { duration: 0.3 },
                                    }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={FEATURES[selected].image}
                                        alt={FEATURES[selected].title}
                                        fill
                                        className="object-cover object-top-left md:object-top rounded-lg md:rounded-xl"
                                        sizes="(max-width: 768px) 100vw, 1000px"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {FEATURES.map((feature, index) => (
                        <Tab
                            key={index}
                            selected={selected === index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            link={feature.link}
                            setSelected={handleSelect}
                            tabNum={index}
                            duration={TAB_DURATION}
                            onComplete={advanceTab}
                        />
                    ))}
                </div>

                <div className="mt-12 relative flex flex-col md:flex-row items-stretch rounded-xl border border-white/5 overflow-hidden">
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, rgba(255,255,255,0.07) 1.5px, transparent 1.5px)",
                            backgroundSize: "16px 16px",
                            WebkitMaskImage: "linear-gradient(to right, black 40%, transparent 100%)",
                            maskImage: "linear-gradient(to right, black 40%, transparent 100%)",
                        }}
                    />

                    <div className="flex-1 p-6 md:p-10 flex items-center relative z-10">
                        <p className="text-white text-lg md:text-xl leading-relaxed text-center md:text-start">
                            &ldquo;Featurebase completely changed how we work. Now <br className=" hidden md:block" /> everyone knows what&apos;s happening and what our <br className=" hidden md:block" /> customers really need.&rdquo;
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end justify-center gap-2 shrink-0 text-right px-10 py-8 md:py-10 relative z-10">
                        <Image
                            src="/assets/vercel.png"
                            alt="Vercel"
                            width={132}
                            height={24}
                            className="h-6 w-auto object-contain"
                        />
                        <div className="flex flex-row-reverse md:flex-row items-center gap-4 mt-4">
                            <div className=" flex flex-col items-start md:items-end">
                                <span className="text-white text-base font-medium">Awni Shamah</span>
                                <span className="text-white opacity-50 text-sm">PM at Vercel</span>
                            </div>
                            <Image
                                src="/assets/profile.png"
                                alt="Awni Shamah"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RevFeatures;