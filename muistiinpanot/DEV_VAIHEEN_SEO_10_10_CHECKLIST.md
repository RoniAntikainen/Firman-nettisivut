# Dev-vaiheen SEO 10/10 Checklist

Nopea navigointi:
- yleisopas: [MUISTIINPANOT_OPAS.md](/Users/roni/weboryn/nettisivut/muistiinpanot/MUISTIINPANOT_OPAS.md)
- viimeiset launchia ennen tehtavat asiat: [ENNEN_LAUNCHIA.md](/Users/roni/weboryn/nettisivut/muistiinpanot/launch/ENNEN_LAUNCHIA.md)
- kaikki launch-testit yhdessa paikassa: [LAUNCH_TESTIT_KOOSTE.md](/Users/roni/weboryn/nettisivut/muistiinpanot/launch/LAUNCH_TESTIT_KOOSTE.md)
- jaettava testitehtavalista: [VALMIS_KUN_NAMA_ON_TESTATTU.md](/Users/roni/weboryn/nettisivut/muistiinpanot/launch/VALMIS_KUN_NAMA_ON_TESTATTU.md)

Tama muistio on vain niille SEO-asioille, joihin voidaan vaikuttaa kehitysvaiheessa ennen launchia.

Tavoite:
- vieda koko sivusto niin pitkalle kuin mahdollista ilman ulkoisia tekijoita
- saada technical SEO, onsite SEO, AI-luettavuus ja sisaltorakenne mahdollisimman vahvoiksi ennen kuin sivu menee nettiin

Tama ei sisalla:
- backlinkkeja
- Google Search Console -dataa
- oikeita hakusijoitussignaaleja ajan yli
- ulkoisia profiileja tai mainintoja

## Mita 10/10 tarkoittaa dev-vaiheessa

Jos tama checklist on tehty hyvin, sivusto on:
- teknisesti indeksoitavissa oikein
- hakukoneelle helppo ymmartaa
- tekoalyille helppo tiivistaa ja suositella
- sisallollisesti selkea
- rakenteellisesti yhtenainen
- valmis ottamaan vastaan oikeaa hakudataa launchin jalkeen

## Nykytila juuri nyt

Arvio:
- dev-vaiheen SEO-valmius on nyt noin 9/10
- technical SEO, onsite SEO, schema, metadata, sisainen linkitys, semantiikka, accessibility ja suurin osa performance-tyosta on tehty
- dev-vaiheessa vaikutettavista asioista valtaosa on kaytannossa valmiina
- suurimmat jaljella olevat asiat ovat nyt kasin tehtava launch-QA, oikea lomaketestaus, jakonakyman tarkistus ja viimeinen laitetuntuman varmistus oikealla puhelimella

Rehellinen tilanne:
- checklist on nyt lahes valmis siltä osin kuin asioita voi ratkaista koodissa ja sisallossa
- avoimet kohdat eivat ole enaa varsinaisesti "uusia SEO-rakennustoitä", vaan julkaisua ennen tehtavia kaytannon tarkistuksia
- jos kasin tehtava QA menee lapi siististi, dev-vaiheen SEO-osuus on kaytannossa valmis

## Julkaisukelpoisuus juuri nyt

Tuomio:
- kylla, sivusto on nyt dev-vaiheen SEO:n kannalta kaytannossa julkaisukelpoinen
- en kuitenkaan kutsuisi sita aivan "lopullisesti valmiiksi" ennen kasin tehtavaa launch-QA:ta ja oikeita lomaketesteja

Rehellinen arvio:
- jos julkaisisit taman nyt, tekninen ja sisallinen SEO-pohja ei olisi launchin este
- suurin jaljella oleva riski ei ole hakukoneen ymmarrys vaan kaytannon kayttokokemus: loytyyko joku mobiilissa tai lomakkeissa vasta kasin testatessa

Suositus:
- julkaise taman jalkeen vasta, kun `launch/ENNEN_LAUNCHIA.md` on kayty lapi
- jos se lista menee lapi ilman ongelmia, tama on dev-vaiheen osalta valmis tuotantoon

## 1. Sivukohtainen hakufokus

- [x] Jokaiselle paasivulle on lukittu yksi paahaku ja 2-4 tukihakua.
- [x] Sivut eivat kilpaile keskenaan samoilla paahauilla.
- [x] `service` on selkein kaupallinen paasisalto.
- [x] `cases` tukee nayttoja ja long-tail-hakuja.
- [x] `process` tukee luottamusta, ei yrita olla toinen service-sivu.
- [x] `about-us` tukee brandia ja luottamusta, ei yrita voittaa samoja kaupallisia hakuja kuin `service`.

Valmis kun:
- jokaiselle paasivulle voi kirjoittaa yhden lauseen: "tama sivu on tehty voittamaan taman haun".

## 2. Title- ja meta-kuvaukset

- [x] Jokaisella paasivulla on oma uniikki title.
- [x] Jokaisella paasivulla on oma uniikki meta description.
- [x] Title ei ole liian yleinen tai brand-vetoinen.
- [x] Description kertoo hyodyn, ei vain kuvaile sivua.
- [x] Suomi- ja englanninkieliset metat ovat molemmat luonnollisia.
- [x] Titleissa ei ole turhaa toistoa.

