export interface ExperienceModel {
  positionTitle: string,
  company: string,
  startMonth: string,
  startYear: string,
  endMonth: string
  endYear: string,
  description: {
    responsibilities: string[],
    aboutProject: string,
    toolsAndTechnologies: string
  },
}
