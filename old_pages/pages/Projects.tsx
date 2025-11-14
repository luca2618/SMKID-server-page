import React from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';

const content = `
# Projektidéer til SMKID Serverprojektet

Er du på udkig efter inspiration til, hvordan du kan bruge din VPS? Her har vi samlet en række spændende projektidéer, som kan hjælpe dig med at få mest muligt ud af dine serverressourcer. Disse idéer spænder fra grundlæggende projekter til avancerede opsætninger, så du kan vælge noget, der passer til dit niveau og dine interesser.

---

## 1. Host din egen hjemmeside 🌐

At oprette en personlig hjemmeside er en fantastisk måde at lære serveradministration og webhosting på. Du kan starte med en simpel HTML-side eller bruge en mere avanceret platform som WordPress. Ideer kan inkludere din egen blog, web-app eller en cv-hjemmeside hvor du kan vise dine projekter frem.

- **Sværhedsgrad**: Begynder/Øvet
- **Teknologier**: HTML, CSS, WordPress, Nginx/Apache
- **Vejledning**: [Guide til opsætning af en webserver](https://nginx.org/en/docs/beginners_guide.html)

### Tips
- Eksperimentér med forskellige webservere, som Nginx eller Apache, og lær forskellen mellem dem.
- Vi hjælper med at gøre hjemmesiden tilgængelig udefra enten med dit eget købte domæne eller med ___.smkid.dk domæne af dit valg.

---

## 2. Opret en spilserver 🎮

Opret din egen spilserver og inviter dine venner til at spille! Dette er en sjov måde at lære om serverhosting, ydeevneoptimering og netværk.

- **Sværhedsgrad**: Let-Øvet-Avanceret
- **Vejledning**: [Guide til opsætning af en minecraft server](https://help.minecraft.net/hc/en-us/articles/360058525452-How-to-Setup-a-Minecraft-Java-Edition-Server)

### Tips
- Vær opmærksom på at kun servere der kører over tcp (som minecraft) kan gøres tilgængelige uden vpn grundet DTU firewall. Vi arbejder på en løsning.
- Justér serverindstillingerne for at optimere ydeevnen.
- Undersøg muligheden for at implementere backup-løsninger for at undgå datatab.

---

## 3. Lær containerteknologier med Docker 🐳

Containerteknologi er afgørende for moderne softwareudvikling og DevOps. Med Docker kan du oprette og køre containere, hvilket er nyttigt til softwareudvikling og test.

- **Sværhedsgrad**: Øvet/Avanceret
- **Teknologier**: Docker, Docker Compose
- **Vejledning**: [Introduktion til Docker og containere](https://docker-curriculum.com/)

### Tips
- Opret en Docker-Compose-fil for at køre flere containere samtidig, f.eks. en webserver og en database.
- Prøv at lave dit eget container-image og deploy det til din server.


`;

function Projects() {
  return <MarkdownRenderer content={content} />;
}

export default Projects;