export type Topic =
  | "artery"
  | "vein"
  | "trachea"
  | "oesophagus"
  | "thyroid-gland"
  | "liver"
  | "kidney"
  | "lung"
  | "bronchus"
  | "bronchiole"
  | "ileum"
  | "thick-skin"
  | "thin-skin"
  | "hairy-skin"
  | "urinary-bladder"
  | "histological-workflow"
  | "specimen-identification"
  | "accessioning"
  | "fixation"
  | "gross-examination"
  | "tissue-processing"
  | "embedding"
  | "sectioning"
  | "staining"
  | "slide-distribution"
  | "skin-epidermis"
  | "skin-dermis"
  | "skin-appendages"
  | "basal-cell-carcinoma"
  | "squamous-cell-carcinoma"
  | "malignant-melanoma"
  | "islets-of-langerhans"
  | "diabetes-mellitus"
  | "epithelial-tissue"
  | "simple-epithelium"
  | "stratified-epithelium"
  | "connective-tissue-overview"
  | "connective-tissue-fibres"
  | "loose-connective-tissue"
  | "dense-connective-tissue"
  | "cartilage"
  | "bone"
  | "blood-tissue"
  | "nervous-tissue"
  | "muscular-tissue"
  | "he-staining-chemistry"
  | "he-staining-procedure"
  | "van-gieson-stain"
  | "masson-trichrome"
  | "quality-control-overview"
  | "qc-three-phases"
  | "pre-processing-artefacts"
  | "fixation-artefacts"
  | "processing-artefacts"
  | "ihc-principles"
  | "ihc-antibody-types"
  | "ihc-techniques"
  | "ihc-antigen-retrieval"
  | "ihc-controls-applications"
  | "cytology-overview"
  | "pap-stain-preparation"
  | "cervical-cancer-hpv"
  | "pap-smear-results"
  | "cytology-morphology"
  | "history-of-histology"
  | "specimen-collection"
  | "fixation-preservation-objectives"
  | "fixation-methods"
  | "fixation-antigens"
  | "fixation-factors"
  | "lab-safety-overview"
  | "chemical-hazards-histology"
  | "physical-biological-hazards"
  | "cell-injury-concepts"
  | "reversible-irreversible-injury"
  | "cellular-adaptations"
  | "inflammation"
  | "atherosclerosis"
  | "skin-biopsy-types";

