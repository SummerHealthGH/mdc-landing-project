"use client";

import { FC, useState } from "react";
import Image from "next/image";

/* ----------------------------
   Single News Card Component
----------------------------- */
interface NewsCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  featured?: boolean;
  compact?: boolean;
}

const NewsCard: FC<NewsCardProps> = ({
  title,
  description,
  imageSrc,
  link,
  featured = false,
  compact = false,
}) => {
  return (
    <article
      className={`bg-white rounded-xl shadow-md overflow-hidden text-left transition hover:shadow-lg h-full flex flex-col ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* image area */}
      <div
        className={`relative w-full ${
          compact ? "h-full" : featured ? "h-64 md:h-72" : "h-44 md:h-48"
        }`}
      >
        {/* use Image fill so image keeps container size */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
          priority={false}
        />
      </div>

      {/* content area — stretch to bottom */}
      <div
        className={`${
          compact ? "p-3" : "p-5"
        } flex-1 flex flex-col justify-between`}
      >
        <div>
          <h3 className="text-[#0A3D62] font-semibold text-base md:text-lg">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mt-2">
            {description}
          </p>
        </div>

        <div className="mt-4">
          <a
            href={link}
            className="text-[#0A3D62] text-sm font-semibold hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    </article>
  );
};

/* ----------------------------
   News Section Component
----------------------------- */
interface NewsItem {
  id: number;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  link: string;
}

interface NewsSectionProps {
  newsItems?: NewsItem[];
}

const NewsSection: FC<NewsSectionProps> = ({
  newsItems = [
    {
      id: 1,
      title: "Featured News 1",
      category: "All News",
      description: "This is the first big featured news card.",
      imageSrc: "/images/news1.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Featured News 2",
      category: "Press Release",
      description: "This is the second big featured news card.",
      imageSrc: "/images/news2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Small News 1",
      category: "Blogs",
      description: "This is a small news card.",
      imageSrc: "/images/news3.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Small News 2",
      category: "Speech",
      description: "This is a small news card.",
      imageSrc: "/images/news4.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "Small News 3",
      category: "All News",
      description: "This is a small news card.",
      imageSrc: "/images/news5.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "Small News 4",
      category: "Press Release",
      description: "This is a small news card.",
      imageSrc: "/images/news1.jpg",
      link: "#",
    },
    {
      id: 7,
      title: "Small News 5",
      category: "Blogs",
      description: "This is a small news card.",
      imageSrc: "/images/news2.jpg",
      link: "#",
    },
    {
      id: 8,
      title: "Small News 6",
      category: "Speech",
      description: "This is a small news card.",
      imageSrc: "/images/news3.jpg",
      link: "#",
    },
  ],
}) => {
  const [activeFilter, setActiveFilter] = useState("All News");

  const filters = ["All News", "Press Release", "Blogs", "Speech"];

  // Pagination logic
  const PAGE_SIZE = 7; // 1 featured + 6 small cards per page
  const [page, setPage] = useState(0);
  const filteredNews =
    activeFilter === "All News"
      ? newsItems
      : newsItems.filter((item) => item.category === activeFilter);
  const totalPages = Math.ceil(filteredNews.length / PAGE_SIZE);
  const pagedNews = filteredNews.slice(
    page * PAGE_SIZE,
    (page + 1) * PAGE_SIZE
  );

  return (
    <section className="bg-[#E9F4FF] py-16 px-6 lg:px-20">
      {/* Title */}
      <h2 className="text-center text-[#0A3D62] font-bold text-lg md:text-xl uppercase mb-8">
        NEWS AND UPDATES
      </h2>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200
                ${
                  activeFilter === filter
                    ? "bg-white text-[#0A3D62] "
                    : "bg-transparent text-[#0A3D62] hover:bg-white hover:text-[#0A3D62] border border-transparent"
                }
              `}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* News Grid
          - grid-cols:
            small: 1 column (stack)
            md: 4 columns (featured = col-span-2; remaining 2 columns hold 3 cards stacked)
            lg: 5 columns (featured = col-span-2; remaining 3 columns each one card)
          - row-auto to allow row-span-2 for featured card
      */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 auto-rows-fr">
        {/* Stack two big featured cards vertically at top left, each spanning 2 columns */}
        <div className="md:col-span-2 lg:col-span-2 row-span-2 flex flex-col gap-6 h-full">
          {pagedNews[0] && (
            <div className="h-1/2 flex-1">
              <NewsCard
                title={pagedNews[0].title}
                description={pagedNews[0].description}
                imageSrc={pagedNews[0].imageSrc}
                link={pagedNews[0].link}
                featured={true}
              />
            </div>
          )}
          {pagedNews[1] && (
            <div className="h-1/2 flex-1">
              <NewsCard
                title={pagedNews[1].title}
                description={pagedNews[1].description}
                imageSrc={pagedNews[1].imageSrc}
                link={pagedNews[1].link}
                featured={true}
              />
            </div>
          )}
        </div>

        {/* Smaller cards fill the rest of the grid */}
        {pagedNews.slice(2).map((item) => (
          <div key={item.id} className="h-full">
            <NewsCard
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              link={item.link}
              featured={false}
            />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-10 space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-3 h-3 rounded-full focus:outline-none transition-colors duration-200
              ${i === page ? "bg-[#0A3D62]" : "bg-[#0A3D62]/30"}`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
