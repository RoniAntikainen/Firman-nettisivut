export default function TermsPage() {
  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className="pageContainer pageHeroGrid pageHeroStart">
          <div className="pageHeroContent">
            <div className="pageIntro">
              <h1>Terms</h1>
              <p className="pageHeroText">
                Project terms are agreed case by case before work starts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionSurfaceFade">
        <div className="pageContainer pageFlow">
          <div className="pageGrid3">
            <article className="cardPanel cardPanelSoft">
              <h3 className="cardTitle">Scope</h3>
              <p className="cardText">
                Each project starts from a defined scope. New items are handled as a separate phase or scope update.
              </p>
            </article>

            <article className="cardPanel cardPanelSoft">
              <h3 className="cardTitle">Delivery</h3>
              <p className="cardText">
                Delivery structure, files and timelines are agreed before implementation begins.
              </p>
            </article>

            <article className="cardPanel cardPanelSoft">
              <h3 className="cardTitle">Questions</h3>
              <p className="cardText">
                For project terms or commercial questions, contact hello@weboryn.com.
              </p>
            </article>

            <article className="cardPanel cardPanelSoft">
              <h3 className="cardTitle">Payment terms</h3>
              <p className="cardText">
                Payment schedule, milestones and invoicing cadence are agreed before work begins.
              </p>
            </article>

            <article className="cardPanel cardPanelSoft">
              <h3 className="cardTitle">IP ownership</h3>
              <p className="cardText">
                Final deliverables and ownership terms are defined in the project agreement for each scope.
              </p>
            </article>

            <article className="cardPanel cardPanelSoft">
              <h3 className="cardTitle">Liability and termination</h3>
              <p className="cardText">
                Liability limits, cancellation terms and project termination conditions are agreed contractually before implementation.
              </p>
            </article>

            <article className="cardPanel cardPanelSoft">
              <h3 className="cardTitle">Governing law</h3>
              <p className="cardText">
                Unless agreed otherwise, project agreements are governed by the laws of Finland.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