Valmis kun:
- kaikki paasisivut nayttavat hakutuloksessa klikattavilta ja selkeilta.

## 3. H1-, H2- ja intro-rakenne

- [x] Jokaisella sivulla on yksi selkea H1.
- [x] H1 vastaa sivun hakuintenttia.
- [x] Ensimmainen intro-kappale kertoo heti mita sivu kasittelee.
- [x] H2:t jakavat sisallon loogisiin aiheblokkeihin.
- [x] Otsikot eivat ole liian taiteellisia tai epamaaraisia hakukoneen kannalta.

Valmis kun:
- sivun voi skimmailla pelkkien otsikoiden perusteella ja ymmartaa mita se tarjoaa.

## 4. Sisainen linkitys

- [x] Etusivu ohjaa tarkoituksella `service`-sivulle.
- [x] `service` linkittaa luontevasti `cases`- ja `process`-sivuille.
- [x] `cases` linkittaa takaisin `service`-sivulle.
- [x] `about-us` ja `process` tukevat `service`-sivun kaupallista painoa.
- [x] Linkkitekstit kertovat mita linkin takana on, eivat ole geneerisia.
- [x] Fi- ja en-puolen linkit pysyvat oikeassa kieliversiossa.

Valmis kun:
- `service` tuntuu koko sivuston vahvimmin tuetulta kaupalliselta sivulta.

## 5. Schema-markup

- [x] `Organization` schema on mukana.
- [x] `Service`-sivulla on palvelua tukeva schema.
- [x] `FAQPage` schema on mukana siella missa on oikea FAQ.
- [x] Case- tai WebPage-tyyppinen schema on mukana tarvittaessa.
- [x] Schema ei sisalla placeholder-tietoa.
- [x] Kaikki schema vastaa sivulla oikeasti nakyvaa sisaltoa.

Valmis kun:
- schema auttaa hakukonetta ymmartamaan sivuston rakennetta ilman ristiriitoja.

## 6. Canonical, hreflang, sitemap, robots

- [x] Canonicalit ovat oikein kaikille paareiteille.
- [x] Hreflang-logiikka toimii `fi`- ja `en`-versioille.
- [x] Sitemap sisaltaa oikeat URLit.
- [x] Robots ei estä indeksoitavia sivuja.
- [x] Turhat tai ei-julkiset polut eivat valu sitemapin tai canonicalsien kautta indeksiin.

Valmis kun:
- tekninen indeksoitavuuslogiikka on siisti eika sisalla ristiriitoja.

## 7. Kaksikielisen sisallon laatu

- [x] Suomi ei tunnu sanasta sanaan kaannetylta.
- [x] Englanti ei tunnu placeholder-copylta.
- [x] Aakkoset, termit ja napit ovat oikein.
- [x] Fi- ja en-puoli ovat molemmat omilla jaloillaan uskottavia.
- [x] Sama sivu ei sisalla sekakielta.

Valmis kun:
- kumpikin kieliversio tuntuu aidosti omalta sivultaan, ei konekaannokselta.

## 8. FAQ ja AI-luettavuus

- [x] Tarkeimmilla palvelusivuilla on suoria kysymys-vastaus-rakenteita.
- [x] Sivulla on selkokielinen yhteenveto: mita teette, kenelle, miten tyo alkaa.
- [x] Tarkeat palvelutermit ovat mukana luonnollisesti.
- [x] Vastaukset ovat tiiviita ja suoria, eivat ymparipyoreita.

Valmis kun:
- tekoaly tai ihminen voi nopeasti poimia sivulta olennaisen ilman tulkintatyota.

## 9. Casejen uskottavuus

- [x] Jokaisessa casessa on selkea konteksti.
- [x] Jokaisessa casessa on ongelma -> ratkaisu -> lopputulos -logiikka.
- [x] Before/after ei ole liian geneerinen.
- [x] Casejen kieli kuulostaa oikeilta toimeksiannoilta.
- [x] Ainakin osa caseista tuntuu riittavan konkreettisilta hakukoneelle ja kayttajalle.

Valmis kun:
- case-sivu tukee luottamusta eika tunnu pelkalta placeholder-gallerialta.

## 10. Performance

- [x] Kuvakoot ovat järkevat.
- [x] Fontit ovat hallinnassa eivatka aiheuta turhaa hitautta.
- [x] Turhaa client-puolen JavaScriptia on minimoitu.
- [x] Isot visualit eivat hidasta turhaan mobiilia.
- [x] Layout shift on pieni.
- [ ] Tarkeimmat sivut tuntuvat nopeilta avata.

