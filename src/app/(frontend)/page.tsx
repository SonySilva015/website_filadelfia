
import Hero from '@/components/home/hero'
import Content from '@/components/home/content';
import { GetNoticeLimit } from "@/collections/notice/fetcher";
import { GetCelulasLimit } from '@/collections/celulas/fetcher';
import Cultos from '@/components/home/cultos'
import Study from '@/components/home/sutdy'
import Teans from '@/components/home/teanSec'
import NoticyHome from "@/components/home/noticias";
import Celulas from '@/components/home/celula'

export const dynamic = 'force-dynamic'
export default async function Home() {
  const noticia = await GetNoticeLimit();
  const { celulas: celulas } = await GetCelulasLimit();

  return (
    <div className="flex flex-col ">
      <Hero />
      <Content />
      <NoticyHome noticias={noticia} />
      <Cultos />
      <Celulas celulas={celulas} />
      <Study />
      <Teans />
    </div>
  );
}
