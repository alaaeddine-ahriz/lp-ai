import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="px-5 pt-8 pb-28 sm:px-6 md:pb-10">
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-4 text-sm text-muted">
        <span>{site.name} · Audit et conseil en IA pour les PME</span>
        <span>
          {site.email.includes("@") ? (
            <a href={`mailto:${site.email}`} className="hover:text-ink">
              {site.email}
            </a>
          ) : (
            site.email
          )}{" "}
          ·{" "}
          <a href="/mentions-legales" className="underline-offset-4 hover:text-ink hover:underline">
            Mentions légales
          </a>
        </span>
      </div>
    </footer>
  );
}
