// import Message from '@material-ui/icons/Message'
// import Phone from '@material-ui/icons/Phone'
import { contact } from '../../portfolio'
import Phone from '../../assets/phone-icon.svg'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='contact__link-list'>
      <a href={`tel:${contact.phoneNumber}`} type="button" className='contact__link-phone btn btn--outline'>
          <img className='contact__link-phone-icon' src={Phone} alt="phone"/>
         
      </a>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='contact__link-email btn btn--outline'>
      
          Email me
        </span>
      </a>
      </div>
    </section>
  )
}

export default Contact
