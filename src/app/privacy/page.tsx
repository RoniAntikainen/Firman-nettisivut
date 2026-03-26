export default function PrivacyPage() {
  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className="pageContainer pageHeroGrid pageHeroStart">
          <div className="pageHeroContent">
            <div className="pageIntro">
              <h1>Privacy</h1>
              <p className="pageHeroText">
                We only collect what is needed to reply to your message.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionSurfaceFade">
        <div className="pageContainer pageFlow">
          <div className="pageGrid3">
            <article className="cardPanel cardPanelSoft">
              <h3 className="cardTitle">What we collect</h3>
              <p className="cardText">
                If you contact us, we may receive your name, email address and the project details you send.
              </p>
            </article>

            <article className="cardPanel cardPanelSoft">
              <h3 className="cardTitle">Why we collect it</h3>
              <p className="cardText">
                We use it to reply, understand the request and continue the conversation if there is a fit.
              </p>
            </article>

            <article className="cardPanel cardPanelSoft">
              <h3 className="cardTitle">Legal basis</h3>
              <p className="cardText">
                We process contact requests based on legitimate interest and, where needed, consent.
              </p>
            </article>

            <article className="cardPanel cardPanelSoft">
              <h3 className="cardTitle">Retention</h3>
              <p className="cardText">
                We keep inquiries only as long as the conversation, project evaluation or legal need requires, typically up to 12 months unless a project agreement starts.
              </p>
            </article>

            <article className="cardPanel cardPanelSoft">
              <h3 className="cardTitle">Your rights</h3>
              <p className="cardText">
                You can ask for access, correction or deletion of the personal data you have shared with us.
              </p>
            </article>

            <article className="cardPanel cardPanelSoft">
              <h3 className="cardTitle">Processing details</h3>
              <p className="cardText">
                We only process contact details, project information and communication needed to assess or deliver work.
              </p>
            </article>

            <article className="cardPanel cardPanelSoft">
              <h3 className="cardTitle">Controller and storage</h3>
              <p className="cardText">
                Weboryn acts as the data controller for contact inquiries. Inquiry data is typically stored in email and project communication systems used to reply and continue the conversation. If transactional email delivery is used, the message may pass through that provider to reach our inbox.
              </p>
            </article>

            <article className="cardPanel cardPanelSoft">
              <h3 className="cardTitle">Cookies and analytics</h3>
              <p className="cardText">
                If analytics or cookies are used, they should be described separately with their purpose and legal basis.
              </p>
            </article>

            <article className="cardPanel cardPanelSoft">
              <h3 className="cardTitle">Privacy contact</h3>
              <p className="cardText">
                Contact hello@weboryn.com for privacy questions or data requests. If a dedicated DPO exists, their contact details should be listed here.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
