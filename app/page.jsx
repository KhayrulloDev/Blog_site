import React from 'react';
import './Home.css';
import Image from 'next/image';

const articles = [
  {
    id: 1,
    title: "Birinchi maqola",
    description: "Bu birinchi maqolaning qisqacha tavsifi.",
    imageUrl: "https://api.rank.uz/storage/611b489edd5cf_Brief-History-of-Programming-Languages.jpg"
  },
  {
    id: 2,
    title: "Ikkinchi maqola",
    description: "Bu ikkinchi maqolaning qisqacha tavsifi.",
    imageUrl: "https://i.ytimg.com/vi/xy9FEXFa-W4/maxresdefault.jpg"
  },
  {
    id: 3,
    title: "Uchinchi maqola",
    description: "Bu uchinchi maqolaning qisqacha tavsifi.",
    imageUrl: "https://www.texnoman.uz/uploads/blogs/6d8284af77441edd5e8264ad9dd1f713.jpg"
  }
];

export default function Home() {
  return (
    <>
      <Hero />
      <LatestArticles articles={articles} />
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>BlogSaytiga Xush Kelibsiz</h1>
        <p>Bizning blogimizda eng so&apos;nggi maqolalarni o&apos;qing</p>
      </div>
    </section>
  );
}

function LatestArticles({ articles }) {
  return (
    <section className="latest-articles">
      <div className="container">
        <h2>Eng So&apos;nggi Maqolalar</h2>
        <div className="articles-grid">
          {articles.map(article => (
            <article key={article.id} className="article-card">
              <Image src={article.imageUrl} alt={article.title} width={40} height={40} />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 BlogSayti. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  );
}
