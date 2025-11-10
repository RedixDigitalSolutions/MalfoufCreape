import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';

const Hero = () => {
    const scrollToPackages = () => {
        document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Transformez Votre Restaurant en<br />
                    <span className={styles.highlight}>Une Success Story Digitale</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles.subtitle}
                >
                    Élevez la marque de Malfouf & Crepe avec le marketing sur les réseaux sociaux,<br />
                    la création de contenu professionnel et des campagnes publicitaires basées sur les données
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={styles.buttons}
                >
                    <button className={styles.primaryBtn} onClick={scrollToPackages}>
                        Voir les Forfaits
                    </button>
                    <button
                        className={styles.secondaryBtn}
                        onClick={() => document.getElementById('whyus')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Voir Nos Réalisations
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className={styles.stats}
                >
                    <div className={styles.statItem}>
                        <h3>50+</h3>
                        <p>Success Stories</p>
                    </div>
                    <div className={styles.statItem}>
                        <h3>300%</h3>
                        <p>Croissance Moyenne</p>
                    </div>
                    <div className={styles.statItem}>
                        <h3>24/7</h3>
                        <p>Support</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
