import React from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaChartLine, FaBolt } from 'react-icons/fa';
import styles from '../styles/WhyUs.module.css';

const WhyUs = () => {
    const videos = [
        {
            name: 'Kapari Square',
            file: `${process.env.PUBLIC_URL}/assets/videos/KapariSquare.mp4`
        },
        {
            name: 'Pementos - Présentation 1',
            file: `${process.env.PUBLIC_URL}/assets/videos/PementosPresentation.mov`
        },
        {
            name: 'Pementos - Présentation 2',
            file: `${process.env.PUBLIC_URL}/assets/videos/Pementospresentation2.mp4`
        }
    ];

    return (
        <section id="whyus" className={styles.whyUs}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={styles.header}
            >
                <h2>Pourquoi Choisir Redix ?</h2>
                <p>Des résultats prouvés avec les meilleurs restaurants à travers la Tunisie</p>
            </motion.div>

            <div className={styles.videoGrid}>
                {videos.map((video, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={styles.videoCard}
                    >
                        <div className={styles.reelBadge}>📱 Reel</div>
                        <video
                            controls
                            className={styles.video}
                        >
                            <source src={video.file} type="video/mp4" />
                            Votre navigateur ne supporte pas la vidéo.
                        </video>
                        <h3>{video.name}</h3>
                    </motion.div>
                ))}
            </div>

            <div className={styles.features}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.feature}
                >
                    <div className={styles.icon}>
                        <FaVideo />
                    </div>
                    <h4>Production Professionnelle</h4>
                    <p>Reels vidéo de haute qualité optimisés pour l'engagement sur les réseaux sociaux</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className={styles.feature}
                >
                    <div className={styles.icon}>
                        <FaChartLine />
                    </div>
                    <h4>Résultats Basés sur les Données</h4>
                    <p>Campagnes stratégiques optimisées pour un ROI maximal et des conversions</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={styles.feature}
                >
                    <div className={styles.icon}>
                        <FaBolt />
                    </div>
                    <h4>Livraison Rapide</h4>
                    <p>Livraison rapide sans compromettre la qualité ou la créativité</p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyUs;
