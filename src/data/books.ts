// data/books.ts — 书单数据：状态驱动阅读进度（reading 带 progress 百分比）
// 均为真实出版的经典书籍：编程（软件工程经典）+ 设计 + 文学名著

export type BookStatus = 'reading' | 'read' | 'want';

export interface Book {
    id: string;
    title: string;
    author: string;
    category: string;
    status: BookStatus;
    /** 阅读进度（仅 reading 状态） */
    progress?: number;
}

export const books: Book[] = [
    // 编程
    {id: '1', title: '代码大全（第 2 版）', author: 'Steve McConnell', category: '编程', status: 'read'},
    {id: '2', title: '重构：改善既有代码的设计（第 2 版）', author: 'Martin Fowler', category: '编程', status: 'read'},
    {id: '3', title: '人月神话', author: 'Frederick P. Brooks Jr.', category: '编程', status: 'read'},
    {id: '4', title: '黑客与画家', author: 'Paul Graham', category: '编程', status: 'read'},
    {id: '5', title: '计算机程序的构造和解释（SICP）', author: 'Harold Abelson / Gerald Jay Sussman', category: '编程', status: 'want'},
    {id: '6', title: '编程珠玑', author: 'Jon Bentley', category: '编程', status: 'want'},
    {id: '7', title: '代码整洁之道', author: 'Robert C. Martin', category: '编程', status: 'want'},
    {id: '8', title: '深入理解计算机系统', author: 'Randal E. Bryant / David R. O\u2019Hallaron', category: '编程', status: 'want'},
    // 设计
    {id: '9', title: '设计中的设计', author: '原研哉', category: '设计', status: 'reading', progress: 60},
    {id: '10', title: '写给大家看的设计书', author: 'Robin Williams', category: '设计', status: 'read'},
    {id: '11', title: '秩序感：装饰艺术的心理学研究', author: 'E. H. Gombrich', category: '设计', status: 'want'},
    // 文学
    {id: '12', title: '活着', author: '余华', category: '文学', status: 'read'},
    {id: '13', title: '百年孤独', author: '加西亚·马尔克斯', category: '文学', status: 'reading', progress: 35},
    {id: '14', title: '围城', author: '钱锺书', category: '文学', status: 'read'},
    {id: '15', title: '平凡的世界', author: '路遥', category: '文学', status: 'read'},
    {id: '16', title: '红楼梦', author: '曹雪芹', category: '文学', status: 'want'}
];

export default books;
