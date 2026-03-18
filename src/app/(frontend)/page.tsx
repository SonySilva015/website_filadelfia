
import Hero from '@/components/home/hero'
import Content from '@/components/home/content';
import { GetNoticeLimit } from "@/collections/notice/fetcher";
import Cultos from '@/components/home/cultos'
import Study from '@/components/home/sutdy'
import Teans from '@/components/home/teanSec'
import NoticyHome from "@/components/home/noticias";

export default async function Home() {
  const noticia = await GetNoticeLimit();

  return (
    <div className="flex flex-col ">
      <Hero />
      <Content />
      <NoticyHome noticias={noticia} />
      < Cultos />
      <Study />
      <Teans />
    </div>
  );
}
