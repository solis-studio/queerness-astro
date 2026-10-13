# Queerness Experiences site notes

## Group trips archive (read this when Santi mentions group trips, camps, 2027, or "the old page")
- In Oct 2026 the site pivoted to "Plan my Tulum trip" (itinerary planning). Group trips were paused and moved to "Coming 2027".
- The full original group-trips page (8+ hours of work) is saved at `src/archive/group-trips-2026-original.astro`. It is not built, linked, or indexed.
- The original home page group section is at `src/archive/home-group-trips-section-2026.html`.
- Git tag `group-trips-original` points to the last commit with the full original site. Restore with `git show group-trips-original:src/pages/group-trips.astro`.
- Removed group prices (from $300/night, $500 plan, weekend/short/full trip prices) are in that archived file.
- Verified Oct 2026: the archive file is byte-identical to the original page (md5 d4b9f13c0607904b9d3a502d5a8d13ad) and all 43 images it uses exist in public/images. NEVER delete images from public/images that the archive file references (grep /images/ in it before any image cleanup).
- Also removed from the live page in Oct 2026 (all in the archive): camp styles, "Where you'll stay" villa, "We give back", partner/host section, Learn activities, picnics, 5 of 8 photo strips, group prices.
- To bring group trips back: copy the archive file over `src/pages/group-trips.astro` (or merge sections), then update copy and prices.

## Standing rules
- Never push until Santi says "push" (Netlify credits).
- Show exact new copy to Santi before changing it.
- Santi uses they/them. Keep replies short and phone-friendly.
