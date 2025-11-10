import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo} onClick={() => scrollToSection('home')}>
                    <img src="/assets/redix.png" alt="Redix" />
                    <span></span>
                </div>

                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
                    <li onClick={() => scrollToSection('home')}>Accueil</li>
                    <li onClick={() => scrollToSection('about')}>À propos de REDIX</li>
                    <li onClick={() => scrollToSection('whyus')}>Pourquoi Nous</li>
                    <li onClick={() => scrollToSection('market')}>Analyse du Marché</li>
                    <li onClick={() => scrollToSection('strategy')}>Stratégie</li>
                    <li onClick={() => scrollToSection('packages')}>pachages</li>
                    <li onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
