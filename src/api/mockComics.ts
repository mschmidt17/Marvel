import comic1 from '@/assets/comics/adam-warlock-01.jpg';
import comic2 from '@/assets/comics/adam-warlock-02.jpg';
import comic3 from '@/assets/comics/adam-warlock-03.jpg';
import comic4 from '@/assets/comics/adam-warlock-03.jpg';
import comic10 from '@/assets/comics/adam-warlock-10.jpg';
import comic12 from '@/assets/comics/adam-warlock-12.jpg';
import comic14 from '@/assets/comics/adam-warlock-14.jpg';

export type Comic = {
  id: number;
  year: number;
  title: string;
  thumbnail: string;
};

export const mockComics: Comic[] = [
  { id: 100, year: 2010, title: 'Who is...? Adam Warlock infinity Comic #1', thumbnail: comic10 },
  { id: 101, year: 1996, title: 'Who is...? Adam Warlock infinity Comic #1', thumbnail: comic1 },
  { id: 102, year: 2013, title: 'Who is...? Adam Warlock infinity Comic #1', thumbnail: comic2 },
  { id: 103, year: 2011, title: 'Who is...? Adam Warlock infinity Comic #1', thumbnail: comic3 },
  { id: 104, year: 2002, title: 'Who is...? Adam Warlock infinity Comic #1', thumbnail: comic4 },
  { id: 105, year: 2015, title: 'Who is...? Adam Warlock infinity Comic #1', thumbnail: comic12 },
  { id: 106, year: 1998, title: 'Who is...? Adam Warlock infinity Comic #1', thumbnail: comic14 },
];
