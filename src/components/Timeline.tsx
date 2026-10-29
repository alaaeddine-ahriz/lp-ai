const milestones = [
  {
    day: "JOUR 0",
    title: "Appel de 30 minutes",
    text: "Vous nous décrivez votre activité. On repère avec vous les processus qui coûtent le plus.",
  },
  {
    day: "JOUR 7",
    title: "Plan chiffré",
    text: "Vous recevez vos cas d'usage priorisés, le gain attendu et le prix fixe de chacun.",
  },
  {
    day: "JOUR 30",
    title: "En production",
    text: "La première automatisation tourne, votre équipe s'en sert, et on mesure le résultat.",
  },
];

export function Timeline() {
  return (
    <section id="methode" className="px-5 pb-20 sm:px-6 sm:pb-28">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-12 border-t border-line pt-20 sm:gap-16 sm:pt-24">
        <h2 className="h2" data-reveal>
          Comment ça se passe
        </h2>
        <ol className="flow flow--days" data-flow>
          <span aria-hidden="true" className="flow-track">
            <span className="flow-fill" />
            <span className="flow-dot" />
          </span>
          {milestones.map((m, i) => (
            <li key={m.day} className="flow-step" style={{ "--k": i } as React.CSSProperties}>
              <span className="flow-node">{m.day}</span>
              <div className="flex max-w-[340px] flex-col gap-2 pt-1.5 lg:pt-7">
                <h3 className="text-2xl leading-tight font-bold">{m.title}</h3>
                <p className="text-muted">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
