// ============================================================
// SEED DATA — Physique-Chimie Terminale Spécialité
// Basé sur les thèmes du programme et les annales Vecteur Bac
// ============================================================

export const physChimChapters = [
  // CHIMIE
  { name: 'Acides et bases', slug: 'acides-bases', sort_order: 1 },
  { name: 'Spectroscopie (IR, UV, RMN)', slug: 'spectroscopie', sort_order: 2 },
  { name: 'Synthèse organique', slug: 'synthese-organique', sort_order: 3 },
  { name: 'Cinétique chimique', slug: 'cinetique', sort_order: 4 },
  { name: 'Titrages', slug: 'titrages', sort_order: 5 },
  { name: 'Piles et électrolyse', slug: 'piles-electrolyse', sort_order: 6 },
  { name: 'Loi de Beer-Lambert', slug: 'beer-lambert', sort_order: 7 },
  { name: 'Mécanismes réactionnels', slug: 'mecanismes-reactionnels', sort_order: 8 },
  // PHYSIQUE
  { name: 'Mouvements et champs', slug: 'mouvements-champs', sort_order: 9 },
  { name: 'Satellites et Kepler', slug: 'satellites-kepler', sort_order: 10 },
  { name: 'Ondes mécaniques et lumineuses', slug: 'ondes', sort_order: 11 },
  { name: 'Diffraction et interférences', slug: 'diffraction-interferences', sort_order: 12 },
  { name: 'Effet Doppler', slug: 'doppler', sort_order: 13 },
  { name: 'Lunette astronomique', slug: 'lunette-astronomique', sort_order: 14 },
  { name: 'Thermodynamique', slug: 'thermodynamique', sort_order: 15 },
  { name: 'Circuits RC', slug: 'circuits-rc', sort_order: 16 },
  { name: 'Nucléaire', slug: 'nucleaire', sort_order: 17 },
  { name: 'Fluides', slug: 'fluides', sort_order: 18 },
  { name: 'Effet photoélectrique', slug: 'effet-photoelectrique', sort_order: 19 },
]

