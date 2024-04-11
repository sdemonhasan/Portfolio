// import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import { about } from '../../portfolio'
import emon from '../../assets/emon.png'
import Asset1 from '../../assets/Asset 1.svg';
import Asset2 from '../../assets/Asset 2.svg';
import Asset3 from '../../assets/Asset 3.svg';
import Asset4 from '../../assets/Asset 4.svg';
import Asset5 from '../../assets/Asset 5.svg';
import Asset6 from '../../assets/Asset 6.svg';
import Asset7 from '../../assets/Asset 7.svg';
import Asset8 from '../../assets/Asset 8.svg';


import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      <img className='asset asset-one' src={Asset1} alt="Asset one"/>
      <img className='asset asset-two' src={Asset2} alt="Asset two"/>
      <img className='asset asset-three' src={Asset3} alt="Asset three"/>
      <img className='asset asset-four' src={Asset4} alt="Asset four"/>
      <img className='asset asset-five' src={Asset5} alt="Asset five"/>
      <img className='asset asset-six' src={Asset6} alt="Asset six"/>
      <img className='asset asset-seven' src={Asset7} alt="Asset seven"/>
      <img className='asset asset-eight' src={Asset8} alt="Asset eight"/>


      <div className='about__contact center'>
        {name && (
          <h1>
            Hi, I am <span className='about__name'>{name}.</span>
          </h1>
        )}

        {role && <h2 className='about__role'>A {role}.</h2>}
        <p className='about__desc'>{description && description}</p>
        <div className='about__links'>
          {resume && (
            <a href={resume} download = "The cv of emon.pdf">
              <span type='button' className='btn btn--outline'>
                Resume
              </span>
            </a>
          )}

          {social && (
            <>
              {social.facebook && (
                <a
                  href={social.facebook}
                  aria-label='facebook'
                  className='link link--icon'
                >
                  <FacebookIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>

              )}
            </>

          )}
        </div>

      </div>
      <div>
        <img className="about__image" src={emon} alt="fsdf" />
      </div>
    </div>
  )
}

export default About
