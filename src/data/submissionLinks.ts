// src/data/submissionLinks.ts
interface SubmissionLinks {
  [key: string]: string;
}

// Key එක හැදෙන්නේ: category slug එක + '-' + sub-competition name එක simple කරලා space වලට '-' දාලා
export const submissionLinks: SubmissionLinks = {
  codinex: "https://forms.gle/6fZtYRGCCsHvzAx19",
  nextron: "https://forms.gle/XVw896DwqjCAbB8J9",
  pixelynx: "https://forms.gle/iMZ1R71Xz69wjPn29",
  cipherx: "https://forms.gle/pasyHamyMQjTtdii7",
  voicesnx: "https://forms.gle/r13CcN777x3fHCo48",
  visualnx: "https://forms.gle/cFELU1tLEtbjJYMU8",
  framenx: "https://forms.gle/c2XS1aPjHB5buGT26",
  "most-popular": "https://forms.gle/iBPdfe3ZrtqUXg6u9",
};