// Annales métadonnées — indexées depuis Vecteur Bac
export const annalesData = [
  // 2025
  { title: 'Un emballage intelligent au rayon poissonnerie', year: 2025, session: 'metropole', chapter_slug: 'spectroscopie', level: 'terminale' as const },
  { title: 'Datation d\'une roche', year: 2025, session: 'metropole', chapter_slug: 'nucleaire', level: 'terminale' as const },
  { title: 'Viscosimètre à chute de bille', year: 2025, session: 'metropole', chapter_slug: 'fluides', level: 'terminale' as const },
  { title: 'Mesure de l\'épaisseur d\'un film alimentaire', year: 2025, session: 'metropole', chapter_slug: 'diffraction-interferences', level: 'terminale' as const },
  { title: 'Eau de Quinton', year: 2025, session: 'metropole', chapter_slug: 'titrages', level: 'terminale' as const },
  { title: 'Un parfum de rose', year: 2025, session: 'metropole', chapter_slug: 'synthese-organique', level: 'terminale' as const },
  { title: 'Autour du géranium Rosat', year: 2025, session: 'centres_etrangers', chapter_slug: 'synthese-organique', level: 'terminale' as const },
  { title: 'Radar pédagogique et panneau solaire', year: 2025, session: 'centres_etrangers', chapter_slug: 'effet-photoelectrique', level: 'terminale' as const },
  { title: 'La face cachée de la Lune', year: 2025, session: 'centres_etrangers', chapter_slug: 'satellites-kepler', level: 'terminale' as const },
  { title: 'Étude d\'un vernis à ongles', year: 2025, session: 'amerique_nord', chapter_slug: 'spectroscopie', level: 'terminale' as const },
  { title: 'Combustible MOX et déchets radioactifs', year: 2025, session: 'amerique_nord', chapter_slug: 'nucleaire', level: 'terminale' as const },
  { title: 'Mostiglass, vitrage moustiquaire', year: 2025, session: 'amerique_nord', chapter_slug: 'thermodynamique', level: 'terminale' as const },
  { title: 'Batteries au lithium', year: 2025, session: 'asie', chapter_slug: 'piles-electrolyse', level: 'terminale' as const },
  { title: 'Pollution ammoniacale', year: 2025, session: 'asie', chapter_slug: 'acides-bases', level: 'terminale' as const },
  { title: 'Arôme de poire', year: 2025, session: 'asie', chapter_slug: 'synthese-organique', level: 'terminale' as const },
  { title: 'Autour de la glace', year: 2025, session: 'polynesie', chapter_slug: 'thermodynamique', level: 'terminale' as const },
  { title: 'Le mölky', year: 2025, session: 'polynesie', chapter_slug: 'mouvements-champs', level: 'terminale' as const },
  { title: 'Performances des bolomètres de Planck', year: 2025, session: 'polynesie', chapter_slug: 'ondes', level: 'terminale' as const },
  // 2024
  { title: 'Vers le bleu de thymol', year: 2024, session: 'metropole', chapter_slug: 'acides-bases', level: 'terminale' as const },
  { title: 'Observation d\'un avion en vol', year: 2024, session: 'metropole', chapter_slug: 'lunette-astronomique', level: 'terminale' as const },
  { title: 'Accéléromètre d\'un mobile', year: 2024, session: 'metropole', chapter_slug: 'mouvements-champs', level: 'terminale' as const },
  { title: 'Autour du basket-ball', year: 2024, session: 'metropole', chapter_slug: 'mouvements-champs', level: 'terminale' as const },
  { title: 'Un champignon parfumé', year: 2024, session: 'metropole', chapter_slug: 'synthese-organique', level: 'terminale' as const },
  { title: 'Batterie Lithium-Soufre', year: 2024, session: 'metropole', chapter_slug: 'piles-electrolyse', level: 'terminale' as const },
  { title: 'Observation interférométrie satellitaire', year: 2024, session: 'amerique_nord', chapter_slug: 'diffraction-interferences', level: 'terminale' as const },
  { title: 'Des batteries à flux redox', year: 2024, session: 'amerique_nord', chapter_slug: 'piles-electrolyse', level: 'terminale' as const },
  { title: 'Le gallate de propyle', year: 2024, session: 'amerique_nord', chapter_slug: 'mecanismes-reactionnels', level: 'terminale' as const },
  { title: 'L\'arôme d\'ananas', year: 2024, session: 'centres_etrangers', chapter_slug: 'synthese-organique', level: 'terminale' as const },
  { title: 'Sécurité acoustique', year: 2024, session: 'centres_etrangers', chapter_slug: 'ondes', level: 'terminale' as const },
  { title: 'Champ de pesanteur lunaire', year: 2024, session: 'centres_etrangers', chapter_slug: 'satellites-kepler', level: 'terminale' as const },
  { title: 'Coloration capillaire', year: 2024, session: 'polynesie', chapter_slug: 'beer-lambert', level: 'terminale' as const },
  { title: 'La protonthérapie sauve la vue', year: 2024, session: 'polynesie', chapter_slug: 'nucleaire', level: 'terminale' as const },
  { title: 'Certification d\'un vin', year: 2024, session: 'liban', chapter_slug: 'titrages', level: 'terminale' as const },
  { title: 'L\'homme canon', year: 2024, session: 'liban', chapter_slug: 'mouvements-champs', level: 'terminale' as const },
  { title: 'L\'acide citrique produit ménager', year: 2024, session: 'metropole', chapter_slug: 'acides-bases', level: 'terminale' as const },
  { title: 'La découverte de Neptune', year: 2024, session: 'metropole', chapter_slug: 'satellites-kepler', level: 'terminale' as const },
  // 2023
  { title: 'Découverte de Saturne', year: 2023, session: 'metropole', chapter_slug: 'lunette-astronomique', level: 'terminale' as const },
  { title: 'Synthèse de l\'arôme de banane', year: 2023, session: 'metropole', chapter_slug: 'synthese-organique', level: 'terminale' as const },
  { title: 'Formulation de l\'aspirine', year: 2023, session: 'metropole', chapter_slug: 'acides-bases', level: 'terminale' as const },
  { title: 'Vitamine C dans les kiwis', year: 2023, session: 'metropole', chapter_slug: 'titrages', level: 'terminale' as const },
  { title: 'Autour de Saturne', year: 2023, session: 'asie', chapter_slug: 'satellites-kepler', level: 'terminale' as const },
  { title: 'Contrôle de l\'ordre d\'une réaction', year: 2023, session: 'asie', chapter_slug: 'cinetique', level: 'terminale' as const },
  { title: 'Plongeon de haut vol', year: 2023, session: 'centres_etrangers', chapter_slug: 'mouvements-champs', level: 'terminale' as const },
  { title: 'L\'érythrosine', year: 2023, session: 'centres_etrangers', chapter_slug: 'beer-lambert', level: 'terminale' as const },
]

