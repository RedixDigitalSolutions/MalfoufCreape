import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import styles from '../styles/Packages.module.css';

const Packages = () => {
    const packages = [
        {
            name: 'Pack Basique',
            subtitle: 'Avec Publicités',
            price: '400',
            popular: false,
            features: [
                'Gestionnaire de publicités professionnel',
                '1 session de tournage vidéo',
                '8 vidéos avec montage professionelle',
                'Création de feuille de route de contenu',
                'Sponsoring Meta Ads 40$',
                'Scripting + idées de vidéos (guidance Redix)',
                'Développement de stratégie marketing',
                'Analyse des horaires de publication optimaux',
            ]
        },
        {
            name: 'Pack Professionnel',
            subtitle: 'Le Plus Populaire',
            price: '600',
            popular: true,
            features: [
                'Gestionnaire de publicités professionnel',
                '1 session de tournage vidéo',
                '8 vidéos avec montage professionelle',
                'Création de feuille de route de contenu',
                'Sponsoring Meta Ads 40$',
                'Scripting + idées de vidéos (guidance Redix)',
                'Développement de stratégie marketing',
                'Analyse des horaires de publication optimaux',
                'Surveillance et reporting des réseaux sociaux'
            ]
        },
        {
            name: 'Pack Ultimate',
            subtitle: 'Solution Complète',
            price: '800',
            popular: false,
            features: [
                'Gestionnaire de publicités professionnel',
                '1 session de tournage vidéo',
                '12 vidéos avec montage professionelle',
                'Création de feuille de route de contenu',
                'Sponsoring Meta Ads 60$',
                'Scripting + idées de vidéos (guidance Redix)',
                'Téléchargement de contenu et gestion des réseaux sociaux',
                'Vous répondez uniquement aux messages et commentaires',
                'Développement de stratégie marketing',
                'Analyse des horaires de publication optimaux',
                'Surveillance et reporting des réseaux sociaux'
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
                        <span>12 vidéos</span>
                    </div>
                    <div className={styles.comparisonRow}>
                        <span className={styles.comparisonLabel}>Budget publicitaire</span>
                        <span>20$ Meta Ads</span>
                        <span className={styles.highlighted}>40$ Meta Ads</span>
                        <span>60$ Meta Ads</span>
                    </div>
                    <div className={styles.comparisonRow}>
                        <span className={styles.comparisonLabel}>Gestion complète</span>
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
