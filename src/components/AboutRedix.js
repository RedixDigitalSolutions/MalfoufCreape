import React from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaBullhorn, FaChartLine, FaCode, FaPalette, FaSearch } from 'react-icons/fa';
import styles from '../styles/AboutRedix.module.css';

const AboutRedix = () => {
    const services = [
        {
            icon: <FaBullhorn />,
            title: 'Marketing sur les Réseaux Sociaux',
            description: 'Campagnes stratégiques qui génèrent de l\'engagement et convertissent les abonnés en clients',
            color: '#ff6b35'
        },
        {
            icon: <FaVideo />,
            title: 'Production Vidéo',
            description: 'Création de contenu vidéo professionnel du concept au montage final',
            color: '#f7931e'
        },
        {
            icon: <FaPalette />,
            title: 'Branding & Design',
            description: 'Créez des identités de marque mémorables qui résonnent avec votre audience',
            color: '#e63946'
        },
        {
            icon: <FaCode />,
            title: 'Développement Web & Application',
            description: 'Solutions digitales sur mesure construites avec des technologies de pointe',
            color: '#06ffa5'
        },
        {
            icon: <FaChartLine />,
            title: 'Publicité Digitale',
            description: 'Campagnes publicitaires basées sur les données optimisées pour un ROI maximal',
            color: '#3b82f6'
        },
        {
            icon: <FaSearch />,
            title: 'Optimisation SEO',
            description: 'Augmentez votre visibilité en ligne et classez-vous plus haut dans les résultats de recherche',
            color: '#10b981'
        }
    ];

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <h2>À Propos de Redix Digital Solutions</h2>
                    <p className={styles.tagline}>Votre Croissance, Notre Stratégie</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={styles.intro}
                >
                    <div className={styles.introContent}>
                        <h3>Transformer les Marques par l'Excellence Digitale</h3>
                        <p>
                            Redix Digital Solutions est la première agence de marketing digital en Tunisie,
                            spécialisée dans l'aide aux restaurants et entreprises pour développer leur présence en ligne.
                            Basés au Smart Technopark Manouuba, nous combinons la narration créative avec
                            des stratégies basées sur les données pour obtenir des résultats mesurables.
                        </p>
                        <p>
                            Des campagnes virales sur les réseaux sociaux à la production vidéo professionnelle, nous avons aidé
                            plus de <strong>50+ restaurants</strong> en Tunisie à atteindre une croissance moyenne de
                            <strong> 300%</strong> en engagement client et en chiffre d'affaires.
                        </p>
                    </div>
                    <div className={styles.introImage}>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/redix.png`} alt="Redix Digital Solutions" />
                    </div>
                </motion.div>

                <div className={styles.services}>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Notre Expertise
                    </motion.h3>

                    <div className={styles.servicesGrid}>
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={styles.serviceCard}
                            >
                                <div className={styles.serviceIcon} style={{ color: service.color }}>
                                    {service.icon}
                                </div>
                                <h4>{service.title}</h4>
                                <p>{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.stats}
                >
                    <div className={styles.statBox}>
                        <h4>50+</h4>
                        <p>Success Stories</p>
                    </div>
                    <div className={styles.statBox}>
                        <h4>300%</h4>
                        <p>Croissance Moyenne</p>
                    </div>
                    <div className={styles.statBox}>
                        <h4>1M+</h4>
                        <p>Vues de Contenu</p>
                    </div>
                    <div className={styles.statBox}>
                        <h4>24/7</h4>
                        <p>Support Client</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutRedix;
