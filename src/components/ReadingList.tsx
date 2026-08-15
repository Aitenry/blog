// components/ReadingList.tsx — 书单：状态统计 + 账本式列表 + 阅读进度条
import {useTranslation} from 'react-i18next';
import {books, type BookStatus} from '../data/books';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';

const statusClass: Record<BookStatus, string> = {
    reading: 'border-[var(--accent)] text-[var(--accent)]',
    read: 'border-line text-mute',
    want: 'border-line text-mute'
};

const statusLabel = (status: BookStatus, t: (key: string) => string) =>
    status === 'reading'
        ? t('reading.statusReading')
        : status === 'read'
          ? t('reading.statusRead')
          : t('reading.statusWant');

const ReadingList: React.FC = () => {
    const {t} = useTranslation();
    const count = (status: BookStatus) => books.filter((b) => b.status === status).length;

    return (
        <section className="relative px-4 py-16 sm:px-6 sm:py-24 md:px-8">
            <div className="mx-auto max-w-5xl">
                <SectionTitle
                    index={5}
                    label={t('reading.eyebrow')}
                    title={t('reading.title')}
                    extra={
                        <span className="font-mono text-sm text-mute">
                            {String(books.length).padStart(2, '0')} {t('reading.total')}
                        </span>
                    }
                />

                {/* 状态统计 */}
                <Reveal>
                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-b border-line pb-5 font-mono text-xs text-mute">
                        <span>
                            <span className="text-[var(--accent)]">{String(count('reading')).padStart(2, '0')}</span>{' '}
                            {t('reading.statusReading')}
                        </span>
                        <span>
                            <span className="text-ink">{String(count('read')).padStart(2, '0')}</span>{' '}
                            {t('reading.statusRead')}
                        </span>
                        <span>
                            <span>{String(count('want')).padStart(2, '0')}</span> {t('reading.statusWant')}
                        </span>
                    </div>
                </Reveal>

                {/* 账本式列表 */}
                <div className="border-b border-line">
                    {books.map((book, index) => (
                        <Reveal key={book.id} delay={index * 0.03}>
                            <div className="group grid grid-cols-12 items-center gap-x-4 gap-y-2 border-t border-line px-2 py-5 transition-colors duration-200 hover:bg-soft sm:py-6">
                                {/* 状态 */}
                                <div className="col-span-3 sm:col-span-2">
                                    <span
                                        className={`inline-block border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${statusClass[book.status]}`}
                                    >
                                        {statusLabel(book.status, t)}
                                    </span>
                                </div>

                                {/* 书名 + 作者 */}
                                <div className="col-span-9 sm:col-span-7">
                                    <h3 className="font-display text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)] sm:text-xl">
                                        {book.title}
                                    </h3>
                                    <p className="mt-0.5 font-mono text-xs text-mute">{book.author}</p>
                                </div>

                                {/* 分类 + 进度 */}
                                <div className="col-span-12 flex items-center justify-between gap-4 pl-0 sm:col-span-3 sm:justify-end">
                                    <span className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-mute">
                                        {book.category}
                                    </span>
                                    {book.status === 'reading' && book.progress !== undefined ? (
                                        <span className="flex items-center gap-2">
                                            <span className="h-1 w-16 overflow-hidden bg-[var(--line)] sm:w-20">
                                                <span
                                                    className="block h-full bg-[var(--accent)]"
                                                    style={{width: `${book.progress}%`}}
                                                />
                                            </span>
                                            <span className="font-mono text-[10px] text-[var(--accent)]">
                                                {book.progress}%
                                            </span>
                                        </span>
                                    ) : (
                                        <span className="font-mono text-xs text-mute">—</span>
                                    )}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReadingList;