export interface Question {
  id: string;
  topic: Topic;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

export const TOPIC_LABELS: Record<Topic, string> = {
  artery: "Artery",
  vein: "Vein",
  trachea: "Trachea",
  oesophagus: "Oesophagus",
  "thyroid-gland": "Thyroid Gland",
  liver: "Liver",
  kidney: "Kidney",
  lung: "Lung",
  bronchus: "Bronchus",
  bronchiole: "Bronchiole",
  ileum: "Ileum",
  "thick-skin": "Thick Skin",
  "thin-skin": "Thin Skin",
  "hairy-skin": "Hairy Skin",
  "urinary-bladder": "Urinary Bladder",
  "histological-workflow": "Histological Workflow",
  "specimen-identification": "Specimen Identification & Labelling",
  accessioning: "Accessioning",
  fixation: "Fixation",
  "gross-examination": "Gross Examination",
  "tissue-processing": "Tissue Processing",
  embedding: "Embedding",
  sectioning: "Sectioning",
  staining: "Staining",
  "slide-distribution": "Slide Distribution",
  "skin-epidermis": "The Epidermis",
  "skin-dermis": "The Dermis & Hypodermis",
  "skin-appendages": "Skin Appendages",
  "basal-cell-carcinoma": "Basal Cell Carcinoma",
  "squamous-cell-carcinoma": "Squamous Cell Carcinoma",
  "malignant-melanoma": "Malignant Melanoma",
  "islets-of-langerhans": "Islets of Langerhans (Pancreas)",
  "diabetes-mellitus": "Diabetes Mellitus",
  "he-staining-chemistry": "H&E Staining Chemistry",
  "he-staining-procedure": "H&E Procedure & Troubleshooting",
  "van-gieson-stain": "Van Gieson & Verhoeff's Stains",
  "masson-trichrome": "Masson's Trichrome & Collagen Types",
  "quality-control-overview": "Quality Control Overview",
  "qc-three-phases": "QC: 3 Phases of Operation",
  "pre-processing-artefacts": "Pre-Processing Artefacts",
  "fixation-artefacts": "Fixation Artefacts",
  "processing-artefacts": "Processing & Post-Processing Artefacts",
  "ihc-principles": "IHC Principles & Antibody Structure",
  "ihc-antibody-types": "Monoclonal vs Polyclonal Antibodies",
  "ihc-techniques": "IHC Detection Techniques",
  "ihc-antigen-retrieval": "Antigen Retrieval & Fixation in IHC",
  "ihc-controls-applications": "IHC Controls, Chromogens, Applications & Frozen Section",
  "cytology-overview": "Cytology Overview & Collection Methods",
  "pap-stain-preparation": "Pap Stain & Cytological Preparation",
  "cervical-cancer-hpv": "Cervical Cancer & HPV",
  "pap-smear-results": "Pap Smear Results & Interpretation",
  "cytology-morphology": "Cytology: Normal vs Cancer Cell Morphology",
  "history-of-histology": "History of Histology & Histopathology",
  "specimen-collection": "Specimen Collection & Types",
  "fixation-preservation-objectives": "Fixation: Objectives & First Steps",
  "fixation-methods": "Fixation: Types & Methods",
  "fixation-antigens": "Fixation of Antigens & Protein Structure",
  "fixation-factors": "Factors Affecting Fixation (A–F)",
  "lab-safety-overview": "Lab Safety Overview & OHS",
  "chemical-hazards-histology": "Chemical Hazards in Histology",
  "physical-biological-hazards": "Physical & Biological Hazards",
  "cell-injury-concepts": "Cell Injury Concepts & Histopathology",
  "reversible-irreversible-injury": "Reversible & Irreversible Cell Injury",
  "cellular-adaptations": "Cellular Adaptations",
  "inflammation": "Inflammation",
  "atherosclerosis": "Atherosclerosis",
  "skin-biopsy-types": "Skin Biopsy Types & Gross Examination",
  "epithelial-tissue": "Epithelial Tissue",
  "simple-epithelium": "Simple Epithelium",
  "stratified-epithelium": "Stratified Epithelium",
  "connective-tissue-overview": "Connective Tissue Overview",
  "connective-tissue-fibres": "CT Fibres & Ground Substance",
  "loose-connective-tissue": "Loose Connective Tissue",
  "dense-connective-tissue": "Dense Connective Tissue",
  cartilage: "Cartilage",
  bone: "Bone",
  "blood-tissue": "Blood (Fluid CT)",
  "nervous-tissue": "Nervous Tissue",
  "muscular-tissue": "Muscular Tissue",
};

export const TOPICS: Topic[] = Object.keys(TOPIC_LABELS) as Topic[];

export const ALL_QUESTIONS: Question[] = [
  // ── ARTERY ──────────────────────────────────────────────────────────────
  {
    id: "art-1",
    topic: "artery",
    difficulty: "easy",
    question:
      "On an H&E section you see a vessel with a very thick wall composed of three distinct tunica layers. Which vessel is this?",
    options: ["Vein", "Artery", "Lymphatic vessel", "Capillary"],
    correctIndex: 1,
    explanation:
      "Arteries have thick walls composed of three distinct tunica layers: tunica intima, tunica media, and tunica adventitia. Veins have thinner walls because their tunica media is thin.",
  },
  {
    id: "art-2",
    topic: "artery",
    difficulty: "medium",
    question:
      "The internal elastic lamina of an artery appears as what in H&E staining?",
    options: [
      "A blue wavy line",
      "A pink/eosinophilic streak",
      "A clear unstained band",
      "A purple granular layer",
    ],
    correctIndex: 1,
    explanation:
      "The internal elastic lamina forms a distinctive pink (eosinophilic) wavy streak in H&E sections, sitting between the tunica intima and tunica media.",
  },
  {
    id: "art-3",
    topic: "artery",
    difficulty: "medium",
    question:
      "Which cell nuclei are most frequent in the tunica media of an artery?",
    options: [
      "Fibroblast nuclei",
      "Endothelial cell nuclei",
      "Smooth muscle cell nuclei",
      "Macrophage nuclei",
    ],
    correctIndex: 2,
    explanation:
      "The tunica media of an artery is dominated by smooth muscle cells. Their nuclei appear frequent and elongated in H&E sections.",
  },
  {
    id: "art-4",
    topic: "artery",
    difficulty: "hard",
    question:
      "Collagen fibres and sparse connective tissue cell nuclei are characteristic of which arterial layer?",
    options: [
      "Tunica intima",
      "Tunica media",
      "Tunica adventitia",
      "Internal elastic lamina",
    ],
    correctIndex: 2,
    explanation:
      "The tunica adventitia (outermost layer) contains collagen fibres and a few connective tissue (fibroblast) cell nuclei. This distinguishes it from the smooth-muscle-rich tunica media.",
  },
  {
    id: "art-5",
    topic: "artery",
    difficulty: "easy",
    question:
      "Compared to a vein at the same magnification, an artery appears:",
    options: [
      "Larger lumen and thinner wall",
      "More compact with a thicker wall",
      "Floppy and irregular in shape",
      "Without a distinct wall layering",
    ],
    correctIndex: 1,
    explanation:
      "Arteries are more compact with thicker walls than veins. Veins often appear floppy and irregular due to their thinner, less muscular walls.",
  },
  {
    id: "art-6",
    topic: "artery",
    difficulty: "hard",
    question:
      "What is the name of the layer of endothelial cells that lines the lumen of an artery?",
    options: [
      "Tunica media",
      "Tunica adventitia",
      "Tunica intima",
      "Elastic lamina",
    ],
    correctIndex: 2,
    explanation:
      "The tunica intima is the innermost layer and is lined by a single layer of endothelial cells in contact with the blood.",
  },

  // ── VEIN ────────────────────────────────────────────────────────────────
  {
    id: "vein-1",
    topic: "vein",
    difficulty: "easy",
    question: "What makes the wall of a vein thinner than that of an artery?",
    options: [
      "Absence of tunica intima",
      "A thin tunica media with less smooth muscle",
      "Absence of connective tissue",
      "Lack of an endothelial lining",
    ],
    correctIndex: 1,
    explanation:
      "Veins have a thin tunica media compared to arteries. The reduced smooth muscle mass makes the wall thinner and more compliant.",
  },
  {
    id: "vein-2",
    topic: "vein",
    difficulty: "easy",
    question:
      "On an H&E section, a vessel appears floppy and irregular in shape with a relatively thin wall. This is most consistent with:",
    options: ["Artery", "Arteriole", "Vein", "Capillary"],
    correctIndex: 2,
    explanation:
      "Veins appear floppy and irregular in shape in histological sections because their walls are thinner and less rigid than arteries.",
  },
  {
    id: "vein-3",
    topic: "vein",
    difficulty: "medium",
    question: "Veins use which structure to prevent backflow of blood?",
    options: [
      "Internal elastic lamina",
      "Valves",
      "Smooth muscle sphincters",
      "Pericytes",
    ],
    correctIndex: 1,
    explanation:
      "Veins contain valves—folds of the tunica intima—that prevent the backflow of blood and aid venous return against gravity.",
  },
  {
    id: "vein-4",
    topic: "vein",
    difficulty: "medium",
    question:
      "A vessel has a wider lumen than the adjacent artery. Its wall is thin and the tunica media is poorly defined. This vessel is:",
    options: ["Arteriole", "Vein", "Lymphatic", "Artery"],
    correctIndex: 1,
    explanation:
      "Veins typically have wider lumens than adjacent arteries (lumen size may vary), with thin walls and a poorly defined tunica media.",
  },
  {
    id: "vein-5",
    topic: "vein",
    difficulty: "hard",
    question:
      "Which pair of features most reliably distinguishes a vein from an artery in an H&E section?",
    options: [
      "Rounded lumen vs collapsed lumen",
      "Thick wall + internal elastic lamina vs thin wall + no prominent elastic lamina",
      "Presence of red blood cells vs absence",
      "Larger diameter vs smaller diameter",
    ],
    correctIndex: 1,
    explanation:
      "The most reliable features are: arteries have thick walls and a prominent internal elastic lamina (pink streak), while veins have thin walls without a prominent internal elastic lamina.",
  },

  // ── TRACHEA ─────────────────────────────────────────────────────────────
  {
    id: "trach-1",
    topic: "trachea",
    difficulty: "easy",
    question: "What type of epithelium lines the lumen of the trachea?",
    options: [
      "Stratified squamous epithelium",
      "Simple cuboidal epithelium",
      "Pseudostratified ciliated columnar epithelium",
      "Transitional epithelium",
    ],
    correctIndex: 2,
    explanation:
      "The trachea is lined by pseudostratified ciliated columnar epithelium (respiratory epithelium) containing goblet cells that secrete mucus.",
  },
  {
    id: "trach-2",
    topic: "trachea",
    difficulty: "medium",
    question:
      "Which structural element provides rigid support to the tracheal wall and appears as pale blue/purple hyaline cartilage in H&E?",
    options: [
      "Elastic cartilage rings",
      "Hyaline cartilage C-rings",
      "Fibrocartilage plates",
      "Bone trabeculae",
    ],
    correctIndex: 1,
    explanation:
      "The trachea is supported by C-shaped hyaline cartilage rings. These rings are incomplete posteriorly (where the trachealis muscle spans the gap) and appear pale blue-purple in H&E.",
  },
  {
    id: "trach-3",
    topic: "trachea",
    difficulty: "medium",
    question: "Goblet cells in tracheal epithelium serve what function?",
    options: [
      "Gas exchange",
      "Mucus secretion to trap inhaled particles",
      "Surfactant production",
      "Antigen presentation",
    ],
    correctIndex: 1,
    explanation:
      "Goblet cells secrete mucus that traps inhaled particles and pathogens. The cilia then beat to move the mucus (with trapped material) up toward the pharynx.",
  },
  {
    id: "trach-4",
    topic: "trachea",
    difficulty: "hard",
    question:
      "The trachealis muscle, which spans the posterior gap of tracheal cartilage rings, is composed of:",
    options: [
      "Skeletal muscle",
      "Smooth muscle",
      "Cardiac muscle",
      "Elastic fibres only",
    ],
    correctIndex: 1,
    explanation:
      "The trachealis muscle is smooth muscle. It spans the posterior open portion of the C-shaped cartilage rings, allowing the trachea to expand during swallowing.",
  },
  {
    id: "trach-5",
    topic: "trachea",
    difficulty: "easy",
    question:
      "A histological section shows pseudostratified ciliated epithelium overlying C-shaped cartilage. This is most likely:",
    options: ["Oesophagus", "Trachea", "Urinary bladder", "Ileum"],
    correctIndex: 1,
    explanation:
      "The combination of pseudostratified ciliated columnar epithelium and C-shaped hyaline cartilage rings is characteristic of the trachea.",
  },

  // ── OESOPHAGUS ──────────────────────────────────────────────────────────
  {
    id: "oes-1",
    topic: "oesophagus",
    difficulty: "easy",
    question: "The oesophagus is lined by which type of epithelium?",
    options: [
      "Simple columnar epithelium",
      "Stratified squamous epithelium",
      "Pseudostratified ciliated columnar epithelium",
      "Transitional epithelium",
    ],
    correctIndex: 1,
    explanation:
      "The oesophagus is lined by non-keratinised stratified squamous epithelium, adapted to withstand mechanical abrasion from food boluses.",
  },
  {
    id: "oes-2",
    topic: "oesophagus",
    difficulty: "medium",
    question:
      "What feature allows you to distinguish the oesophagus from the trachea on an H&E section?",
    options: [
      "Presence of smooth muscle",
      "Oesophagus has stratified squamous epithelium; trachea has pseudostratified ciliated columnar",
      "Oesophagus has cartilage; trachea does not",
      "Oesophagus has a larger lumen",
    ],
    correctIndex: 1,
    explanation:
      "The key distinction is the epithelium: oesophagus has stratified squamous epithelium, while the trachea has pseudostratified ciliated columnar (respiratory) epithelium. The trachea also has cartilage C-rings.",
  },
  {
    id: "oes-3",
    topic: "oesophagus",
    difficulty: "medium",
    question: "The muscularis externa of the upper oesophagus is composed of:",
    options: [
      "Smooth muscle only",
      "Skeletal muscle only",
      "A mixture of skeletal and smooth muscle",
      "Cardiac muscle",
    ],
    correctIndex: 2,
    explanation:
      "The upper third of the oesophageal muscularis externa contains skeletal muscle; the middle third contains mixed skeletal and smooth muscle; the lower third contains smooth muscle only.",
  },
  {
    id: "oes-4",
    topic: "oesophagus",
    difficulty: "hard",
    question:
      "Oesophageal glands proper (deep glands) are found in which layer?",
    options: ["Mucosa", "Submucosa", "Muscularis externa", "Adventitia"],
    correctIndex: 1,
    explanation:
      "The oesophageal glands proper are mucous glands located in the submucosa. Their ducts pierce the muscularis mucosae to empty into the lumen.",
  },
  {
    id: "oes-5",
    topic: "oesophagus",
    difficulty: "easy",
    question:
      "A section shows a thick multilayered lining of flat cells at the surface with rounder cells deeper. No cilia or cartilage are seen. This tissue is most likely:",
    options: [
      "Trachea",
      "Oesophagus",
      "Kidney collecting duct",
      "Urinary bladder",
    ],
    correctIndex: 1,
    explanation:
      "The description matches stratified squamous epithelium (non-keratinised), which lines the oesophagus. The absence of cilia and cartilage rules out trachea.",
  },

  // ── THYROID GLAND ────────────────────────────────────────────────────────
  {
    id: "thy-1",
    topic: "thyroid-gland",
    difficulty: "easy",
    question: "The structural and functional unit of the thyroid gland is:",
    options: [
      "Hepatic lobule",
      "Thyroid follicle",
      "Renal corpuscle",
      "Pulmonary alveolus",
    ],
    correctIndex: 1,
    explanation:
      "The thyroid follicle is the structural and functional unit of the thyroid gland, consisting of a spherical layer of follicular cells surrounding a central colloid-filled space.",
  },
  {
    id: "thy-2",
    topic: "thyroid-gland",
    difficulty: "easy",
    question:
      "The pink homogeneous material that fills thyroid follicles in H&E sections is:",
    options: [
      "Lipid droplets",
      "Colloid (thyroglobulin)",
      "Glycogen",
      "Fibrin",
    ],
    correctIndex: 1,
    explanation:
      "Thyroid follicles are filled with colloid, mainly composed of thyroglobulin—the storage form of thyroid hormone. It stains uniformly pink/eosinophilic in H&E.",
  },
  {
    id: "thy-3",
    topic: "thyroid-gland",
    difficulty: "medium",
    question:
      "Follicular cells (principal cells) of the thyroid gland are characteristically:",
    options: [
      "Tall columnar when active, flat when inactive",
      "Always simple squamous",
      "Multinucleated giant cells",
      "Always simple columnar",
    ],
    correctIndex: 0,
    explanation:
      "Follicular cell height reflects activity: tall columnar when actively synthesising hormone (active), flat/squamous when inactive. This is a key identification feature.",
  },
  {
    id: "thy-4",
    topic: "thyroid-gland",
    difficulty: "medium",
    question: "Parafollicular cells (C cells) of the thyroid gland produce:",
    options: [
      "Thyroxine (T4)",
      "Triiodothyronine (T3)",
      "Calcitonin",
      "Parathyroid hormone",
    ],
    correctIndex: 2,
    explanation:
      "Parafollicular cells (C cells) are located between follicles or within the follicular wall and secrete calcitonin, which lowers blood calcium.",
  },
  {
    id: "thy-5",
    topic: "thyroid-gland",
    difficulty: "hard",
    question:
      "On H&E, you see spherical structures filled with pink homogeneous material, surrounded by a simple epithelium. Scattered pale cells appear between follicles. What are those pale cells?",
    options: [
      "Kupffer cells",
      "Parafollicular (C) cells",
      "Chief cells",
      "Goblet cells",
    ],
    correctIndex: 1,
    explanation:
      "Parafollicular (C) cells appear as pale, large cells scattered between or within follicles. They do not border the colloid and are responsible for calcitonin secretion.",
  },

  // ── LIVER ───────────────────────────────────────────────────────────────
  {
    id: "liv-1",
    topic: "liver",
    difficulty: "easy",
    question:
      "The functional unit of the liver (classical lobule) is centred on:",
    options: [
      "Portal triad",
      "Central vein",
      "Bile ductule",
      "Hepatic sinusoid",
    ],
    correctIndex: 1,
    explanation:
      "The classical hepatic lobule is a hexagonal unit centred on the central vein (central/terminal hepatic venule). Portal triads lie at the periphery (corners).",
  },
  {
    id: "liv-2",
    topic: "liver",
    difficulty: "easy",
    question: "A portal triad contains which THREE structures?",
    options: [
      "Central vein, hepatic artery, bile duct",
      "Portal vein branch, hepatic artery branch, bile duct",
      "Portal vein, lymphatic, central vein",
      "Hepatic sinusoid, bile canaliculus, Kupffer cell",
    ],
    correctIndex: 1,
    explanation:
      "A portal triad (portal tract) contains a branch of the portal vein, a branch of the hepatic artery, and a bile duct, surrounded by connective tissue.",
  },
  {
    id: "liv-3",
    topic: "liver",
    difficulty: "medium",
    question: "Hepatocytes in the liver are arranged as:",
    options: [
      "Random clusters",
      "Cords or plates radiating from the central vein",
      "Follicles around a central colloid",
      "Tubular structures with lumens",
    ],
    correctIndex: 1,
    explanation:
      "Hepatocytes are arranged in cords or plates (one to two cells thick) that radiate from the central vein toward the portal triads, with sinusoids running between the cords.",
  },
  {
    id: "liv-4",
    topic: "liver",
    difficulty: "medium",
    question: "Kupffer cells are resident macrophages of the liver located in:",
    options: [
      "Bile ducts",
      "The space of Disse",
      "The lining of hepatic sinusoids",
      "Portal triads",
    ],
    correctIndex: 2,
    explanation:
      "Kupffer cells are resident macrophages that line the hepatic sinusoids. They phagocytose bacteria, old red blood cells, and foreign particles from portal blood.",
  },
  {
    id: "liv-5",
    topic: "liver",
    difficulty: "hard",
    question: "The space of Disse is located between:",
    options: [
      "Adjacent hepatocytes",
      "Hepatocytes and sinusoidal endothelium",
      "Portal vein and hepatic artery",
      "Bile duct and hepatocyte",
    ],
    correctIndex: 1,
    explanation:
      "The perisinusoidal space (space of Disse) lies between hepatocytes and the sinusoidal endothelium. It contains plasma, lipoproteins, stellate cells (Ito cells), and reticular fibres.",
  },
  {
    id: "liv-6",
    topic: "liver",
    difficulty: "easy",
    question:
      "A section shows hexagonal units with a vein in the centre and connective tissue with three small vessel-like structures at each corner. This is:",
    options: ["Kidney cortex", "Liver", "Thyroid gland", "Lung"],
    correctIndex: 1,
    explanation:
      "This describes the classic hepatic lobule: a central vein in the middle, portal triads at the corners, and hepatocyte cords in between.",
  },

  // ── KIDNEY ──────────────────────────────────────────────────────────────
  {
    id: "kid-1",
    topic: "kidney",
    difficulty: "easy",
    question: "Bowman's capsule (parietal layer) is lined by which epithelium?",
    options: [
      "Simple cuboidal",
      "Simple squamous",
      "Transitional",
      "Stratified squamous",
    ],
    correctIndex: 1,
    explanation:
      "The parietal layer of Bowman's capsule is lined by simple squamous epithelium. The visceral layer (podocytes) is specialised and wraps around glomerular capillaries.",
  },
  {
    id: "kid-2",
    topic: "kidney",
    difficulty: "medium",
    question: "Collecting ducts in the kidney are identified by:",
    options: [
      "Simple squamous epithelium with no lateral borders",
      "Simple cuboidal epithelium with prominent lateral cell borders",
      "Pseudostratified columnar epithelium",
      "Brush border of microvilli",
    ],
    correctIndex: 1,
    explanation:
      "Collecting ducts have simple cuboidal epithelium with prominent lateral cell borders, making individual cells distinctly visible. This differentiates them from other tubules.",
  },
  {
    id: "kid-3",
    topic: "kidney",
    difficulty: "medium",
    question: "The renal corpuscle consists of:",
    options: [
      "Proximal convoluted tubule + distal convoluted tubule",
      "Glomerulus + Bowman's capsule",
      "Loop of Henle + collecting duct",
      "Macula densa + juxtaglomerular cells",
    ],
    correctIndex: 1,
    explanation:
      "The renal corpuscle is composed of the glomerulus (a tuft of capillaries) surrounded by Bowman's capsule. Together they initiate filtration.",
  },
  {
    id: "kid-4",
    topic: "kidney",
    difficulty: "hard",
    question:
      "The proximal convoluted tubule (PCT) is distinguished from the distal convoluted tubule (DCT) by:",
    options: [
      "Larger cells with a prominent brush border (microvilli) in PCT",
      "Larger cells with cilia in PCT",
      "Smaller lumen and thicker wall in PCT",
      "Presence of goblet cells in PCT",
    ],
    correctIndex: 0,
    explanation:
      "The PCT has larger cells with an apical brush border of microvilli (visible as a fuzzy pink line), a smaller lumen, and fewer nuclei visible per cross-section. The DCT has smaller cells, a clearer lumen, and no brush border.",
  },
  {
    id: "kid-5",
    topic: "kidney",
    difficulty: "easy",
    question: "The terminal portion of the distal tubule empties into:",
    options: [
      "Proximal tubule",
      "Collecting duct",
      "Loop of Henle",
      "Glomerulus",
    ],
    correctIndex: 1,
    explanation:
      "The distal convoluted tubule empties through collecting tubules into the collecting duct in the medullary ray, which then drains to the renal pelvis.",
  },
  {
    id: "kid-6",
    topic: "kidney",
    difficulty: "medium",
    question:
      "A round structure in the kidney cortex shows a tuft of capillaries surrounded by a capsule of simple squamous cells. This is:",
    options: [
      "Hepatic lobule",
      "Thyroid follicle",
      "Renal corpuscle",
      "Pulmonary alveolus",
    ],
    correctIndex: 2,
    explanation:
      "The renal corpuscle with its glomerulus (capillary tuft) and Bowman's capsule is the hallmark of kidney cortex histology.",
  },

  // ── LUNG ────────────────────────────────────────────────────────────────
  {
    id: "lung-1",
    topic: "lung",
    difficulty: "easy",
    question: "Alveoli are lined primarily by which two cell types?",
    options: [
      "Goblet cells and ciliated cells",
      "Type I and Type II pneumocytes",
      "Clara cells and basal cells",
      "Smooth muscle cells and endothelial cells",
    ],
    correctIndex: 1,
    explanation:
      "Alveoli are lined by Type I pneumocytes (thin, for gas exchange) and Type II pneumocytes (cuboidal, produce surfactant). Type I cells cover ~95% of the alveolar surface.",
  },
  {
    id: "lung-2",
    topic: "lung",
    difficulty: "medium",
    question: "Type II pneumocytes produce:",
    options: ["Mucus", "Surfactant", "Immunoglobulins", "Lysozyme"],
    correctIndex: 1,
    explanation:
      "Type II pneumocytes produce pulmonary surfactant, which reduces alveolar surface tension and prevents alveolar collapse during expiration.",
  },
  {
    id: "lung-3",
    topic: "lung",
    difficulty: "medium",
    question: "Alveolar septa (walls between alveoli) contain:",
    options: [
      "Hyaline cartilage",
      "Dense connective tissue",
      "Capillaries and elastic fibres",
      "Lymphoid tissue",
    ],
    correctIndex: 2,
    explanation:
      "Alveolar septa contain a dense capillary network intimately applied to the alveolar epithelium, plus elastic fibres that allow recoil during expiration.",
  },
  {
    id: "lung-4",
    topic: "lung",
    difficulty: "hard",
    question: "Alveolar macrophages (dust cells) are found in:",
    options: [
      "Alveolar walls only",
      "Alveolar spaces and on alveolar walls",
      "Bronchial cartilage",
      "Pulmonary arteries",
    ],
    correctIndex: 1,
    explanation:
      "Alveolar macrophages (dust cells) migrate over alveolar surfaces and into alveolar spaces to phagocytose inhaled particles and pathogens.",
  },
  {
    id: "lung-5",
    topic: "lung",
    difficulty: "easy",
    question:
      "Lung tissue on H&E appears as a sponge-like network of thin-walled air spaces. These air spaces are:",
    options: ["Bronchioles", "Alveoli", "Pleural spaces", "Lymphatic vessels"],
    correctIndex: 1,
    explanation:
      "The characteristic sponge-like appearance of lung parenchyma is due to the numerous alveoli—thin-walled sac-like structures optimised for gas exchange.",
  },

  // ── BRONCHUS ────────────────────────────────────────────────────────────
  {
    id: "bron-1",
    topic: "bronchus",
    difficulty: "easy",
    question:
      "What structural feature is present in bronchi but ABSENT in bronchioles?",
    options: [
      "Smooth muscle",
      "Ciliated epithelium",
      "Hyaline cartilage",
      "Goblet cells",
    ],
    correctIndex: 2,
    explanation:
      "Bronchi contain irregular plates of hyaline cartilage in their walls. Bronchioles lack cartilage—this is the primary histological distinction between the two.",
  },
  {
    id: "bron-2",
    topic: "bronchus",
    difficulty: "medium",
    question: "The epithelium of a bronchus is:",
    options: [
      "Simple squamous",
      "Pseudostratified ciliated columnar with goblet cells",
      "Stratified squamous",
      "Simple cuboidal without cilia",
    ],
    correctIndex: 1,
    explanation:
      "Like the trachea, bronchi are lined by pseudostratified ciliated columnar epithelium with goblet cells, which gradually transitions to simpler epithelium in smaller airways.",
  },
  {
    id: "bron-3",
    topic: "bronchus",
    difficulty: "medium",
    question: "A bronchovascular bundle consists of:",
    options: [
      "A bronchus + pulmonary artery branch + pulmonary vein branch",
      "A bronchus + pulmonary artery branch running together",
      "An alveolar duct + alveolar sac",
      "Terminal bronchiole + respiratory bronchiole",
    ],
    correctIndex: 1,
    explanation:
      "The bronchovascular bundle is the paired association of a bronchus (or bronchiole) with a branch of the pulmonary artery. They run together through the lung parenchyma.",
  },
  {
    id: "bron-4",
    topic: "bronchus",
    difficulty: "hard",
    question:
      "Bronchial-associated lymphoid tissue (BALT) is found in the walls of:",
    options: ["Alveoli only", "Bronchi", "Collecting ducts", "Trachea only"],
    correctIndex: 1,
    explanation:
      "BALT consists of aggregates of lymphoid tissue (lymphocytes, plasma cells) in the bronchial wall, providing local immune defence against inhaled pathogens.",
  },

  // ── BRONCHIOLE ───────────────────────────────────────────────────────────
  {
    id: "bronch-1",
    topic: "bronchiole",
    difficulty: "easy",
    question:
      "The key histological difference between a bronchiole and a bronchus is that bronchioles:",
    options: [
      "Have more goblet cells",
      "Lack cartilage",
      "Have thicker walls",
      "Have stratified epithelium",
    ],
    correctIndex: 1,
    explanation:
      "Bronchioles lack cartilage in their walls, distinguishing them from bronchi. Their walls are composed of smooth muscle and connective tissue.",
  },
  {
    id: "bronch-2",
    topic: "bronchiole",
    difficulty: "medium",
    question: "Club cells (formerly Clara cells) are found in:",
    options: ["Alveoli", "Terminal bronchioles", "Trachea", "Nasal cavity"],
    correctIndex: 1,
    explanation:
      "Club cells (Clara cells) are non-ciliated secretory cells found in terminal and respiratory bronchioles. They produce surfactant-like material and detoxify inhaled substances.",
  },
  {
    id: "bronch-3",
    topic: "bronchiole",
    difficulty: "medium",
    question: "The epithelium of terminal bronchioles is:",
    options: [
      "Pseudostratified ciliated columnar",
      "Simple columnar to cuboidal, ciliated, with fewer goblet cells",
      "Stratified squamous",
      "Transitional (urothelium)",
    ],
    correctIndex: 1,
    explanation:
      "As airways become smaller, epithelium transitions from pseudostratified (bronchi) to simple columnar/cuboidal in bronchioles, with fewer goblet cells and eventually club cells.",
  },
  {
    id: "bronch-4",
    topic: "bronchiole",
    difficulty: "hard",
    question:
      "Terminal bronchioles differ from respiratory bronchioles because respiratory bronchioles:",
    options: [
      "Contain cartilage",
      "Have alveoli budding from their walls",
      "Are lined by stratified epithelium",
      "Are larger in diameter",
    ],
    correctIndex: 1,
    explanation:
      "Respiratory bronchioles have occasional alveoli budding from their walls, allowing some gas exchange, while terminal bronchioles are purely conducting airways with no alveoli.",
  },

  // ── ILEUM ───────────────────────────────────────────────────────────────
  {
    id: "ile-1",
    topic: "ileum",
    difficulty: "easy",
    question:
      "What finger-like projections of the mucosa increase the absorptive surface of the ileum?",
    options: [
      "Crypts of Lieberkühn",
      "Villi",
      "Peyer's patches",
      "Brunner's glands",
    ],
    correctIndex: 1,
    explanation:
      "Villi are finger-like projections of the intestinal mucosa that dramatically increase the absorptive surface area of the small intestine, including the ileum.",
  },
  {
    id: "ile-2",
    topic: "ileum",
    difficulty: "easy",
    question:
      "Peyer's patches are characteristic of which part of the small intestine?",
    options: ["Duodenum", "Jejunum", "Ileum", "Caecum"],
    correctIndex: 2,
    explanation:
      "Peyer's patches are prominent lymphoid aggregates in the mucosa and submucosa of the ileum. They are not found to the same extent in the duodenum or jejunum.",
  },
  {
    id: "ile-3",
    topic: "ileum",
    difficulty: "medium",
    question: "Crypts of Lieberkühn are:",
    options: [
      "Folds of mucosa",
      "Intestinal glands that open between villi",
      "Lymphoid nodules",
      "Submucosal glands",
    ],
    correctIndex: 1,
    explanation:
      "Crypts of Lieberkühn are tubular intestinal glands that open into the lumen at the base of villi. They contain stem cells, Paneth cells, and goblet cells.",
  },
  {
    id: "ile-4",
    topic: "ileum",
    difficulty: "medium",
    question: "Goblet cells in ileum mucosa are most abundant in:",
    options: ["Villi tips", "Crypts", "Peyer's patches", "Muscularis mucosae"],
    correctIndex: 1,
    explanation:
      "Goblet cells are most numerous in the crypts and increase in density from duodenum to colon. They secrete mucus to protect and lubricate the intestinal lining.",
  },
  {
    id: "ile-5",
    topic: "ileum",
    difficulty: "hard",
    question: "Paneth cells in the crypts of Lieberkühn produce:",
    options: [
      "Mucus",
      "Antimicrobial peptides (defensins)",
      "Surfactant",
      "Bile salts",
    ],
    correctIndex: 1,
    explanation:
      "Paneth cells are located at the base of the crypts and produce antimicrobial peptides (defensins, lysozyme), contributing to intestinal immune defence.",
  },
  {
    id: "ile-6",
    topic: "ileum",
    difficulty: "easy",
    question:
      "Which layer of the ileum wall contains Meissner's (submucosal) plexus?",
    options: ["Mucosa", "Submucosa", "Muscularis externa", "Serosa"],
    correctIndex: 1,
    explanation:
      "Meissner's (submucosal) plexus is embedded in the submucosa and controls secretion and local blood flow. Auerbach's (myenteric) plexus lies between the two layers of muscularis externa.",
  },

  // ── THICK SKIN ───────────────────────────────────────────────────────────
  {
    id: "thickskin-1",
    topic: "thick-skin",
    difficulty: "easy",
    question:
      "Thick skin is characterised by the presence of which layer that is ABSENT in thin skin?",
    options: [
      "Stratum basale",
      "Stratum spinosum",
      "Stratum lucidum",
      "Stratum corneum",
    ],
    correctIndex: 2,
    explanation:
      "Thick skin has five epidermal layers including the stratum lucidum, a clear translucent layer between the stratum granulosum and stratum corneum. This layer is absent in thin skin.",
  },
  {
    id: "thickskin-2",
    topic: "thick-skin",
    difficulty: "easy",
    question: "Thick skin is found at which locations?",
    options: [
      "Eyelids and lips",
      "Scalp and face",
      "Palms of hands and soles of feet",
      "Abdomen and back",
    ],
    correctIndex: 2,
    explanation:
      "Thick skin, with its five epidermal layers and very thick stratum corneum, covers the palms and soles—areas subjected to significant mechanical stress.",
  },
  {
    id: "thickskin-3",
    topic: "thick-skin",
    difficulty: "medium",
    question: "Which of the following is ABSENT in thick skin?",
    options: [
      "Sweat glands",
      "Hair follicles",
      "Meissner's corpuscles",
      "Stratum corneum",
    ],
    correctIndex: 1,
    explanation:
      "Thick skin lacks hair follicles and sebaceous glands. It does contain eccrine sweat glands and sensory receptors like Meissner's corpuscles and Pacinian corpuscles.",
  },
  {
    id: "thickskin-4",
    topic: "thick-skin",
    difficulty: "medium",
    question:
      "The correct order of epidermal layers from basal to surface in thick skin is:",
    options: [
      "Basale → Granulosum → Spinosum → Lucidum → Corneum",
      "Basale → Spinosum → Granulosum → Lucidum → Corneum",
      "Corneum → Lucidum → Granulosum → Spinosum → Basale",
      "Basale → Lucidum → Spinosum → Granulosum → Corneum",
    ],
    correctIndex: 1,
    explanation:
      "From basal to surface: stratum basale (proliferative layer) → stratum spinosum → stratum granulosum → stratum lucidum → stratum corneum (outermost).",
  },
  {
    id: "thickskin-5",
    topic: "thick-skin",
    difficulty: "hard",
    question: "Keratohyalin granules are found in which epidermal layer?",
    options: [
      "Stratum basale",
      "Stratum spinosum",
      "Stratum granulosum",
      "Stratum lucidum",
    ],
    correctIndex: 2,
    explanation:
      "The stratum granulosum contains cells packed with keratohyalin granules (basophilic, dark-staining). These contribute to the formation of the keratin barrier.",
  },

  // ── THIN SKIN ────────────────────────────────────────────────────────────
  {
    id: "thinskin-1",
    topic: "thin-skin",
    difficulty: "easy",
    question: "Compared to thick skin, thin skin:",
    options: [
      "Has a thicker stratum corneum",
      "Lacks hair follicles and sweat glands",
      "Has hair follicles and sebaceous glands",
      "Has a stratum lucidum",
    ],
    correctIndex: 2,
    explanation:
      "Thin skin has hair follicles, sebaceous glands, and arrector pili muscles—structures absent in thick skin. It also lacks the stratum lucidum.",
  },
  {
    id: "thinskin-2",
    topic: "thin-skin",
    difficulty: "medium",
    question:
      "Which epidermal layer is absent in thin skin but present in thick skin?",
    options: [
      "Stratum basale",
      "Stratum spinosum",
      "Stratum granulosum",
      "Stratum lucidum",
    ],
    correctIndex: 3,
    explanation:
      "The stratum lucidum is only present in thick skin (palms and soles). Thin skin has four epidermal layers: basale, spinosum, granulosum, and corneum.",
  },
  {
    id: "thinskin-3",
    topic: "thin-skin",
    difficulty: "easy",
    question: "Thin skin covers which areas of the body?",
    options: [
      "Palms and soles only",
      "Most of the body surface",
      "Oral mucosa",
      "Cornea",
    ],
    correctIndex: 1,
    explanation:
      "Thin skin covers most of the body surface (except palms and soles), with a relatively thin stratum corneum and the presence of hair follicles and sebaceous glands.",
  },
  {
    id: "thinskin-4",
    topic: "thin-skin",
    difficulty: "medium",
    question:
      "Sebaceous glands associated with thin skin secrete their product (sebum) by:",
    options: [
      "Merocrine secretion",
      "Holocrine secretion",
      "Apocrine secretion",
      "Exocytosis",
    ],
    correctIndex: 1,
    explanation:
      "Sebaceous glands use holocrine secretion—entire cells disintegrate to release their lipid-rich sebum into the hair follicle, lubricating the hair and skin surface.",
  },

  // ── HAIRY SKIN ───────────────────────────────────────────────────────────
  {
    id: "hairyskin-1",
    topic: "hairy-skin",
    difficulty: "easy",
    question: "The arrector pili muscle causes:",
    options: [
      "Sweating",
      "Piloerection (goosebumps)",
      "Hair growth",
      "Sebum secretion",
    ],
    correctIndex: 1,
    explanation:
      'The arrector pili is a small smooth muscle attached to each hair follicle. Its contraction causes piloerection ("goosebumps"), pulling the hair upright.',
  },
  {
    id: "hairyskin-2",
    topic: "hairy-skin",
    difficulty: "medium",
    question: "Sebaceous glands in hairy skin open into:",
    options: [
      "Directly onto the skin surface",
      "The hair follicle",
      "Eccrine sweat ducts",
      "Lymphatic vessels",
    ],
    correctIndex: 1,
    explanation:
      "Sebaceous glands open into the hair follicle (pilosebaceous unit), not directly onto the skin surface. Sebum lubricates the hair shaft and surrounding skin.",
  },
  {
    id: "hairyskin-3",
    topic: "hairy-skin",
    difficulty: "medium",
    question: "The hair bulb at the base of a hair follicle contains:",
    options: [
      "Sebaceous cells",
      "Rapidly dividing matrix cells that produce the hair shaft",
      "Melanocytes only",
      "Arrector pili muscle fibres",
    ],
    correctIndex: 1,
    explanation:
      "The hair bulb contains matrix cells that divide rapidly to produce the hair shaft. It also contains melanocytes that contribute pigment (melanin) to the growing hair.",
  },
  {
    id: "hairyskin-4",
    topic: "hairy-skin",
    difficulty: "hard",
    question: "Apocrine sweat glands differ from eccrine glands in that they:",
    options: [
      "Open directly onto the skin surface",
      "Are found all over the body",
      "Open into hair follicles and are found in axilla and groin",
      "Produce a watery secretion for thermoregulation",
    ],
    correctIndex: 2,
    explanation:
      "Apocrine glands open into hair follicles and are restricted to specific regions (axilla, groin, areola). Eccrine glands open directly onto skin and are distributed all over the body for thermoregulation.",
  },

  // ── URINARY BLADDER ──────────────────────────────────────────────────────
  {
    id: "bladder-1",
    topic: "urinary-bladder",
    difficulty: "easy",
    question: "The epithelium lining the urinary bladder is called:",
    options: [
      "Stratified squamous epithelium",
      "Pseudostratified columnar epithelium",
      "Transitional epithelium (urothelium)",
      "Simple cuboidal epithelium",
    ],
    correctIndex: 2,
    explanation:
      "The urinary bladder is lined by transitional epithelium (urothelium), a specialised stratified epithelium that can stretch as the bladder fills.",
  },
  {
    id: "bladder-2",
    topic: "urinary-bladder",
    difficulty: "medium",
    question: "Umbrella cells in the urinary bladder are:",
    options: [
      "Small basal stem cells",
      "Large dome-shaped surface cells that can flatten when the bladder is full",
      "Mucus-secreting cells",
      "Smooth muscle cells of the detrusor",
    ],
    correctIndex: 1,
    explanation:
      "Umbrella cells (facet cells) are the large, dome-shaped superficial cells of the urothelium. They have a unique asymmetric unit membrane and flatten dramatically when the bladder distends.",
  },
  {
    id: "bladder-3",
    topic: "urinary-bladder",
    difficulty: "medium",
    question:
      "Intermediate cells in the urinary bladder urothelium are located:",
    options: [
      "On the surface, directly exposed to urine",
      "In the middle layers between basal and umbrella cells",
      "Beneath the basement membrane",
      "In the muscularis (detrusor)",
    ],
    correctIndex: 1,
    explanation:
      "Intermediate cells form the middle layers of urothelium between the basal cells (deepest) and the umbrella cells (surface). The three layers are basal, intermediate, and umbrella cells.",
  },
  {
    id: "bladder-4",
    topic: "urinary-bladder",
    difficulty: "hard",
    question:
      "What is the unique property of transitional epithelium that makes it ideal for the urinary bladder?",
    options: [
      "It is impermeable to all ions",
      "It can change thickness and cell shape as the bladder fills and empties",
      "It secretes mucus to neutralise urine",
      "It is highly vascularised for nutrient absorption",
    ],
    correctIndex: 1,
    explanation:
      "Transitional epithelium (urothelium) is uniquely adapted to accommodate volume changes. When empty, it appears thick with dome-shaped umbrella cells; when distended, cells flatten and the epithelium appears thinner.",
  },
  {
    id: "bladder-5",
    topic: "urinary-bladder",
    difficulty: "easy",
    question:
      "A section shows a thick epithelium with large rounded cells at the surface and smaller cells below. The underlying muscle is arranged in multiple directions. This is most likely:",
    options: ["Oesophagus", "Ileum", "Urinary bladder", "Trachea"],
    correctIndex: 2,
    explanation:
      "The combination of transitional epithelium (with characteristic umbrella cells) and the detrusor muscle (three interlacing smooth muscle layers) is characteristic of the urinary bladder.",
  },

  // ── HISTOLOGICAL WORKFLOW ────────────────────────────────────────────────
  {
    id: "workflow-1",
    topic: "histological-workflow",
    difficulty: "easy",
    question:
      "What is the correct order of steps in the histological process from point of receipt?",
    options: [
      "Fixation → Accessioning → Gross Examination → Processing → Embedding → Sectioning → Staining → Distribution",
      "Accessioning → Gross Examination → Fixation → Processing → Embedding → Sectioning → Staining → Distribution",
      "Gross Examination → Fixation → Accessioning → Embedding → Processing → Sectioning → Staining → Distribution",
      "Accessioning → Fixation → Gross Examination → Sectioning → Processing → Embedding → Staining → Distribution",
    ],
    correctIndex: 1,
    explanation:
      "The correct order is: Accessioning → Gross Examination → Fixation → Tissue Processing → Embedding → Sectioning → Staining → Slide Distribution.",
  },
  {
    id: "workflow-2",
    topic: "histological-workflow",
    difficulty: "easy",
    question:
      "Which machine cuts the tissue-embedded paraffin block into thin sections for mounting on slides?",
    options: ["Tissue processor", "Embedding station", "Microtome", "Cryostat"],
    correctIndex: 2,
    explanation:
      "The microtome is a machine with a sharp blade used to cut thin sections (4–5 µm) from the paraffin block. The cryostat is a special microtome for frozen sections.",
  },
  {
    id: "workflow-3",
    topic: "histological-workflow",
    difficulty: "medium",
    question:
      "Which piece of equipment is responsible for dehydrating, clearing, and infiltrating tissue with paraffin wax automatically?",
    options: [
      "Embedding station",
      "Tissue processor",
      "Microtome",
      "Haematoxylin and Eosin stain machine",
    ],
    correctIndex: 1,
    explanation:
      "The tissue processor automatically moves cassettes through a series of reagents: dehydrants (ethanol), clearing agents (xylene), and paraffin wax.",
  },
  {
    id: "workflow-4",
    topic: "histological-workflow",
    difficulty: "medium",
    question:
      "After processing, tissue must be oriented and hardened into a block at which workstation?",
    options: [
      "Tissue processor",
      "Embedding station",
      "Flotation bath",
      "Cryostat",
    ],
    correctIndex: 1,
    explanation:
      "The embedding station is where processed tissue is placed in a mould with molten paraffin wax, oriented correctly, and hardened on a cold plate to form a block.",
  },
  {
    id: "workflow-5",
    topic: "histological-workflow",
    difficulty: "hard",
    question:
      "Which staining machine uses specific antibodies to detect antigens in tissue sections and produces a brown precipitate at positive sites?",
    options: [
      "Haematoxylin and Eosin stain machine",
      "Special stain machine",
      "Immunohistochemistry (IHC) stain machine",
      "Cryostat",
    ],
    correctIndex: 2,
    explanation:
      "The immunohistochemistry (IHC) stain machine applies primary antibodies to detect specific antigens. A brown precipitate indicates a positive result; blue indicates negative.",
  },

  // ── SPECIMEN IDENTIFICATION ──────────────────────────────────────────────
  {
    id: "specid-1",
    topic: "specimen-identification",
    difficulty: "easy",
    question:
      "When a tissue specimen is received in the laboratory, which document must accompany it?",
    options: [
      "Operative note only",
      "Request form listing patient information, clinical history, and site of origin",
      "Discharge summary",
      "Pathology report from a previous test",
    ],
    correctIndex: 1,
    explanation:
      "Every received specimen must have a request form that lists patient information (name, DOB), clinical history, requesting doctor, and a description of the site of origin.",
  },
  {
    id: "specid-2",
    topic: "specimen-identification",
    difficulty: "easy",
    question:
      "Which four items on the request form MUST match the specimen container before proceeding?",
    options: [
      "Name, address, Medicare number, requesting doctor",
      "Name, date of birth, lab number, and site (including laterality)",
      "Name, specimen weight, collection date, and stain requested",
      "Name, date of birth, ward, and diagnosis",
    ],
    correctIndex: 1,
    explanation:
      "The check identification step requires that the request form and specimen container match for: Name, Date of Birth, Lab number, and Site (checking laterality — left vs right).",
  },
  {
    id: "specid-3",
    topic: "specimen-identification",
    difficulty: "medium",
    question:
      "What must be done if the patient information on the specimen container does NOT match the request form?",
    options: [
      "Proceed with processing and note the discrepancy later",
      "Do NOT proceed — the discrepancy must be resolved before any processing",
      "Use the request form information and discard the container label",
      "Process the specimen and notify the pathologist after reporting",
    ],
    correctIndex: 1,
    explanation:
      "Identification checks are a critical patient safety step. If details do not match, processing must NOT proceed until the discrepancy is resolved to prevent specimen mix-up.",
  },
  {
    id: "specid-4",
    topic: "specimen-identification",
    difficulty: "medium",
    question:
      'What does "checking laterality" mean during specimen identification?',
    options: [
      "Checking whether the specimen has been fixed in formalin",
      "Confirming whether the tissue came from the left or right side of the body",
      "Verifying the tissue type (e.g., skin vs liver)",
      "Measuring the dimensions of the specimen",
    ],
    correctIndex: 1,
    explanation:
      "Laterality refers to left vs. right. For paired organs (e.g., kidney, breast, lung), confirming laterality is critical to ensure the correct site is recorded and reported.",
  },
  {
    id: "specid-5",
    topic: "specimen-identification",
    difficulty: "hard",
    question:
      "Which of the following represents the correct action upon receiving a specimen with no label on the container?",
    options: [
      "Label the container using the request form and proceed",
      "Contact the submitting clinician and do not process until the specimen is properly identified",
      "Process immediately to preserve tissue integrity",
      "Discard the specimen as it cannot be identified",
    ],
    correctIndex: 1,
    explanation:
      "An unlabelled container is a patient safety issue. The correct action is to contact the submitting clinician to correctly identify the specimen before any processing begins.",
  },

  // ── ACCESSIONING ────────────────────────────────────────────────────────
  {
    id: "acc-1",
    topic: "accessioning",
    difficulty: "easy",
    question: "What is the purpose of accessioning a specimen?",
    options: [
      "To fix the tissue in formalin",
      "To assign a unique number to identify the patient and specimen",
      "To embed the tissue in paraffin wax",
      "To stain the tissue slide",
    ],
    correctIndex: 1,
    explanation:
      "Accessioning gives each specimen a unique laboratory number that links all information about the patient and specimen, enabling tracking throughout the entire histological process.",
  },
  {
    id: "acc-2",
    topic: "accessioning",
    difficulty: "easy",
    question:
      "During accessioning, which information from the request form is entered into the computer?",
    options: [
      "Stain type and section thickness only",
      "Patient name, requesting doctor, specimen code, clinical history, and site of origin",
      "Tissue weight and dimensions only",
      "Pathologist name and report due date",
    ],
    correctIndex: 1,
    explanation:
      "Accessioning data entry includes: patient first and last name, requesting doctor, specimen code, clinical history, and a description of the site of origin.",
  },
  {
    id: "acc-3",
    topic: "accessioning",
    difficulty: "medium",
    question:
      "After entering specimen data, the Pulsar machine (cassette printer) is used to:",
    options: [
      "Cut the tissue into sections",
      "Print and assign colour-coded cassettes for the specimen",
      "Stain the slides with H&E",
      "Embed the tissue in paraffin wax",
    ],
    correctIndex: 1,
    explanation:
      "After data entry, the assigned colour cassettes are printed using the Pulsar machine. The number and colour of cassettes selected depends on the number of tissue pieces and their type.",
  },
  {
    id: "acc-4",
    topic: "accessioning",
    difficulty: "medium",
    question: "Why are tissue cassettes printed in different colours?",
    options: [
      "To indicate the staining method to be used",
      "To help identify and track different specimens or specimen parts through processing",
      "To distinguish between fresh and fixed tissue",
      "To indicate the priority level of the case",
    ],
    correctIndex: 1,
    explanation:
      "Different colours on cassettes help identify and track distinct specimens or specimen parts (e.g., left vs. right, different anatomical sites) through automated tissue processing.",
  },
  {
    id: "acc-5",
    topic: "accessioning",
    difficulty: "hard",
    question:
      "Accessioning occurs at which point in the histological workflow?",
    options: [
      "After gross examination and fixation",
      "As the first step when the specimen is received, before gross examination",
      "After tissue processing",
      "Immediately before sectioning",
    ],
    correctIndex: 1,
    explanation:
      "Accessioning is the first step performed when the specimen is received in the laboratory — before gross examination, fixation, or processing.",
  },

  // ── FIXATION ────────────────────────────────────────────────────────────
  {
    id: "fix-1",
    topic: "fixation",
    difficulty: "easy",
    question: "What is the definition of fixation in histology?",
    options: [
      "Cutting tissue into thin sections for microscopy",
      "The technique of preserving a specimen for microscopic study using a chemical fixative",
      "Embedding tissue in paraffin wax",
      "Staining tissue with haematoxylin and eosin",
    ],
    correctIndex: 1,
    explanation:
      "Fixation is the technique of preserving a specimen for microscopic study. A chemical called a fixative is employed to halt autolysis and putrefaction while maintaining tissue morphology.",
  },
  {
    id: "fix-2",
    topic: "fixation",
    difficulty: "easy",
    question:
      "What is the recommended volume of fixative relative to the size of the tissue?",
    options: [
      "1–2 times the tissue volume",
      "5–10 times the tissue volume",
      "15–20 times the tissue volume",
      "Equal volume to the tissue",
    ],
    correctIndex: 2,
    explanation:
      "The volume of fixative should be 15–20 times the size of the tissue to ensure adequate fixation and full penetration of the fixative throughout the specimen.",
  },
  {
    id: "fix-3",
    topic: "fixation",
    difficulty: "easy",
    question: "The most commonly used fixative in routine histopathology is:",
    options: [
      "Glutaraldehyde",
      "Alcohol (ethanol)",
      "Neutral Buffered Formalin (NBF)",
      "Acetone",
    ],
    correctIndex: 2,
    explanation:
      "Neutral Buffered Formalin (NBF / 10% formalin) is the standard routine fixative in histopathology. It preserves tissue morphology and is compatible with most downstream stains and techniques.",
  },
  {
    id: "fix-4",
    topic: "fixation",
    difficulty: "medium",
    question:
      "According to best practices for fixation, specimens should be fixed:",
    options: [
      "The day after surgical removal to allow the surgical team to review the specimen",
      "Immediately after surgical removal",
      "Only after gross examination is complete",
      "After the specimen has been frozen at −80°C",
    ],
    correctIndex: 1,
    explanation:
      "Specimens should be fixed immediately after surgical removal to prevent autolysis and tissue degradation. Delay in fixation compromises tissue morphology and antigen preservation.",
  },
  {
    id: "fix-5",
    topic: "fixation",
    difficulty: "medium",
    question:
      'A specimen can be received "fresh" (not in formalin). What does this require?',
    options: [
      "Immediate embedding in paraffin wax",
      "Special treatment such as snap-freezing or immediate fixation on arrival",
      "Staining with H&E directly without any fixation",
      "No special treatment — fresh tissue processes the same way as fixed tissue",
    ],
    correctIndex: 1,
    explanation:
      "Fresh specimens require special treatment upon arrival — either snap-freezing for frozen sections or immediate immersion in fixative to prevent degradation.",
  },
  {
    id: "fix-6",
    topic: "fixation",
    difficulty: "hard",
    question:
      "Which best practice helps ensure full fixative penetration throughout a large specimen?",
    options: [
      "Using a small volume of concentrated fixative",
      "Using the correct fixative volume (15–20× tissue size) and ensuring the specimen is fully submerged",
      "Freezing the tissue before placing it in fixative",
      "Using heat to accelerate fixation",
    ],
    correctIndex: 1,
    explanation:
      'Full penetration requires sufficient fixative volume (15–20× tissue) and complete submersion. Large specimens may also need to be sliced ("bread-loafed") to allow fixative access to the centre.',
  },

  // ── GROSS EXAMINATION ────────────────────────────────────────────────────
  {
    id: "gross-1",
    topic: "gross-examination",
    difficulty: "easy",
    question: "Gross examination (dissection) is defined as:",
    options: [
      "Examining tissue under a light microscope at high magnification",
      "Using the naked eye to obtain diagnostic information from a specimen",
      "Processing tissue through a series of alcohols and xylene",
      "Applying haematoxylin and eosin stain to a slide",
    ],
    correctIndex: 1,
    explanation:
      "Gross examination (also called macroscopic examination or dissection) involves using the naked eye to examine, measure, describe, and sample tissue before microscopic processing.",
  },
  {
    id: "gross-2",
    topic: "gross-examination",
    difficulty: "easy",
    question:
      "During gross examination, organs are typically cut at what width?",
    options: ["0.5–1 mm", "1–2 mm", "3 mm (acceptable range 3–5 mm)", "10 mm"],
    correctIndex: 2,
    explanation:
      "Organs are cut at a width of 3 mm (acceptable range 3–5 mm) to produce representative sections that are thin enough for fixative penetration but substantial enough to assess macroscopic features.",
  },
  {
    id: "gross-3",
    topic: "gross-examination",
    difficulty: "medium",
    question:
      "After dissection, tissue pieces are placed in cassettes and immediately returned to fixative. Why?",
    options: [
      "To prevent cassettes from warping in air",
      "To prevent tissue degradation (autolysis) before processing",
      "To stain the tissue macroscopically",
      "To harden the tissue for easier sectioning",
    ],
    correctIndex: 1,
    explanation:
      "After dissection, cassettes must be immediately placed in fixative (usually formalin) so the tissue is not degraded before tissue processing begins.",
  },
  {
    id: "gross-4",
    topic: "gross-examination",
    difficulty: "medium",
    question:
      "A skin punch biopsy less than 3 mm in diameter should be embedded:",
    options: [
      "Flat (face-down)",
      "Intact, on its edge",
      "Bisected, with both halves face-down",
      "Parallel to the epidermis",
    ],
    correctIndex: 1,
    explanation:
      "Punch biopsies less than 3 mm are embedded intact and on edge to allow transverse sections through the full depth of the skin (epidermis to subcutis).",
  },
  {
    id: "gross-5",
    topic: "gross-examination",
    difficulty: "medium",
    question:
      "A flat lesion less than 10 mm in diameter on a skin excision is described as a:",
    options: ["Patch", "Papule", "Macule", "Nodule"],
    correctIndex: 2,
    explanation:
      "A macule is a small, flat, distinctly coloured area of skin less than 10 mm in diameter with no change in skin texture or thickness. A patch is ≥10 mm and flat.",
  },
  {
    id: "gross-5b",
    topic: "gross-examination",
    difficulty: "medium",
    question: "A solid elevation of skin LESS than 10 mm is called a papule. A solid elevation 10 mm OR MORE (but less than 20 mm) is called a:",
    options: ["Macule", "Patch", "Nodule", "Vesicle"],
    correctIndex: 2,
    explanation: "Papule = solid/cystic elevation <10mm. Nodule = solid/cystic elevation ≥10mm but <20mm. Macule = flat, coloured, <10mm. Patch = flat, coloured, ≥10mm. Vesicle = blister <5mm. These dermatological terms are used during gross examination of skin specimens.",
  },
  {
    id: "gross-5c",
    topic: "gross-examination",
    difficulty: "medium",
    question: "During gross examination of a skin excision, which THREE-dimensional measurement describes the specimen fully?",
    options: [
      "Length × Height only",
      "Diameter alone",
      "Length × Width × Depth (L×W×D)",
      "Circumference × Depth",
    ],
    correctIndex: 2,
    explanation: "All skin excisions are measured in THREE dimensions: Length × Width × Depth (L×W×D). The macroscopic description should also include shape (elliptical, oval, triangular, rectangular, irregular), texture (rough/smooth, flat/raised), border (well-circumscribed or irregular), colour, and lesion type.",
  },
  {
    id: "gross-6",
    topic: "gross-examination",
    difficulty: "hard",
    question:
      "When performing an excisional biopsy of a suspected melanoma, orientation markers (e.g., suture, notch) are used to:",
    options: [
      "Mark the deepest margin for microtome depth setting",
      "Allow specific inking to determine and map the clinical margins",
      "Indicate which side of the tissue should face the microtome knife",
      "Prevent tissue from curling during fixation",
    ],
    correctIndex: 1,
    explanation:
      "Orientation markers on an oriented excision allow specific inking of different margins (e.g., deep, superficial, superior) so the pathologist can determine whether the tumour is completely excised at each margin.",
  },

  // ── TISSUE PROCESSING ────────────────────────────────────────────────────
  {
    id: "proc-1",
    topic: "tissue-processing",
    difficulty: "easy",
    question:
      "What are the three main steps of tissue processing performed by the tissue processor?",
    options: [
      "Fixation → Embedding → Sectioning",
      "Dehydration → Clearing → Infiltration (with paraffin wax)",
      "Staining → Dehydration → Mounting",
      "Accessioning → Sectioning → Staining",
    ],
    correctIndex: 1,
    explanation:
      "Tissue processing involves: Dehydration (removing water with ethanol), Clearing (replacing ethanol with a clearing agent like xylene), and Infiltration (replacing clearing agent with molten paraffin wax).",
  },
  {
    id: "proc-2",
    topic: "tissue-processing",
    difficulty: "easy",
    question:
      "Which agent is commonly used for dehydration during tissue processing?",
    options: ["Xylene", "Paraffin wax", "Ethanol (alcohol)", "Formalin"],
    correctIndex: 2,
    explanation:
      "Ethanol (alcohol) is the most commonly used dehydrant. Processing typically starts at 60–70% ethanol and progresses through increasing concentrations (90%, 95%, 100%) to remove all water from the tissue.",
  },
  {
    id: "proc-3",
    topic: "tissue-processing",
    difficulty: "medium",
    question: "What is the role of the clearing step in tissue processing?",
    options: [
      "To remove blood from the tissue",
      "To act as a transition between dehydration and paraffin infiltration, removing alcohol and making tissue translucent",
      "To fix the tissue using formalin",
      "To harden the tissue into a block",
    ],
    correctIndex: 1,
    explanation:
      'Clearing removes the alcohol and makes tissue translucent ("clear"). It acts as a transition solvent between the dehydrant (alcohol, water-miscible) and the embedding medium (paraffin wax, non-water-miscible). Xylene is a common clearing agent.',
  },
  {
    id: "proc-4",
    topic: "tissue-processing",
    difficulty: "medium",
    question: "Fick's Law applied to tissue processing states that:",
    options: [
      "The rate of fixation is inversely proportional to tissue temperature",
      "The rate of solution diffusion through tissue is proportional to the concentration gradient",
      "Paraffin wax must be maintained between 30°C and 60°C for infiltration",
      "Tissue shrinkage is directly proportional to the volume of clearing agent",
    ],
    correctIndex: 1,
    explanation:
      "Fick's Law states that the rate of solution diffusion through tissue is proportional to the concentration gradient (difference between concentrations inside and outside the tissue). This governs how quickly processing reagents penetrate tissue.",
  },
  {
    id: "proc-5",
    topic: "tissue-processing",
    difficulty: "medium",
    question:
      "Which factor does NOT affect the speed and quality of tissue processing?",
    options: [
      "Temperature",
      "Pressure and vacuum",
      "The colour of the cassette",
      "Agitation of the processing fluids",
    ],
    correctIndex: 2,
    explanation:
      "Cassette colour is used for identification only and does not affect processing. Factors that do affect processing include: temperature, pressure/vacuum, agitation, appropriate processing schedule, and reagent quality.",
  },
  {
    id: "proc-6",
    topic: "tissue-processing",
    difficulty: "hard",
    question:
      "In a routine 6-hour tissue processing cycle, which reagents are used in order?",
    options: [
      "Formalin → Xylene → Paraffin wax",
      "Buffered formalin → Graded ethanol (70%–100%) → Xylene → Paraffin wax",
      "Acetone → Xylene → Paraffin wax → Formalin",
      "Graded ethanol → Formalin → Xylene → Paraffin wax",
    ],
    correctIndex: 1,
    explanation:
      "The routine cycle uses: Buffered formalin → 70% ethanol → 90% ethanol → 100% ethanol (×4) → Xylene (×3) → Paraffin wax (×3). Total time approximately 6 hours.",
  },

  // ── EMBEDDING ────────────────────────────────────────────────────────────
  {
    id: "emb-1",
    topic: "embedding",
    difficulty: "easy",
    question: "What is the purpose of embedding in histology?",
    options: [
      "To fix the tissue with formalin",
      "To surround processed tissue with a supporting medium (usually paraffin wax) so it can be cut into thin sections",
      "To stain the tissue with H&E",
      "To identify and label the specimen",
    ],
    correctIndex: 1,
    explanation:
      "Embedding surrounds the processed tissue with paraffin wax in a mould. Once hardened, this block provides rigid support so the microtome can cut thin sections (2–4 µm).",
  },
  {
    id: "emb-2",
    topic: "embedding",
    difficulty: "easy",
    question:
      "After embedding, a cassette containing tissue in hardened paraffin wax is called a:",
    options: ["Flotation", "Block", "Ribbon", "Section"],
    correctIndex: 1,
    explanation:
      'Once tissue is embedded in paraffin wax and hardened, the cassette and its contents are called a "block." The block is then used on the microtome to cut sections.',
  },
  {
    id: "emb-3",
    topic: "embedding",
    difficulty: "medium",
    question:
      "The most commonly used embedding medium in routine histopathology is:",
    options: [
      "Optimal Cutting Temperature (OCT) compound",
      "Resin",
      "Paraffin wax",
      "Gelatin",
    ],
    correctIndex: 2,
    explanation:
      "Paraffin wax is the most commonly used embedding medium. It allows sections of 2–4 µm to be cut and is compatible with most routine and special stains.",
  },
  {
    id: "emb-4",
    topic: "embedding",
    difficulty: "medium",
    question:
      "OCT (Optimal Cutting Temperature) compound is used as an embedding medium when:",
    options: [
      "Tissue needs to be embedded in a heat-resistant medium for IHC",
      "Fresh tissue needs to be frozen rapidly for frozen sections or antigen-sensitive staining",
      "Tissue is too small to be processed in standard paraffin",
      "Routine H&E staining will be performed",
    ],
    correctIndex: 1,
    explanation:
      "OCT is used for fresh frozen tissue sections. It allows rapid freezing and cryoprotection, preserving antigens and enzymes that may be destroyed by formalin fixation and paraffin processing.",
  },
  {
    id: "emb-5",
    topic: "embedding",
    difficulty: "hard",
    question: "During embedding, why is the orientation of tissue critical?",
    options: [
      "To ensure the tissue fits within the cassette",
      "To present the correct anatomical face for sectioning so the pathologist can evaluate all relevant structures",
      "To prevent the tissue from floating to the surface of the wax",
      "To reduce the number of sections needed",
    ],
    correctIndex: 1,
    explanation:
      "Correct tissue orientation at embedding ensures that sections display the relevant anatomical structures in the correct plane (e.g., skin embedded on edge to show epidermis-to-subcutis depth). Incorrect orientation can make diagnosis impossible.",
  },

  {
    id: "emb-6",
    topic: "embedding",
    difficulty: "hard",
    question: "Resin embedding has a key advantage over paraffin wax. What is it?",
    options: [
      "Resin is cheaper and more readily available",
      "Resin sections can be stained with H&E only",
      "Resin reduces processing artefacts — tissue shrinkage drops from ~20% (paraffin) to <2% — allowing subtle pathological changes to be seen under light microscopy",
      "Resin replaces OCT for all frozen section procedures",
    ],
    correctIndex: 2,
    explanation: "Resin embedding reduces tissue shrinkage from ~20% (with paraffin) to less than 2%. This allows subtle pathological changes previously only visible by electron microscopy to be seen under light microscopy. Resins allow morphological evaluation, histochemical investigation, and IHC on the same tissue block.",
  },
  {
    id: "proc-7",
    topic: "tissue-processing",
    difficulty: "hard",
    question: "Besides xylene (a hydrocarbon), which other types of clearing agents are used in tissue processing?",
    options: [
      "Acids (hydrochloric, acetic) and bases (sodium hydroxide)",
      "Esters (e.g. methyl salicylate) and terpenes",
      "Alcohols (ethanol, methanol) and acetone",
      "Fixatives (formaldehyde, glutaraldehyde)",
    ],
    correctIndex: 1,
    explanation: "Clearing agents are classified into: (1) Hydrocarbons — xylene, toluene, benzene (most common); (2) Esters — methyl salicylate (oil of wintergreen), cedarwood oil; (3) Terpenes — safer alternatives. Choice depends on tissue type, processing conditions, safety factors, and cost.",
  },
  // ── SECTIONING ────────────────────────────────────────────────────────────
  {
    id: "sect-1",
    topic: "sectioning",
    difficulty: "easy",
    question:
      "A microtome cuts paraffin blocks into sections of approximately what thickness?",
    options: ["0.1–0.5 µm", "1–2 µm", "4–6 µm", "20–50 µm"],
    correctIndex: 2,
    explanation:
      "For routine histology, sections are typically cut at 4–6 µm thickness. This allows light to pass through and individual cell detail to be visualised under the microscope.",
  },
  {
    id: "sect-2",
    topic: "sectioning",
    difficulty: "easy",
    question:
      "After being cut by the microtome, sections adhere together to form a:",
    options: ["Flotation bath", "Block", "Ribbon", "Cassette"],
    correctIndex: 2,
    explanation:
      "Consecutive sections adhere edge-to-edge as they come off the microtome blade, forming a ribbon. The ribbon is then floated on a water bath and individual sections are picked up on slides.",
  },
  {
    id: "sect-3",
    topic: "sectioning",
    difficulty: "medium",
    question:
      "Before sectioning, the block is placed on ice for approximately 20 minutes. What is the purpose of this?",
    options: [
      "To fix the tissue further with cold temperature",
      "To allow the temperature of the tissue and paraffin wax to equilibrate, improving section quality",
      "To melt the wax so sectioning is easier",
      "To prevent the block from sticking to the microtome",
    ],
    correctIndex: 1,
    explanation:
      "Chilling the block on ice allows the tissue and wax to reach the same temperature, making the wax firmer and more consistent. This reduces compression artefacts and improves section quality.",
  },
  {
    id: "sect-4",
    topic: "sectioning",
    difficulty: "medium",
    question:
      "The ribbon of sections is floated on a water bath at approximately:",
    options: [
      "25°C (room temperature)",
      "37°C (body temperature)",
      "45°C (slightly below wax melting point)",
      "60°C (above wax melting point)",
    ],
    correctIndex: 2,
    explanation:
      "The flotation bath is maintained at ~40–45°C (slightly below the wax melting point). This gently flattens and stretches out the sections without melting the wax, allowing them to adhere to the glass slide.",
  },
  {
    id: "sect-5",
    topic: "sectioning",
    difficulty: "medium",
    question: "A cryostat is used instead of a standard microtome when:",
    options: [
      "Tissue is too fatty for routine paraffin processing",
      "Fresh frozen sections are needed (e.g., intra-operative diagnosis, antigen/enzyme preservation)",
      "Routine H&E sections are required",
      "Tissue must be embedded in resin",
    ],
    correctIndex: 1,
    explanation:
      "A cryostat is a microtome inside a −18°C to −35°C freezer cabinet. It cuts fresh frozen tissue sections, preserving antigens, enzymes, and lipids that are destroyed by formalin fixation and paraffin processing.",
  },
  {
    id: "sect-6",
    topic: "sectioning",
    difficulty: "hard",
    question:
      "To achieve good section adherence on the glass slide, sections are placed in an oven at:",
    options: [
      "25°C for 1 hour",
      "37°C for 10 minutes",
      "60°C for up to a few hours",
      "100°C for 5 minutes",
    ],
    correctIndex: 2,
    explanation:
      "Slides are placed in a 60°C oven (or 37°C overnight for brain tissue) to allow the sections to adhere firmly to the glass. The heat melts the wax slightly and promotes bonding between tissue and slide.",
  },

  // ── STAINING ────────────────────────────────────────────────────────────
  {
    id: "stain-1",
    topic: "staining",
    difficulty: "easy",
    question: "What is the purpose of staining in histology?",
    options: [
      "To fix the tissue and prevent degradation",
      "To give contrast to the tissue and highlight particular features for microscopic examination",
      "To embed the tissue in paraffin wax",
      "To cut the tissue into thin sections",
    ],
    correctIndex: 1,
    explanation:
      "Staining gives contrast to the tissue by differentially colouring cell components, making features visible that would otherwise be transparent or colourless under the microscope.",
  },
  {
    id: "stain-2",
    topic: "staining",
    difficulty: "easy",
    question: "The routine stain used in histopathology is:",
    options: [
      "PAS (Periodic acid–Schiff)",
      "Haematoxylin and Eosin (H&E)",
      "Masson's Trichrome",
      "Immunohistochemistry (IHC)",
    ],
    correctIndex: 1,
    explanation:
      "Haematoxylin and Eosin (H&E) is the routine stain in histopathology. Haematoxylin stains nuclei blue/purple; eosin stains cytoplasm and extracellular matrix pink.",
  },
  {
    id: "stain-3",
    topic: "staining",
    difficulty: "medium",
    question:
      "Special stains (e.g., PAS, Masson's Trichrome) are used to highlight:",
    options: [
      "Routine cell morphology only",
      "Specific tissue components such as carbohydrates, microorganisms, connective tissue, or nerve fibres",
      "Antigens using antibodies",
      "Frozen sections only",
    ],
    correctIndex: 1,
    explanation:
      "Special stains target specific tissue components beyond what H&E shows. Examples: PAS highlights carbohydrates/mucin; Masson's Trichrome highlights collagen; Gram stain highlights microorganisms.",
  },
  {
    id: "stain-4",
    topic: "staining",
    difficulty: "medium",
    question:
      "In immunohistochemistry (IHC), a brown precipitate at the site of staining indicates:",
    options: [
      "Negative staining (antigen absent)",
      "Positive staining (the target antigen is present)",
      "Over-staining artefact",
      "Haematoxylin counterstain",
    ],
    correctIndex: 1,
    explanation:
      "In IHC, a brown precipitate (from the DAB chromogen reaction) indicates positive staining — the target antigen is present. Blue counterstaining (from haematoxylin) marks all nuclei and indicates where antigen is absent.",
  },
  {
    id: "stain-5",
    topic: "staining",
    difficulty: "hard",
    question:
      "IHC can be used to assess which of the following in breast cancer tissue?",
    options: [
      "Degree of tissue autolysis",
      "Presence of hormone receptors (ER, PR) and HER2 therapeutic targets",
      "Mitotic rate only — counted on H&E",
      "Type of fixative used",
    ],
    correctIndex: 1,
    explanation:
      "IHC is used in breast cancer to detect oestrogen receptors (ER), progesterone receptors (PR), and HER2 — all of which are pharmacological targets that guide treatment decisions.",
  },

  // ── SKIN EPIDERMIS ───────────────────────────────────────────────────────
  {
    id: "epi-1",
    topic: "skin-epidermis",
    difficulty: "easy",
    question: "The epidermis is composed of how many cell types?",
    options: [
      "2 (keratinocytes and melanocytes)",
      "3 (keratinocytes, melanocytes, Langerhans cells)",
      "4 (keratinocytes, melanocytes, Langerhans cells, Merkel cells)",
      "5 (including fibroblasts)",
    ],
    correctIndex: 2,
    explanation:
      "The epidermis contains 4 cell types: Keratinocytes (90%), Melanocytes (8%), Langerhans cells (3–5%), and Merkel cells (<5%).",
  },
  {
    id: "epi-2",
    topic: "skin-epidermis",
    difficulty: "easy",
    question:
      "Keratinocytes undergo a process called keratinisation. What happens during this process?",
    options: [
      "Cells divide rapidly and migrate into the dermis",
      "Cells lose their nuclei and organelles and become filled with the protein keratin",
      "Cells produce melanin and transfer it to neighbouring cells",
      "Cells present antigens to immune cells",
    ],
    correctIndex: 1,
    explanation:
      "As keratinocytes migrate from the stratum basale toward the surface they lose their nuclei and organelles and fill with keratin. This process takes approximately 28 days.",
  },
  {
    id: "epi-3",
    topic: "skin-epidermis",
    difficulty: "medium",
    question:
      "Melanocytes are found in which layer of the epidermis and what do they produce?",
    options: [
      "Stratum corneum; they produce keratin",
      "Stratum basale; they produce melanin (skin pigment)",
      "Stratum spinosum; they produce glycolipid",
      "Stratum granulosum; they produce lamellar granules",
    ],
    correctIndex: 1,
    explanation:
      "Melanocytes are found in the deepest layer (stratum basale). They produce melanin, which is packaged into melanosomes and transferred to keratinocytes for UV protection. Freckles = increased melanin accumulation.",
  },
  {
    id: "epi-4",
    topic: "skin-epidermis",
    difficulty: "medium",
    question:
      "Langerhans cells are located in the stratum spinosum and their primary function is:",
    options: [
      "Keratin production",
      "Touch sensation",
      "Antigen presentation and immune defence against foreign bodies",
      "Melanin synthesis",
    ],
    correctIndex: 2,
    explanation:
      "Langerhans cells originate from bone marrow and are found in the stratum spinosum (3–5% of nucleated epidermal cells). They act as antigen-presenting cells, providing immune surveillance against foreign bodies.",
  },
  {
    id: "epi-5",
    topic: "skin-epidermis",
    difficulty: "medium",
    question:
      "Merkel cells are located in the deep epidermis and are associated with:",
    options: [
      "Melanin production",
      "Disc-shaped sensory nerve endings and detection of touch",
      "Immune surveillance",
      "Sweat secretion",
    ],
    correctIndex: 1,
    explanation:
      "Merkel cells are postmitotic cells (<5% of epidermal cells) located in the deep epidermis. They are closely associated with disc-shaped sensory nerve endings (tactile discs) and are responsible for the sense of touch.",
  },
  {
    id: "epi-6",
    topic: "skin-epidermis",
    difficulty: "hard",
    question:
      "The stratum granulosum contains cells that produce glycolipid-containing granules. What is the function of these granules?",
    options: [
      "To produce keratin for the stratum corneum",
      "To control water entering or leaving the skin — forming the water barrier",
      "To provide structural strength via desmosomes",
      "To release melanosomes to adjacent keratinocytes",
    ],
    correctIndex: 1,
    explanation:
      "The stratum granulosum (3–5 rows of flattening keratinocytes) contains cells with granules that release glycolipid into the intercellular space, forming a critical waterproof barrier that controls transepidermal water loss.",
  },
  {
    id: "epi-7",
    topic: "skin-epidermis",
    difficulty: "easy",
    question:
      "The stratum corneum is the outermost epidermal layer. What is it composed of?",
    options: [
      "Living cells with active nuclei producing keratin",
      "20–30 rows of flattened, dead, anucleate keratinocytes filled with keratin",
      "Melanocytes and Merkel cells",
      "Transitional cells that expand when stretched",
    ],
    correctIndex: 1,
    explanation:
      "The stratum corneum consists of 20–30 rows of flattened, dead keratinocytes filled mainly with keratin. It forms the outermost barrier layer — protecting against water loss, infection, and mechanical damage. Cells are continuously shed and replaced.",
  },
  {
    id: "epi-8",
    topic: "skin-epidermis",
    difficulty: "hard",
    question:
      "In which epidermal layer do stem cells undergo mitosis to produce new keratinocytes?",
    options: [
      "Stratum spinosum",
      "Stratum granulosum",
      "Stratum basale (germinativum)",
      "Stratum lucidum",
    ],
    correctIndex: 2,
    explanation:
      "The stratum basale (also called stratum germinativum) is the single deepest row of keratinocytes. Stem cells here undergo mitosis to continuously produce new keratinocytes that migrate toward the surface. It also contains melanocytes and Merkel cells.",
  },

  // ── SKIN DERMIS ──────────────────────────────────────────────────────────
  {
    id: "derm-1",
    topic: "skin-dermis",
    difficulty: "easy",
    question: "The dermis consists mainly of which two types of fibres?",
    options: [
      "Reticular and elastic fibres",
      "Collagen and elastic fibres",
      "Collagen and keratin fibres",
      "Elastin and fibronectin fibres",
    ],
    correctIndex: 1,
    explanation:
      "The dermis consists mainly of collagen fibres and elastic fibres, along with blood vessels, lymphatic vessels, smooth muscle, nerves, hair follicles, and glands. Fibroblasts and macrophages are the main resident cells.",
  },
  {
    id: "derm-2",
    topic: "skin-dermis",
    difficulty: "easy",
    question: "The dermis is divided into two layers. What are they?",
    options: [
      "Superficial and deep layers",
      "Papillary dermis and reticular dermis",
      "Epidermis and hypodermis",
      "Granular layer and cornified layer",
    ],
    correctIndex: 1,
    explanation:
      "The dermis has two layers: the papillary dermis (superficial — fine type III collagen, interdigitates with epidermis via dermal papillae) and the reticular dermis (deeper — coarse type I collagen bundles, forms ~80% of the dermis).",
  },
  {
    id: "derm-3",
    topic: "skin-dermis",
    difficulty: "medium",
    question:
      "The basement membrane is located between which two structures and what is its function?",
    options: [
      "Between the papillary and reticular dermis; structural support",
      "Between the stratum basale and the papillary dermis; allows diffusion of nutrients to the avascular epidermis",
      "Between the dermis and hypodermis; fat insulation",
      "Between the stratum corneum and stratum granulosum; waterproofing",
    ],
    correctIndex: 1,
    explanation:
      "The basement membrane lies between the stratum basale and the papillary dermis. Since the epidermis is avascular, nutrients diffuse from blood vessels in the vascular dermis through the basement membrane into the epidermis.",
  },
  {
    id: "derm-4",
    topic: "skin-dermis",
    difficulty: "medium",
    question: "The hypodermis (subcutaneous layer) consists mainly of:",
    options: [
      "Dense connective tissue",
      "Adipose (fat) cells",
      "Smooth muscle fibres",
      "Stratified squamous epithelium",
    ],
    correctIndex: 1,
    explanation:
      "The hypodermis (subcutis) consists mainly of adipose (fat) cells. It has a rich vascular supply, making it suitable for injecting substances such as insulin or other medications subcutaneously.",
  },
  {
    id: "derm-5",
    topic: "skin-dermis",
    difficulty: "hard",
    question:
      'Which cells in the dermis are classified as "migrant" (not resident)?',
    options: [
      "Fibroblasts and collagen-producing cells",
      "Macrophages, dendritic cells, mast cells, lymphocytes, neutrophils, and eosinophils",
      "Arrector pili smooth muscle cells",
      "Sebocytes and sweat gland cells",
    ],
    correctIndex: 1,
    explanation:
      "Resident dermal cells include fibroblasts, which produce the collagen and elastin matrix. Migrant cells (arriving from the blood in response to signals) include macrophages, dendritic cells, mast cells, lymphocytes, neutrophils, and eosinophils.",
  },
  {
    id: "derm-6",
    topic: "skin-dermis",
    difficulty: "medium",
    question:
      "The papillary dermis contains fine type III collagen and interdigitates with the epidermis via:",
    options: [
      "Rete ridges only",
      "Dermal papillae that project upward into epidermal downgrowths",
      "The stratum lucidum",
      "Sweat gland ducts",
    ],
    correctIndex: 1,
    explanation:
      "The papillary dermis forms dermal papillae — upward projections that interdigitate with the downward projections of the epidermis. This increases the surface area for nutrient exchange and anchors the epidermis to the dermis.",
  },

  // ── SKIN APPENDAGES ──────────────────────────────────────────────────────
  {
    id: "app-1",
    topic: "skin-appendages",
    difficulty: "easy",
    question:
      "Hair follicles are described as epidermal invaginations. They have three segments from top to bottom. Which is the deepest?",
    options: [
      "Infundibulum",
      "Isthmus",
      "Inferior segment (hair bulb)",
      "Sebaceous gland entrance",
    ],
    correctIndex: 2,
    explanation:
      "Hair follicles have three segments: Infundibulum (top, connects to surface), Isthmus (middle, where sebaceous gland enters and arrector pili inserts), and the Inferior segment (deepest, contains the hair bulb with matrix cells and melanocytes).",
  },
  {
    id: "app-2",
    topic: "skin-appendages",
    difficulty: "easy",
    question: "Sebaceous glands secrete sebum by which method?",
    options: [
      "Merocrine (exocytosis)",
      "Apocrine (membrane budding)",
      "Holocrine (entire cell disintegrates)",
      "Endocrine (into bloodstream)",
    ],
    correctIndex: 2,
    explanation:
      "Sebaceous glands use holocrine secretion — entire sebocytes (sebaceous cells) accumulate lipid and then undergo apoptosis. The entire cell disintegrates and releases sebum into the pilosebaceous canal (hair follicle).",
  },
  {
    id: "app-3",
    topic: "skin-appendages",
    difficulty: "medium",
    question:
      "Sebum discharged into the pilosebaceous canal has which of the following roles?",
    options: [
      "Thermoregulation by evaporative cooling",
      "Emollient, barrier, antimicrobial, and pheromone roles",
      "Antigen presentation to the immune system",
      "Pigmentation of the hair shaft",
    ],
    correctIndex: 1,
    explanation:
      "Sebum has multiple roles: emollient (softens skin and hair), barrier (reduces water loss), antimicrobial (inhibits bacteria/fungi), and pheromone signalling. It is secreted via holocrine secretion into the pilosebaceous canal.",
  },
  {
    id: "app-4",
    topic: "skin-appendages",
    difficulty: "medium",
    question:
      "Eccrine (merocrine) sweat glands differ from apocrine glands in that they:",
    options: [
      "Open into hair follicles and are restricted to axilla and groin",
      "Are simple coiled tubular glands that open directly onto the skin surface and are found all over the body for thermoregulation",
      "Produce a protein-rich secretion for pheromone signalling",
      "Are lined by stratified squamous epithelium",
    ],
    correctIndex: 1,
    explanation:
      "Eccrine (merocrine) sweat glands are simple coiled tubular glands lined by cuboidal epithelium. They open directly onto the skin surface and are found all over the body. They produce watery sweat for thermoregulation. Apocrine glands open into follicles and are restricted to certain areas.",
  },
  {
    id: "app-5",
    topic: "skin-appendages",
    difficulty: "hard",
    question:
      "Hair follicle stem cells are found in which region of the follicle?",
    options: [
      "The infundibulum (top of follicle)",
      "The bulge region in the isthmus (labelled by CK15)",
      "The hair bulb at the inferior segment",
      "The sebaceous gland lobule",
    ],
    correctIndex: 1,
    explanation:
      'Hair follicle stem cells reside in the "bulge region" in the isthmus of the follicle. These can be identified by cytokeratin 15 (CK15) immunostaining. They are responsible for follicle regeneration during the hair growth cycle.',
  },

  // ── BASAL CELL CARCINOMA ─────────────────────────────────────────────────
  {
    id: "bcc-1",
    topic: "basal-cell-carcinoma",
    difficulty: "easy",
    question: "Basal cell carcinoma (BCC) arises from which cells?",
    options: [
      "Melanocytes",
      "Squamous cells of the stratum spinosum",
      "Basal cells of the stratum basale",
      "Merkel cells",
    ],
    correctIndex: 2,
    explanation:
      "BCC arises from basal cells in the stratum basale (deepest layer of the epidermis). It accounts for approximately 70% of all skin cancers and appears as a pearly white, skin-coloured, or pink bump — most commonly on the face and ears.",
  },
  {
    id: "bcc-2",
    topic: "basal-cell-carcinoma",
    difficulty: "easy",
    question: "What proportion of all skin cancers does BCC represent?",
    options: ["About 10%", "About 30%", "About 70%", "About 90%"],
    correctIndex: 2,
    explanation:
      "BCC accounts for approximately 70% of all skin cancers. It predominantly occurs in sun-damaged skin, most commonly on the head and neck, then trunk, then other sites.",
  },
  {
    id: "bcc-3",
    topic: "basal-cell-carcinoma",
    difficulty: "medium",
    question:
      "The two hallmark histological features of BCC on H&E sections are:",
    options: [
      "Keratin pearls and mitotic figures",
      "Peripheral palisading of tumour cells and tumour-stromal clefting",
      "Nests of melanocytes and intranuclear inclusions",
      "Goblet cells and pseudostratified epithelium",
    ],
    correctIndex: 1,
    explanation:
      "On H&E, nodular BCC shows: (1) peripheral palisading — basaloid tumour cells line up in a row at the edge of tumour nests, and (2) tumour-stromal clefting — the stroma splits away from the tumour, creating a characteristic gap.",
  },
  {
    id: "bcc-4",
    topic: "basal-cell-carcinoma",
    difficulty: "medium",
    question: "Which statement about the behaviour of BCC is most accurate?",
    options: [
      "BCC frequently metastasises to lymph nodes and distant organs",
      "BCC is malignant but rarely metastasises; the majority can be cured by complete excision",
      "BCC is a benign tumour with no potential for recurrence",
      "BCC only occurs in patients with Gorlin's syndrome",
    ],
    correctIndex: 1,
    explanation:
      "BCC is malignant but only rarely metastasises. The vast majority are cured by complete surgical excision. The completeness of excision — assessed microscopically — is the most critical factor in determining local recurrence rates.",
  },
  {
    id: "bcc-5",
    topic: "basal-cell-carcinoma",
    difficulty: "hard",
    question:
      "For most simple BCCs, what are the recommended clinical and histological excision margins?",
    options: [
      "Clinical margin 1 mm, histological margin 0.1 mm",
      "Clinical margin 2–3 mm, histological margin 0.5 mm",
      "Clinical margin 4 mm, histological margin >1 mm",
      "Clinical margin 10 mm, histological margin 5 mm",
    ],
    correctIndex: 1,
    explanation:
      "For most simple (non-aggressive) BCCs, a clinical margin of 2–3 mm and a histological margin of 0.5 mm is adequate. Aggressive subtypes (infiltrating, morphoeic/sclerosing) require wider margins.",
  },

  // ── SQUAMOUS CELL CARCINOMA ──────────────────────────────────────────────
  {
    id: "scc-1",
    topic: "squamous-cell-carcinoma",
    difficulty: "easy",
    question:
      "Squamous cell carcinoma (SCC) of the skin is thought to arise most commonly from:",
    options: [
      "Normal epidermis directly",
      "Actinic keratoses (AK) — a histological continuum of keratinocyte dysplasia",
      "Basal cell nests",
      "Melanocyte transformation",
    ],
    correctIndex: 1,
    explanation:
      "Most SCCs are thought to arise from actinic keratoses (AK), representing a histological continuum of keratinocyte dysplasia from AK to invasive SCC. UV-induced sun damage is the primary driver.",
  },
  {
    id: "scc-2",
    topic: "squamous-cell-carcinoma",
    difficulty: "medium",
    question:
      "Which of the following are high-risk anatomical sites for SCC with greater metastatic potential?",
    options: [
      "Trunk, abdomen, and back",
      "Ear, lips, vulva, and penis",
      "Scalp, forearms, and legs",
      "Palms and soles",
    ],
    correctIndex: 1,
    explanation:
      "High-risk sites for SCC with increased metastatic potential include the ear, lips, vulva, and penis. Other risk factors include clinical size >2 cm, depth >2 mm, perineural invasion, and poorly differentiated grading.",
  },
  {
    id: "scc-3",
    topic: "squamous-cell-carcinoma",
    difficulty: "medium",
    question:
      "On H&E, what are the characteristic microscopic features of SCC?",
    options: [
      "Peripheral palisading and tumour-stromal clefting",
      "Nests of melanoma cells with intranuclear inclusions",
      "Irregular growth of squamous epithelium into the dermis, with nuclear enlargement, hyperchromasia, keratinisation, and mitotic figures",
      "Follicles filled with colloid and parafollicular cells",
    ],
    correctIndex: 2,
    explanation:
      "SCC shows: irregular growth of pink squamous epithelium extending into the dermis, nuclear enlargement, hyperchromasia (dark staining) and variability, aberrant keratinisation (keratin pearls), and mitotic figures indicating rapid proliferation.",
  },
  {
    id: "scc-4",
    topic: "squamous-cell-carcinoma",
    difficulty: "hard",
    question: "Compared to BCC, SCC is considered more aggressive because:",
    options: [
      "SCC has a greater potential for local recurrence and can metastasise to lymph nodes or distant organs",
      "SCC always arises in the dermis, not the epidermis",
      "SCC is more commonly caused by Gorlin's syndrome",
      "SCC does not respond to surgical excision",
    ],
    correctIndex: 0,
    explanation:
      "SCC has greater potential for local recurrence and can metastasise to regional lymph nodes or distant organs. Approximately 1/3 of patients with advanced SCC eventually die from their disease. Surgical management is therefore more radical than for BCC.",
  },
  {
    id: "scc-5",
    topic: "squamous-cell-carcinoma",
    difficulty: "hard",
    question:
      "For most SCCs under 2 cm, what is the recommended excision margin?",
    options: [
      "1 mm clinical, 0.5 mm histological",
      "2–3 mm clinical, 0.5 mm histological",
      "4 mm clinical margin (histological margin >1 mm)",
      "10 mm clinical margin",
    ],
    correctIndex: 2,
    explanation:
      "Most SCCs under 2 cm are excised with a clinical margin of 4 mm (histological margin >1 mm). Tumours in central face, scalp, lip, and ear may require specialist referral due to the higher risk of recurrence at these sites.",
  },

  // ── MALIGNANT MELANOMA ────────────────────────────────────────────────────
  {
    id: "mel-1",
    topic: "malignant-melanoma",
    difficulty: "easy",
    question: "Malignant melanoma arises from which cell type?",
    options: [
      "Keratinocytes",
      "Melanocytes",
      "Langerhans cells",
      "Fibroblasts",
    ],
    correctIndex: 1,
    explanation:
      "Malignant melanoma is an invasive tumour arising from melanocytes — the pigment-producing cells in the stratum basale. Melanoma cells divide rapidly, breach the basal lamina, and invade the dermis, then blood and lymphatic vessels to metastasise.",
  },
  {
    id: "mel-2",
    topic: "malignant-melanoma",
    difficulty: "easy",
    question: "The ABCDE rule for melanoma detection stands for:",
    options: [
      "Age, Border, Colour, Diameter, Evolution",
      "Asymmetry, Border, Colour, Diameter, Evolving",
      "Asymmetry, Bleeding, Colour, Depth, Erosion",
      "Area, Border, Circumference, Depth, Enlargement",
    ],
    correctIndex: 1,
    explanation:
      "ABCDE: Asymmetry (two halves don't match), Border (irregular/notched edge), Colour (multiple colours — brown, black, blue, red, white, grey), Diameter (getting bigger), Evolving (the lesion changes over time in size, shape, colour, or symptoms).",
  },
  {
    id: "mel-3",
    topic: "malignant-melanoma",
    difficulty: "medium",
    question:
      "Melanoma is the least common type of skin cancer (~1–2% of cases) but the most serious because:",
    options: [
      "It is the most painful form of skin cancer",
      "It divides rapidly and metastasises very quickly through blood and lymphatic vessels",
      "It cannot be removed surgically",
      "It only occurs in patients with genetic disorders",
    ],
    correctIndex: 1,
    explanation:
      "Despite being the least common skin cancer (1–2%), melanoma is the most serious because melanoma cells divide rapidly, penetrate the basal lamina, invade the dermis, and metastasise through blood and lymphatic vessels — often to distant organs — very rapidly.",
  },
  {
    id: "mel-4",
    topic: "malignant-melanoma",
    difficulty: "medium",
    question:
      "In melanoma progression, what is the difference between the radial (horizontal) growth phase and the vertical growth phase?",
    options: [
      "Radial = invasion into subcutaneous fat; Vertical = spread in epidermis",
      "Radial = horizontal spread within epidermis and superficial dermis; Vertical = deeper invasion into dermis (main tumour mass)",
      "Radial = lymph node spread; Vertical = haematogenous spread",
      "They are synonymous terms for the same process",
    ],
    correctIndex: 1,
    explanation:
      "Radial/horizontal growth phase = melanoma spreading laterally within the epidermis and superficial dermis. Vertical growth phase = the main tumour mass growing downward into deeper dermis. The vertical phase confers higher metastatic risk. Tumour thickness is measured vertically.",
  },
  {
    id: "mel-5",
    topic: "malignant-melanoma",
    difficulty: "hard",
    question:
      "In the AJCC staging system for melanoma, a T2 classification corresponds to:",
    options: [
      "Melanoma in situ only",
      "Tumour ≤1.0 mm thick",
      "Tumour >1.0–2.0 mm thick",
      "Tumour >4.0 mm thick",
    ],
    correctIndex: 2,
    explanation:
      "AJCC T staging for melanoma: Tis = in situ; T1 = ≤1.0 mm; T2 = >1.0–2.0 mm; T3 = >2.0–4.0 mm; T4 = >4.0 mm. Tumour thickness (Breslow thickness), measured vertically, is the most important prognostic factor.",
  },
  {
    id: "mel-6",
    topic: "malignant-melanoma",
    difficulty: "hard",
    question:
      "Which IHC markers are commonly used to confirm a diagnosis of melanoma?",
    options: [
      "Cytokeratin (CK) and Epithelial Membrane Antigen (EMA)",
      "HMB-45 (melanosome marker) and S100 protein",
      "CD20 and CD3 (lymphocyte markers)",
      "Oestrogen receptor (ER) and HER2",
    ],
    correctIndex: 1,
    explanation:
      "The key IHC markers for melanoma confirmation are HMB-45 (targets melanosomes — highly specific) and S100 protein (sensitive but less specific). These appear as a brown precipitate when positive on IHC staining.",
  },

  // ── ISLETS OF LANGERHANS ─────────────────────────────────────────────────
  {
    id: "islet-1",
    topic: "islets-of-langerhans",
    difficulty: "easy",
    question:
      "The Islets of Langerhans are clusters of endocrine cells found in which organ?",
    options: ["Liver", "Kidney", "Pancreas", "Spleen"],
    correctIndex: 2,
    explanation:
      "The Islets of Langerhans are clusters of endocrine cells scattered throughout the pancreas. They appear on H&E as pale-staining clusters surrounded by the darker-staining exocrine acinar cells.",
  },
  {
    id: "islet-2",
    topic: "islets-of-langerhans",
    difficulty: "easy",
    question: "Which cell type in the islets secretes insulin?",
    options: [
      "Alpha (A) cells",
      "Beta (B) cells",
      "Delta (D) cells",
      "PP cells",
    ],
    correctIndex: 1,
    explanation:
      "Beta (B) cells secrete insulin and make up approximately 75% of islet cells. Alpha cells (~20%) secrete glucagon. Delta cells (remainder) secrete somatostatin. Beta cells are the targets destroyed in Type I diabetes.",
  },
  {
    id: "islet-3",
    topic: "islets-of-langerhans",
    difficulty: "medium",
    question: "Alpha cells in the islets of Langerhans are located primarily:",
    options: [
      "In the centre of the islet",
      "At the periphery of the islet",
      "Between the exocrine acini",
      "In the ductal epithelium",
    ],
    correctIndex: 1,
    explanation:
      "Alpha cells are seen at the periphery of the islet and constitute approximately 20% of islet cells. They secrete glucagon, which raises blood glucose levels — the opposite action to insulin.",
  },
  {
    id: "islet-4",
    topic: "islets-of-langerhans",
    difficulty: "medium",
    question:
      "The physiological stimulus for insulin release from beta cells is:",
    options: [
      "Falling blood glucose (hypoglycaemia)",
      "Rising blood glucose",
      "Somatostatin from delta cells",
      "Adrenaline from the adrenal medulla",
    ],
    correctIndex: 1,
    explanation:
      "Insulin is released immediately in response to a rise in blood glucose. It acts to decrease blood glucose by promoting cellular uptake and glycogen synthesis. The primary physiological stimulus for insulin release is glucose.",
  },
  {
    id: "islet-5",
    topic: "islets-of-langerhans",
    difficulty: "hard",
    question:
      "On an IHC-stained section of pancreas counterstained with Toluidine Blue, insulin-producing beta cells appear:",
    options: [
      "Blue (negative)",
      "Brown (positive — the chromogen labels the insulin)",
      "Red (haematoxylin staining)",
      "Clear/unstained",
    ],
    correctIndex: 1,
    explanation:
      "On IHC, insulin is detected with a specific anti-insulin antibody. The positive reaction produces a brown precipitate (DAB chromogen) in insulin-producing beta cells. The counterstain (Toluidine Blue or haematoxylin) marks the remaining cells blue.",
  },

  // ── DIABETES MELLITUS ────────────────────────────────────────────────────
  {
    id: "diab-1",
    topic: "diabetes-mellitus",
    difficulty: "easy",
    question:
      "Diabetes mellitus involves damage to which islet cell type, resulting in abnormal insulin secretion or function?",
    options: ["Alpha cells", "Beta cells", "Delta cells", "Kupffer cells"],
    correctIndex: 1,
    explanation:
      "Diabetes mellitus involves damage to or dysfunction of beta cells — the insulin-secreting cells of the islets of Langerhans. This results in abnormal insulin secretion or function, leading to impaired glucose metabolism.",
  },
  {
    id: "diab-2",
    topic: "diabetes-mellitus",
    difficulty: "easy",
    question: "The three main classes of diabetes mellitus are:",
    options: [
      "Insulin-dependent, non-insulin-dependent, and juvenile diabetes",
      "Type I (absolute insulin deficiency), Type II (insulin resistance with secretion deficit), and Gestational diabetes",
      "Hyperglycaemic, hypoglycaemic, and normoglycaemic diabetes",
      "Autoimmune, dietary, and viral diabetes",
    ],
    correctIndex: 1,
    explanation:
      "There are three main classes: Type I = absolute insulin deficiency (autoimmune destruction of beta cells); Type II = insulin resistance with a relative deficit of insulin secretion (>90% of cases); Gestational diabetes = occurs during pregnancy.",
  },
  {
    id: "diab-3",
    topic: "diabetes-mellitus",
    difficulty: "medium",
    question:
      "Type I diabetes is characterised by destruction of beta cells caused primarily by:",
    options: [
      "Obesity and physical inactivity",
      "Autoimmunity — the body produces autoantibodies against beta cells and insulin",
      "Insulin resistance in peripheral muscle and adipose tissue",
      "Excessive glucagon secretion from alpha cells",
    ],
    correctIndex: 1,
    explanation:
      "Type I diabetes is an autoimmune disorder in which the body produces autoantibodies against beta cells and insulin, leading to their destruction (insulitis — inflammatory infiltration of islets). Genetic predisposition and environmental factors (viruses, chemicals) also contribute.",
  },
  {
    id: "diab-4",
    topic: "diabetes-mellitus",
    difficulty: "medium",
    question:
      "Type II diabetes differs from Type I in that it is characterised by:",
    options: [
      "Absolute lack of insulin due to autoimmune destruction",
      "Insulin resistance in peripheral muscle and adipose tissue, with deficient insulin receptors — causing hyperglycaemia",
      "Onset before age 20 years",
      "Autoantibodies against beta cells",
    ],
    correctIndex: 1,
    explanation:
      "Type II diabetes involves insulin resistance — peripheral muscle and adipose tissue resist the effects of insulin due to deficient or dysfunctional insulin receptors. Glucose cannot be transported into cells, leading to hyperglycaemia. Type II has no autoimmune involvement and accounts for >90% of all diabetes cases.",
  },
  {
    id: "diab-5",
    topic: "diabetes-mellitus",
    difficulty: "medium",
    question:
      "What is the metabolic consequence of lack of insulin or resistance to insulin?",
    options: [
      "Hypoglycaemia — blood glucose falls too low",
      "Hyperglycaemia — glucose cannot enter cells, leading to raised blood glucose, plus proteolysis, lipolysis, ketogenesis, and gluconeogenesis",
      "Increased glycogen storage in the liver",
      "Decreased fatty acid production",
    ],
    correctIndex: 1,
    explanation:
      "Without effective insulin: glucose cannot be transported into cells → hyperglycaemia. Additionally: glycogen breaks down further raising glucose, proteolysis (protein breakdown), lipolysis (fat breakdown → increased fatty acids), ketogenesis, and gluconeogenesis all occur. Severe hyperglycaemia can result in coma and death.",
  },
  {
    id: "diab-6",
    topic: "diabetes-mellitus",
    difficulty: "hard",
    question:
      "Type II diabetes is strongly associated with which modifiable risk factors?",
    options: [
      "Autoimmune disease and genetic predisposition only",
      "Obesity and decreased physical exercise; incidence increases with age",
      "Viral infection and chemical exposure",
      "Early-onset childhood autoimmunity",
    ],
    correctIndex: 1,
    explanation:
      "Type II diabetes has high association with obesity and decreased exercise. Incidence increases with age (typically onset >40 years). Genetics plays a role (increased risk if parent or sibling has it), but unlike Type I, there is no autoimmune involvement.",
  },

  // ── H&E STAINING CHEMISTRY ───────────────────────────────────────────────
  {
    id: "hec-1",
    topic: "he-staining-chemistry",
    difficulty: "easy",
    question: "Haematoxylin is extracted from which natural source?",
    options: [
      "The indigo plant",
      "The Haematoxylum campechianum tree (logwood or bloodwood)",
      "Coal tar derivatives",
      "The eosin flower",
    ],
    correctIndex: 1,
    explanation:
      "Haematoxylin is a natural dye extracted from the heartwood of the Haematoxylum campechianum tree, also known as logwood or bloodwood. It must be oxidised to haematein (its active form) before it can stain.",
  },
  {
    id: "hec-2",
    topic: "he-staining-chemistry",
    difficulty: "easy",
    question:
      "Haematoxylin is a positively charged (cationic) dye. It stains which tissue components blue/purple?",
    options: [
      "Cytoplasm and collagen",
      "Negatively charged basophilic structures — especially cell nuclei (DNA phosphate groups)",
      "Red blood cells",
      "Lipid droplets",
    ],
    correctIndex: 1,
    explanation:
      "Haematoxylin is cationic (positively charged). It binds to negatively charged (basophilic/anionic) structures — primarily DNA phosphate groups in cell nuclei — staining them blue/purple. Other basophilic structures include ribosomes and cartilage matrix.",
  },
  {
    id: "hec-3",
    topic: "he-staining-chemistry",
    difficulty: "medium",
    question:
      "Eosin is a negatively charged (anionic) dye that stains which tissue components pink/red?",
    options: [
      "Cell nuclei and DNA",
      "Positively charged (acidophilic) components — cytoplasm, muscle, collagen, and RBCs",
      "Elastic fibres only",
      "Mucin and glycoproteins",
    ],
    correctIndex: 1,
    explanation:
      "Eosin is anionic (negatively charged). It binds to positively charged (acidophilic/cationic) tissue components including cytoplasm, muscle fibres, collagen, and red blood cells — staining them various shades of pink, orange, and red.",
  },
  {
    id: "hec-4",
    topic: "he-staining-chemistry",
    difficulty: "medium",
    question: "A mordant in haematoxylin staining is:",
    options: [
      "The reducing agent that converts haematein back to haematoxylin",
      "A metallic salt that links the dye to tissue by forming a dye-mordant-tissue complex",
      'The alkaline solution used to "blue" the nuclei after staining',
      "The organic solvent used to dewax sections",
    ],
    correctIndex: 1,
    explanation:
      "A mordant is a metallic salt (e.g. aluminium, iron) that forms a bridge between the dye (haematein) and tissue, creating a stable dye-mordant-tissue complex. The mordant determines staining characteristics. Alum haematoxylins (e.g. Harris's) use aluminium; iron haematoxylins (e.g. Weigert's) use ferric ions.",
  },
  {
    id: "hec-5",
    topic: "he-staining-chemistry",
    difficulty: "medium",
    question:
      "What is the difference between progressive and regressive haematoxylin staining?",
    options: [
      "Progressive uses more dye; regressive uses less dye",
      "Progressive = staining to the exact endpoint (no over-staining); Regressive = over-staining then differentiating (removing excess dye) to the correct endpoint",
      "Progressive stains nuclei; regressive stains cytoplasm",
      "Progressive uses alum mordant; regressive uses iron mordant",
    ],
    correctIndex: 1,
    explanation:
      "Progressive staining: tissue is placed in haematoxylin until the exact staining endpoint is reached — no differentiation needed. Regressive staining: tissue is deliberately over-stained, then differentiated (excess dye removed with acid alcohol) back to the correct endpoint, giving more precise nuclear staining.",
  },
  {
    id: "hec-6",
    topic: "he-staining-chemistry",
    difficulty: "hard",
    question:
      'After haematoxylin staining, sections are placed in alkaline water (Scott\'s tap water substitute). This step is called "blueing." What does it achieve?',
    options: [
      "It removes excess eosin",
      "It changes the haematein-mordant complex from red/purple (acidic) to blue (alkaline), giving the true blue nuclear staining",
      "It dewaxes the section",
      "It dehydrates the tissue for coverslipping",
    ],
    correctIndex: 1,
    explanation:
      '"Blueing" converts the haematein complex from its reddish-purple (acidic) colour to the true blue colour by raising the pH with alkaline water (e.g. tap water or Scott\'s tap water substitute). Poor blueing = poor nuclear staining (nuclei appear purple-red rather than blue).',
  },

  {
    id: "hec-7",
    topic: "he-staining-chemistry",
    difficulty: "medium",
    question: "Which of the following correctly pairs a haematoxylin type with its use?",
    options: [
      "Harris's → progressive staining; Mayer's → regressive staining",
      "Harris's → regressive staining (strong, needs differentiation); Mayer's/Gill's → progressive staining (no differentiation required)",
      "Verhoeff's → stains myelin; PTAH → stains elastic fibres",
      "Weil's → stains skeletal muscle striations; Verhoeff's → stains collagen",
    ],
    correctIndex: 1,
    explanation: "Harris's is a strong regressive haematoxylin — it over-stains then requires differentiation; it clearly defines structures. Mayer's and Gill's are weaker progressive haematoxylins — tissue is left just long enough to reach the endpoint, no differentiation required. Verhoeff's stains elastic fibres; PTAH stains striations in skeletal muscle and gliosis in CNS; Weil/Woelke/Loyez stain myelin.",
  },
  {
    id: "hec-8",
    topic: "he-staining-chemistry",
    difficulty: "medium",
    question: "Haematoxylin must be 'ripened' before use. What does ripening mean?",
    options: [
      "Diluting haematoxylin to the correct working concentration",
      "Oxidising haematoxylin to haematein (its active form) — either by natural air-ripening or chemical oxidation",
      "Adjusting the pH of haematoxylin to acidic conditions",
      "Adding a mordant to the haematoxylin solution",
    ],
    correctIndex: 1,
    explanation: "Ripening = oxidising haematoxylin to haematein. Natural ripening (air/sunlight) is slow (3-4 months) but produces long-lasting solutions (e.g. Ehrlich's, Delafield's). Chemical oxidation is rapid but gives shorter-lived solutions — sodium iodate is used for Mayer's, mercuric oxide for Harris's. Haematein is the actual tissue stain.",
  },
  {
    id: "hec-9",
    topic: "he-staining-chemistry",
    difficulty: "hard",
    question: "Iron mordant haematoxylins (e.g. Weigert's, Verhoeff's) have a key advantage over alum haematoxylins. What is it?",
    options: [
      "They produce brighter blue nuclear staining on H&E",
      "They are more resistant to acid decolourisation — useful when followed by acidic counterstains like Van Gieson or trichrome",
      "They are cheaper and easier to prepare",
      "They require no mordant and can be used directly on unfixed tissue",
    ],
    correctIndex: 1,
    explanation: "Iron mordant haematoxylins (Weigert's, Verhoeff's) resist acid decolourisation because the iron-haematein bond is stronger than the alum-haematein bond. This makes them ideal when followed by acidic stains like Van Gieson or Masson's trichrome. Alum haematoxylins (Harris's, Mayer's, Gill's) are susceptible to acidic counterstains.",
  },
  {
    id: "hec-10",
    topic: "he-staining-chemistry",
    difficulty: "medium",
    question: "Eosin Y is described as a xanthene dye. At what pH should eosin be maintained for optimal staining?",
    options: [
      "pH 2.0 (strongly acidic)",
      "pH 5.0",
      "pH 7.4 (neutral/physiological)",
      "pH 9.0 (alkaline)",
    ],
    correctIndex: 1,
    explanation: "Eosin Y should be maintained at pH 5.0. Poor pH control causes weak eosin staining. Eosin Y is a fluorescent xanthene dye derived from bromine and fluorescein. It differentiates during water washing and ethanol dehydration steps because it is soluble in both water and alcohol.",
  },
  // ── H&E STAINING PROCEDURE & TROUBLESHOOTING ─────────────────────────────
  {
    id: "hep-1",
    topic: "he-staining-procedure",
    difficulty: "easy",
    question:
      'Before staining, paraffin sections must be "dewaxed" and "taken to water." Why?',
    options: [
      "To make the tissue transparent for easier microscopy",
      "Because paraffin wax is hydrophobic — it must be removed with xylene first, then the section rehydrated through graded alcohols, because staining solutions are aqueous",
      "To fix the tissue further with formalin",
      "To remove any residual blood from the tissue",
    ],
    correctIndex: 1,
    explanation:
      'Paraffin wax is hydrophobic and repels the aqueous staining solutions. Sections must be dewaxed in xylene (removes wax), then taken through graded alcohols to water ("taken to water") before any aqueous stain can penetrate the tissue.',
  },
  {
    id: "hep-2",
    topic: "he-staining-procedure",
    difficulty: "easy",
    question:
      "What is the correct order of the H&E staining sequence for paraffin sections?",
    options: [
      "Stain → Dewax → To water → Dehydrate → Clear → Mount",
      "Dewax → To water → Haematoxylin → Differentiate → Blue → Eosin → Dehydrate → Clear → Mount (DPX)",
      "Fix → Stain → Dewax → Embed → Section",
      "Eosin → Haematoxylin → Blue → Differentiate → Dewax → Mount",
    ],
    correctIndex: 1,
    explanation:
      "The correct H&E sequence: Dewax (xylene) → To water (graded alcohols) → Haematoxylin → Rinse → Differentiate (acid alcohol) → Blue (alkaline water) → Check → Eosin → Dehydrate (alcohols) → Clear (xylene) → Mount in DPX.",
  },
  {
    id: "hep-3",
    topic: "he-staining-procedure",
    difficulty: "medium",
    question: '"Differentiation" in the H&E procedure refers to:',
    options: [
      "The process of identifying different tissue types under the microscope",
      "Removing excess haematoxylin from non-nuclear tissue using dilute acid alcohol, leaving only nuclear staining",
      "Adding eosin after haematoxylin",
      "Mounting the coverslip onto the stained section",
    ],
    correctIndex: 1,
    explanation:
      "Differentiation uses dilute acid alcohol (1% HCl in 70% ethanol) to remove excess haematoxylin from cytoplasm and connective tissue, leaving only the specifically bound nuclear haematoxylin. Under-differentiation = muddy/blue cytoplasm; over-differentiation = pale/unstained nuclei.",
  },
  {
    id: "hep-4",
    topic: "he-staining-procedure",
    difficulty: "medium",
    question: "An H&E control slide is used in the laboratory to:",
    options: [
      "Teach students basic histology",
      "Monitor staining quality and verify reagent reactivity — comparing each batch against a known standard",
      "Replace the patient's actual tissue section when it is damaged",
      "Test if the tissue has been correctly fixed",
    ],
    correctIndex: 1,
    explanation:
      "An H&E control slide (kept in the dark) is run with each staining batch to monitor staining quality, verify technique and reagent reactivity, and confirm the stain has worked correctly. Good control tissues include placenta, gut-associated lymphoid tissue (appendix/caecum), muscle, and kidney.",
  },
  {
    id: "hep-5",
    topic: "he-staining-procedure",
    difficulty: "hard",
    question:
      "Poor nuclear staining (pale/weak blue nuclei) on an H&E section can result from which causes?",
    options: [
      "Over-staining with eosin and too much mounting medium",
      "Haematoxylin under-staining, over-differentiation, inadequate blueing, incomplete dewaxing (residual wax), or exhausted haematoxylin",
      "The tissue section being too thin",
      "Using the wrong type of coverslip",
    ],
    correctIndex: 1,
    explanation:
      "Pale nuclei can result from: haematoxylin under-staining (too little time/exhausted dye), over-differentiation (too long in acid alcohol), poor blueing (inadequate alkaline water), incomplete dewaxing (residual wax blocks dye penetration), or over-fixed acidic tissue requiring Weigert's iron haematoxylin.",
  },

  // ── VAN GIESON & VERHOEFF'S STAINS ────────────────────────────────────────
  {
    id: "vg-1",
    topic: "van-gieson-stain",
    difficulty: "easy",
    question:
      "The Van Gieson stain is a connective tissue special stain. What does it detect and what are its results?",
    options: [
      "Elastic fibres — elastic fibres = blue-black, collagen = red, muscle = yellow",
      "Collagen (and distinguishes it from muscle) — collagen = red/pink, cytoplasm/muscle/RBCs/fibrin = yellow, nuclei = blue/black",
      "Mucin — mucin = blue, nuclei = red",
      "Glycogen — glycogen = magenta, nuclei = blue",
    ],
    correctIndex: 1,
    explanation:
      "Van Gieson stain detects collagen using picric acid + acid fuchsin (Van Gieson's solution). Results: Collagen = deep red/pink, Cytoplasm/muscle/RBCs/fibrin = yellow, Nuclei = blue/black (stained by nuclear counterstain). Used to detect increases in collagen in fibrotic conditions.",
  },
  {
    id: "vg-2",
    topic: "van-gieson-stain",
    difficulty: "medium",
    question:
      "The principle of the Van Gieson stain relies on the difference in molecular size between picric acid and acid fuchsin. How does this work?",
    options: [
      "Picric acid stains elastic fibres; acid fuchsin stains collagen",
      "Small picric acid molecules penetrate dense muscle/RBCs and are retained; larger acid fuchsin molecules displace picric acid from collagen fibres (which have larger pores) — so collagen = red, muscle = yellow",
      "Both dyes stain nuclei; the counterstain differentiates them",
      "Acid fuchsin is anionic and stains nuclei; picric acid is cationic and stains collagen",
    ],
    correctIndex: 1,
    explanation:
      "Van Gieson principle: Small picric acid molecules penetrate all tissue but are only firmly retained in dense muscle and RBCs. Larger acid fuchsin molecules displace picric acid from the larger-pored collagen fibres. Result: collagen = red (acid fuchsin), muscle/RBCs/fibrin = yellow (picric acid).",
  },
  {
    id: "vg-3",
    topic: "van-gieson-stain",
    difficulty: "medium",
    question:
      "Verhoeff's Van Gieson (VVG) stain is used specifically to demonstrate:",
    options: [
      "Collagen fibres",
      "Elastic fibres — showing atrophy in emphysema, and fibre loss in arteriosclerosis and vascular disease",
      "Mucin and carbohydrates",
      "Microorganisms (bacteria and fungi)",
    ],
    correctIndex: 1,
    explanation:
      "Verhoeff's Van Gieson (VVG) is used to demonstrate elastic fibres. It shows atrophy of elastic tissue in emphysema, thinning/loss of fibres in arteriosclerosis, and with ageing (splitting and fragmentation of elastic fibres). Results: Elastic fibres = blue-black to black, Nuclei = blue/grey/black, Collagen = red, Muscle = orange, RBCs/cytoplasm = yellow.",
  },
  {
    id: "vg-4",
    topic: "van-gieson-stain",
    difficulty: "hard",
    question:
      "The Weigert's Van Gieson (WVG) stain uses Weigert's acid-fast iron haematoxylin as the nuclear stain. Why is iron haematoxylin preferred here?",
    options: [
      "Iron haematoxylin stains elastic fibres more specifically",
      "Iron haematoxylin resists decolourisation in the acidic Van Gieson solution — unlike alum haematoxylin which would be removed",
      "Iron haematoxylin produces a red colour that contrasts better with collagen",
      "Iron haematoxylin is cheaper than alum haematoxylin",
    ],
    correctIndex: 1,
    explanation:
      "The Van Gieson counterstain (picric acid + acid fuchsin) is an acidic solution. Alum haematoxylins are acid-labile and would be washed out. Weigert's iron haematoxylin uses ferric chloride as mordant — it is acid-resistant (acid-fast), so nuclei remain stained black/brown even after the acidic Van Gieson solution.",
  },
  {
    id: "vg-5",
    topic: "van-gieson-stain",
    difficulty: "easy",
    question: "The best control tissue for Verhoeff's elastic stain is:",
    options: [
      "Kidney section",
      "Aorta (embedded on edge) or a cross-section of a large artery",
      "Liver section",
      "Appendix section",
    ],
    correctIndex: 1,
    explanation:
      "The aorta (embedded on edge showing its wall layers) or a cross-section of a large elastic artery is the ideal control for Verhoeff's elastic stain — the abundant elastic lamellae in the aortic wall make it a reliable positive control for demonstrating elastic fibres.",
  },

  // ── MASSON'S TRICHROME & COLLAGEN TYPES ──────────────────────────────────
  {
    id: "mt-1",
    topic: "masson-trichrome",
    difficulty: "easy",
    question:
      "Masson's Trichrome stain is used to differentiate between which two main tissue components?",
    options: [
      "Elastic fibres and reticular fibres",
      "Collagen (blue) and smooth muscle/cytoplasm (red) — used in tumours and fibrotic diseases like cirrhosis",
      "Nuclei (black) and lipid (clear)",
      "Mucin (blue) and keratin (red)",
    ],
    correctIndex: 1,
    explanation:
      "Masson's Trichrome is a three-dye stain that differentiates collagen from smooth muscle and cytoplasm. It is used to: (1) differentiate collagen vs smooth muscle in tumours, (2) identify increases in collagenous tissue in fibrotic diseases such as cirrhosis of the liver. Results: Nuclei = black, Cytoplasm/keratin/muscle = red, Collagen/mucous = blue.",
  },
  {
    id: "mt-2",
    topic: "masson-trichrome",
    difficulty: "medium",
    question: "What are the colour results of Masson's Trichrome stain?",
    options: [
      "Nuclei = blue, Collagen = pink, Muscle = yellow",
      "Nuclei = black, Cytoplasm/keratin/muscle fibres = red, Collagen and mucous = blue",
      "Elastic fibres = black, Collagen = red, Muscle = yellow",
      "Nuclei = blue/black, Collagen = red, Muscle = yellow",
    ],
    correctIndex: 1,
    explanation:
      "Masson's Trichrome results: Nuclei = Black (Weigert's iron haematoxylin), Cytoplasm/keratin/muscle fibres = Red (Biebrich Scarlet-Acid Fuchsin), Collagen and mucous = Blue (Aniline Blue). This three-colour result clearly distinguishes connective tissue from muscle/cytoplasm.",
  },
  {
    id: "mt-3",
    topic: "masson-trichrome",
    difficulty: "medium",
    question:
      "Which collagen type is the most abundant in the human body, present in tendons and scar tissue?",
    options: [
      "Type II collagen",
      "Type I collagen",
      "Type III collagen",
      "Type IV collagen",
    ],
    correctIndex: 1,
    explanation:
      "Type I collagen is the most abundant collagen in the human body. It is found in tendons (attaches muscle to bone), ligaments (bone to bone), the organic part of bone, dermis, and scar tissue (end product of tissue repair). It provides great tensile strength.",
  },
  {
    id: "mt-4",
    topic: "masson-trichrome",
    difficulty: "medium",
    question:
      "Type III collagen (granulation tissue collagen) is significant in wound healing because:",
    options: [
      "It forms the articular cartilage of joints",
      "It is produced rapidly by young fibroblasts in early wound healing — forming granulation tissue before the stronger Type I collagen is synthesised",
      "It forms the basal lamina under epithelial cells",
      "It is the most abundant collagen in tendons and ligaments",
    ],
    correctIndex: 1,
    explanation:
      'Type III collagen is the collagen of granulation tissue. Young fibroblasts produce it rapidly in early wound healing as a "scaffold." It is gradually replaced by the stronger Type I collagen as healing progresses. Type III is also present in reticular fibres.',
  },
  {
    id: "mt-5",
    topic: "masson-trichrome",
    difficulty: "hard",
    question:
      "Elastic fibres cannot usually be seen on H&E staining. Which special stains are used to visualise them?",
    options: [
      "PAS (Periodic acid-Schiff) and Alcian Blue",
      "Verhoeff's Van Gieson, Weigert's stain, or Gomori stain",
      "Masson's Trichrome and Van Gieson",
      "Gram stain and Ziehl-Neelsen",
    ],
    correctIndex: 1,
    explanation:
      "Elastic fibres are not usually visible on H&E because they stain poorly with routine dyes. Special stains required: Verhoeff's Van Gieson (VVG), Weigert's elastic stain, or Gomori aldehyde fuchsin. These are used to demonstrate elastic fibres in vessels (aorta), lungs, and skin.",
  },
  {
    id: "mt-6",
    topic: "masson-trichrome",
    difficulty: "hard",
    question:
      "Reticular fibres are a type of collagen that can be visualised using:",
    options: [
      "Haematoxylin staining (blue)",
      "Argyrophillic (silver) reactions — they absorb silver from solution, which is then reduced to metallic form (appear black)",
      "Masson's Trichrome (red)",
      "Van Gieson stain (red)",
    ],
    correctIndex: 1,
    explanation:
      "Reticular fibres (type III collagen coated with glycoprotein) are argyrophillic — they absorb silver from solution. The silver is then reduced to metallic form, staining reticular fibres black. This silver impregnation technique makes them visible when they cannot be seen with H&E.",
  },

  // ── QUALITY CONTROL OVERVIEW ──────────────────────────────────────────────
  {
    id: "qco-1",
    topic: "quality-control-overview",
    difficulty: "easy",
    question:
      "All pathology laboratories in Australia that receive Medicare funding must be accredited by:",
    options: [
      "The Australian Medical Association (AMA)",
      "NATA/RCPA Laboratory Accreditation Program",
      "The Royal Australian College of Physicians",
      "The Therapeutic Goods Administration (TGA)",
    ],
    correctIndex: 1,
    explanation:
      "All Australian pathology labs receiving Medicare funding must be accredited by the National Association of Testing Authorities (NATA)/Royal College of Pathologists of Australasia (RCPA) Laboratory Accreditation Program. Standards are set by NPAAC based on ISO 15189.",
  },
  {
    id: "qco-2",
    topic: "quality-control-overview",
    difficulty: "easy",
    question: "NATA (National Association of Testing Authorities) is:",
    options: [
      "A professional body for pathologists",
      "The government watchdog that ensures laboratories operate appropriately — conducting accreditation via peer-review by ~3000 volunteer experts",
      "An international pharmaceutical standards body",
      "The insurance provider for Australian pathology labs",
    ],
    correctIndex: 1,
    explanation:
      "NATA is the government watchdog for Australian laboratories. Its accreditation is conducted as a peer-review by approximately 3000 volunteer experts who assess facilities. Australia leads the world in laboratory accreditation. NATA accreditation provides a marketing advantage and a benchmark for performance.",
  },
  {
    id: "qco-3",
    topic: "quality-control-overview",
    difficulty: "medium",
    question:
      "NPAAC (National Pathology Accreditation Advisory Council) is responsible for:",
    options: [
      "Conducting accreditation inspections of laboratories",
      "Developing and maintaining standards and guidelines for pathology practices, ensuring the quality of Australian pathology services",
      "Training pathology scientists in Australia",
      "Funding pathology research through the NHMRC",
    ],
    correctIndex: 1,
    explanation:
      "NPAAC (National Pathology Accreditation Advisory Council) is responsible for developing and maintaining standards and guidelines for pathology practices in Australia. It ensures quality of pathology services. Standards are based on ISO 15189 — the international standard for quality and competence of medical laboratories.",
  },
  {
    id: "qco-4",
    topic: "quality-control-overview",
    difficulty: "medium",
    question:
      "Standard Operating Procedures (SOPs) in the histopathology laboratory must be:",
    options: [
      "Written in technical scientific language for senior staff only",
      "Written in simple terms for everyone to understand, easily accessible in the lab, and followed for pre-analytic, analytic, and post-analytic procedures",
      "Updated only when NATA conducts an inspection",
      "Kept confidential and not shared with laboratory staff",
    ],
    correctIndex: 1,
    explanation:
      "SOPs are documents written in simple terms so everyone can understand them, and must be easily accessible in the laboratory. They must be followed for all phases of operation: pre-analytic (sample accession, identification), analytic (processing, staining), and post-analytic procedures (reporting, storage).",
  },
  {
    id: "qco-5",
    topic: "quality-control-overview",
    difficulty: "hard",
    question:
      "The RCPA QAP (Quality Assurance Programs) provides external quality assurance (EQA) for histopathology laboratories. In anatomical pathology, programs cover:",
    options: [
      "Only the quality of H&E staining reagents",
      "Both diagnostic proficiency (diagnostic survey cases — classical/common disease features) and technical proficiency (technical survey cases — correct demonstration by routine methods)",
      "Only IHC antibody quality",
      "Only NATA accreditation inspection services",
    ],
    correctIndex: 1,
    explanation:
      "RCPA QAP offers EQA in two areas for anatomical pathology: (1) Diagnostic survey cases — selected to demonstrate classical, common, or educationally critical histological features; (2) Technical survey cases — selected on similar criteria to be demonstrated by routine laboratory methods.",
  },

  // ── QC: 3 PHASES OF OPERATION ─────────────────────────────────────────────
  {
    id: "qcp-1",
    topic: "qc-three-phases",
    difficulty: "easy",
    question:
      "Quality control in the histopathology laboratory applies to which 3 phases of operation?",
    options: [
      "Fixation, processing, and staining",
      "Pre-analytical, analytical, and post-analytical",
      "Collection, analysis, and archiving",
      "Reception, diagnosis, and reporting",
    ],
    correctIndex: 1,
    explanation:
      "QC applies to 3 phases: Pre-analytical (all steps BEFORE the sample is tested), Analytical (the actual testing/processing of the sample), and Post-analytical (all steps AFTER the sample is analysed — reporting, storage, disposal).",
  },
  {
    id: "qcp-2",
    topic: "qc-three-phases",
    difficulty: "easy",
    question:
      "The pre-analytical phase covers all aspects before the sample is tested. Which steps does it include?",
    options: [
      "Gross analysis, embedding, sectioning, and staining",
      "Sample collection, specimen fixation, transportation to the lab, specimen reception, and accession",
      "Report delivery, storage of material, and safe disposal",
      "Equipment calibration, stain quality control, and slide distribution",
    ],
    correctIndex: 1,
    explanation:
      "Pre-analytical phase: Sample collection → Specimen fixation → Transportation to pathology lab → Specimen reception (ID check, request form verification) → Accession (unique number assignment, barcode labelling).",
  },
  {
    id: "qcp-3",
    topic: "qc-three-phases",
    difficulty: "medium",
    question:
      "The analytical phase is the actual testing of the sample. Which activities does it cover?",
    options: [
      "Sample collection and transportation only",
      "Gross analysis (cut-up), tissue processing and embedding, sectioning, staining/mounting/labelling, equipment QC, and submission of reporting",
      "Report delivery, invoicing, and customer satisfaction",
      "SOP writing, NATA inspection, and staff training only",
    ],
    correctIndex: 1,
    explanation:
      "Analytical phase: Gross analysis (macroscopic cut-up with precise description, adequate sampling) → Tissue Processing and Paraffin Embedding → Sectioning (Microtomy) → Staining/Mounting/Labelling → Equipment QC → Submission of reports for pathologist sign-off.",
  },
  {
    id: "qcp-4",
    topic: "qc-three-phases",
    difficulty: "medium",
    question:
      "Which QC measures are required for staining reagents in the analytical phase?",
    options: [
      "Staining reagents never need monitoring — they remain stable indefinitely",
      "Use standardised protocols (SOPs), keep records of reagent changes (who, what, when), run control slides periodically, and increase staining time as reagents age",
      "Only replace reagents when the stain produces incorrect results on patient tissue",
      "Only monitor if automated staining machines are used",
    ],
    correctIndex: 1,
    explanation:
      "Staining QC: Use standardised protocols (SOPs), keep records of all reagent changes (who changed it, which reagent, long or short change), periodically run control slides to check consistency, and increase staining time as reagents age. Haematoxylin continues to oxidise in the tank — light and air reduce its efficiency.",
  },
  {
    id: "qcp-5",
    topic: "qc-three-phases",
    difficulty: "hard",
    question:
      "The post-analytical phase covers all activities after the sample is analysed. Which aspects does it include?",
    options: [
      "Sample fixation and transportation only",
      "Reports without transcription errors, delivery to the right clinician, storage of material and data, safe disposal of specimens, invoicing, turnaround time (TAT), and customer satisfaction",
      "Tissue processing, staining, and sectioning",
      "NATA inspection scheduling and SOP writing",
    ],
    correctIndex: 1,
    explanation:
      "Post-analytical phase: Accurate reports (no transcription errors) → Delivery to the correct clinician → Storage of reported material and data → Safe disposal of specimens → Invoicing → Monitoring turnaround time (TAT) → General customer satisfaction. All are monitored as part of comprehensive QC.",
  },

  // ── PRE-PROCESSING ARTEFACTS ──────────────────────────────────────────────
  {
    id: "ppa-1",
    topic: "pre-processing-artefacts",
    difficulty: "easy",
    question: "What is a histological artefact?",
    options: [
      "A correctly stained tissue feature used for teaching",
      "A change in tissue structure or the presence of contaminants NOT normally seen on a properly prepared histological slide — introduced during sample preparation",
      "A special staining technique for connective tissue",
      "A microscope calibration error",
    ],
    correctIndex: 1,
    explanation:
      "A histological artefact refers to changes in tissue structure or the presence of contaminants that are not normally present — introduced during sample collection, fixation, processing, sectioning, or staining. Recognising artefacts is crucial to avoid misdiagnosis.",
  },
  {
    id: "ppa-2",
    topic: "pre-processing-artefacts",
    difficulty: "easy",
    question: "A crush artefact on a biopsy section appears as:",
    options: [
      "Fine black pigment scattered throughout the section",
      "Darkly staining, distorted and stretched cell nuclei at the specimen periphery — caused by forceps compression during biopsy",
      "Empty white spaces throughout the tissue",
      "Pale poorly stained areas due to incomplete dewaxing",
    ],
    correctIndex: 1,
    explanation:
      "Crush artefact results from compression/crushing by forceps or surgical instruments at the time of biopsy. It appears as darkly staining, distorted, stretched/flattened nuclei at one margin of the specimen — particularly common in delicate tissues like lymph node. Normal tissue is preserved below the crush area.",
  },
  {
    id: "ppa-3",
    topic: "pre-processing-artefacts",
    difficulty: "medium",
    question:
      "Heat damage artefact on a histological section can be caused by which sources?",
    options: [
      "Over-staining with haematoxylin",
      "Laser-generated heat during surgery, over-heated paraffin wax during embedding, or overheating slides in the drying oven",
      "Insufficient fixation time",
      "Using expired haematoxylin",
    ],
    correctIndex: 1,
    explanation:
      "Heat damage can arise from: laser/diathermy heat during surgical excision, over-heated wax at the embedding station, or overheating slides in the drying oven. Microscopic features: loss of nuclear and cytoplasmic detail, coagulation and distortion of connective tissue fibres.",
  },
  {
    id: "ppa-4",
    topic: "pre-processing-artefacts",
    difficulty: "medium",
    question:
      "Post-mortem autolysis as an artefact on histological sections appears as:",
    options: [
      "Crush lines at the specimen periphery",
      "Poorly defined (ghost-like) nuclei and imprecise/blurry cytoplasmic staining — due to delay in fixation after death",
      "Brown-black pigment deposits throughout the tissue",
      "Empty spaces (vacuoles) due to lipid dissolution",
    ],
    correctIndex: 1,
    explanation:
      'Post-mortem autolysis (self-digestion by enzymes after death) causes poorly defined "ghost" nuclei and imprecise, blurry cytoplasmic staining. It results from delay in fixation — the longer the delay, the more severe the autolysis. Immediate fixation prevents autolysis.',
  },
  {
    id: "ppa-5",
    topic: "pre-processing-artefacts",
    difficulty: "hard",
    question:
      "Specimen marking dyes used for margin orientation can appear as an artefact on histological sections because:",
    options: [
      "They dissolve in paraffin wax and contaminate the entire section",
      "They are not the natural colour of the margin tissue and can penetrate into adjacent tissue — appearing as coloured deposits at the margin",
      "They prevent haematoxylin from staining the nuclei in the marked area",
      "They cause the tissue to shrink preferentially at the stained margins",
    ],
    correctIndex: 1,
    explanation:
      "Specimen marking dyes (ink, silver nitrate) used to orient excision margins can appear as coloured deposits on sections. They are not the natural tissue colour, and some dyes (particularly silver nitrate) can penetrate into the tissue beyond the surface margin, creating an artefactual appearance.",
  },

  // ── FIXATION ARTEFACTS ────────────────────────────────────────────────────
  {
    id: "fa-1",
    topic: "fixation-artefacts",
    difficulty: "easy",
    question: "Which 6 factors affect the quality and speed of fixation?",
    options: [
      "Colour, size, weight, shape, tissue type, and block number",
      "pH, osmolality, time, temperature, penetration rate, and concentration of fixative",
      "Mordant type, dehydration method, clearing agent, wax type, blade sharpness, and stain brand",
      "Staff experience, SOP version, laboratory accreditation, equipment brand, reagent supplier, and room temperature",
    ],
    correctIndex: 1,
    explanation:
      "Six factors affecting fixation: (1) pH — fixative must be buffered correctly; (2) Osmolality — must match tissue; (3) Time — sufficient time for penetration; (4) Temperature — higher temperature speeds fixation but may increase artefacts; (5) Penetration rate — tissue thickness matters; (6) Concentration — correct dilution required.",
  },
  {
    id: "fa-2",
    topic: "fixation-artefacts",
    difficulty: "medium",
    question: "Zonal fixation artefact refers to:",
    options: [
      "Over-fixation of the entire tissue block",
      "Different degrees of fixation at different levels within the same specimen — outer layers fixed, centre under-fixed — caused by large specimen size, insufficient fixative, or poor penetration",
      "Fixation that only works in cold temperatures",
      "A staining pattern caused by expired formalin",
    ],
    correctIndex: 1,
    explanation:
      "Zonal fixation = different degrees of fixation at different depths within one specimen. The outer zones are properly fixed; the centre is under-fixed or unfixed. Caused by: insufficient time in fixative, specimen too large (fixative cannot penetrate to centre), or fixative with a poor penetration rate.",
  },
  {
    id: "fa-3",
    topic: "fixation-artefacts",
    difficulty: "medium",
    question: "Formalin pigment appears on histological sections as:",
    options: [
      "Large white vacuoles throughout the cytoplasm",
      "A fine black/brown-to-black pigment deposited in tissue, with no relationship to normal tissue structures — formed when formalin buffer is exhausted and tissue becomes acidic",
      "Blue granules in cell nuclei",
      "Red staining of connective tissue fibres",
    ],
    correctIndex: 1,
    explanation:
      "Formalin pigment (haem-formalin pigment) appears as fine black/brown-to-black deposits in tissue. It forms when the formalin buffer becomes exhausted and the fixative becomes acidic — acidic formalin reacts with haemoglobin (haem) to form this artefact. Common in blood-rich tissues: spleen, lymph node, and autopsy tissue.",
  },
  {
    id: "fa-4",
    topic: "fixation-artefacts",
    difficulty: "hard",
    question: "How can formalin pigment artefact be prevented?",
    options: [
      "Fix tissue at 4°C to slow the chemical reaction",
      "Make thin sections, use adequate tissue-to-fixative ratio (at least 1:10 to 1:20), and replace fixative if it turns brownish-red (indicating buffer exhaustion)",
      "Use glutaraldehyde instead of formalin",
      "Stain sections with Masson's Trichrome instead of H&E",
    ],
    correctIndex: 1,
    explanation:
      "Prevention of formalin pigment: (1) Cut tissue into thin sections to ensure adequate fixative penetration; (2) Use adequate tissue:fixative ratio (at least 1:10, recommended 1:15–20); (3) Replace fixative immediately if it turns brownish-red — this indicates buffer exhaustion and acidification.",
  },
  {
    id: "fa-5",
    topic: "fixation-artefacts",
    difficulty: "hard",
    question: "The steaming artefact results from:",
    options: [
      "Over-heating slides in the drying oven after sectioning",
      "Precipitation and displacement of glycogen caused by an advancing fixation front during formalin fixation — seen in glycogen-rich tissues like liver",
      "Incomplete dewaxing leaving residual wax on the section",
      "Contamination of the water bath with foreign material",
    ],
    correctIndex: 1,
    explanation:
      "Steaming artefact occurs in glycogen-rich tissues (e.g. liver). As the fixation front advances through tissue, it precipitates and displaces glycogen from its normal position. Prevention: ensure adequate fixation of the whole tissue before processing by using correct volume and time in fixative.",
  },

  // ── PROCESSING & POST-PROCESSING ARTEFACTS ────────────────────────────────
  {
    id: "proc-art-1",
    topic: "processing-artefacts",
    difficulty: "easy",
    question: "Tissue shrinkage during paraffin wax processing occurs because:",
    options: [
      "H&E stain causes the tissue to contract",
      "Formalin fixation + paraffin processing can cause tissue to shrink up to approximately 30% of its original size",
      "The water bath is too hot during flotation",
      "The microtome blade cuts too deeply",
    ],
    correctIndex: 1,
    explanation:
      "Paraffin wax processing causes significant tissue shrinkage — up to approximately 30% of original size. This is due to the combined effects of formalin fixation, progressive dehydration, clearing, and infiltration with paraffin wax. Shrinkage artefact must be considered when measuring lesion sizes histologically.",
  },
  {
    id: "proc-art-2",
    topic: "processing-artefacts",
    difficulty: "medium",
    question:
      "Poor dehydration during tissue processing causes which artefact in histological sections?",
    options: [
      "Tissue sections stain too darkly with eosin",
      "Difficulty in sectioning (tearing and holes in sections), loss of nuclear detail, and cloudy appearance — due to residual water interfering with paraffin wax infiltration",
      "Formalin pigment deposition",
      "Sections floating off the slide during staining",
    ],
    correctIndex: 1,
    explanation:
      "Poor dehydration (improper gradient, over- or under-dehydration) leaves residual water in tissue. Water is miscible with paraffin wax, preventing proper infiltration. Results: difficulty sectioning (tearing, holes in sections), loss of nuclear detail, and cloudy appearance of sections on H&E.",
  },
  {
    id: "proc-art-3",
    topic: "processing-artefacts",
    difficulty: "medium",
    question:
      "Sectioning artefacts (knife marks) appear on histological sections as:",
    options: [
      "Folds where tissue has doubled over itself",
      "Parallel lines running across the entire width of the section — caused by nicks or scratches on the microtome blade",
      "Round clear spaces (bubbles) in the section",
      "Darkly stained areas at the section periphery",
    ],
    correctIndex: 1,
    explanation:
      "Sectioning/knife-mark artefacts appear as parallel lines or scores running across the full width of the section. They are caused by nicks, chips, or scratches on the microtome blade surface that score the section as it is cut. Solution: replace or reposition the disposable blade.",
  },
  {
    id: "proc-art-4",
    topic: "processing-artefacts",
    difficulty: "hard",
    question:
      "Air bubble entrapment as a post-processing artefact occurs during which step?",
    options: [
      "During tissue fixation in formalin",
      "During coverslipping (mounting) — bubbles trapped under the coverslip; if not expelled, air is drawn in as the mountant dries, creating larger bubbles",
      "During the flotation bath step",
      "During the dewaxing step before staining",
    ],
    correctIndex: 1,
    explanation:
      "Air bubbles occur during coverslipping. Bubbles trapped under the coverslip must be expelled immediately. If left, as the mountant (DPX) dries, it contracts and draws in more air — creating larger bubbles. Large bubbles obscure tissue and make microscopic examination impossible in affected areas.",
  },
  {
    id: "proc-art-5",
    topic: "processing-artefacts",
    difficulty: "hard",
    question:
      "Specimen-to-specimen contamination is a post-processing artefact where:",
    options: [
      "Formalin pigment from one block contaminates the staining bath",
      "A fragment of tissue from one patient's block contaminates another patient's section — potentially causing serious diagnostic errors",
      "Staining reagents carry over between different staining runs",
      "The water bath temperature is too high, melting wax from one block onto another",
    ],
    correctIndex: 1,
    explanation:
      "Specimen-to-specimen (floater) contamination occurs when a small fragment of tissue from one block inadvertently ends up on another patient's slide — usually via the water bath or microtome. This is a serious patient safety issue as it can cause misdiagnosis (e.g. cancer tissue floating onto a benign biopsy). Careful water bath management and clean equipment prevent this.",
  },

  // ── IHC PRINCIPLES & ANTIBODY STRUCTURE ──────────────────────────────────
  {
    id: "ihcp-1",
    topic: "ihc-principles",
    difficulty: "easy",
    question: "What is the principle of immunohistochemistry (IHC)?",
    options: [
      "Using chemical dyes to stain all tissue components simultaneously",
      "Using specific antibodies as probes to detect and localise specific antigens in tissue sections",
      "Using haematoxylin to stain cell nuclei in tissue",
      "Using electron microscopy to visualise subcellular structures",
    ],
    correctIndex: 1,
    explanation:
      "IHC uses specific antibodies that bind to target antigens in tissue. Once bound, the antibody is detected via a visualisation/detection system (reporter molecule) that produces a coloured or fluorescent signal at the site of antigen location.",
  },
  {
    id: "ihcp-2",
    topic: "ihc-principles",
    difficulty: "easy",
    question: "An antibody (immunoglobulin) molecule consists of:",
    options: [
      "One heavy chain and one light chain joined by a single disulfide bond",
      "Two identical heavy chains and two identical light chains joined by disulfide bonds — forming a Y-shaped molecule",
      "Four heavy chains with no light chains",
      "One variable region with no constant region",
    ],
    correctIndex: 1,
    explanation:
      "An antibody is a Y-shaped molecule consisting of two identical heavy chains and two identical light chains held together by disulfide bonds. The top arms (Fab region) contain the variable regions that bind antigen; the stem (Fc region) mediates biological effector functions.",
  },
  {
    id: "ihcp-3",
    topic: "ihc-principles",
    difficulty: "medium",
    question: "The variable (V) region of an antibody is responsible for:",
    options: [
      "Activating complement and binding Fc receptors",
      "Antigen binding — the unique sequence of amino acids in the variable region determines specificity for one particular epitope",
      "Determining the antibody class (IgG, IgM, etc.)",
      "Cross-linking multiple antibodies together",
    ],
    correctIndex: 1,
    explanation:
      "The variable (V) regions of both heavy and light chains form the antigen-binding site (paratope). Their unique amino acid sequences fold into a shape complementary to one specific epitope — giving each antibody its target specificity.",
  },
  {
    id: "ihcp-4",
    topic: "ihc-principles",
    difficulty: "medium",
    question: "The binding between antigen and antibody involves:",
    options: [
      "A single strong covalent bond that is irreversible",
      "Multiple weak non-covalent bonds (hydrogen bonds, electrostatic, Van der Waals, hydrophobic forces) — individually weak but collectively strong; readily reversible; interact by spatial complementarity",
      "Ionic bonds only between positively charged antigen and negatively charged antibody",
      "Covalent peptide bonds that permanently fix the antigen to the antibody",
    ],
    correctIndex: 1,
    explanation:
      "Antigen-antibody binding involves multiple weak non-covalent bonds — hydrogen bonds, electrostatic forces, Van der Waals forces, and hydrophobic interactions. Individually weak, but the large number of interactions and small intermolecular proximity make the combined binding force large. Bonds are readily reversible. Interaction depends on spatial complementarity (lock and key).",
  },
  {
    id: "ihcp-5",
    topic: "ihc-principles",
    difficulty: "hard",
    question:
      "There are 5 classes of immunoglobulins. Which class is most abundant in serum and is the primary antibody used in IHC?",
    options: ["IgA", "IgD", "IgE", "IgG", "IgM"],
    correctIndex: 3,
    explanation:
      "IgG is the most abundant immunoglobulin in human serum (~80%) and is the primary class used in IHC. IgG is monomeric, has a long half-life, crosses the placenta, and activates complement. Other classes: IgA (secretory, mucosal immunity), IgM (first antibody produced, pentameric), IgE (allergy), IgD (B-cell surface marker).",
  },

  // ── IHC: MONOCLONAL VS POLYCLONAL ANTIBODIES ──────────────────────────────
  {
    id: "ihcab-1",
    topic: "ihc-antibody-types",
    difficulty: "easy",
    question: "Polyclonal antibodies are produced by:",
    options: [
      "A single clone of plasma cells — identical antibodies targeting one epitope",
      "Multiple plasma cell clones — a mixed population of antibodies targeting different epitopes on the same antigen",
      "Hybridoma technology using fused B cells and myeloma cells",
      "In vitro cell culture using RPMI medium only",
    ],
    correctIndex: 1,
    explanation:
      "Polyclonal antibodies are produced by multiple B-lymphocyte clones. They are immunochemically dissimilar antibodies that react with various epitopes on the same antigen. Produced by injecting an immunogen into an animal (commonly rabbit) and harvesting antibodies from serum after the immune response.",
  },
  {
    id: "ihcab-2",
    topic: "ihc-antibody-types",
    difficulty: "easy",
    question: "Monoclonal antibodies are produced by:",
    options: [
      "Multiple clones of B-lymphocytes reacting to different epitopes",
      "A single clone of plasma cells (hybridoma) — structurally identical antibodies targeting one specific epitope",
      "Immunising rabbits with a mixed antigen preparation",
      "Extracting serum directly from immunised mice",
    ],
    correctIndex: 1,
    explanation:
      "Monoclonal antibodies are produced by a single clone of plasma cells (hybridoma technology = fused B-cell + myeloma). All antibodies are structurally identical and target one specific epitope on the antigen. Originally made from mice, but rabbit monoclonals are now also used.",
  },
  {
    id: "ihcab-3",
    topic: "ihc-antibody-types",
    difficulty: "medium",
    question: "The key advantage of POLYCLONAL antibodies over monoclonal is:",
    options: [
      "Unlimited supply and no batch-to-batch variability",
      "Greater sensitivity — mixed population can bind multiple epitopes; if one epitope is damaged in the tissue section, binding can still occur at other available epitopes",
      "Higher specificity with minimal cross-reactions",
      "Produced without using animals",
    ],
    correctIndex: 1,
    explanation:
      "Polyclonal advantage = greater sensitivity. Because they contain antibodies against multiple epitopes, if one epitope is damaged or not displayed in the section, binding can still occur with other available epitopes. Disadvantages: batch-to-batch variability; less specificity.",
  },
  {
    id: "ihcab-4",
    topic: "ihc-antibody-types",
    difficulty: "medium",
    question: "The key advantage of MONOCLONAL antibodies over polyclonal is:",
    options: [
      "Greater sensitivity because they bind multiple epitopes",
      "Unique specificity (1 antibody = 1 epitope); no batch-to-batch variability; unlimited supply; minimal cross-reactions with off-target antigens",
      "Produced from rabbits giving higher yield",
      "Faster and cheaper to produce",
    ],
    correctIndex: 1,
    explanation:
      "Monoclonal advantages: Unique specificity (one antibody binds one specific epitope — minimises non-specific cross-reactions), no batch-to-batch variability (all identical), unlimited supply (hybridoma cell line kept indefinitely). Disadvantages: decreased sensitivity (if the specific epitope is damaged/absent in the section, no binding occurs).",
  },
  {
    id: "ihcab-5",
    topic: "ihc-antibody-types",
    difficulty: "hard",
    question:
      "In an antibody data sheet for IHC, which information is provided?",
    options: [
      "Only the dilution factor and staining time",
      "Immunoglobulin concentration (mg/mL), Ig isotype (e.g. IgG1), clone number (if monoclonal), host animal, immunogen, species specificity, and amino acid sequence recognised",
      "Only the antigen name and expected staining pattern",
      "Only the lot number and expiry date",
    ],
    correctIndex: 1,
    explanation:
      "An antibody data sheet provides: Immunoglobulin concentration (mg/mL), Ig isotype (e.g. IgG1 kappa), Clone number (if monoclonal), Host animal (e.g. mouse or rabbit), Immunogen (the antigen used to raise the antibody), Species specificity, Amino acid sequence recognised (if available).",
  },

  // ── IHC DETECTION TECHNIQUES ──────────────────────────────────────────────
  {
    id: "ihct-1",
    topic: "ihc-techniques",
    difficulty: "easy",
    question: "In DIRECT IHC staining, which components are used?",
    options: [
      "Primary antibody + secondary antibody + DAB",
      "Only a labelled primary antibody that binds directly to the antigen and carries the reporter molecule",
      "Primary antibody + avidin-biotin complex + HRP",
      "Primary antibody + polymer backbone + secondary antibody",
    ],
    correctIndex: 1,
    explanation:
      "Direct IHC: Only ONE step — a labelled primary antibody is applied directly to the tissue. The reporter molecule (fluorescent label or enzyme) is attached to the primary antibody itself. Simple but less sensitive because signal amplification is minimal.",
  },
  {
    id: "ihct-2",
    topic: "ihc-techniques",
    difficulty: "easy",
    question: "In INDIRECT IHC staining, what are the two key steps?",
    options: [
      "Block endogenous peroxidase → Apply DAB",
      "Apply unlabelled primary antibody → Apply labelled secondary antibody that recognises the primary antibody's immunoglobulins",
      "Apply antigen retrieval → Apply enzyme label",
      "Apply fluorescent primary → Apply counterstain",
    ],
    correctIndex: 1,
    explanation:
      "Indirect IHC uses two steps: (1) Unlabelled primary antibody binds to target antigen; (2) Labelled secondary antibody (e.g. goat anti-mouse IgG with HRP) binds to the primary antibody. More sensitive than direct because multiple secondary antibodies bind each primary, amplifying the signal.",
  },
  {
    id: "ihct-3",
    topic: "ihc-techniques",
    difficulty: "medium",
    question:
      "Ranking from least to most sensitive IHC technique, which order is correct?",
    options: [
      "Polymer > ABC > PAP > Indirect > Direct",
      "Direct < Indirect < PAP < ABC < Polymer Technology",
      "ABC > Polymer > PAP > Direct > Indirect",
      "Direct = Indirect = PAP = ABC = Polymer",
    ],
    correctIndex: 1,
    explanation:
      "Sensitivity increases with signal amplification: Direct (least sensitive — 1 label per primary) → Indirect → PAP (peroxidase anti-peroxidase) → ABC (Avidin-Biotin Complex) → Polymer Technology (most sensitive — polymer backbone with multiple enzymes per secondary).",
  },
  {
    id: "ihct-4",
    topic: "ihc-techniques",
    difficulty: "medium",
    question:
      "The Avidin-Biotin Complex (ABC) method achieves high sensitivity because:",
    options: [
      "It uses two primary antibodies simultaneously",
      "Avidin has extremely high affinity for biotin (one of the strongest known non-covalent interactions); each ABC complex carries multiple HRP molecules, greatly amplifying the signal",
      "It bypasses the need for a secondary antibody",
      "It uses DAB and AEC simultaneously for dual staining",
    ],
    correctIndex: 1,
    explanation:
      "The ABC method: biotin-labelled secondary antibody binds primary → large avidin-biotin-peroxidase complex (ABC) binds biotin. Avidin has extremely high affinity for biotin (Kd ~10⁻¹⁵ M) and each ABC contains multiple HRP molecules, creating massive signal amplification.",
  },
  {
    id: "ihct-5",
    topic: "ihc-techniques",
    difficulty: "hard",
    question:
      'The secondary antibody in indirect IHC is described as an "anti-immunoglobulin." What does this mean?',
    options: [
      "It is made against a specific antigen in the patient's tissue",
      "It is raised against the immunoglobulin class of the primary antibody (e.g. goat anti-mouse IgG) — so it binds to the Fc/constant region of the primary antibody regardless of the primary's antigen specificity",
      "It contains the same variable region as the primary antibody",
      "It is produced in the same animal species as the primary antibody",
    ],
    correctIndex: 1,
    explanation:
      "The secondary antibody targets the constant regions of the primary antibody's immunoglobulin class — not the antigen. E.g. goat anti-mouse IgG binds to any mouse IgG antibody's Fc region. This makes one secondary antibody usable with many different primary antibodies of the same species/class.",
  },

  // ── IHC: ANTIGEN RETRIEVAL & FIXATION ─────────────────────────────────────
  {
    id: "ihcar-1",
    topic: "ihc-antigen-retrieval",
    difficulty: "easy",
    question: "Why does formalin fixation sometimes cause problems for IHC?",
    options: [
      "Formalin makes the tissue too hard to section",
      "Formaldehyde cross-links amino acids within and between proteins, which can physically block the primary antibody's access to the target antigen (epitope masking)",
      "Formalin dissolves the antibody before it can bind",
      "Formalin stains the tissue brown, interfering with DAB visualisation",
    ],
    correctIndex: 1,
    explanation:
      "Formalin (formaldehyde) fixes tissue by forming cross-links between amino acids. These cross-links can physically block the primary antibody's access to its target epitope — preventing binding. Not all antigens are affected; some remain accessible even after formalin fixation.",
  },
  {
    id: "ihcar-2",
    topic: "ihc-antigen-retrieval",
    difficulty: "easy",
    question:
      "Antigen retrieval is performed before IHC on formalin-fixed paraffin-embedded (FFPE) sections. What does it achieve?",
    options: [
      "It removes paraffin wax from the sections",
      "It breaks apart formalin-induced cross-links to unmask (expose) the epitope, allowing the primary antibody access to the antigen",
      "It stains the antigen a specific colour for easier identification",
      "It increases the sensitivity of the secondary antibody detection",
    ],
    correctIndex: 1,
    explanation:
      "Antigen retrieval (AR) breaks apart formalin-induced cross-links to unmask (retrieve/expose) the antigen epitope. This allows the primary antibody to access and bind the antigen. AR is essential for FFPE sections where cross-linking may have buried or distorted epitopes.",
  },
  {
    id: "ihcar-3",
    topic: "ihc-antigen-retrieval",
    difficulty: "medium",
    question: "What are the two main methods of antigen retrieval?",
    options: [
      "Acid retrieval and alkaline retrieval",
      "Heat-Induced Epitope Retrieval (HIER — using heat in buffer) and Proteolytic-Induced Epitope Retrieval (PIER — using proteinase K, trypsin, or pepsin to enzymatically unmask antigen)",
      "Mechanical disruption and chemical reduction",
      "Freeze-thaw cycles and sonication",
    ],
    correctIndex: 1,
    explanation:
      "Two AR methods: (1) HIER (Heat-Induced Epitope Retrieval) — tissue heated in buffer (e.g. citrate pH 6 or EDTA pH 9) breaks cross-links; (2) PIER (Proteolytic-Induced Epitope Retrieval) — proteases (proteinase K, trypsin, pepsin) enzymatically unmask the antigen. Standardised AR is critical for reproducible IHC results.",
  },
  {
    id: "ihcar-4",
    topic: "ihc-antigen-retrieval",
    difficulty: "medium",
    question:
      "Why are frozen sections often preferred over FFPE sections for certain IHC applications?",
    options: [
      "Frozen sections produce better H&E morphology than FFPE",
      "Frozen sections are unfixed — no formalin cross-links means no masking of proteins/antigens, so antigen retrieval is usually not needed; antigen and enzyme preservation is better",
      "Frozen sections can be stained with a wider range of chromogens",
      "Frozen sections are cheaper and faster to process than FFPE",
    ],
    correctIndex: 1,
    explanation:
      "Frozen sections are suitable for IHC when: antigens are formalin-sensitive (better preserved unfixed), enzymatic or lipid components are needed (formalin may destroy them), or rapid intraoperative results are needed. Disadvantage: poorer morphological quality, higher background, limited antibody panels vs FFPE.",
  },
  {
    id: "ihcar-5",
    topic: "ihc-antigen-retrieval",
    difficulty: "hard",
    question:
      "Blocking endogenous peroxidase activity is performed before the primary antibody in indirect immunoperoxidase IHC. Why?",
    options: [
      "To remove haematoxylin from the section",
      "Because tissues naturally contain endogenous peroxidase (especially erythrocytes, granulocytes); if not blocked, the DAB substrate reacts with endogenous peroxidase producing false-positive brown staining",
      "To prevent the secondary antibody from binding non-specifically to collagen",
      "To dissolve residual paraffin wax before antibody application",
    ],
    correctIndex: 1,
    explanation:
      "Endogenous peroxidase in tissues (abundant in RBCs, neutrophils) would react with the DAB/H₂O₂ substrate and produce false-positive brown staining. It is blocked by pre-treating sections with 1% H₂O₂ in methanol for 30 minutes at room temperature before antibody application.",
  },

  // ── IHC: CONTROLS, CHROMOGENS & APPLICATIONS ─────────────────────────────
  {
    id: "ihcca-1",
    topic: "ihc-controls-applications",
    difficulty: "easy",
    question:
      "DAB (3,3'-diaminobenzidine tetrahydrochloride) is the most common chromogen in IHC. What colour does it produce and what is an important safety note?",
    options: [
      "Red precipitate; no safety concerns",
      "Brown precipitate at the site of antigen; is a potential carcinogen — handle and dispose with care",
      "Blue precipitate; must be stored in the dark",
      "Green precipitate; requires aqueous mounting medium",
    ],
    correctIndex: 1,
    explanation:
      "DAB produces a permanent brown precipitate at sites where HRP (horseradish peroxidase) oxidises it using H₂O₂. The brown product resists alcohols and xylene and can be mounted in synthetic media (DPX). IMPORTANT: DAB is potentially carcinogenic — handle and dispose with care.",
  },
  {
    id: "ihcca-2",
    topic: "ihc-controls-applications",
    difficulty: "medium",
    question:
      "AEC (3-amino-9-ethylcarbazole) is an alternative chromogen to DAB. How does it differ from DAB?",
    options: [
      "AEC produces brown staining and is used on FFPE sections only",
      "AEC produces a rose-red precipitate; it is alcohol-soluble so sections must be mounted in aqueous medium (NOT DPX); used for cell smears",
      "AEC produces blue staining and is used to replace haematoxylin",
      "AEC is identical to DAB in colour and solubility",
    ],
    correctIndex: 1,
    explanation:
      "AEC produces a rose-red precipitate (vs DAB's brown). Critical difference: AEC is alcohol-soluble — sections must NOT be dehydrated in alcohol or mounted in DPX. An aqueous mounting medium must be used. AEC is often used for cytological smears.",
  },
  {
    id: "ihcca-3",
    topic: "ihc-controls-applications",
    difficulty: "medium",
    question: "A positive control in IHC must:",
    options: [
      "Be from a different species than the test tissue",
      "Be tissue known to contain the target antigen; from the same species; fixed and processed the same way; have the same pre-treatments; stained with the same protocol as the test tissue",
      "Show no staining with the primary antibody to confirm the secondary antibody is working",
      "Be a synthetic tissue standard provided by the antibody manufacturer",
    ],
    correctIndex: 1,
    explanation:
      "A positive control: must be tissue known to contain the target antigen; from the same species as test tissue; fixed and processed identically; have the same pre-treatments (antigen retrieval etc.); stained with the same protocol. Required for all clinical diagnostic IHC work.",
  },
  {
    id: "ihcca-4",
    topic: "ihc-controls-applications",
    difficulty: "medium",
    question: "A negative control in IHC is prepared by:",
    options: [
      "Using a lower concentration of primary antibody",
      "Substituting the primary antibody with the diluent (or an irrelevant antibody of the same isotype and immunoglobulin concentration); all other reagents are applied as per protocol",
      "Omitting the secondary antibody from the protocol",
      "Skipping the antigen retrieval step",
    ],
    correctIndex: 1,
    explanation:
      "Negative control (reagent substitution): replace the primary antibody with the diluent (or an irrelevant antibody of matching isotype and concentration). All other reagents are applied normally. A negative control that shows brown staining = non-specific background staining problem.",
  },
  {
    id: "ihcca-5",
    topic: "ihc-controls-applications",
    difficulty: "hard",
    question:
      "Which clinical applications rely on IHC for diagnosis and treatment decisions?",
    options: [
      "Blood group typing and haematological cell counts",
      "Tumour typing/cell lineage determination, hormone receptor status (ER, PR, HER2 in breast cancer), melanoma markers (HMB-45, S100), lymphoma typing (CD markers), and transplant rejection evaluation",
      "Bacteriological culture and sensitivity testing",
      "Serum protein electrophoresis",
    ],
    correctIndex: 1,
    explanation:
      "IHC clinical applications: Tumour typing (determine cell of origin using lineage markers — CK for carcinoma, CD45 for lymphoma), Therapeutic targets (ER, PR, HER2 in breast cancer guide treatment), Melanoma (HMB-45, S100), Lymphoma typing intraoperatively (on frozen sections), Transplant rejection evaluation, Melanoma detection.",
  },

  {
    id: "ihc-ca-6",
    topic: "ihc-controls-applications",
    difficulty: "medium",
    question: "In HER2 IHC testing, a score of 3+ means:",
    options: [
      "No staining — the tumour is HER2-negative",
      "Incomplete faint membrane staining in >10% of tumour cells — HER2-negative",
      "Weak to moderate complete membrane staining in >10% of invasive tumour cells — equivocal (FISH required)",
      "Complete, intense circumferential membranous staining in >10% of tumour cells — HER2-positive",
    ],
    correctIndex: 3,
    explanation: "HER2 IHC scoring: 0 = no staining or incomplete faint staining ≤10% (negative); 1+ = incomplete faint staining >10% (negative); 2+ = weak to moderate complete membrane staining >10% (equivocal — requires FISH confirmation); 3+ = complete intense circumferential membranous staining >10% (positive). 3+ directly qualifies for trastuzumab therapy.",
  },
  {
    id: "ihc-ca-7",
    topic: "ihc-controls-applications",
    difficulty: "hard",
    question: "The HercepTest (Trastuzumab) is a monoclonal antibody used in IHC to:",
    options: [
      "Detect ER and PR hormone receptors for hormonal therapy selection",
      "Target HER2 receptor protein through antibody-dependent cellular toxicity — determines eligibility for trastuzumab treatment in breast and gastric cancers",
      "Identify EGFR overexpression for cetuximab eligibility in colorectal cancer",
      "Detect TTF-1 for lung adenocarcinoma typing",
    ],
    correctIndex: 1,
    explanation: "HercepTest is a semiquantitative immunocytochemical assay targeting HER2 receptor protein. It determines HER2 overexpression in breast cancer and eligibility for trastuzumab (Herceptin) treatment. HER2 is present in ~15-20% of breast tumours. Trastuzumab decreases mortality in HER2-positive breast and gastric cancers when combined with chemotherapy. Approved for breast and gastric cancers only.",
  },
  {
    id: "ihc-ca-8",
    topic: "ihc-controls-applications",
    difficulty: "hard",
    question: "In breast cancer IHC, ER (oestrogen receptor) testing uses nuclear staining. A cytoplasmic-only staining result should be interpreted as:",
    options: [
      "Strongly positive — cytoplasmic staining indicates high receptor density",
      "Negative — only nuclear staining is a valid positive result for ER",
      "Equivocal — requires repeat testing with a different antibody",
      "Positive only if >50% of cells show cytoplasmic staining",
    ],
    correctIndex: 1,
    explanation: "ER is a nuclear stain — only nuclear staining counts as a positive result. Cytoplasmic-only staining is interpreted as negative. ER predicts response to tamoxifen/anti-oestrogens and is a prognostic marker for survival (ER+ is favourable). ER distinguishes endocervical (ER-) from endometrial (ER+) adenocarcinomas.",
  },
  // ── CYTOLOGY OVERVIEW & COLLECTION METHODS ────────────────────────────────
  {
    id: "cyto-1",
    topic: "cytology-overview",
    difficulty: "easy",
    question: "What is the key difference between histology and cytology?",
    options: [
      "Histology uses special stains; cytology uses only H&E",
      "Histology examines intact tissue sections (preserving architecture); cytology examines individual cells or small groups of cells (no tissue architecture)",
      "Histology is used in laboratories; cytology is only used at the bedside",
      "There is no difference — they study the same thing",
    ],
    correctIndex: 1,
    explanation:
      "Histology = examination of intact tissue sections preserving tissue architecture (relationship between cells). Cytology = examination of individual cells or small groups of cells — tissue architecture is absent. Cytology allows diagnosis from smaller, less invasive samples.",
  },
  {
    id: "cyto-2",
    topic: "cytology-overview",
    difficulty: "easy",
    question: "What are the three main methods of cytological cell collection?",
    options: [
      "Biopsy, excision, and autopsy",
      "Exfoliative (cells shed naturally or washed off), Abrasive (cells scraped/brushed from surface), and Aspiration/Intervention (FNA — needle used to aspirate cells from a mass)",
      "Fixation, embedding, and sectioning",
      "Swabbing, centrifugation, and culture",
    ],
    correctIndex: 1,
    explanation:
      "Three cytology collection methods: (1) Exfoliative — naturally shed cells (urine, sputum, CSF, pleural/peritoneal fluid); (2) Abrasive — cells scraped or brushed from a surface (Pap smear, bronchial brushings, endoscopic brushings); (3) Aspiration/Intervention — FNA using a needle to aspirate cells from palpable or non-palpable masses.",
  },
  {
    id: "cyto-3",
    topic: "cytology-overview",
    difficulty: "medium",
    question:
      "Fine Needle Aspiration (FNA) cytology is used for both palpable and non-palpable lesions. How are non-palpable lesions sampled?",
    options: [
      "By surgically removing the entire lesion for analysis",
      "With imaging guidance (ultrasound, MRI, or CT) to direct the needle accurately into the non-palpable lesion",
      "By collecting exfoliated cells from nearby urine or sputum",
      "By waiting until the lesion becomes palpable before sampling",
    ],
    correctIndex: 1,
    explanation:
      "Non-palpable lesions require imaging guidance (ultrasound, MRI, or CT scan) to locate the lesion and direct the needle for accurate aspiration. Palpable lesions (breast lump, thyroid nodule, lymph node, soft tissue mass) can be aspirated without imaging guidance.",
  },
  {
    id: "cyto-4",
    topic: "cytology-overview",
    difficulty: "medium",
    question:
      "Cytocentrifugation is used for specimens with low cell content (e.g. urine, CSF). What does it achieve?",
    options: [
      "It fixes the cells in formalin before staining",
      "It concentrates cells within a defined area on the slide to enable morphological identification and differential counting",
      "It removes blood cells from the specimen before staining",
      "It separates benign from malignant cells by density",
    ],
    correctIndex: 1,
    explanation:
      "Cytocentrifugation concentrates cells from low-cellularity specimens (urine, cerebrospinal fluid) into a defined circular area on the slide. This enables better morphological identification and differential counting of the concentrated cells.",
  },
  {
    id: "cyto-5",
    topic: "cytology-overview",
    difficulty: "hard",
    question:
      "Respiratory tract cytology specimens include sputum (for disease detection) and bronchial brushings. What is correct practice for sputum collection?",
    options: [
      "Collect once at any time of day into any container",
      "Collect on 3 consecutive days; early morning preferred; must come from a deep cough (not saliva); collect into a sterile container",
      "Mix with formalin immediately before collection",
      "Collect only if the patient has a productive cough visible to the clinician",
    ],
    correctIndex: 1,
    explanation:
      "Sputum collection best practice: 3 consecutive days (improves diagnostic sensitivity), early morning preferred (cells accumulate overnight), must be from a DEEP cough not saliva (to obtain cells from deeper airways), collected into a sterile container. Other respiratory cytology: bronchial washings, BAL, bronchial brushings, EBUS.",
  },

  // ── PAP STAIN & CYTOLOGICAL PREPARATION ──────────────────────────────────
  {
    id: "pap-1",
    topic: "pap-stain-preparation",
    difficulty: "easy",
    question:
      "The Papanicolaou (Pap) stain is a multichromatic staining technique. What are the colour results for different cell types?",
    options: [
      "All cells stain pink regardless of type",
      "Nuclei = blue/purple to black; Superficial squamous cells = pink; Intermediate and metaplastic cells = blue/green; Fully keratinised cells = orange",
      "Nuclei = orange; cytoplasm = blue; keratinised cells = black",
      "All cells stain blue because the stain is based on haematoxylin only",
    ],
    correctIndex: 1,
    explanation:
      "Pap stain is multichromatic: Nuclei = blue/purple-black (crisp and granular); Superficial squamous cells = PINK (mature, eosinophilic); Intermediate and metaplastic cells = BLUE/GREEN (less mature); Fully keratinised cells = ORANGE. Stains should be equal in intensity with cytoplasmic translucency and sharp contrast to nuclear stain.",
  },
  {
    id: "pap-2",
    topic: "pap-stain-preparation",
    difficulty: "medium",
    question:
      "What is the main difference between Traditional Pap Smear and ThinPrep (Liquid-Based Cytology)?",
    options: [
      "Traditional uses the Pap stain; ThinPrep uses H&E",
      "Traditional: cells smeared directly on slide then immediately fixed; ThinPrep: cells collected into PreservCyt vial then lab creates a thin even cell layer on slide — nearly all cells retained, cleared of blood/mucus",
      "Traditional is more sensitive; ThinPrep is less sensitive",
      "Both methods produce identical results with no practical difference",
    ],
    correctIndex: 1,
    explanation:
      "Traditional: cells smeared directly onto glass slide → immediate alcohol spray fixation → stained manually. Disadvantages: only fraction of sample used; may have poor quality from smearing technique; cells can overlap/obscure each other. ThinPrep (LBC): cells into PreservCyt vial → lab processes into thin even layer → nearly all cells retained; cleared of blood/mucus; better cell visualisation. ThinPrep is ~27% more effective.",
  },
  {
    id: "pap-3",
    topic: "pap-stain-preparation",
    difficulty: "medium",
    question:
      "What is the consequence of allowing cytological specimens to air-dry before fixation?",
    options: [
      "Cells stain more intensely with Pap stain",
      "Increase in eosinophilic staining; apparent nuclear enlargement; poor overall staining quality — air-drying artefact distorts cell morphology",
      "Cells become more uniform in appearance making diagnosis easier",
      "Air-drying has no effect on cytological preparations",
    ],
    correctIndex: 1,
    explanation:
      "Air-drying before fixation causes: increased eosinophilic staining, apparent nuclear enlargement, and poor staining quality. Cytological specimens (especially cervical smears) must be fixed IMMEDIATELY before air-drying to preserve cell morphology for accurate diagnosis.",
  },
  {
    id: "pap-4",
    topic: "pap-stain-preparation",
    difficulty: "hard",
    question:
      "In Australia's cervical screening program, what is the current recommended primary test (replacing the conventional Pap smear since 2017)?",
    options: [
      "Traditional Pap smear every 2 years",
      "HPV DNA test every 5 years as primary screen; if HPV detected → reflex LBC (ThinPrep) for cytological assessment",
      "Colposcopy as the primary screening tool for all women",
      "Blood test for HPV antibodies every year",
    ],
    correctIndex: 1,
    explanation:
      "Since December 2017, Australia replaced the 2-yearly Pap smear with the Cervical Screening Test (CST): HPV DNA test every 5 years (starting age 25). If HPV detected → reflex LBC ThinPrep cytology. This is more sensitive for detecting cervical pre-cancer than the traditional smear.",
  },

  {
    id: "pap-4",
    topic: "pap-stain-preparation",
    difficulty: "medium",
    question: "In the Papanicolaou (Pap) stain, which of the following colour results is CORRECT?",
    options: [
      "Nuclei = pink; superficial squamous cells = blue; keratinised cells = purple",
      "Nuclei = blue/purple to black (granular and crisp); superficial squamous cells = pink; intermediate/metaplastic cells = blue/green; fully keratinised cells = orange",
      "Nuclei = green; cytoplasm = red; background = yellow",
      "All cells stain the same shade of blue regardless of maturity",
    ],
    correctIndex: 1,
    explanation: "Pap stain results: Nuclei = blue/purple to black (granular and crisp — clearly visible at x10 and x40); Superficial squamous cells (mature) = pink; Intermediate and metaplastic cells (less mature) = blue/green; Fully keratinised cells = orange. There should be cytoplasmic translucency with sharp contrast to nuclear stain. The stains should be equal in intensity.",
  },
  {
    id: "pap-5",
    topic: "pap-stain-preparation",
    difficulty: "medium",
    question: "What are the consequences of air-drying a Pap smear before alcohol fixation?",
    options: [
      "Better staining results — air-drying improves cell adhesion to the slide",
      "Increased eosinophilic staining, apparent nuclear enlargement, and poor overall staining quality",
      "No effect — the Pap stain corrects for any drying artefact",
      "The slide becomes unsatisfactory only if dried for more than 24 hours",
    ],
    correctIndex: 1,
    explanation: "Air-drying before alcohol fixation causes: (1) increased eosinophilic staining, (2) apparent nuclear enlargement, and (3) poor staining quality. For Pap staining, the smear MUST be placed into 95% ethyl alcohol while still wet (immediately after collection). ThinPrep LBC avoids this problem as cells are rinsed into fixative solution immediately.",
  },
  // ── CERVICAL CANCER & HPV ─────────────────────────────────────────────────
  {
    id: "cerv-1",
    topic: "cervical-cancer-hpv",
    difficulty: "easy",
    question:
      "What percentage of cervical cancers are squamous cell carcinomas, and what is the most common causative agent?",
    options: [
      "30–40% squamous; caused by Candida infections",
      "85–90% squamous cell carcinomas; 90–95% of these contain Human Papillomavirus (HPV) DNA",
      "50% squamous; all caused by Herpes simplex virus",
      "10–15% squamous; the rest are adenocarcinomas",
    ],
    correctIndex: 1,
    explanation:
      "85–90% of cervical cancers are squamous cell carcinomas; 5–9% are adenocarcinoma; the rest are small cell carcinoma and cervical sarcoma. 90–95% of squamous cell carcinomas of the cervix contain HPV DNA — making HPV the dominant causal factor.",
  },
  {
    id: "cerv-2",
    topic: "cervical-cancer-hpv",
    difficulty: "easy",
    question: 'HPV types 16 and 18 are described as "high-risk" because:',
    options: [
      "They cause genital warts only",
      "They are responsible for nearly 50% of high-grade cervical pre-cancers; HPV 16 is the most common subtype in HSIL; more than 90% of people clear HPV infection naturally",
      "They only infect post-menopausal women",
      "They are the only HPV types that can be detected by the HPV DNA test",
    ],
    correctIndex: 1,
    explanation:
      "HPV 16 and 18 are the two most oncogenic HPV types, responsible for ~50% of high-grade cervical pre-cancers. HPV 16 is the most common subtype in HSIL. HPV is mainly sexually transmitted. Most infections (>90%) clear naturally. High-risk HPV can cause cancers at multiple sites: cervix, vulva, penis, anus, and oropharynx.",
  },
  {
    id: "cerv-3",
    topic: "cervical-cancer-hpv",
    difficulty: "medium",
    question:
      "Australia has set targets to eliminate cervical cancer as a public health problem by 2030. What are the three 90-70-90 targets?",
    options: [
      "90% diagnosed early, 70% treated, 90% cured",
      "90% of girls vaccinated against HPV by age 15; 70% of women screened every 5 years; 90% of women with cervical disease receiving treatment",
      "90% reduction in HPV types, 70% reduction in CIN, 90% reduction in invasive cancer",
      "90% ThinPrep adoption, 70% colposcopy rate, 90% surgical cure rate",
    ],
    correctIndex: 1,
    explanation:
      "Australia's 2030 cervical cancer elimination targets: (1) 90% of girls fully vaccinated against HPV by age 15; (2) 70% of eligible women screened every 5 years (via the 5-yearly HPV test); (3) 90% of women with cervical disease receiving appropriate treatment. Australia leads the world in cervical cancer prevention.",
  },
  {
    id: "cerv-4",
    topic: "cervical-cancer-hpv",
    difficulty: "medium",
    question: "In the FIGO staging system for cervical cancer, Stage 4 means:",
    options: [
      "Carcinoma in situ — abnormal cells in the innermost lining only",
      "Cancer found only in the cervix",
      "Cancer has spread to the upper part of the vagina or tissue around the uterus",
      "Cancer has spread beyond the pelvis — to bladder, rectum, abdomen, liver, or lungs (distant metastasis)",
    ],
    correctIndex: 3,
    explanation:
      "FIGO staging: Stage 0 = carcinoma in situ; Stage 1 = confined to cervix; Stage 2 = spread to upper vagina or parametrium; Stage 3 = spread to lower vagina or pelvic sidewall; Stage 4 = spread beyond pelvis (bladder, rectum, abdomen, liver, lungs). Stage determines treatment approach.",
  },
  {
    id: "cerv-5",
    topic: "cervical-cancer-hpv",
    difficulty: "hard",
    question:
      "The transformation zone of the cervix (junction of endocervix and ectocervix) is clinically important because:",
    options: [
      "It is covered by columnar epithelium that is immune to HPV infection",
      "It is the junction where squamous metaplasia occurs and where most cervical cancers arise — making sampling this area essential for an adequate Pap test",
      "It contains the lymphoid tissue that clears HPV infection",
      "It is located in the vaginal fornix, easily accessible for sampling",
    ],
    correctIndex: 1,
    explanation:
      "The transformation zone (squamocolumnar junction) is where the endocervical columnar epithelium meets the ectocervical squamous epithelium. Squamous metaplasia occurs here and is where most HPV-related pre-cancerous changes arise. Sampling endocervical cells from the transformation zone is essential for an adequate cervical screen.",
  },

  // ── PAP SMEAR RESULTS & INTERPRETATION ────────────────────────────────────
  {
    id: "papr-1",
    topic: "pap-smear-results",
    difficulty: "easy",
    question: "ASCUS stands for:",
    options: [
      "Atypical Squamous Cells of Undetermined Significance — cytological changes suggestive of squamous intraepithelial lesion but insufficient for definitive interpretation",
      "Acute Squamous Cell Ulceration Syndrome",
      "Abnormal Squamous Cervical Uterine Sample",
      "Advanced Squamous Cervical Undiagnosed Screen",
    ],
    correctIndex: 0,
    explanation:
      "ASCUS = Atypical Squamous Cells of Undetermined Significance. This means cells look like they could be abnormal (slightly increased N/C ratio, mild nuclear hyperchromasia/irregularity) but changes are insufficient for definitive interpretation. Could be related to HPV, inflammation, or be a false positive. HPV co-test helps clarify significance.",
  },
  {
    id: "papr-2",
    topic: "pap-smear-results",
    difficulty: "medium",
    question:
      "LSIL and HSIL refer to squamous intraepithelial lesions. What is the key difference?",
    options: [
      "LSIL = located in the lower cervix; HSIL = located in the upper cervix",
      "LSIL = low-grade dysplasia — mild precancerous changes likely present (HPV effect, koilocytosis); HSIL = high-grade dysplasia — more severe precancerous changes with greater risk of progressing to cervical cancer",
      "LSIL and HSIL are both benign with no risk of cancer",
      "LSIL requires immediate hysterectomy; HSIL is managed conservatively",
    ],
    correctIndex: 1,
    explanation:
      "LSIL (Low-grade Squamous Intraepithelial Lesion) = mild dysplasia (CIN 1); often shows HPV effect (koilocytosis). HSIL (High-grade Squamous Intraepithelial Lesion) = moderate-to-severe dysplasia (CIN 2–3); higher risk of progression to invasive cervical cancer. HPV 16 is the most common type in HSIL.",
  },
  {
    id: "papr-3",
    topic: "pap-smear-results",
    difficulty: "medium",
    question: 'An "unsatisfactory" Pap smear result occurs when:',
    options: [
      "The sample shows invasive cancer cells",
      "There are not enough squamous cells (insufficient cellularity) or cells are clumped together so the slide cannot be adequately assessed",
      "The staining quality is excellent but no abnormal cells are found",
      "The smear shows only inflammatory cells with no epithelial cells",
    ],
    correctIndex: 1,
    explanation:
      "An unsatisfactory result means the sample cannot be adequately evaluated — usually due to insufficient squamous cellularity (<5000 cells on ThinPrep), cells clumped together, or obscuring material (blood, mucus). The clinician is asked to repeat the test. Note: endocervical cells are NOT counted towards cellularity estimation.",
  },
  {
    id: "papr-4",
    topic: "pap-smear-results",
    difficulty: "hard",
    question:
      'In the descriptive diagnosis system for cervical smears, which organisms can be identified in the "infection" category?',
    options: [
      "ASCUS, LSIL, HSIL, and CIS only",
      "Trichomonas vaginalis, Candida species, coccobacilli (shift in vaginal flora — bacterial vaginosis), Actinomyces species, and Herpes simplex virus",
      "HPV, HIV, Hepatitis B and C only",
      "Gonorrhoea, Chlamydia, and syphilis treponema",
    ],
    correctIndex: 1,
    explanation:
      "The cytological descriptive diagnosis for infection includes: Trichomonas vaginalis, fungal organisms consistent with Candida species, predominance of coccobacilli consistent with shift in vaginal flora (bacterial vaginosis), Actinomyces species, and cellular changes associated with Herpes simplex virus.",
  },
  {
    id: "papr-5",
    topic: "pap-smear-results",
    difficulty: "hard",
    question: "CIS (Carcinoma in Situ) on a Pap smear result means:",
    options: [
      "Early invasive cancer that has spread beyond the cervix",
      "Abnormal cells that are confined to the innermost lining of the cervix (Stage 0) — full-thickness epithelial involvement without invasion through the basement membrane; high risk of progression to invasive cancer",
      "A normal variation that requires no follow-up",
      "Reactive changes due to inflammation or IUD use",
    ],
    correctIndex: 1,
    explanation:
      "Carcinoma in situ (CIS/Stage 0) means full-thickness dysplastic cells throughout the cervical epithelium but the basement membrane is INTACT — no stromal invasion yet. This result means the abnormal changes are likely to lead to cervical cancer if untreated. Management: colposcopy + biopsy → LLETZ/cone biopsy.",
  },

  // ── CYTOLOGY: NORMAL VS CANCER CELL MORPHOLOGY ───────────────────────────
  {
    id: "cytom-1",
    topic: "cytology-morphology",
    difficulty: "easy",
    question:
      "Which features distinguish cancer cells from normal cells in a cytological preparation?",
    options: [
      "Cancer cells are always smaller and have less cytoplasm than normal cells",
      "Cancer cells: large variably shaped nuclei, hyperchromatic, increased N/C ratio, many dividing cells, disorganised arrangement, loss of normal features, pleomorphism",
      "Cancer cells always show uniform round nuclei with prominent nucleoli",
      "Cancer cells have more cytoplasm and a lower N/C ratio than normal cells",
    ],
    correctIndex: 1,
    explanation:
      "Cancer cell features: Large, variably shaped NUCLEI (vs small uniform in normal); Many DIVIDING cells — disorganised arrangement; Variation in size and SHAPE (pleomorphism); Loss of normal specialised features; High nuclear-to-cytoplasmic (N/C) ratio; Hyperchromatic chromatin; Irregular nuclear membrane.",
  },
  {
    id: "cytom-2",
    topic: "cytology-morphology",
    difficulty: "medium",
    question:
      "In cytological specimens, morphology parameters assessed include cell arrangement, size/shape, cytoplasmic features, and nuclear features. What is the critical feature of MALIGNANCY in the nucleus?",
    options: [
      "A single small central nucleolus",
      "Hyperchromatic (darker) nucleus with coarser, unevenly distributed chromatin, irregular nuclear membrane, and prominent nucleolus — the critical features of malignancy reside in the nucleus",
      "Pale nucleus with evenly distributed fine chromatin",
      "Multiple small nuclei of equal size",
    ],
    correctIndex: 1,
    explanation:
      'The critical malignancy features are nuclear: hyperchromasia (darker staining), coarse and unevenly distributed chromatin, irregular/angular nuclear membrane, prominent nucleolus, and increased mitotic activity. "The critical feature of malignancy resides in the nucleus."',
  },
  {
    id: "cytom-3",
    topic: "cytology-morphology",
    difficulty: "medium",
    question:
      "Necrosis and apoptosis are two forms of cell death that differ in:",
    options: [
      "Necrosis is programmed and physiological; apoptosis is always pathological",
      "Necrosis: cell enlarges, plasma membrane disrupted, enzymatic leakage, adjacent INFLAMMATION; Apoptosis: cell shrinks, membrane intact, fragmentation into apoptotic bodies, NO inflammation",
      "Both result in identical morphological changes at the nuclear level",
      "Apoptosis causes cell swelling; necrosis causes cell shrinkage",
    ],
    correctIndex: 1,
    explanation:
      "Necrosis: cell swelling → membrane disruption → enzymatic leakage → INFLAMMATION. Pathological (irreversible injury). Nucleus: pyknosis → karyorrhexis → karyolysis. Apoptosis: cell shrinkage → membrane blebs → fragmentation into apoptotic bodies → phagocytosis. NO inflammation. Often physiological (normal cell turnover).",
  },
  {
    id: "cytom-4",
    topic: "cytology-morphology",
    difficulty: "hard",
    question:
      "The three forms of nuclear destruction in necrosis are (in order):",
    options: [
      "Karyorrhexis → pyknosis → karyolysis",
      "Pyknosis (nuclear shrinkage — DNA condenses) → Karyorrhexis (nuclear fragmentation — pyknotic membrane ruptures) → Karyolysis (nuclear fading — chromatin dissolution by DNAses/RNAses)",
      "Karyolysis → karyorrhexis → pyknosis",
      "Nuclear swelling → nuclear fading → nuclear condensation",
    ],
    correctIndex: 1,
    explanation:
      "Nuclear destruction sequence in necrosis: (1) Pyknosis — nucleus shrinks; DNA condenses into a shrunken basophilic mass; (2) Karyorrhexis — the pyknotic nuclear membrane ruptures; nucleus undergoes fragmentation; (3) Karyolysis — chromatin dissolution by DNAses and RNAses results in nuclear fading. End result: anuclear necrotic cell.",
  },
  {
    id: "cytom-5",
    topic: "cytology-morphology",
    difficulty: "hard",
    question:
      "The presence of necrosis in the BACKGROUND of a cytological smear is clinically significant because:",
    options: [
      "Necrosis indicates the specimen is poorly fixed and should be rejected",
      "When necrosis is present with malignant cells, it generally indicates INVASIVE cancer (tumour necrosis is a sign of aggressive disease)",
      "Necrosis is always caused by HPV infection",
      "Background necrosis means the specimen contains insufficient cells for diagnosis",
    ],
    correctIndex: 1,
    explanation:
      "Background necrosis (tumour diathesis) in a cytological smear — when present in association with malignant cells — generally indicates INVASIVE cancer. Invasive tumours outgrow their blood supply → central necrosis. This extracellular necrotic debris in the background is a major indicator of invasive rather than in-situ disease.",
  },

  // ── EPITHELIAL TISSUE ────────────────────────────────────────────────────
  {
    id: "epit-1",
    topic: "epithelial-tissue",
    difficulty: "easy",
    question:
      "What are the four basic types of tissue that compose the organs of the body?",
    options: [
      "Epithelial, connective, muscular, osseous",
      "Epithelial, connective, nervous, muscular",
      "Glandular, connective, nervous, vascular",
      "Squamous, cuboidal, columnar, transitional",
    ],
    correctIndex: 1,
    explanation:
      "The four basic tissue types are: Epithelial (covers surfaces, lines cavities), Connective (binds/supports/protects), Nervous (transmits impulses), and Muscular (contracts to produce movement).",
  },
  {
    id: "epit-2",
    topic: "epithelial-tissue",
    difficulty: "easy",
    question:
      "Which property is unique to epithelial tissue compared to connective tissue?",
    options: [
      "It contains an extracellular matrix",
      "Cells are in direct contact and avascular — nutrients diffuse from underlying connective tissue",
      "It contains fibroblasts and collagen",
      "It has a rich blood supply within the tissue",
    ],
    correctIndex: 1,
    explanation:
      "Epithelial tissue is avascular — it has NO blood vessels. Nutrients and oxygen diffuse from capillaries in the underlying connective tissue across the basement membrane. All cells are in close contact with each other.",
  },
  {
    id: "epit-3",
    topic: "epithelial-tissue",
    difficulty: "medium",
    question:
      "What are the three cell shapes used to classify epithelial cells?",
    options: [
      "Round, oval, elongated",
      "Squamous (flat), cuboidal (cube-shaped), columnar (tall)",
      "Stratified, simple, pseudostratified",
      "Basal, intermediate, surface",
    ],
    correctIndex: 1,
    explanation:
      "Epithelial cells are classified by shape: Squamous (flat, scale-like), Cuboidal (as wide as tall, square in cross-section), Columnar (taller than wide, like columns). The shape of the surface cell determines the classification.",
  },
  {
    id: "epit-4",
    topic: "epithelial-tissue",
    difficulty: "medium",
    question: 'What does "simple" mean in the classification of epithelium?',
    options: [
      "The epithelium has only one function",
      "All cells contact the basement membrane — single layer of cells",
      "The cells are squamous in shape",
      "The epithelium lacks a basement membrane",
    ],
    correctIndex: 1,
    explanation:
      "Simple epithelium = a SINGLE layer of cells where ALL cells contact the basement membrane. Stratified epithelium = multiple layers where only the basal layer contacts the basement membrane.",
  },
  {
    id: "epit-5",
    topic: "epithelial-tissue",
    difficulty: "hard",
    question:
      "What distinguishes pseudostratified epithelium from true stratified epithelium?",
    options: [
      "Pseudostratified has multiple layers of cells all touching the basement membrane",
      "Pseudostratified APPEARS multilayered because nuclei are at different heights, but ALL cells contact the basement membrane — it is actually a single layer",
      "Pseudostratified lacks goblet cells",
      "Pseudostratified is only found in glands",
    ],
    correctIndex: 1,
    explanation:
      "Pseudostratified epithelium appears multilayered because nuclei sit at different heights, giving a false (pseudo) stratified appearance. However, ALL cells contact the basement membrane — it is truly a single layer. Classic example: respiratory epithelium of the trachea.",
  },
  {
    id: "epit-6",
    topic: "epithelial-tissue",
    difficulty: "easy",
    question: "Epithelial tissue is classified by two criteria. What are they?",
    options: [
      "Cell size and cell colour",
      "Number of layers (simple vs stratified) and cell shape (squamous, cuboidal, columnar)",
      "Location and function only",
      "Presence of nuclei and cell-to-cell junctions",
    ],
    correctIndex: 1,
    explanation:
      "Epithelium is named using two criteria: (1) number of layers — Simple (one layer) or Stratified (multiple layers); and (2) shape of the surface cells — Squamous, Cuboidal, or Columnar.",
  },

  // ── SIMPLE EPITHELIUM ─────────────────────────────────────────────────────
  {
    id: "simp-1",
    topic: "simple-epithelium",
    difficulty: "easy",
    question:
      "Simple squamous epithelium is found at sites requiring rapid diffusion. Which location is a classic example?",
    options: [
      "Tracheal lining",
      "Alveoli of the lungs and capillary walls",
      "Skin surface (palms and soles)",
      "Urinary bladder lining",
    ],
    correctIndex: 1,
    explanation:
      "Simple squamous epithelium consists of a single layer of flat cells, ideal for passive diffusion and filtration. Classic locations: alveoli (gas exchange), capillary walls, glomerular capsule (Bowman's capsule), serous membranes (peritoneum, pleura).",
  },
  {
    id: "simp-2",
    topic: "simple-epithelium",
    difficulty: "easy",
    question: "Simple cuboidal epithelium is commonly found in:",
    options: [
      "Alveoli",
      "Kidney tubules, thyroid follicles, and small gland ducts",
      "Oesophageal lining",
      "Urinary bladder",
    ],
    correctIndex: 1,
    explanation:
      "Simple cuboidal epithelium (cells as wide as tall, round central nucleus) lines kidney tubules (secretion and absorption), thyroid follicles (hormone storage), and small gland ducts.",
  },
  {
    id: "simp-3",
    topic: "simple-epithelium",
    difficulty: "medium",
    question:
      "Simple columnar epithelium of the small intestine is specialised with microvilli on the apical surface. These form the:",
    options: [
      "Cilia that beat to move mucus",
      "Brush border that increases absorptive surface area",
      "Tight junctions between cells",
      "Basement membrane attachment",
    ],
    correctIndex: 1,
    explanation:
      'The microvilli on the apical surface of simple columnar epithelium in the small intestine form the "brush border," dramatically increasing the surface area available for absorption of nutrients.',
  },
  {
    id: "simp-4",
    topic: "simple-epithelium",
    difficulty: "medium",
    question:
      "Pseudostratified ciliated columnar epithelium with goblet cells is the classic lining of:",
    options: [
      "The oesophagus",
      "The trachea and bronchi (respiratory epithelium)",
      "The urinary bladder",
      "The small intestine",
    ],
    correctIndex: 1,
    explanation:
      "The trachea and bronchi are lined by pseudostratified ciliated columnar epithelium containing goblet cells. Cilia sweep mucus upward (mucociliary escalator); goblet cells secrete the mucus that traps inhaled particles.",
  },
  {
    id: "simp-5",
    topic: "simple-epithelium",
    difficulty: "hard",
    question:
      "On an H&E section, you see a single layer of flat cells with dark flattened nuclei lining a small blood vessel. This is:",
    options: [
      "Simple cuboidal epithelium",
      "Transitional epithelium",
      "Simple squamous epithelium (endothelium)",
      "Pseudostratified epithelium",
    ],
    correctIndex: 2,
    explanation:
      "Endothelium — the lining of blood and lymphatic vessels — is simple squamous epithelium. A single layer of flat cells with dark, elongated/flattened nuclei is the hallmark appearance.",
  },

  // ── STRATIFIED EPITHELIUM ─────────────────────────────────────────────────
  {
    id: "strat-1",
    topic: "stratified-epithelium",
    difficulty: "easy",
    question:
      'Stratified squamous keratinised epithelium is found where and what makes it "keratinised"?',
    options: [
      "Lining of the mouth; cells are filled with glycogen",
      "Epidermis of the skin (thick and thin skin); surface cells are dead, anucleate, and filled with keratin protein",
      "Lining of the oesophagus; cells are mucus-filled",
      "Lining of the vagina; cells are flattened but still alive",
    ],
    correctIndex: 1,
    explanation:
      "Keratinised stratified squamous epithelium forms the epidermis. The surface cells are dead, anucleate, and packed with the protein keratin — forming the tough waterproof barrier of the skin. Non-keratinised type (e.g. oesophagus, oral mucosa) has living cells on the surface.",
  },
  {
    id: "strat-2",
    topic: "stratified-epithelium",
    difficulty: "easy",
    question:
      "The oesophagus and oral cavity are lined by which type of epithelium?",
    options: [
      "Simple columnar",
      "Stratified squamous non-keratinised",
      "Transitional (urothelium)",
      "Pseudostratified columnar",
    ],
    correctIndex: 1,
    explanation:
      "Stratified squamous non-keratinised epithelium lines surfaces subjected to mechanical abrasion (oesophagus, oral cavity, vagina). Unlike keratinised epithelium, the surface cells are still alive and nucleated — there is no keratin layer.",
  },
  {
    id: "strat-3",
    topic: "stratified-epithelium",
    difficulty: "medium",
    question:
      "Transitional epithelium (urothelium) is uniquely suited to the urinary bladder because:",
    options: [
      "It secretes mucus to neutralise urine",
      "It can stretch — surface umbrella cells change from dome-shaped (empty bladder) to flat (full bladder)",
      "It is impermeable to all ions",
      "It contains goblet cells for moisture",
    ],
    correctIndex: 1,
    explanation:
      'Transitional epithelium (urothelium) is a multilayered epithelium with dome-shaped "umbrella" surface cells that flatten and slide over each other when the bladder fills — accommodating the volume change. Found in ureter and bladder.',
  },
  {
    id: "strat-4",
    topic: "stratified-epithelium",
    difficulty: "medium",
    question:
      "On H&E sections, transitional epithelium of the EMPTY bladder appears thick with prominent dome-shaped surface cells. When the bladder is FULL, the epithelium:",
    options: [
      "Remains the same thickness",
      "Appears thinner as umbrella cells flatten and intermediate cells slide apart",
      "Transforms into simple squamous epithelium",
      "Develops a keratin layer",
    ],
    correctIndex: 1,
    explanation:
      "When the bladder fills and stretches, the transitional epithelium thins — umbrella cells flatten dramatically and intermediate cells spread out. This reversible change is unique to urothelium and allows the bladder to accommodate large volumes.",
  },
  {
    id: "strat-5",
    topic: "stratified-epithelium",
    difficulty: "hard",
    question:
      "Stratified columnar epithelium is rare. Which location is a classic site?",
    options: [
      "Alveoli",
      "Lumen of the spongy (penile) urethra and large excretory ducts of some glands",
      "Epidermis of thick skin",
      "Tracheal lining",
    ],
    correctIndex: 1,
    explanation:
      "Stratified columnar epithelium is rare. It is found in the spongy (penile) urethra and the large excretory ducts of some glands. Surface cells are columnar; basal cells may be cuboidal or polygonal.",
  },

  {
    id: "strat-6",
    topic: "stratified-epithelium",
    difficulty: "medium",
    question: "Stratified cuboidal epithelium has two or more layers of square/round surface cells. Where is it found and what does it do?",
    options: [
      "Ureter and bladder — allows stretch during filling",
      "Spongy urethra — rare, secretory function",
      "Sweat gland ducts, ovarian follicles, and seminiferous tubules — secretes sweat and produces sperm/ovarian hormones",
      "Trachea and bronchi — ciliated for mucus transport",
    ],
    correctIndex: 2,
    explanation: "Stratified cuboidal epithelium is found in: sweat gland ducts (secretes sweat), ovarian follicles (produces ovarian hormones), and seminiferous tubules (produces sperm). It has 2+ layers with surface cells that are square or round.",
  },
  {
    id: "strat-7",
    topic: "stratified-epithelium",
    difficulty: "hard",
    question: "Pseudostratified columnar epithelium exists in two forms — ciliated and non-ciliated. Where is the NON-CILIATED form found?",
    options: [
      "Trachea, bronchi, and nasal cavity (respiratory mucosa)",
      "Vas deferens, epididymis, and sensory cells of the ear",
      "Stomach and intestinal crypts",
      "Urinary bladder and ureter",
    ],
    correctIndex: 1,
    explanation: "Pseudostratified non-ciliated columnar epithelium is found in: vas deferens, epididymis (with stereocilia — non-motile microvilli), and sensory cells of the ear. The ciliated form (with goblet cells) lines the respiratory tract (trachea, bronchi, nasal cavity).",
  },
  // ── CONNECTIVE TISSUE OVERVIEW ────────────────────────────────────────────
  {
    id: "cto-1",
    topic: "connective-tissue-overview",
    difficulty: "easy",
    question:
      "What is the defining structural feature that distinguishes connective tissue from epithelial tissue?",
    options: [
      "Connective tissue is avascular",
      "Connective tissue has an abundant extracellular matrix (ECM) — cells occupy less space than the matrix",
      "Connective tissue lacks a basement membrane",
      "Connective tissue cells are all in direct contact",
    ],
    correctIndex: 1,
    explanation:
      "In connective tissue, cells occupy LESS space than the extracellular matrix (ECM). Most cells are NOT in direct contact with each other. This is the opposite of epithelial tissue where cells are tightly packed.",
  },
  {
    id: "cto-2",
    topic: "connective-tissue-overview",
    difficulty: "easy",
    question: "Which are the three broad categories of connective tissue?",
    options: [
      "Loose, dense, and fibrous",
      "Connective tissue proper, supporting connective tissue (cartilage & bone), and fluid connective tissue (blood)",
      "Areolar, reticular, and adipose",
      "Hyaline, fibrocartilage, and elastic",
    ],
    correctIndex: 1,
    explanation:
      "Connective tissue is classified into three broad categories: (1) Connective tissue proper (loose and dense), (2) Supporting connective tissue (cartilage and bone), (3) Fluid connective tissue (blood and lymph).",
  },
  {
    id: "cto-3",
    topic: "connective-tissue-overview",
    difficulty: "medium",
    question:
      "Which cell type in connective tissue is responsible for producing the fibres and ground substance of the extracellular matrix?",
    options: ["Macrophages", "Fibroblasts", "Mast cells", "Adipocytes"],
    correctIndex: 1,
    explanation:
      "Fibroblasts are the primary resident cell of connective tissue proper. They synthesise and secrete all components of the ECM — collagen fibres, elastic fibres, reticular fibres, and ground substance.",
  },
  {
    id: "cto-4",
    topic: "connective-tissue-overview",
    difficulty: "medium",
    question:
      "Mast cells are found alongside blood vessels in connective tissue and release which two mediators?",
    options: [
      "Insulin and glucagon",
      "Heparin (inhibits clotting) and histamine (dilates blood vessels)",
      "Collagen and elastin",
      "Antibodies and lymphokines",
    ],
    correctIndex: 1,
    explanation:
      "Mast cells are located near blood vessels in connective tissue. They release: Heparin (anticoagulant — inhibits blood clotting) and Histamine (vasodilator — dilates blood vessels during allergic reactions and inflammation).",
  },
  {
    id: "cto-5",
    topic: "connective-tissue-overview",
    difficulty: "hard",
    question:
      "Plasma cells in connective tissue arise from which cell type and what is their function?",
    options: [
      "Fibroblasts; produce collagen",
      "Lymphocytes; synthesise and secrete antibodies (immunoglobulins)",
      "Neutrophils; attack bacteria by phagocytosis",
      "Mast cells; secrete histamine",
    ],
    correctIndex: 1,
    explanation:
      "Plasma cells differentiate from B lymphocytes. They are the antibody factories of the immune system — producing large quantities of specific immunoglobulins (antibodies) in response to antigens.",
  },

  // ── CONNECTIVE TISSUE FIBRES & GROUND SUBSTANCE ───────────────────────────
  {
    id: "ctf-1",
    topic: "connective-tissue-fibres",
    difficulty: "easy",
    question:
      "Collagen is the most abundant protein in the body (~25%). What are its key mechanical properties?",
    options: [
      "Stretchy and elastic — returns to shape after deformation",
      "Tough, flexible, and stretch-resistant",
      "Thin and branching — forms mesh-like networks",
      "Fluid and gel-like — fills intercellular spaces",
    ],
    correctIndex: 1,
    explanation:
      "Collagen fibres are the most abundant CT fibres. They are tough, flexible, and highly stretch-resistant. They are the main component of tendons (attach muscle to bone) and ligaments (attach bone to bone), and form the deep layer of the dermis.",
  },
  {
    id: "ctf-2",
    topic: "connective-tissue-fibres",
    difficulty: "medium",
    question:
      "Reticular fibres are thin collagen fibres coated with glycoprotein. Where are they primarily found?",
    options: [
      "In tendons and ligaments",
      "Forming the supportive framework (stroma) of spleen, lymph nodes, and bone marrow",
      "In the walls of elastic arteries",
      "In the perichondrium of cartilage",
    ],
    correctIndex: 1,
    explanation:
      "Reticular fibres (type III collagen coated with glycoprotein) form a fine mesh-like network that provides the structural framework (stroma) for lymphoid organs including the spleen, lymph nodes, thymus, and bone marrow.",
  },
  {
    id: "ctf-3",
    topic: "connective-tissue-fibres",
    difficulty: "medium",
    question:
      "Elastic fibres are made of the protein elastin. What is their functional property?",
    options: [
      "High tensile strength and resistance to stretching",
      "Allow stretch and recoil — return to original shape after deformation",
      "Form the framework for lymphoid tissue",
      "Bind components of the matrix together via glycoproteins",
    ],
    correctIndex: 1,
    explanation:
      "Elastic fibres (made of elastin) are thinner than collagen, branch and rejoin each other, and allow tissues to STRETCH and RECOIL. They are abundant in elastic arteries (aorta), lung parenchyma, elastic cartilage, and skin dermis.",
  },
  {
    id: "ctf-4",
    topic: "connective-tissue-fibres",
    difficulty: "hard",
    question:
      "Ground substance is the component of ECM between cells and fibres. Which molecules form the main components of ground substance?",
    options: [
      "Collagen I and collagen III only",
      "Glycosaminoglycans (GAGs), proteoglycans, and adhesive glycoproteins",
      "Elastin and fibronectin only",
      "Haemoglobin and albumin",
    ],
    correctIndex: 1,
    explanation:
      "Ground substance consists of: GAGs (long polysaccharide chains — e.g. chondroitin sulfate, heparin, hyaluronic acid), Proteoglycans (bottle-brush shaped core protein + GAGs), and Adhesive glycoproteins (bind tissue components together). It has a gelatinous-to-rubbery consistency.",
  },
  {
    id: "ctf-5",
    topic: "connective-tissue-fibres",
    difficulty: "hard",
    question:
      "Chondroitin sulfate is the most abundant GAG and is responsible for:",
    options: [
      "Providing elasticity to blood vessel walls",
      "The stiffness and compressive resistance of cartilage",
      "Forming the perichondrium around cartilage",
      "Producing the keratin layer in thick skin",
    ],
    correctIndex: 1,
    explanation:
      "Chondroitin sulfate is the most abundant GAG in the body and is responsible for the stiffness and compressive resistance of cartilage. It attracts water, giving cartilage its firm gel-like consistency.",
  },

  {
    id: "ctf-6",
    topic: "connective-tissue-fibres",
    difficulty: "medium",
    question: "Type I collagen is the most abundant collagen in the human body. Where is it found?",
    options: [
      "Articular cartilage only",
      "Scar tissue (end product of healing), tendons, and the organic part of bone",
      "Basal lamina of epithelia",
      "Granulation tissue produced by young fibroblasts",
    ],
    correctIndex: 1,
    explanation: "Type I collagen = most abundant. Found in scar tissue (end product when tissue heals by repair), tendons, ligaments, and the organic matrix of bone. It has great tensile strength and is the main component of ligaments and tendons.",
  },
  {
    id: "ctf-7",
    topic: "connective-tissue-fibres",
    difficulty: "medium",
    question: "Type III collagen is described as the 'collagen of granulation tissue.' This means it is:",
    options: [
      "The most abundant collagen in the adult body and found in bones",
      "Produced quickly by young fibroblasts in healing wounds — before being replaced by the stronger Type I collagen",
      "Found exclusively in articular cartilage surfaces",
      "The structural collagen of basement membranes",
    ],
    correctIndex: 1,
    explanation: "Type III collagen is produced quickly by young fibroblasts during wound healing (granulation tissue). It forms early before the tougher Type I collagen is synthesized. Type II = articular cartilage; Type IV = basal lamina (basement membrane); Type III is demonstrated by Masson/Gomori techniques and Van Gieson stain.",
  },
  {
    id: "ctf-8",
    topic: "connective-tissue-fibres",
    difficulty: "hard",
    question: "Elastic fibres differ from collagen fibres in that they:",
    options: [
      "Are the most abundant fibre in connective tissue",
      "Can stretch up to 1.5 times their length and snap back — they are NOT visible on routine H&E and require special stains (Verhoeff's/Weigert's)",
      "Are demonstrated with the Van Gieson stain as red fibres",
      "Are composed of chondroitin sulfate and hyaluronic acid",
    ],
    correctIndex: 1,
    explanation: "Elastic fibres (composed of elastin protein, cross-linked by desmosine and isodesmosine) can stretch to 1.5× their length. They are abundant in tissues needing flexibility (arteries, lungs, skin). They cannot be seen on H&E — require special stains: Verhoeff's Van Gieson, Weigert's stain, or Gomori. Produced by fibroblasts and smooth muscle cells.",
  },
  // ── LOOSE CONNECTIVE TISSUE ───────────────────────────────────────────────
  {
    id: "lct-1",
    topic: "loose-connective-tissue",
    difficulty: "easy",
    question:
      'Areolar tissue is described as the "model" connective tissue because it:',
    options: [
      "Is the most abundant type in the body",
      "Contains all six CT cell types and all three fibre types — loosely organised with abundant blood vessels",
      "Is found only in the skin",
      "Has the most collagen fibres of any CT type",
    ],
    correctIndex: 1,
    explanation:
      "Areolar tissue is loosely organised with fibres running in random directions. It contains all six cell types (fibroblasts, macrophages, leukocytes, plasma cells, mast cells, adipocytes) and all three fibre types (collagen, elastic, reticular). It underlies nearly every epithelium.",
  },
  {
    id: "lct-2",
    topic: "loose-connective-tissue",
    difficulty: "easy",
    question:
      "Adipose tissue is dominated by adipocytes. On H&E, adipocytes appear as:",
    options: [
      "Dark purple clusters with small nuclei",
      "Empty-looking cells with a thin cell membrane and a nucleus flattened against the cell wall (signet-ring appearance)",
      "Dense fibrous bundles",
      "Pale glassy matrix with chondrocytes in lacunae",
    ],
    correctIndex: 1,
    explanation:
      "Adipocytes are large cells that store a single large lipid droplet. During H&E processing, the lipid is dissolved, leaving empty-looking cells with thin margins and a nucleus pressed against the cell membrane (signet-ring appearance). They pack together like chicken wire.",
  },
  {
    id: "lct-3",
    topic: "loose-connective-tissue",
    difficulty: "medium",
    question:
      "White adipose tissue and brown adipose tissue differ in that brown fat:",
    options: [
      "Is found only in adults and stores more energy",
      "Is found in fetuses, infants, and children; its brown colour comes from blood vessels and mitochondrial enzymes; it functions as a heat-generating tissue",
      "Has larger adipocytes than white fat",
      "Contains no blood vessels",
    ],
    correctIndex: 1,
    explanation:
      "Brown adipose tissue is found in fetuses, infants, and young children. Its brown colour comes from dense blood vessels and cytochrome-containing mitochondria. It specialises in thermogenesis (heat production) via non-shivering heat generation — important for newborns.",
  },
  {
    id: "lct-4",
    topic: "loose-connective-tissue",
    difficulty: "medium",
    question:
      "Reticular connective tissue forms the supportive stroma of lymphoid organs. It is composed of:",
    options: [
      "Dense collagen bundles and fibroblasts",
      "A mesh of reticular fibres and reticular cells (specialised fibroblasts)",
      "Predominantly elastic fibres",
      "Adipocytes and areolar tissue",
    ],
    correctIndex: 1,
    explanation:
      "Reticular tissue consists of a mesh of reticular fibres (type III collagen) and associated reticular cells (specialised fibroblasts). This network forms the supportive stroma of lymph nodes, spleen, thymus, and bone marrow — providing scaffolding for immune cells.",
  },

  // ── DENSE CONNECTIVE TISSUE ───────────────────────────────────────────────
  {
    id: "dct-1",
    topic: "dense-connective-tissue",
    difficulty: "easy",
    question:
      "Dense regular connective tissue has densely packed parallel collagen fibres. Where is it found and what does this arrangement provide?",
    options: [
      "Skin dermis; resistance to multi-directional stresses",
      "Tendons (muscle to bone) and ligaments (bone to bone); maximum tensile strength in one direction",
      "Lymph node stroma; mesh-like support",
      "Areolar tissue; flexibility and support",
    ],
    correctIndex: 1,
    explanation:
      "Dense regular CT has all collagen fibres running in parallel — providing maximum tensile strength in ONE direction. This makes it ideal for tendons (attach muscle to bone) and ligaments (attach bone to bone). Fibroblast nuclei appear compressed between fibres.",
  },
  {
    id: "dct-2",
    topic: "dense-connective-tissue",
    difficulty: "medium",
    question:
      "Dense irregular connective tissue has randomly arranged collagen fibres. Which locations are classic examples?",
    options: [
      "Tendons and ligaments",
      "Deeper dermis of skin, capsules around organs, and submucosa of the GI tract",
      "Alveolar walls",
      "Lymph nodes and spleen",
    ],
    correctIndex: 1,
    explanation:
      "Dense irregular CT has densely packed collagen fibres in random orientations — providing resistance to stresses from MULTIPLE unpredictable directions. Classic locations: deeper dermis of skin, organ capsules (e.g. kidney, liver), joint capsules, and GI submucosa.",
  },
  {
    id: "dct-3",
    topic: "dense-connective-tissue",
    difficulty: "medium",
    question:
      "Elastic connective tissue is found in walls of large elastic arteries (e.g. aorta). On H&E, what do the elastic lamellae look like?",
    options: [
      "Pale glassy matrix with cells in lacunae",
      "Pink wavy parallel sheets (lamellae) alternating with smooth muscle cells",
      "Dense irregular bundles of collagen",
      "Mesh of reticular fibres with lymphocytes",
    ],
    correctIndex: 1,
    explanation:
      "Elastic CT in the aortic wall appears as pink wavy elastic lamellae (sheets) arranged concentrically with smooth muscle cells between them. This arrangement allows the aorta to expand during systole and recoil during diastole, maintaining blood flow.",
  },
  {
    id: "dct-4",
    topic: "dense-connective-tissue",
    difficulty: "hard",
    question:
      "On H&E, what key feature distinguishes dense REGULAR from dense IRREGULAR CT?",
    options: [
      "Dense regular has elastic fibres; dense irregular has only collagen",
      "Dense regular = parallel wavy collagen bundles with compressed fibroblast nuclei in rows; dense irregular = haphazardly interwoven collagen bundles",
      "Dense regular stains blue; dense irregular stains pink",
      "Dense regular is avascular; dense irregular is highly vascular",
    ],
    correctIndex: 1,
    explanation:
      "The key H&E distinction: Dense regular CT shows parallel wavy pink collagen fibres with fibroblast nuclei lined up in rows between bundles (seen in tendons). Dense irregular CT shows thick collagen bundles weaving in all directions with fewer visible cells (seen in dermis).",
  },

  // ── CARTILAGE ─────────────────────────────────────────────────────────────
  {
    id: "cart-1",
    topic: "cartilage",
    difficulty: "easy",
    question:
      "What are the three types of cartilage and how are they distinguished?",
    options: [
      "White, yellow, and clear — by colour",
      "Hyaline (fine collagen, glassy matrix), Fibrocartilage (coarse collagen bundles), Elastic (abundant elastic fibres)",
      "Articular, costal, and tracheal — by location only",
      "Compact, spongy, and reticular — by density",
    ],
    correctIndex: 1,
    explanation:
      "Three types of cartilage: (1) Hyaline — fine collagen fibres invisible by LM, clear glassy matrix; (2) Fibrocartilage — large coarse collagen bundles visible on H&E; (3) Elastic cartilage — abundant elastic fibres visible (requires special stains). All contain chondrocytes in lacunae.",
  },
  {
    id: "cart-2",
    topic: "cartilage",
    difficulty: "easy",
    question:
      "Hyaline cartilage has a clear, glassy appearance on H&E because:",
    options: [
      "It contains no cells",
      "Its collagen fibres are so fine they match the refractive index of the matrix — appearing invisible by light microscopy",
      "The matrix is stained with a special dye",
      "It has no ground substance",
    ],
    correctIndex: 1,
    explanation:
      'Hyaline cartilage appears clear/glassy ("hyalos" = glass in Greek) because its type II collagen fibres are very fine and have the same refractive index as the surrounding matrix, making them invisible by light microscopy. Locations: tracheal C-rings, articular cartilage, costal cartilage, fetal skeleton.',
  },
  {
    id: "cart-3",
    topic: "cartilage",
    difficulty: "medium",
    question: "Why does cartilage heal slowly after injury?",
    options: [
      "Chondrocytes divide too rapidly after injury",
      "Cartilage is avascular — nutrients reach chondrocytes by diffusion only, so repair is slow",
      "The perichondrium prevents new cells from entering",
      "Cartilage lacks a ground substance",
    ],
    correctIndex: 1,
    explanation:
      "Cartilage is avascular (no blood vessels). Nutrients and oxygen must diffuse through the matrix to reach chondrocytes in their lacunae. Without a direct blood supply, repair after injury is very slow. This is why damaged cartilage (e.g. menisci, articular cartilage) heals poorly.",
  },
  {
    id: "cart-4",
    topic: "cartilage",
    difficulty: "medium",
    question:
      "Fibrocartilage is found at the pubic symphysis, intervertebral discs, and knee menisci. Why is it suited to these sites?",
    options: [
      "It provides flexible elastic support",
      "Its large coarse collagen bundles resist compression and absorb shock",
      "Its glassy matrix allows diffusion",
      "It has the most elastic fibres of any cartilage type",
    ],
    correctIndex: 1,
    explanation:
      "Fibrocartilage contains large, coarse, visible collagen bundles (type I) arranged to resist compressive forces and absorb mechanical shock. It is found at sites subject to high compressive loads: pubic symphysis, intervertebral discs, and knee menisci.",
  },
  {
    id: "cart-5",
    topic: "cartilage",
    difficulty: "hard",
    question:
      "The perichondrium surrounds most cartilage types and contains a reserve population of chondroblasts. What is its function?",
    options: [
      "It supplies blood directly to chondrocytes in lacunae",
      "It provides a source of new chondroblasts for cartilage growth and repair throughout life",
      "It prevents nutrients from diffusing into the cartilage",
      "It replaces cartilage with bone during ossification",
    ],
    correctIndex: 1,
    explanation:
      "The perichondrium is a sheath of dense irregular CT surrounding elastic and most hyaline cartilage (NOT articular cartilage). It contains chondroblasts that can proliferate to allow appositional (surface) growth of cartilage throughout life — providing a reserve pool for repair.",
  },

  // ── BONE ──────────────────────────────────────────────────────────────────
  {
    id: "bone-1",
    topic: "bone",
    difficulty: "easy",
    question: "What are the two forms of osseous (bone) tissue?",
    options: [
      "Hyaline and fibrous bone",
      "Spongy bone (porous, with trabeculae and marrow cavities) and compact bone (dense, no visible spaces)",
      "Periosteal and endosteal bone",
      "Cortical and medullary cartilage",
    ],
    correctIndex: 1,
    explanation:
      "Two forms: (1) Spongy bone — porous with thin bony struts (trabeculae) and marrow cavities; found in heads of long bones and flat bones. (2) Compact bone — dense, calcified tissue arranged in osteons (Haversian systems); forms the shaft of long bones.",
  },
  {
    id: "bone-2",
    topic: "bone",
    difficulty: "medium",
    question:
      "The structural unit of compact bone is the osteon (Haversian system). What does it consist of?",
    options: [
      "Trabeculae surrounded by bone marrow",
      "A central canal containing blood vessels and nerves, surrounded by concentric lamellae of mineralised matrix",
      "Chondrocytes in lacunae arranged around a perichondrium",
      "Reticular fibres and macrophages",
    ],
    correctIndex: 1,
    explanation:
      "An osteon (Haversian system) consists of: a central (Haversian) canal containing blood vessels and nerves, surrounded by concentric rings (lamellae) of mineralised matrix. Osteocytes sit in lacunae within the lamellae and communicate via canaliculi.",
  },
  {
    id: "bone-3",
    topic: "bone",
    difficulty: "medium",
    question: "Canaliculi in compact bone serve which function?",
    options: [
      "They carry blood directly to osteocytes",
      "They are tiny canals connecting lacunae, allowing osteocytes to exchange nutrients and signals with each other",
      "They mark the boundary between osteons",
      "They contain the periosteum",
    ],
    correctIndex: 1,
    explanation:
      "Canaliculi are delicate canals radiating from each lacuna to neighbouring lacunae. Osteocyte cell processes extend through canaliculi, allowing adjacent osteocytes to communicate and exchange nutrients and waste — essential since osteocytes are trapped in mineralised matrix.",
  },
  {
    id: "bone-4",
    topic: "bone",
    difficulty: "hard",
    question:
      "On a ground (unstained) section of compact bone, what microscopic features identify the osteon system?",
    options: [
      "Empty-looking cells with thin margins arranged in hexagonal lobules",
      "Central canals (dark round holes), concentric lamellae around them, small dark lacunae with canaliculi radiating outward, and cement lines at osteon boundaries",
      "Parallel wavy collagen fibres with fibroblast nuclei",
      "Chondrocytes in lacunae surrounded by a clear glassy matrix",
    ],
    correctIndex: 1,
    explanation:
      "Ground sections of compact bone show: Central canals (round spaces for vessels), concentric lamellae around each canal, osteocyte lacunae (small dark spaces) within lamellae, canaliculi radiating from lacunae, and cement lines marking the outer boundary of each osteon.",
  },

  // ── BLOOD (FLUID CT) ──────────────────────────────────────────────────────
  {
    id: "bld-1",
    topic: "blood-tissue",
    difficulty: "easy",
    question:
      'Blood is classified as a connective tissue. What is the "matrix" equivalent in blood?',
    options: [
      "The red blood cells",
      "Plasma — the liquid ground substance of blood",
      "The white blood cells",
      "The platelets",
    ],
    correctIndex: 1,
    explanation:
      'Blood is fluid connective tissue. Its matrix equivalent is plasma — the straw-coloured liquid component (~55% of blood volume) containing water, dissolved proteins, nutrients, hormones, and ions. The "cells" are the formed elements (erythrocytes, leukocytes, platelets).',
  },
  {
    id: "bld-2",
    topic: "blood-tissue",
    difficulty: "easy",
    question:
      "Erythrocytes (red blood cells) are the most numerous blood cells. Their primary function is:",
    options: [
      "Defence against infection",
      "Transport of O₂ and CO₂ via haemoglobin",
      "Blood clotting via fibrin",
      "Antibody production",
    ],
    correctIndex: 1,
    explanation:
      "Erythrocytes are biconcave discs packed with haemoglobin — they transport O₂ from lungs to tissues and CO₂ from tissues to lungs. They are anucleate in mature form (no nucleus) and have a lifespan of ~120 days.",
  },
  {
    id: "bld-3",
    topic: "blood-tissue",
    difficulty: "medium",
    question:
      "Which five types of leukocytes (white blood cells) are present in blood?",
    options: [
      "Erythrocytes, platelets, monocytes, fibroblasts, mast cells",
      "Neutrophils, eosinophils, basophils, lymphocytes, monocytes",
      "Macrophages, plasma cells, mast cells, fibroblasts, adipocytes",
      "T cells, B cells, NK cells, dendritic cells, Kupffer cells",
    ],
    correctIndex: 1,
    explanation:
      "Five types of leukocytes: Neutrophils (attack bacteria — most common WBC), Eosinophils (fight parasites, allergies), Basophils (release histamine), Lymphocytes (B and T cells — adaptive immunity), Monocytes (become macrophages in tissues).",
  },
  {
    id: "bld-4",
    topic: "blood-tissue",
    difficulty: "medium",
    question:
      "Platelets are cell fragments involved in haemostasis. They originate from:",
    options: [
      "Lymphocytes",
      "Megakaryocytes in bone marrow",
      "Monocytes",
      "Erythrocyte precursors",
    ],
    correctIndex: 1,
    explanation:
      "Platelets (thrombocytes) are small anucleate cell fragments derived from megakaryocytes in bone marrow. They aggregate at sites of vascular injury and release clotting factors — forming the primary platelet plug and initiating the coagulation cascade.",
  },
  {
    id: "bld-5",
    topic: "blood-tissue",
    difficulty: "hard",
    question:
      "On a Romanowsky-stained blood smear (e.g. Giemsa/Wright stain), neutrophils are identified by:",
    options: [
      "Large purple bi-lobed nucleus and orange-red granules",
      "Multi-lobed (2–5 lobes) purple nucleus connected by thin strands, with pale pink granules in the cytoplasm",
      "Large kidney-shaped nucleus and grey-blue cytoplasm",
      "Small round dark nucleus with a thin rim of blue cytoplasm",
    ],
    correctIndex: 1,
    explanation:
      "Neutrophils have a characteristic multi-lobed nucleus (2–5 lobes joined by thin strands) and pale pink cytoplasmic granules. They are the most abundant WBC (~60–70% of all WBCs) and are the first responders to bacterial infection.",
  },

  // ── NERVOUS TISSUE ────────────────────────────────────────────────────────
  {
    id: "nerv-1",
    topic: "nervous-tissue",
    difficulty: "easy",
    question:
      "Nervous tissue consists of two main cell types. What are they and what is each cell's role?",
    options: [
      "Fibroblasts (structural support) and adipocytes (energy storage)",
      "Neurons (detect stimuli and transmit electrical signals) and neuroglia/glial cells (support, protect, and maintain neurons)",
      "Chondrocytes (matrix production) and osteocytes (mineralisation)",
      "Erythrocytes (O₂ transport) and leukocytes (immune defence)",
    ],
    correctIndex: 1,
    explanation:
      'Nervous tissue = Neurons + Neuroglia. Neurons are excitable cells that detect stimuli, generate electrical impulses, and transmit coded information. Neuroglia (glial cells) are the "housekeepers" — they support, protect, insulate, and nourish neurons. Glial cells are more numerous than neurons.',
  },
  {
    id: "nerv-2",
    topic: "nervous-tissue",
    difficulty: "medium",
    question:
      "A neuron has three main structural components. What are they and what does each do?",
    options: [
      "Nucleus, cytoplasm, and cell membrane only",
      "Neurosoma/cell body (contains nucleus, controls protein synthesis), Dendrites (receive signals from other cells), Axon (sends outgoing signals to other cells)",
      "Axon, myelin sheath, and Schwann cells only",
      "Soma, synapse, and neurotransmitters only",
    ],
    correctIndex: 1,
    explanation:
      "Neuron parts: (1) Neurosoma (cell body) — contains nucleus and organelles, controls protein synthesis; (2) Dendrites — multiple short branched processes that RECEIVE signals; (3) Axon — single long fibre that SENDS signals to other cells. Axons can be >1 metre long.",
  },
  {
    id: "nerv-3",
    topic: "nervous-tissue",
    difficulty: "medium",
    question:
      "Nissl substance (Nissl bodies) in the neurosoma of neurons represents:",
    options: [
      "Stored lipid droplets",
      "Rough endoplasmic reticulum (rER) stacked for high-rate protein synthesis",
      "Melanin granules",
      "Glycogen deposits",
    ],
    correctIndex: 1,
    explanation:
      "Nissl substance consists of stacks of rough endoplasmic reticulum (rER) and free ribosomes. It reflects the neuron's high metabolic activity and constant protein synthesis. On H&E it appears as a coarse blue-purple granular material in the cytoplasm of the neurosoma.",
  },
  {
    id: "nerv-4",
    topic: "nervous-tissue",
    difficulty: "hard",
    question:
      'What property distinguishes nervous and muscular tissues as "excitable tissues"?',
    options: [
      "They are more vascular than other tissues",
      "They have developed excitability to the highest degree — able to respond to stimuli by changing membrane potential (voltage across the cell membrane)",
      "They can divide rapidly in response to injury",
      "They produce the largest amounts of collagen",
    ],
    correctIndex: 1,
    explanation:
      "Excitability = the ability to respond to stimuli by changing membrane potential (electrical charge difference across cell membrane). All cells have some excitability, but nervous and muscular tissues have developed it to the highest degree — enabling rapid signal transmission (neurons) and contraction (muscle cells).",
  },

  // ── MUSCULAR TISSUE ───────────────────────────────────────────────────────
  {
    id: "musc-1",
    topic: "muscular-tissue",
    difficulty: "easy",
    question:
      "What are the three types of muscular tissue and how are they controlled?",
    options: [
      "Striated, non-striated, and mixed — all voluntary",
      "Skeletal (striated, voluntary), Cardiac (striated, involuntary), Smooth (non-striated, involuntary)",
      "Voluntary, involuntary, and automatic — all striated",
      "Peripheral, central, and autonomic",
    ],
    correctIndex: 1,
    explanation:
      "Three types: (1) Skeletal muscle — striated, voluntary (conscious control), attaches to bone; (2) Cardiac muscle — striated, involuntary, found only in the heart; (3) Smooth muscle — no striations, involuntary, forms walls of hollow organs.",
  },
  {
    id: "musc-2",
    topic: "muscular-tissue",
    difficulty: "medium",
    question:
      "Skeletal muscle fibres are multinucleated with nuclei located at the cell periphery. On H&E, what else distinguishes skeletal muscle?",
    options: [
      "Intercalated discs and branching cells",
      "Alternating dark (A) bands and light (I) bands — called striations — running perpendicular to the long axis",
      "Fusiform cells with central oval nuclei and no striations",
      "Single central nucleus and branching fibres",
    ],
    correctIndex: 1,
    explanation:
      "Skeletal muscle fibres are long cylindrical multinucleate cells with peripheral nuclei. Their defining feature is cross-striations — alternating dark A bands (myosin-rich) and light I bands (actin-rich) — visible at high power on H&E. They attach to bone via tendons.",
  },
  {
    id: "musc-3",
    topic: "muscular-tissue",
    difficulty: "medium",
    question:
      "Cardiac muscle is found only in the heart. What unique structural feature connects cardiac muscle cells end-to-end?",
    options: [
      "Myofibrils",
      "Intercalated discs — specialised junctions providing both electrical and mechanical coupling",
      "Gap junctions only",
      "Sarcomeres",
    ],
    correctIndex: 1,
    explanation:
      "Intercalated discs are unique to cardiac muscle. They appear as dark transverse lines on H&E and contain gap junctions (for electrical coupling — synchronised contraction) and desmosomes (for mechanical coupling — preventing cells pulling apart). Cardiomyocytes are branched, shorter than skeletal fibres, and have ONE central nucleus.",
  },
  {
    id: "musc-4",
    topic: "muscular-tissue",
    difficulty: "medium",
    question:
      "Smooth muscle is described as fusiform (spindle-shaped) with a single central nucleus. Where is it found and how does it appear on H&E?",
    options: [
      "In all skeletal muscles; striated with peripheral nuclei",
      "In walls of hollow organs (GI tract, blood vessels, bladder, uterus); no striations; single oval central nucleus; cells taper at each end",
      "Only in the heart; intercalated discs visible",
      "In tendons and ligaments; compressed fibroblast nuclei between collagen",
    ],
    correctIndex: 1,
    explanation:
      "Smooth (visceral) muscle is involuntary, forms the muscularis of hollow organs. On H&E: fusiform cells with single central oval nuclei, no striations, arranged in sheets. In longitudinal section — cigar-shaped cells. In transverse section — round cross-sections of varying size (staggered arrangement).",
  },
  {
    id: "musc-5",
    topic: "muscular-tissue",
    difficulty: "hard",
    question:
      "When comparing skeletal and cardiac muscle on H&E, which combination of features is UNIQUE to cardiac muscle?",
    options: [
      "Striations and voluntary control",
      "Branched cells + single central nucleus + intercalated discs (dark transverse lines)",
      "Peripheral nuclei + long cylindrical fibres + voluntary",
      "Fusiform shape + no striations + involuntary",
    ],
    correctIndex: 1,
    explanation:
      "The triad unique to cardiac muscle: (1) branched (not straight) cells, (2) single CENTRAL nucleus (skeletal has PERIPHERAL, multiple nuclei), and (3) intercalated discs (dark transverse lines — absent in skeletal muscle). Both cardiac and skeletal muscle are striated and involuntary vs voluntary respectively.",
  },

  // ── SLIDE DISTRIBUTION ────────────────────────────────────────────────────
  {
    id: "dist-1",
    topic: "slide-distribution",
    difficulty: "easy",
    question:
      "After staining, slides are organised into slide folders and distributed according to:",
    options: [
      "Alphabetical order of patient surname",
      "Urgency of the case and the appropriate specialist",
      "The order in which they were processed",
      "The type of stain used",
    ],
    correctIndex: 1,
    explanation:
      "Slides are distributed according to urgency (urgent cases first) and directed to the correct specialist pathologist or clinician for microscopic examination and reporting.",
  },
  {
    id: "dist-2",
    topic: "slide-distribution",
    difficulty: "easy",
    question:
      "Before slide folders are taken to the pathologist, slides are scanned to:",
    options: [
      "Digitise the slides for telepathology",
      "Verify that the order is complete and all expected slides are present",
      "Check the staining quality automatically",
      "Archive the slides permanently",
    ],
    correctIndex: 1,
    explanation:
      "Slides are scanned (using the slide barcode or label) to verify that the order is complete — ensuring all required slides and stains are present before the folder is sent for reporting.",
  },
  {
    id: "dist-3",
    topic: "slide-distribution",
    difficulty: "medium",
    question:
      "The slide folders are taken to the pathologist for examination under:",
    options: [
      "An electron microscope",
      "A light microscope",
      "A confocal microscope",
      "A fluorescence microscope",
    ],
    correctIndex: 1,
    explanation:
      "Routine histopathology slides are examined under a light microscope by the pathologist. The pathologist then generates the histopathology report based on their microscopic findings.",
  },
  // ── Lecture 5: Cell Injury Concepts ───────────────────────────────────────
  {
    id: "ci-1",
    topic: "cell-injury-concepts",
    difficulty: "easy",
    question: "What is homeostasis?",
    options: [
      "The study of disease mechanisms",
      "A process that maintains stability of the body's internal environment in response to external changes",
      "The structural changes that occur in diseased tissue",
      "The prediction of probable disease outcome",
    ],
    correctIndex: 1,
    explanation: "Homeostasis is a process that maintains the stability of the human body's internal environment in response to changes in external conditions. Disruption of homeostasis can lead to cell injury.",
  },
  {
    id: "ci-2",
    topic: "cell-injury-concepts",
    difficulty: "easy",
    question: "Pathogenesis is defined as:",
    options: [
      "The structural changes that occur in tissue that allow distinction of one disease from another",
      "The prediction of the probable outcome of a disease",
      "The mechanism of a disease that leads to structural and functional abnormalities",
      "The study of disease covering investigation of structural and functional abnormalities",
    ],
    correctIndex: 2,
    explanation: "Pathogenesis is the mechanism of a disease which leads to structural and functional abnormalities — how these changes generate other abnormalities and result in disease manifestations.",
  },
  {
    id: "ci-3",
    topic: "cell-injury-concepts",
    difficulty: "easy",
    question: "In histopathology, 'lesions' refer to:",
    options: [
      "Wounds on the skin surface",
      "Structural changes that occur in tissue, allowing distinction of one disease from another",
      "The cause or stimulus of cell injury",
      "Cells that have undergone apoptosis",
    ],
    correctIndex: 1,
    explanation: "Lesions are the structural changes that occur in tissue. These changes may allow distinction of one disease from another and are observed by the pathologist during microscopic examination.",
  },
  {
    id: "ci-4",
    topic: "cell-injury-concepts",
    difficulty: "medium",
    question: "The three stages of cellular injury in correct order are:",
    options: [
      "Morphology → Pathogenesis → Aetiology",
      "Aetiology → Morphology → Pathogenesis",
      "Pathogenesis → Aetiology → Morphology",
      "Aetiology → Pathogenesis → Morphology",
    ],
    correctIndex: 3,
    explanation: "The three stages are: Aetiology (cause/stimulus) → Pathogenesis (what happens as a result) → Morphology (cellular changes seen by the pathologist).",
  },
  {
    id: "ci-5",
    topic: "cell-injury-concepts",
    difficulty: "medium",
    question: "Necrosis is defined as:",
    options: [
      "Programmed cell death regulated by intracellular signals",
      "When a localised portion of the body dies due to injury",
      "Reversible cell swelling in response to hypoxia",
      "Nuclear condensation in apoptotic cells",
    ],
    correctIndex: 1,
    explanation: "Necrosis is when a localised portion of the body dies due to injury — it is an uncontrolled, pathological form of cell death, distinct from apoptosis which is programmed cell death.",
  },
  {
    id: "ci-6",
    topic: "cell-injury-concepts",
    difficulty: "hard",
    question: "Prognosis refers to:",
    options: [
      "The mechanism of a disease producing structural abnormalities",
      "The cause or stimulus that initiates cell injury",
      "The prediction of the probable outcome of the disease",
      "The structural changes visible on a histological section",
    ],
    correctIndex: 2,
    explanation: "Prognosis is the prediction of the probable outcome of a disease. It is distinct from pathogenesis (mechanism) and aetiology (cause).",
  },
  // ── Lecture 5: Reversible & Irreversible Injury ────────────────────────────
  {
    id: "rii-1",
    topic: "reversible-irreversible-injury",
    difficulty: "easy",
    question: "Which of the following is a feature of REVERSIBLE cell injury?",
    options: [
      "Lysosomal rupture",
      "Phospholipid membrane damage",
      "Cellular swelling and mitochondrial swelling",
      "Nuclear pyknosis leading to complete karyolysis",
    ],
    correctIndex: 2,
    explanation: "Reversible injury features include cellular swelling, mitochondrial swelling, ribosomal detachment, and nuclear chromatin clumping — all of which can recover if the injurious stimulus is removed.",
  },
  {
    id: "rii-2",
    topic: "reversible-irreversible-injury",
    difficulty: "easy",
    question: "Pyknosis refers to:",
    options: [
      "Fragmentation of the cell nucleus",
      "Complete dissolution and pallor of the nucleus",
      "Condensation (shrinkage) of the nucleus",
      "Rupture of lysosomes releasing enzymes",
    ],
    correctIndex: 2,
    explanation: "Pyknosis is nuclear condensation (shrinkage) — the nucleus becomes darker and smaller. It is an early sign of irreversible cell injury and is followed by karyorrhexis then karyolysis.",
  },
  {
    id: "rii-3",
    topic: "reversible-irreversible-injury",
    difficulty: "medium",
    question: "The correct sequence of nuclear changes in irreversible injury is:",
    options: [
      "Karyolysis → Pyknosis → Karyorrhexis",
      "Karyorrhexis → Karyolysis → Pyknosis",
      "Pyknosis → Karyorrhexis → Karyolysis",
      "Pyknosis → Karyolysis → Karyorrhexis",
    ],
    correctIndex: 2,
    explanation: "Nuclear changes in irreversible injury follow this sequence: Pyknosis (condensation) → Karyorrhexis (fragmentation) → Karyolysis (nuclear pallor/dissolution).",
  },
  {
    id: "rii-4",
    topic: "reversible-irreversible-injury",
    difficulty: "medium",
    question: "Irreversible cell injury leads to which two outcomes?",
    options: [
      "Hypertrophy and hyperplasia",
      "Atrophy and metaplasia",
      "Necrosis and apoptosis",
      "Inflammation and fibrosis",
    ],
    correctIndex: 2,
    explanation: "Irreversible cell injury results in either necrosis (uncontrolled pathological death) or apoptosis (programmed cell death). Reversible injury can lead to recovery or adaptation (hypertrophy, hyperplasia, atrophy, metaplasia).",
  },
  {
    id: "rii-5",
    topic: "reversible-irreversible-injury",
    difficulty: "hard",
    question: "Which of the following is a feature of IRREVERSIBLE (not reversible) cell injury?",
    options: [
      "Cellular swelling",
      "Mitochondrial swelling",
      "Ribosomal detachment",
      "Lysosomal rupture and phospholipid membrane damage",
    ],
    correctIndex: 3,
    explanation: "Lysosomal rupture and phospholipid membrane damage are features of irreversible injury — once these occur, cell death is inevitable. The earlier changes (cellular swelling, mitochondrial swelling, ribosomal detachment) can still be reversible.",
  },
  // ── Lecture 5: Cellular Adaptations ───────────────────────────────────────
  {
    id: "ca-1",
    topic: "cellular-adaptations",
    difficulty: "easy",
    question: "What is hypertrophy?",
    options: [
      "An increase in the NUMBER of cells in a tissue",
      "A decrease in cell size and tissue mass",
      "An increase in CELL SIZE without an increase in cell number",
      "A change in cell type from one to another",
    ],
    correctIndex: 2,
    explanation: "Hypertrophy is an increase in cell size (not number), leading to an increase in the size of the organ. Example: cardiac muscle hypertrophy in response to increased workload.",
  },
  {
    id: "ca-2",
    topic: "cellular-adaptations",
    difficulty: "easy",
    question: "Hyperplasia is defined as:",
    options: [
      "Increase in cell size",
      "Decrease in cell size and number",
      "Increase in the NUMBER of cells in a tissue",
      "Replacement of one cell type by another",
    ],
    correctIndex: 2,
    explanation: "Hyperplasia is an increase in the number of cells. It occurs in tissues capable of cell division and is a response to increased demand (e.g., endometrial hyperplasia).",
  },
  {
    id: "ca-3",
    topic: "cellular-adaptations",
    difficulty: "medium",
    question: "Atrophy refers to:",
    options: [
      "An increase in cell number",
      "A wasting away or reduction in cell size and number",
      "A change from one cell type to another",
      "An increase in the size of an organ without cell division",
    ],
    correctIndex: 1,
    explanation: "Atrophy is the wasting away of tissue due to a reduction in cell size and/or number. It can be physiological (e.g., thymus in adults) or pathological (e.g., disuse atrophy of muscle).",
  },
  {
    id: "ca-4",
    topic: "cellular-adaptations",
    difficulty: "medium",
    question: "Metaplasia is best described as:",
    options: [
      "Increase in cell size in response to increased workload",
      "Programmed cell death in response to DNA damage",
      "Replacement of one differentiated cell type by another differentiated cell type",
      "Loss of cellular differentiation (becoming more primitive)",
    ],
    correctIndex: 2,
    explanation: "Metaplasia is the reversible replacement of one differentiated cell type by another. Example: squamous metaplasia in the bronchial epithelium of smokers (columnar → squamous). Distinct from dysplasia (loss of differentiation).",
  },
  {
    id: "ca-5",
    topic: "cellular-adaptations",
    difficulty: "hard",
    question: "A patient with hypertension develops an enlarged heart with thicker walls but normal number of cardiomyocytes. This is an example of:",
    options: [
      "Hyperplasia — increased cardiac cell number",
      "Hypertrophy — increased cardiac cell size in response to increased workload",
      "Atrophy — reduced cell size from disuse",
      "Metaplasia — change in cardiac cell type",
    ],
    correctIndex: 1,
    explanation: "Cardiac muscle cannot divide (post-mitotic cells), so it adapts to increased workload through hypertrophy — each cell grows larger. This is a classic example of pathological hypertrophy.",
  },
  // ── Lecture 5: Inflammation ────────────────────────────────────────────────
  {
    id: "inf-1",
    topic: "inflammation",
    difficulty: "easy",
    question: "The cardinal signs of acute inflammation are:",
    options: [
      "Atrophy, metaplasia, necrosis, apoptosis",
      "Redness, heat, swelling, pain (and loss of function)",
      "Pyknosis, karyorrhexis, karyolysis, membrane rupture",
      "Hypertrophy, hyperplasia, fibrosis, necrosis",
    ],
    correctIndex: 1,
    explanation: "The five cardinal signs of acute inflammation are: Redness (rubor), Heat (calor), Swelling (tumor), Pain (dolor), and Loss of function (functio laesa). These result from vasodilation and increased vascular permeability.",
  },
  {
    id: "inf-2",
    topic: "inflammation",
    difficulty: "easy",
    question: "Acute inflammation is primarily characterised by which cell type?",
    options: [
      "Lymphocytes and plasma cells",
      "Macrophages and giant cells",
      "Neutrophils (polymorphonuclear leucocytes)",
      "Eosinophils and basophils",
    ],
    correctIndex: 2,
    explanation: "Acute inflammation is dominated by neutrophils (PMNs), which are the first responders. Chronic inflammation involves macrophages, lymphocytes, and plasma cells.",
  },
  {
    id: "inf-3",
    topic: "inflammation",
    difficulty: "medium",
    question: "What is the difference between acute and chronic inflammation histologically?",
    options: [
      "Acute has lymphocytes; chronic has neutrophils",
      "Acute has neutrophils and oedema; chronic has macrophages, lymphocytes, and fibrosis",
      "Both are characterised by the same cellular infiltrate",
      "Chronic inflammation always resolves completely; acute does not",
    ],
    correctIndex: 1,
    explanation: "Acute inflammation: neutrophils + oedema + vascular changes. Chronic inflammation: macrophages, lymphocytes, plasma cells + fibrosis/scarring. Chronic may arise from persistent acute inflammation or de novo.",
  },
  {
    id: "inf-4",
    topic: "inflammation",
    difficulty: "medium",
    question: "Which outcome of acute inflammation involves replacement of damaged tissue with fibrous scar tissue?",
    options: [
      "Resolution (complete repair)",
      "Abscess formation",
      "Fibrosis (organisation)",
      "Chronic inflammation",
    ],
    correctIndex: 2,
    explanation: "Fibrosis (organisation) is the replacement of damaged or dead tissue with fibrous connective tissue (scar). Resolution occurs when tissue is fully restored; abscess is localised pus; chronic inflammation is persistent.",
  },
  {
    id: "inf-5",
    topic: "inflammation",
    difficulty: "hard",
    question: "In histological sections, an abscess is identified by the presence of:",
    options: [
      "Lymphocytes surrounding a germinal centre",
      "Giant cells and granuloma formation",
      "A collection of necrotic tissue with neutrophils (pus)",
      "Extensive fibrosis with scattered plasma cells",
    ],
    correctIndex: 2,
    explanation: "An abscess is a localised collection of pus (liquefied necrotic tissue + dead neutrophils + bacteria). Histologically it appears as a central zone of necrosis surrounded by a wall of inflammatory tissue and neutrophils.",
  },
  {
    id: "ca-6",
    topic: "cellular-adaptations",
    difficulty: "medium",
    question: "Dysplasia is best described as:",
    options: [
      "Reversible replacement of one cell type by another differentiated type",
      "An increase in cell number in a normal, well-differentiated pattern",
      "Increased cell number with changed morphology and differentiation — pre-neoplastic",
      "A reduction in cell size and function due to disuse",
    ],
    correctIndex: 2,
    explanation: "Dysplasia is an increase in cell number with changed morphology (shape and appearance), function, and differentiation. It is considered pre-neoplastic — it can progress to cancer. It differs from metaplasia (which replaces cell type without loss of differentiation) and hyperplasia (which increases cell number with normal differentiation).",
  },
  {
    id: "ca-7",
    topic: "cellular-adaptations",
    difficulty: "hard",
    question: "Which statement CORRECTLY distinguishes metaplasia from dysplasia?",
    options: [
      "Metaplasia is pre-neoplastic; dysplasia is benign and reversible",
      "Metaplasia involves change in cell type (still differentiated); dysplasia involves abnormal morphology and differentiation (pre-cancerous)",
      "Metaplasia always progresses to cancer; dysplasia does not",
      "Both metaplasia and dysplasia are irreversible changes",
    ],
    correctIndex: 1,
    explanation: "Metaplasia = change in cell type while maintaining differentiation (reversible, not pre-cancerous). Dysplasia = increased cell number + abnormal morphology + altered differentiation = pre-neoplastic (may progress to cancer). Dysplasia is more serious than metaplasia.",
  },
  {
    id: "inf-6",
    topic: "inflammation",
    difficulty: "medium",
    question: "The THREE temporal categories of inflammation are:",
    options: [
      "Acute (hours/days), Sub-acute (10-14 days), Chronic (long term)",
      "Mild, Moderate, Severe",
      "Localised, Regional, Systemic",
      "Serous, Fibrinous, Suppurative",
    ],
    correctIndex: 0,
    explanation: "Inflammation is classified by duration: Acute (immediate and early — hours/days), Sub-acute (10-14 days), and Chronic (long term). Sub-acute is a transition phase between acute and chronic inflammation.",
  },
  {
    id: "inf-7",
    topic: "inflammation",
    difficulty: "hard",
    question: "In inflammation, EXUDATE differs from TRANSUDATE because exudate:",
    options: [
      "Has low protein content and few cells — caused by increased hydrostatic pressure",
      "Is caused by decreased colloid osmotic pressure without inflammation",
      "Has high protein content and may contain white and red cells — caused by vasodilation and increased vascular permeability",
      "Is always clear and straw-coloured regardless of the cause",
    ],
    correctIndex: 2,
    explanation: "Exudate (in inflammation): high protein, may contain WBCs and RBCs — caused by increased vascular permeability (vasodilation, interendothelial gaps). Transudate: low protein, few cells — caused by increased hydrostatic pressure (e.g. heart failure) or decreased colloid osmotic pressure (e.g. liver/kidney disease). Classifying fluid as exudate or transudate is a valuable initial diagnostic step.",
  },
  {
    id: "inf-8",
    topic: "inflammation",
    difficulty: "medium",
    question: "During inflammation, vasodilation results in which vascular changes?",
    options: [
      "Vasoconstriction of all vessels; decreased blood flow to the area",
      "Endothelial cells becoming adhesive to WBCs, vascular stasis, gaps forming between endothelial cells allowing WBC migration",
      "Closure of interendothelial junctions preventing fluid leakage",
      "Decreased calibre of arterioles reducing redness and heat",
    ],
    correctIndex: 1,
    explanation: "Vasodilation causes: (1) endothelial cells become adhesive to WBCs → vascular permeability, (2) slowing of blood → vascular stasis, (3) gaps between endothelial cells → WBCs and fluid escape (exudate/transudate). This produces the cardinal signs: redness and heat (vasodilation), swelling (fluid leakage), pain (chemical mediators).",
  },
  // ── Lecture 6: Atherosclerosis ─────────────────────────────────────────────
  {
    id: "ath-1",
    topic: "atherosclerosis",
    difficulty: "easy",
    question: "Atherosclerosis primarily affects which layer of a blood vessel?",
    options: [
      "Tunica adventitia (outer connective tissue layer)",
      "Tunica media (smooth muscle layer)",
      "Tunica intima (innermost endothelial layer)",
      "All three layers equally",
    ],
    correctIndex: 2,
    explanation: "Atherosclerosis primarily affects the tunica intima — the innermost layer of the artery. Atherosclerotic plaques (atheromas) form in the subendothelial space of the intima due to lipid deposition and inflammation.",
  },
  {
    id: "ath-2",
    topic: "atherosclerosis",
    difficulty: "easy",
    question: "An atherosclerotic plaque (atheroma) is characterised by:",
    options: [
      "Excessive smooth muscle proliferation in the tunica media",
      "Lipid accumulation, inflammatory cells, and a fibrous cap in the intima",
      "Collagen deposition in the tunica adventitia",
      "Loss of endothelial cells with replacement by squamous epithelium",
    ],
    correctIndex: 1,
    explanation: "An atherosclerotic plaque consists of: lipid accumulation (especially LDL/foam cells), inflammatory infiltrate (macrophages, T-lymphocytes), smooth muscle cell migration, and a fibrous cap — all within the tunica intima.",
  },
  {
    id: "ath-3",
    topic: "atherosclerosis",
    difficulty: "medium",
    question: "Which of the following is a major RISK FACTOR for atherosclerosis?",
    options: [
      "High HDL cholesterol",
      "Regular aerobic exercise",
      "Hypertension, smoking, hyperlipidaemia, and diabetes",
      "Low body mass index",
    ],
    correctIndex: 2,
    explanation: "Major risk factors for atherosclerosis include: hypertension, smoking, hyperlipidaemia (high LDL), diabetes mellitus, obesity, sedentary lifestyle, age, male sex, and family history.",
  },
  {
    id: "ath-4",
    topic: "atherosclerosis",
    difficulty: "medium",
    question: "The three layers of a blood vessel wall from innermost to outermost are:",
    options: [
      "Adventitia → Media → Intima",
      "Intima → Media → Adventitia",
      "Media → Intima → Adventitia",
      "Intima → Adventitia → Media",
    ],
    correctIndex: 1,
    explanation: "Blood vessel wall layers (inside to outside): Tunica Intima (endothelium + connective tissue + internal elastic lamina) → Tunica Media (smooth muscle + external elastic lamina) → Tunica Adventitia (collagen + connective tissue).",
  },
  {
    id: "ath-5",
    topic: "atherosclerosis",
    difficulty: "hard",
    question: "Complications of atherosclerosis include all of the following EXCEPT:",
    options: [
      "Myocardial infarction (heart attack)",
      "Stroke (cerebral infarction)",
      "Peripheral vascular disease",
      "Pulmonary oedema from increased capillary permeability",
    ],
    correctIndex: 3,
    explanation: "Complications of atherosclerosis include: MI (coronary artery disease), stroke (carotid/cerebral atherosclerosis), peripheral vascular disease, renal artery stenosis, and aortic aneurysm. Pulmonary oedema from capillary permeability is a feature of inflammation, not atherosclerosis directly.",
  },
  {
    id: "ath-6",
    topic: "atherosclerosis",
    difficulty: "hard",
    question: "The role of inflammation in atherosclerosis pathogenesis involves:",
    options: [
      "Neutrophils destroying smooth muscle cells in the media",
      "Lymphocytes producing antibodies against endothelial cells",
      "Macrophages engulfing oxidised LDL to become foam cells, initiating the fatty streak",
      "Mast cells releasing histamine to cause vasoconstriction",
    ],
    correctIndex: 2,
    explanation: "Inflammation is central to atherosclerosis: oxidised LDL enters the intima → macrophages engulf it → become foam cells → form a 'fatty streak' → plaque develops with smooth muscle migration and fibrous cap formation. This is an inflammatory process from start to finish.",
  },
  // ── Lecture 2: Skin Biopsy Types & Gross Examination ──────────────────────
  {
    id: "sbx-1",
    topic: "skin-biopsy-types",
    difficulty: "easy",
    question: "What is gross examination in the context of histopathology?",
    options: [
      "Microscopic evaluation of stained tissue sections",
      "Using the naked eye to obtain diagnostic information from a specimen before processing",
      "Immunohistochemical analysis of tissue antigens",
      "The step of embedding tissue in paraffin wax",
    ],
    correctIndex: 1,
    explanation: "Gross examination (= dissection) is using the naked eye to obtain diagnostic information from a specimen. The pathologist or medical scientist measures, describes colour/texture, identifies structures, and samples representative sections.",
  },
  {
    id: "sbx-2",
    topic: "skin-biopsy-types",
    difficulty: "easy",
    question: "A punch biopsy is most commonly used for:",
    options: [
      "Excision of deep malignant tumours with wide safety margins",
      "Sampling skin rashes, blisters, partial biopsy of lesions, and nail/alopecia biopsies",
      "Complete excision of melanoma with sentinel node mapping",
      "Obtaining large blocks of tissue for frozen section diagnosis",
    ],
    correctIndex: 1,
    explanation: "Punch biopsies are common and are used for: sampling skin rashes or blisters, partial biopsy of lesions, excisional removal of small lesions, and alopecia or nail biopsies.",
  },
  {
    id: "sbx-3",
    topic: "skin-biopsy-types",
    difficulty: "medium",
    question: "For a punch biopsy < 3 mm, the correct embedding orientation is:",
    options: [
      "Cut surface face up, transversely sectioned",
      "Embedded intact, placed on edge (upright)",
      "Bisected, both pieces face down",
      "Flattened horizontally on the cassette base",
    ],
    correctIndex: 1,
    explanation: "Punch biopsies < 3 mm are embedded intact on edge. If 4 mm or greater, bisect and embed both pieces cut surface down. This orientation ensures full-thickness histological sections through the skin.",
  },
  {
    id: "sbx-4",
    topic: "skin-biopsy-types",
    difficulty: "medium",
    question: "Orientation markers used during excisional skin biopsy include all of the following EXCEPT:",
    options: [
      "Suture, nick from scalpel, or notch",
      "Staple, dye, or nail polish",
      "PAS staining to identify fungal organisms",
      "Ink applied to surgical margins",
    ],
    correctIndex: 2,
    explanation: "Orientation markers on excisional biopsies include: suture, nick, notch, staple, dye, and nail polish. PAS (Periodic acid-Schiff) staining is used to detect fungi in histological sections — it is a laboratory stain, not an orientation marker.",
  },
  {
    id: "sbx-5",
    topic: "skin-biopsy-types",
    difficulty: "medium",
    question: "Excisional biopsies are typically sectioned using which pattern?",
    options: [
      "Random sampling of 1–2 sections only",
      "Transversely in a 'sliced bread' pattern every 2–3 mm, starting from the centre of the lesion",
      "Longitudinally from top to bottom of the specimen",
      "Cross-sectioned only at the lesion margins",
    ],
    correctIndex: 1,
    explanation: "Excisional biopsies are sectioned transversely in a 'sliced bread' pattern. The first section is taken from the centre of the lesion, then the whole specimen is sectioned every 2–3 mm. Maximum 4 representative sections per cassette.",
  },
  {
    id: "sbx-6",
    topic: "skin-biopsy-types",
    difficulty: "hard",
    question: "The Breslow thickness measurement in melanoma refers to:",
    options: [
      "The horizontal diameter of the melanoma at the skin surface",
      "The vertical depth of the melanoma from the granular layer to the deepest point",
      "The distance from the melanoma edge to the surgical excision margin",
      "The Clark level of invasion into the dermis",
    ],
    correctIndex: 1,
    explanation: "Breslow thickness is the vertical depth of a melanoma measured from the granular cell layer of the epidermis (or base of an ulcer) to the deepest melanoma cell. It is the most important prognostic factor for melanoma, distinct from Clark levels (anatomical layers).",
  },
  // ── Lecture 1: History of Histology ────────────────────────────────────────
  {
    id: "hist-1",
    topic: "history-of-histology",
    difficulty: "easy",
    question: "Who is credited with the advent of microscopy around 1665?",
    options: ["Antonie van Leeuwenhoek", "Robert Hooke", "Camillo Golgi", "Carl Weigert"],
    correctIndex: 1,
    explanation: "Robert Hooke (~1665) introduced microscopy, allowing scientists to observe cells for the first time. Van Leeuwenhoek followed in 1673 with staining techniques using plant-based dyes.",
  },
  {
    id: "hist-2",
    topic: "history-of-histology",
    difficulty: "easy",
    question: "Formaldehyde was first introduced for tissue preservation (embalming) in which year?",
    options: ["1820", "1867", "1900", "1922"],
    correctIndex: 1,
    explanation: "In 1867, formaldehyde was introduced for embalming, marking a key milestone in fixation. This chemical principle underpins modern histopathology fixation practices.",
  },
  {
    id: "hist-3",
    topic: "history-of-histology",
    difficulty: "medium",
    question: "The Biological Stains Commission (BSC) was established in 1922–1924 to:",
    options: [
      "Develop the first synthetic dye",
      "Standardise dye nomenclature and ensure consistency in histological staining methods",
      "Replace formaldehyde with safer fixatives",
      "Regulate the use of mercury in staining",
    ],
    correctIndex: 1,
    explanation: "The BSC was established to standardise dye nomenclature and ensure consistency in histological staining methods across laboratories worldwide.",
  },
  {
    id: "hist-4",
    topic: "history-of-histology",
    difficulty: "medium",
    question: "Which stain is named after Golgi and is used specifically for staining nervous tissue?",
    options: ["Masson's trichrome", "Weigert stain", "Golgi silver stain", "Grocott Methenamine Silver"],
    correctIndex: 2,
    explanation: "Camillo Golgi developed the silver stain for nervous tissue (neurons). In the early 1900s, several histological stains were named after their pioneering researchers.",
  },
  {
    id: "hist-5",
    topic: "history-of-histology",
    difficulty: "medium",
    question: "Grocott Methenamine Silver (GMS) stain is primarily used for:",
    options: ["Staining elastic fibres", "Staining connective tissue collagen", "Detecting fungal organisms", "Staining neurons and axons"],
    correctIndex: 2,
    explanation: "GMS (Grocott) stains a variety of fungal organisms black against a teal/green background, making it invaluable for identifying fungal infections in tissue.",
  },
  {
    id: "hist-6",
    topic: "history-of-histology",
    difficulty: "hard",
    question: "Toluidine Blue was significant because it was one of the first:",
    options: [
      "Cross-linking fixatives used in histology",
      "Synthetic dyes used for histological staining, developed in the mid-1800s",
      "Antibody-based stains for immunohistochemistry",
      "Physical fixation methods using microwave technology",
    ],
    correctIndex: 1,
    explanation: "Developed in the mid-1800s, Toluidine Blue was one of the first synthetic dyes used for histological staining, preceding the standardisation efforts of the BSC.",
  },
  // ── Lecture 1: Specimen Collection ─────────────────────────────────────────
  {
    id: "spec-1",
    topic: "specimen-collection",
    difficulty: "easy",
    question: "Which THREE ways can tissue specimens be obtained for histopathological analysis?",
    options: [
      "Surgical removal, biopsies/excision, and autopsy investigation",
      "Blood draw, urine sample, and CSF tap",
      "Swabs, sputum, and stool samples",
      "Needle aspiration, bone marrow biopsy, and BAL",
    ],
    correctIndex: 0,
    explanation: "Specimens for histopathology are obtained via surgical removal (complete organ/tissue excision), biopsies/excision (small tissue samples), and autopsy investigation (post-mortem).",
  },
  {
    id: "spec-2",
    topic: "specimen-collection",
    difficulty: "easy",
    question: "What fixative solution is required for routine histopathology diagnosis specimens?",
    options: [
      "70% ethanol",
      "Glutaraldehyde 2.5%",
      "Tissue in 10% Neutral Buffered Formalin (NBF) at least 10× the volume of the specimen",
      "Fresh tissue delivered immediately with no fixative",
    ],
    correctIndex: 2,
    explanation: "Routine histopathology specimens require placement in 10% Neutral Buffered Formalin at a volume ratio of at least 10:1 (fixative to tissue) to ensure adequate fixation.",
  },
  {
    id: "spec-3",
    topic: "specimen-collection",
    difficulty: "medium",
    question: "Frozen section histopathology specimens require:",
    options: [
      "Tissue in 10% NBF, kept at room temperature",
      "Fresh tissue (no fixative), delivered immediately to the laboratory",
      "Tissue in glutaraldehyde for electron microscopy",
      "Pre-fixed tissue stored at −20°C",
    ],
    correctIndex: 1,
    explanation: "Frozen sections require fresh tissue (no fixative) delivered immediately to the lab. The tissue is snap-frozen for rapid intraoperative diagnosis.",
  },
  {
    id: "spec-4",
    topic: "specimen-collection",
    difficulty: "medium",
    question: "Specimens should be transferred to a fixative within how long of surgical excision?",
    options: ["30 minutes", "1 hour", "3 hours", "6 hours"],
    correctIndex: 1,
    explanation: "Specimens should be transferred to fixative within 1 hour of surgical excision. If this cannot be achieved, keep the specimen at 4°C to slow autolysis until fixation.",
  },
  {
    id: "spec-5",
    topic: "specimen-collection",
    difficulty: "hard",
    question: "Which of the following actions is MOST important during specimen collection from surgery/clinics?",
    options: [
      "Photograph the specimen before placing it in any container",
      "Ensure proper handling, documentation, and minimise transport time to prevent degradation",
      "Store the specimen on ice for at least 2 hours before fixation",
      "Wash the specimen in saline before placing it in formalin",
    ],
    correctIndex: 1,
    explanation: "Proper handling (labelled container), documentation (patient information, clinical history, anatomical site), and rapid transport to minimise the time between collection and fixation are the critical steps in specimen collection.",
  },
  // ── Lecture 1: Fixation Objectives ─────────────────────────────────────────
  {
    id: "fixobj-1",
    topic: "fixation-preservation-objectives",
    difficulty: "easy",
    question: "What is the primary goal of tissue fixation in histopathology?",
    options: [
      "To dehydrate tissue before paraffin embedding",
      "To preserve tissue as close to its living state as possible for microscopic examination",
      "To stain tissue with haematoxylin and eosin",
      "To decalcify bone tissue before sectioning",
    ],
    correctIndex: 1,
    explanation: "Fixation preserves tissue morphology as close to its living state as possible, preventing autolysis, microbial invasion, and structural degradation for accurate microscopic diagnosis.",
  },
  {
    id: "fixobj-2",
    topic: "fixation-preservation-objectives",
    difficulty: "easy",
    question: "Fixation prevents which TWO damaging processes in tissue?",
    options: [
      "Calcification and ossification",
      "Autolysis (enzymatic self-digestion) and microbial invasion",
      "Haemorrhage and necrosis",
      "Keratinisation and cornification",
    ],
    correctIndex: 1,
    explanation: "Fixation prevents autolysis (enzymatic destruction of cellular and extracellular molecules) and protects tissue from micro-organism invasion, both of which degrade tissue structure.",
  },
  {
    id: "fixobj-3",
    topic: "fixation-preservation-objectives",
    difficulty: "medium",
    question: "Which of the following is NOT an objective of fixation?",
    options: [
      "Maintain clear and consistent morphological features",
      "Retain tissue and cellular integrity",
      "Stain the tissue with haematoxylin to visualise nuclei",
      "Reduce or prevent further breakdown of cellular and extracellular molecules",
    ],
    correctIndex: 2,
    explanation: "Staining with haematoxylin is a separate step (H&E staining), not an objective of fixation. Fixation objectives focus on preservation, not staining.",
  },
  {
    id: "fixobj-4",
    topic: "fixation-preservation-objectives",
    difficulty: "medium",
    question: "Fixation is described as the 'first and most critical step' in histopathology because:",
    options: [
      "It assigns a laboratory number to the specimen",
      "Poor fixation cannot be corrected later and compromises all subsequent steps and diagnosis",
      "It is the most time-consuming step in the workflow",
      "It determines the colour of the stained section",
    ],
    correctIndex: 1,
    explanation: "Fixation is the most critical step because errors or delays at this stage cannot be corrected later. Poor fixation compromises tissue morphology, special stains, immunohistochemistry, and ultimately the diagnostic reliability.",
  },
  {
    id: "fixobj-5",
    topic: "fixation-preservation-objectives",
    difficulty: "hard",
    question: "If a specimen cannot be transferred to fixative within 1 hour of excision, the recommended action is:",
    options: [
      "Place in 70% ethanol as an alternative fixative",
      "Keep the specimen at 4°C during transfer to slow autolysis",
      "Freeze the specimen immediately at −80°C",
      "Wrap in saline-soaked gauze and process within 24 hours",
    ],
    correctIndex: 1,
    explanation: "If fixation within 1 hour is not achievable, the specimen should be kept at 4°C (including during transfer) to slow enzymatic autolysis until it can be placed in proper fixative.",
  },
  // ── Lecture 1: Fixation Methods ─────────────────────────────────────────────
  {
    id: "fixmeth-1",
    topic: "fixation-methods",
    difficulty: "easy",
    question: "What is the most commonly used fixative in diagnostic histopathology?",
    options: [
      "Glutaraldehyde 2.5%",
      "10% Neutral Buffered Formalin (NBF)",
      "Acetone",
      "Bouin's fluid",
    ],
    correctIndex: 1,
    explanation: "10% Neutral Buffered Formalin (NBF) is the most common fixative in diagnostic histopathology. It penetrates rapidly, causes less shrinkage, and permits most special stains.",
  },
  {
    id: "fixmeth-2",
    topic: "fixation-methods",
    difficulty: "easy",
    question: "Which of the following is a PHYSICAL method of fixation?",
    options: [
      "Formaldehyde cross-linking",
      "Coagulant alcohol",
      "Freeze-drying",
      "Compound alcoholic formalin",
    ],
    correctIndex: 2,
    explanation: "Physical methods of fixation include heating, freeze-drying, and microwave technology. Chemical methods include coagulants (alcohols, acetone), cross-linking agents (formaldehyde, glutaraldehyde), and compound fixatives.",
  },
  {
    id: "fixmeth-3",
    topic: "fixation-methods",
    difficulty: "medium",
    question: "Formaldehyde acts as a fixative by which mechanism?",
    options: [
      "Coagulation of proteins by dehydration",
      "Cross-linking of proteins through methylene bridges",
      "Freeze-drying of cellular water",
      "Oxidising lipids in cell membranes",
    ],
    correctIndex: 1,
    explanation: "Formaldehyde is a cross-linking fixative. It forms methylene bridges between proteins, locking tissue in place. This cross-linking can mask antibody binding sites (relevant in IHC antigen retrieval).",
  },
  {
    id: "fixmeth-4",
    topic: "fixation-methods",
    difficulty: "medium",
    question: "Which statement about 10% NBF fixation time is CORRECT?",
    options: [
      "Fixation is complete in approximately 1 hour per mm of tissue",
      "All tissues fix completely within 30 minutes regardless of size",
      "Fixation time is independent of tissue thickness",
      "Larger tissues fix faster because they have more surface area",
    ],
    correctIndex: 0,
    explanation: "Fixation is generally complete in about 1 hour per mm of tissue. Small biopsies take 1–2 hours; larger specimens may require 5–10 hours or more.",
  },
  {
    id: "fixmeth-5",
    topic: "fixation-methods",
    difficulty: "hard",
    question: "Coagulant fixatives (e.g. alcohol, acetone) work by a different mechanism than cross-linking fixatives. Which statement correctly describes coagulant fixation?",
    options: [
      "They form covalent bonds between protein amino groups",
      "They denature and precipitate proteins by removing their hydration layer (coagulation)",
      "They cross-link DNA to histones to stabilise chromatin",
      "They oxidise lipids to harden cell membranes",
    ],
    correctIndex: 1,
    explanation: "Coagulant fixatives (alcohols, acetone) denature and precipitate proteins by dehydrating them, disrupting protein-water interactions. This is distinct from cross-linking fixatives like formaldehyde which form covalent methylene bridges.",
  },
  // ── Lecture 1: Fixation of Antigens ────────────────────────────────────────
  {
    id: "fixant-1",
    topic: "fixation-antigens",
    difficulty: "easy",
    question: "Why does formaldehyde fixation sometimes require antigen retrieval before immunohistochemistry (IHC)?",
    options: [
      "Because formalin degrades the tissue too rapidly",
      "Because cross-linking masks antibody binding sites on antigens",
      "Because formalin removes all proteins from the tissue",
      "Because it changes the DNA sequence of target antigens",
    ],
    correctIndex: 1,
    explanation: "Formaldehyde cross-links proteins, which can mask antibody binding sites. Antigen retrieval (heat or enzyme methods) is used to unmask these sites and restore antibody binding in IHC.",
  },
  {
    id: "fixant-2",
    topic: "fixation-antigens",
    difficulty: "medium",
    question: "Formaldehyde fixation affects which levels of protein structure?",
    options: [
      "Only the primary (amino acid sequence) structure",
      "The tertiary and quaternary structure (3D shape), while preserving primary and secondary structures",
      "Only secondary structures (helices and sheets)",
      "All four levels of protein structure equally",
    ],
    correctIndex: 1,
    explanation: "Formaldehyde changes the 3D shape of proteins (tertiary and quaternary structure) through cross-linking, but keeps the primary amino acid sequence and secondary structures (helices and sheets) intact.",
  },
  {
    id: "fixant-3",
    topic: "fixation-antigens",
    difficulty: "medium",
    question: "Which level of protein structure refers to the 'exact sequence of amino acids in a protein'?",
    options: ["Secondary structure", "Tertiary structure", "Primary structure", "Quaternary structure"],
    correctIndex: 2,
    explanation: "The primary structure is the exact sequence of amino acids. Secondary structure involves local folding into helices or sheets; tertiary is the overall 3D shape; quaternary involves multiple protein subunits.",
  },
  {
    id: "fixant-4",
    topic: "fixation-antigens",
    difficulty: "hard",
    question: "Some antigens require NO fixation to preserve their structure. What does this imply for tissue processing?",
    options: [
      "These antigens can only be detected on paraffin sections",
      "These tissues must be processed as frozen sections without fixation",
      "These antigens are always detected using DAB chromogen",
      "These tissues must be fixed with glutaraldehyde instead",
    ],
    correctIndex: 1,
    explanation: "Antigens that require no fixation must be detected on frozen sections, which allow IHC without the protein cross-linking that occurs with formalin. Formalin fixation would mask these antigens.",
  },
  {
    id: "fixant-5",
    topic: "fixation-antigens",
    difficulty: "hard",
    question: "Quaternary protein structure is defined as:",
    options: [
      "Local folding of the polypeptide into alpha-helices or beta-sheets",
      "The overall 3D shape of a single polypeptide chain",
      "Multiple protein subunits (dimers or larger complexes) coming together",
      "The exact linear sequence of amino acids",
    ],
    correctIndex: 2,
    explanation: "Quaternary structure refers to when multiple protein subunits come together to form dimers or larger complexes. This level of structure is particularly affected by fixation-induced cross-linking.",
  },
  // ── Lecture 1: Factors Affecting Fixation ──────────────────────────────────
  {
    id: "fixfac-1",
    topic: "fixation-factors",
    difficulty: "easy",
    question: "What is the correct fixative-to-tissue volume ratio to ensure adequate fixation?",
    options: ["1:1", "5:1", "10:1", "20:1"],
    correctIndex: 2,
    explanation: "A 10:1 ratio of fixative to tissue is required for adequate fixation. Insufficient fixative volume leads to exhaustion of the fixative before fixation is complete.",
  },
  {
    id: "fixfac-2",
    topic: "fixation-factors",
    difficulty: "easy",
    question: "Fixation should be carried out close to which pH range to be most effective?",
    options: ["2–4 (strongly acidic)", "6–8 (near neutral)", "9–11 (alkaline)", "Any pH is acceptable"],
    correctIndex: 1,
    explanation: "Buffering maintains the fixative near neutral pH (range 6–8). Common buffers include phosphate, bicarbonate, cacodylate, and veronal. Acidic or alkaline conditions cause artefacts.",
  },
  {
    id: "fixfac-3",
    topic: "fixation-factors",
    difficulty: "medium",
    question: "Which fixative has the WORST tissue penetration ability?",
    options: ["Formalin", "Alcohol", "Glutaraldehyde", "Bouin's fluid"],
    correctIndex: 2,
    explanation: "Formalin and alcohol penetrate the best. Glutaraldehyde has the worst penetration due to its large molecular size. Mercurial and other fixatives fall somewhere in between.",
  },
  {
    id: "fixfac-4",
    topic: "fixation-factors",
    difficulty: "medium",
    question: "Increasing the temperature of fixation will:",
    options: [
      "Slow down the rate of fixation to prevent tissue damage",
      "Increase the speed of fixation, as in all chemical reactions",
      "Have no effect on fixation speed",
      "Only improve fixation if used with physical (not chemical) fixatives",
    ],
    correctIndex: 1,
    explanation: "Increasing temperature speeds up fixation (as with all chemical reactions). Hot formalin fixes tissues faster and is often used as the first step on an automated tissue processor.",
  },
  {
    id: "fixfac-5",
    topic: "fixation-factors",
    difficulty: "medium",
    question: "What happens if the concentration of fixative (e.g. formalin) is TOO HIGH?",
    options: [
      "Fixation becomes more complete and superior",
      "The tissue may be adversely affected, producing artefacts similar to those from excessive heat",
      "No effect — higher concentration is always better",
      "Penetration increases proportionally with concentration",
    ],
    correctIndex: 1,
    explanation: "Too high a concentration adversely affects tissues and produces artefacts similar to excessive heat. Formalin is best used at 10%; concentration should be adjusted to the lowest effective level.",
  },
  {
    id: "fixfac-6",
    topic: "fixation-factors",
    difficulty: "hard",
    question: "Prolonged delay between tissue removal and fixation leads to:",
    options: [
      "Better fixation because the tissue softens",
      "Loss of cellular organelles, nuclear shrinkage, and drying artefacts",
      "Increased staining intensity with H&E",
      "Improved antigen preservation for IHC",
    ],
    correctIndex: 1,
    explanation: "The longer the delay before fixation, the more cellular organelles are lost and nuclear shrinkage occurs. Drying artefacts are introduced if the tissue is not kept moist (saline-moistened gauze can help). Fix as quickly as possible.",
  },
  // ── Lecture 1: Lab Safety Overview ─────────────────────────────────────────
  {
    id: "safety-1",
    topic: "lab-safety-overview",
    difficulty: "easy",
    question: "Working in a histology laboratory requires awareness of which THREE categories of hazards?",
    options: [
      "Radiation, electrical, and gravitational hazards",
      "Chemical, physical, and biological hazards",
      "Acoustic, thermal, and radiological hazards",
      "Mechanical, chemical, and nuclear hazards",
    ],
    correctIndex: 1,
    explanation: "Histology lab hazards fall into three categories: chemical hazards (formalin, xylene, solvents), physical hazards (sharp blades, hot wax, glass), and biological hazards (infectious patient samples).",
  },
  {
    id: "safety-2",
    topic: "lab-safety-overview",
    difficulty: "easy",
    question: "What does PPE stand for, and what items does it include in a histology lab?",
    options: [
      "Personal Protective Environment — hairnets, shoe covers, sterile gowns",
      "Personal Protective Equipment — gloves, goggles, and lab coats",
      "Pathology Processing Equipment — microtomes, embedding centres, processors",
      "Protocol and Procedure Equipment — SOPs, safety manuals, MSDS sheets",
    ],
    correctIndex: 1,
    explanation: "PPE (Personal Protective Equipment) includes gloves, goggles (eye protection), and lab coats. These are mandatory when handling fixatives, solvents, and patient tissue in the histology laboratory.",
  },
  {
    id: "safety-3",
    topic: "lab-safety-overview",
    difficulty: "medium",
    question: "Many fixatives including formalin and glutaraldehyde pose health risks. Which procedures MUST be considered for their use?",
    options: [
      "Appropriate handling, storage, and disposal procedures",
      "Using only in daylight hours",
      "Neutralising with sodium hydroxide before every use",
      "Limiting use to specimens under 5 cm only",
    ],
    correctIndex: 0,
    explanation: "Procedures for appropriate handling, storage, and disposal must be followed for fixatives. Proper ventilation and fume extraction are also essential to minimise exposure to hazardous vapours.",
  },
  {
    id: "safety-4",
    topic: "lab-safety-overview",
    difficulty: "medium",
    question: "Accidental release of formalin requires the CIRE response. What does CIRE stand for?",
    options: [
      "Clean, Identify, Report, Exit",
      "Contain, Inform, Remove, Evacuate (and call Emergency)",
      "Cover, Isolate, Rinse, Examine",
      "Check, Investigate, Record, Evaluate",
    ],
    correctIndex: 1,
    explanation: "The CIRE response for spills: Contain the spill, Inform relevant personnel, Remove anyone at risk, Evacuate if necessary, and call Emergency services if required. Spill kits should always be available.",
  },
  {
    id: "safety-5",
    topic: "lab-safety-overview",
    difficulty: "hard",
    question: "The future direction of histology laboratory safety focuses on which THREE priorities?",
    options: [
      "Faster processing, cheaper reagents, and smaller labs",
      "Finding alternatives to toxic chemicals, better safety education, and duty of care to others",
      "Automating all processes, eliminating PPE requirements, and increasing throughput",
      "Using higher concentrations of fixatives, better ventilation, and robotics",
    ],
    correctIndex: 1,
    explanation: "The future of histology safety focuses on: many manufacturers looking for alternatives to toxic chemicals, better safety education for staff, and a duty of care to colleagues and patients.",
  },
  // ── Lecture 1: Chemical Hazards ─────────────────────────────────────────────
  {
    id: "chem-1",
    topic: "chemical-hazards-histology",
    difficulty: "easy",
    question: "10% formalin used in histopathology is classified as:",
    options: [
      "A dangerous good under transport regulations",
      "Not a dangerous good, but considered a hazardous substance",
      "A Category 1 carcinogen requiring maximum containment",
      "A non-hazardous substance safe to use without PPE",
    ],
    correctIndex: 1,
    explanation: "10% formalin is NOT classed as a dangerous good but IS considered a hazardous substance. Concentrated formalin (37% formaldehyde) is a Category 2 carcinogen and must be avoided in the lab.",
  },
  {
    id: "chem-2",
    topic: "chemical-hazards-histology",
    difficulty: "easy",
    question: "What is MSDS, and why is it important in a histology lab?",
    options: [
      "Microtome Section Depth System — controls section thickness",
      "Material Safety Data Sheet — documents chemical hazards and safe handling procedures",
      "Microscopy Slide Display Software — manages digital slide archives",
      "Mandatory Safety Disposal Standard — for biohazard waste",
    ],
    correctIndex: 1,
    explanation: "Material Safety Data Sheets (MSDS) document chemical hazards, safe handling, storage, disposal, and first aid for each chemical used in the lab. All lab staff must be familiar with the MSDS for chemicals they work with.",
  },
  {
    id: "chem-3",
    topic: "chemical-hazards-histology",
    difficulty: "medium",
    question: "Which chemical used in histology is explosive when dry?",
    options: ["Formaldehyde", "Mercury", "Picric acid", "OsO4 (osmium tetroxide)"],
    correctIndex: 2,
    explanation: "Picric acid is explosive when dry and must always be kept moist. Mercury is a toxic heavy metal; OsO4 is highly toxic and corrosive. These all require special handling procedures.",
  },
  {
    id: "chem-4",
    topic: "chemical-hazards-histology",
    difficulty: "medium",
    question: "Chemical incompatibility in storage means chemicals must be:",
    options: [
      "Stored alphabetically for easy access",
      "Segregated appropriately — storing incompatible chemicals together is an accreditation failure",
      "Kept at temperatures below 10°C at all times",
      "Stored in plastic containers to prevent glass breakage",
    ],
    correctIndex: 1,
    explanation: "Chemical incompatibility means certain chemicals react dangerously if stored together. Chemicals must be segregated appropriately; storing in alphabetical order (which may place incompatible chemicals adjacent) is NOT acceptable and is an accreditation requirement.",
  },
  {
    id: "chem-5",
    topic: "chemical-hazards-histology",
    difficulty: "hard",
    question: "The GHS (Global Harmonisation System) skull-and-crossbones pictogram indicates:",
    options: [
      "Flammable materials that ignite easily",
      "Acute toxicity (severe) — substances that can cause death or serious injury in small amounts",
      "Corrosive materials that damage skin or metals",
      "Environmental hazards toxic to aquatic life",
    ],
    correctIndex: 1,
    explanation: "The skull and crossbones GHS pictogram indicates acute toxicity (severe) — substances causing death or serious harm at low doses. Other pictograms include flame (flammables), corrosion (corrosives), and exclamation mark (irritants).",
  },
  {
    id: "chem-6",
    topic: "chemical-hazards-histology",
    difficulty: "hard",
    question: "Safe handling of formalin includes all of the following EXCEPT:",
    options: [
      "Avoiding contact with skin and eyes",
      "Ensuring well-ventilated workspaces",
      "Storing in well-ventilated areas below 30°C out of direct sunlight",
      "Mixing with concentrated (37%) formaldehyde to increase effectiveness",
    ],
    correctIndex: 3,
    explanation: "Concentrated formalin (37% formaldehyde) is a Category 2 carcinogen and must be AVOIDED in the lab. Commercially prepared 10% formalin should be used instead. All other options are correct safe handling practices.",
  },
  // ── Lecture 1: Physical & Biological Hazards ────────────────────────────────
  {
    id: "physbio-1",
    topic: "physical-biological-hazards",
    difficulty: "easy",
    question: "What is the MAJOR physical hazard in a histology laboratory?",
    options: ["Loud noise from processors", "Sharp microtome blades", "UV light from microscopes", "Vibration from centrifuges"],
    correctIndex: 1,
    explanation: "Sharp microtome blades are the major physical hazard in histology labs. Other physical hazards include glass, electrical equipment, hot paraffin wax, falls, freezer burns, and latex sensitivity.",
  },
  {
    id: "physbio-2",
    topic: "physical-biological-hazards",
    difficulty: "easy",
    question: "Biological hazards in a histology lab primarily arise from:",
    options: [
      "Chemical reagents used in staining",
      "Patient samples that may be contaminated or infectious (e.g. HBV, HIV, Tuberculosis)",
      "Electrical equipment in the grossing room",
      "Hot paraffin wax used in embedding",
    ],
    correctIndex: 1,
    explanation: "Biological hazards arise from patient samples that may be infected with organisms such as Hepatitis B/C, HIV, and Mycobacterium tuberculosis. Fresh and frozen samples, cryostats, needle-stick injuries, and bodily fluids all pose biological risks.",
  },
  {
    id: "physbio-3",
    topic: "physical-biological-hazards",
    difficulty: "medium",
    question: "What is an ergonomic concern specific to histology technicians using microtomes?",
    options: [
      "Noise-induced hearing loss from microtome motors",
      "Carpal tunnel syndrome and wrist issues from repetitive microtome motion",
      "Eye strain from bright LED lighting",
      "Back injuries from lifting heavy reagent bottles",
    ],
    correctIndex: 1,
    explanation: "Repetitive microtome operation can cause carpal tunnel syndrome, wrist issues, and trigger finger. Ergonomic workplace design is essential to prevent these musculoskeletal injuries, along with back issues from sitting.",
  },
  {
    id: "physbio-4",
    topic: "physical-biological-hazards",
    difficulty: "medium",
    question: "Prion diseases (e.g. CJD, BSE) are particularly dangerous in histology because prions are:",
    options: [
      "Easily inactivated by standard 70% ethanol disinfection",
      "Resistant to standard disinfection; requiring 1–2N NaOH, strong hypochlorite, or autoclaving at 134°C",
      "Only transmitted through airborne droplets",
      "Inactivated by formaldehyde fixation",
    ],
    correctIndex: 1,
    explanation: "Prions are resistant to standard disinfection protocols. They require 1–2N NaOH, strong sodium hypochlorite (1M or 2% available chlorine), or autoclaving at 134°C for decontamination.",
  },
  {
    id: "physbio-5",
    topic: "physical-biological-hazards",
    difficulty: "hard",
    question: "Which precautions are used to decontaminate lab benches and instruments against most biological hazards?",
    options: [
      "10% formalin spray applied to all surfaces",
      "70% ethanol for bench/instruments; hypochlorite (5–15%) for highly infectious agents; steam autoclaving (121°C) for equipment",
      "UV light exposure for 30 minutes",
      "Glutaraldehyde 2.5% soaking for all surfaces",
    ],
    correctIndex: 1,
    explanation: "Universal precautions include: 70% ethanol for work benches and instruments, hypochlorite (5–15%) for highly infectious agents, steam autoclaving (121°C) for instruments/glassware, and formaldehyde fixation (2–8%) which acts as a bactericide, tuberculocide, fungicide, virucide, and sporicide.",
  },
  {
    id: "physbio-6",
    topic: "physical-biological-hazards",
    difficulty: "hard",
    question: "Prion disease is caused by misfolded protein molecules forming:",
    options: [
      "Alpha-helices in neuronal tissue",
      "Beta-pleated sheets that are resistant to degradation",
      "Collagen cross-links in connective tissue",
      "Amyloid plaques in the liver",
    ],
    correctIndex: 1,
    explanation: "Prion diseases are caused by misfolded prion proteins (PrPSc) forming beta-pleated sheets. These are resistant to standard disinfection. Examples include CJD, BSE (mad cow disease), Scrapie, Fatal Familial Insomnia, and Kuru.",
  },
  {
    id: "dist-4",
    topic: "slide-distribution",
    difficulty: "medium",
    question:
      "Slide distribution is the final step in the histological workflow. It represents:",
    options: [
      "The point where tissue is cut into sections",
      "The delivery of completed, stained slides to the appropriate pathologist or clinician for diagnosis",
      "The embedding of tissue into paraffin wax",
      "The labelling of specimen containers on arrival",
    ],
    correctIndex: 1,
    explanation:
      "Slide distribution is the final laboratory step, completing the journey from specimen receipt to delivering stained slides to the right pathologist for microscopic diagnosis and reporting.",
  },
];

export function getQuestionsByTopic(topic: Topic): Question[] {
  return ALL_QUESTIONS.filter((q) => q.topic === topic);
}

export function getRandomQuestions(count: number, topic?: Topic): Question[] {
  const pool = topic ? getQuestionsByTopic(topic) : ALL_QUESTIONS;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
