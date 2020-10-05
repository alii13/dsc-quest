import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import "./SocialIcons.css"
function SocialIcons() {

    const icons =[ FaFacebookF, FaTwitter, FaInstagram, FaExternalLinkAlt,FaLinkedinIn, MdEmail]

    return (
        <div className="social__icon">
            {icons.map((Icon, i) => (
                <span className="icon">{<Icon/>}</span>
            ))}
            
        </div>
    )
}

export default SocialIcons
