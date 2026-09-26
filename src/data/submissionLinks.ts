// src/data/submissionLinks.ts
interface SubmissionLinks {
  [key: string]: string;
}

// Key එක හැදෙන්නේ: category slug එක + '-' + sub-competition name එක simple කරලා space වලට '-' දාලා
export const submissionLinks: SubmissionLinks = {
  'codinex-app-development': 'https://forms.gle/zGmpfKhr6PMS1MTS8',
  'codinex-website-development': 'https://forms.gle/af9heMrK2KJUntnA8',
  'pixelynx-digital-poster-designing': 'https://forms.gle/ZuQqYsqSFXqqkBxB8',
  'pixelynx-video-editing': 'https://forms.gle/Q8akkLG7d4maNNDT6',
  'pixelynx-animation-competition': 'https://forms.gle/pkryEo7SKBXfExff9',
  'pixelynx-graphic-designing': 'https://forms.gle/ifgNPTRPAHiNDGTQ9',
  'pixelynx-ai-graphic-designing': 'https://forms.gle/zdQ4jHYPGj69oavD7',
  'pixelynx-3d-modeling': 'https://forms.gle/NkXxn9Yee1ARsj2o6',
  'pixelynx-photo-manipulation': 'https://forms.gle/kKsV1zL1G7FeCwYq6',
  'mechatron-robotic-design-challenge': 'https://forms.gle/WgJeTZt42tnx2uKFA',
  'zenthack-security-tool-designing-competition': 'https://forms.gle/Ku5MHe45vPvnCHbn7',
  // Coding Challenges (Codinex) වලට link එකක් නැති නිසා මෙතන දාන්න එපා.
  // IOT Innovation (Mechatron) වලට link එකක් නැති නිසා මෙතන දාන්න එපා.
  // Virtueverse Custom Games වලට link එකක් නැති නිසා මෙතන දාන්න එපා.
  // Zenthack Quiz වලට link එකක් නැති නිසා මෙතන දාන්න එපා.
  // Cipher Quiz වලට link එකක් නැති නිසා මෙතන දාන්න එපා.
  // Questrix දෙකටම links නැති නිසා මෙතන දාන්න එපා.
};