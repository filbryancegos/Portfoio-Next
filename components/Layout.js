import React from 'react'
import Meta from './Meta'
import Nav from './Nav'
import { useState } from 'react'
import { AppProvider } from '../context/AppContext'
import styles from '../styles/Home.module.css'

function Layout ({children}) {

	return (
		<AppProvider>
			<Meta />
			<Nav />
			<>
				{children}
			</>
		</AppProvider>
	) 
}

export default Layout;
