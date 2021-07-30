import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


function ActiveLink({ children, href, mobile }) {

	const { dispatch } = useContext(AppContext)
	

	const router = useRouter()

	const handleClick = (e) => {
		e.preventDefault()
		router.push(href)
		dispatch({
			type: 'TOOGLE_MENU'
		})
 	 }

  return (
    <a href={href} onClick={handleClick} className={`nav-link ${router.asPath === href ? 'current' : ''}` }>
      {children}
    </a>
  )
}

export default ActiveLink