import React from 'react';
import TBody from "./TBody/TBody";
import THead from "./Thead/THead";
import styles from "./table.module.scss";

interface TableProps {

}

const Table: React.FC<TableProps> = ({}) => {
    return (
        <>
            <table className={styles.table}>
                <THead></THead>
                <TBody></TBody>
            </table>
        </>
    );
};

export default Table;