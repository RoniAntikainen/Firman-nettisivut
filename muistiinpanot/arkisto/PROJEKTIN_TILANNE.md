# Projektin tilanne

Päivitetty: 2026-03-27

Huomio:
- Taman tiedoston rinnalle on syntynyt uudempi launch- ja SEO-kokonaisuus.
- Jos haluat nykytilan nopeimmin, aloita tiedostosta [MUISTIINPANOT_OPAS.md](/Users/roni/weboryn/nettisivut/muistiinpanot/MUISTIINPANOT_OPAS.md).
- Dev-vaiheen SEO:n paatiedosto on [DEV_VAIHEEN_SEO_10_10_CHECKLIST.md](/Users/roni/weboryn/nettisivut/muistiinpanot/DEV_VAIHEEN_SEO_10_10_CHECKLIST.md).
- Viimeiset launchia ennen tehtavat asiat ovat tiedostossa [ENNEN_LAUNCHIA.md](/Users/roni/weboryn/nettisivut/muistiinpanot/launch/ENNEN_LAUNCHIA.md).

Tama kansio on omaa seurantaa varten. Arviot perustuvat nykyiseen koodiin, rakenteeseen ja siihen, milta sivusto vaikuttaa teknisesti ja sisallollisesti juuri nyt.

## Kokonaisarvio

- Koko sivusto: noin 96 % valmis
- Tekninen toteutus: noin 95 % valmis
- Visuaalinen viimeistely: noin 93 % valmis
- Sisallon uskottavuus ja myyntivalmius: noin 95 % valmis
- Animaatiot ja mikrointeraktiot: noin 90 % valmis

## Mikä on jo valmista

- Monisivuinen rakenne on olemassa.
- Kaksikielinen locale-pohja ja domain-ohjaukseen sopiva reititys on rakennettu.
- Etusivu, palvelusivu, prosessisivu, caset, about, contact, book, privacy ja terms ovat rakennettuina.
- Header ja footer ovat olemassa.
- Nappikomponentti ja yhteisia tyyleja on rakennettu.
- Visuaalisia custom-komponentteja on tehty, ei pelkkia peruslohkoja.
- Contact- ja book-lomakkeilla on omat API-reitit.
- Sitemap ja robots ovat mukana.
- Lint meni lapi, eli koodissa ei nay nykyisella tarkistuksella selvia virheita.

## Mikä on kesken tai osittain kesken

- Suomenkielinen sivusisalto puuttuu viela paasisivuilta, vaikka locale-rakenne on nyt olemassa.
- Oikeat yritys-, rekisterinpitaja- ja sopimustiedot puuttuvat edelleen privacy- ja terms-sivuilta.
- About-us-sivun founder-placeholder kannattaa vaihtaa oikeaan kuvaan, nimeen ja rooliin ennen lopullista myyntiversiota.
- Case-sisalto on edelleen anonymisoitua, vaikka copy ja rakenne on viimeistelty.
- Production build kannattaa ajaa viela loppuun asti erikseen ennen lopullista launchia.

## Sivukohtainen arvio

### Etusivu

- Valmiusaste: 100 %
- Tila: valmis
- Valmista:
  - Hero, rakenne, CTA-logiikka ja palvelupolku ovat selkeita.
  - Sisalto ohjaa hyvin eteenpain palveluihin, caseihin ja yhteydenottoon.
  - Visuaalinen HeroSystemVisual nostaa laatumielikuvaa.
  - Etusivun copya on hiottu selkeammaksi ja myyvammaksi.
  - Etusivulle on lisatty kevytta visuaalista polishia ja pehmeampia sisääntuloja.
- Kesken:
  - Ei avoimia etusivun tehtavia. Sivu on merkitty valmiiksi omistajan arvion perusteella.

### Service

- Valmiusaste: 100 %
- Tila: valmis
- Valmista:
  - Tarjonnan rakenne on selkea.
  - Hinnoittelulogiikka ja scope-ajattelu ovat jo hyvin esilla.
  - Korttirakenne tukee palveluiden myyntia.
  - Ensimmainen osio on hiottu selkeammaksi ja myyvammaksi.
  - Heroa on suunniteltu uudelleen niin, etta se keskittyy yhteen paaviestiin eika sisalla liikaa kilpailevaa tietoa.
  - Deliverables/scope-osio on hiottu konkreettisemmaksi.
  - Good fit -osio on kirjoitettu uusiksi selkeammaksi ja hyodyllisemmaksi.
  - Typical duration -osio on selkeytetty timing-ajatteluksi, joka tuntuu uskottavammalta.
  - Loppu-CTA on kirjoitettu uusiksi selkeammaksi ja paattavaisemmaksi.
  - Hintaviestit on teravoitetty selkeammiksi ja uskottavammiksi.
  - Checkpoint-osion spacingia on saaty niin, etta se hengittaa enemman alaspain ja ottaa vahemman tilaa ylapuolelta.
  - Proof-osio on tehty uskottavammaksi ja selkeammin perustelluksi.
