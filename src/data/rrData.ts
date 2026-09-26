// src/data/rrData.ts

export interface RuleSection {
  title: string;
  points: string[];
}

export interface SubCompetitionRules {
  subCompetitionName: string;
  pdfUrl: string;
  content: RuleSection[];
}

export interface CompetitionRules {
  slug: string;
  title: string;
  rules: SubCompetitionRules[];
}

export const rrData: CompetitionRules[] = [
  {
    slug: 'codinex',
    title: 'CODINEX Rules & Regulations',
    rules: [
      {
        subCompetitionName: 'Web Development',
        pdfUrl: '/pdfs/rr-codinex-web.pdf',
        content: [
          { title: 'TASK', points: ['Sarah, an innovative programmer and data enthusiast, is tasked with developing a Teacher Performance & Development Tracking System. The platform will store teacher information, classroom performance, student feedback, training history, lesson plans, and career milestones. It will provide interactive dashboards, simple analytics, secure access, and intuitive navigation for teachers and school management, helping track progress, encourage professional growth, and celebrate achievements.'] },
          { title: 'ELIGIBILITY', points: ['The competition is open to all students, with no age or grade restrictions.', 'Participation is individual only; team submissions are not allowed. All projects must be original work.', 'Any form of plagiarism or copied work will result in disqualification.'] },
          { title: 'What You Have to Do', points: ['Design and build a Teacher Performance & Development Tracking System that includes:', '[ Teacher Profiles, Attendance & Punctuality, Training & Certifications, Feedback System, Lesson Plans, Visual Analytics, Admin Dashboard, Optional: Gamification ]', 'The system should be intuitive, efficient, secure, and inspiring, helping schools encourage continuous professional development and recognize teaching excellence.'] },
          { title: 'Instructions', points: ['Participants must build a fully functional web application based on the given task.', 'The following frontend technologies may be used: HTML, CSS, JavaScript, React, Angular, Vue.js, or Three.js.', 'Participants may also build their application entirely from scratch using HTML, CSS, and JavaScript.', 'The completed web application must be deployed online using GitHub Pages or a hosting platform such as Netlify or Vercel.', 'Each project must include a README.md file containing: Project overview, Technologies used, Usage instructions.', 'Participants must submit their GitHub repository link before the deadline.', 'The submitted version will be considered final. Any changes made after the deadline may result in disqualification.'] },
          { title: 'Additional Rules', points: ['Plagiarism is strictly prohibited. Any plagiarized project will result in immediate disqualification.', 'Open-source libraries and frameworks are permitted, but they must be properly credited in the project documentation.', 'Participants must ensure that their project is their own original work.'] },
          { title: 'Submission Requirements', points: ['Participants must submit:', 'Public GitHub Repository Link', 'Hosted Web Application Link', 'README.md documentation included in the repository'] }
        ]
      }
    ],
  },
  {
    slug: 'nextron',
    title: 'NEXTRON Rules & Regulations',
    rules: [
      {
        subCompetitionName: 'Robotics & IoT',
        pdfUrl: '/pdfs/rr-nextron.pdf',
        content: [
          { title: 'What You Have to Do', points: ['Develop robotic solutions under one of the following categories:', '1. TechForge (Industrial)', '2. AssistAI (Service)', '3. BioSync (Medical)', '4. MotionCore (Mobile)', '5. AgriVerse (Agricultural)', '6. FrontierX (Exploration)'] },
          { title: 'Instructions', points: ['The competition is open to school students only.', 'Projects may be submitted individually or in teams of 2–5 students.', 'Each participant/team may submit only one project.', 'All projects must be the original work of the participating students.', 'Teachers may provide guidance and advice but must not build or program the project on behalf of the students.', 'Participants must be able to independently explain and demonstrate their project.', 'Each team will have 10–15 minutes for the project presentation and demonstration.', 'Projects will be evaluated based on: Innovation, Creativity, Technical Design, Functionality, Practical Impact, Presentation.', 'The decision of the judging panel will be final.', 'Projects that are unsafe, copied, inappropriate, or violate the competition guidelines may be disqualified.'] },
          { title: 'Submission Requirements', points: ['Submit one completed project per participant/team.', 'The project must be original and student-developed.', 'Participants must be prepared to present and demonstrate the project within the allocated 5-10 minutes.', 'Teams should provide any required project documentation or supporting materials requested by the organizers.', 'The competition will be held on 10 September 2026, from 2:00 p.m. to 5:30 p.m., at the school premises.', 'Schools located outside the Colombo District may participate online via Zoom, according to the instructions provided by the organizers.'] }
        ]
      }
    ],
  },
  {
    slug: 'pixelynx',
    title: 'PIXELYNX Rules & Regulations',
    rules: [
      {
        subCompetitionName: 'Digital Poster Designing',
        pdfUrl: '/pdfs/rr-pixelynx.pdf',
        content: [
          { title: 'Task', points: ['A creative digital artwork based on the theme: “Future of Innovations”'] },
          { title: 'Eligibility and Participation', points: ['The competition is open for any category.', 'All contestants studying in Grade 6-13 are eligible to participate. This competition is for individuals, not for teams.', 'No limitation is added to the number of contestants participating from a school.', 'Only one submission is accepted from each contestant.'] },
          { title: 'Instructions', points: ['You can use any software for this competition. (Adobe Photoshop, Adobe Illustrator, Canva, etc.)', 'You must regularly capture screenshots during the creation of your artwork for submission purposes.', 'You must not use any templates, and plagiarism is strictly prohibited.', 'Any instance will result in immediate disqualification.', 'Your designs should have a consistent theme.', 'Dimensions of your design should follow 4:3 size.'] },
          { title: 'Submission', points: ['The artwork should be exported only in either .PNG, .JPG, or .PDF format.', 'The file should be renamed as “SCHOOLNAME_YOURNAME” format.', 'All the submissions should be uploaded to Google Drive, and the public accessed Google Drive link should be sent through the submission link.', 'Submissions received after the specified deadline will not be accepted under any circumstances.'] }
        ]
      }
    ],
  },
  {
    slug: 'cipherx',
    title: 'CIPHERX Rules & Regulations',
    rules: [
      {
        subCompetitionName: 'Quiz Competition',
        pdfUrl: '/pdfs/rr-cipherx.pdf',
        content: [
          { title: 'Eligibility and Participation', points: ['The competition is open to Grade 12 and Grade 13 students.', 'Participation is team-based only.', 'Each team must consist of exactly 4 students.', 'Individual participation is not permitted.', 'Each school may submit one team.'] },
          { title: 'Instructions', points: ['The competition will be conducted physically at school premises.', 'The competition will consist of one round.', 'The challenge will follow a crossword-style ICT puzzle format.', 'Questions will be based on: G.C.E. Advanced Level ICT syllabus', 'All four team members must participate together.', 'Teams must work only on their own crossword puzzle and must not communicate with other teams.', 'Sharing answers or receiving assistance from another team may result in disqualification.', 'Internet access, AI tools, and other unauthorized electronic devices are not permitted', 'The decision of the judging panel will be final.', 'Any violation of the rules may result in penalty or disqualification.', 'By participating, all teams agree to abide by the official rules and decisions of the organizing committee.'] }
        ]
      }
    ],
  },
  {
    slug: 'voicesnx',
    title: 'VOICESNX Rules & Regulations',
    rules: [
      {
        subCompetitionName: 'Debate',
        pdfUrl: '/pdfs/rr-voicesnx.pdf',
        content: [
          { title: 'Eligibility and Participation', points: ['Each team shall consist of 4 speakers.', 'Teams will be assigned to the Proposition or Opposition.', 'The debate conducted in English or Sinhala. Each team must select one language'] },
          { title: 'Debate Topic', points: ['“The Power of Human Innovation Will Remain Greater Than Artificial Intelligence.”', 'Teams must argue for or against the given motion.', 'All arguments must remain relevant to the topic.'] },
          { title: 'Speaking Time', points: ['Round 01: 1st speaker – 3 min; other speakers – 2 min each.', 'Round 02: 1st speaker– 4 minutes.', 'A warning bell will be given 1 minute before the time limit.', 'Speakers must stop when the final bell is given.', 'Winning teams selected for final'] },
          { title: 'Arguments & Rebuttal', points: ['Arguments should be logical, relevant, and supported by facts or examples.', 'Speakers may challenge opposing arguments through respectful rebuttals.'] },
          { title: 'General Rules', points: ['All participants must report at least 15 minutes before the scheduled time.', 'Cheating, or deliberate disruption may result in disqualification.', 'The judges’ decision will be final and binding.', 'The competition will be conducted physically at school premises.', 'Date & Time: To be announced', 'After registration, teams will be informed Proposition or Opposition'] }
        ]
      }
    ],
  },
  {
    slug: 'visualnx',
    title: 'VISUALNX Rules & Regulations',
    rules: [
      {
        subCompetitionName: 'Video Editing',
        pdfUrl: '/pdfs/rr-visualnx.pdf',
        content: [
          { title: 'Task', points: ['Only one video must be submitted by each participant based on one of the following two topics:', '1. School in the Year 2050', 'Theme: A visionary look at the future of education.', 'Description: Create a video (maximum 5 minutes) that envisions what school life might be like in the year 2050. The video should reflect originality and imagination while showcasing strong editing and narrative skills.', '2. Gadget Commercial Parody', 'Theme: A humorous or exaggerated advertisement for a fictional tech product.', 'Description: Design a commercial (30 seconds to 2 minutes) for an imaginary gadget or tech product. The concept can be futuristic, overly complex, or malfunctioning. The objective is to showcase editing and visual storytelling skills through creativity and humor.'] },
          { title: 'Instructions', points: ['Use of AI-generated video, audio, images, or effects is strictly prohibited.', 'All content must be original or royalty-free.', 'Reuse of work from other competitions or plagiarised content will lead to immediate disqualification.', 'The video should be created strictly within the competition period.', 'Final output must be in landscape format and a minimum resolution of 720p.'] },
          { title: 'Submission', points: ['Submit the final video in .MP4 or .MOV format.', 'The folder should be named: “SCHOOLNAME_YOURNAME “', 'All submissions must be uploaded to Google Drive. The public access link must be submitted via the official submission form.', 'Submissions after the deadline will not be accepted under any circumstances.'] }
        ]
      }
    ],
  },
  {
    slug: 'framenx',
    title: 'FRAMENX Rules & Regulations',
    rules: [
      {
        subCompetitionName: 'Presentation',
        pdfUrl: '/pdfs/rr-framenx.pdf',
        content: [
          { title: 'Eligibility & Participation', points: ['The competition is open to school students.', 'Each team shall consist of 4 members.', 'Each team may submit only one presentation.', 'The presentation must be based on the theme “Quantum Computing: Unlocking the Impossible.”', 'The presentation must demonstrate the students\' own understanding of the topic.'] },
          { title: 'Instructions', points: ['The presentation must be conducted entirely in English.', 'Each member will be given 3 minutes to present.', 'The total presentation time for each team is 12 minutes.', 'Each member should present a different sectaion of the topic.', 'A warning bell will be given 1 minute before the end of each member\'s allocated time.', 'The presentation should be clear, informative, creative, and suitable for a school audience.'] },
          { title: 'General Rules', points: ['The presentation must be the original work of the participating students.', 'Plagiarism is strictly prohibited.', 'Sources used for research should be acknowledged.', 'Students should be able to explain and answer questions about the content they present.', 'The competition will be conducted physically at school premises.', 'Date & Time: To be announced'] }
        ]
      }
    ],
  },
  {
    slug: 'most-popular',
    title: 'Most Popular School ICT Society',
    rules: [
      {
        subCompetitionName: 'Most Popular School ICT Society',
        pdfUrl: '/pdfs/rr-mpss.pdf',
        content: [
          { title: 'Eligibility', points: ['The competition is open to all school ICT societies across the island.'] },
          { title: 'Registration Requirement', points: ['Only the top five positions of the society (President, Vice President, Secretary, Treasurer, and Teacher-in-Charge) are eligible to register their school for the competition.', 'Registrations submitted by any other individuals will be removed from the registration list.', 'Post Publication Posts for each registered school will be published on the official Josephian ICT Society WhatsApp channel.'] },
          { title: 'Voting', points: ['Voting will begin immediately after the publication of the posts.', 'Votes will be counted based on the number of red heart ( ❤ ) reactions received by each post.', 'The voting will remain open for a specified period, after which all reactions will be tallied.', 'The exact deadline for voting will be communicated at the time of post publication.'] },
          { title: 'Winner Selection', points: ['The school whose post accumulates the highest number of red heart reactions by the deadline will be declared the winner.'] },
          { title: 'Disclaimer', points: ['Any attempt to manipulate or artificially increase the number of reactions will result in disqualification from the competition.'] }
        ]
      }
    ],
  },
];