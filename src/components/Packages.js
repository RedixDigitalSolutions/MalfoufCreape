import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import styles from '../styles/Packages.module.css';

const Packages = () => {
    const packages = [
        {
            name: 'Pack Impulsion',
            subtitle: 'Pour Démarrer',
            price: '460',
            popular: false,
            features: [
                '1 séance shooting professionnelle',
                '4 vidéos avec montage optimisé',
                '4 posts avec descriptions',
                'Gestion de 3 comptes (Instagram, Facebook, TikTok)',
                'Sponsoring des 4 vidéos',
                'Ads budget: 20$',
            ]
        },
        {
            name: 'Pack Impact',
            subtitle: 'Le Plus Populaire',
            price: '870',
            popular: true,
            features: [
                '1 séance shooting professionnelle',
                '8 vidéos avec montage optimisé',
                '4 posts avec descriptions',
                'Gestion de 3 comptes (Instagram, Facebook, TikTok)',
                'Sponsoring des 8 vidéos',
                'Ads budget: 40$',
            ]
        },
        {
            name: 'Pack Elite',
            subtitle: 'Solution Complète',
            price: '1690',
            popular: false,
            features: [
                '2 séances shooting professionnelles',
                '16 vidéos avec montage optimisé',
                '8 posts avec descriptions',
                'Gestion de 3 comptes (Instagram, Facebook, TikTok)',
                'Sponsoring des 16 vidéos',
                'Ads budget: 60$',
            ]
        }
    ];

    return (
        <section id="packages" className={styles.packages}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={styles.header}
            >
                <h2>Choisissez Votre Forfait</h2>
                <p>Des solutions flexibles et transparentes pour votre croissance digitale</p>
            </motion.div>

            <div className={styles.packagesGrid}>
                {packages.map((pkg, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`${styles.packageCard} ${pkg.popular ? styles.popular : ''}`}
                    >
                        {pkg.popular && <div className={styles.badge}>🔥 Le Plus Populaire</div>}

                        <div className={styles.packageHeader}>
                            <h3>{pkg.name}</h3>
                            <p className={styles.subtitle}>{pkg.subtitle}</p>
                        </div>

                        <div className={styles.price}>
                            <span className={styles.amount}>{pkg.price}</span>
                            <span className={styles.currency}>TND</span>
                            <span className={styles.period}>/mois</span>
                        </div>

                        <div className={styles.featuresList}>
                            <h4>Ce qui est inclus :</h4>
                            <ul className={styles.features}>
                                {pkg.features.map((feature, i) => (
                                    <li key={i}>
                                        <FaCheckCircle className={styles.checkIcon} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className={styles.selectBtn}>
                            Commencer Maintenant
                        </button>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={styles.comparison}
            >
                <h3>Comparaison Rapide des Forfaits</h3>
                <div className={styles.comparisonTable}>
                    <div className={styles.comparisonRow}>
                        <span className={styles.comparisonLabel}>Vidéos par mois</span>
                        <span>4 vidéos</span>
                        <span className={styles.highlighted}>8 vidéos</span>
                        <span>16 vidéos</span>
                    </div>
                    <div className={styles.comparisonRow}>
                        <span className={styles.comparisonLabel}>Séances shooting</span>
                        <span>1 séance</span>
                        <span className={styles.highlighted}>1 séance</span>
                        <span>2 séances</span>
                    </div>
                    <div className={styles.comparisonRow}>
                        <span className={styles.comparisonLabel}>Posts</span>
                        <span>4 posts</span>
                        <span className={styles.highlighted}>4 posts</span>
                        <span>8 posts</span>
                    </div>
                    <div className={styles.comparisonRow}>
                        <span className={styles.comparisonLabel}>Budget publicitaire</span>
                        <span>20$</span>
                        <span className={styles.highlighted}>40$</span>
                        <span>60$</span>
                    </div>
                    <div className={styles.comparisonRow}>
                        <span className={styles.comparisonLabel}>Gestion 3 comptes</span>
                        <span>✓</span>
                        <span className={styles.highlighted}>✓</span>
                        <span>✓</span>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={styles.cta}
            >
                <h3>Prêt à Booster Votre Restaurant ?</h3>
                <p>Commencez dès aujourd'hui avec Malfouf & Crepe et voyez les résultats</p>
                <button
                    className={styles.ctaBtn}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Contactez-Nous Maintenant
                </button>
            </motion.div>
        </section>
    );
};

export default Packages;