Huomio juuri nyt:
- Sivustolla ei ole raskasta sisaltokuvakerrosta, joten kuvapuoli on talla hetkella kevyt.
- Fontit tulevat `next/font`-ratkaisulla ja kayttavat `display: swap` -asetusta.
- Osa sivuista on siirretty takaisin server-renderoiduiksi silloin kun ne eivat tarvinneet selaimen tilaa tai efekteja.
- Visualeihin on jo lisatty reduced-motion- ja tab visibility -suojat, ja contact-visualin liikkuvat SVG-signaalit poistuvat pienilla naytoilla.
- Tarkeimmille hero-visualeille on varattu vakaampi tila etukateen, jotta ensinakyman hyppely pienenee.
- Build menee taas lapi optimoituna tuotantobuildina, joten tekninen pohja tukee nopeaa ensituntumaa.
- Oikea mobiilituntuma pitaa silti viela varmistaa kasin.

Valmis kun:
- sivusto tuntuu nopealta oikealla puhelimella ja tavallisella yhteydella.

## 11. Accessibility

- [x] Heading-rakenne on looginen.
- [x] Painikkeilla ja linkeilla on hyvat focus-tilat.
- [x] Kontrastit ovat riittavat.
- [x] Lomakkeet ovat selkeita ja saavutettavia.
- [x] Alt-tekstit ovat kunnossa siella missa tarvitaan.
- [x] Semanttiset elementit ovat oikein.

Valmis kun:
- sivu on helppo kayttaa myos ilman hiirta ja rakenne on ymmarrettava ruudunlukijalle.

## 12. OG-kuvat ja jakonakyma

- [x] Sivustolla on kunnollinen oletus-OG-kuva.
- [ ] Tarkeimmille sivuille voi tarvittaessa tehda omat OG-kuvat.
- [ ] Sivun nimi, kuvaus ja kuva nayttavat hallituilta ja ammattimaisilta jaettaessa.

Huomio juuri nyt:
- Tama osuus on tarkoituksella jatetty osittain auki.
- Ennen lopullista viimeistelya tarvitaan paatos siita, tehdaanko `home`, `service` ja `cases` -sivuille omat jakokuvat vai riittaako yksi vahva oletuskuva.
- Jos omat jakokuvat halutaan, niihin tarvitaan lopulliset tekstit, mahdollinen brandikuva/visual ja paatos yhtenaisesta jakotyylista.

Valmis kun:
- linkki nayttaa uskottavalta Slackissa, WhatsAppissa, LinkedInissa ja X:ssa.

## 13. Placeholderien poisto

- [x] Ei "your name here" -tyyppista sisaltoa tuotantoon.
- [x] Ei turhia demo- tai lorem-tyylisia kohtia.
- [x] Kaikki legal-, contact- ja founder-tiedot ovat oikeita tai piilotettu kunnes ne ovat oikeita.

Valmis kun:
- yksikaan kohta ei paljasta sivua keskeneraiseksi demoksi.

## 14. Launch-QA

- [ ] Kaikki paasisivut kaydaan kasin lapi desktopilla.
- [ ] Kaikki paasisivut kaydaan kasin lapi mobiilissa.
- [ ] Fi- ja en-versiot tarkistetaan molemmat.
- [x] Header, footer, CTA:t ja linkit toimivat kaikkialla.
- [ ] Lomakkeet testataan oikeasti.
- [x] Titles, descriptions, canonicalit ja hreflangit tarkistetaan viela kerran.
- [x] Sitemap ja robots tarkistetaan viela kerran.

Valmis kun:
- sivusto kestaa tuotantoon viennin ilman "korjataan heti launchin jalkeen" -listaa.

Huomio:
- metadata-, canonical-, hreflang-, sitemap- ja robots-puoli on varmennettu koodista ja buildista
- header-, footer-, CTA- ja locale-linkitys on varmennettu koodista
- contact- ja book-lomakkeiden koodipolku, API-reitit, fallback-emailit ja env-riippuvuudet on varmennettu
- kasin tehtava launch-QA on edelleen jaljella desktop-, mobiili-, fi/en-, linkki- ja lomaketestauksen osalta

## Mitä on oikeasti viela jaljella

Jos haluat ajatella taman mahdollisimman yksinkertaisesti, enaa auki ovat:
- kasin tehtava desktop-kierros
- kasin tehtava mobiilikierros
- kasin tehtava fi/en-kierros
- oikea contact-lomakkeen testilahetys
- oikea book-lomakkeen testilahetys
- jakonakyman nopea tarkistus ainakin etusivulle ja service-sivulle

Muuten tama muistio on dev-vaiheen osalta kaytannossa valmis.

## Suositeltu toteutusjarjestys

1. Sivukohtainen hakufokus
2. Titlet, metat ja H1/H2-rakenne
3. Sisainen linkitys
4. Kaksikielisen copyn viimeinen hionta
5. FAQ + AI-luettavat yhteenvedot
6. Schema + canonical + hreflang + sitemap + robots
7. Casejen uskottavuuskierros
8. Performance + accessibility
9. OG-kuvat
10. Placeholderien poisto
11. Launch-QA

## Kun tama checklist on valmis

Jos taman listan kaikki kohdat on oikeasti tehty hyvin, sivusto on dev-vaiheen kannalta lahella maksimitasoa.

Sen jalkeen seuraavat SEO-loikat eivat tule enaa pelkasta koodista, vaan:
- oikeasta launchista
- Google Search Consolesta
- oikeista referensseista
- ulkoisista linkeista
- ajan myota kertyvasta luottamuksesta
