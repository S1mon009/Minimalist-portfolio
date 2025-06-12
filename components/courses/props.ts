export interface CourseProps {
  courses: {
    name: string;
    description: string;
    file: string;
    finishedAt: string;
    company: string;
  }[];
}
