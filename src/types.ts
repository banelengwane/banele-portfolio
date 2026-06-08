export interface Project {
    id:  number;
    title: string;
    tier: 'Beginner' | 'Intermediate' | 'Advanced';
    description: string;
    techStack: string[];
    architectureHighlights: string[];
    githubUrl: string;
}