# Diepe Inconsistentie Audit 2025 - BeeMobiel Website

## Overzicht
Uitgebreide audit uitgevoerd op alle 65+ componenten om resterende inconsistenties te identificeren na de eerdere correcties in CONSISTENCY_REPORT.md.

## Gevonden Inconsistenties

### 1. Button Styling Inconsistenties

#### Padding Variaties
| Component | Padding Pattern | Status |
|-----------|----------------|---------|
| HeroSection, Standard | `px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4` | ✅ Standard |
| AllPricing, MotorPricing, ScooterPricing | `py-3 sm:py-4 md:py-5 px-5 sm:px-6 md:px-8` | ⚠️ Order inconsistent |
| ContactFormSection | `py-4 sm:py-5 md:py-6` | ⚠️ Different sizing |
| BookingFormSection | `py-3 sm:py-3.5 md:py-4 lg:py-5` | ⚠️ Extra breakpoint |

#### Secondary Button Inconsistencies
| Component | Secondary Button Style | Issue |
|-----------|----------------------|-------|
| PricingSection | `bg-gray-100 text-gray-900 hover:bg-yellow-50 border-2` | Light style |
| AllPricing, MotorPricing | `bg-gray-900 text-white hover:bg-gray-800` | Dark style |

### 2. Form Input Styling Inconsistenties

#### Input Style Variations
| Component | Style Pattern | Border | Background |
|-----------|--------------|--------|------------|
| ContactFormSection | `px-4 sm:px-5 py-3 sm:py-4` | `border-2 border-gray-200` | `bg-gray-50 focus:bg-white` |
| BookingFormSection | `px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5` | `border border-gray-300` | `bg-white` |
| LessenAanbiedingenSection | `px-4 sm:px-5 py-3 sm:py-4` | `border border-gray-300` | Default |

### 3. Card Padding Inconsistenties

#### Pricing Card Variations
| Component | Padding Pattern | Issue |
|-----------|----------------|-------|
| PricingSection | `p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12` | Extra XL breakpoint |
| AutoPricingSection | `p-7 sm:p-8 md:p-9 lg:p-10` | Unique sizing |
| AllPricingSection | `p-6 sm:p-8 md:p-10 lg:p-12` | Different base |
| ScooterPricingSection | `p-8 sm:p-10 md:p-12 lg:p-12` | Higher base |
| MotorPricingSection | `p-8 sm:p-10 md:p-12 lg:p-12` | Higher base |

#### Other Card Variations
| Component | Padding | Use Case |
|-----------|---------|----------|
| ContactIntroSection | `p-4 sm:p-5` | Small info cards |
| ContactFormSection | `p-6 sm:p-8 md:p-10` | Form container |
| BookingFormSection | `p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10` | Complex form |

### 4. Typography Inconsistenties

#### Hero H1 Inconsistencies
| Component | H1 Size Pattern | Font Weight | Issue |
|-----------|----------------|-------------|-------|
| Standard Heroes | `text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl` | `font-extrabold` | ✅ Standard |
| Homepage Hero | `text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl` | `font-bold` | Larger, different weight |
| Tips Hero | `text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl` | `font-black` | Much larger |
| Article Hero | `text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl` | `font-bold` | Different weight |

### 5. Animation Pattern Inconsistenties

#### Transition Duration Variations
| Pattern | Components | Usage |
|---------|------------|-------|
| `duration-300` | Most standard components | ✅ Standard |
| `duration-500` | Pricing sections, premium cards | Premium feel |
| `duration-700` | Tips components, hero sections | Premium transitions |
| `duration-1000` | Tips hero | Ultra premium |

#### Animation Delay Inconsistencies
| Component | Delay Step Size | Pattern |
|-----------|----------------|---------|
| Most components | `0.1s` steps | `${index * 0.1 + 0.2}s` |
| Some components | `0.15s` steps | `${index * 0.15 + 0.45}s` |
| Tips components | Various | Custom timing |

### 6. Scale Effects op Popular Cards

#### Popular Card Scaling Inconsistencies
| Component | Scale Pattern | Issue |
|-----------|---------------|-------|
| AutoPricingSection | `scale-[1.02]` | Subtle |
| AllPricingSection | `sm:scale-[1.02]` | Responsive |
| ScooterPricingSection | `scale-105 lg:scale-110` | More pronounced |
| MotorPricingSection | `scale-105 lg:scale-110` | More pronounced |
| PricingSection | `sm:scale-[1.02]` | Responsive |

### 7. Shadow Inconsistenties

#### Shadow Usage Patterns
| Component | Shadow Pattern | Hover State |
|-----------|----------------|-------------|
| Standard cards | `shadow-lg` | `hover:shadow-xl` |
| Premium cards | `shadow-xl` | `hover:shadow-2xl` |
| Pricing cards (some) | `shadow-xl shadow-yellow-600/20` | Special effects |

## Prioriteit voor Oplossen

### Hoge Prioriteit (Gebruikers-impact)
1. **Button padding inconsistenties** - Direct zichtbaar
2. **Form input styling** - UX probleem 
3. **Card padding variaties** - Layout inconsistentie

### Gemiddelde Prioriteit
4. **Typography weight inconsistenties** - Branding impact
5. **Scale effects op popular cards** - Visual hierarchy
6. **Shadow inconsistenties** - Design polish

### Lage Prioriteit
7. **Animation timing differences** - Performance/feel
8. **Transition duration variations** - Subtle UX

## Aanbevolen Standaardisatie

### Standaard Button Pattern
```css
/* Primary Button */
px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
rounded-xl
bg-yellow-600 hover:bg-yellow-700
text-gray-900 font-bold
text-sm sm:text-base
shadow-lg hover:shadow-xl

/* Secondary Button */
px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
rounded-xl
bg-gray-900 hover:bg-gray-800
text-white font-bold
text-sm sm:text-base
shadow-lg hover:shadow-xl
```

### Standaard Form Input Pattern
```css
px-4 sm:px-5 py-3 sm:py-4
border-2 border-gray-200
rounded-xl
focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600
bg-gray-50 focus:bg-white
text-sm sm:text-base
transition-all duration-200
```

### Standaard Card Padding Pattern
```css
/* Standard Cards */
p-6 sm:p-8 md:p-10 lg:p-12

/* Small Cards */
p-4 sm:p-5

/* Info Cards */
p-5 sm:p-6 md:p-8
```

## Implementatie Strategie

1. **Component Library Setup** - Basis components maken
2. **Gradual Migration** - Per component type
3. **Documentation Update** - Standards bijwerken
4. **Automated Testing** - Consistency checks

## Status: ✅ Audit Voltooid
- **65+ componenten** geanalyseerd  
- **7 hoofdcategorieën** inconsistenties geïdentificeerd
- **Implementatie roadmap** gedefinieerd
- **Prioritering** vastgesteld

