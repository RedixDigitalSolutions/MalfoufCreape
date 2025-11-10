import React from 'react';
import { motion } from 'framer-motion';
import { FaTiktok, FaFacebook, FaInstagram, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';
import styles from '../styles/Strategy.module.css';

const Strategy = () => {
    const platforms = [
        { name: 'TikTok', icon: <FaTiktok />, color: '#000000', audience: 'Audience jeune et tendance' },
        { name: 'Facebook', icon: <FaFacebook />, color: '#1877f2', audience: 'Large portée démographique' },
        { name: 'Instagram', icon: <FaInstagram />, color: '#e4405f', audience: 'Passionnés de visuels culinaires' }
    ];

    const competitors = [
        { name: 'Am Dhaou', specialty: 'Briks & Fricassés' },
        { name: 'Crêpes Factory Bardo', specialty: 'Crêpes' },
        { name: 'Echemi Bardo', specialty: 'Pizza & Fast Food' },
        { name: 'TACOROLL', specialty: 'Fast Food' },
        { name: 'Dieci', specialty: 'Italien & Américain' },
        { name: 'Trend Café Resto', specialty: 'Café & Restaurant' }
    ];

    return (
        <section id="strategy" className={styles.strategy}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={styles.header}
            >
                <h2>Stratégie Marketing</h2>
                <p>Approche multi-plateformes pour dominer le marché de Bardo</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={styles.competitive}
            >
                <div className={styles.competitiveHeader}>
                    <FaMapMarkerAlt className={styles.locationIcon} />
                    <h3>Paysage du Marché à Bardo</h3>
                </div>
                <p className={styles.competitiveDesc}>
                    Comprendre votre concurrence est la clé du succès. Voici les principaux acteurs de la scène fast food à Bardo :
                </p>
                <div className={styles.competitorsGrid}>
                    {competitors.map((competitor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className={styles.competitorCard}
                        >
                            <FaUsers className={styles.competitorIcon} />
                            <h4>{competitor.name}</h4>
                            <p>{competitor.specialty}</p>
                        </motion.div>
                    ))}
                </div>
                <div className={styles.advantage}>
                    <p>
                        <strong>Votre Avantage :</strong> La plupart des concurrents manquent de présence professionnelle
                        sur les réseaux sociaux et de marketing digital stratégique. Avec Redix, vous vous démarquerez
                        avec du contenu viral et de la publicité ciblée qui convertit les spectateurs en clients.
                    </p>
                </div>
            </motion.div>

            <div className={styles.platforms}>
                {platforms.map((platform, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={styles.platformCard}
                        style={{ borderTop: `4px solid ${platform.color}` }}
                    >
                        <div className={styles.platformIcon} style={{ color: platform.color }}>
                            {platform.icon}
                        </div>
                        <h3>{platform.name}</h3>
                        <p>{platform.audience}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={styles.metaAds}
            >
                <h3>Stratégie Meta Ads</h3>
                <div className={styles.adsFeatures}>
                    <div className={styles.adsFeature}>
                        <span className={styles.featureIcon}>🎯</span>
                        <h4>Ciblage de Précision</h4>
                        <p>Segmentation d'audience avancée basée sur la démographie, les intérêts et les comportements</p>
                    </div>

                    <div className={styles.adsFeature}>
                        <span className={styles.featureIcon}>📊</span>
                        <h4>Analyses en Temps Réel</h4>
                        <p>Surveillance et optimisation continues pour un ROI maximal</p>
                    </div>

                    <div className={styles.adsFeature}>
                        <span className={styles.featureIcon}>💰</span>
                        <h4>Optimisation du Budget</h4>
                        <p>Allocation intelligente des dépenses entre les campagnes pour de meilleurs résultats</p>
                    </div>

                    <div className={styles.adsFeature}>
                        <span className={styles.featureIcon}>🔄</span>
                        <h4>Campagnes de Reciblage</h4>
                        <p>Réengager les clients intéressés pour augmenter les conversions</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={styles.timeline}
            >
                <h3>Feuille de Route de la Campagne sur 30 Jours</h3>
                <div className={styles.timelineItems}>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineMarker}>1</div>
                        <h4>Semaine 1 : Fondation</h4>
                        <p>Audit de marque, planification de contenu et recherche d'audience</p>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineMarker}>2</div>
                        <h4>Semaine 2 : Création de Contenu</h4>
                        <p>Tournage vidéo professionnel et production de reels</p>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineMarker}>3</div>
                        <h4>Semaine 3 : Lancement & Publicités</h4>
                        <p>Lancement de campagne avec activation Meta Ads</p>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineMarker}>4</div>
                        <h4>Semaine 4 : Optimiser & Développer</h4>
                        <p>Analyse de performance et développement de campagne</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Strategy;
