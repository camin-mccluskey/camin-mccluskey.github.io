import React from 'react'
import SocialLinks from './SocialLinks'

export const Footer = () => {
  return (
    <div className="flex flex-col w-full items-center space-y-3 pt-5">
      <SocialLinks />
      <p className="darkTrans text-purple-600 dark:text-green-400">©2021 - Camin McCluskey</p>
    </div>
  )
}

export default Footer;
