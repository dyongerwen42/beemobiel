# CBR Video's Toevoegen

Dit document legt uit hoe je relevante CBR YouTube video's kunt vinden en toevoegen aan de Tips pagina.

## Stappen

### 1. Bezoek het CBR YouTube Kanaal
Ga naar: https://www.youtube.com/@cbrnl/videos

### 2. Zoek Relevante Video's

Zoek naar video's die passen bij de volgende categorieën:

#### Eerste Rijles (`eerste-rijles`)
- Zoektermen: "eerste rijles", "eerste autorijles", "beginner", "eerste keer"
- Beschrijving: Video's over wat je kunt verwachten tijdens je eerste rijles

#### Top 5 Examenfouten (`examenfouten`)
- Zoektermen: "examenfouten", "veelgemaakte fouten", "praktijkexamen fouten", "top 5 fouten"
- Beschrijving: Video's over veelgemaakte fouten tijdens het praktijkexamen

#### Rotondes (`rotondes`)
- Zoektermen: "rotondes", "rotonde", "invoegen", "rondpunt"
- Beschrijving: Video's over hoe je rotondes correct neemt

### 3. Haal de Video ID op

Voor elke video die je wilt gebruiken:
1. Open de video op YouTube
2. Kijk naar de URL: `https://www.youtube.com/watch?v=VIDEO_ID`
3. Kopieer de `VIDEO_ID` (het deel na `v=`)

Voorbeeld:
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID: `dQw4w9WgXcQ`

### 4. Update `data/cbr-videos.ts`

Open het bestand `data/cbr-videos.ts` en update de arrays:

```typescript
export const eersteRijlesVideos: CBRVideo[] = [
  {
    youtubeId: 'JE_VIDEO_ID_HIER', // Vervang met echte video ID
    title: 'Echte video titel',
    category: 'eerste-rijles'
  },
  // ... meer video's
]
```

### 5. Test de Video's

Na het updaten:
1. Start de development server: `npm run dev`
2. Ga naar `/tips`
3. Klik op de video thumbnails om te zien of ze correct laden
4. Controleer of de video's correct afspelen

## Huidige Status

Momenteel gebruiken alle video's de placeholder ID `XHOmBV4js_E`. Deze moeten worden vervangen door echte CBR video ID's.

## Tips

- Kies video's die relevant zijn voor Nederlandse rijlessen
- Zorg dat video's publiek beschikbaar zijn (niet privé)
- Test video's op verschillende apparaten (desktop, tablet, mobiel)
- Kies video's met goede kwaliteit (minimaal 720p)

## Video Structuur

Elke categorie heeft 3 video's in de carousel:
- Video 1: Primaire video voor de categorie
- Video 2: Aanvullende video
- Video 3: Extra video met tips

Je kunt meer of minder video's toevoegen door de arrays aan te passen.
