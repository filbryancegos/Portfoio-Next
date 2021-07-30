import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <h1 className={styles.heading}>Fil Bryan <span>Egos</span></h1>
	  <h2 className={styles.smheading}>Front-end Developer</h2>
	  <div className="flex space-x-4">
		  <div><a href=""><i className="fab fa-twitter fa-2x text-white"></i></a></div>
		  <div><a href=""><i className="fab fa-facebook fa-2x text-white"></i></a></div>
		  <div><a href=""><i className="fab fa-linkedin fa-2x text-white"></i></a></div>
		  <div><a href=""><i className="fab fa-github fa-2x text-white"></i></a></div>
		  
	  </div>
    </>
  )
}
