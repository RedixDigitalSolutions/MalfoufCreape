import React from 'react';
import { motion } from 'framer-motion';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import styles from '../styles/MarketAnalysis.module.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const MarketAnalysis = () => {
    const marketGrowthData = {
        labels: ['2023', '2024', '2025', '2026', '2027'],
        datasets: [
            {
                label: 'Croissance du Marché Fast Food (Millions TND)',
                data: [850, 950, 1100, 1280, 1500],
                backgroundColor: 'rgba(255, 107, 53, 0.8)',
                borderColor: '#ff6b35',
                borderWidth: 2,
                borderRadius: 8
            }
        ]
    };

    const customerPreferenceData = {
        labels: ['Livraison en Ligne', 'Sur Place', 'À Emporter', 'Commandes Réseaux Sociaux'],
        datasets: [
            {
                data: [45, 25, 20, 10],
                backgroundColor: [
                    '#ff6b35',
                    '#f7931e',
                    '#ffc93c',
                    '#ff9a76'
                ],
                borderWidth: 0
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    font: { size: 12 }
                }
            }
        }
    };

    return (
        <section id="market" className={styles.market}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={styles.header}
            >
                <h2>Analyse du Marché</h2>
                <p>Comprendre le paysage du fast food à Bardo</p>
            </motion.div>

            <div className={styles.chartsContainer}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.chartCard}
                >
                    <h3>Projection de Croissance du Marché</h3>
                    <div className={styles.chartWrapper}>
                        <Bar data={marketGrowthData} options={chartOptions} />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.chartCard}
                >
                    <h3>Préférences des Clients</h3>
                    <div className={styles.chartWrapper}>
                        <Doughnut data={customerPreferenceData} options={chartOptions} />
                    </div>
                </motion.div>
            </div>

            <div className={styles.insights}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.insightCard}
                >
                    <h4>📍 Marché Local</h4>
                    <ul>
                        <li>Bardo a une demande croissante pour la cuisine de rue authentique</li>
                        <li>Concurrence limitée pour les crêpes et malfouf de qualité</li>
                        <li>Forte affluence d'étudiants et de jeunes professionnels</li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className={styles.insightCard}
                >
                    <h4>💡 Opportunité</h4>
                    <ul>
                        <li>45% des commandes proviennent maintenant des réseaux sociaux</li>
                        <li>Le contenu vidéo génère 3x plus d'engagement</li>
                        <li>Le marché de la livraison en ligne croît de 15% par an</li>
                    </ul>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={styles.swot}
            >
                <h3>Analyse SWOT</h3>
                <div className={styles.swotGrid}>
                    <div className={`${styles.swotItem} ${styles.strengths}`}>
                        <h4>Forces</h4>
                        <ul>
                            <li>Recettes authentiques uniques</li>
                            <li>Emplacement privilégié à Bardo</li>
                            <li>Notoriété croissante de la marque</li>
                        </ul>
                    </div>

                    <div className={`${styles.swotItem} ${styles.weaknesses}`}>
                        <h4>Faiblesses</h4>
                        <ul>
                            <li>Présence en ligne limitée</li>
                            <li>Pas de marketing structuré</li>
                            <li>Faible engagement sur les réseaux sociaux</li>
                        </ul>
                    </div>

                    <div className={`${styles.swotItem} ${styles.opportunities}`}>
                        <h4>Opportunités</h4>
                        <ul>
                            <li>Marché de livraison inexploité</li>
                            <li>Publicité sur les réseaux sociaux</li>
                            <li>Partenariats avec les blogueurs culinaires</li>
                        </ul>
                    </div>

                    <div className={`${styles.swotItem} ${styles.threats}`}>
                        <h4>Menaces</h4>
                        <ul>
                            <li>Concurrence croissante</li>
                            <li>Augmentation des coûts alimentaires</li>
                            <li>Changement des habitudes des consommateurs</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default MarketAnalysis;
