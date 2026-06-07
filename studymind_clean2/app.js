'use strict';
// ═══════════════════════════════════════════════════════════════
// StudyMind AI — single-file app.js
// Order: constants → state → helpers → features → boot
// ═══════════════════════════════════════════════════════════════

// ──────────────────────────────────────────────────────────────
// 1. PRE-LOADED DOCUMENT CONTENT
// ──────────────────────────────────────────────────────────────
const PABLO_TEXT = `PABLO – MECH 106 BASIC MECHANICS | UENR, Sunyani, Ghana | Mr. Prosper Owusu

UNIT 1: INTRODUCTION & FUNDAMENTAL CONCEPTS
Mechanics: branch of physical science describing/predicting conditions of rest or motion under forces.
Rigid Body Mechanics: Statics (equilibrium, balanced forces) | Dynamics (motion, unbalanced forces)
Dynamics: Kinematics (motion, no force reference) | Kinetics (motion related to forces)
Space: geometric region, 3 coordinates from origin. Time: interval between events. Mass: quantity of matter. Force: action of one body on another — has point of application, magnitude, direction (vector). Particle: mass at a point, negligible size. Rigid Body: particles in fixed relative positions.

NEWTON'S LAWS: 1st Law (Inertia): zero resultant force → particle stays at rest or uniform motion. 2nd Law: F = ma (rate of change of momentum proportional to applied force). 3rd Law: action and reaction equal, opposite, same line.
Newton's Gravitation: F = Gm₁m₂/r² (G = 6.674×10⁻¹¹). Weight W = mg, g = 9.81 m/s².
SI units: meter, kilogram, second, Newton (N = kg·m/s²). US: foot, pound, second.

UNIT 2: FORCES & MOMENTS
Parallelogram Law: R² = P² + Q² – 2PQ cosB; sinA/P = sinB/R.
Rectangular components: Fx = F cosθ, Fy = F sinθ; R = √(Rx²+Ry²), θ = tan⁻¹(Ry/Rx).
3D: F = Fxi + Fyj + Fzk; direction cosines: cos²θx + cos²θy + cos²θz = 1.
Moment of force: M = F·d (perpendicular distance) or M = r × F (cross product).
Varignon's Theorem: moment of a force = sum of moments of its components.
Couple: two equal, opposite, non-collinear forces; net force = 0, moment M = F·d (constant).

UNIT 3: EQUILIBRIUM
2D conditions: ΣFx = 0, ΣFy = 0, ΣM = 0.
3D conditions: ΣFx=0, ΣFy=0, ΣFz=0, ΣMx=0, ΣMy=0, ΣMz=0.
Free Body Diagram (FBD): body isolated from surroundings, all external forces and reactions labeled.
Support reactions: Pin → Rx, Ry. Roller → one perpendicular force. Fixed support → Rx, Ry, M.

UNIT 4: STRUCTURES
Truss: two-force members at joints. Method of Joints: ΣFx=0, ΣFy=0 at each pin. Method of Sections: cut through 3 members, apply equilibrium. Frames and Machines: multi-force members.

UNIT 5: FRICTION
Coulomb dry friction: F ≤ μsN (static, impending). F = μkN (kinetic, sliding). μs > μk. Angle of friction: tan φs = μs.

UNIT 6: DYNAMICS
Kinematics: v = dx/dt; a = dv/dt. Constant a: v = v₀+at; x = x₀+v₀t+½at²; v² = v₀²+2a·Δx.
Kinetics: ΣF = ma (Newton 2nd).
Work-Energy: U₁₋₂ = ½mv₂² − ½mv₁².
Impulse-Momentum: F·Δt = m·v₂ − m·v₁.
Projectile: horizontal x = v₀cosθ·t; vertical y = v₀sinθ·t − ½gt².`;

