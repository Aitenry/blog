import DiaryPoemNight from './diary-poem-night.md?raw';
import DiaryFarewell from './diary-farewell.md?raw';
import DiaryIIMS_V0_1_0 from './diary-iims-v0.1.0.md?raw';
import DiaryRytenBench from './diary-rytenbench.md?raw';

export interface Diary {
    id: string;
    title: string;
    date: string;
    weather?: string;
    mood?: string;
    excerpt: string;
    content: string;
    tags: string[];
}

export const diaries: Diary[] = [
    {
        id: '1',
        title: 'RytenBench',
        date: '2026-02-17',
        weather: '多云',
        mood: '思考',
        excerpt: '发布下一个项目的规划与定位！',
        content: DiaryRytenBench,
        tags: ['项目', 'AI', '工具', '工作区']
    },
    {
        id: '2',
        title: 'IIMS-By-AI v0.1.0',
        date: '2026-01-31',
        weather: '晴',
        mood: '激动',
        excerpt: '今天终于完成了 IIMS-By-AI 项目的第一个版本！',
        content: DiaryIIMS_V0_1_0,
        tags: ['项目', 'AI', '智能系统', 'IIMS']
    },
    {
        id: '3',
        title: '题记-2020.12.28.夜',
        date: '2020-12-28',
        weather: '夜',
        mood: '别离',
        excerpt: '别离 - 亭院门前叶纷飞，落日西下人憔悴。',
        content: DiaryFarewell,
        tags: ['诗', '别离', '感悟']
    },
    {
        id: '4',
        title: '题记-2020.6.12.夜',
        date: '2020-06-12',
        weather: '夜',
        mood: '感伤',
        excerpt: '忆思首 - 吾坐台前思旧事，月光透雾照台前。',
        content: DiaryPoemNight,
        tags: ['诗', '感悟', '生活']
    }
];

export default diaries;
