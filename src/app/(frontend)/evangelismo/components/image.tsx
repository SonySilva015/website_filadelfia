'use client';

import Image, { StaticImageData } from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxImageProps {
    src: string | StaticImageData;
    alt: string;
}

export default function ParallaxImage({
    src,
    alt,
}: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-90, 160]);

    return (
        <div
            ref={ref}
            className="relative w-full h-full overflow-hidden"
        >
            <motion.div
                style={{ y }}
                className="absolute inset-0 scale-125"
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                />
            </motion.div>

            <div className="absolute inset-0 bg-black/60" />
        </div>
    );
}