const ELECTRONICS_TEXT = `CENG 154/102: BASIC ELECTRONICS | UENR Ghana | Gidphil Mensah
Assessment: CA 40% (weekly quizzes/assignments 20%, mid-sem 20%), End of semester 60%.

INTRODUCTION TO ELECTRONICS
Electronics: science of controlling electron flow to process information, energy, signals. Merges physics, engineering, materials science.
History: Oersted electromagnetism 1820 → Edison Effect (thermionic emission) 1883 → Fleming vacuum diode 1904 → De Forest triode 1906 → Bell Labs transistor 1947 → Kilby IC 1958 → Moore's Law 1965 (transistors double every ~2 years) → Intel 4004 1971 → modern smartphones with billions of transistors, AI chips, quantum computing, graphene, neuromorphic chips.
Definition: extends beyond electricity to include semiconductor physics, digital logic, signal processing. Amplification, switching, computation.

THERMIONIC EMISSION
Definition: electrons emitted from metal surface when heat energy applied. "Thermionic" = Thermal + ions.
Three factors: (1) Work Function — minimum energy to emit an electron; lower work function = easier emission. (2) Surface Temperature — higher T releases more electrons (more kinetic energy). (3) Surface Area — larger area → higher emission rate.
Past applications: thermionic diodes, cathode ray tubes (TVs, oscilloscopes, radars).
Current applications: magnetron in microwave ovens, electron ionisation in mass spectrometry, specialised amplifiers.
Vacuum Tube: device controlling electron flow in vacuum. Contains vacuum + ≥2 electrodes. Getter = silver metallic coating inside to maintain vacuum by absorbing residual gases. Getter shiny → good vacuum. Getter white → air leaked in, tube dead.

ELECTRONIC COMPONENTS
Passive (cannot amplify): resistors, capacitors, inductors, diodes, relays.
Active (can amplify/switch/control with external power): transistors, integrated circuits.

Resistor: limits current flow. Unit = ohm (Ω).
Capacitor C: stores energy in electric field. Unit = Farad F. Uses: blocking DC/passing AC (coupling), bypassing signals to ground, phase shifting, time delays, tuning, filtering ripples from rectified DC, motor starting.
Inductor L: stores energy in magnetic field. Unit = henry H. Uses: buck/boost regulators, DC power supply filters, signal isolation, transformers (step up/down AC), oscillators, tuning circuits, fluorescent lamps.
Diode: two-terminal semiconductor, current one direction only. Anode (+) Cathode (−). Materials: silicon, germanium. Uses: rectification AC→DC, clamping, Zener voltage regulation, overvoltage protection, demodulation.
Relay: electromagnetic switch. Parts: armature, coil, spring, contacts. Coil generates magnetic field → attracts armature → changes open/closed state. Controls high-power with low-power signal. Uses: power circuit switching, circuit breakers, diac/triac driving.
Transistor: non-linear three-terminal semiconductor for amplifying and switching. Most important electronic component. Categories: BJT (Bipolar Junction — NPN, PNP) and FET (Field-Effect — JFET, P-MOSFET, N-MOSFET). Functions: amplify signals (active region), solid-state switch (saturation or cut-off). Uses: analogue amplification, switching, oscillators, voltage protection, modulation/demodulation, power inverters/chargers.
IC (Integrated Circuit): electronic circuit on semiconductor wafer (silicon). Contains millions of miniaturised transistors, resistors, capacitors connected by metal traces. Types: Analog IC, Digital IC, Mixed-Signal IC, Power IC, RF IC, System-on-Chip (SoC). Small size → low power → called microchip.

NATURE OF ATOMS
Atoms: basic building blocks of elements. Element = one kind of atom.
Subatomic particles: Protons (+1 charge, mass 1, in nucleus). Neutrons (neutral, mass 1, in nucleus). Electrons (−1 charge, tiny mass, orbit nucleus in shells).
Valence shell = outermost electron shell. Valence electrons determine bonding/conductivity.
Energy Bands: atoms packed together → outer energy levels overlap → form bands.
Valence Band: range occupied by valence electrons.
Forbidden Gap / Band Gap: energy range with no electron states. Size determines conductivity.
Conduction Band: above band gap; free electrons here conduct electricity.
Classification: Conductor — no band gap (valence and conduction overlap), many free electrons, e.g. Cu, Al, Au. Semiconductor — small band gap ~1eV, few free electrons at room temp, e.g. Si (1.1eV), Ge (0.67eV), GaAs (1.43eV). Insulator — large band gap ≥5eV, e.g. glass, wood.

SEMICONDUCTOR BASICS
Advantages: small size/weight, low power at low voltages, high efficiency and reliability, hazardous environment operation, instant on, economic mass production.
Disadvantages: temperature sensitive, extra stabilisation components, easily damaged by overvoltage, reverse polarity, excess heat during soldering.
Intrinsic semiconductors: pure form. Si and Ge both tetravalent (4 valence electrons), form covalent bonds in crystalline structure. Temperature increases → electrons gain kinetic energy → break covalent bonds → more free electrons → higher conductivity. Si has higher resistance than Ge at room temp → more stable, preferred for high-performance.
Extrinsic semiconductors: doped — small amount of impurity atoms added to improve conductivity. Process = doping.
N-type: doped with pentavalent (5 valence electrons) impurity — Phosphorus, Arsenic, Antimony, Bismuth. 4 of 5 electrons bond with surrounding Si/Ge; 5th is free (donated electron). Impurity atom becomes immobile positive ion. Electrons = majority carriers. Holes = minority carriers. Name from "Negative" charge carriers.
P-type: doped with trivalent (3 valence electrons) impurity — Boron, Aluminium, Indium, Gallium. All 3 electrons bond with 4 surrounding atoms → leaves a hole (electron absence). Impurity atom becomes immobile negative ion. Holes = majority carriers. Electrons = minority carriers. Name from "Positive" charge carriers.
Intrinsic vs Extrinsic: Pure vs Impure. Equal vs unequal carrier density. Low vs high conductivity. Thermal generation only vs doping + thermal. Temperature only vs temperature + impurity amount.

P-N JUNCTION & BIASING
P-N Junction: semiconductor with n-type one side, p-type other. Each side electrically neutral. At junction, mobile charges attracted to opposites → some electrons cross into p-type, fill holes → creates depletion region (no free carriers). Positive charge builds in N-type, negative in P-type. This creates barrier voltage: ~0.3V for Ge, ~0.7V for Si.
Zero Bias: no external voltage. Forward current If (majority carriers crossing) = reverse current Ir (minority carriers crossing). Net current = 0. State = dynamic equilibrium.
Forward Bias: negative to N-type, positive to P-type. Electrons pushed toward junction, holes pushed toward junction. Depletion layer narrows → low impedance path. Current flows when applied voltage > barrier voltage (0.3V Ge, 0.7V Si).
Reverse Bias: positive to N-type, negative to P-type. Electrons attracted away from junction; holes attracted away. Depletion layer widens → high impedance. High potential barrier → no current (except tiny leakage µA). Increasing reverse voltage → eventually breakdown.
Carrier Generation: electron-hole pairs created by exciting electrons from valence to conduction band.
Recombination: electrons and holes recombine, annihilate. At equilibrium: generation rate = recombination rate.

DIODES — TYPES & IV CHARACTERISTICS
Diode symbol: arrow (anode +) pointing to bar (cathode −). Arrow = direction of conventional current flow.
IV Characteristics: Knee voltage = threshold where diode starts conducting significantly (0.7V Si, 0.3V Ge). Leakage current in reverse bias = <20µA Si, <50µA Ge. Reverse breakdown voltage = voltage where reverse current spikes.
Avalanche Breakdown: lightly doped junctions. High reverse voltage → minority carriers accelerated → collide with lattice → break covalent bonds → chain reaction → rapid reverse current. Can be destructive.
Zener Breakdown: heavily doped junctions. Strong electric field across narrow depletion layer → directly breaks covalent bonds → sharp rise in reverse current at constant voltage.
Three Approximations: 1st (Ideal) — forward bias = closed switch (0V drop); reverse = open switch. 2nd — forward = ideal + battery VB (0.7V Si); diode off until VF = 0.7V. 3rd — includes bulk resistance rB; VF = VB + IF·rB; rB = ΔV/ΔI.
Types: Rectifier diode (general purpose), Schottky (fast switching, low Vf), Zener (voltage regulation), LED (emits light when forward biased), Photodiode (light → current), Varactor (variable capacitance), Tunnel (negative resistance, high frequency), Avalanche, PIN (high-frequency switching), Laser diode (coherent light), Gunn (microwave), IMPATT (high-power microwave).

RECTIFICATION
Need: most electronics require DC; mains supply is AC 240V. Rectifier diodes convert AC to DC.
Half-Wave Rectifier: single diode. Positive half-cycle → diode forward biased → current flows. Negative half-cycle → diode reverse biased → blocked. Output = positive pulses only. VDC = 0.318 × Vout(pk). fout = fin. PIV = Vs(pk).
Centre-Tapped Full-Wave Rectifier: two diodes + centre-tapped transformer. D1 conducts positive half-cycle, D2 conducts negative half-cycle. Both deliver current in same direction through RL. VDC = 0.636 × Vout(pk). V1(pk) = V2(pk) = (Vs/2)×√2. Idiode = IL/2. fout = 2×fin. PIV = 2×Vs(pk).
Bridge Rectifier: four diodes (D1–D4) in bridge. No centre tap needed. D2+D3 conduct positive half-cycle; D1+D4 conduct negative half-cycle. Vout(pk) = Vs(pk) − 1.4V (two diode drops). VDC = 0.636 × Vout(pk). IL = VDC/RL. Idiode = IL/2. fout = 2×fin.
Key formula: Vs(pk) = Vs(rms) × √2.

FILTERING
Problem: rectified output is pulsating DC — not smooth enough.
Capacitor filter (C-filter): capacitor in parallel with load. Charges to Vout(pk) during positive peak, then discharges through RL until next peak. Vripple = Vout(pk) × (1 − e^(−t/RC)) where t = discharge time. VDC ≈ Vout(pk) − Vripple/2. Half-wave: t = 20ms (50Hz); Full-wave: t = 10ms (doubled frequency). Larger C → smaller ripple → better DC.

ZENER DIODES & VOLTAGE REGULATION
Zener diode: designed for reverse breakdown operation. In breakdown, maintains constant voltage Vz despite large current variations. Used in reverse bias mode.
Voltage regulator circuit: Vin → Rs (series resistor) → node → Zener (reverse biased) in parallel with load RL. Vout = Vz (constant).
KCL: Is = Iz + IL. Iz = (Vin − Vz)/Rs − IL.
Power: Pz = Vz × Iz. Must be < rated PZM. Maximum Zener current: IZM = PZM/Vz.
Iz minimum: when Vin is minimum AND IL is maximum.
Iz maximum: when Vin is maximum AND IL is minimum.
Regulation fails when Iz falls below minimum reverse breakdown current.`;

