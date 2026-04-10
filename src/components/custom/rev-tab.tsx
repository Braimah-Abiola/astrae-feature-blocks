import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { ArrowRight, ArrowRight02FreeIcons } from "@hugeicons/core-free-icons";

interface TabProps {
    selected: boolean;
    icon: React.ComponentProps<typeof HugeiconsIcon>["icon"];
    title: string;
    description: string;
    link: string;
    setSelected: (index: number) => void;
    tabNum: number;
    duration?: number;
    onComplete?: () => void;
}

const Tab = ({
    selected,
    icon,
    title,
    description,
    link,
    setSelected,
    tabNum,
    duration = 5,
    onComplete,
}: TabProps) => {
    return (
        <button
            onClick={() => setSelected(tabNum)}
            className="group relative flex flex-col items-start gap-2.5 md:gap-4 pl-6 md:pl-8 pr-6 py-6 text-left transition-all duration-300 cursor-pointer"
        >
            <div className="absolute left-0 top-6 bottom-6 w-px rounded-full bg-white/5" />

            {selected && (
                <motion.div
                    className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full bg-[#7FEE64] origin-top"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration, ease: "linear" }}
                    onAnimationComplete={onComplete}
                />
            )}
            <div className="flex flex-row md:flex-col items-center md:items-start gap-2.5 md:gap-4">
                <span
                    className={`flex items-center justify-center md:rounded-lg md:border md:p-2.5 transition-all duration-300 ${selected
                        ? "md:border-[#7FEE64]/30 md:bg-[#7FEE64]/10 text-[#7FEE64]"
                        : "md:border-white/10 md:bg-white/5 text-white/40 md:group-hover:border-white/20 md:group-hover:text-white/60"
                        }`}
                >
                    <HugeiconsIcon icon={icon} size={20} />
                </span>

                <h3
                    className={`text-lg font-medium transition-colors duration-300 ${selected ? "text-white" : "text-white/60 group-hover:text-white/80"
                        }`}
                >
                    {title}
                </h3>
            </div>

            <p
                className={`text-base leading-relaxed transition-colors duration-300 ${selected ? "text-white/60" : "text-white/35 group-hover:text-white/50"
                    }`}
            >
                {description}
            </p>

            <Link
                href={link}
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center gap-1.5 text-base font-medium transition-all duration-300 ${selected
                    ? "text-white/80 hover:text-white"
                    : "text-white/30 group-hover:text-white/50"
                    }`}
            >
                Learn more
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    <HugeiconsIcon size={20} icon={ArrowRight02FreeIcons} />
                </span>
            </Link>
        </button>
    );
};

export default Tab;
