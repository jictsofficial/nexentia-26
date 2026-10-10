// src/components/Contact.tsx

"use client";
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// දත්ත යාවත්කාලීන කිරීම: hasPhoneCall property එක එකතු කරන ලදී
const contactDetails = [
    { name: "Veronika Gaushi", role: "President", phone: "+94705380667", hasWhatsApp: true, hasPhoneCall: true },
    // Asisya Perera සඳහා: WhatsApp පමණක් ඇත, Phone Call නැත
    { name: "Asisya Perera", role: "V. President", phone: "+94766935891", hasWhatsApp: true, hasPhoneCall: false }, 
    { name: "Dimashi Ayodya", role: "V. President", phone: "+94718728178", hasWhatsApp: true, hasPhoneCall: true },
    { name: "Janani Pabasara", role: "Secretary", phone: "+94773410662", hasWhatsApp: true, hasPhoneCall: true },
];

// SVG Icon Components
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);


// ContactCard component එකට hasPhoneCall prop එක එකතු කිරීම
const ContactCard = ({ name, role, phone, hasWhatsApp, hasPhoneCall }: { name: string, role: string, phone: string, hasWhatsApp: boolean, hasPhoneCall: boolean }) => (
    <div className="contact-card border border-purple-800/40 bg-gray-900/40 p-6 rounded-2xl text-center flex flex-col transition-all duration-300 hover:border-purple-500 hover:scale-105">
        <div className="flex-grow">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-purple-400 uppercase tracking-widest text-sm mt-1">{role}</p>
            <p className="mt-4 font-sans text-lg text-gray-300">{phone.replace(/(\+94)(\d{2})(\d{3})(\d{4})/, '$1 $2 $3 $4')}</p>
        </div>
        <div className="flex justify-center gap-8 mt-6 text-gray-400">
            {/* Phone icon එක hasPhoneCall true නම් පමණක් පෙන්වීම */}
            {hasPhoneCall && (
                <a href={`tel:${phone}`} className="hover:text-purple-400 transition-colors" data-cursor-hover aria-label={`Call ${name}`}>
                    <PhoneIcon />
                </a>
            )}
            
            {/* WhatsApp icon එක hasWhatsApp true නම් පමණක් පෙන්වීම */}
            {hasWhatsApp && (
                <a 
                    href={`https://wa.me/${phone.replace(/\s/g, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-purple-400 transition-colors" 
                    data-cursor-hover
                    aria-label={`WhatsApp ${name}`}
                >
                    <WhatsAppIcon />
                </a>
            )}
        </div>
    </div>
);


const Contact = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".contact-card").forEach(card => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                    opacity: 0,
                    y: 100,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="w-full bg-black py-24">
            <div className="container mx-auto px-6 md:px-10">
                <h2 
                    className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-center text-purple-400 mb-16"
                >
                    Contact Us
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactDetails.map((person, i) => (
                        <ContactCard 
                            key={i} 
                            name={person.name} 
                            role={person.role} 
                            phone={person.phone}
                            hasWhatsApp={person.hasWhatsApp}
                            hasPhoneCall={person.hasPhoneCall} // නව prop එක pass කිරීම
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;