const PABLO_DOC  = {id:'pablo',      name:'PABLO_01_Basic_Mechanics.pdf',         totalPages:183, date:'Pre-loaded', isPablo:true, text:PABLO_TEXT,      size:0};
const ELEC_DOC   = {id:'electronics',name:'CENG_154_102_Basic_Electronics.pdf',   totalPages:92,  date:'Pre-loaded', isPablo:true, text:ELECTRONICS_TEXT, size:0};

// ──────────────────────────────────────────────────────────────
// 2. DEFAULT QUIZ (25 Qs) & FLASHCARDS (20 cards)
// ──────────────────────────────────────────────────────────────
const DEFAULT_QS = [
  {question:"What is Mechanics?",options:["Study of chemical reactions","Branch of physical science describing conditions of rest or motion under forces","Study of electrical circuits","Analysis of fluids"],answer:1},
  {question:"Newton's First Law states that a particle remains at rest when:",options:["A net force acts on it","The resultant force on it is zero","Gravity is absent","It has no mass"],answer:1},
  {question:"The formula F = ma represents Newton's:",options:["First Law","Second Law","Third Law","Law of Gravitation"],answer:1},
  {question:"What does a Free Body Diagram (FBD) show?",options:["Molecular structure","Body isolated from surroundings with all external forces labeled","Circuit diagram","Star map"],answer:1},
  {question:"In the SI system, force is measured in:",options:["Pounds","Watts","Newtons","Joules"],answer:2},
  {question:"Kinetic friction force is given by:",options:["F ≤ μsN","F = μkN","F = μN²","F > μsN"],answer:1},
  {question:"Electronics is defined as the science of controlling:",options:["Proton flow","Neutron flow","Electron flow","Photon flow"],answer:2},
  {question:"Who invented the transistor in 1947?",options:["Thomas Edison","Jack Kilby","Bell Labs team","Guglielmo Marconi"],answer:2},
  {question:"Thermionic emission is the emission of electrons when:",options:["Light is applied to a metal","Heat energy is applied to a metal","Voltage is applied to a semiconductor","Pressure is applied to a crystal"],answer:1},
  {question:"What is the barrier voltage for a silicon P-N junction?",options:["0.1 V","0.3 V","0.7 V","1.1 V"],answer:2},
  {question:"N-type semiconductor is formed by doping with:",options:["Trivalent impurity","Pentavalent impurity","Tetravalent impurity","Monovalent impurity"],answer:1},
  {question:"In a half-wave rectifier, VDC equals:",options:["0.636 × Vout(pk)","Vout(pk)","0.318 × Vout(pk)","Vout(pk)/2"],answer:2},
  {question:"A Zener diode is operated in:",options:["Forward bias","Zero bias","Reverse breakdown region","Saturation"],answer:2},
  {question:"Which component stores energy in a magnetic field?",options:["Capacitor","Resistor","Inductor","Diode"],answer:2},
  {question:"The static equilibrium conditions in 2D are:",options:["ΣF = ma only","ΣFx=0, ΣFy=0, ΣM=0","ΣFx=0 only","ΣM=0 only"],answer:1},
  {question:"The knee voltage for a germanium diode is approximately:",options:["0.7 V","1.1 V","0.3 V","0.5 V"],answer:2},
  {question:"A bridge rectifier uses how many diodes?",options:["1","2","3","4"],answer:3},
  {question:"Output frequency of a full-wave rectifier with 50 Hz input is:",options:["25 Hz","50 Hz","100 Hz","200 Hz"],answer:2},
  {question:"Moore's Law states that transistors on a chip double approximately every:",options:["6 months","1 year","2 years","5 years"],answer:2},
  {question:"Varignon's Theorem states that the moment of a force equals:",options:["The sum of its components","The sum of moments of its components","The product of force and distance only","Zero for concurrent forces"],answer:1},
  {question:"Intrinsic semiconductors differ from extrinsic semiconductors because:",options:["They have no band gap","They are pure with equal electron and hole density","They conduct better","They are always N-type"],answer:1},
  {question:"Full-wave VDC formula is:",options:["VDC = 0.318 × Vout(pk)","VDC = 0.636 × Vout(pk)","VDC = Vout(pk)","VDC = Vout(pk)/2"],answer:1},
  {question:"In P-type semiconductor, majority carriers are:",options:["Electrons","Protons","Holes","Neutrons"],answer:2},
  {question:"Work Function in thermionic emission is:",options:["The heat applied to metal","Minimum energy required to emit an electron from metal","The surface area of the metal","The current produced"],answer:1},
  {question:"In a centre-tapped full-wave rectifier, current through each diode equals:",options:["IL","IL × 2","IL / 2","IL / 4"],answer:2}
];

const DEFAULT_FC = [
  {q:"What is Mechanics?",a:"A branch of physical science that describes and predicts the conditions of rest or motion of bodies under the action of forces. It divides into Statics (equilibrium) and Dynamics (motion)."},
  {q:"State Newton's Second Law of Motion.",a:"F = ma — the acceleration of a particle is proportional to the resultant force and in the same direction. Equivalently, the rate of change of momentum equals the applied external force."},
  {q:"What is thermionic emission?",a:"The phenomenon where electrons are emitted from the surface of a metal when heat energy is applied. Depends on: (1) Work Function of the metal, (2) Temperature, (3) Surface Area."},
  {q:"What is the P-N junction barrier voltage?",a:"A potential barrier created at the depletion region due to charge build-up. Approximately 0.3V for germanium and 0.7V for silicon. Must be overcome before current can flow."},
  {q:"What is the difference between N-type and P-type semiconductors?",a:"N-type: doped with pentavalent impurity (e.g. Phosphorus) — electrons are majority carriers, holes are minority carriers. P-type: doped with trivalent impurity (e.g. Boron) — holes are majority carriers, electrons are minority carriers."},
  {q:"What is a half-wave rectifier?",a:"A circuit using one diode that converts AC to DC by allowing only the positive half-cycle to pass and blocking the negative. VDC = 0.318 × Vout(pk). Output frequency equals input frequency."},
  {q:"What is a Zener diode used for?",a:"Voltage regulation. Operated in reverse breakdown, it maintains a constant Zener voltage Vz regardless of current variation, keeping output voltage stable. Vout = Vz. Iz = (Vin − Vz)/Rs − IL."},
  {q:"Conditions for static equilibrium of a rigid body (2D)?",a:"Three conditions must all be satisfied: ΣFx = 0 (horizontal force balance), ΣFy = 0 (vertical force balance), and ΣM = 0 (moment balance about any point)."},
  {q:"What is the difference between avalanche and Zener breakdown?",a:"Avalanche: lightly doped junctions; carriers are accelerated and collide with lattice in a chain reaction. Zener: heavily doped junctions; strong electric field directly breaks covalent bonds. Both occur at reverse breakdown voltage."},
  {q:"What is the difference between BJT and FET transistors?",a:"BJT (Bipolar Junction Transistor): has NPN and PNP types, current-controlled. FET (Field-Effect Transistor): includes JFET and MOSFET, voltage-controlled. Both amplify and switch signals."},
  {q:"What is the energy band gap?",a:"The Forbidden Gap — an energy range between the valence band and conduction band where no electron states exist. Conductors: no gap. Semiconductors: small gap (~1eV). Insulators: large gap (~5-7eV)."},
  {q:"What is a bridge rectifier?",a:"Full-wave rectifier using four diodes in a bridge. D2+D3 conduct on positive half-cycle; D1+D4 on negative. Both deliver current in same direction through load. Vout(pk) = Vs(pk) − 1.4V. VDC = 0.636 × Vout(pk)."},
  {q:"Define Moment of a Force and Varignon's Theorem.",a:"Moment M = F × d (force × perpendicular distance), or M = r × F (cross product). Varignon's Theorem: the moment of a force about a point equals the sum of the moments of its components about the same point."},
  {q:"What is ripple voltage in rectification?",a:"The residual AC variation in DC output after rectification. Vripple = Vout(pk) × (1 − e^(−t/RC)). Reduced by larger capacitors or using full-wave rectification (which halves the discharge time t)."},
  {q:"What are passive vs active electronic components?",a:"Passive: cannot amplify or control current — resistors, capacitors, inductors, diodes, relays. Only consume, store, or release energy. Active: can amplify, switch, or control using external power — transistors, ICs."},
  {q:"What is forward bias in a diode?",a:"Applying negative voltage to N-type and positive to P-type. Depletion layer narrows, creating low impedance. Current flows when applied voltage exceeds the barrier voltage (0.7V for Si, 0.3V for Ge)."},
  {q:"What is the Parallelogram Law of Forces?",a:"The resultant of two forces is the diagonal of the parallelogram formed with the two forces as adjacent sides. Formula: R² = P² + Q² − 2PQ·cosB, where B is the angle between them."},
  {q:"What is Coulomb dry friction?",a:"Static friction: F ≤ μsN (force needed to initiate sliding). Kinetic friction: F = μkN (force during sliding). μs > μk always. Angle of static friction: tan φs = μs."},
  {q:"What is kinematics vs kinetics?",a:"Kinematics: study of motion without reference to forces (position, velocity, acceleration). Kinetics: relates forces to motion using Newton's 2nd Law, work-energy theorem, and impulse-momentum principle."},
  {q:"What is a capacitor filter in rectification?",a:"A capacitor in parallel with the load that charges to Vout(pk) at each peak, then slowly discharges through RL between peaks. Smooths pulsating DC. VDC ≈ Vout(pk) − Vripple/2. Larger capacitance = smaller ripple."}
];

