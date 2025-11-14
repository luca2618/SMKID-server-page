import React from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';

const content = `


# Kontakt og Support

Har du spørgsmål om SMKID Serverprojektet, oplever du problemer med serverne, eller har du forslag til forbedringer? Vi er her for at hjælpe – men kun med henvendelser, der er relateret til vores serverprojekt og de underliggende systemer.

---

## 📧 Kontakt os

Al kommunikation vedrørende SMKID Serverprojektet foregår via vores kontakt-e-mail:

- **Kontakt e-mail**: [lucassylvester02@gmail.com](mailto:lucassylvester02@gmail.com)

Du kan bruge denne e-mail til:
- Spørgsmål om adgang til serverne og generelle retningslinjer.
- Teknisk support i forbindelse med problemer, der er relateret til det underliggende servermiljø.
- Feedback og forslag til forbedringer af projektet.
- Anmodninger om hjælp til specifikke projektidéer (relateret til vores servere og platform).

---

## Vigtigt! Begrænset support

Vi opfordrer alle brugere til at stille spørgsmål og søge hjælp, men vær opmærksom på, at vi **ikke tilbyder generel teknisk support**. Vores support dækker kun spørgsmål og problemer, der vedrører SMKID Serverprojektet og de specifikke systemer, vi stiller til rådighed.

- **Eksempler på support**: Problemer med adgang til din VPS, tekniske problemer med serverne, og spørgsmål til retningslinjer.
- **Hvad vi ikke supporterer**: Generelle IT-problemer, softwareproblemer uden relation til vores systemer, eller brug af eksterne tjenester.

---

## Feedback og Forslag

Vi sætter stor pris på din feedback! Hvis du har idéer til forbedringer af serverprojektet eller hjemmesiden, så send dem til vores kontakt e-mail. Din feedback hjælper os med at skabe en bedre oplevelse for alle brugere.

---

**Tak fordi du er en del af SMKID Serverprojektet!** Vi ser frem til at hjælpe dig med at få mest muligt ud af vores servere.


`;

function Kontakt() {
  return <MarkdownRenderer content={content} />;
}

export default Kontakt;