// data/projects.ts
export interface Project {
    id: number;
    title: string;
    descriptionKey: string;
    tech: string[];
    imageLight: string;
    imageDark: string;
    github: string;
    /** active = 开发中 / acquired = 已收购停止更新 */
    status: 'active' | 'acquired';
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'RytenBench',
        descriptionKey: 'projects.rytenDescription',
        tech: ['Electron', 'React', 'TypeScript', 'AI'],
        imageLight: 'ryten-light.svg',
        imageDark: 'ryten-dark.svg',
        github: 'https://github.com/Aitenry/RytenBench',
        status: 'active'
    },
    {
        id: 2,
        title: 'IIMS-By-AI',
        descriptionKey: 'projects.iimsDescription',
        tech: ['Java', 'Vue', 'SpringBoot', 'TypeScript', 'AI'],
        imageLight: 'iims-light.svg',
        imageDark: 'iims-dark.svg',
        github: 'https://github.com/Aitenry/IIMS-By-AI',
        status: 'acquired'
    }
];

export default projects;
