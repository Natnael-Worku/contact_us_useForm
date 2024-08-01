import React from 'react'
import ContactStyle from './Contact.module.css'
const Contact = () => {
  return (
    <div className={ContactStyle.contact_form_container}>
      <h2 className={ContactStyle.contact_title}>Contact With Us</h2>
      <form className={ContactStyle.contact_form}>
        <input type="text" placeholder="Your Name" className={ContactStyle.contact_input} />
        <input type="email" placeholder="Your Email" className={ContactStyle.contact_input} />
        <textarea placeholder="Message" className={ContactStyle.contact_textarea}></textarea>
        <button  className={ContactStyle.contact_button}>Send</button>
      </form>
    </div>
  )
}

export default Contact