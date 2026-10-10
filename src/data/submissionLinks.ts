// src/data/submissionLinks.ts
interface SubmissionLinks {
  [key: string]: string;
}

// Key එක හැදෙන්නේ: category slug එක + '-' + sub-competition name එක simple කරලා space වලට '-' දාලා
export const submissionLinks: SubmissionLinks = {
  codinex: "https://forms.gle/dq4zU16n5QEJVCvW9",
  nextron: "https://forms.gle/7n87fhnqB137hRri8",
  pixelynx: "https://forms.gle/psTYB6smDq81WMrBA",
  cipherx: "https://forms.gle/g7BxhN7xTSNNdmzW6",
  voicesnx: "https://forms.gle/gUJRRyjhgdpdj8Pm8",
  visualnx: "https://forms.gle/yexwCws7R4NmBsZbA",
  framenx: "https://forms.gle/dSxfSWrLBcPHAaRj6",
  "most-popular": "https://forms.gle/iBPdfe3ZrtqUXg6u9",
};