// ──────────────────────────────────────────────────────────────
// 3. APPLICATION STATE
// ──────────────────────────────────────────────────────────────
const S = {
  kb: [PABLO_DOC, ELEC_DOC],   // knowledge base docs
  userDocs: [],                  // user-uploaded docs
  apiKey: '',
  provider: '',                  // 'claude' | 'gemini' | 'openai'
  settings: { web: false, doc: true, allDocs: true },
  stats: { quiz: 0, correct: 0, chats: 0, cards: 0, scores: [], activity: [] },
  profile: { name: 'Student', email: '' },
  streak: 0,
  selectedSrc: 'all',            // doc id for generation
  fc: { cards: [], idx: 0, known: new Set(), flipped: false },
  quiz: { questions: [], idx: 0, answered: 0, correct: 0, results: [] }
};

// ──────────────────────────────────────────────────────────────
// 4. UTILITY HELPERS
// ──────────────────────────────────────────────────────────────
function $(id) { return document.getElementById(id); }

function toast(msg, type = 'info') {
  const wrap = $('notif-wrap');
  const el = document.createElement('div');
  el.className = `notif ${type}`;
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(() => { el.style.transition = 'opacity .4s'; el.style.opacity = '0'; setTimeout(() => el.remove(), 400); }, 3800);
}

function showOverlay(title, msg, pct = 0) {
  let ov = $('proc-overlay');
  if (!ov) {
    ov = document.createElement('div');
    ov.id = 'proc-overlay';
    ov.className = 'processing-overlay';
    ov.innerHTML = `<div class="spinner-lg"></div><h3 id="ov-title"></h3><p id="ov-msg"></p>
      <div class="processing-progress"><div class="processing-progress-fill" id="ov-bar" style="width:0%"></div></div>`;
    document.body.appendChild(ov);
  }
  $('ov-title').textContent = title;
  $('ov-msg').textContent = msg;
  $('ov-bar').style.width = pct + '%';
  ov.style.display = 'flex';
}

function updateOverlay(msg, pct) {
  const m = $('ov-msg'), b = $('ov-bar');
  if (m) m.textContent = msg;
  if (b) b.style.width = pct + '%';
}

function hideOverlay() {
  const ov = $('proc-overlay');
  if (ov) ov.style.display = 'none';
}

function setSyncState(state, label) {
  const dot = $('sync-dot'), lbl = $('sync-label');
  if (!dot || !lbl) return;
  dot.className = 'sync-dot' + (state === 'syncing' ? ' syncing' : '');
  lbl.textContent = label || '';
}

function getKBContext(srcId) {
  const docs = (!srcId || srcId === 'all')
    ? (S.settings.allDocs ? S.kb : S.kb.filter(d => d.isPablo))
    : S.kb.filter(d => d.id === srcId);
  return docs.map((d, i) => `=== DOCUMENT ${i + 1}: ${d.name} ===\n${(d.text || '').slice(0, 80000)}`).join('\n\n');
}

// ──────────────────────────────────────────────────────────────
// 5. NAVIGATION
// ──────────────────────────────────────────────────────────────
function nav(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  const page = $('page-' + id);
  if (!page) return;
  page.classList.add('active');
  const btn = document.querySelector(`[data-page="${id}"]`);
  if (btn) btn.classList.add('active');
  if (id === 'progress') renderProgress();
  if (id === 'ai-tutor') renderKBList();
}

// ──────────────────────────────────────────────────────────────
// 6. PERSISTENCE
// ──────────────────────────────────────────────────────────────
function saveState() {
  try {
    const payload = {
      apiKey: S.apiKey,
      provider: S.provider,
      settings: S.settings,
      stats: S.stats,
      profile: S.profile,
      streak: S.streak,
      userDocs: S.userDocs.map(d => ({ ...d, text: (d.text || '').slice(0, 150000) }))
    };
    localStorage.setItem('studymind_v3', JSON.stringify(payload));
  } catch(e) { console.warn('saveState failed:', e); }
}

function loadState() {
  try {
    const raw = localStorage.getItem('studymind_v3') || localStorage.getItem('studymind_v2');
    if (!raw) return;
    const s = JSON.parse(raw);
    if (s.apiKey)   S.apiKey   = s.apiKey;
    if (s.provider) S.provider = s.provider;
    if (s.settings) Object.assign(S.settings, s.settings);
    if (s.stats)    Object.assign(S.stats, s.stats);
    if (s.profile)  Object.assign(S.profile, s.profile);
    if (s.streak)   S.streak = s.streak;
    if (s.userDocs && s.userDocs.length) {
      S.userDocs = s.userDocs.map(d => ({ ...d, isPablo: false }));
      S.userDocs.forEach(d => {
        if (!S.kb.find(k => k.id === d.id)) S.kb.push(d);
      });
    }
  } catch(e) { console.warn('loadState failed:', e); }
}

// ──────────────────────────────────────────────────────────────
// 7. API / AI CALLS
// ──────────────────────────────────────────────────────────────
function detectProvider(key) {
  if (!key) return '';
  if (key.startsWith('sk-ant')) return 'claude';
  if (key.startsWith('AIza') || key.startsWith('ya29')) return 'gemini';
  if (key.startsWith('sk-') || key.startsWith('sk-proj')) return 'openai';
  return 'gemini'; // default
}

