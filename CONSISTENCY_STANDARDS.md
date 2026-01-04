# Consistentie Standaarden - BeeMobiel Rijschool

Dit document beschrijft de standaard waarden voor alle UI-elementen om consistentie te garanderen op alle pagina's.

## 1. Hero Sections

### Min-Heights
**Standaard voor meeste hero sections:**
- `min-h-[35vh] sm:min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh]`

**Uitzonderingen:**
- Homepage Hero: `min-h-screen` (uniek, met video)
- Tips Hero: `min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh]` (groter voor impact)
- Article Hero: `min-h-[60vh] sm:min-h-[70vh]` (artikel pagina's)
- Boek Nu Hero: `min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] lg:min-h-[45vh]` (kleiner)

### Padding
**Content container:**
- `px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8` (horizontaal - consistent)
- `py-8 sm:py-10 md:py-12 lg:py-14` (verticaal - consistent)

### Heading Sizes (H1)
**Standaard hero headings:**
- `text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl` (meeste hero sections)
- `text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl` (homepage hero - groter)
- `text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl` (tips hero - grootste)

### Badge Styles
**Standaard badge:**
- Padding: `px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-1.5`
- Background: `bg-yellow-50/90 backdrop-blur-sm`
- Border: `border border-yellow-200/60`
- Shadow: `shadow-md`
- Border radius: `rounded-full`
- Dot size: `w-1.5 h-1.5 sm:w-2 sm:h-2`
- Text: `text-yellow-700 uppercase font-bold text-xs sm:text-sm tracking-wider`

**Uitzondering Tips Hero:**
- Padding: `px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5`
- Background: `bg-yellow-600/20 backdrop-blur-md`
- Border: `border border-yellow-500/30`
- Margin bottom: `mb-6 sm:mb-8 md:mb-10`

### Breadcrumb Styles
**Standaard breadcrumb in hero sections:**
- Margin bottom: `mb-2 sm:mb-3` (meeste hero sections)
- Margin bottom: `mb-4 sm:mb-6 md:mb-8` (tips hero - groter)
- Text size: `text-xs sm:text-sm` (meeste hero sections)
- Text size: `text-sm sm:text-base` (tips hero - groter)
- Gap: `gap-2`
- Alignment: Alle elementen hebben `flex items-center leading-none` voor consistente verticale alignment
- Link color: `text-yellow-400 hover:text-yellow-300`
- Separator: `text-yellow-500/70` met `leading-none`
- Current page: `text-white/90 font-medium`

## 2. Section Padding

### Standaard Sections
**Meeste sections:**
- `py-6 sm:py-10 md:py-14 lg:py-16`

### Tips Sections
**Tips specifieke sections:**
- `py-12 sm:py-16 md:py-20 lg:py-24` (groter voor meer ruimte)

### Pricing Sections
**Pricing hoofd sections:**
- `py-24 sm:py-28 md:py-32 lg:py-36 xl:py-40` (veel groter voor impact)

### Individual Rates Sections
**Losse tarieven sections:**
- `py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36`

### CTA Sections
**Call-to-action sections:**
- `py-16 sm:py-20 md:py-24 lg:py-28`

### Stats Section
**Statistieken section:**
- `py-6 sm:py-8 md:py-10 lg:py-12` (kleiner)

### Horizontal Padding
**Container padding (consistent overal):**
- `px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8`

## 3. Typography

### H1 Headings
**Hero sections:**
- `text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl` (meeste)
- `text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl` (homepage)
- `text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl` (tips)

**Font weights:**
- `font-extrabold` (meeste hero sections)
- `font-bold` (homepage hero, article hero)
- `font-black` (tips hero)

### H2 Headings
**Section headings:**
- `text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl` (meeste sections)
- `text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl` (video carousel)
- `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` (contact intro)
- `text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl` (pricing sections, tips sections)

**Font weights:**
- `font-bold` (meeste)
- `font-black` (pricing, tips sections)

### H3 Headings
**Subsection headings:**
- `text-base sm:text-lg md:text-xl lg:text-xl` (contact info cards)
- `text-lg sm:text-xl md:text-2xl` (about section cards)
- `text-xl sm:text-2xl md:text-2xl` (pricing cards)
- `text-xl sm:text-2xl md:text-3xl` (features)
- `text-xl sm:text-2xl md:text-3xl lg:text-4xl` (motor pricing)

**Font weights:**
- `font-bold` (meeste)
- `font-semibold` (contact info)

### Body Text
**Paragraphs:**
- `text-xs sm:text-sm md:text-base` (kleine tekst)
- `text-sm sm:text-base md:text-lg` (standaard)
- `text-base sm:text-lg md:text-xl` (grote tekst)
- `text-base sm:text-lg md:text-xl lg:text-2xl` (pricing descriptions)

**Line heights:**
- `leading-relaxed` (meeste paragraphs)
- `leading-tight` (headings)

## 4. Button Styles

### Primary Buttons (Yellow)
**Standaard primary button:**
- Padding: `px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4`
- Background: `bg-yellow-600`
- Hover: `hover:bg-yellow-700`
- Text: `text-gray-900 font-bold`
- Border radius: `rounded-xl`
- Shadow: `shadow-lg hover:shadow-xl`
- Text size: `text-sm sm:text-base`
- Uppercase: `uppercase tracking-wide`

**Premium buttons (Tips sections):**
- Padding: `px-9 sm:px-11 py-5 sm:py-6`
- Background: `bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600`
- Border radius: `rounded-2xl`
- Shadow: `shadow-2xl hover:shadow-yellow-600/60`
- Transform: `transform hover:scale-110`
- Font: `font-black`

### Secondary Buttons (Dark)
**Standaard secondary button:**
- Background: `bg-gray-900` of `bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900`
- Text: `text-white`
- Overige styling gelijk aan primary buttons

## 5. Card Styles

### Pricing Cards
**Standaard pricing card:**
- Padding: `p-8 sm:p-10 md:p-12 lg:p-12`
- Border radius: `rounded-xl sm:rounded-2xl`
- Shadow: `shadow-xl hover:shadow-2xl`
- Border: `border-2` (met conditional colors)

### Feature Cards
**Standaard feature card:**
- Padding: `p-6 sm:p-8 md:p-10 lg:p-10`
- Border radius: `rounded-xl` of `rounded-2xl`
- Shadow: `shadow-sm hover:shadow-md` of `shadow-xl hover:shadow-2xl`
- Border: `border border-gray-200`

### Info Cards (Contact)
**Standaard info card:**
- Padding: `p-4 sm:p-5`
- Border radius: `rounded-lg sm:rounded-xl`
- Shadow: `shadow-md hover:shadow-lg`

## 6. Image Sizes

### Hero Images
**Standaard hero image heights:**
- `h-64 sm:h-80 md:h-96 lg:h-[500px]` (meeste sections)

**Uitzonderingen:**
- Booking form: `h-48 sm:h-56 md:h-72 lg:h-[500px]`
- Contact map: `h-[400px] sm:h-[500px] md:h-[500px]`
- Vehicle types: `h-56 sm:h-64 md:h-72 lg:h-80`
- Tips overview: `h-48 sm:h-56 md:h-64`

### Border Radius voor Images
- `rounded-xl` (meeste)
- `rounded-2xl` (sommige)
- `rounded-3xl` (tips sections - premium)

## 7. Spacing

### Gaps in Grids
**Standaard gaps:**
- `gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12` (feature grids)
- `gap-6 sm:gap-8 md:gap-10 lg:gap-12` (content grids)
- `gap-12 sm:gap-16 md:gap-20 lg:gap-16` (tips sections - groter)
- `gap-3 sm:gap-4` (kleine grids)

### Margins
**Heading margins:**
- H1: `mb-1 sm:mb-1.5 md:mb-2` (hero sections)
- H2: `mb-4 sm:mb-5 md:mb-6` (sections)
- H3: `mb-2 sm:mb-3 md:mb-4` (subsections)

**Section margins:**
- `mb-8 sm:mb-12 md:mb-16 lg:mb-20` (grote sections)
- `mb-4 sm:mb-6 md:mb-8` (kleinere sections)

### Container Widths
**Standaard container:**
- `max-w-7xl` (consistent overal)

## 8. Colors & Effects

### Yellow Variants
**Primaire yellow:**
- `yellow-600` (meeste buttons, accents)
- `yellow-500` (gradients, hover states)
- `yellow-400` (highlights, text gradients)

**Light yellow:**
- `yellow-50` (backgrounds)
- `yellow-100` (card backgrounds)

### Gray Variants
**Text:**
- `gray-900` (headings, dark text)
- `gray-800` (secondary headings)
- `gray-700` (body text)
- `gray-600` (muted text)

**Backgrounds:**
- `gray-50` (light backgrounds)
- `gray-900` (dark sections)

### Gradients
**Yellow gradients:**
- `from-yellow-600 via-yellow-500 to-yellow-600` (buttons)
- `from-yellow-400 via-yellow-500 to-yellow-600` (text gradients)

**Background gradients:**
- `from-white via-gray-50/80 to-white` (light sections)
- `from-gray-900 via-gray-800 to-gray-900` (dark sections)
- `from-black/80 via-black/75 to-black/70` (hero overlays)

### Backdrop Blur
**Standaard blur:**
- `backdrop-blur-sm` (badges)
- `backdrop-blur-md` (cards)
- `backdrop-blur-xl` (premium cards)
- `backdrop-blur-2xl` (hero cards)

### Shadows
**Standaard shadows:**
- `shadow-md` (badges, small cards)
- `shadow-lg` (buttons, medium cards)
- `shadow-xl` (large cards)
- `shadow-2xl` (premium cards, hero elements)

## 9. Border Radius

**Standaard border radius:**
- `rounded-xl` (buttons, cards, images - meeste)
- `rounded-2xl` (premium cards, large images)
- `rounded-3xl` (tips sections - premium)
- `rounded-full` (badges, icons, buttons)

## 10. Animations & Transitions

**Standaard transitions:**
- `transition-all duration-300` (meeste elementen)
- `transition-all duration-500` (cards, premium elements)
- `transition-all duration-700` (hero elements)
- `transition-all duration-1000` (tips hero elements)

**Hover effects:**
- `hover:scale-105` (icons, small elements)
- `hover:scale-110` (buttons, premium elements)
- `hover:scale-[1.02]` (cards, images)

## 11. Form Inputs

### ContactFormSection Style
**Standaard form inputs:**
- Padding: `px-4 sm:px-5 py-3 sm:py-4`
- Border: `border-2 border-gray-200`
- Border radius: `rounded-xl`
- Background: `bg-gray-50 focus:bg-white`
- Focus: `focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600`
- Text size: `text-sm sm:text-base`

### BookingFormSection Style
**Alternatieve form inputs (met error handling):**
- Padding: `px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5`
- Border: `border border-gray-300` (met error states)
- Border radius: `rounded-lg sm:rounded-xl`
- Background: `bg-white`
- Focus: `focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600`
- Text size: `text-sm sm:text-base`

**Nota:** Beide styles zijn bewust verschillend - ContactFormSection heeft een meer premium look, BookingFormSection heeft uitgebreide error handling.

## 12. Container Widths

**Standaard container:**
- `max-w-7xl` - Consistent overal gebruikt
- Horizontal padding: `px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8` - Consistent overal

**Content max-widths:**
- `max-w-2xl` - Paragraphs, descriptions
- `max-w-3xl` - Hero descriptions
- `max-w-4xl` - Section descriptions
- `max-w-5xl` - Tips hero description

## Implementatie Prioriteit

1. **Hero Sections** - Standaardiseren min-heights en padding
2. **Section Padding** - Uniformeren padding waarden
3. **Typography** - Consistent maken heading sizes
4. **Buttons** - Uniformeren button styles
5. **Cards** - Consistent maken card padding en shadows
6. **Images** - Standaardiseren image heights
7. **Spacing** - Uniformeren gaps en margins
8. **Colors** - Consistent maken color variants

