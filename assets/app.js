if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("js");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  document.querySelectorAll(".feature-card, .panel, .catalog-card, .stats-row article").forEach((node) => {
    node.classList.add("fade-in");
    observer.observe(node);
  });
}
