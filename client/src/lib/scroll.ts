/** Fixed header offset — keep in sync with .kcb-nav height */
const HEADER_OFFSET_PX = 88;

export function scrollToId(
  id: string,
  behavior: ScrollBehavior = "smooth"
): boolean {
  const el = document.getElementById(id);
  if (!el) return false;

  const top =
    el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

/** Scroll to location.hash once the target exists (SPA-safe). */
export function scrollToHash(behavior: ScrollBehavior = "smooth"): boolean {
  const id = window.location.hash.replace(/^#/, "");
  if (!id) return false;
  return scrollToId(id, behavior);
}

/**
 * Go to a home section from anywhere.
 * Updates the hash and scrolls — works on home and after SPA route change.
 */
export function goToHomeSection(
  id: string,
  setLocation: (path: string) => void,
  isHome: boolean
): void {
  if (isHome) {
    if (window.location.hash !== `#${id}`) {
      history.pushState(null, "", `/#${id}`);
    }
    scrollToId(id, "smooth");
    return;
  }

  try {
    sessionStorage.setItem("kcb-scroll-to", id);
  } catch {
    /* ignore */
  }
  // Navigate to home; Home.tsx reads hash / sessionStorage and scrolls
  setLocation("/");
  // Ensure hash is set after wouter updates the path
  queuePromise.resolve().then(() => {
    if (window.location.pathname === "/" || window.location.pathname === "") {
      history.replaceState(null, "", `/#${id}`);
    }
  });
}
