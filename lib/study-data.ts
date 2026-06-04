import { Topic } from './quiz-data';

export interface StudyNote {
  topic: Topic;
  keyFeatures: string[];
  epithelium?: string;
  supportingStructures?: string;
  identificationTips: string[];
  commonMistakes: string[];
  mnemonics?: string;
  layers?: { name: string; description: string }[];
}

export const STUDY_NOTES: Record<Topic, StudyNote> = {
  artery: {
    topic: 'artery',
    keyFeatures: [
      'Thick wall composed of three distinct tunica layers',
      'Internal elastic lamina (pink wavy streak on H&E)',
      'Smooth muscle cell nuclei frequent in tunica media',
      'Collagen fibres and connective tissue cell nuclei in tunica adventitia',
      'More compact and rounded cross-section than adjacent vein',
    ],
    layers: [
      { name: 'Tunica Intima', description: 'Innermost layer; single endothelial cell layer + subendothelial connective tissue + internal elastic lamina' },
      { name: 'Tunica Media', description: 'Middle layer; primarily smooth muscle + elastic fibres; THICK in arteries' },
      { name: 'Tunica Adventitia', description: 'Outermost layer; collagen + fibroblasts + vasa vasorum in large vessels' },
    ],
    identificationTips: [
      'Look for the pink wavy internal elastic lamina between intima and media',
      'Count the smooth muscle nuclei — arteries have many more than veins',
      'The wall-to-lumen ratio is high in arteries',
      'Cross-sections appear rounder and more regular than veins',
    ],
    commonMistakes: [
      'Confusing with a vein — compare the wall thickness and internal elastic lamina',
      'Missing the internal elastic lamina (it can be folded/wavy)',
      'Confusing tunica media smooth muscle with connective tissue',
    ],
    mnemonics: 'AMA — Artery: Media is Muscular and Active',
  },
  vein: {
    topic: 'vein',
    keyFeatures: [
      'Thin walls — tunica media is poorly developed with less smooth muscle',
      'Wider lumen relative to wall thickness',
      'Floppy and irregular cross-sectional shape',
      'May contain valves (folds of tunica intima)',
      'No prominent internal elastic lamina',
    ],
    identificationTips: [
      'Veins look "collapsed" or irregular — walls are too thin to maintain shape',
      'Low wall-to-lumen ratio',
      'Compare directly to adjacent artery on the slide',
      'Valves (if cut in section) look like folds projecting into the lumen',
    ],
    commonMistakes: [
      'Assuming the larger vessel is always the vein — compare wall thickness, not just size',
      'Mistaking a collapsed vein for a lymphatic vessel',
    ],
  },
  trachea: {
    topic: 'trachea',
    keyFeatures: [
      'Pseudostratified ciliated columnar epithelium (respiratory epithelium)',
      'Goblet cells within the epithelium',
      'C-shaped hyaline cartilage rings (open posteriorly)',
      'Trachealis smooth muscle spans the posterior gap',
      'Seromucous glands in the submucosa',
    ],
    epithelium: 'Pseudostratified ciliated columnar with goblet cells',
    supportingStructures: 'C-shaped hyaline cartilage rings',
    identificationTips: [
      'The C-shaped cartilage is the most distinctive feature at low power',
      'At high power, cilia and goblet cells confirm respiratory epithelium',
      'The posterior wall is cartilage-free with trachealis muscle',
    ],
    commonMistakes: [
      'Confusing with bronchus — bronchus has irregular cartilage plates, not complete C-rings',
      'Confusing with oesophagus — oesophagus has stratified squamous, not pseudostratified',
    ],
    mnemonics: 'TRACHEA: C-shaped Cartilage, Ciliated Cells, Goblet Glands',
  },
  oesophagus: {
    topic: 'oesophagus',
    keyFeatures: [
      'Stratified squamous epithelium (NON-keratinised)',
      'No villi or crypts',
      'Muscularis mucosae is smooth muscle',
      'Oesophageal glands proper in the submucosa (mucous glands)',
      'Muscularis externa: upper = skeletal, middle = mixed, lower = smooth',
    ],
    epithelium: 'Non-keratinised stratified squamous epithelium',
    identificationTips: [
      'Multiple layers of cells with flat cells at the surface = stratified squamous',
      'No cilia or cartilage (distinguishes from trachea)',
      'No villi (distinguishes from intestine)',
    ],
    commonMistakes: [
      'Confusing with trachea — remember: oesophagus = squamous, trachea = pseudostratified ciliated',
      'Confusing with vagina/cervix — clinical context helps; both have stratified squamous',
    ],
  },
  'thyroid-gland': {
    topic: 'thyroid-gland',
    keyFeatures: [
      'Follicles filled with pink homogeneous colloid (thyroglobulin)',
      'Follicular cells: cuboidal/columnar when active, flat when inactive',
      'Parafollicular (C) cells: large, pale, between follicles',
      'Thin capsule with septa dividing gland into lobules',
    ],
    identificationTips: [
      'The follicles filled with pink colloid are unique to the thyroid',
      'Active gland: tall follicular cells + scalloped colloid edge (resorption lacunae)',
      'Inactive gland: flat follicular cells + smooth, full follicles',
    ],
    commonMistakes: [
      'Confusing C cells with stromal fibroblasts — C cells are larger and more polygonal',
      'Forgetting that follicle cell height reflects activity level',
    ],
    mnemonics: 'COLLOID = thyroid; C cells make Calcitonin',
  },
  liver: {
    topic: 'liver',
    keyFeatures: [
      'Hepatic lobule: hexagonal unit centred on central vein',
      'Portal triads at periphery: portal vein branch + hepatic artery + bile duct',
      'Hepatocyte cords radiating from central vein',
      'Hepatic sinusoids between cords (lined by Kupffer cells)',
      'Space of Disse between hepatocytes and sinusoidal endothelium',
    ],
    identificationTips: [
      'Low power: identify the central vein (large, thin-walled) and portal triads',
      'Hepatocytes: large, polygonal cells with round central nuclei, abundant eosinophilic cytoplasm',
      'Kupffer cells: dark, irregular nuclei lining sinusoids',
    ],
    commonMistakes: [
      'Confusing central vein with portal vein — central vein is isolated, portal vein is part of a triad',
      'Forgetting the bile duct runs in the portal triad (bile flows OPPOSITE to blood)',
    ],
    mnemonics: 'Liver: Cords radiate from Central vein; Corner = portal triad with 3 structures',
  },
  kidney: {
    topic: 'kidney',
    keyFeatures: [
      'Renal corpuscle: glomerulus + Bowman\'s capsule (simple squamous)',
      'PCT: large cells, brush border (microvilli), eosinophilic, small lumen',
      'DCT: smaller cells, no brush border, clearer lumen',
      'Collecting duct: simple cuboidal, prominent lateral borders',
      'Loop of Henle: thin limb = simple squamous; thick limb = cuboidal',
    ],
    identificationTips: [
      'Renal corpuscles are round, dense, glomerular structures in cortex',
      'PCT has a fuzzy pink luminal border (brush border)',
      'Collecting ducts: clear lateral borders make individual cells obvious',
      'Bowman\'s capsule parietal layer = very flat simple squamous',
    ],
    commonMistakes: [
      'Confusing PCT and DCT — PCT cells are larger with a brush border; DCT cells are smaller without',
      'Confusing collecting duct with DCT — prominent lateral borders identify collecting duct',
    ],
  },
  lung: {
    topic: 'lung',
    keyFeatures: [
      'Alveoli: thin-walled air spaces lined by Type I and II pneumocytes',
      'Type I pneumocytes: very thin, flat (most of surface area)',
      'Type II pneumocytes: cuboidal, produce surfactant (lamellar bodies)',
      'Alveolar septa: capillaries + elastic fibres',
      'Alveolar macrophages: "dust cells" in alveolar spaces',
    ],
    identificationTips: [
      'Sponge-like appearance at low power = lung alveoli',
      'Type II pneumocytes: round cells protruding into alveolar space at septal corners',
      'Alveolar macrophages: dark, granular cytoplasm in alveolar spaces',
    ],
    commonMistakes: [
      'Confusing Type I and Type II pneumocytes — Type I are flat (hard to see); Type II are cuboidal (easier to spot)',
      'Forgetting that capillaries in the septa are responsible for gas exchange',
    ],
  },
  bronchus: {
    topic: 'bronchus',
    keyFeatures: [
      'Pseudostratified ciliated columnar epithelium with goblet cells',
      'Irregular plates of hyaline cartilage (not C-rings like trachea)',
      'Prominent smooth muscle layer under epithelium',
      'Bronchial glands (seromucous) in submucosa',
      'Bronchovascular bundle with pulmonary artery branch',
    ],
    epithelium: 'Pseudostratified ciliated columnar with goblet cells',
    supportingStructures: 'Irregular hyaline cartilage plates',
    identificationTips: [
      'Cartilage plates (not C-rings) = bronchus',
      'Adjacent pulmonary artery in the bronchovascular bundle',
      'Smooth muscle forms a layer beneath the epithelium (can constrict in asthma)',
    ],
    commonMistakes: [
      'Confusing with trachea — trachea has C-shaped rings; bronchus has irregular plates',
      'Confusing with bronchiole — bronchioles have NO cartilage',
    ],
  },
  bronchiole: {
    topic: 'bronchiole',
    keyFeatures: [
      'NO cartilage (primary distinction from bronchus)',
      'Simple columnar to cuboidal ciliated epithelium (fewer goblet cells)',
      'Club cells (Clara cells): non-ciliated, dome-shaped secretory cells',
      'Prominent smooth muscle layer',
      'Terminal bronchioles → respiratory bronchioles → alveolar ducts',
    ],
    epithelium: 'Simple columnar/cuboidal ciliated; Club cells in terminal bronchioles',
    identificationTips: [
      'No cartilage = bronchiole',
      'Club cells protrude above other epithelial cells (dome-shaped)',
      'Smaller diameter than bronchus; more prominent smooth muscle:lumen ratio',
    ],
    commonMistakes: [
      'Adding cartilage when answering — bronchioles definitively have no cartilage',
      'Confusing club cells with goblet cells — club cells are non-ciliated and lack mucus granules',
    ],
  },
  ileum: {
    topic: 'ileum',
    keyFeatures: [
      'Finger-like villi projecting into lumen',
      'Crypts of Lieberkühn (intestinal glands) between villi bases',
      'Peyer\'s patches: large lymphoid aggregates in mucosa/submucosa',
      'Goblet cells throughout epithelium',
      'Paneth cells at base of crypts (eosinophilic granules)',
    ],
    identificationTips: [
      'Peyer\'s patches are the hallmark of ileum — large lymphoid nodules',
      'Shorter villi than duodenum/jejunum',
      'More goblet cells than duodenum or jejunum',
      'Paneth cells: pyramidal cells with bright pink (eosinophilic) granules at crypt base',
    ],
    commonMistakes: [
      'Confusing with jejunum — ileum has Peyer\'s patches; jejunum does not',
      'Forgetting that Brunner\'s glands are in duodenum, not ileum',
    ],
    mnemonics: 'Ileum = Immune tissue (Peyer\'s patches) + Increasing goblet cells',
  },
  'thick-skin': {
    topic: 'thick-skin',
    keyFeatures: [
      '5 epidermal layers: basale → spinosum → granulosum → lucidum → corneum',
      'Very thick stratum corneum',
      'Stratum lucidum: clear, homogeneous zone (unique to thick skin)',
      'No hair follicles or sebaceous glands',
      'Abundant eccrine (merocrine) sweat glands',
    ],
    layers: [
      { name: 'Stratum Basale', description: 'Single layer of columnar stem cells on basement membrane; melanocytes present' },
      { name: 'Stratum Spinosum', description: 'Several layers of polygonal cells with "spines" (desmosomes); Langerhans cells here' },
      { name: 'Stratum Granulosum', description: '3-5 layers; keratohyalin granules (dark, basophilic); lamellar granules' },
      { name: 'Stratum Lucidum', description: 'Only in thick skin; clear, homogeneous, eosinophilic layer; cells have no nuclei' },
      { name: 'Stratum Corneum', description: 'Dead, anucleate, keratin-filled cells; very thick in thick skin' },
    ],
    identificationTips: [
      'Look for 5 layers — if you see a pale clear zone (lucidum) = thick skin',
      'Very thick, pink stratum corneum is the most obvious feature at low power',
      'No hair follicles or sebaceous glands in the dermis',
    ],
    commonMistakes: [
      'Forgetting the stratum lucidum is the distinguishing layer vs thin skin',
      'Naming only 4 layers (forgetting lucidum)',
    ],
    mnemonics: 'BLGLS — Basale, sPinosum, Granulosum, Lucidum, sCorneum (or "Before Sleeping, Get Lots of Cover")',
  },
  'thin-skin': {
    topic: 'thin-skin',
    keyFeatures: [
      'Only 4 epidermal layers: basale → spinosum → granulosum → corneum (NO lucidum)',
      'Thinner stratum corneum than thick skin',
      'Hair follicles, sebaceous glands, arrector pili present',
      'Eccrine and apocrine sweat glands present',
      'Covers most of the body surface',
    ],
    identificationTips: [
      'Presence of hair follicles immediately identifies thin (hairy) skin',
      'No clear pale zone between granulosum and corneum = no lucidum',
      'Thinner overall epidermal height',
    ],
    commonMistakes: [
      'Saying thin skin has 5 layers — it has 4 (no lucidum)',
      'Forgetting thin skin covers most of the body (scalp, face, trunk, limbs)',
    ],
  },
  'hairy-skin': {
    topic: 'hairy-skin',
    keyFeatures: [
      'Hair follicles with hair shaft in lumen',
      'Hair bulb at base with matrix cells + melanocytes',
      'Sebaceous glands opening into follicle (pilosebaceous unit)',
      'Arrector pili smooth muscle (causes piloerection)',
      'Same 4-layer epidermis as thin skin (no lucidum)',
    ],
    identificationTips: [
      'Hair follicles are the defining feature — cut in longitudinal or oblique section',
      'Sebaceous glands appear as pale, lipid-rich lobules adjacent to follicle',
      'Arrector pili: band of smooth muscle from follicle to superficial dermis',
    ],
    commonMistakes: [
      'Confusing sebaceous gland with eccrine sweat gland — sebaceous opens into follicle; eccrine opens directly to surface',
      'Missing arrector pili because it is cut obliquely',
    ],
    mnemonics: 'Hairy = Hair follicle + Arrector pili + sebaceous gland = pilosebaceous unit',
  },
  'urinary-bladder': {
    topic: 'urinary-bladder',
    keyFeatures: [
      'Transitional epithelium (urothelium): 3 layers — basal, intermediate, umbrella cells',
      'Umbrella cells: large, dome-shaped surface cells with thick asymmetric membrane',
      'Epithelium thins and cells flatten when bladder is distended',
      'Detrusor muscle: three interlacing layers of smooth muscle',
      'No muscularis mucosae (unlike GI tract)',
    ],
    epithelium: 'Transitional epithelium (urothelium)',
    layers: [
      { name: 'Basal cells', description: 'Small, columnar/cuboidal cells on basement membrane; stem cells' },
      { name: 'Intermediate cells', description: 'Pear-shaped or polyhedral middle layer; can slide over each other during stretch' },
      { name: 'Umbrella cells', description: 'Large dome-shaped surface cells; asymmetric unit membrane resists urine penetration' },
    ],
    identificationTips: [
      'Umbrella cells on the surface are unique to urothelium',
      'The epithelium appears to "billow" into the lumen in empty bladder sections',
      'Detrusor muscle has interdigitating bundles at multiple angles',
    ],
    commonMistakes: [
      'Confusing with stratified squamous — urothelium has dome-shaped umbrella cells; squamous has flat surface cells',
      'Forgetting umbrella cells flatten during distension',
    ],
    mnemonics: 'Bladder: BIU — Basal, Intermediate, Umbrella cells',
  },

  // ── LECTURE 10: IMMUNOHISTOCHEMISTRY (IHC) ───────────────────────────────

  'ihc-principles': {
    topic: 'ihc-principles',
    keyFeatures: [
      'IHC = use of specific antibodies to detect and localise antigens in tissue sections',
      'Antibody structure: Y-shaped; 2 heavy chains + 2 light chains; held by disulfide bonds',
      'Fab region (top arms): contains variable (V) regions → antigen binding site (paratope)',
      'Fc region (stem): constant region → mediates biological effector functions',
      'Antigen-antibody binding: multiple weak NON-COVALENT bonds (H-bonds, electrostatic, Van der Waals, hydrophobic); collectively strong; readily reversible; spatial complementarity (lock & key)',
      '5 Ig classes: IgG (most abundant serum, used in IHC), IgA (secretory), IgM (first response, pentameric), IgE (allergy), IgD (B-cell marker)',
    ],
    identificationTips: [
      'Variable regions = unique amino acids → determine antigen specificity',
      'Constant regions = determine Ig class (IgG, IgM etc.)',
      'Epitope = antigen site that antibody binds | Paratope = antibody binding site',
    ],
    commonMistakes: [
      'Thinking antigen-antibody bonds are strong covalent bonds — they are weak, reversible, non-covalent',
      'Confusing Fab (antigen-binding arm) with Fc (stem/constant region)',
    ],
    mnemonics: 'Antibody = "FabFab-Fc": Fab-Fab = two antigen-binding arms (variable); Fc = one stem (constant)',
  },

  'ihc-antibody-types': {
    topic: 'ihc-antibody-types',
    keyFeatures: [
      'Polyclonal: multiple B-cell clones → immunochemically DISSIMILAR antibodies → bind MULTIPLE epitopes on same antigen; produced in rabbit (most common); harvested from serum',
      'Polyclonal advantages: HIGHER sensitivity (multiple epitopes — if one damaged, others still bind)',
      'Polyclonal disadvantages: batch-to-batch variability; less specificity',
      'Monoclonal: single plasma cell clone (hybridoma = B-cell + myeloma) → immunochemically IDENTICAL → bind ONE specific epitope; originally mouse, now rabbit also used',
      'Monoclonal advantages: UNIQUE specificity; no batch variability; unlimited supply; minimal cross-reactions',
      'Monoclonal disadvantages: LESS sensitivity; if specific epitope damaged/not displayed → no binding',
      'Data sheet provides: Ig concentration (mg/mL), isotype, clone number, host, immunogen, species specificity',
    ],
    identificationTips: [
      'Polyclonal = Many clones = Many epitopes = Higher sensitivity, lower specificity',
      'Monoclonal = 1 clone = 1 epitope = Higher specificity, lower sensitivity',
    ],
    commonMistakes: [
      'Thinking monoclonal = more sensitive — it is actually LESS sensitive than polyclonal',
      'Forgetting hybridoma = B-cell fused with myeloma cell (not just B-cell culture)',
    ],
    mnemonics: 'Mono = specific (1 epitope); Poly = sensitive (many epitopes)',
  },

  'ihc-techniques': {
    topic: 'ihc-techniques',
    keyFeatures: [
      'Direct IHC: labelled primary antibody → antigen; single step; LEAST sensitive',
      'Indirect IHC: unlabelled primary → labelled secondary (binds primary Ig) → MORE sensitive',
      'PAP (Peroxidase Anti-Peroxidase): enzyme complex amplification; even more sensitive',
      'ABC (Avidin-Biotin Complex): biotin-labelled secondary + avidin-biotin-HRP complex; very sensitive (avidin:biotin affinity = strongest known non-covalent interaction)',
      'Polymer Technology (e.g. Dako EnVision): polymer backbone carries many secondary antibodies + many HRP → MOST sensitive; no avidin (avoids endogenous biotin background)',
      'Secondary antibody: anti-immunoglobulin (e.g. goat anti-mouse IgG); binds Fc of primary; labelled with HRP or fluorophore',
      'Reporter molecules: Fluorochromes (FITC, Texas Red, Cy3, Cy5), Enzymes (HRP, Alkaline Phosphatase), Metals (Gold — for EM)',
    ],
    layers: [
      { name: 'Direct', description: 'Primary Ab carries label; 1 step; simple, least sensitive' },
      { name: 'Indirect', description: 'Unlabelled primary + labelled secondary; 2 steps; more sensitive' },
      { name: 'ABC', description: 'Biotin secondary + avidin-biotin-HRP complex; high sensitivity' },
      { name: 'Polymer', description: 'HRP-polymer linked to secondary antibody; highest sensitivity; no avidin' },
    ],
    identificationTips: [
      'Direct IHC: labelled primary only — fast but weak signal',
      'Indirect: unlabelled primary + labelled secondary — stronger signal via amplification',
      'ABC: three-layer complex with avidin:biotin — very high signal amplification',
      'Polymer (EnVision): polymer carries multiple HRP molecules linked to secondary — highest sensitivity, no biotin background',
    ],
    commonMistakes: [
      'Thinking direct = more sensitive — it is actually LEAST sensitive',
      'Confusing the secondary antibody target (it binds the primary antibody\'s Fc, NOT the antigen)',
    ],
    mnemonics: 'Sensitivity increases: Direct → Indirect → PAP → ABC → Polymer',
  },

  'ihc-antigen-retrieval': {
    topic: 'ihc-antigen-retrieval',
    keyFeatures: [
      'Formalin cross-links amino acids → can block primary antibody access to epitope (epitope masking)',
      'Antigen Retrieval (AR) = breaking cross-links to expose/unmask the epitope',
      'HIER (Heat-Induced Epitope Retrieval): heat tissue in buffer (citrate pH 6, EDTA pH 9)',
      'PIER (Proteolytic-Induced Epitope Retrieval): proteases (proteinase K, trypsin, pepsin)',
      'Standardised AR is CRITICAL for reproducible IHC results',
      'Frozen sections: unfixed → no cross-links → no masking → no AR needed; better antigen/enzyme preservation; BUT: poorer morphology, more background, limited antibody panels',
      'FFPE sections: require AR; better morphology; can use full antibody panel',
      'Block endogenous peroxidase: 1% H₂O₂ in methanol × 30 min before primary (prevents false-positive DAB from endogenous peroxidase in RBCs/neutrophils)',
      'Block non-specific binding: 10% normal serum in PBS × 10 min (from same animal as secondary antibody)',
    ],
    identificationTips: [
      'If IHC fails on FFPE section → check AR protocol first',
      'Endogenous peroxidase block MUST come before primary antibody',
    ],
    commonMistakes: [
      'Skipping endogenous peroxidase block → false-positive brown staining in RBCs/granulocytes',
      'Using FFPE section for antigen known to be formalin-sensitive without proper AR',
    ],
    mnemonics: 'AR = "Unlock the epitope": HIER (heat key) or PIER (enzyme key)',
  },

  'ihc-controls-applications': {
    topic: 'ihc-controls-applications',
    keyFeatures: [
      'DAB: brown precipitate; permanent; alcohol- and xylene-resistant; mount in DPX; POTENTIALLY CARCINOGENIC — handle with care',
      'AEC: rose-red precipitate; ALCOHOL SOLUBLE → aqueous mounting medium only; used for cell smears',
      'Positive control: tissue KNOWN to contain target antigen; same species/fixation/processing/pre-treatments/protocol as test',
      'Negative control: primary antibody replaced by DILUENT (or irrelevant antibody of same isotype); all other reagents applied normally; tests for non-specific background',
      'Staining patterns: Nuclear (e.g. ER, PR in breast cancer), Cytoplasmic (e.g. HMB-45 melanoma), Membranous (e.g. HER2 in breast cancer)',
      'Clinical applications: tumour typing (CK = carcinoma, CD45 = lymphoma), therapeutic targets (ER/PR/HER2), melanoma (HMB-45/S100), lymphoma typing, transplant rejection',
    ],
    identificationTips: [
      'DAB = brown (permanent, DPX mount OK)',
      'AEC = red (alcohol-soluble, MUST use aqueous mount)',
      'Positive control = confirm staining works; Negative control = confirm no background',
    ],
    commonMistakes: [
      'Mounting AEC-stained slides in DPX — AEC is alcohol-soluble, stain will dissolve',
      'Forgetting to run both positive AND negative controls with every IHC run',
    ],
    mnemonics: 'DAB = Dark brown (permanent DPX); AEC = rEd (soluble in Ethanol → Aqueous mount)',
  },

  // ── LECTURE 11: CYTOLOGY ──────────────────────────────────────────────────

  'cytology-overview': {
    topic: 'cytology-overview',
    keyFeatures: [
      'Cytology = examination of individual cells or small groups (no tissue architecture); vs Histology = intact tissue sections (architecture preserved)',
      '3 collection methods: Exfoliative (naturally shed: urine, sputum, CSF, effusions), Abrasive (scraped/brushed: Pap smear, bronchial brushings, endoscopic brushings), Aspiration/Intervention (FNA)',
      'FNA: for both palpable (breast, thyroid, lymph node, soft tissue) and non-palpable lesions (requires US/MRI/CT guidance)',
      'Cytocentrifugation: concentrates low-cellularity specimens (urine, CSF) into defined area for morphological ID and differential counting',
      'Respiratory cytology: sputum (3 consecutive days, early morning, deep cough, sterile container), bronchial washings/BAL/brushings, EBUS',
      'GI tract: scrapings, endoscopic brushings, transmucosal FNA, EUS-guided sampling',
      'Urinary tract: voided urine, catheterized urine, bladder washings; cells deteriorate QUICKLY in urine — process without delay',
    ],
    identificationTips: [
      'Palpable FNA sites: breast, thyroid, lymph nodes, soft tissue',
      'Non-palpable: requires imaging guidance (US, MRI, CT)',
      'Cytocentrifuge = for low-cell specimens; concentrates into defined circle',
    ],
    commonMistakes: [
      'Forgetting urine cells deteriorate quickly — must process without delay',
      'Thinking FNA can only be used for palpable lesions — it can be used for non-palpable with imaging guidance',
    ],
    mnemonics: 'Cytology collection: EAA — Exfoliative, Abrasive, Aspiration (FNA)',
  },

  'pap-stain-preparation': {
    topic: 'pap-stain-preparation',
    keyFeatures: [
      'Pap stain = multichromatic; stains nucleus AND cytoplasm; identifies squamous/glandular abnormalities',
      'Colour results: Nuclei = BLUE/PURPLE-BLACK (crisp, granular); Superficial squamous = PINK; Intermediate/metaplastic = BLUE/GREEN; Fully keratinised = ORANGE',
      'Fix IMMEDIATELY before air-drying — air-drying artefact causes increased eosinophilia, apparent nuclear enlargement, poor staining',
      'Traditional Pap smear: cells smeared directly on glass → alcohol spray immediately → manual staining. Disadvantages: only fraction of sample used; poor quality; cells overlap/obscure',
      'ThinPrep (LBC): cells into PreservCyt vial → thin even cell layer in lab → cells cleared of blood/mucus; nearly all cells retained; 27% more effective',
      'Australia current screening: HPV DNA test every 5 years (from age 25); if HPV+ → reflex LBC ThinPrep',
    ],
    identificationTips: [
      'Normal premenopausal: intermediate cells (blue/green) + superficial cells (pink) on Pap',
      'ThinPrep: circular area of evenly distributed cells, 2 cm diameter',
      'Satisfactory ThinPrep: >5000 cells on slide',
    ],
    commonMistakes: [
      'Forgetting air-drying artefact — fixation must be IMMEDIATE',
      'Thinking traditional smear is superior — ThinPrep is ~27% more effective',
    ],
    mnemonics: 'Pap colours: Nuclei Blue, Superficial Pink, Intermediate Green, Keratinised Orange (NBPGKO)',
  },

  'cervical-cancer-hpv': {
    topic: 'cervical-cancer-hpv',
    keyFeatures: [
      'Cervical cancer: 4th most common cancer in women globally; 85–90% squamous cell carcinoma; 5–9% adenocarcinoma',
      '90–95% of squamous cell carcinomas contain HPV DNA',
      'HPV types 16 + 18 → responsible for ~50% of high-grade pre-cancers; HPV 16 = most common in HSIL',
      'HPV transmission: mainly sexual; most people infected shortly after onset of sexual activity; >90% clear infection naturally',
      'HPV causes cancers at: cervix, vulva, penis, anus, oropharynx (genital warts from low-risk HPV)',
      'Australia 2030 elimination targets: 90% vaccinated by age 15 | 70% screened every 5 years | 90% receive treatment',
      'FIGO staging: 0 = CIS | 1 = cervix only | 2 = upper vagina/parametrium | 3 = lower vagina/pelvic sidewall | 4 = beyond pelvis (distant metastasis)',
    ],
    layers: [
      { name: 'Stage 0', description: 'Carcinoma in situ — abnormal cells in innermost lining only' },
      { name: 'Stage 1', description: 'Cancer found only in the cervix' },
      { name: 'Stage 2', description: 'Spread to upper vagina or tissue around uterus' },
      { name: 'Stage 3', description: 'Spread to lower vagina or pelvic sidewall; may involve pelvic lymph nodes' },
      { name: 'Stage 4', description: 'Spread beyond pelvis — bladder, rectum, liver, lungs (distant metastasis)' },
    ],
    identificationTips: [
      'FIGO staging: 0=in situ, 1=cervix, 2=upper vagina, 3=lower vagina/pelvic wall, 4=distant spread',
      'HPV 16 = most common high-risk type; 16+18 = ~50% of high-grade pre-cancers',
      'Australia 2030 = 90-70-90 targets (vaccinate, screen, treat)',
    ],
    commonMistakes: [
      'Thinking all HPV infections lead to cancer — >90% clear naturally without progression',
      'Confusing HPV 16/18 (high-risk, cancer) with HPV 6/11 (low-risk, genital warts only)',
    ],
    mnemonics: 'FIGO 0-1-2-3-4: "Cervix only → Upper → Lower pelvic → Distant"',
  },

  'pap-smear-results': {
    topic: 'pap-smear-results',
    keyFeatures: [
      'Normal: no abnormal cells — normal squamous epithelial cells (premenopausal: intermediate=blue, superficial=pink)',
      'ASCUS: Atypical Squamous Cells of Undetermined Significance — slightly increased N/C ratio, mild nuclear hyperchromasia; may be HPV, inflammation, or life change; HPV co-test clarifies',
      'LSIL: Low-grade SIL — mild dysplasia (CIN 1); HPV effect (koilocytosis = clear halo around nucleus)',
      'HSIL: High-grade SIL — moderate-severe dysplasia (CIN 2–3); significant nuclear abnormalities; HPV 16 most common',
      'CIS (Stage 0): full-thickness epithelial dysplasia; basement membrane intact; likely leads to invasion if untreated',
      'AGUS: Atypical Glandular Cells of Undetermined Significance — glandular cell abnormalities',
      'Abnormal categories: Infection (Trichomonas, Candida, coccobacilli, Actinomyces, HSV), Reactive changes (inflammation, atrophy, radiation, IUD), Epithelial abnormalities (ASCUS/LSIL/HSIL/CIS/AGUS), Unsatisfactory',
      'Unsatisfactory: <5000 cells (ThinPrep) or cells clumped/obscured',
    ],
    identificationTips: [
      'ASCUS nuclei: 2–3× area of normal intermediate squamous nucleus',
      'LSIL: koilocytes (cells with clear cytoplasmic halo + wrinkled nucleus) = HPV cytopathic effect',
      'HSIL: high N/C ratio, dark hyperchromatic nucleus, coarse chromatin',
    ],
    commonMistakes: [
      'Confusing ASCUS (squamous, undetermined) with AGUS (glandular, undetermined)',
      'Thinking CIS = invasive cancer — basement membrane is intact in CIS; it is pre-invasive',
    ],
    mnemonics: 'Progression: Normal → ASCUS → LSIL → HSIL → CIS → Invasive cancer',
  },

  'cytology-morphology': {
    topic: 'cytology-morphology',
    keyFeatures: [
      'Normal cells: small uniform nuclei; relatively large cytoplasm; cells arranged in tissues; conformity in cell size/shape; appropriate cell markers on surface',
      'Cancer cells: LARGE variably shaped nuclei; high N/C ratio; hyperchromatic (darker nuclei); coarse unevenly distributed chromatin; MANY dividing cells; disorganised arrangement; loss of normal features; tumour angiogenesis',
      'Morphology parameters: Cell arrangement (papillary, glandular, follicles, rosettes, pearls), Cell size/shape (pleomorphism in malignancy), Cytoplasmic features (colour, texture, vacuoles, pigment), Nuclear features (MOST IMPORTANT — size, shape, chromatin, nucleolus, mitoses), Extracellular material (background necrosis = invasive cancer)',
      'Necrosis: cell ENLARGES → membrane disrupted → enzymatic leakage → INFLAMMATION; pyknosis → karyorrhexis → karyolysis; always pathological',
      'Apoptosis: cell SHRINKS → membrane blebs → apoptotic bodies → phagocytosis; NO inflammation; often physiological',
    ],
    layers: [
      { name: 'Pyknosis', description: 'Nuclear shrinkage — DNA condenses into shrunken basophilic mass' },
      { name: 'Karyorrhexis', description: 'Nuclear fragmentation — pyknotic membrane ruptures; nucleus fragments' },
      { name: 'Karyolysis', description: 'Nuclear fading — chromatin dissolution by DNAses/RNAses → anuclear necrotic cell' },
    ],
    identificationTips: [
      'KEY: malignancy features reside in the NUCLEUS — hyperchromasia, coarse chromatin, irregular membrane, mitoses',
      'Background necrosis + malignant cells = invasive cancer (not just pre-invasive)',
      'Pleomorphism = variation in cell size/shape = hallmark of malignancy',
    ],
    commonMistakes: [
      'Thinking apoptosis causes inflammation — it does NOT (necrosis causes inflammation)',
      'Confusing karyorrhexis (fragmentation) with karyolysis (fading/dissolution)',
    ],
    mnemonics: 'Necrosis nuclear sequence: "PKL" — Pyknosis, Karyorrhexis, Karyolysis',
  },

  // ── LECTURE 7: H&E & SPECIAL STAINS ──────────────────────────────────────

  'he-staining-chemistry': {
    topic: 'he-staining-chemistry',
    keyFeatures: [
      'Most widely used histological stain — demonstrates tissue structures clearly, simple, automatable',
      'Haematoxylin: cationic dye from Haematoxylum campechianum (logwood); binds negatively charged (basophilic) structures → nuclei = blue/purple',
      'Eosin: anionic dye; binds positively charged (acidophilic) structures → cytoplasm, muscle, collagen, RBCs = pink/red',
      'Mordant: metallic salt linking dye to tissue (alum = aluminium; iron = ferric chloride)',
      'Progressive staining = stain to endpoint, no differentiation; Regressive = over-stain then differentiate with acid alcohol',
      '"Blueing" = alkaline water (Scott\'s) converts haematein from purple-red (acidic) to blue (alkaline)',
    ],
    identificationTips: [
      'Basophilic (blue/purple): nuclei, ribosomes, cartilage matrix, mast cell granules',
      'Acidophilic (pink): cytoplasm, collagen, muscle fibres, RBCs, keratin',
      'Over-differentiated = pale nuclei; under-differentiated = muddy blue cytoplasm',
      'Poor blueing = purple-red nuclei instead of blue',
    ],
    commonMistakes: [
      'Thinking haematoxylin directly stains — it must be oxidised to haematein (active form) first',
      'Forgetting that "blueing" is pH-dependent — alkaline = blue; acidic = red/purple',
      'Confusing progressive (no differentiation) with regressive (over-stain then differentiate)',
    ],
    mnemonics: 'H&E: Haematoxylin = blue nuclei (cationic+basophilic); Eosin = pink cytoplasm (anionic+acidophilic)',
  },

  'he-staining-procedure': {
    topic: 'he-staining-procedure',
    keyFeatures: [
      'Paraffin sections must be DEWAXED (xylene) then REHYDRATED ("taken to water") before staining — wax is hydrophobic',
      'H&E sequence: Dewax → To water → Haematoxylin → Rinse → Differentiate (acid alcohol) → Blue (alkaline water) → Check → Eosin → Dehydrate → Clear → Mount (DPX)',
      'Control slides: run with each batch; placenta/gut/kidney/muscle are good controls; keep in dark to prevent fading',
      'Troubleshooting pale nuclei: incomplete dewaxing, under-staining, over-differentiation, poor blueing, exhausted haematoxylin',
      'Haematoxylin degrades with use/time — continues to oxidise in staining tank; increase staining time as it ages',
      'DPX = synthetic mounting medium; must be applied after clearing in xylene (not compatible with water)',
    ],
    identificationTips: [
      'Residual wax → pale patches of poor staining throughout section',
      'Inconsistent manual staining by different staff → variable nuclear and cytoplasmic staining',
      'Fresh vs exhausted haematoxylin: fresh = strong crisp nuclear staining; exhausted = pale/weak',
    ],
    commonMistakes: [
      'Forgetting dewaxing must be COMPLETE — any residual wax blocks dye penetration',
      'Mounting before clearing in xylene — DPX is not miscible with water',
      'Not checking the control slide before releasing patient slides',
    ],
    mnemonics: 'H&E sequence: "Dew To H-D-B Check E-D-C-M" — Dewax, To-water, H&aematoxylin, Differentiate, Blue, Check, Eosin, Dehydrate, Clear, Mount',
  },

  'van-gieson-stain': {
    topic: 'van-gieson-stain',
    keyFeatures: [
      'Van Gieson stain: detects COLLAGEN; Reagent = picric acid + acid fuchsin (Van Gieson\'s solution)',
      'Results: Collagen = deep red/pink; Cytoplasm/muscle/RBCs/fibrin = Yellow; Nuclei = blue/black (Weigert\'s iron haematoxylin)',
      'Principle: small picric acid molecules retained in dense muscle/RBCs; larger acid fuchsin molecules displace picric acid from loose-pored collagen',
      'Weigert\'s iron haematoxylin MUST be used (acid-resistant) — alum haematoxylin washed out by acidic Van Gieson solution',
      'Verhoeff\'s Van Gieson (VVG): detects ELASTIC FIBRES; Results: elastic fibres = blue-black, collagen = red, muscle = orange, RBCs/cytoplasm = yellow',
      'VVG uses: emphysema (elastic atrophy), arteriosclerosis (fibre loss), ageing changes (splitting/fragmentation)',
      'Control for VVG: aorta on edge or cross-section of large elastic artery',
    ],
    identificationTips: [
      'Van Gieson: RED collagen, YELLOW muscle — reverse of what you might expect',
      'VVG: BLACK elastic fibres (dramatic dark fibres), red collagen',
      'Weigert\'s nuclear staining = brown/black (acid-fast)',
    ],
    commonMistakes: [
      'Using alum haematoxylin with Van Gieson — it washes out in the acidic counterstain',
      'Confusing VVG (elastic fibres = black) with Van Gieson (collagen = red, no elastic demonstration)',
    ],
    mnemonics: 'VG: "CollagenRed, MuscleYellow" | VVG: "Elastic Black, CollagenRed"',
  },

  'masson-trichrome': {
    topic: 'masson-trichrome',
    keyFeatures: [
      'Purpose: differentiate collagen from smooth muscle in tumours; identify fibrosis (e.g. cirrhosis)',
      'Results: Nuclei = BLACK (Weigert\'s iron haematoxylin); Cytoplasm/muscle/keratin = RED (Biebrich Scarlet-Acid Fuchsin); Collagen/mucous = BLUE (Aniline Blue)',
      'Control tissue: uterus, small intestine, appendix, or fallopian tube (all have smooth muscle + collagen)',
      'Collagen types: I = most abundant, tendons/scar tissue; II = articular cartilage; III = granulation tissue/reticular fibres; IV = basal lamina',
      'Elastic fibres: NOT visible on H&E; require special stains (VVG, Weigert\'s, Gomori); stretch up to 1.5× original length; desmosine + isodesmosine cross-links',
      'Reticular fibres: argyrophillic (absorb silver → appear black on silver stains); type III collagen coated with glycoprotein',
    ],
    identificationTips: [
      'Masson\'s: blue = collagen/fibrosis; red = muscle/cytoplasm',
      'Collagen I (tendons) = thick wavy pink bundles on H&E; Collagen III (reticular) = black with silver stain',
      'Elastic fibres on VVG = dramatic dark wavy lines (especially in aorta)',
    ],
    commonMistakes: [
      'Confusing Masson\'s Trichrome results (collagen = BLUE) with Van Gieson (collagen = RED)',
      'Thinking elastic fibres are visible on H&E — they require special stains',
      'Confusing Type I (most abundant, tendons/scar) with Type III (granulation tissue, early wound healing)',
    ],
    mnemonics: 'Masson\'s: "Nuclei Black, Muscle Red, Collagen Blue" = NBC',
  },

  // ── LECTURE 8: QUALITY CONTROL & ARTEFACTS ───────────────────────────────

  'quality-control-overview': {
    topic: 'quality-control-overview',
    keyFeatures: [
      'Australia leads the world in laboratory accreditation',
      'NATA: government watchdog; accreditation by ~3000 volunteer peer-review experts; benefits = marketing advantage + performance benchmark',
      'All Medicare-funded labs must be accredited by NATA/RCPA Laboratory Accreditation Program',
      'NPAAC: National Pathology Accreditation Advisory Council; develops and maintains standards for pathology practices',
      'ISO 15189: international standard for quality and competence of medical laboratories',
      'Competence criteria: Staff (qualifications, training), Equipment (calibrated, maintained), QA conducted, Sampling practices appropriate',
      'SOPs: simple language, easily accessible, cover pre/analytic/post-analytic; must be followed by all staff',
      'RCPA QAP: EQA for histopathology (diagnostic + technical proficiency survey cases)',
    ],
    identificationTips: [
      'NATA = who accredits | NPAAC = who sets standards | ISO 15189 = the international standard',
      'SOPs cover sample accession, identification, gross examination, sampling',
    ],
    commonMistakes: [
      'Confusing NATA (accreditation body) with NPAAC (standards body)',
      'Thinking labs can choose whether to follow QC standards — mandatory for Medicare funding',
    ],
    mnemonics: 'QC chain: ISO 15189 → NPAAC (standards) → NATA (accreditation) → Lab (SOPs)',
  },

  'qc-three-phases': {
    topic: 'qc-three-phases',
    keyFeatures: [
      'Pre-analytical: BEFORE sample is tested — collection, fixation, transport, specimen reception (ID check, request form), accession (barcode auto-labellers reduce errors)',
      'Analytical: ACTUAL testing — cut-up (precise description, adequate sampling, inking for orientation), processing, embedding, sectioning (calibrated microtomes, disposable blades), staining (SOPs, control slides, monitor reagent freshness), equipment (calibrated)',
      'Post-analytical: AFTER analysis — accurate reports (no transcription errors), delivery to correct clinician, storage of material/data, safe specimen disposal, invoicing, turnaround time (TAT), customer satisfaction',
    ],
    layers: [
      { name: 'Pre-analytical', description: 'Collection → fixation → transport → reception (ID check) → accession' },
      { name: 'Analytical', description: 'Cut-up → processing → embedding → sectioning → staining → equipment → reporting submission' },
      { name: 'Post-analytical', description: 'Reports → delivery → storage → disposal → invoicing → TAT → satisfaction' },
    ],
    identificationTips: [
      'Pre-analytical errors = most common and most preventable (ID errors, poor fixation)',
      'Analytical: H&E and special stain controls run with each batch; IHC antibody expiry monitored',
      'Post-analytical: TAT (turnaround time) is monitored as a KPI for patient care',
    ],
    commonMistakes: [
      'Thinking QC is only about staining (analytical) — it applies to ALL 3 phases equally',
      'Forgetting post-analytical activities are also subject to QC (report accuracy, storage)',
    ],
    mnemonics: 'PAP: Pre-analytical → Analytical → Post-analytical',
  },

  'pre-processing-artefacts': {
    topic: 'pre-processing-artefacts',
    keyFeatures: [
      'Artefact = change in tissue structure or presence of contaminants NOT normally seen on a properly prepared slide',
      'Crush artefact: forceps compression; darkly staining distorted/stretched nuclei at specimen periphery; common in delicate tissues (lymph node)',
      'Heat damage: laser/diathermy, over-heated wax, over-heated drying oven; loss of nuclear + cytoplasmic detail; coagulation of connective tissue fibres',
      'Post-mortem autolysis: delayed fixation; "ghost" nuclei (poorly defined); imprecise cytoplasmic staining',
      'Specimen marking dyes (ink/silver nitrate): appear as coloured deposits at margins; may penetrate into adjacent tissue',
      'Suture artefact: foreign material from surgical sutures visible in tissue sections',
    ],
    identificationTips: [
      'Crush: at one EDGE/periphery of specimen; darkly staining elongated nuclei; normal tissue below',
      'Heat damage: coagulated homogeneous eosinophilic areas; loss of architectural detail',
      'Autolysis: ghost nuclei; fuzzy cytoplasm; nuclear chromatin indistinct',
    ],
    commonMistakes: [
      'Diagnosing necrosis or tumour in crush artefact — look for normally preserved tissue below the crush zone',
      'Thinking autolysis = poor processing — delay in fixation, not a processing error',
    ],
    mnemonics: 'Pre-processing: "CHAPS" — Crush, Heat, Autolysis, Post-mortem, Sutures/dyes',
  },

  'fixation-artefacts': {
    topic: 'fixation-artefacts',
    keyFeatures: [
      'Six factors affecting fixation: pH, Osmolality, Time, Temperature, Penetration rate, Concentration',
      'Zonal fixation: different degrees of fixation at different levels within same specimen; outer = fixed, centre = unfixed; causes: specimen too large, insufficient time, poor penetration reagent',
      'Steaming artefact: precipitation/displacement of glycogen by advancing fixation front; best practice = adequate pre-processing fixation',
      'Formalin pigment: fine black/brown-to-black deposits; formed when buffer exhausted → tissue acidic → Heme-formalin complex; common in blood-rich tissues (spleen, lymph node, autopsy)',
      'Prevention of formalin pigment: thin sections + 1:10-20 tissue:fixative ratio + replace fixative if brownish-red (buffer exhausted)',
    ],
    identificationTips: [
      'Zonal fixation: one zone well-fixed, adjacent zone poorly preserved (autolytic appearance)',
      'Formalin pigment: random fine black dots with NO relationship to tissue structures; polarised light can identify it',
      'Steaming: vacuolated cells (glycogen displaced) adjacent to well-fixed tissue',
    ],
    commonMistakes: [
      'Mistaking formalin pigment for melanin or haemosiderin — it has no tissue relationship',
      'Forgetting buffer exhaustion is the cause of formalin pigment (acidic formalin reacts with haem)',
    ],
    mnemonics: 'Fixation factors: "pH OTTPC" — pH, Osmolality, Time, Temperature, Penetration, Concentration',
  },

  'processing-artefacts': {
    topic: 'processing-artefacts',
    keyFeatures: [
      'Processing artefacts: shrinkage (~30% original size from paraffin processing), loss of cellular substances, colour changes, structural changes',
      'Poor dehydration: tearing and holes in sections; loss of nuclei detail; cloudy sections (causes: improper gradient, over- or under-dehydration)',
      'Under-decalcification: dark blue areas in trabeculae (haematoxylin staining residual calcium)',
      'Over-decalcification: loss of all nuclear detail; destruction of tissue morphology',
      'Sectioning artefacts: parallel knife-mark lines across section (nicked blade); separation of epithelium from underlying tissue (processing/sectioning)',
      'Folds: tissue doubled on itself → darker staining stripes',
      'Air bubbles: trapped during coverslipping; worsen if not expelled (dry air pulled in)',
      'Specimen-to-specimen contamination: floater tissue from one patient onto another\'s slide (serious: misdiagnosis risk)',
      'Floating artefacts (water bath): tissue folds or foreign material from contaminated water bath',
    ],
    identificationTips: [
      'Knife marks: parallel lines spanning full section width — replace blade',
      'Bubbles: circular clear areas under coverslip — lack of staining within',
      'Floater contamination: tissue fragment with different morphology from the surrounding section tissue',
      'Shrinkage: tissue appears smaller than clinical description; gaps between tissue and wax edge',
    ],
    commonMistakes: [
      'Confusing knife marks (parallel lines = blade issue) with folds (darker staining bands = tissue doubled)',
      'Missing floater contamination — always compare tissue morphology across the entire section',
    ],
    mnemonics: 'Post-processing artefacts: "SAFE-C" — Sectioning lines, Air bubbles, Folds, epithelium separation, Contamination (floaters)',
  },

  // ── LECTURE 3: BASIC TISSUE TYPES ────────────────────────────────────────

  'epithelial-tissue': {
    topic: 'epithelial-tissue',
    keyFeatures: [
      '4 basic tissue types: Epithelial, Connective, Nervous, Muscular',
      'Epithelium: covers body surfaces, lines cavities and tubes, forms glands',
      'Avascular — no blood vessels; nutrients diffuse from underlying CT via basement membrane',
      'Cells tightly packed; all cells contact each other',
      'Classified by: (1) layers — Simple (single) vs Stratified (multiple); (2) surface cell shape — Squamous, Cuboidal, Columnar',
      'Pseudostratified: appears multilayered but ALL cells contact basement membrane — single layer',
    ],
    identificationTips: [
      'Simple = one layer, all cells on basement membrane',
      'Stratified = multiple layers, only basal layer on basement membrane',
      'Shape = shape of SURFACE cells determines name',
      'Squamous = flat; Cuboidal = square; Columnar = tall',
    ],
    commonMistakes: [
      'Thinking pseudostratified is stratified — all cells contact the basement membrane',
      'Using the shape of basal cells to classify — always use SURFACE cell shape',
    ],
    mnemonics: 'Classification = Layers + Shape (Simple/Stratified + Squamous/Cuboidal/Columnar)',
  },

  'simple-epithelium': {
    topic: 'simple-epithelium',
    keyFeatures: [
      'Simple squamous: flat cells, diffusion/filtration; locations: alveoli, capillaries (endothelium), Bowman\'s capsule, serous membranes',
      'Simple cuboidal: cube-shaped cells; secretion/absorption; locations: kidney tubules, thyroid follicles, small gland ducts',
      'Simple columnar: tall cells, often with microvilli (brush border) and/or goblet cells; locations: small intestine, stomach, large intestine',
      'Pseudostratified ciliated columnar: trachea/bronchi (respiratory epithelium); cilia + goblet cells; all cells touch basement membrane',
    ],
    layers: [
      { name: 'Simple squamous', description: 'Flat cells; nucleus flattened; ideal for diffusion; endothelium = lining of blood vessels' },
      { name: 'Simple cuboidal', description: 'Square cells; round central nucleus; secretion/absorption; kidney tubules, thyroid' },
      { name: 'Simple columnar', description: 'Tall cells; oval basal nucleus; brush border (microvilli) for absorption; goblet cells for mucus' },
      { name: 'Pseudostratified columnar', description: 'Nuclei at different heights → appears layered, but single layer; trachea + goblet cells + cilia' },
    ],
    identificationTips: [
      'Simple squamous: single layer of flat cells, dark flattened nuclei — capillaries, alveoli',
      'Simple cuboidal: square cells, round central nuclei — kidney tubules, thyroid follicles',
      'Simple columnar: tall cells, basal oval nuclei, brush border or goblet cells — small intestine',
      'Pseudostratified: nuclei at multiple heights but all on basement membrane — trachea with cilia',
    ],
    commonMistakes: [
      'Confusing endothelium (simple squamous) with transitional epithelium',
      'Forgetting pseudostratified is technically simple (all cells on basement membrane)',
    ],
    mnemonics: 'Trachea: PCCG — Pseudostratified, Ciliated, Columnar, Goblet cells',
  },

  'stratified-epithelium': {
    topic: 'stratified-epithelium',
    keyFeatures: [
      'Stratified squamous keratinised: epidermis (thick + thin skin); surface cells dead, anucleate, keratin-filled; waterproof barrier',
      'Stratified squamous non-keratinised: oesophagus, oral mucosa, vagina; surface cells alive and nucleated; protection from abrasion',
      'Stratified cuboidal: rare; ducts of sweat glands and ovarian follicle surface',
      'Stratified columnar: rare; spongy urethra and large excretory ducts',
      'Transitional (urothelium): ureter and bladder; umbrella cells change shape — dome-shaped when empty, flat when stretched',
    ],
    layers: [
      { name: 'Stratified squamous keratinised', description: 'Dead anucleate cells on surface; keratin-filled; skin' },
      { name: 'Stratified squamous non-keratinised', description: 'Living nucleated surface cells; oesophagus, oral mucosa' },
      { name: 'Transitional (urothelium)', description: '3 layers: basal, intermediate, umbrella; accommodates stretch; ureter + bladder' },
    ],
    identificationTips: [
      'Keratinised squamous: thick pink acellular surface layer (keratin), no nuclei at surface — skin',
      'Non-keratinised squamous: nuclei present at surface cells — oesophagus, oral cavity',
      'Transitional: dome-shaped umbrella cells on surface when empty; thinner when stretched — bladder/ureter',
    ],
    commonMistakes: [
      'Confusing keratinised (dead surface cells) with non-keratinised (living surface cells)',
      'Thinking transitional is only in the bladder — also lines the ureter',
    ],
    mnemonics: 'Urothelium BIU: Basal-Intermediate-Umbrella (dome when empty, flat when full)',
  },

  'connective-tissue-overview': {
    topic: 'connective-tissue-overview',
    keyFeatures: [
      'CT is diverse and abundant; cells occupy LESS space than matrix',
      'Functions: connect/support/protect organs, immune protection, movement (bones), storage (fat, calcium), heat production, transport (blood)',
      '3 broad categories: CT proper (loose + dense), Supporting CT (cartilage + bone), Fluid CT (blood)',
      '6 cell types: Fibroblasts (make ECM), Macrophages (phagocytose — from monocytes), Leukocytes (neutrophils + lymphocytes), Plasma cells (antibodies — from lymphocytes), Mast cells (heparin + histamine), Adipocytes (store triglycerides)',
      'All CT originates from mesenchyme (embryonic connective tissue)',
    ],
    identificationTips: [
      'CT proper: loose (areolar, adipose, reticular) or dense (regular, irregular, elastic)',
      'Supporting CT: cartilage (semisolid matrix) or bone (solid calcified matrix)',
      'Fluid CT: blood (plasma + formed elements)',
    ],
    commonMistakes: [
      'Forgetting blood is classified as connective tissue',
      'Confusing fibroblasts (make ECM) with macrophages (phagocytose) — both resident CT cells',
    ],
    mnemonics: 'CT cells: F-M-L-P-M-A (Fibroblasts, Macrophages, Leukocytes, Plasma cells, Mast cells, Adipocytes)',
  },

  'connective-tissue-fibres': {
    topic: 'connective-tissue-fibres',
    keyFeatures: [
      'ECM = protein fibres + ground substance',
      'Collagen: most abundant body protein (25%); tough, flexible, stretch-resistant; tendons + ligaments + deep dermis',
      'Reticular fibres: thin type III collagen coated with glycoprotein; mesh framework; spleen, lymph nodes, bone marrow',
      'Elastic fibres: elastin protein; stretch and RECOIL; elastic arteries, lung, skin dermis',
      'Ground substance: GAGs (chondroitin sulfate most abundant — cartilage stiffness; heparin; hyaluronic acid), Proteoglycans (bottle-brush shaped), Adhesive glycoproteins',
    ],
    layers: [
      { name: 'Collagen', description: 'Most abundant; tough/stretch-resistant; tendons, ligaments, dermis; pink on H&E' },
      { name: 'Reticular fibres', description: 'Fine type III collagen; mesh-like; lymphoid organ stroma; requires silver staining' },
      { name: 'Elastic fibres', description: 'Elastin; stretch and recoil; elastic arteries, lung; wavy lines' },
      { name: 'Ground substance', description: 'GAGs + proteoglycans + adhesive glycoproteins; gel-like; fills space between fibres and cells' },
    ],
    identificationTips: [
      'Collagen: thick, pink, wavy bundles — most abundant; tendons and dermis',
      'Reticular fibres: fine, black argyrophilic fibres on silver stain; lymphoid organs',
      'Elastic fibres: thin, wavy, branching; require Orcein/Verhoeff stain to visualise clearly',
      'Ground substance: appears clear/pale on H&E — fills the spaces between fibres and cells',
    ],
    commonMistakes: [
      'Confusing elastic fibres (stretch/recoil) with collagen (strength/resistance)',
      'Forgetting that ground substance is NOT fibrous — it is gel-like (GAGs and proteoglycans)',
    ],
    mnemonics: 'Fibres: CRE — Collagen (tough), Reticular (mesh), Elastic (recoil)',
  },

  'loose-connective-tissue': {
    topic: 'loose-connective-tissue',
    keyFeatures: [
      'Much gel-like ground substance between loosely arranged fibres',
      'Areolar CT: "model CT"; all 6 cell types + all 3 fibre types; random fibres; abundant blood vessels; underlies nearly every epithelium',
      'Adipose CT: adipocytes dominant; empty-looking cells on H&E (lipid dissolved); nucleus flattened against membrane; white fat (adults) vs brown fat (infants/heat)',
      'Reticular CT: mesh of reticular fibres + reticular cells; stroma of lymph nodes, spleen, thymus, bone marrow',
    ],
    identificationTips: [
      'Areolar: loose mesh of pink collagen and elastic fibres, scattered cells, many blood vessels',
      'Adipose (white): "chicken wire" of empty-looking large cells; nucleus at periphery',
      'Reticular: mesh of dark fine fibres (silver stain) + leukocytes/macrophages',
    ],
    commonMistakes: [
      'Thinking adipocytes on H&E still contain lipid — lipid is dissolved in processing, leaving empty spaces',
      'Confusing reticular tissue (type III collagen mesh, lymphoid organs) with areolar tissue (all fibre types, everywhere)',
    ],
    mnemonics: 'Loose CT: AAR — Areolar (everywhere), Adipose (fat), Reticular (lymphoid mesh)',
  },

  'dense-connective-tissue': {
    topic: 'dense-connective-tissue',
    keyFeatures: [
      'Fibres fill spaces between cells; less ground substance than loose CT',
      'Dense regular: parallel collagen fibres; fibroblast nuclei in rows between bundles; tendons (muscle→bone) and ligaments (bone→bone); resists unidirectional stress',
      'Dense irregular: randomly interwoven collagen bundles; few visible cells; deeper dermis, organ capsules, GI submucosa; resists multidirectional stress',
      'Elastic CT: abundant elastic lamellae (sheets); smooth muscle cells between lamellae; elastic arteries (aorta); allows stretch + recoil with each heartbeat',
    ],
    identificationTips: [
      'Dense regular: wavy parallel pink collagen, compressed fibroblast nuclei in a row between fibres (H&E)',
      'Dense irregular: thick interwoven pink collagen bundles in all directions, few nuclei visible',
      'Elastic CT: pink wavy lamellae alternating with smooth muscle nuclei (aorta on H&E)',
    ],
    commonMistakes: [
      'Confusing dense regular (parallel fibres — tendon) with dense irregular (random fibres — dermis)',
      'Forgetting elastic CT is found in arteries (not just ligamentum nuchae)',
    ],
    mnemonics: 'Dense Regular = Rope (parallel strands); Dense Irregular = Basket-weave (random)',
  },

  cartilage: {
    topic: 'cartilage',
    keyFeatures: [
      'Stiff, flexible connective tissue; avascular → heals slowly',
      'Cells: chondroblasts (produce matrix → become trapped) → chondrocytes (mature cells in lacunae)',
      'Perichondrium: dense CT sheath around elastic + most hyaline cartilage; contains chondroblast reserve',
      'Hyaline: clear glassy matrix; fine type II collagen invisible on H&E; chondrocytes in lacunae; locations: tracheal C-rings, articular cartilage, costal cartilage, fetal skeleton',
      'Fibrocartilage: large coarse type I collagen bundles visible on H&E; no perichondrium; shock absorption; pubic symphysis, intervertebral discs, menisci',
      'Elastic: abundant elastic fibres (requires Orcein/Verhoeff stain to see); covered by perichondrium; flexible support; external ear, epiglottis',
    ],
    layers: [
      { name: 'Hyaline', description: 'Most common; glassy/clear; fine collagen invisible; chondrocytes in lacunae; trachea, articular, costal' },
      { name: 'Fibrocartilage', description: 'Coarse collagen bundles visible; no perichondrium; resists compression; discs, menisci, pubic symphysis' },
      { name: 'Elastic', description: 'Elastic fibres dense; requires special stain; perichondrium present; ear, epiglottis' },
    ],
    identificationTips: [
      'Hyaline: pale blue-purple glassy matrix, chondrocytes in lacunae (often in pairs/cell nests), perichondrium visible',
      'Fibrocartilage: dense pink collagen bundles, chondrocytes in single-file rows in lacunae, no perichondrium',
      'Elastic: similar to hyaline but elastic fibres visible between chondrocytes with special stain',
    ],
    commonMistakes: [
      'Thinking hyaline cartilage has no collagen — it does (type II), just too fine to see by LM',
      'Confusing fibrocartilage (coarse collagen, no perichondrium) with hyaline (fine, has perichondrium)',
    ],
    mnemonics: 'H-F-E: Hyaline (clear), Fibro (coarse collagen, discs/menisci), Elastic (ear/epiglottis)',
  },

  bone: {
    topic: 'bone',
    keyFeatures: [
      'Calcified connective tissue (osseous tissue); most rigid CT',
      'Cells: osteoblasts (make matrix) → osteocytes (mature, trapped in lacunae) + osteoclasts (resorb bone)',
      'Spongy bone: porous; trabeculae (thin bony struts); marrow cavities; heads of long bones + flat bones',
      'Compact bone: dense; no visible spaces; osteon (Haversian system) = central canal + concentric lamellae',
      'Osteon structure: central canal (blood vessels + nerves) → concentric lamellae → lacunae (osteocytes) → canaliculi (connect lacunae)',
      'Periosteum: tough fibrous outer covering of whole bone',
    ],
    layers: [
      { name: 'Compact bone', description: 'Dense; osteons; central canal + concentric lamellae; shaft of long bones' },
      { name: 'Spongy bone', description: 'Porous; trabeculae + marrow spaces; heads of long bones + flat bones' },
      { name: 'Osteon (Haversian system)', description: 'Central canal + blood vessels + concentric lamellae + osteocyte lacunae + canaliculi' },
    ],
    identificationTips: [
      'Compact bone (ground section): concentric rings (lamellae) around central canal; dark osteocyte lacunae with hairline canaliculi radiating out',
      'Spongy bone: irregular pink trabeculae with marrow (blood cells) filling spaces between them',
      'Central canal (Haversian canal): large round hole at centre of each osteon — contains vessels + nerves',
    ],
    commonMistakes: [
      'Confusing canaliculi (tiny canals connecting osteocyte lacunae) with central canal (large canal for blood vessels)',
      'Thinking spongy bone is weak — it is actually very efficient at bearing load along trabeculae',
    ],
    mnemonics: 'Osteon inside-out: Canal → Lamellae → Lacunae → Canaliculi (CLLC)',
  },

  'blood-tissue': {
    topic: 'blood-tissue',
    keyFeatures: [
      'Fluid connective tissue; transports cells and dissolved matter',
      'Matrix = plasma (liquid ground substance): water + proteins + nutrients + hormones',
      'Formed elements: Erythrocytes (RBCs — O₂/CO₂ transport, anucleate, biconcave discs), Leukocytes (WBCs — defence), Platelets (clotting fragments from megakaryocytes)',
      '5 WBC types: Neutrophils (multi-lobed nucleus, pale granules — bacteria), Eosinophils (bi-lobed nucleus, orange-red granules — parasites/allergy), Basophils (S-shaped nucleus, dark purple granules — histamine), Lymphocytes (large round nucleus, thin cytoplasm rim — adaptive immunity), Monocytes (kidney-shaped nucleus, grey cytoplasm — become macrophages)',
    ],
    identificationTips: [
      'RBCs: pink, anucleate, biconcave discs — most numerous cell on blood smear',
      'Neutrophils: most common WBC; multi-lobed (2–5) purple nucleus; pale cytoplasm',
      'Eosinophils: bi-lobed nucleus + bright orange-red granules',
      'Lymphocytes: large round dark nucleus taking up most of cell',
      'Platelets: tiny purple fragments between cells',
    ],
    commonMistakes: [
      'Forgetting blood is connective tissue (its matrix is plasma)',
      'Confusing neutrophils (multi-lobed nucleus) with lymphocytes (single large round nucleus)',
    ],
    mnemonics: 'WBCs Never Let Me Eat Bananas: Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils',
  },

  'nervous-tissue': {
    topic: 'nervous-tissue',
    keyFeatures: [
      'Specialised for communication by electrical and chemical signals',
      'Two cell types: Neurons (excitable, signal transmission) + Neuroglia/Glial cells (support, protect, nourish)',
      'Neuroglia more numerous than neurons — the "housekeepers" of the nervous system',
      'Neuron parts: Neurosoma (cell body — nucleus + organelles, Nissl substance = rER), Dendrites (receive signals — multiple short branched), Axon (send signals — single long fibre, can be >1 m)',
      'Excitability: ability to respond to stimuli by changing membrane potential',
      'Nissl substance on H&E: coarse blue-purple granular material in the neurosoma',
    ],
    identificationTips: [
      'Neurons: large cell body with large pale nucleus + prominent nucleolus, Nissl substance in cytoplasm, processes radiating outward',
      'Glial cells: small dark nuclei between neurons — more numerous but smaller',
      'Axons: long thin processes (may be myelinated)',
    ],
    commonMistakes: [
      'Confusing dendrites (receive — multiple, short) with axon (send — single, long)',
      'Thinking glial cells are neurons — glia are smaller, lack large nucleolus, no Nissl substance',
    ],
    mnemonics: 'Neuron parts: DNA — Dendrites (receive), Neurosoma (cell body), Axon (send)',
  },

  'muscular-tissue': {
    topic: 'muscular-tissue',
    keyFeatures: [
      'Elongated cells specialised to contract; exert physical force on tissues and organs',
      'Important source of body heat; responsible for movement, digestion, breathing, circulation',
      'Skeletal: long cylindrical fibres; MULTIPLE PERIPHERAL nuclei; striations (A+I bands); voluntary; attaches to bone via tendons',
      'Cardiac: branched shorter fibres; SINGLE CENTRAL nucleus; striations; INTERCALATED DISCS (dark transverse lines); involuntary; heart only',
      'Smooth: fusiform myocytes; SINGLE CENTRAL oval nucleus; NO striations; involuntary; walls of hollow organs (GI, vessels, bladder)',
    ],
    layers: [
      { name: 'Skeletal', description: 'Striated; voluntary; multinucleate (peripheral); long cylindrical fibres; A and I bands' },
      { name: 'Cardiac', description: 'Striated; involuntary; single central nucleus; branched; intercalated discs; heart only' },
      { name: 'Smooth', description: 'No striations; involuntary; fusiform; single central nucleus; hollow organs' },
    ],
    identificationTips: [
      'Skeletal: long parallel fibres, striations (cross-banding), PERIPHERAL multiple nuclei, voluntary',
      'Cardiac: branched fibres, striations, SINGLE CENTRAL nucleus, dark intercalated discs as transverse lines',
      'Smooth: fusiform cells, NO striations, SINGLE CENTRAL oval nucleus, staggered arrangement gives "mixed size" cross-sections',
    ],
    commonMistakes: [
      'Confusing cardiac (central nucleus, branched, intercalated discs) with skeletal (peripheral nuclei, parallel, no intercalated discs)',
      'Forgetting smooth muscle has NO striations and CENTRAL nuclei',
    ],
    mnemonics: 'S-C-S (Skeletal=Striated+voluntary, Cardiac=Central nucleus+discs, Smooth=no Striations)',
  },

  // ── LECTURE 5: SKIN HISTOLOGY ─────────────────────────────────────────────

  'skin-epidermis': {
    topic: 'skin-epidermis',
    keyFeatures: [
      'Stratified squamous epithelium — provides protection',
      '4 cell types: Keratinocytes (90%), Melanocytes (8%), Langerhans cells (3–5%), Merkel cells (<5%)',
      'Thick skin: 5 layers (basale → spinosum → granulosum → lucidum → corneum)',
      'Thin skin: 4 layers (no lucidum)',
      'Keratinisation: 28-day journey from basale to corneum — cells lose nuclei, fill with keratin',
    ],
    layers: [
      { name: 'Stratum basale', description: 'Deepest; single row; stem cells (mitosis); contains melanocytes + Merkel cells' },
      { name: 'Stratum spinosum', description: '"Prickly" layer; 8–10 rows irregular keratinocytes; Langerhans cells here; gives skin strength' },
      { name: 'Stratum granulosum', description: '3–5 rows; cells flatten + degenerate; glycolipid granules control water barrier' },
      { name: 'Stratum lucidum', description: 'Only in thick skin; 2–3 rows of clear flat keratinocytes; transition zone' },
      { name: 'Stratum corneum', description: 'Outermost; 20–30 rows of dead anucleate keratin-filled cells; barrier layer; cells shed continuously' },
    ],
    identificationTips: [
      'Keratinocytes: most common (90%) — produce keratin via keratinisation',
      'Melanocytes: in stratum basale, oval nucleus, clear cytoplasm — produce melanin → UV protection; freckles = increased melanin accumulation',
      'Langerhans cells: in stratum spinosum, antigen-presenting, from bone marrow',
      'Merkel cells: deep epidermis, associated with disc-shaped sensory nerve endings — detect touch',
    ],
    commonMistakes: [
      'Forgetting that stratum lucidum is ONLY in thick skin',
      'Confusing Langerhans cells (immune function, stratum spinosum) with Merkel cells (touch, deep epidermis)',
      'Saying melanin is produced in keratinocytes — melanin is made in melanocytes and transferred to keratinocytes',
    ],
    mnemonics: 'Cell types: K-M-L-M (Keratinocytes, Melanocytes, Langerhans, Merkel) — "Keep Making Life Meaningful"',
  },

  'skin-dermis': {
    topic: 'skin-dermis',
    keyFeatures: [
      'Thicker than epidermis; connective tissue layer below the epidermis',
      'Composed of: collagen fibres + elastic fibres + blood vessels + lymphatics + nerves + smooth muscle + hair follicles + glands',
      'Two layers: Papillary dermis (fine type III collagen) + Reticular dermis (coarse type I collagen — 80%)',
      'Basement membrane: between stratum basale and papillary dermis; allows nutrient diffusion to avascular epidermis',
      'Hypodermis (subcutis): mainly adipose cells; rich vascular supply; suitable for subcutaneous injections (e.g. insulin)',
    ],
    layers: [
      { name: 'Papillary dermis', description: 'Superficial; fine type III collagen bundles; dermal papillae interdigitate with epidermis; contains capillaries' },
      { name: 'Reticular dermis', description: 'Deep; coarse type I collagen bundles; dense irregular connective tissue; ~80% of dermis' },
      { name: 'Basement membrane', description: 'Between stratum basale and papillary dermis; nutrient diffusion from vascular dermis to avascular epidermis' },
      { name: 'Hypodermis', description: 'Below dermis; adipose cells; rich vascularity; site for subcutaneous injections' },
    ],
    identificationTips: [
      'Resident cells: fibroblasts, collagen I + III, elastin, nerves, vessels, arrector pili',
      'Migrant cells: macrophages, dendritic cells, mast cells, lymphocytes, neutrophils, eosinophils',
      'Papillary = pale, fine collagen at top; reticular = dense, coarse collagen below',
    ],
    commonMistakes: [
      'Confusing the papillary and reticular layers — papillary is superficial (thin, fine), reticular is deep (thick, coarse)',
      'Thinking the hypodermis is part of the dermis — it is a separate subcutaneous layer',
      'Forgetting the basement membrane is avascular — nutrients diffuse through it',
    ],
    mnemonics: 'Dermis: Paper (papillary, fine) on top of Rope (reticular, coarse)',
  },

  'skin-appendages': {
    topic: 'skin-appendages',
    keyFeatures: [
      'Hair follicles: epidermal invaginations with 3 segments — infundibulum (top), isthmus (middle), inferior segment (bottom/bulb)',
      'Sebaceous glands: holocrine secretion of sebum into pilosebaceous canal; emollient, barrier, antimicrobial, pheromone roles',
      'Stem cells in the "bulge region" of the isthmus (CK15+)',
      'Eccrine (merocrine) sweat glands: simple coiled tubular; cuboidal epithelium; open onto skin surface; thermoregulation; all over body',
      'Apocrine sweat glands: open into hair follicles; axilla + groin; pheromone/odour role',
      'Arrector pili muscle: smooth muscle from follicle to superficial dermis; causes piloerection ("goosebumps")',
    ],
    identificationTips: [
      'Hair follicle on H&E: elongated structure with central hair shaft, surrounded by follicular epithelium',
      'Sebaceous gland: pale lipid-rich lobules adjacent to follicle, opening into isthmus',
      'Eccrine sweat glands: simple coiled structures in dermis with cuboidal epithelium; open directly to surface',
      'Arrector pili: band of smooth muscle connecting follicle to papillary dermis',
    ],
    commonMistakes: [
      'Confusing eccrine (opens to surface) with apocrine (opens into follicle)',
      'Confusing sebaceous gland (pale lipid lobules) with sweat gland (coiled tubular)',
      'Forgetting holocrine secretion = entire cell disintegrates (sebaceous) vs merocrine = exocytosis (eccrine)',
    ],
    mnemonics: 'Hair follicle segments top-to-bottom: I I I — Infundibulum, Isthmus, Inferior segment',
  },

  // ── LECTURE 6: SKIN PATHOLOGY & DIABETES ─────────────────────────────────

  'basal-cell-carcinoma': {
    topic: 'basal-cell-carcinoma',
    keyFeatures: [
      'Most common skin cancer (~70%); arises from basal cells of stratum basale',
      'Predominantly in sun-damaged skin; head + neck > trunk > other sites',
      'Gross: pearly white/skin-coloured/pink bump; may have central ulceration and telangiectasia (blood vessels)',
      'Subtypes: Superficial, Nodular (most common), Infiltrating, Micronodular, Sclerosing/Morphoeic, Metatypical/Basosquamous',
      'Histology: basaloid tumour cells, peripheral palisading, tumour-stromal clefting',
      'Rarely metastasises; cured by complete excision (clinical 2–3 mm, histological 0.5 mm for simple BCC)',
    ],
    identificationTips: [
      'Low power: blue tumour nests growing in nodular fashion from epidermis into dermis',
      'High power: peripheral palisading (cells line up at tumour edge) + stromal clefting',
      'Gorlin\'s syndrome = rare genetic predisposition to multiple BCCs',
      'Completeness of excision is the critical prognostic factor for recurrence',
    ],
    commonMistakes: [
      'Thinking BCC always metastasises — it rarely does',
      'Confusing BCC (basaloid cells, palisading) with SCC (squamous cells, keratin pearls)',
      'Forgetting that aggressive BCC subtypes (morphoeic, infiltrating) require wider margins',
    ],
    mnemonics: 'BCC: Blue nests, Basal cells, Palisading periphery, Pearly appearance clinically',
  },

  'squamous-cell-carcinoma': {
    topic: 'squamous-cell-carcinoma',
    keyFeatures: [
      'Arises from squamous keratinocytes; most from actinic keratosis (AK) precursor',
      'Sun-damaged skin; tenderness and thickness on palpation',
      'Higher metastatic potential than BCC (~1/3 of advanced cases die from disease)',
      'High-risk sites: ear, lips, vulva, penis',
      'Risk factors for metastasis: size >2 cm, depth >2 mm, perineural invasion, poorly differentiated',
      'Histology: irregular growth of pink squamous epithelium into dermis, nuclear enlargement, hyperchromasia, keratinisation (keratin pearls), mitotic figures',
      'Treatment: complete excision; SCCs <2 cm: 4 mm clinical margin, >1 mm histological margin',
    ],
    identificationTips: [
      'Low power: irregular pink squamous epithelium extending into dermis in disorganised fashion',
      'High power: nuclear enlargement + hyperchromasia + variability, keratinisation (pink whorls = keratin pearls), mitotic figures',
      'More pink tumour (eosinophilic) than BCC (basophilic)',
    ],
    commonMistakes: [
      'Underestimating SCC compared to BCC — SCC has significantly greater metastatic potential',
      'Forgetting that most SCCs arise from AK (actinic keratosis), not normal skin',
      'Confusing keratin pearls (SCC) with peripheral palisading (BCC)',
    ],
    mnemonics: 'SCC: Sun-damaged skin, Squamous cells, Keratinisation, and higher metaStasis risk',
  },

  'malignant-melanoma': {
    topic: 'malignant-melanoma',
    keyFeatures: [
      'Least common skin cancer (1–2%) but MOST serious/aggressive',
      'Arises from melanocytes; strongly linked to UV radiation; can also arise de novo or in existing naevi',
      'Australia had the highest worldwide melanoma rate in 2020',
      'Clinical ABCDE: Asymmetry, Border (irregular/notched), Colour (multiple), Diameter (growing), Evolving',
      'Spread: radial (horizontal, within epidermis/superficial dermis) then vertical (deep dermal invasion)',
      'Histology: nests of melanoma cells, large nuclei, prominent eosinophilic nucleoli, mitotic figures, binucleated cells, intranuclear inclusions, melanin pigment',
      'Staging: AJCC TNM — T (thickness in mm), N (lymph node), M (distant metastasis)',
      'Key prognostic factors: Breslow thickness, ulceration (bad sign = lack of epithelium), mitotic rate',
      'IHC markers: HMB-45 (melanosome — specific), S100 (sensitive)',
    ],
    layers: [
      { name: 'Tis (Stage 0)', description: 'Melanoma in situ; excision only' },
      { name: 'T1 (Stage I)', description: '≤1.0 mm thick; wide local excision ± sentinel node biopsy' },
      { name: 'T2 (Stage II)', description: '>1.0–2.0 mm; extends beyond epidermis; excision + sentinel node' },
      { name: 'T3/N+ (Stage III)', description: 'Regional metastasis to lymph nodes/lymphatics/skin; surgery + adjuvant/neoadjuvant therapy' },
      { name: 'M1 (Stage IV)', description: 'Distant metastasis (brain, lungs, liver); surgery + immunotherapy/targeted therapy' },
    ],
    identificationTips: [
      'Normal mole: even colour, smooth regular edge; melanoma: ABCDE features',
      'Histologically: atypical melanocytes with large nuclei + prominent nucleoli + melanin',
      'Ulceration on H&E = absence of epithelium above tumour = poor prognosis',
      'Tumour thickness (Breslow) measured vertically on H&E — most important prognostic factor',
    ],
    commonMistakes: [
      'Thinking melanoma only grows in sun-exposed areas — it can grow anywhere on the body',
      'Confusing radial (horizontal/epidermis spread) with vertical (deep invasion) growth phases',
      'Forgetting that ulceration is a BAD prognostic feature',
    ],
    mnemonics: 'ABCDE: "A Bad Colour Demands Examination"',
  },

  'islets-of-langerhans': {
    topic: 'islets-of-langerhans',
    keyFeatures: [
      'Endocrine clusters scattered throughout the exocrine pancreas',
      'On H&E: pale-staining round clusters surrounded by darker exocrine acini',
      '3 main cell types: Alpha (A) cells, Beta (B) cells, Delta (D) cells',
      'Alpha cells (~20%): at periphery of islet; secrete glucagon (raises blood glucose)',
      'Beta cells (~75%): central in islet; secrete insulin (lowers blood glucose)',
      'Delta cells (remainder): secrete somatostatin (inhibits both glucagon and insulin)',
      'IHC: insulin detected with HRP-DAB (brown) counterstained with Toluidine Blue (blue for exocrine)',
    ],
    identificationTips: [
      'Low power: pale oval clusters (islets) within darker exocrine pancreas',
      'Alpha cells at periphery; beta cells central — "Alpha at the rim"',
      'Physiological trigger for insulin release = rising blood glucose',
    ],
    commonMistakes: [
      'Confusing alpha (glucagon, peripheral) with beta (insulin, central)',
      'Thinking Langerhans cells in the epidermis are the same as Islets of Langerhans — they are completely different',
      'Forgetting delta cells secrete somatostatin (not insulin or glucagon)',
    ],
    mnemonics: 'ABD: Alpha = periphery (glucAGon), Beta = central (insulin = B cells), Delta = somatostatin',
  },

  'diabetes-mellitus': {
    topic: 'diabetes-mellitus',
    keyFeatures: [
      'Beta cells damaged → abnormal insulin secretion or function → hyperglycaemia',
      'Three main classes: Type I (absolute insulin deficiency), Type II (insulin resistance), Gestational',
      'Type I: autoimmune; autoantibodies destroy beta cells + insulin; early onset <20 years; insulitis on histology',
      'Type II: insulin resistance in peripheral muscle/adipose; glucose not transported into cells; >90% of cases; onset >40 years; associated with obesity + low exercise',
      'Both types → hyperglycaemia; untreated → proteolysis, lipolysis, ketogenesis, gluconeogenesis → coma + death',
      'Long-term complications: blood vessels, kidneys (nephropathy), eyes (retinopathy), nerves (neuropathy)',
    ],
    layers: [
      { name: 'Type I', description: 'Autoimmune; absolute insulin deficiency; early onset; insulitis (inflammatory infiltration of islets on H&E)' },
      { name: 'Type II', description: 'Insulin resistance; relative deficiency; >40 years onset; no autoimmune involvement; associated with obesity' },
      { name: 'Gestational', description: 'Develops during pregnancy; resolves post-partum; risk factor for Type II later' },
    ],
    identificationTips: [
      'Type I histology: insulitis — inflammatory cells infiltrating islets (visible on H&E)',
      'Type II histology: islets may appear reduced; amyloid deposits in islets in advanced disease',
      'Hyperglycaemia in Type I = no insulin produced; Type II = insulin produced but cells can\'t respond',
    ],
    commonMistakes: [
      'Saying Type II has autoimmune involvement — it does NOT (only Type I)',
      'Confusing which type is more common — Type II = >90%, Type I = <10%',
      'Forgetting that both types end in hyperglycaemia, despite different mechanisms',
    ],
    mnemonics: 'Type I = Immune attack (autoimmune); Type II = Insensitive (insulin resistance)',
  },

  // ── LECTURE 1: FIXATION, PROCESSING & EMBEDDING ──────────────────────────

  'histological-workflow': {
    topic: 'histological-workflow',
    keyFeatures: [
      'Order: Accessioning → Gross Examination → Fixation → Tissue Processing → Embedding → Sectioning → Staining → Slide Distribution',
      'Tissue processor: automated dehydration, clearing, infiltration',
      'Embedding station: orientation + paraffin wax hardening into a block',
      'Microtome: cuts 4–6 µm sections from the paraffin block',
      'Staining machines: H&E machine, Special stain machine, IHC machine',
    ],
    identificationTips: [
      'Remember the 8-step sequence — every question about workflow tests this order',
      'Accession FIRST (before anything else), slide distribution LAST',
      'Processing (dehydration/clearing/wax) happens between gross examination and embedding',
    ],
    commonMistakes: [
      'Placing fixation before accessioning — accessioning is always first',
      'Confusing the tissue processor (automated bath machine) with the embedding station',
      'Forgetting that staining comes after sectioning, not before',
    ],
    mnemonics: 'A GF-PRESS-D: Accessioning, Gross exam, Fixation, Processing, Embedding, Sectioning, Staining, Distribution',
  },

  'specimen-identification': {
    topic: 'specimen-identification',
    keyFeatures: [
      'Identification check must be performed on ALL received specimens — no exceptions',
      'Request form must list: patient information, clinical history, site of origin',
      'Container label and request form must match: Name, Date of Birth, Lab Number, Site (laterality)',
      'Discrepancies must be resolved BEFORE any processing begins',
      'Laterality = left vs. right (critical for paired organs)',
    ],
    identificationTips: [
      'The 4 must-match items: Name, DOB, Lab number, Site/laterality',
      'If anything doesn\'t match — STOP. Contact the submitting clinician',
      'Unlabelled or mismatched specimens are a patient safety incident',
    ],
    commonMistakes: [
      'Proceeding with processing despite a discrepancy — never acceptable',
      'Forgetting to check laterality for paired organs (left/right kidney, breast, lung)',
    ],
    mnemonics: 'NDLS: Name, DOB, Lab number, Site — must all match',
  },

  accessioning: {
    topic: 'accessioning',
    keyFeatures: [
      'First step when specimen is received in the lab',
      'Assigns a unique laboratory number to identify the patient and specimen',
      'Data entered: patient name, requesting doctor, specimen code, clinical history, site',
      'Colour-coded cassettes printed using the Pulsar machine',
      'Number of cassettes selected based on number of tissue pieces',
    ],
    identificationTips: [
      'Accessioning = giving the specimen its "name tag" in the lab',
      'The unique lab number links all records, blocks, slides, and reports to that patient',
      'Cassette colour helps track different specimens or parts through processing',
    ],
    commonMistakes: [
      'Thinking accessioning happens after gross examination — it is always FIRST',
      'Confusing cassette printing (Pulsar machine) with tissue processing (tissue processor)',
    ],
    mnemonics: 'Accessioning = Assigning a unique number + Cassettes printed',
  },

  fixation: {
    topic: 'fixation',
    keyFeatures: [
      'Definition: preserving a specimen for microscopic study using a chemical fixative',
      'Most common fixative: Neutral Buffered Formalin (NBF / 10% formalin)',
      'Fixative volume = 15–20× the size of the tissue',
      'Fix IMMEDIATELY after surgical removal to prevent autolysis',
      'Specimens can arrive fixed (in formalin) or fresh (requiring immediate treatment)',
    ],
    identificationTips: [
      'Fixation halts autolysis (self-digestion by enzymes) and putrefaction (bacterial breakdown)',
      'Under-fixation → poor morphology; over-fixation → antigen masking (affects IHC)',
      'Volume and time are the two critical variables',
    ],
    commonMistakes: [
      'Forgetting the 15–20× volume rule for fixative',
      'Thinking fixation and tissue processing are the same step — they are separate',
      'Not appreciating that delay in fixation degrades tissue morphology and IHC results',
    ],
    mnemonics: 'FIVE: Fix Immediately, Volume = 15-20×, Ensure full submersion',
  },

  'gross-examination': {
    topic: 'gross-examination',
    keyFeatures: [
      'Naked eye examination of tissue — also called dissection or macroscopic examination',
      'Performed by a pathologist or medical scientist',
      'Measure: size (L × W × D), weight (organs), colour, texture, and lesion description',
      'Cut organs at 3 mm intervals (acceptable 3–5 mm)',
      'Tissue placed in cassettes, immediately returned to fixative after sampling',
      'Skin specimen types: Punch (<3 mm intact on edge; ≥4 mm bisected), Excision (serially sectioned)',
      'Lesion types: Macule (<10 mm flat), Patch (≥10 mm flat), Papule (<10 mm raised), Nodule (10–20 mm raised)',
    ],
    identificationTips: [
      'Gross examination provides the macroscopic description that guides histological sampling',
      'Orientation markers (suture, notch, dye) on excisions allow margin mapping',
      'Inking margins before sectioning = colour-coding which margin is which',
    ],
    commonMistakes: [
      'Confusing macule vs. patch (both flat — size distinguishes them: <10 mm vs ≥10 mm)',
      'Confusing papule vs. nodule (both raised — size distinguishes them: <10 mm vs 10–20 mm)',
      'Forgetting to return tissue to fixative immediately after dissection',
    ],
    mnemonics: 'Flat lesions: Mac (small) vs Patch (big); Raised lesions: Pap (small) vs Nod (big)',
  },

  'tissue-processing': {
    topic: 'tissue-processing',
    keyFeatures: [
      'Purpose: prepare tissue for embedding by replacing water with paraffin wax',
      'Three main steps: Dehydration → Clearing → Infiltration',
      'Dehydration: graded ethanol (60–70% → 90–95% → 100%) removes water',
      'Clearing: xylene (hydrocarbon) replaces ethanol and makes tissue translucent',
      'Infiltration: molten paraffin wax (30–60°C) replaces xylene',
      'Fick\'s Law: rate of diffusion ∝ concentration gradient',
      'Factors: temperature, pressure/vacuum, agitation, processing schedule, reagent quality',
    ],
    layers: [
      { name: 'Dehydration', description: 'Graded ethanol removes water; starts at 60–70%, progresses to 100%' },
      { name: 'Clearing', description: 'Xylene replaces ethanol; makes tissue translucent; transition step' },
      { name: 'Infiltration', description: 'Molten paraffin wax (30–60°C) replaces clearing agent; makes tissue suitable for sectioning' },
    ],
    identificationTips: [
      'Routine processing cycle = ~6 hours (short cycle available for urgent cases)',
      'Higher temperature speeds processing but increases shrinkage artefacts',
      'Pressure/vacuum improves reagent penetration into dense tissues',
    ],
    commonMistakes: [
      'Thinking clearing removes fixative — it removes the dehydrant (ethanol)',
      'Forgetting the order: dehydration THEN clearing THEN infiltration (not the reverse)',
      'Confusing the tissue processor machine with the embedding station',
    ],
    mnemonics: 'DCI: Dehydrate, Clear, Infiltrate — or "Dry, Clean, Impregnate"',
  },

  embedding: {
    topic: 'embedding',
    keyFeatures: [
      'Purpose: encasing processed tissue in paraffin wax to create a block for sectioning',
      'Done at the embedding station (has cold plate, wax reservoir, forceps)',
      'Tissues are oriented according to tissue type and pathologist request',
      'Block = cassette + tissue hardened in paraffin wax',
      'Common methods: Paraffin wax (routine), OCT (frozen sections), Resin (EM / low-shrinkage)',
    ],
    layers: [
      { name: 'Paraffin wax', description: 'Most common; allows 2–4 µm sections; requires prior fixation and processing' },
      { name: 'OCT compound', description: 'For fresh frozen tissue; preserves antigens/enzymes; sections cut in cryostat' },
      { name: 'Resin embedding', description: 'Reduces shrinkage from 20% (wax) to <2%; used for EM and detailed morphology' },
    ],
    identificationTips: [
      'Correct orientation is critical: skin = on edge; tubular structures = face-on',
      'The cold plate hardens the wax quickly around the tissue',
      'Max section thickness from paraffin: 2–4 µm with plasticiser-containing wax',
    ],
    commonMistakes: [
      'Confusing embedding station with tissue processor — embedding is after processing',
      'Forgetting that OCT is for FROZEN tissue, not routine fixed tissue',
      'Not appreciating that poor tissue orientation cannot be corrected after the block hardens',
    ],
    mnemonics: 'Embedding: Orient → Mould → Cold plate → Block',
  },

  sectioning: {
    topic: 'sectioning',
    keyFeatures: [
      'Microtome: machine with a sharp blade that cuts paraffin blocks at 4–6 µm',
      'Sections form a ribbon as they come off the blade',
      'Block placed on ice for ~20 min before cutting to equilibrate temperature',
      'Ribbon floated on water bath at ~40–45°C to flatten sections',
      'Sections picked up on labelled glass slides',
      'Slides dried in 60°C oven (or 37°C overnight for brain) for adherence',
      'Cryostat: freezer-microtome at −18°C to −35°C for fresh frozen sections',
    ],
    identificationTips: [
      'Section thickness = 4–6 µm (one cell layer thick on average)',
      'Cryostat temperature: −18°C for routine, −35°C for fatty tissue',
      'Frozen sections stored at −80°C if not immediately stained',
    ],
    commonMistakes: [
      'Confusing the flotation bath temperature (40–45°C) with the slide oven temperature (60°C)',
      'Forgetting to chill block on ice before sectioning — leads to compression artefacts',
      'Thinking cryostat sections are fixed — they are cut fresh (unfixed)',
    ],
    mnemonics: 'Sectioning: ICE the block, CUT the ribbon, FLOAT at 45°C, DRY at 60°C',
  },

  staining: {
    topic: 'staining',
    keyFeatures: [
      'Purpose: give contrast to tissue and highlight specific features',
      'Routine stain: Haematoxylin and Eosin (H&E) — nuclei = blue/purple, cytoplasm = pink',
      'Special stains: target specific components (carbohydrates, microorganisms, collagen, nerve fibres)',
      'IHC: antibody-based staining; brown precipitate = positive (antigen present); blue = negative',
      'IHC uses: cellular lineage, mutant proteins (BRCA), therapeutic targets (ER, PR, HER2)',
    ],
    identificationTips: [
      'H&E: basophilic (haematoxylin) = nuclei, ribosomes, cartilage matrix; eosinophilic (eosin) = cytoplasm, collagen',
      'Special stains are ordered by the pathologist based on diagnostic suspicion',
      'IHC brown staining location matters: nuclear, cytoplasmic, or membranous',
    ],
    commonMistakes: [
      'Thinking H&E stains everything the same colour — haematoxylin = blue/purple, eosin = pink',
      'Confusing IHC positive (brown) with negative (blue counterstain only)',
      'Forgetting that special stains and IHC are ordered in addition to, not instead of, routine H&E',
    ],
    mnemonics: 'H&E: Haematoxylin = nuclei Blue, Eosin = cytoplasm pInk',
  },

  'cell-injury-concepts': {
    topic: 'cell-injury-concepts',
    keyFeatures: [
      "Homeostasis: maintains stability of body's internal environment in response to external changes",
      'Pathogenesis: mechanism of disease leading to structural and functional abnormalities',
      'Lesions: structural changes in tissue that allow distinction of one disease from another',
      'Prognosis: prediction of the probable outcome of the disease',
      'Pathology: study of disease — investigation of structural and functional abnormalities',
      'Necrosis: localised death of tissue due to injury (uncontrolled/pathological)',
      'Three stages of cell injury: Aetiology → Pathogenesis → Morphology',
    ],
    identificationTips: [
      'Aetiology = CAUSE (what caused the injury)',
      'Pathogenesis = MECHANISM (what happens as a result)',
      'Morphology = APPEARANCE (cellular changes seen by pathologist)',
      'Necrosis vs Apoptosis: necrosis is pathological/uncontrolled; apoptosis is programmed/controlled',
    ],
    commonMistakes: [
      'Confusing pathogenesis (mechanism) with aetiology (cause)',
      'Confusing prognosis (outcome prediction) with diagnosis (identifying the disease)',
      'Thinking lesions only refer to skin wounds — in histopathology, lesions = any structural tissue change',
    ],
    mnemonics: 'APM: Aetiology (cause) → Pathogenesis (mechanism) → Morphology (appearance) — the three stages of cell injury',
  },

  'reversible-irreversible-injury': {
    topic: 'reversible-irreversible-injury',
    keyFeatures: [
      'Reversible injury: cell can recover if stimulus removed — cellular swelling, mitochondrial swelling, ribosomal detachment, nuclear chromatin clumping',
      'Irreversible injury: cell death inevitable — lysosomal rupture, phospholipid membrane damage, increased mitochondrial permeability',
      'Nuclear changes in irreversible injury: Pyknosis (condensation) → Karyorrhexis (fragmentation) → Karyolysis (pallor/dissolution)',
      'Irreversible outcomes: Necrosis (pathological) or Apoptosis (programmed)',
      'Injurious stimulus → mild injury = reversible; severe injury = irreversible',
    ],
    layers: [
      { name: 'Pyknosis', description: 'Nuclear condensation/shrinkage — nucleus becomes smaller and darker. FIRST sign of irreversible nuclear injury.' },
      { name: 'Karyorrhexis', description: 'Nuclear fragmentation — nucleus breaks into pieces. SECOND stage.' },
      { name: 'Karyolysis', description: 'Nuclear pallor/dissolution — nucleus fades away completely. FINAL stage.' },
    ],
    identificationTips: [
      'Reversible = swelling; Irreversible = rupture/membrane damage',
      'Nuclear changes order: Pyknosis → Karyorrhexis → Karyolysis (PKL)',
      'Apoptosis = controlled, programmed; Necrosis = uncontrolled, pathological',
    ],
    commonMistakes: [
      'Confusing pyknosis (condensation) with karyolysis (dissolution) — they are opposite ends of nuclear death',
      'Thinking all cell swelling is irreversible — early swelling is often reversible',
      'Confusing apoptosis (normal programmed death) with necrosis (pathological death)',
    ],
    mnemonics: 'PKL for nuclear death: Pyknosis → Karyorrhexis → Karyolysis',
  },

  'cellular-adaptations': {
    topic: 'cellular-adaptations',
    keyFeatures: [
      'Adaptations occur when cells are stressed but not fatally injured',
      'Hypertrophy: ↑ CELL SIZE (not number) — e.g. cardiac muscle in hypertension',
      'Hyperplasia: ↑ CELL NUMBER — e.g. endometrial hyperplasia (requires mitotic capacity)',
      'Atrophy: ↓ cell size and/or number — e.g. muscle disuse atrophy',
      "Metaplasia: one differentiated cell type replaced by ANOTHER differentiated type — e.g. squamous metaplasia in smoker's bronchus",
      'Dysplasia: ↑ cell number + CHANGED morphology and differentiation — PRE-NEOPLASTIC (may progress to cancer)',
    ],
    identificationTips: [
      'Hypertrophy = BIGGER cells; Hyperplasia = MORE cells',
      'Atrophy = SMALLER/FEWER cells',
      'Metaplasia = DIFFERENT cell type (still differentiated, reversible)',
      'Dysplasia = ABNORMAL cells (pre-cancerous, changed morphology & differentiation)',
      'Cardiac muscle → hypertrophy ONLY (cannot divide)',
    ],
    commonMistakes: [
      'Confusing hypertrophy (size) with hyperplasia (number)',
      'Thinking metaplasia is cancer — it is reversible and cells remain differentiated',
      'Confusing metaplasia with dysplasia — dysplasia has ABNORMAL differentiation and is pre-neoplastic; metaplasia does not',
      'Forgetting that post-mitotic cells (e.g. neurons, cardiac muscle) can only undergo hypertrophy, NOT hyperplasia',
    ],
    mnemonics: 'HiHy AtMe Dy: Hyperplasia=more, Hypertrophy=bigger, Atrophy=wasting, Metaplasia=changed type, Dysplasia=dangerous (pre-cancer)',
  },

  'inflammation': {
    topic: 'inflammation',
    keyFeatures: [
      'Cardinal signs of acute inflammation: Redness (rubor), Heat (calor), Swelling (tumor), Pain (dolor), Loss of function (functio laesa)',
      'Duration: Acute (hours/days), Sub-acute (10-14 days), Chronic (long term)',
      'Acute inflammation: neutrophils (PMNs), oedema, vascular dilation — vasoconstriction then vasodilation',
      'Vasodilation → endothelial adhesiveness, vascular stasis, interendothelial gaps → exudate/transudate',
      'Exudate: HIGH protein + WBCs/RBCs — caused by increased vascular permeability (inflammation)',
      'Transudate: LOW protein, few cells — caused by ↑ hydrostatic pressure or ↓ colloid osmotic pressure (non-inflammatory)',
      'Chronic inflammation: macrophages, lymphocytes, plasma cells, fibrosis',
      'Outcomes of acute inflammation: Resolution, Abscess, Fibrosis/Organisation, Chronic inflammation',
      'Abscess: localised collection of pus (necrotic tissue + dead neutrophils)',
      "Granuloma: aggregate of epithelioid macrophages — seen in TB, sarcoidosis, Crohn's disease",
    ],
    identificationTips: [
      'Acute = neutrophils (first responders); Sub-acute = transition (10-14 days); Chronic = macrophages + fibrosis',
      'Exudate = inflammation (high protein); Transudate = mechanical/osmotic (low protein)',
      'Classifying fluid as exudate or transudate = valuable initial diagnostic step',
      'Abscess = central necrosis + neutrophils surrounded by inflammatory wall',
      'Granuloma = multinucleate giant cells + epithelioid macrophages (NO pus)',
    ],
    commonMistakes: [
      'Confusing exudate (inflammatory, high protein) with transudate (non-inflammatory, low protein)',
      'Forgetting sub-acute inflammation (10-14 days) — only naming acute and chronic',
      'Confusing acute (neutrophils) with chronic inflammation (macrophages/lymphocytes)',
      'Thinking inflammation always means infection — can be sterile (e.g. gout, autoimmune)',
      'Confusing granuloma with abscess — granuloma has no pus; it is macrophage-dominated',
    ],
    mnemonics: 'RSHPL: Redness, Swelling, Heat, Pain, Loss of function — 5 cardinal signs; EX-HIGH TRANs-LOW: Exudate=High protein, Transudate=Low protein',
  },

  'atherosclerosis': {
    topic: 'atherosclerosis',
    keyFeatures: [
      'Disease of the tunica intima of arteries — lipid deposits form atheromatous plaques',
      'Plaque composition: lipid core (foam cells, LDL), inflammatory cells (macrophages, T-cells), smooth muscle cells, fibrous cap',
      'Major risk factors: hypertension, smoking, hyperlipidaemia, diabetes, obesity, age',
      'Fatty streak: earliest lesion — macrophages engorged with oxidised LDL (foam cells)',
      'Complications: MI (coronary), stroke (carotid/cerebral), peripheral vascular disease, renal artery stenosis, aortic aneurysm',
      'Blood vessel layers: Tunica Intima (endothelium + IEL) → Tunica Media (smooth muscle + EEL) → Tunica Adventitia (collagen)',
    ],
    layers: [
      { name: 'Tunica Intima', description: 'Innermost layer: endothelium (simple squamous) + subendothelial connective tissue + internal elastic lamina (IEL). Site of atherosclerosis.' },
      { name: 'Tunica Media', description: 'Middle layer: circumferential smooth muscle + some connective tissue + external elastic lamina (EEL). Thick in arteries.' },
      { name: 'Tunica Adventitia', description: 'Outermost layer: collagen + fibroblasts + vasa vasorum (in large vessels). Anchors vessel to surrounding tissue.' },
    ],
    identificationTips: [
      'Atherosclerosis = INTIMA disease (not media)',
      'Fatty streak → fibrous plaque → complicated plaque (calcification, ulceration, thrombosis)',
      'Macrophage + oxidised LDL = foam cell = early plaque',
    ],
    commonMistakes: [
      'Thinking atherosclerosis is purely a lipid storage disease — it is fundamentally an INFLAMMATORY process',
      'Confusing atherosclerosis (intima) with medial calcification (Mönckeberg) which affects the media',
      'Thinking HDL is harmful — low HDL is a risk factor; high HDL is protective',
    ],
    mnemonics: 'IMA (Intima-Media-Adventitia) — layers inside-out; Atherosclerosis hits the Intima first',
  },

  'skin-biopsy-types': {
    topic: 'skin-biopsy-types',
    keyFeatures: [
      'Gross examination = naked eye examination of specimen before processing (dissection)',
      'Principles: specimen ID, clinical history, anatomy, orientation marker (inking), measurement (LxWxD), describe surface macroscopically',
      'Cut all organs at 3 mm width (acceptable 3–5 mm)',
      'Types of skin specimens: Excision (ellipse/polygonal/wedge), Punch, Shave, Re-excision, Curette, Incision',
      'Punch biopsy: < 3 mm = embed intact on edge; ≥ 4 mm = bisect and embed both pieces',
      'Excisional biopsy: sliced bread pattern every 2–3 mm, first section from centre of lesion, ≤ 4 sections per cassette',
      'Orientation markers: suture, nick, notch, staple, dye, nail polish',
      'Breslow thickness: vertical depth of melanoma from granular layer to deepest point — key prognostic factor',
    ],
    layers: [
      { name: 'Punch Biopsy', description: 'Circular dermal punch. < 3mm: intact on edge. ≥ 4mm: bisect. For rashes, blisters, nail/alopecia biopsies.' },
      { name: 'Excisional Biopsy', description: 'Complete removal. Sliced bread pattern every 2–3mm. Orientated or non-orientated. Ink margins.' },
      { name: 'Shave Biopsy', description: 'Superficial tangential cut. For raised epidermal lesions. No deep dermis.' },
      { name: 'Incisional Biopsy', description: 'Partial removal of lesion. Used when full excision not appropriate (large lesions).' },
    ],
    identificationTips: [
      'Breslow thickness → most important prognostic factor for melanoma',
      'Clark levels 1–5: Epidermis → Papillary dermis → Papillary-reticular junction → Reticular dermis → Subcutis',
      'Ink = marks surgical margins; orientation = tells direction of specimen',
    ],
    commonMistakes: [
      'Thinking punch biopsy < 3mm should be bisected — it should be embedded INTACT on edge',
      'Confusing Breslow thickness (depth) with Clark level (anatomical layer)',
      'Forgetting that PAS stain is ordered at cut-up when fungal infection is queried (not as an orientation marker)',
    ],
    mnemonics: 'IPSRC for biopsy types: Incision, Punch, Shave, Re-excision, Curette; Breslow = Best prognostic indicator for melanoma',
  },

  'history-of-histology': {
    topic: 'history-of-histology',
    keyFeatures: [
      '17th Century: Robert Hooke (~1665) — advent of microscopy; Antonie van Leeuwenhoek (~1673) — staining cells with plant-based dyes',
      '19th Century: 1867 — formaldehyde introduced for embalming; mid-1800s — Toluidine Blue, first synthetic dye for histology',
      'Early 20th Century: 1922–1924 — Biological Stains Commission (BSC) standardises dye nomenclature',
      'Historical stains named after pioneers: Golgi (silver/neurons), Weigert (elastic fibres/myelin), Grocott (GMS/fungi), Masson (trichrome/connective tissue)',
    ],
    identificationTips: [
      'Golgi silver stain → orange-yellow background, black neuron processes',
      "Weigert's stain → stains elastic fibres dark (grey/black)",
      'GMS (Grocott) → black fungi on teal/green background',
      "Masson's trichrome → red muscle, blue/green collagen, dark nuclei",
    ],
    commonMistakes: [
      'Confusing Robert Hooke (microscopy) with Antonie van Leeuwenhoek (staining)',
      'Thinking Toluidine Blue was the first fixative — it was a synthetic dye',
      'Confusing GMS (fungi) with Golgi silver (neurons)',
    ],
    mnemonics: 'Go-We-Gro-Ma: Golgi=neurons, Weigert=elastic, Grocott=fungi, Masson=connective tissue',
  },

  'specimen-collection': {
    topic: 'specimen-collection',
    keyFeatures: [
      'Three sources: Surgical removal, Biopsies/Excision, Autopsy investigation',
      'Routine histopathology: tissue in 10% NBF at 10:1 fixative-to-tissue ratio',
      'Frozen sections: fresh tissue (NO fixative), delivered immediately to lab',
      'Specimens must reach fixative within 1 hour of excision; if delayed, store at 4°C',
      'Proper handling: labelled container; documentation: patient info, clinical history, site; transport: minimise time',
    ],
    identificationTips: [
      'Routine diagnosis = NBF fixative; Frozen section = fresh, no fixative',
      '10:1 rule — 10 volumes of fixative for every 1 volume of tissue',
      'Delay → autolysis; keep at 4°C if cannot fix within 1 hour',
    ],
    commonMistakes: [
      'Thinking frozen sections use frozen fixative — they use NO fixative at all',
      'Forgetting the 10:1 ratio (not 1:1 or 5:1)',
      'Assuming any delay is acceptable — fix within 1 hour is the standard',
    ],
    mnemonics: 'SBA: Surgical, Biopsy, Autopsy — the three specimen sources',
  },

  'fixation-preservation-objectives': {
    topic: 'fixation-preservation-objectives',
    keyFeatures: [
      'Maintain clear and consistent morphological features',
      'Retain tissue and cellular integrity',
      'Enable microscopic examination with minimal loss/destruction of structure',
      'Reduce/prevent autolysis (enzymatic self-digestion) and enzymatic destruction',
      'Protect tissue from micro-organism invasion',
      'First and most critical step — errors cannot be corrected downstream',
    ],
    identificationTips: [
      'Fixation ≠ staining — fixation preserves; staining visualises',
      'Pre-laboratory fixation: transfer to fixative within 1 hour; store at 4°C if delayed',
      'Delays and errors compromise diagnostic reliability irreversibly',
    ],
    commonMistakes: [
      'Thinking fixation also stains the tissue — it only preserves',
      'Assuming poor fixation can be compensated by longer staining times',
      'Forgetting that autolysis (enzymatic breakdown) is the main process fixation prevents',
    ],
    mnemonics: 'MARC-P: Morphology, Autolysis prevent, Retain integrity, Cellular integrity, Protect from microbes',
  },

  'fixation-methods': {
    topic: 'fixation-methods',
    keyFeatures: [
      'Chemicals used for fixation are called "fixatives" — introduced over 150 years ago',
      'Physical methods: Heating, Freeze-drying, Microwave technology',
      'Chemical methods — Coagulant: Alcohol (ethanol, methanol), Acetone',
      'Chemical methods — Cross-linking: Formaldehyde, Glutaraldehyde, other aldehydes',
      'Chemical methods — Compound: Alcoholic formalin',
      '10% NBF (Neutral Buffered Formalin): most common — penetrates rapidly, less shrinkage, permits special stains',
      'Fixation rate: ~1 hour per mm of tissue',
    ],
    identificationTips: [
      'NBF = best penetration and compatibility; glutaraldehyde = worst penetration',
      'Hot formalin (increased temperature) speeds up fixation',
      'Small biopsy: 1–2 hours; large tissue: 5–10+ hours',
    ],
    commonMistakes: [
      'Thinking glutaraldehyde is routinely used — it is mainly for electron microscopy',
      'Confusing coagulant fixatives (dehydrate proteins) with cross-linking fixatives (form covalent bonds)',
      'Forgetting that NBF is 10% formalin, NOT 10% formaldehyde (formalin is a 37% aqueous formaldehyde solution, so 10% formalin ≈ 3.7% formaldehyde)',
    ],
    mnemonics: 'P-F-M for physical: Physical=Preheat, Freeze-dry, Microwave; C-C-C for chemical: Coagulant, Cross-link, Compound',
  },

  'fixation-antigens': {
    topic: 'fixation-antigens',
    keyFeatures: [
      'Formaldehyde cross-links proteins → masks antibody binding sites → requires antigen retrieval in IHC',
      'Formaldehyde changes tertiary and quaternary structure (3D shape) but preserves primary (amino acid sequence) and secondary (helices/sheets)',
      'No fixation: some antigens require frozen sections (no fixation preserves native structure)',
      'Other fixatives for IHC: acetone, methanol, ethanol may be recommended by antibody manufacturer',
      'Impact: ANY fixation type alters antigen structure and may affect antibody binding',
    ],
    layers: [
      { name: 'Primary Structure', description: 'Exact sequence of amino acids — preserved by formaldehyde' },
      { name: 'Secondary Structure', description: 'Local folding into alpha-helices or beta-sheets (hydrogen bonds) — preserved by formaldehyde' },
      { name: 'Tertiary Structure', description: 'Overall 3D shape (folding of polypeptide) — CHANGED by formaldehyde cross-linking' },
      { name: 'Quaternary Structure', description: 'Multiple protein subunits (dimers, complexes) — CHANGED by formaldehyde cross-linking' },
    ],
    identificationTips: [
      'Primary/Secondary = preserved; Tertiary/Quaternary = altered by formalin',
      'Masked antigen → antigen retrieval required (heat or enzyme)',
      'Frozen sections → no fixation → native antigen structure preserved',
    ],
    commonMistakes: [
      'Thinking formaldehyde destroys the amino acid sequence — it preserves primary/secondary structure',
      'Confusing which structures are preserved vs altered (primary/secondary preserved; tertiary/quaternary altered)',
      'Forgetting that acetone/alcohol fixatives can also alter antigen binding',
    ],
    mnemonics: '1-2 Stay, 3-4 Change: Primary and Secondary structures are preserved; Tertiary and Quaternary are changed by formalin',
  },

  'fixation-factors': {
    topic: 'fixation-factors',
    keyFeatures: [
      'A — Buffering: pH 6–8 (near neutral); buffers: phosphate, bicarbonate, cacodylate, veronal',
      'B — Penetration: formalin and alcohol = best; glutaraldehyde = worst; thin sections penetrate faster',
      'C — Volume: 10:1 ratio (fixative:tissue); change fixative at intervals; agitation enhances fixation',
      'D — Temperature: higher temperature = faster fixation; hot formalin used in automated processors',
      'E — Concentration: formalin best at 10%; glutaraldehyde 0.25–4%; too high = artefacts like excessive heat',
      'F — Time Interval: faster is better; drying artefacts if exposed to air (use saline moist); delay = loss of organelles and nuclear shrinkage',
    ],
    identificationTips: [
      'ABCDEF: Buffering, Penetration, Volume, Temperature, Concentration, Time (interval)',
      '10:1 volume ratio is a key exam fact',
      'Glutaraldehyde: worst penetration of all common fixatives',
    ],
    commonMistakes: [
      'Thinking higher formalin concentration always improves fixation — too high causes artefacts',
      'Forgetting that agitation of the specimen in fixative ENHANCES fixation',
      'Confusing penetration rate (a constant for each fixative) with concentration',
    ],
    mnemonics: 'A Big Van Takes Careful Time: Airlock→Buffering, Big→Penetration, Van→Volume, Takes→Temperature, Careful→Concentration, Time→Time interval',
  },

  'lab-safety-overview': {
    topic: 'lab-safety-overview',
    keyFeatures: [
      'Three hazard categories: Chemical, Physical, Biological',
      'OHS: formalin/glutaraldehyde/aldehydes pose health and environmental hazards',
      'PPE required: gloves, goggles/safety glasses, lab coat',
      'Proper ventilation and fume extraction (fume hoods) are mandatory',
      'Spill response — CIRE: Contain, Inform, Remove, Evacuate, call Emergency',
      'Future: alternatives to toxic chemicals, better safety education, duty of care',
    ],
    identificationTips: [
      'Chemical hazards → GHS pictograms, MSDS documentation',
      'Physical hazards → sharp blades, hot wax, glass, electrical',
      'Biological hazards → infectious patient samples, needle-stick, bodily fluids',
    ],
    commonMistakes: [
      'Thinking only formalin is a chemical hazard — xylene, mercury, picric acid, OsO4, and DAB are also hazardous',
      'Forgetting that biological hazards include prion diseases which resist standard disinfection',
      'Assuming alphabetical storage of chemicals is acceptable — it is NOT (chemical incompatibility)',
    ],
    mnemonics: 'CPB: Chemical, Physical, Biological — three lab hazard categories',
  },

  'chemical-hazards-histology': {
    topic: 'chemical-hazards-histology',
    keyFeatures: [
      'Formaldehyde: irritant, possible carcinogen (10% = hazardous substance; 37% = Category 2 carcinogen)',
      'Acetone, xylene: volatile solvents requiring fume hoods',
      'Mercury: toxic heavy metal — disposed of by registered contractors only',
      'Picric acid: explosive when DRY — must always be kept moist',
      'OsO4 (osmium tetroxide): highly toxic and corrosive — use only in fume hood',
      'DAB (diaminobenzidine): carcinogenic IHC chromogen',
      'GHS system: standardised hazard pictograms (skull/crossbones, flame, corrosion, exclamation, health hazard, environment)',
      'Chemical storage: segregate by compatibility, NOT alphabetically',
    ],
    identificationTips: [
      'Skull & crossbones = acute toxicity (severe)',
      'Flame = flammable; Corrosion = corrosive/reactive; Exclamation = irritant/harmful',
      'Health hazard silhouette = carcinogen/reproductive toxin/sensitiser',
    ],
    commonMistakes: [
      'Thinking 10% formalin is a dangerous good — it is hazardous but NOT dangerous goods classified',
      'Forgetting picric acid must stay moist — dry picric acid is explosive',
      'Confusing MSDS with GHS — MSDS is the data sheet; GHS is the global hazard classification system',
    ],
    mnemonics: 'FAMP-OD: Formaldehyde, Acetone/xylene, Mercury, Picric acid, OsO4, DAB — the six main chemical hazards in histology',
  },

  'physical-biological-hazards': {
    topic: 'physical-biological-hazards',
    keyFeatures: [
      'Physical: sharp microtome blades (MAJOR), glass, electrical, hot wax, falls, freezer burns, latex sensitivity, ergonomic injuries',
      'Ergonomic risks: carpal tunnel, wrist issues, back issues, tendonitis, trigger finger from repetitive microtome use',
      'Biological: infectious patient samples (HBV, HCV, HIV, TB), needle-stick, bodily fluids, fresh frozen tissue/cryostat',
      'Prevention (biological): vaccinations (Hep B), gloves, lab coat, safety glasses',
      'Prion diseases (CJD, BSE, Scrapie, FFI, Kuru): caused by misfolded PrPSc forming beta-pleated sheets; resistant to standard disinfection',
      'Prion decontamination: 1–2N NaOH, strong sodium hypochlorite (1M / 2% available chlorine), or autoclaving at 134°C',
      'Universal precautions: 70% ethanol (benches/instruments); hypochlorite 5–15% (infectious agents); autoclave 121°C; biohazard bags for disposal',
    ],
    identificationTips: [
      'Prions are NOT killed by formalin fixation — they require specific decontamination',
      '70% ethanol = bench disinfectant; hypochlorite = most infectious agents; autoclave 134°C = prions',
      'Sharps disposal: yellow sharps containers',
    ],
    commonMistakes: [
      'Thinking formalin kills prions — it does NOT',
      'Confusing 121°C (standard autoclave) with 134°C (required for prions)',
      'Forgetting that fresh/unfixed frozen sections in the cryostat are a major biological hazard source',
    ],
    mnemonics: 'PRION: Protein misfolded, Resistant to standard disinfection, Infectious via CNS tissue, OsO4 not needed, NaOH/hypochlorite/autoclave required',
  },

  'slide-distribution': {
    topic: 'slide-distribution',
    keyFeatures: [
      'Final step in the histological workflow',
      'Stained slides organised into slide folders',
      'Distributed according to urgency and correct specialist/pathologist',
      'Slides scanned to verify order completeness before distribution',
      'Pathologist examines slides under a light microscope and generates report',
    ],
    identificationTips: [
      'Urgent cases are prioritised and sent immediately',
      'Each folder contains all stains ordered for a given patient/case',
      'Barcode scanning ensures no slides are missing from the order',
    ],
    commonMistakes: [
      'Thinking slide distribution means the slides are discarded — slides are filed and archived after reporting',
      'Forgetting that slide distribution is the LAST lab step (reporting by pathologist comes after)',
    ],
    mnemonics: 'Distribute: Sort by Urgency → Scan to verify → Send to Specialist',
  },
};
