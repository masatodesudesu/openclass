import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';

export default function Card(props: any) {
    return (
        <div className={styles.card} >
            <div>
                <Image src={"/image.png"} alt="image" height={120} width={180} className={styles.image} />
            </div>
            <div>
                <div className={styles.category}>
                    <p>{props.category}</p>
                </div>
                <div className={styles.title}>
                    <p>{props.title}</p>
                </div>
                <div className={styles.name}>
                    <p>{props.name}</p>
                </div>
                <div className={styles.info}>
                    <div className={styles.target}>
                        <Image src={"/icon/target.png"} alt='target' height={16} width={16} className={styles.icon} />
                        <div className={styles.targetContent}>{props.target}</div>
                    </div>
                    <div className={styles.type}>
                        <Image src={"/icon/type.png"} alt='type' height={16} width={16} className={styles.icon} />
                        <div className={styles.typeContent}>{props.type}</div>
                    </div>
                    <div className={styles.access}>
                        <Image src={"/icon/access.png"} alt='access' height={16} width={16} className={styles.icon} />
                        <div className={styles.accessContent}>{props.access}</div>
                    </div>
                </div>
                <div className={styles.description}>{props.description}</div>
            </div>
        </div>
    )
};