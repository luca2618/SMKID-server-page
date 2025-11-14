import React from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';

const content = `

# Kom i gang med din egen server

> OPS VI OPRETTER I ØJEBLIKKET IKKE SERVERE PÅ ONLINE ADMODNING. Kom til vores serverdag den xxx 

Velkommen til SMKID Serverprojektet! Vi er glade for, at du vil udforske mulighederne og få hands-on erfaring med servere og netværk. Denne guide hjælper dig trin-for-trin med at anmode om din egen virtuelle server (VPS) og komme godt fra start.

---

## 1. Læs vores Retningslinjer og Brugerbetingelser

Inden du anmoder om en server, er det vigtigt, at du læser vores [retningslinjer og regler](guidelines). Disse regler sikrer, at alle brugere har en god og ansvarlig oplevelse på vores platform.

---

## 2. Udfyld Anmodningsskemaet

For at få din egen server skal du først udfylde et anmodningsskema, hvor vi indsamler de nødvendige oplysninger til opsætning og administration. Klik på linket herunder for at gå til anmodningsskemaet.

- **[Anmodningsskema til VPS](link-til-anmodningsskema)**


Når du har sendt skemaet, vil vi gennemgå din anmodning og opsætte serveren til dig så hurtigt som muligt. Du modtager en bekræftelsesmail med loginoplysninger og en introduktion til dit nye servermiljø, når opsætningen er fuldført.

---

## 3. Opret forbindelse til VPN

For at sikre en sikker og stabil forbindelse til din VPS, skal du først oprette forbindelse til vores VPN-netværk. Følg disse trin for at installere og forbinde til VPN’en:

1. Download og installer en VPN-klient (vi anbefaler OpenVPN connect eller en anden kompatibel VPN-klient).
2. I din bekræftelsesmail vil du finde dine VPN-loginoplysninger og en konfigurationsfil, som du skal importere til VPN-klienten.
3. Åbn VPN-klienten, importér konfigurationsfilen, og indtast dine loginoplysninger.
4. Klik på "Connect" for at oprette forbindelse til VPN.

Når du har oprettet forbindelse til VPN, kan du fortsætte til næste trin for at forbinde direkte til din VPS.

---

## 4. Forbind til din VPS

Når du har oprettet forbindelse til VPN og modtaget dine loginoplysninger til serveren, kan du nu oprette forbindelse til din VPS. Her er en hurtig guide til, hvordan du kan oprette forbindelse:

### Forbindelse via SSH
1. Åbn terminalen på din computer.
2. Indtast følgende kommando:
   "ssh brugernavn@din-server-adresse"
3. evt ændre dit password med kommandown "sudo passwd"
`;

function Opstart() {
  return <MarkdownRenderer content={content} />;
}

export default Opstart;