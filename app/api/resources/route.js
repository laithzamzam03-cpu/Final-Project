import { NextResponse } from "next/server";

const FALLBACK_RESOURCES = [
  {
    id: "res-1",
    title: "MDN Web Docs — HTML & CSS",
    description:
      "The definitive reference for semantic HTML, CSS layout, and accessibility patterns.",
    category: "frontend",
    author: "Mozilla",
    url: "https://developer.mozilla.org/en-US/docs/Learn",
    type: "Docs",
  },
  {
    id: "res-2",
    title: "JavaScript.info — The Modern JavaScript Tutorial",
    description:
      "A structured path through ES6+, async programming, the DOM, and browser APIs.",
    category: "javascript",
    author: "Ilya Kantor",
    url: "https://javascript.info/",
    type: "Tutorial",
  },
  {
    id: "res-3",
    title: "React Docs — Learn React",
    description:
      "Official guides covering components, hooks, state, and thinking in React.",
    category: "react",
    author: "React Team",
    url: "https://react.dev/learn",
    type: "Docs",
  },
  {
    id: "res-4",
    title: "Next.js App Router Guide",
    description:
      "Layouts, Server Components, dynamic routes, and data fetching in Next.js 15.",
    category: "nextjs",
    author: "Vercel",
    url: "https://nextjs.org/docs/app",
    type: "Docs",
  },
  {
    id: "res-5",
    title: "CSS Grid Garden",
    description:
      "A hands-on game that teaches CSS Grid placement, tracks, and responsive layouts.",
    category: "frontend",
    author: "Codepip",
    url: "https://cssgridgarden.com/",
    type: "Interactive",
  },
  {
    id: "res-6",
    title: "web.dev — Learn JavaScript",
    description:
      "Google's practical articles on fetch, performance, and modern browser APIs.",
    category: "javascript",
    author: "Google web.dev",
    url: "https://web.dev/learn/javascript",
    type: "Article",
  },
];

export async function GET() {
  try {
    const response = await fetch(
      "https://dev.to/api/articles?tag=javascript&per_page=6",
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      return NextResponse.json({ resources: FALLBACK_RESOURCES });
    }

    const articles = await response.json();
    const resources = articles.map((article) => ({
      id: `devto-${article.id}`,
      title: article.title,
      description: article.description || "A community article from DEV.",
      category: article.tag_list?.[0] || "javascript",
      author: article.user?.name || "DEV Community",
      url: article.url,
      type: "Article",
    }));

    return NextResponse.json({
      resources: resources.length > 0 ? resources : FALLBACK_RESOURCES,
    });
  } catch {
    return NextResponse.json({ resources: FALLBACK_RESOURCES });
  }
}
