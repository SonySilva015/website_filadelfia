import Hero from '@/components/home/hero'
import Content from '@/components/home/content';

export default function Home() {
  return (
    <div className="flex flex-col w-screen">
      <Hero />
      <Content />
    </div>
  );
}
