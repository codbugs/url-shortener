import styles from './MasterLayout.module.css';

export default function MasterLayout(props) {
    return <div className={styles.parent}>
        <div className={styles.container}>
            { props.children }
        </div>
    </div>;
}