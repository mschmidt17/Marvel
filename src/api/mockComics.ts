import comic1 from '@/assets/comics/adam-warlock-01.jpg';
import comic2 from '@/assets/comics/adam-warlock-02.jpg';
import comic3 from '@/assets/comics/adam-warlock-03.jpg';
import comic4 from '@/assets/comics/adam-warlock-03.jpg';
import comic10 from '@/assets/comics/adam-warlock-10.jpg';
import comic12 from '@/assets/comics/adam-warlock-12.jpg';
import comic19 from '@/assets/comics/adam-warlock-19.jpg';
import comic20 from '@/assets/comics/adam-warlock-20.jpg';
import comic21 from '@/assets/comics/adam-warlock-21.jpg';
import comic25 from '@/assets/comics/adam-warlock.jpg';
import comic14 from '@/assets/comics/adam-warlock-14.jpg';
import comic26 from '@/assets/comics/fighting-america.jpg';

export type Comic = {
  id: number;
  year: number;
  title: string;
  thumbnail: string;
};

export const mockComics: Comic[] = [
  { id: 100, year: 1995, title: 'Who is...? Adam Warlock infinity Comic #1', thumbnail: comic10 },
  { id: 101, year: 1996, title: 'Who is...? Adam Warlock infinity Comic #1', thumbnail: comic1 },
  { id: 102, year: 1998, title: 'Who is...? Adam Warlock infinity Comic #1', thumbnail: comic2 },
  { id: 103, year: 2002, title: 'Who is...? Adam Warlock infinity Comic #1', thumbnail: comic3 },
  { id: 104, year: 2005, title: 'Who is...? Adam Warlock infinity Comic #1', thumbnail: comic4 },
  { id: 105, year: 2010, title: 'Who is...? Adam Warlock infinity Comic #1', thumbnail: comic12 },
  { id: 106, year: 2012, title: 'Who is...? Adam Warlock infinity Comic #1', thumbnail: comic14 },
  { id: 107, year: 2014, title: 'Who is...? Adam Warlock infinity Comic #1', thumbnail: comic19 },
  { id: 107, year: 2015, title: 'Who is...? Adam Warlock infinity Comic #1', thumbnail: comic20 },
  { id: 107, year: 2015, title: 'Who is...? Adam Warlock infinity Comic #1', thumbnail: comic21 },
  { id: 107, year: 2016, title: 'Who is...? Adam Warlock infinity Comic #1', thumbnail: comic25 },
  { id: 107, year: 2016, title: 'Who is...? Adam Warlock infinity Comic #1', thumbnail: comic26 },
];
