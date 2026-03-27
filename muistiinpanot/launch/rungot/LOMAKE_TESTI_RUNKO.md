# Lomake Testi Runko

Tama on nopein tapa testata `contact`- ja `book`-lomakkeet ennen launchia.

## 1. Contact-lomake

Polku:
- `/contact`
- testaa mielellaan se kieliversio jolla aiot launchata ensin

### Tarkista ennen lahetysta
- [ ] kaikki kentat nayttavat ehjilta
- [ ] placeholderit tuntuvat luonnollisilta
- [ ] nappi nayttaa klikattavalta
- [ ] fallback-email-linkki nakyy

### Laheta oikea testiviesti

Kayta esimerkiksi:
- email: oma testiosoite
- ongelma: lyhyt oikean tuntuinen kuvaus
- kayttajat: lyhyt oikean tuntuinen vastaus
- toivotut ajat: yksi tai kaksi testiaikaa

Tarkista lahetyksen jalkeen:
- [ ] onnistumisviesti nakyy
- [ ] virheviestia ei tule turhaan
- [ ] lomake tyhjenee oikein

Tarkista inboxista:
- [ ] viesti tuli perille
- [ ] sisalto nayttaa ehjalta
- [ ] reply-to toimii oikein

Tarkista fallback:
- [ ] mailto-linkki toimii

## 2. Book-lomake

Polku:
- `/book`

### Tarkista ennen lahetysta
- [ ] ajat nayttavat ehjilta
- [ ] eka valittu aika on jarkeva
- [ ] nappi nayttaa klikattavalta
- [ ] fallback-email-linkki nakyy

### Laheta oikea testipyynto

Kayta esimerkiksi:
- email: oma testiosoite
- aika: valitse yksi oikea slot
- note: lyhyt oikean tuntuinen kuvaus

Tarkista lahetyksen jalkeen:
- [ ] onnistumisviesti nakyy
- [ ] virheviestia ei tule turhaan
- [ ] lomake tyhjenee oikein

Tarkista inboxista:
- [ ] viesti tuli perille
- [ ] valittu aika tulee mukana oikein
- [ ] sisalto nayttaa ehjalta
- [ ] reply-to toimii oikein

Tarkista fallback:
- [ ] mailto-linkki toimii

## Jos loydat virheen

Kirjaa aina:
- lomake
- kieli
- mita lahetit
- mita odotit
- mita tapahtui oikeasti

## Nopea paatos lopussa

Valitse erikseen molemmille:
- [ ] ok
- [ ] pieni fixi
- [ ] selkea bugi
