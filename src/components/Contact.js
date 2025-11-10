import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';

const Contact = () => {
    return (
        <footer id="contact" className={styles.contact}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.branding}
                >
                    <div className={styles.logo}>
                        <img src="/assets/redix.png" alt="Redix"/>
                    </div>
                    <p className={styles.tagline}>Votre Croissance, Notre Stratégie</p>
                    <p className={styles.description}>
                        Redix Digital Solution aide les marques à se développer avec des stratégies digitales
                        sur mesure, du contenu créatif et une technologie innovante qui offrent des résultats mesurables.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className={styles.info}
                >
                    <h4>Informations de Contact</h4>
                    <ul>
                        <li>
                            <FaMapMarkerAlt className={styles.contactIcon} />
                            Smart Technopark Manouuba, Tunisie
                        </li>
                        <li>
                            <FaEnvelope className={styles.contactIcon} />
                            contact@redixsolutions.pro
                        </li>
                        <li>
                            <FaGlobe className={styles.contactIcon} />
                            redixsolutions.pro
                        </li>
                        <li>
                            <FaPhone className={styles.contactIcon} />
                            +216 92 861 655
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={styles.services}
                >
                    <h4>Services</h4>
                    <ul>
                        <li>Marketing sur les Réseaux Sociaux</li>
                        <li>Branding & Design</li>
                        <li>Création de Contenu</li>
                        <li>Développement Web & Mobile</li>


                        <li>Couverture d'Événements</li>

                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className={styles.links}
                >
                    <h4>Liens Rapides</h4>
                    <ul>
                        <li onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                            À Propos
                        </li>
                        <li onClick={() => document.getElementById('whyus')?.scrollIntoView({ behavior: 'smooth' })}>
                            Portfolio
                        </li>
                        <li onClick={() => document.getElementById('market')?.scrollIntoView({ behavior: 'smooth' })}>
                            Analyse du Marché
                        </li>
                        <li onClick={() => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' })}>
                            Stratégie
                        </li>
                        <li onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}>
                            Packages
                        </li>
                        <li>
                            <a href="https://redixsolutions.pro" target="_blank" rel="noopener noreferrer">
                                Site Principal
                            </a>
                        </li>
                    </ul>
                </motion.div>
            </div>

            <div className={styles.bottom}>
                <p>© 2025 Redix Digital Solutions . Tous droits réservés.</p>
                <p className={styles.prepared}>Préparé pour <strong>Malfouf & Crepe</strong> par <strong>Nizar</strong></p>
            </div>
        </footer>
    );
};

export default Contact;
