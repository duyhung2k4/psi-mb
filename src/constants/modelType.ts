export const ModelType = {
  profile: "profile",
  credential: "credential",
  role: "role",
  temporaryCredential: "temporaryCredential",
  course: "course",
  languageCertificate: "languageCertificate",
  languageCertificateCourse: "languageCertificateCourse",
  major: "major",
  majorCourse: "majorCourse",
  skill: "skill",
  skillCourse: "skillCourse",
  subject12: "subject12",
  subject12Course: "subject12Course",
  saveCourse: "saveCourse",
  registerCourse: "registerCourse",
}

export type TypeModelType = keyof (typeof ModelType);