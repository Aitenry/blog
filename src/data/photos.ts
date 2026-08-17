// data/photos.ts — 相册数据：public/travel 与 public/pet 下的照片（按拍摄时间排序）
// 页面使用 thumbs 目录下的压缩版本（原图 2–7MB 过重），原图保留在 public/travel、public/pet 根目录

export type PhotoCategory = 'travel' | 'pet';

export interface Photo {
    /** 拍摄序号（文件名中的编号） */
    no: number;
    category: PhotoCategory;
    /** 压缩版路径（public 根相对路径） */
    src: string;
    /** 拍摄日期 */
    date: string;
}

export const photos: Photo[] = [
    {no: 1, category: 'pet', src: '/pet/thumbs/20260815082344_1_3.jpg', date: '2026.08.15'},
    {no: 2, category: 'pet', src: '/pet/thumbs/20260815082345_2_3.jpg', date: '2026.08.15'},
    {no: 3, category: 'pet', src: '/pet/thumbs/20260815082346_3_3.jpg', date: '2026.08.15'},
    {no: 4, category: 'travel', src: '/travel/thumbs/20260815082348_4_3.jpg', date: '2026.08.15'},
    {no: 5, category: 'pet', src: '/pet/thumbs/20260815082348_5_3.jpg', date: '2026.08.15'},
    {no: 6, category: 'pet', src: '/pet/thumbs/20260815082349_6_3.jpg', date: '2026.08.15'},
    {no: 7, category: 'travel', src: '/travel/thumbs/20260815082351_7_3.jpg', date: '2026.08.15'},
    {no: 8, category: 'travel', src: '/travel/thumbs/20260815082352_8_3.jpg', date: '2026.08.15'},
    {no: 9, category: 'travel', src: '/travel/thumbs/20260815082353_9_3.jpg', date: '2026.08.15'},
    {no: 10, category: 'travel', src: '/travel/thumbs/20260815082354_10_3.jpg', date: '2026.08.15'},
    {no: 11, category: 'travel', src: '/travel/thumbs/20260815082355_11_3.jpg', date: '2026.08.15'},
    {no: 12, category: 'travel', src: '/travel/thumbs/20260815082356_12_3.jpg', date: '2026.08.15'},
    {no: 13, category: 'pet', src: '/pet/thumbs/20260817174248_13_3.jpg', date: '2026.08.17'},
    {no: 14, category: 'pet', src: '/pet/thumbs/20260817174248_14_3.jpg', date: '2026.08.17'}
];

export default photos;
