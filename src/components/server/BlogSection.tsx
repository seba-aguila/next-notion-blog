import React from "react";
import { cn } from "../../lib/utils";

interface BlogLoadingProps {
  classNames?: string;
  [key: string]: any;
}

const BlogSection = React.forwardRef<HTMLDivElement, BlogLoadingProps>(
  ({ classNames, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "min-h-screen w-full flex flex-col justify-center items-center pt-10 pb-20 h-fit px-10 sm:px-16 xl:px-0 max-w-5xl mx-auto",
          classNames
        )}
        {...props}
      />
    );
  }
);

BlogSection.displayName = "BlogSection";

const BlogTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "z-10 text-5xl font-extrabold px-8 sm:text-6xl md:text-7xl text-transparent bg-gradient-to-r from-zinc-400 to-zinc-100 bg-clip-text text-center pb-4 max-w-5xl",
      className
    )}
    {...props}
  />
));
BlogTitle.displayName = "BlogTittle";

const BlogSubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-md mx-8 md:text-xl text-transparent bg-gradient-to-r from-zinc-400 to-zinc-300 bg-clip-text text-center mb-8",
      className
    )}
    {...props}
  />
));
BlogSubtitle.displayName = "BlogSubtittle";


interface ArticleProps {
  children: React.ReactNode;
  date: string;
  title: string;
  description: string;
  className?: string;
}

const BlogArticle = React.forwardRef<HTMLDivElement, ArticleProps>(
  ({ children, date, title, description, className, ...props }, ref) => {
    return (
      <article ref={ref} className="p-4 md:p-8">
        <div className="flex justify-between gap-2 items-center">
          <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
            {date}
          </span>
          <span className="text-zinc-500 text-xs  flex items-center gap-1"></span>
        </div>
        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
          {title}
        </h2>
        <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {description}
        </p>
      </article>
    );
  }
);
BlogArticle.displayName = "BlogArticle";

export { BlogTitle, BlogSubtitle, BlogSection, BlogArticle };
