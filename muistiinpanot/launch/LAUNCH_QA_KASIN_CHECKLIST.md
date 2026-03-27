# Launch QA Kasin Checklist

Tama on viimeinen kasin tehtava tarkistuskierros ennen launchia.

Tavoite:
- loytaa ne viimeiset kaytannon virheet, joita ei voi varmistaa vain koodista
- tarkistaa sivusto oikeana kayttokokemuksena, ei vain tiedostoina

## Mita on jo varmennettu koodista

Nama asiat on kayty jo lapi kehitysvaiheessa, joten niita ei tarvitse enaa epailta:
- `title`, `description`, `canonical` ja `hreflang` -logiikka on tarkistettu
- `robots` ja `sitemap` on tarkistettu
- header-, footer- ja CTA-linkitys on tarkistettu
- locale-linkitys on tarkistettu
- contact- ja book-lomakkeiden koodipolku, API-reitit ja fallback-emailit on tarkistettu
- production build menee lapi

Tama checklist keskittyy siis enaa siihen, mita ei voi varmistaa pelkista tiedostoista.

## 1. Desktop-kierros

Kay jokainen paasisivu lapi normaalilla desktop-leveydella:
- [ ] `/`
- [ ] `/service`
- [ ] `/process`
- [ ] `/cases`
- [ ] `/about-us`
- [ ] `/contact`
- [ ] `/book`
- [ ] `/privacy`
- [ ] `/terms`

Tarkista jokaisella sivulla:
- [ ] hero aukeaa siististi
- [ ] mikaan osio ei mene paallekkain
- [ ] visualit eivat riko layoutia
- [ ] spacing tuntuu tasapainoiselta
- [ ] CTA:t nayttavat klikattavilta
- [ ] footer on ehja ja oikeassa paikassa

## 2. Mobiilikierros

Kay samat paasisivut lapi mobiilileveydella.

Tarkista erityisesti:
- [ ] header toimii
- [ ] mobiilivalikko aukeaa ja sulkeutuu oikein
- [ ] hero-otsikot eivat mene rumasti poikki
- [ ] napit mahtuvat riville tai katkeavat siististi
- [ ] kortit eivat pursua ruudun ulkopuolelle
- [ ] visualit eivat tee sivusta raskaan tai rikkinäisen oloista
- [ ] footer pysyy luettavana

## 3. Fi- ja En-kierros

Tarkista ainakin:
- [ ] `/en`
- [ ] `/fi`
- [ ] `/en/service`
- [ ] `/fi/service`
- [ ] `/en/process`
- [ ] `/fi/process`
- [ ] `/en/contact`
- [ ] `/fi/contact`

Tarkista:
- [ ] headerin kielenvaihto toimii
- [ ] footerin kielenvaihto toimii
- [ ] et joudu vahingossa väärän kielen sivulle
- [ ] copy ei vaihdu sekakielelle
- [ ] napit, otsikot ja metatekstit tuntuvat luonnollisilta molemmilla kielillä

## 4. Linkkikierros

Klikkaa kasin lapi:
- [ ] headerin paa-linkit
- [ ] footerin linkit
- [ ] etusivun kaikki CTA:t
- [ ] service-sivun kaikki CTA:t
- [ ] process-sivun kaikki CTA:t
- [ ] cases-sivun kaikki CTA:t
- [ ] about-us-sivun kaikki CTA:t
- [ ] contact- ja book-sivujen ristiinlinkit

Tarkista:
- [ ] mikaan linkki ei vie 404:aan
- [ ] mikaan linkki ei vaihda kielea vaarin
- [ ] anchor- ja form-linkit toimivat oikein

## 5. Lomakekierros

### Contact
- [ ] laheta oikea testiviesti
- [ ] onnistumisviesti nakyy oikein
- [ ] viesti tulee oikeasti perille inboxiin
- [ ] reply-to toimii oikein
- [ ] fallback-email-linkki toimii

### Book
- [ ] laheta oikea testipyynto
- [ ] onnistumisviesti nakyy oikein
- [ ] viesti tulee oikeasti perille inboxiin
- [ ] valittu aika tulee mukaan viestiin
- [ ] fallback-email-linkki toimii

## 6. Jakonakyman tarkistus

Tarkista ainakin etusivu ja service-sivu linkin esikatseluna.

Katso:
- [ ] title nayttaa hyvalta
- [ ] description nayttaa ehjalta
- [ ] og-kuva nakyy
- [ ] yleisfiilis on ammattimainen

## 7. Viimeinen launch-paatos

Launchiin valmis kun:
- [ ] ei loydy rikkoutuneita layoutteja
- [ ] ei loydy vaaran kielisia sivuja
- [ ] ei loydy rikkinäisiä linkkeja
- [ ] lomakkeet toimivat oikeasti
- [ ] sivusto tuntuu valmiilta eika demolta

## Jos loydat virheen

Kirjaa ylos aina:
- sivu
- laite tai leveys
- kieli
- mita odotit
- mita tapahtui oikeasti

Paras tapa:
- korjaa yksi virhe kerrallaan
- testaa se heti uudelleen
- siirry vasta sitten seuraavaan

## Viimeiset oikeasti jaljella olevat asiat

Jos haluat nopeasti tietaa mita on enaa oikeasti tekematta, ne ovat kaytannossa nama:
- desktop-kierros kasin
- mobiilikierros kasin
- fi/en-kierros kasin
- oikea contact-lomakkeen testilahetys
- oikea book-lomakkeen testilahetys
- jakonakyman nopea tarkistus ainakin etusivulle ja service-sivulle
