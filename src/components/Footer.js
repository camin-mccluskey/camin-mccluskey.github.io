import React from 'react'
import SocialLinks from './SocialLinks'

export const Footer = () => {
  return (
    <footer className="flex flex-col w-full items-center space-y-3 pt-5">
      <SocialLinks />
      <p className="darkTrans text-purple-600 dark:text-green-400">©2022 - Camin McCluskey</p>
    </footer>
  )
}

export default Footer;
