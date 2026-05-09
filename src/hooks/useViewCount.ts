import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

// Cast to any so we can access blog_views table + increment_blog_view RPC
// which are not in the generated Supabase types.ts yet.
// Regenerate types via Supabase CLI to remove this cast in the future.
const sb = supabase as any;

/**
 * Tracks and returns the view count for a blog post.
 * Increments the count once per page load via an RPC call.
 */
export function useViewCount(slug: string) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    if (!slug) return;

    // Increment view count atomically and get the new value
    sb
      .rpc("increment_blog_view", { blog_slug: slug })
      .then(({ data, error }: { data: unknown; error: unknown }) => {
        if (error) {
          // Fallback: just read the current count
          sb
            .from("blog_views")
            .select("view_count")
            .eq("slug", slug)
            .single()
            .then(({ data: row }: { data: { view_count: number } | null }) => {
              if (row) setViews(row.view_count);
            });
          return;
        }
        setViews(data as number);
      });
  }, [slug]);

  return views;
}

/**
 * Fetches view counts for multiple blog slugs at once.
 * Used on the blog listing page (no increment, read-only).
 */
export function useViewCounts(slugs: string[]) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    if (slugs.length === 0) return;

    sb
      .from("blog_views")
      .select("slug, view_count")
      .in("slug", slugs)
      .then(({ data, error }: { data: { slug: string; view_count: number }[] | null; error: unknown }) => {
        if (error || !data) return;
        const map: Record<string, number> = {};
        data.forEach((row) => {
          map[row.slug] = row.view_count;
        });
        setCounts(map);
      });
  }, [slugs.join(",")]);

  return counts;
}
