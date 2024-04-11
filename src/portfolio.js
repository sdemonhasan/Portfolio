const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/home',
  title: 'Emon.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sayf',
  role: 'Social Media Marketer',
  description:
    'A social media marketing agency helps brands market themselves on social media. Since this type of company is an agency model, it works with multiple brands simultaneously. Thrive Internet Marketing Agency, LYFE Marketing, and Disruptive Advertising are a few good examples of social media marketing agencies. Clients often enjoy working with social media agencies versus an in-house social media manager or freelancer because an agency has collective knowledge pooled together from many people on the team. An agency will also have streamlined processes already in place, and often specializes in a particular industry or type of marketing.  ',
  resume: './assets/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/sayf585/',
    facebook: 'https://facebook.com',
    github: ''
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Social Media Marketing',
  'Facebook Marketing',
  'Instagram Marketing',
  'Campaign Setup',
  'Pixel and Event Setup',
  'High Quality Traffic',
  'Boost Sales and leads',
  'Bussiness Leads',
  'LinkdIn Leads',
  'Targeted Leads',
  'Active and valid emails',
  'Data Entry',
  'Email Marketing',
  'Google Ads',
  'PPC Advertising',
  'Google analytics (GA4)',
  'Server site tracing with GTM',
  'Facebook and IG ads',
  'Facebook conversation API',
  'Sales funnel for ads creation'

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sayfemon@gmail.com',
  phoneNumber: '01315084585'
}

export { header, about, projects, skills, contact }