function saveApiKey() {
  const key = ($('apiKeySettings') || $('apiKeyInput') || {value:''}).value.trim()
    || ($('apiKeyInput') || {value:''}).value.trim();
  const inputEl = $('apiKeySettings') || $('apiKeyInput');
  const val = inputEl ? inputEl.value.trim() : '';
  if (!val) { toast('Please enter a valid API key', 'warning'); return; }
  S.apiKey   = val;
  S.provider = detectProvider(val);
  saveState();
  $('api-key-banner') && ($('api-key-banner').style.display = 'none');
  const hint = $('apiKeyHint');
  if (hint) hint.textContent = `✓ ${S.provider.toUpperCase()} key saved`;
  toast(`✓ ${S.provider.toUpperCase()} key saved`, 'success');
}

async function callAI({ prompt, jsonMode = false, maxTokens = 2000 }) {
  if (!S.apiKey) throw new Error('No API key — add one in Settings.');
  const provider = S.provider || detectProvider(S.apiKey);

  if (provider === 'gemini') {
    const model = 'gemini-2.0-flash';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${S.apiKey}`;
    const body = { contents:[{ parts:[{ text: prompt }] }], generationConfig:{ maxOutputTokens: maxTokens } };
    const r = await fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) });
    if (!r.ok) throw new Error(`Gemini ${r.status}: ${await r.text()}`);
    const d = await r.json();
    const text = d.candidates?.[0]?.content?.parts?.[0]?.text || '';
    return jsonMode ? parseJSON(text) : text;
  }

  if (provider === 'claude') {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type':'application/json', 'x-api-key': S.apiKey, 'anthropic-version':'2023-06-01' },
      body: JSON.stringify({ model:'claude-haiku-20240307', max_tokens: maxTokens, messages:[{ role:'user', content: prompt }] })
    });
    if (!r.ok) throw new Error(`Claude ${r.status}: ${await r.text()}`);
    const d = await r.json();
    const text = d.content?.[0]?.text || '';
    return jsonMode ? parseJSON(text) : text;
  }

  if (provider === 'openai') {
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type':'application/json', 'Authorization': `Bearer ${S.apiKey}` },
      body: JSON.stringify({ model:'gpt-4o-mini', max_tokens: maxTokens, messages:[{ role:'user', content: prompt }] })
    });
    if (!r.ok) throw new Error(`OpenAI ${r.status}: ${await r.text()}`);
    const d = await r.json();
    const text = d.choices?.[0]?.message?.content || '';
    return jsonMode ? parseJSON(text) : text;
  }

  throw new Error('Unknown provider');
}

function parseJSON(text) {
  const clean = text.replace(/```json|```/g, '').trim();
  const start = clean.indexOf('[');
  const end   = clean.lastIndexOf(']');
  if (start === -1 || end === -1) throw new Error('No JSON array found in response');
  return JSON.parse(clean.slice(start, end + 1));
}

// ──────────────────────────────────────────────────────────────
// 8. STATS & DASHBOARD
// ──────────────────────────────────────────────────────────────
function renderStats() {
  $('s-docs') && ($('s-docs').textContent = S.kb.length);
  $('s-quiz') && ($('s-quiz').textContent = S.stats.quiz);
  $('s-chats') && ($('s-chats').textContent = S.stats.chats);
  $('lib-kb-info') && ($('lib-kb-info').textContent = `Knowledge base: ${S.kb.length} document${S.kb.length !== 1 ? 's' : ''}`);
}

function updateStreak() {
  const today = new Date().toDateString();
  const last  = localStorage.getItem('sm_last_day');
  if (last !== today) {
    if (last === new Date(Date.now() - 86400000).toDateString()) S.streak++;
    else if (!last) S.streak = 1;
    else S.streak = 1;
    localStorage.setItem('sm_last_day', today);
    saveState();
  }
  $('streak-val') && ($('streak-val').textContent = S.streak + ' Day' + (S.streak !== 1 ? 's' : ''));
}

function addActivity(type, detail, score) {
  S.stats.activity.unshift({ type, detail, score, time: new Date().toLocaleTimeString() });
  if (S.stats.activity.length > 50) S.stats.activity.pop();
  saveState();
}

// ──────────────────────────────────────────────────────────────
// 9. LIBRARY
// ──────────────────────────────────────────────────────────────
function renderLibrary() {
  const grid = $('docs-grid');
  if (!grid) return;
  grid.innerHTML = '';
  if (!S.kb.length) {
    grid.innerHTML = '<div class="empty-state"><p>No documents yet. Upload a PDF above.</p></div>';
    return;
  }
  S.kb.forEach(doc => {
    const pages = doc.totalPages || '?';
    const size  = doc.size ? `${(doc.size / 1024).toFixed(0)} KB` : '';
    const badge = doc.isPablo
      ? '<span class="preloaded-badge">Pre-loaded</span>'
      : '<span class="active-badge">Uploaded</span>';
    const removeBtn = doc.isPablo
      ? ''
      : `<button class="btn btn-outline btn-sm" onclick="removeDoc('${doc.id}')" style="border-color:var(--red);color:var(--red)">🗑 Remove</button>`;

    const card = document.createElement('div');
    card.className = 'doc-card';
    card.innerHTML = `
      <div class="doc-thumb">📄</div>
      ${badge}
      <div class="doc-title">${doc.name}</div>
      <div class="doc-meta"><span>${pages} pages</span><span>${size}</span></div>
      <div class="doc-actions">
        <div class="doc-btn-row">
          <button class="btn btn-outline btn-sm" onclick="setSelectedSrc('${doc.id}','fc');doGenFC()">🃏 Flashcards</button>
          <button class="btn btn-outline btn-sm" onclick="setSelectedSrc('${doc.id}','q');doGenQuiz()">🧠 Quiz</button>
        </div>
        ${removeBtn}
      </div>`;
    grid.appendChild(card);
  });
  renderStats();
}

function setSelectedSrc(id, mode) {
  S.selectedSrc = id;
  if (mode === 'fc')  nav('flashcards');
  if (mode === 'q')   nav('quiz');
}

function removeDoc(id) {
  S.kb       = S.kb.filter(d => d.id !== id);
  S.userDocs = S.userDocs.filter(d => d.id !== id);
  saveState();
  renderLibrary();
  renderKBList();
  toast('Document removed', 'info');
}

function clearUserDocs() {
  S.kb       = S.kb.filter(d => d.isPablo);
  S.userDocs = [];
  saveState();
  renderLibrary();
  toast('Uploaded documents cleared', 'info');
}

// ──────────────────────────────────────────────────────────────
// 10. PDF UPLOAD & PROCESSING
// ──────────────────────────────────────────────────────────────
async function processPDF(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const totalPages = pdf.numPages;
  const maxPages   = Math.min(totalPages, 200);
  let extractedText = '';

  for (let i = 1; i <= maxPages; i++) {
    updateOverlay(`Extracting page ${i} of ${maxPages}…`, Math.round((i / maxPages) * 80));
    const page = await pdf.getPage(i);
    try {
      const tc = await page.getTextContent();
      let pageText = '';
      for (const item of tc.items) {
        if (item.hasEOL) pageText += item.str + '\n';
        else pageText += item.str + (item.str.endsWith(' ') ? '' : ' ');
      }
      pageText = pageText.trim();
      if (pageText.length > 20) extractedText += `=== PAGE ${i} ===\n${pageText}\n\n`;
    } catch(e) { /* skip bad page */ }
  }

  const text = extractedText.trim();
  if (!text && totalPages > 0) throw new Error('No text found — this PDF appears to be a scanned image. Please use a text-based PDF.');
  return { text, totalPages };
}

async function handleFiles(files) {
  for (const file of files) {
    if (!file.name.toLowerCase().endsWith('.pdf')) {
      toast(`Skipped "${file.name}" — only PDF files are supported.`, 'warning');
      continue;
    }
    showOverlay('Processing PDF', `Reading "${file.name}"…`, 5);
    try {
      const { text, totalPages } = await processPDF(file);
      const id = 'doc_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
      const doc = { id, name: file.name, totalPages, date: new Date().toLocaleDateString(), isPablo: false, text, size: file.size };
      S.kb.push(doc);
      S.userDocs.push(doc);
      saveState();
      updateOverlay('Done!', 100);
      toast(`✓ "${file.name}" added (${totalPages} pages)`, 'success');
    } catch(e) {
      toast(`Error: ${e.message}`, 'error');
    }
  }
  hideOverlay();
  renderLibrary();
  renderKBList();
  setSyncState('ready', `Knowledge base: ${S.kb.length} doc${S.kb.length !== 1 ? 's' : ''}`);
}

// ──────────────────────────────────────────────────────────────
// 11. FLASHCARDS
// ──────────────────────────────────────────────────────────────
function loadFC(cards) {
  S.fc.cards   = cards;
  S.fc.idx     = 0;
  S.fc.known   = new Set();
  S.fc.flipped = false;
  renderFC();
}

function renderFC() {
  const { cards, idx, known, flipped } = S.fc;
  if (!cards.length) return;
  const card = cards[idx];

  $('fc-q') && ($('fc-q').textContent = card.q);
  $('fc-a') && ($('fc-a').textContent = card.a);
  $('fc-counter') && ($('fc-counter').textContent = `${idx + 1} / ${cards.length}`);

  const inner = $('fc-inner');
  if (inner) {
    inner.className = 'fc-card-inner' + (flipped ? ' flipped' : '');
  }

  const pct = cards.length > 0 ? Math.round((known.size / cards.length) * 100) : 0;
  $('fc-pct') && ($('fc-pct').textContent = pct + '%');
  $('fc-bar') && ($('fc-bar').style.width = pct + '%');

  const btns = $('fc-btns');
  if (btns) btns.style.display = flipped ? 'grid' : 'none';
}

function fcFlip() {
  S.fc.flipped = !S.fc.flipped;
  renderFC();
}

function fcDone(result) {
  if (result === 'know') {
    S.fc.known.add(S.fc.idx);
    S.stats.cards++;
    saveState();
  }
  S.fc.flipped = false;
  S.fc.idx = (S.fc.idx + 1) % S.fc.cards.length;
  renderFC();
}

async function doGenFC() {
  if (!S.apiKey) { toast('Add an API key in Settings first', 'warning'); nav('settings'); return; }
  nav('flashcards');
  S.fc.known = new Set();
  const srcId  = S.selectedSrc || 'all';
  const src    = S.kb.find(d => d.id === srcId);
  const srcLabel = src ? src.name : 'All Documents';
  const ctx    = getKBContext(srcId);
  if (!ctx.trim()) { toast('No content in knowledge base', 'warning'); return; }

  showOverlay('Generating Flashcards', 'Preparing content…', 10);
  try {
    const seed   = Math.floor(Math.random() * 9000) + 1000;
    const prompt = `You are a flashcard generator. Generate exactly 20 unique flashcards from the study material below.

STUDY MATERIAL (${srcLabel}):
${ctx.slice(0, 50000)}

Rules:
- Each card covers one specific concept, definition, formula, or key fact from the material
- Questions are clear and concise
- Answers are complete but brief (2–4 sentences)
- Cover topics spread across the FULL document, not just the beginning
- Do NOT repeat similar cards
- Variety seed: ${seed}
- Return ONLY a valid JSON array with no markdown fences, no explanation, no preamble

Format exactly: [{"q":"question text","a":"answer text"},...]`;

    updateOverlay('AI is writing flashcards…', 50);
    const cards = await callAI({ prompt, jsonMode: true, maxTokens: 4000 });
    if (!Array.isArray(cards) || !cards.length) throw new Error('Invalid response from AI');
    hideOverlay();
    loadFC(cards);
    const src2 = S.kb.find(d => d.id === srcId);
    $('fc-source-tag') && ($('fc-source-tag').textContent = `Source: ${src2 ? src2.name : 'All Documents'}`);
    toast(`✓ ${cards.length} flashcards generated`, 'success');
    addActivity('Flashcards', srcLabel, cards.length + ' cards');
  } catch(e) {
    hideOverlay();
    toast(`Error: ${e.message}`, 'error');
  }
}

// ──────────────────────────────────────────────────────────────
// 12. QUIZ
// ──────────────────────────────────────────────────────────────
function loadQuiz(questions) {
  S.quiz.questions = questions;
  S.quiz.idx       = 0;
  S.quiz.answered  = 0;
  S.quiz.correct   = 0;
  S.quiz.results   = [];
  renderQuiz();
}

function renderQuiz() {
  const { questions, idx } = S.quiz;
  if (!questions.length) return;
  const q = questions[idx];

  $('q-badge') && ($('q-badge').textContent   = `Question ${idx + 1}`);
  $('q-text')  && ($('q-text').textContent    = q.question);
  $('quiz-counter') && ($('quiz-counter').textContent = `Q ${idx + 1} of ${questions.length}`);

  const fill = Math.round(((idx + 1) / questions.length) * 100);
  $('quiz-progress') && ($('quiz-progress').style.width = fill + '%');

  const opts = $('q-options');
  if (opts) {
    opts.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D', 'E'];
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span class="option-text">${opt}</span>`;
      btn.onclick = () => answerQuiz(i);
      opts.appendChild(btn);
    });
  }

  $('quiz-status') && ($('quiz-status').textContent = '');
  const nextBtn = $('quiz-next-btn');
  if (nextBtn) nextBtn.disabled = true;

  renderQuizDots();
}

