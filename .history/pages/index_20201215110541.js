import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from'../comps/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  )
}