- Kesken:
  - Ei avoimia service-sivun perushuomioita tassa vaiheessa.

### Process

- Valmiusaste: 100 %
- Tila: valmis
- Valmista:
  - Prosessin ajattelu on selkea ja erottuva.
  - Prosessivisualisointi tukee sisaltoa hyvin.
  - CTA-polku toimii.
  - Tekstia on tiivistetty ja paaviesteja vahvistettu useissa kohdissa.
  - Scrolliin sidottuja pehmeita paljastuksia on lisatty keskeisiin osioihin.
- Kesken:
  - Ei avoimia process-sivun tehtavia tassa vaiheessa.

### Cases

- Valmiusaste: 100 %
- Tila: valmis
- Valmista:
  - Filterointi toimii.
  - Case-rakenne on looginen ja helposti luettava.
  - Ongelma -> muutos -> vaikutus -malli on hyva.
  - Hero ja osiointroja on hiottu selkeammiksi.
  - Hero on suunniteltu uudelleen niin, etta se keskittyy yhteen paaviestiin ja yhteen tukipintaan.
  - Case-esimerkit on kirjoitettu konkreettisemmiksi ja uskottavammiksi.
  - Trust-osio tukee nyt paremmin sita, mita ihmiset oikeasti huomaavat ensimmaisena.
  - Anonymisoiduille caseille on lisatty aidompi toimiala-, tilanne- ja scope-konteksti.
  - Before/after-nakymaa ja visualisoituja tuloksia on lisatty casekortteihin.
- Kesken:
  - Ei avoimia cases-sivun perushuomioita tassa vaiheessa.

### About Us

- Valmiusaste: 100 %
- Tila: valmis
- Valmista:
  - Studion toimintatapa ja arvot tulevat esiin.
  - Rakenne tukee luottamusta.
  - Founder-led- ja direct-collaboration-kulmaa on vahvistettu copyssa.
  - Useita osiointroja on hiottu aidommiksi ja vahvemmin luottamusta tukeviksi.
  - Sivulle on lisatty vahvempi erottuvuusteksti ja konkreettisempaa studiotaustaa.
  - Founder-presencea varten on lisatty valmis kuva- ja nimiplaceholder hero-osioon.
- Kesken:
  - Ei avoimia about-us-sivun perushuomioita tassa vaiheessa.

### Contact

- Valmiusaste: 100 %
- Tila: valmis
- Valmista:
  - Hyva rakenne.
  - Toimiva lomake.
  - Fallback email-linkki.
  - Hero-visual on vahva ja custom-tehty.
  - Signaalit ja yhteydenoton kynnys on tehty matalaksi.
  - Onnistumis- ja virhetiloja on hiottu selkeammiksi ja rauhallisemmiksi.
  - Responsiivisuutta ja rytmitysta on viimeistelty contact-sivulla.
- Kesken:
  - Ei avoimia contact-sivun perushuomioita tassa vaiheessa.

### Book

- Valmiusaste: 100 %
- Tila: valmis
- Valmista:
  - Lomake toimii rakenteellisesti hyvin.
  - Yhteys muuhun sivustoon on olemassa.
  - Heroon on lisatty selkeampi booking-konteksti ja tukisignaalit.
  - Lomake tuntuu nyt paremmin muun sivuston tasoiselta.
  - Onnistumis- ja virhetilat on hiottu selkeammiksi.
  - Staattiset aikavalinnat on korvattu dynaamisilla tulevilla sloteilla.
- Kesken:
  - Ei avoimia book-sivun perushuomioita tassa vaiheessa.

### Privacy ja Terms

- Valmiusaste: 95 %
- Tila: sisallollisesti viimeistelty, juridinen tarkistus edelleen oma vaiheensa
- Valmista:
  - Tarvittavat sivut ovat olemassa.
  - Privacy- ja terms-sivujen rakenne ja copy on viimeistelty muun sivuston tasolle.
  - Juridisesti olennaisia placeholder-kohtia on lisatty, kuten rekisterinpitajan tiedot, vastaanottajat, siirrot ja valitusoikeus.
  - Privacy- ja terms-sivujen hero-osioita on hiottu selkeammiksi ja vahvemmin muun sivuston tyyliin sopiviksi.
  - Heroihin on lisatty oikean puolen tukikortit, jotta ne eivat ole vain otsikko ja tekstikappale.