// ============================================================
// QUIZ QCM — Par thème, basés sur le programme officiel
// ============================================================

export interface QuizQuestionData {
  chapter_slug: string
  question: string
  options: string[]
  correct_answer: number
  explanation: string
  difficulty: number // 1-3
}

export const quizQuestions: QuizQuestionData[] = [
  // ==================== ACIDES ET BASES ====================
  {
    chapter_slug: 'acides-bases',
    question: 'Un acide au sens de Brønsted est une espèce chimique capable de :',
    options: ['Capter un proton H⁺', 'Céder un proton H⁺', 'Céder un électron', 'Capter un électron'],
    correct_answer: 1,
    explanation: 'Un acide de Brønsted est un donneur de proton H⁺. Sa base conjuguée est l\'espèce formée après la perte du proton.',
    difficulty: 1,
  },
  {
    chapter_slug: 'acides-bases',
    question: 'Le pH d\'une solution aqueuse d\'acide chlorhydrique de concentration C = 1,0 × 10⁻³ mol/L est environ :',
    options: ['1', '2', '3', '4'],
    correct_answer: 2,
    explanation: 'HCl est un acide fort, totalement dissocié. [H₃O⁺] = C = 10⁻³ mol/L. pH = -log(10⁻³) = 3.',
    difficulty: 1,
  },
  {
    chapter_slug: 'acides-bases',
    question: 'Le pKa du couple CH₃COOH / CH₃COO⁻ vaut 4,8. À pH = 4,8, quelle affirmation est correcte ?',
    options: [
      'La forme acide est majoritaire',
      'La forme basique est majoritaire',
      'Les concentrations des formes acide et basique sont égales',
      'L\'acide est totalement dissocié',
    ],
    correct_answer: 2,
    explanation: 'Quand pH = pKa, on a [CH₃COOH] = [CH₃COO⁻]. C\'est le point demi-équivalence d\'un titrage.',
    difficulty: 2,
  },
  {
    chapter_slug: 'acides-bases',
    question: 'Lors d\'un titrage acido-basique, l\'équivalence est atteinte quand :',
    options: [
      'Le pH vaut 7',
      'Les réactifs ont été introduits dans les proportions stœchiométriques',
      'Le volume versé est le double du volume initial',
      'La solution est neutre',
    ],
    correct_answer: 1,
    explanation: 'À l\'équivalence, les réactifs (acide et base) ont été introduits en proportions stœchiométriques : n(acide) = n(base).',
    difficulty: 1,
  },
  {
    chapter_slug: 'acides-bases',
    question: 'On dose 20 mL d\'acide éthanoïque à 0,10 mol/L par de la soude à 0,10 mol/L. Le volume équivalent est :',
    options: ['10 mL', '20 mL', '40 mL', '100 mL'],
    correct_answer: 1,
    explanation: 'À l\'équivalence : CₐVₐ = CᵦVᵦ, donc Vᵦ = CₐVₐ/Cᵦ = (0,10 × 20)/0,10 = 20 mL.',
    difficulty: 2,
  },
  {
    chapter_slug: 'acides-bases',
    question: 'Le produit ionique de l\'eau Ke vaut 10⁻¹⁴ à 25°C. Cela signifie que :',
    options: [
      '[H₃O⁺] × [HO⁻] = 10⁻¹⁴ dans toute solution aqueuse à 25°C',
      '[H₃O⁺] = [HO⁻] = 10⁻⁷ dans toute solution',
      'Le pH de l\'eau pure est toujours 7',
      '[H₃O⁺] = 10⁻¹⁴ dans l\'eau pure',
    ],
    correct_answer: 0,
    explanation: 'Ke = [H₃O⁺] × [HO⁻] = 10⁻¹⁴ à 25°C. Cette relation est valable dans toute solution aqueuse, pas seulement l\'eau pure.',
    difficulty: 2,
  },
  {
    chapter_slug: 'acides-bases',
    question: 'Une solution tampon est une solution dont le pH :',
    options: [
      'Vaut exactement 7',
      'Varie peu par ajout modéré d\'acide ou de base',
      'Est toujours inférieur à 7',
      'Dépend uniquement de la température',
    ],
    correct_answer: 1,
    explanation: 'Une solution tampon résiste aux variations de pH lors d\'un ajout modéré d\'acide, de base ou d\'eau. Elle contient un acide faible et sa base conjuguée en quantités voisines.',
    difficulty: 2,
  },

  // ==================== SYNTHÈSE ORGANIQUE ====================
  {
    chapter_slug: 'synthese-organique',
    question: 'L\'estérification est la réaction entre :',
    options: [
      'Un acide carboxylique et un alcool',
      'Un acide carboxylique et une amine',
      'Un alcool et une amine',
      'Deux acides carboxyliques',
    ],
    correct_answer: 0,
    explanation: 'L\'estérification est la réaction entre un acide carboxylique (R-COOH) et un alcool (R\'-OH) pour former un ester (R-COO-R\') et de l\'eau.',
    difficulty: 1,
  },
  {
    chapter_slug: 'synthese-organique',
    question: 'L\'estérification est une réaction :',
    options: ['Totale et rapide', 'Totale et lente', 'Limitée et lente', 'Limitée et rapide'],
    correct_answer: 2,
    explanation: 'L\'estérification est une réaction lente (nécessite un catalyseur ou chauffage) et limitée (elle n\'est pas totale, il y a un équilibre chimique).',
    difficulty: 1,
  },
  {
    chapter_slug: 'synthese-organique',
    question: 'Le chauffage à reflux permet de :',
    options: [
      'Accélérer la réaction sans perdre de matière',
      'Augmenter le rendement de la réaction',
      'Refroidir le milieu réactionnel',
      'Éliminer l\'eau formée',
    ],
    correct_answer: 0,
    explanation: 'Le chauffage à reflux augmente la température (accélère la réaction) tout en condensant les vapeurs pour les réinjecter dans le milieu (pas de perte de matière).',
    difficulty: 1,
  },
  {
    chapter_slug: 'synthese-organique',
    question: 'Un catalyseur est une espèce chimique qui :',
    options: [
      'Déplace l\'équilibre chimique',
      'Accélère la réaction sans être consommée',
      'Augmente le rendement de la réaction',
      'Modifie les produits formés',
    ],
    correct_answer: 1,
    explanation: 'Un catalyseur accélère une réaction chimique sans être consommé et sans modifier l\'état d\'équilibre. Il abaisse l\'énergie d\'activation.',
    difficulty: 1,
  },
  {
    chapter_slug: 'synthese-organique',
    question: 'Le groupe caractéristique -COOH est celui d\'un :',
    options: ['Alcool', 'Aldéhyde', 'Acide carboxylique', 'Ester'],
    correct_answer: 2,
    explanation: 'Le groupe carboxyle -COOH caractérise les acides carboxyliques. Exemples : acide éthanoïque CH₃COOH, acide benzoïque C₆H₅COOH.',
    difficulty: 1,
  },

  // ==================== CINÉTIQUE ====================
  {
    chapter_slug: 'cinetique',
    question: 'Le temps de demi-réaction t₁/₂ est la durée au bout de laquelle :',
    options: [
      'La réaction est terminée',
      'L\'avancement a atteint la moitié de sa valeur finale',
      'La moitié du réactif limitant a disparu',
      'La vitesse de réaction est divisée par 2',
    ],
    correct_answer: 1,
    explanation: 't₁/₂ est la durée nécessaire pour que l\'avancement atteigne la moitié de sa valeur finale : x(t₁/₂) = xf/2.',
    difficulty: 1,
  },
  {
    chapter_slug: 'cinetique',
    question: 'La vitesse volumique de réaction s\'exprime en :',
    options: ['mol/L', 'mol/s', 'mol/(L·s)', 'L/s'],
    correct_answer: 2,
    explanation: 'La vitesse volumique v = (1/V) × dx/dt s\'exprime en mol/(L·s) ou mol·L⁻¹·s⁻¹.',
    difficulty: 1,
  },
  {
    chapter_slug: 'cinetique',
    question: 'Pour augmenter la vitesse d\'une réaction, on peut :',
    options: [
      'Diminuer la température',
      'Diluer les réactifs',
      'Augmenter la concentration des réactifs',
      'Diminuer la pression',
    ],
    correct_answer: 2,
    explanation: 'Augmenter la concentration des réactifs, augmenter la température, ou ajouter un catalyseur sont trois facteurs cinétiques qui accélèrent une réaction.',
    difficulty: 1,
  },

  // ==================== TITRAGES ====================
  {
    chapter_slug: 'titrages',
    question: 'Lors d\'un titrage conductimétrique, on mesure :',
    options: [
      'Le pH de la solution',
      'La conductance ou la conductivité de la solution',
      'La température de la solution',
      'L\'absorbance de la solution',
    ],
    correct_answer: 1,
    explanation: 'Un titrage conductimétrique repose sur la mesure de la conductivité σ de la solution, qui dépend de la nature et de la concentration des ions en solution.',
    difficulty: 1,
  },
  {
    chapter_slug: 'titrages',
    question: 'Pour qu\'un titrage soit exploitable, la réaction support doit être :',
    options: [
      'Lente et totale',
      'Rapide, totale et unique',
      'Rapide et limitée',
      'Lente et limitée',
    ],
    correct_answer: 1,
    explanation: 'La réaction support de titrage doit être rapide (résultat instantané), totale (réaction complète) et unique (pas de réaction parasite).',
    difficulty: 2,
  },

  // ==================== MOUVEMENTS ET CHAMPS ====================
  {
    chapter_slug: 'mouvements-champs',
    question: 'La deuxième loi de Newton s\'écrit :',
    options: ['F = ma', 'ΣF⃗ = m × a⃗', 'F = mv', 'ΣF⃗ = m × v⃗'],
    correct_answer: 1,
    explanation: 'La 2ème loi de Newton (PFD) : la somme des forces extérieures est égale au produit de la masse par le vecteur accélération : ΣF⃗ₑₓₜ = m × a⃗.',
    difficulty: 1,
  },
  {
    chapter_slug: 'mouvements-champs',
    question: 'Un projectile lancé dans le champ de pesanteur terrestre (sans frottements) a une trajectoire :',
    options: ['Rectiligne', 'Circulaire', 'Parabolique', 'Elliptique'],
    correct_answer: 2,
    explanation: 'En l\'absence de frottements, soumis uniquement à son poids P⃗ = mg⃗, le projectile a une trajectoire parabolique.',
    difficulty: 1,
  },
  {
    chapter_slug: 'mouvements-champs',
    question: 'Dans un champ de pesanteur uniforme, le vecteur accélération d\'un projectile :',
    options: [
      'Est nul',
      'Est constant, vertical et dirigé vers le bas',
      'Varie au cours du temps',
      'Est dirigé dans le sens du mouvement',
    ],
    correct_answer: 1,
    explanation: 'a⃗ = g⃗ : l\'accélération est constante, verticale, orientée vers le bas, de norme g ≈ 9,81 m/s².',
    difficulty: 1,
  },
  {
    chapter_slug: 'mouvements-champs',
    question: 'L\'énergie mécanique d\'un système se conserve si :',
    options: [
      'Le système est soumis à des frottements',
      'Seules des forces conservatives travaillent',
      'La vitesse est constante',
      'L\'altitude est constante',
    ],
    correct_answer: 1,
    explanation: 'L\'énergie mécanique Em = Ec + Ep se conserve lorsque seules des forces conservatives (poids, force élastique) travaillent, c\'est-à-dire en l\'absence de frottements.',
    difficulty: 2,
  },

  // ==================== SATELLITES ET KEPLER ====================
  {
    chapter_slug: 'satellites-kepler',
    question: 'La troisième loi de Kepler relie :',
    options: [
      'La période de révolution et le rayon de l\'orbite',
      'La vitesse et l\'altitude du satellite',
      'La masse du satellite et sa période',
      'La force gravitationnelle et la distance',
    ],
    correct_answer: 0,
    explanation: 'La 3ème loi de Kepler : T²/a³ = constante (T : période de révolution, a : demi-grand axe de l\'orbite).',
    difficulty: 1,
  },
  {
    chapter_slug: 'satellites-kepler',
    question: 'Un satellite géostationnaire :',
    options: [
      'Tourne autour de la Terre en 12 heures',
      'Se trouve dans le plan équatorial et a une période de 24 heures',
      'Peut être placé au-dessus de n\'importe quel point de la Terre',
      'A une orbite elliptique très allongée',
    ],
    correct_answer: 1,
    explanation: 'Un satellite géostationnaire est en orbite circulaire dans le plan équatorial avec T = 24h. Il paraît immobile vu depuis la Terre.',
    difficulty: 2,
  },
  {
    chapter_slug: 'satellites-kepler',
    question: 'La force gravitationnelle entre deux corps de masses m₁ et m₂ séparés par une distance d vaut :',
    options: [
      'F = G × m₁ × m₂ / d',
      'F = G × m₁ × m₂ / d²',
      'F = G × (m₁ + m₂) / d²',
      'F = G × m₁ × m₂ × d²',
    ],
    correct_answer: 1,
    explanation: 'Loi de gravitation universelle de Newton : F = G × m₁ × m₂ / d², avec G = 6,67 × 10⁻¹¹ N·m²·kg⁻².',
    difficulty: 1,
  },

  // ==================== ONDES ====================
  {
    chapter_slug: 'ondes',
    question: 'La relation entre la célérité v, la fréquence f et la longueur d\'onde λ est :',
    options: ['v = f/λ', 'v = f × λ', 'v = λ/f', 'f = v × λ'],
    correct_answer: 1,
    explanation: 'La relation fondamentale des ondes : v = f × λ (ou λ = v/f, ou f = v/λ).',
    difficulty: 1,
  },
  {
    chapter_slug: 'ondes',
    question: 'Le niveau d\'intensité sonore L (en dB) est lié à l\'intensité I par :',
    options: ['L = 10 × log(I/I₀)', 'L = 20 × log(I/I₀)', 'L = I/I₀', 'L = ln(I/I₀)'],
    correct_answer: 0,
    explanation: 'L = 10 × log(I/I₀), avec I₀ = 10⁻¹² W/m² (seuil d\'audibilité). L s\'exprime en décibels (dB).',
    difficulty: 2,
  },
  {
    chapter_slug: 'ondes',
    question: 'Une onde mécanique ne peut pas se propager dans :',
    options: ['L\'eau', 'L\'air', 'Le vide', 'Un solide'],
    correct_answer: 2,
    explanation: 'Une onde mécanique nécessite un milieu matériel pour se propager. Elle ne peut pas se propager dans le vide (contrairement aux ondes électromagnétiques).',
    difficulty: 1,
  },

  // ==================== DIFFRACTION / INTERFÉRENCES ====================
  {
    chapter_slug: 'diffraction-interferences',
    question: 'Le phénomène de diffraction est d\'autant plus marqué que :',
    options: [
      'L\'ouverture est grande devant la longueur d\'onde',
      'L\'ouverture est petite devant la longueur d\'onde',
      'La longueur d\'onde est petite devant l\'ouverture',
      'La fréquence est élevée',
    ],
    correct_answer: 1,
    explanation: 'La diffraction est significative quand la taille de l\'obstacle ou de l\'ouverture (a) est du même ordre de grandeur ou inférieure à la longueur d\'onde (λ). L\'angle de diffraction θ ≈ λ/a.',
    difficulty: 2,
  },
  {
    chapter_slug: 'diffraction-interferences',
    question: 'Dans l\'expérience des fentes d\'Young, l\'interfrange i dépend de :',
    options: [
      'La largeur des fentes uniquement',
      'La distance entre les fentes, la longueur d\'onde et la distance à l\'écran',
      'La couleur de l\'écran',
      'L\'intensité lumineuse de la source',
    ],
    correct_answer: 1,
    explanation: 'L\'interfrange i = λD/a, où λ est la longueur d\'onde, D la distance fentes-écran, et a la distance entre les deux fentes.',
    difficulty: 2,
  },

  // ==================== THERMODYNAMIQUE ====================
  {
    chapter_slug: 'thermodynamique',
    question: 'L\'énergie interne d\'un système thermodynamique :',
    options: [
      'Ne dépend que de la température',
      'Est la somme des énergies cinétiques et potentielles microscopiques',
      'Est toujours positive',
      'Ne peut que diminuer',
    ],
    correct_answer: 1,
    explanation: 'L\'énergie interne U est la somme des énergies cinétiques (agitation thermique) et potentielles (interactions) des particules à l\'échelle microscopique.',
    difficulty: 2,
  },
  {
    chapter_slug: 'thermodynamique',
    question: 'Le premier principe de la thermodynamique s\'écrit :',
    options: ['ΔU = W + Q', 'ΔU = W - Q', 'ΔU = W × Q', 'ΔU = Q/W'],
    correct_answer: 0,
    explanation: 'Premier principe : ΔU = W + Q. La variation d\'énergie interne est la somme du travail W et du transfert thermique Q reçus par le système.',
    difficulty: 2,
  },
  {
    chapter_slug: 'thermodynamique',
    question: 'La capacité thermique massique c s\'exprime en :',
    options: ['J', 'J/kg', 'J/(kg·°C)', 'kg·°C/J'],
    correct_answer: 2,
    explanation: 'c s\'exprime en J/(kg·K) ou J/(kg·°C). Q = m × c × ΔT, où Q est l\'énergie thermique, m la masse et ΔT la variation de température.',
    difficulty: 1,
  },

  // ==================== NUCLÉAIRE ====================
  {
    chapter_slug: 'nucleaire',
    question: 'Lors d\'une désintégration β⁻, le noyau émet :',
    options: ['Un proton', 'Un électron', 'Un noyau d\'hélium', 'Un photon gamma'],
    correct_answer: 1,
    explanation: 'Lors d\'une désintégration β⁻, un neutron se transforme en proton + électron + antineutrino. L\'électron est éjecté du noyau.',
    difficulty: 1,
  },
  {
    chapter_slug: 'nucleaire',
    question: 'La demi-vie t₁/₂ d\'un noyau radioactif est la durée au bout de laquelle :',
    options: [
      'Tous les noyaux se sont désintégrés',
      'La moitié des noyaux présents initialement se sont désintégrés',
      'L\'activité est nulle',
      'La masse de l\'échantillon est divisée par 4',
    ],
    correct_answer: 1,
    explanation: 'La demi-vie t₁/₂ est la durée nécessaire pour que la moitié des noyaux radioactifs initialement présents se soient désintégrés. N(t₁/₂) = N₀/2.',
    difficulty: 1,
  },
  {
    chapter_slug: 'nucleaire',
    question: 'Le défaut de masse Δm d\'un noyau :',
    options: [
      'Est toujours nul',
      'Est la différence entre la masse des nucléons séparés et la masse du noyau',
      'Est négatif pour les noyaux stables',
      'N\'a pas de rapport avec l\'énergie de liaison',
    ],
    correct_answer: 1,
    explanation: 'Δm = Z×mp + (A-Z)×mn - m(noyau). Ce défaut de masse est toujours positif pour un noyau lié et correspond à l\'énergie de liaison : El = Δm × c².',
    difficulty: 2,
  },

  // ==================== PILES ET ÉLECTROLYSE ====================
  {
    chapter_slug: 'piles-electrolyse',
    question: 'Dans une pile, la réaction qui se produit à l\'anode est :',
    options: ['Une réduction', 'Une oxydation', 'Une précipitation', 'Une neutralisation'],
    correct_answer: 1,
    explanation: 'À l\'anode, c\'est l\'oxydation qui a lieu (perte d\'électrons). À la cathode, c\'est la réduction (gain d\'électrons). Moyen mnémotechnique : AnOx (Anode-Oxydation).',
    difficulty: 1,
  },
  {
    chapter_slug: 'piles-electrolyse',
    question: 'L\'électrolyse est une transformation :',
    options: ['Spontanée', 'Forcée par un générateur', 'Exothermique', 'Réversible'],
    correct_answer: 1,
    explanation: 'L\'électrolyse est une transformation forcée (non spontanée) qui nécessite un apport d\'énergie électrique via un générateur.',
    difficulty: 1,
  },

  // ==================== BEER-LAMBERT ====================
  {
    chapter_slug: 'beer-lambert',
    question: 'La loi de Beer-Lambert s\'écrit :',
    options: ['A = ε × ℓ × c', 'A = ε / (ℓ × c)', 'A = log(ℓ × c)', 'A = ε + ℓ + c'],
    correct_answer: 0,
    explanation: 'A = ε × ℓ × c, avec A l\'absorbance (sans unité), ε le coefficient d\'absorption molaire (L·mol⁻¹·cm⁻¹), ℓ la longueur de la cuve (cm), c la concentration (mol/L).',
    difficulty: 1,
  },
  {
    chapter_slug: 'beer-lambert',
    question: 'La loi de Beer-Lambert est valable :',
    options: [
      'Pour toutes les concentrations',
      'Uniquement pour les solutions diluées et à une longueur d\'onde donnée',
      'Uniquement dans le domaine UV',
      'Pour les solutions saturées',
    ],
    correct_answer: 1,
    explanation: 'La loi de Beer-Lambert n\'est valable que pour des solutions diluées (A < 2 environ) et pour une longueur d\'onde fixée (monochromatique).',
    difficulty: 2,
  },

  // ==================== CIRCUITS RC ====================
  {
    chapter_slug: 'circuits-rc',
    question: 'La constante de temps τ d\'un circuit RC vaut :',
    options: ['R + C', 'R / C', 'R × C', 'C / R'],
    correct_answer: 2,
    explanation: 'τ = R × C. Si R en ohms et C en farads, τ est en secondes. τ caractérise la rapidité de charge/décharge du condensateur.',
    difficulty: 1,
  },
  {
    chapter_slug: 'circuits-rc',
    question: 'L\'énergie stockée dans un condensateur de capacité C chargé sous une tension U est :',
    options: ['E = CU', 'E = ½CU', 'E = ½CU²', 'E = C²U'],
    correct_answer: 2,
    explanation: 'E = ½CU² = ½Q²/C = ½QU, avec Q = CU la charge du condensateur.',
    difficulty: 2,
  },

  // ==================== DOPPLER ====================
  {
    chapter_slug: 'doppler',
    question: 'L\'effet Doppler se manifeste par un changement de :',
    options: [
      'Amplitude de l\'onde reçue',
      'Fréquence de l\'onde reçue lorsqu\'il y a mouvement relatif',
      'Vitesse de propagation de l\'onde',
      'Polarisation de l\'onde',
    ],
    correct_answer: 1,
    explanation: 'L\'effet Doppler : lorsqu\'il y a un mouvement relatif entre la source et le récepteur, la fréquence perçue diffère de la fréquence émise.',
    difficulty: 1,
  },
  {
    chapter_slug: 'doppler',
    question: 'Un véhicule s\'approche en émettant un son. L\'observateur perçoit un son :',
    options: [
      'Plus aigu que le son émis',
      'Plus grave que le son émis',
      'De même fréquence que le son émis',
      'Inaudible',
    ],
    correct_answer: 0,
    explanation: 'Quand la source se rapproche, la fréquence perçue est plus élevée (son plus aigu). Quand elle s\'éloigne, la fréquence est plus basse (son plus grave).',
    difficulty: 1,
  },

  // ==================== FLUIDES ====================
  {
    chapter_slug: 'fluides',
    question: 'La relation de Bernoulli concerne les écoulements :',
    options: [
      'Turbulents uniquement',
      'D\'un fluide parfait incompressible en régime permanent',
      'De tous les fluides',
      'Des gaz uniquement',
    ],
    correct_answer: 1,
    explanation: 'La relation de Bernoulli s\'applique à un fluide parfait (sans viscosité), incompressible, en écoulement permanent (stationnaire).',
    difficulty: 2,
  },
  {
    chapter_slug: 'fluides',
    question: 'La pression dans un fluide statique augmente avec :',
    options: ['L\'altitude', 'La profondeur', 'La température', 'La surface'],
    correct_answer: 1,
    explanation: 'P = P₀ + ρgh. La pression augmente avec la profondeur h (ou diminue avec l\'altitude). ρ est la masse volumique du fluide et g l\'accélération de la pesanteur.',
    difficulty: 1,
  },

  // ==================== EFFET PHOTOÉLECTRIQUE ====================
  {
    chapter_slug: 'effet-photoelectrique',
    question: 'L\'énergie d\'un photon de fréquence ν est donnée par :',
    options: ['E = hν', 'E = h/ν', 'E = mc²', 'E = ½mv²'],
    correct_answer: 0,
    explanation: 'E = hν = hc/λ, avec h = 6,63 × 10⁻³⁴ J·s la constante de Planck, ν la fréquence et λ la longueur d\'onde.',
    difficulty: 1,
  },
  {
    chapter_slug: 'effet-photoelectrique',
    question: 'L\'effet photoélectrique ne se produit que si :',
    options: [
      'L\'intensité lumineuse est suffisante',
      'L\'énergie du photon est supérieure au travail d\'extraction',
      'La lumière est blanche',
      'La plaque métallique est chauffée',
    ],
    correct_answer: 1,
    explanation: 'L\'effet photoélectrique nécessite que l\'énergie du photon (hν) soit supérieure au travail d\'extraction W₀ du métal : hν ≥ W₀. C\'est une condition sur la fréquence, pas sur l\'intensité.',
    difficulty: 2,
  },
]
