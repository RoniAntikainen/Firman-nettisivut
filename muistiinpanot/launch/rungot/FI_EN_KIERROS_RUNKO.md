# Fi En Kierros Runko

Tama on nopein tapa tarkistaa, etta suomen- ja englanninkieliset versiot toimivat oikein ennen launchia.

## Testijarjestys

Kay ainakin nama polut:
- `/en`
- `/fi`
- `/en/service`
- `/fi/service`
- `/en/process`
- `/fi/process`
- `/en/cases`
- `/fi/cases`
- `/en/contact`
- `/fi/contact`
- `/en/book`
- `/fi/book`

## Tarkista jokaisella parilla

1. Reitti
- [ ] oikea kieliversio aukeaa
- [ ] et paady vahingossa toisen kielen sivulle

2. Header ja footer
- [ ] headerin kielenvaihto toimii oikein
- [ ] footerin kielenvaihto toimii oikein
- [ ] paa-linkit pysyvat oikeassa kielessa

3. Copy
- [ ] otsikko tuntuu luonnolliselta
- [ ] ingressi tuntuu luonnolliselta
- [ ] napit tuntuvat luonnollisilta
- [ ] korttien tekstit eivat mene sekakielelle
- [ ] ei loydy outoja sanasta sanaan -kaannoksia

4. CTA:t ja linkit
- [ ] CTA vie oikean kieliseen kohteeseen
- [ ] sisainen linkitys ei tiputa vaaraan kieliversioon

5. Metadata-tuntuma
- [ ] sivun nimi tuntuu oikealta kyseisella kielella
- [ ] yleinen fiilis on uskottava molemmilla kielilla

## Kirjaa loydot nain

Kirjaa jokaisesta ongelmasta vain nama:
- sivupari
- kohta
- kumpi kieli on ongelmallinen
- mita odotit
- mita tapahtui oikeasti

Esimerkki:
- `/en/service` + `/fi/service`
- CTA-rivi
- fi
- napin pitaisi kuulostaa luonnolliselta
- teksti kuulostaa liian suoralta kaannokselta

## Nopea paatos jokaisen parin lopussa

Valitse yksi:
- [ ] ok
- [ ] pieni copy-fixi
- [ ] selkea kielibugi

## Kun kierros on valmis

Jos loydot:
- saman copy-ongelman monella sivulla -> korjataan ensin yhteinen kaannoslinja
- yksittaisia kielivirheita -> korjataan pahin ensin
- ei ongelmia -> fi/en-kierros on valmis
