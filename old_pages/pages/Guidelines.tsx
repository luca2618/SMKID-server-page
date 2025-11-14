import React from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';

const content = `
#
#  Guidelines & Regler
SMKID's VPN og VPS mv. må kun benyttes til studierelaterede eller rekreationelle formål, medmindre andet er aftalt med admin.

## Anvendelse og Begrænsninger

- Anvendelsen må ikke krænke dansk lovgivning.
- Der må ikke publiceres materiale, der kan virke ærekrænkende eller generelt stødende.
- Anvendelsen må ikke skade DTU's omdømme.
- Det er ikke tilladt at bruge serverne til kommercielle formål, medmindre andet er aftalt.
- Det er ikke tilladt at bruge krypto mining af nogen former.
- Ophavsretlige regler skal overholdes. F.eks. må DTU’s net og servere ikke bruges til deling af ophavsretsbeskyttet materiale på en måde, der ikke efterlever gældende regler.

## Belastning af IT-systemer

- Man må ikke belaste IT-systemerne unødigt, f.eks. ved overdreven diskforbrug, computerkraft eller nettrafik uden forudgående aftale med udbyderen af det pågældende system eller funktion.
- Alle brugere får tildelt en kvote for diskforbrug, som ikke må overskrides. Overforbrug kan medføre sletning af ens filer på et vilkårligt tidspunkt, så det samlede diskforbrug kommer under kvoten. 
- Man kan ikke overføre en ubrugt kvote til andre brugere.

## Backup og Ansvar

- SMKID foretager i begrænset omfang backup af brugerfiler. Det er brugerens ansvar at sikre, at der foretages den fornødne backup af deres egen data.
- Backup til selvreference eller restoration på egen VPS er tilladt, men ikke en god løsning, da det vil ligge på den samme disk som VPS. 
- Diskene har redundancy og en ekstra backup i begrænset omfang, som beskrevet ovenfor, men der er ingen off-site backup. Det anbefales derfor, at filer selv backes op (f.eks. til egen DTU OneDrive eller online drev).

## Yderligere Regler

Nogle af reglerne er gengivet, og medmindre andet er angivet i overstående regler, skal følgende regler også følges:

- Regler for brug af DTU IT-systemer og netværk skal som udgangspunkt overholdes:
  [DTU IT-sikkerhedspolitik](https://studieinformation.dtu.dk/regler/orlov-studieskift-gaestestuderende/it-sikkerhedspolitik)

`;

function Guidelines() {
  return <MarkdownRenderer content={content} />;
}

export default Guidelines;