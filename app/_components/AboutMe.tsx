'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    I believe in a user centered design approach, ensuring that
                    every project I work on is tailored to meet the specific
                    needs of its users.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 gap-8 items-center mt-9">
                    <div className="md:col-span-5 space-y-6">
                        <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 slide-up-and-fade">
                            <Image
                                src="/youssef.jpg"
                                alt="Youssef Benelmadani - WEBSOUK"
                                fill
                                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>
                        <p className="text-4xl md:text-5xl font-anton slide-up-and-fade">
                            Hi, we are WEBSOUK.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                We are full stack web developers dedicated to
                                turning ideas into creative solutions. We
                                specialize in creating seamless and intuitive
                                user experiences.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Our approach focuses on creating scalable,
                                high-performing solutions tailored to both user
                                needs and business objectives. By prioritizing
                                performance, accessibility, and responsiveness,
                                we strive to deliver experiences that not only
                                engage users but also drive tangible results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
