// data/skills.ts
export interface Skill {
    name: string;
    level: number;
}

export const skills: Skill[] = [
    {name: 'Java', level: 90},
    {name: 'Vue', level: 79},
    {name: 'JavaScript', level: 79},
    {name: 'TypeScript', level: 73},
    {name: 'React', level: 72},
    {name: 'Electron', level: 70}
];

export default skills;
