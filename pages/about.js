import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function About() {
  return (
    <>
      <h1 className={styles.heading}>About <span>Me</span></h1>
	  <h2 className={styles.smheading}>Let me tell you a few things...</h2>
    </>
  )
}
