import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import Asset1 from '../../assets/Asset 1.svg';
import Asset2 from '../../assets/Asset 2.svg';
import Asset3 from '../../assets/Asset 3.svg';
import Asset4 from '../../assets/Asset 4.svg';
import Asset5 from '../../assets/Asset 5.svg';
import Asset6 from '../../assets/Asset 6.svg';
import Asset7 from '../../assets/Asset 7.svg';
import Asset8 from '../../assets/Asset 8.svg';


import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <img className='asset skill-asset-one' src={Asset1} alt="Asset one"/>
      <img className='asset skill-asset-two' src={Asset2} alt="Asset two"/>
      <img className='asset skill-asset-three' src={Asset3} alt="Asset three"/>
      <img className='asset skill-asset-four' src={Asset4} alt="Asset four"/>
      <img className='asset skill-asset-five' src={Asset5} alt="Asset five"/>
      <img className='asset skill-asset-six' src={Asset6} alt="Asset six"/>
      <img className='asset skill-asset-seven' src={Asset7} alt="Asset seven"/>
      <img className='asset skill-asset-eight' src={Asset8} alt="Asset eight"/>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