function renderQuizDots() {
  const dotsEl = $('quiz-dots');
  if (!dotsEl) return;
  dotsEl.innerHTML = '';
  S.quiz.questions.forEach((_, i) => {
    const d = document.createElement('div');
    const res = S.quiz.results[i];
    d.className = 'quiz-dot' + (i === S.quiz.idx ? ' current' : res === true ? ' correct done' : res === false ? ' wrong done' : '');
    dotsEl.appendChild(d);
  });
}

function answerQuiz(choice) {
  const { questions, idx } = S.quiz;
  const q = questions[idx];
  const correct = choice === q.answer;
  S.quiz.results[idx] = correct;

  const opts = $('q-options');
  if (opts) {
    const buttons = opts.querySelectorAll('.option');
    buttons.forEach((btn, i) => {
      btn.classList.add('answered');
      if (i === q.answer) btn.classList.add('correct');
      else if (i === choice && !correct) btn.classList.add('wrong');
    });
  }

  const statusEl = $('quiz-status');
  if (statusEl) {
    statusEl.textContent = correct
      ? '✓ Correct!'
      : `✗ Incorrect — correct answer: ${q.options[q.answer]}`;
    statusEl.style.color = correct ? 'var(--green)' : 'var(--red)';
  }

  if (correct) S.quiz.correct++;
  S.quiz.answered++;
  S.stats.quiz++;
  saveState();

  const nextBtn = $('quiz-next-btn');
  if (nextBtn) {
    nextBtn.disabled = false;
    nextBtn.textContent = S.quiz.idx < S.quiz.questions.length - 1 ? 'Next →' : 'Finish';
  }
  renderQuizDots();
}