- Kesken:
  - Oikeat yritys-, rekisterinpitaja- ja sopimustiedot tulee tayttaa ennen tuotantokayttoa.

## Komponenttikohtainen arvio

### Header

- Valmiusaste: 85 %
- Valmista:
  - Responsiivinen menu ja aktiivisen polun logiikka.
  - Scroll-tila ja mobiilikayttaytymista on ajateltu.
- Kesken:
  - Viimeinen polish ja mahdollinen saavutettavuuden lisatarkistus.

### Footer

- Valmiusaste: 85 %
- Valmista:
  - Selkea ja riittava rakenne.
- Kesken:
  - Voi halutessa saada viela hieman enemman brandillista viimeistelya tai lisa-arvoa.

### Painikkeet

- Valmiusaste: 100 %
- Valmista:
  - Uudelleenkaytettava rakenne on kunnossa.
  - Hover-, active-, focus- ja disabled-tiloja on hiottu yhdenmukaisemmiksi.
- Kesken:
  - Ei avoimia painikkeiden perushuomioita tassa vaiheessa.

### Hero-visualit

- Valmiusaste: 100 %
- Valmista:
  - ContactHeroVisual ja ProcessFlowVisual nostavat selkeasti sivuston laatua.
  - Ovat erottuvia ja custom-rakennettuja.
  - Liiketta on yhtenaistetty hieman reduced-motion- ja suorituskykypuolelta.
  - Visualeihin on lisatty yhdenmukaisempi koreografia tempon, easingin ja liikkeen rytmin tasolla.
- Kesken:
  - Ei avoimia hero-visualien perushuomioita tassa vaiheessa.

### Scroll fade -hook

- Valmiusaste: 100 %
- Valmista:
  - Yhteinen tapa tuoda osioihin liiketta.
  - Hookia on parannettu tasaisemmaksi requestAnimationFrame-paivityksella, resize-tuella ja reduced-motion-kasittelylla.
- Kesken:
  - Ei avoimia scroll fade -hookin perushuomioita tassa vaiheessa.

## Tärkeimmät muokattavat asiat ennen myyntiä

1. Kirjoita ja kytke suomenkielinen copy paasisivuille locale-rakenteen paalle.
2. Vaihda about-us-sivun founder-placeholder oikeaan kuvaan, nimeen ja rooliin.
3. Tayta privacy- ja terms-sivuille oikeat yritys-, rekisterinpitaja- ja sopimustiedot.
4. Vaihda anonymisoidut caset oikeisiin nimiin tai aidompiin referensseihin, jos mahdollista.
5. Varmista production build onnistuneesti loppuun asti.
6. Tarkista metadata, OG-kuvat ja mahdollinen favicon-/branding-viimeistely.
7. Tee lopullinen QA-kierros lomakkeille, virhetiloille, mobiilille ja onnistumisviesteille.

## Mitkä asiat nostavat eniten arvoa

- Oikeat caset tai oikeat referenssit
- Oikea founder-kuva ja nimi about-us-sivulle
- Tuotantovalmiuden varmistus
- Selkea premium-tason visuaalinen yhtenaisyys
- Metadata- ja branding-viimeistely

## Mitkä asiat ovat jo selvästi hyviä

- Sivustolla on oma ilme.
- Rakenne on harkittu.
- Koodipohja vaikuttaa siistilta.
- CTA-polut ovat olemassa.
- Projekti ei nayta geneeriselta valmisteemalta.

## Suositeltu seuraava työjarjestys

1. Kirjoita suomenkielinen sisältö locale-rakenteeseen.
2. Vaihda oikeat tiedot legal-sivuille.
3. Lisaa oikea founder-kuva about-us-sivulle.
4. Korvaa anonymisoidut caset oikeilla referensseilla, jos mahdollista.
5. Aja production build ja tee koko sivuston QA-kierros.
6. Viimeistele metadata, OG-kuvat ja branding-assetit.

## Yhteenveto yhdella rivilla

Tama on jo kaytannossa myyntivalmis sivusto, ja viimeinen arvoa nostava vaihe on nyt oikeiden referenssien, founder-presencen ja launch-valmiuden viimeistely.
