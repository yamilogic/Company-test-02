import BlogHeader from "../../Blog/BlogHeader";
import BlogSidebar from "../../Blog/BlogSidebar";
import BlogGrid from "../../Blog/BlogGrid";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <BlogHeader />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Desktop: sidebar + grid side by side */}
        <div className="hidden lg:flex gap-8">
          <BlogSidebar />
          <BlogGrid />
        </div>

        {/* Mobile + Tablet: grid only (search bar is inside BlogGrid) */}
        <div className="lg:hidden">
          <BlogGrid />
        </div>
      </div>
    </main>
  );
}