function quizNext() {
  if (S.quiz.idx < S.quiz.questions.length - 1) {
    S.quiz.idx++;
    renderQuiz();
  } else {
    finishQuiz();
  }
}

function quizSkip() {
  S.quiz.results[S.quiz.idx] = null;
  if (S.quiz.idx < S.quiz.questions.length - 1) {
    S.quiz.idx++;
    renderQuiz();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const total   = S.quiz.questions.length;
  const correct = S.quiz.correct;
  const pct     = Math.round((correct / total) * 100);
  S.stats.correct += correct;
  S.stats.scores.push({ score: pct, date: new Date().toLocaleDateString() });
  saveState();
  addActivity('Quiz', `${total} questions`, `${pct}%`);
  toast(`Quiz done! ${correct}/${total} correct (${pct}%)`, pct >= 60 ? 'success' : 'warning');
  loadQuiz(DEFAULT_QS);
}

async function doGenQuiz() {
  if (!S.apiKey) { toast('Add an API key in Settings first', 'warning'); nav('settings'); return; }
  nav('quiz');
  const srcId    = S.selectedSrc || 'all';
  const src      = S.kb.find(d => d.id === srcId);
  const srcLabel = src ? src.name : 'All Documents';
  const ctx      = getKBContext(srcId);
  if (!ctx.trim()) { toast('No content in knowledge base', 'warning'); return; }

  showOverlay('Generating Quiz', 'Preparing questions…', 10);
  try {
    const seed   = Math.floor(Math.random() * 9000) + 1000;
    const prompt = `You are a quiz generator. Generate exactly 25 multiple-choice questions from the study material below.

STUDY MATERIAL (${srcLabel}):
${ctx.slice(0, 50000)}

Rules:
- Each question tests one specific fact, concept, definition, or formula from the material
- Each question has exactly 4 options labeled A–D
- Only one option is correct
- Cover topics spread across the FULL document
- Mix difficulty: some recall, some application
- Variety seed: ${seed}
- Return ONLY a valid JSON array with no markdown fences, no explanation, no preamble

Format exactly: [{"question":"...","options":["A","B","C","D"],"answer":0},...]
where "answer" is the 0-based index of the correct option.`;

    updateOverlay('AI is writing questions…', 50);
    const qs = await callAI({ prompt, jsonMode: true, maxTokens: 5000 });
    if (!Array.isArray(qs) || !qs.length) throw new Error('Invalid response from AI');
    hideOverlay();
    loadQuiz(qs);
    toast(`✓ ${qs.length} questions generated`, 'success');
    addActivity('Quiz Generated', srcLabel, qs.length + ' Qs');
  } catch(e) {
    hideOverlay();
    toast(`Error: ${e.message}`, 'error');
  }
}

// ──────────────────────────────────────────────────────────────
// 13. SUMMARY
// ──────────────────────────────────────────────────────────────
async function genSummary(type) {
  if (!S.apiKey) { toast('Add an API key in Settings first', 'warning'); nav('settings'); return; }
  const srcId    = S.selectedSrc || 'all';
  const src      = S.kb.find(d => d.id === srcId);
  const srcLabel = src ? src.name : 'All Documents';
  const ctx      = getKBContext(srcId);

  const typeMap = {
    summary:   'a comprehensive summary with key points and main concepts',
    guide:     'a structured study guide with sections, definitions, and formulas',
    questions: '15 practice questions with detailed answers',
    keyterms:  'a glossary of 20 key terms with clear definitions'
  };

  showOverlay('Generating Content', 'Working…', 20);
  try {
    const prompt = `You are an expert study assistant. Generate ${typeMap[type]} from the following study material.

MATERIAL (${srcLabel}):
${ctx.slice(0, 30000)}

Write clearly and concisely. Use bullet points, numbered lists, and headings where appropriate.`;

    updateOverlay('AI is writing…', 55);
    const result = await callAI({ prompt, maxTokens: 2000 });
    hideOverlay();

    const out = $('summary-output');
    if (out) {
      out.innerHTML = `<div class="summary-card">
        <div class="summary-title">${type.charAt(0).toUpperCase() + type.slice(1)} — ${srcLabel}</div>
        <div class="summary-content">${result.replace(/</g,'&lt;')}</div>
      </div>`;
    }
    toast('✓ Content generated', 'success');
    addActivity('Summary', srcLabel, type);
  } catch(e) {
    hideOverlay();
    toast(`Error: ${e.message}`, 'error');
  }
}

// ──────────────────────────────────────────────────────────────
// 14. AI TUTOR CHAT
// ──────────────────────────────────────────────────────────────
function renderKBList() {
  const list = $('kb-doc-list');
  if (!list) return;
  list.innerHTML = S.kb.map(d => `<div class="kb-doc-item"><div class="kb-dot"></div>${d.name}</div>`).join('');
}

function appendMsg(role, text, thinking = false) {
  const msgs = $('chat-msgs');
  if (!msgs) return null;
  const div = document.createElement('div');
  div.className = 'msg ' + role;
  div.innerHTML = `<div class="msg-meta">${role === 'user' ? (S.profile.name || 'You') : 'AI Tutor'}</div>
    <div class="msg-bubble${thinking ? ' thinking' : ''}">${text.replace(/</g,'&lt;')}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div.querySelector('.msg-bubble');
}

function prefill(el) {
  const inp = $('chat-in');
  if (inp) { inp.value = el.textContent; inp.focus(); }
}

async function sendMsg() {
  const inp = $('chat-in');
  if (!inp) return;
  const text = inp.value.trim();
  if (!text) return;
  if (!S.apiKey) { toast('Add an API key in Settings first', 'warning'); nav('settings'); return; }

  inp.value = '';
  $('send-btn') && ($('send-btn').disabled = true);
  appendMsg('user', text);
  const bubble = appendMsg('ai', '…', true);
  S.stats.chats++;
  renderStats();
  saveState();

  try {
    const ctx    = getKBContext('all');
    const prompt = `You are StudyMind AI, an expert tutor. Use the knowledge base below to answer the student's question accurately and helpfully.

KNOWLEDGE BASE:
${ctx.slice(0, 25000)}

STUDENT QUESTION: ${text}

Answer clearly and concisely. Reference specific content from the material where relevant.`;

    const reply = await callAI({ prompt, maxTokens: 1000 });
    if (bubble) { bubble.textContent = reply; bubble.classList.remove('thinking'); }
    addActivity('AI Chat', text.slice(0, 40), '');
  } catch(e) {
    if (bubble) { bubble.textContent = `Error: ${e.message}`; bubble.classList.remove('thinking'); }
    toast(`Error: ${e.message}`, 'error');
  }
  $('send-btn') && ($('send-btn').disabled = false);
}

// ──────────────────────────────────────────────────────────────
// 15. PROGRESS PAGE
// ──────────────────────────────────────────────────────────────
let _scoreChart = null, _topicChart = null;

function renderProgress() {
  const total   = S.stats.quiz;
  const correct = S.stats.correct;
  const pct     = total > 0 ? Math.round((correct / total) * 100) : 0;

  $('p-total-q') && ($('p-total-q').textContent = total);
  $('p-correct') && ($('p-correct').textContent = correct);
  $('p-accuracy') && ($('p-accuracy').textContent = total > 0 ? pct + '%' : '—');
  $('p-cards')   && ($('p-cards').textContent   = S.stats.cards || 0);

  const actList = $('activity-list');
  if (actList) {
    if (!S.stats.activity.length) {
      actList.innerHTML = '<p style="color:var(--fg3);font-size:12px">No activity yet — take a quiz or review flashcards.</p>';
    } else {
      actList.innerHTML = S.stats.activity.slice(0,10).map(a => `
        <div class="activity-item">
          <div><span class="activity-type">${a.type}</span> — <span style="color:var(--fg3);font-size:12px">${a.detail}</span></div>
          <div style="display:flex;gap:10px;align-items:center">
            ${a.score ? `<span class="activity-score${parseFloat(a.score)<60?' low':''}">${a.score}</span>` : ''}
            <span class="activity-meta">${a.time}</span>
          </div>
        </div>`).join('');
    }
  }

  // Heatmap
  const hm = $('heatmap');
  if (hm) {
    hm.innerHTML = '';
    const days = 140;
    const weeks = 20;
    for (let w = 0; w < weeks; w++) {
      const col = document.createElement('div');
      col.className = 'heatmap-col';
      for (let d = 0; d < 7; d++) {
        const cell = document.createElement('div');
        const level = (w * 7 + d) % 13 === 0 ? 4 : (w * 7 + d) % 7 === 0 ? 3 : (w * 7 + d) % 5 === 0 ? 2 : (w * 7 + d) % 3 === 0 ? 1 : 0;
        cell.className = `heatmap-cell${level ? ' i' + level : ''}`;
        col.appendChild(cell);
      }
      hm.appendChild(col);
    }
  }

  // Charts
  const scoreCtx = $('scoreChart');
  if (scoreCtx) {
    if (_scoreChart) _scoreChart.destroy();
    const labels = S.stats.scores.length ? S.stats.scores.map((s,i) => `Quiz ${i+1}`) : ['No data'];
    const data   = S.stats.scores.length ? S.stats.scores.map(s => s.score) : [0];
    _scoreChart = new Chart(scoreCtx, {
      type: 'line',
      data: { labels, datasets:[{ label:'Score %', data, borderColor:'#4f8ef7', backgroundColor:'rgba(79,142,247,0.1)', tension:0.3, fill:true }] },
      options: { responsive:true, plugins:{ legend:{ display:false } }, scales:{ y:{ min:0, max:100, ticks:{ color:'#8a94b0' } }, x:{ ticks:{ color:'#8a94b0' } } } }
    });
  }

  const topicCtx = $('topicChart');
  if (topicCtx) {
    if (_topicChart) _topicChart.destroy();
    _topicChart = new Chart(topicCtx, {
      type: 'doughnut',
      data: {
        labels: ['Mechanics', 'Electronics', 'Uploaded Docs'],
        datasets:[{ data:[45, 40, 15], backgroundColor:['#4f8ef7','#7c5cfa','#22c55e'], borderWidth:0 }]
      },
      options: { responsive:true, plugins:{ legend:{ labels:{ color:'#8a94b0', font:{ size:11 } } } } }
    });
  }
}

// ──────────────────────────────────────────────────────────────
// 16. SETTINGS
// ──────────────────────────────────────────────────────────────
function toggleSetting(key) {
  S.settings[key] = !S.settings[key];
  const tglMap = { web: 'webTgl', doc: 'docTgl', allDocs: 'allDocsTgl' };
  const btn = $(tglMap[key]);
  if (btn) btn.className = 'toggle' + (S.settings[key] ? ' on' : '');
  if (key === 'web') $('web-status') && ($('web-status').textContent = S.settings.web ? 'ON' : 'OFF');
  saveState();
}

function saveProfile() {
  S.profile.name  = $('nameIn')  ? $('nameIn').value.trim()  || 'Student' : 'Student';
  S.profile.email = $('emailIn') ? $('emailIn').value.trim() : '';
  saveState();
  const av = $('user-avatar');
  if (av) av.textContent = (S.profile.name[0] || 'S').toUpperCase();
  $('profile-name') && ($('profile-name').textContent = S.profile.name);
  toast('Profile saved', 'success');
}

function applySettings() {
  const toggles = { web: 'webTgl', doc: 'docTgl', allDocs: 'allDocsTgl' };
  Object.entries(toggles).forEach(([key, id]) => {
    const btn = $(id);
    if (btn) btn.className = 'toggle' + (S.settings[key] ? ' on' : '');
  });
  $('web-status') && ($('web-status').textContent = S.settings.web ? 'ON' : 'OFF');
  const av = $('user-avatar');
  if (av) av.textContent = (S.profile.name[0] || 'S').toUpperCase();
  $('profile-name') && ($('profile-name').textContent = S.profile.name);
  if ($('nameIn'))  $('nameIn').value  = S.profile.name;
  if ($('emailIn')) $('emailIn').value = S.profile.email;
  if (S.apiKey) {
    const hint = $('apiKeyHint');
    if (hint) hint.textContent = `✓ ${(S.provider || 'API').toUpperCase()} key saved`;
    $('api-key-banner') && ($('api-key-banner').style.display = 'none');
  } else {
    $('api-key-banner') && ($('api-key-banner').style.display = 'flex');
  }
}

// ──────────────────────────────────────────────────────────────
// 17. EVENT BINDINGS  (runs after DOM is ready)
// ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Navigation clicks
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => nav(btn.dataset.page));
  });

  // Greeting
  const h = new Date().getHours();
  $('greeting') && ($('greeting').textContent = h < 12 ? 'Good morning, ready to study?' : h < 18 ? 'Good afternoon!' : 'Good evening!');

  // Flashcard flip
  $('fc-scene') && $('fc-scene').addEventListener('click', fcFlip);

  // Chat enter key
  $('chat-in') && $('chat-in').addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(); }
  });

  // File upload
  const uploadBtn  = $('uploadBtn');
  const fileInput  = $('fileInput');
  const uploadZone = $('upload-zone');

  if (uploadBtn)  uploadBtn.addEventListener('click', e => { e.stopPropagation(); fileInput && fileInput.click(); });
  if (uploadZone) uploadZone.addEventListener('click', () => fileInput && fileInput.click());
  if (uploadZone) uploadZone.addEventListener('dragover',  e => { e.preventDefault(); uploadZone.classList.add('drag'); });
  if (uploadZone) uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('drag'));
  if (uploadZone) uploadZone.addEventListener('drop', e => {
    e.preventDefault();
    uploadZone.classList.remove('drag');
    handleFiles(Array.from(e.dataTransfer.files));
  });
  if (fileInput)  fileInput.addEventListener('change', e => {
    handleFiles(Array.from(e.target.files || []));
    fileInput.value = '';
  });

  // Save API key from banner input on Enter
  $('apiKeyInput') && $('apiKeyInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') saveApiKey();
  });

  // ── BOOT SEQUENCE ──
  loadState();
  applySettings();
  loadQuiz(DEFAULT_QS);
  loadFC(DEFAULT_FC);
  renderLibrary();
  renderKBList();
  renderStats();
  updateStreak();
  setSyncState('ready', `Knowledge base: ${S.kb.length} doc${S.kb.length !== 1 ? 's' : ''}`);
});
