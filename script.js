const conditions = {
  delirium: {
    title: 'Delirium: the brain is acutely overwhelmed',
    core: 'A sudden change in attention and awareness that often fluctuates over the day. It is commonly triggered by medical illness, medications, surgery, pain, sleep loss, dehydration, substance effects, or infection.',
    anatomy: 'Attention and arousal systems are stressed: frontal attention control, thalamic signal routing, brainstem sleep-wake systems, and widespread network connectivity.',
    science: 'A single mechanism has not been proven. Reviews emphasize interacting pathways: inflammation, vascular/metabolic stress, neurotransmitter imbalance, sleep-wake disruption, and network disconnectivity.',
    label: 'likely'
  },
  dementia: {
    title: 'Dementia: brain systems lose function over time',
    core: 'A persistent decline in thinking skills severe enough to interfere with independence. Alzheimer disease, vascular disease, Lewy body disease, Parkinson disease, frontotemporal degeneration, and other conditions can cause dementia.',
    anatomy: 'The pattern depends on cause. Memory networks often include hippocampus and temporal regions; planning and judgment depend heavily on frontal networks; vascular injury can disrupt many routes.',
    science: 'In Alzheimer disease, abnormal amyloid and tau biology, synapse loss, inflammation, and brain cell injury are central research and clinical concepts. Cholinergic changes are especially relevant to symptoms and some medicines.',
    label: 'solid'
  },
  psychosis: {
    title: 'Psychosis: the brain assigns reality-level importance to experiences that may not match the outside world',
    core: 'Psychosis can include hearing or seeing things others do not, fixed false beliefs, suspiciousness, or disorganized thinking. It can occur in primary psychiatric illness, delirium, dementia, substances, medications, sleep deprivation, seizures, and other medical conditions.',
    anatomy: 'Research highlights dopamine-linked salience systems, prefrontal control, basal ganglia reward/salience loops, thalamic filtering, temporal-language systems, and cerebello-thalamo-cortical circuits.',
    science: 'Dopamine is important but “too much dopamine” is not the whole story. Glutamate, GABA, inflammation, development, stress, sleep, trauma, and network-level changes can matter depending on the person and cause.',
    label: 'likely'
  }
};


const neurotransmittersByCondition = {
  delirium: [
    ['Acetylcholine', 'Attention and memory tuning. Low cholinergic activity is a major delirium hypothesis, and medicines with anticholinergic effects can worsen confusion in vulnerable patients.', 'solid'],
    ['Dopamine', 'Salience, arousal, movement, and prediction. Dopamine excess or dysregulation can contribute to agitation, hallucinations, or delusions in delirium, and antipsychotics may be used cautiously for severe distress or safety risks.', 'solid'],
    ['GABA', 'Inhibitory balance, sleep, and seizure protection. Sedatives, alcohol or benzodiazepine withdrawal, and seizure risk can push delirium through GABA-related pathways, though the person-specific mechanism varies.', 'solid'],
    ['Melatonin / circadian biology', 'Sleep-wake timing and day-night rhythm. Hospital light exposure, fragmented sleep, and circadian disruption are plausible delirium contributors; prevention bundles often protect sleep and orientation.', 'likely'],
    ['Inflammation / immune signaling (not a classic neurotransmitter)', 'Immune signals from infection, surgery, trauma, or systemic illness can affect brain function and attention. This is not a classic neurotransmitter, but it is a major delirium pathway under active study.', 'likely']
  ],
  dementia: [
    ['Acetylcholine', 'Attention and memory tuning. Cholinergic deficits are clinically important in Alzheimer disease and Lewy body/Parkinson spectrum dementias, and cholinesterase inhibitors target this system.', 'solid'],
    ['Glutamate', 'The major excitatory messenger, including NMDA receptor signaling. Memantine targets NMDA/glutamate biology in moderate to severe Alzheimer disease, but dementia is not explained by one transmitter level.', 'solid'],
    ['Dopamine', 'Movement, salience, motivation, and reward. Dopamine pathways are especially relevant in Parkinson disease dementia and dementia with Lewy bodies, where hallucinations and medication sensitivity can be clinical concerns.', 'solid'],
    ['Serotonin', 'Mood, anxiety, sleep, appetite, and behavioral symptoms. Serotonin-targeting medicines may be used for depression, anxiety, irritability, or agitation in some patients, while benefits and risks need individual review.', 'solid'],
    ['Norepinephrine', 'Arousal, attention, and stress response. Norepinephrine systems may contribute to apathy, mood, sleep, and behavioral symptoms in dementia, but mechanisms and treatment implications are still being refined.', 'likely']
  ],
  psychosis: [
    ['Dopamine', 'Salience, reward prediction, and motivation. Dysregulated dopamine signaling is strongly linked to hallucinations and delusions, and dopamine D2 receptor blockade is a core target of many antipsychotic medicines.', 'solid'],
    ['Glutamate', 'The major excitatory messenger, including NMDA receptor signaling. NMDA/glutamate models help explain why dopamine is not the whole story, but clinical translation is still developing.', 'likely'],
    ['GABA', 'Inhibitory balance and signal filtering. GABA interneuron changes are studied as contributors to cortical timing, sensory filtering, and network synchrony in psychosis.', 'likely'],
    ['Serotonin', 'Perception, mood, sleep, and cortical modulation. Several antipsychotics also affect serotonin receptors, and serotonergic hallucinogens show that serotonin systems can influence perception.', 'solid']
  ],
  tbi: [
    ['Glutamate', 'The major excitatory messenger. After traumatic brain injury, acute glutamate surges can contribute to excitotoxicity and secondary injury, especially early after injury.', 'solid'],
    ['GABA', 'Inhibitory balance, seizure risk, sleep, and calming circuits. TBI can disrupt excitation-inhibition balance, affecting irritability, cognition, sleep, and seizure vulnerability.', 'likely'],
    ['Dopamine', 'Arousal, motivation, reward, and processing speed. Dopamine pathways are relevant to attention, apathy, slowed thinking, and recovery of goal-directed behavior after TBI.', 'likely'],
    ['Acetylcholine', 'Attention, learning, and memory tuning. Cholinergic systems can be relevant to post-TBI attention and memory symptoms, although treatment choices depend on injury pattern and comorbidities.', 'likely'],
    ['Inflammation / immune signaling (not a classic neurotransmitter)', 'Microglial activation and inflammatory signals can shape secondary injury and longer-term symptoms after TBI. This is not a classic neurotransmitter, but it is clinically important biology.', 'likely']
  ],
  mania: [
    ['Dopamine', 'Reward, salience, drive, and goal pursuit. Increased or dysregulated dopamine signaling is a clinically useful model for elevated energy, impulsivity, psychosis, and reward seeking in mania.', 'solid'],
    ['Glutamate', 'Excitatory signaling and plasticity. Glutamate changes are studied in bipolar disorder and may relate to mood-state shifts, but mechanisms are still being refined.', 'likely'],
    ['GABA', 'Inhibitory balance and calming circuits. Reduced inhibitory control is a useful model for sleep loss, racing thoughts, and increased activity in mania, and several mood-stabilizing treatments influence inhibitory/excitatory balance.', 'likely'],
    ['Norepinephrine', 'Arousal, stress response, alertness, and energy. Noradrenergic activation can map onto decreased need for sleep, agitation, and heightened activation in manic states.', 'likely'],
    ['Serotonin', 'Mood regulation, impulse control, and sleep. Serotonin is part of the broader mood-regulation network, but mania is not simply a high-or-low serotonin state.', 'likely'],
    ['Melatonin / circadian biology', 'Sleep-wake timing and rhythm stability. Circadian disruption and sleep loss can precipitate or amplify mania, so rhythm stabilization is a major clinical theme.', 'solid']
  ],
  mdd: [
    ['Serotonin', 'Mood, anxiety, sleep, appetite, and pain modulation. Serotonin reuptake inhibitors are established treatments for major depressive disorder, though depression is not just a serotonin deficiency.', 'solid'],
    ['Norepinephrine', 'Energy, attention, stress response, and alertness. SNRIs and other medications target norepinephrine pathways that can matter for concentration, fatigue, and pain symptoms.', 'solid'],
    ['Dopamine', 'Reward, motivation, pleasure, and reinforcement learning. Dopamine-related circuits are clinically relevant to anhedonia, low motivation, and slowed goal-directed behavior.', 'likely'],
    ['Glutamate', 'Excitatory signaling and plasticity. Rapid-acting treatments such as ketamine/esketamine point to glutamate/NMDA-related biology, while best use and mechanisms continue to be refined.', 'solid'],
    ['GABA', 'Inhibitory balance and stress-sensitive regulation. GABA findings are relevant to anxiety, sleep, and cortical balance in depression, but clinical implications vary.', 'likely'],
    ['Inflammation / immune signaling (not a classic neurotransmitter)', 'Stress-system and immune signals can influence mood, sleep, energy, and cognition in some people with depression. This is not a classic neurotransmitter and is not the whole explanation for MDD.', 'likely'],
    ['Melatonin / circadian biology', 'Sleep-wake timing, seasonal patterns, and rhythm alignment. Circadian disruption can worsen depressive symptoms, and sleep/rhythm interventions can be part of care.', 'solid']
  ]
};

let selectedConditionKey = 'delirium';

const regions = {
  prefrontal: {
    title: 'Prefrontal cortex',
    role: 'Helps with planning, judgment, impulse control, reality testing, and holding goals in mind.',
    why: ['Delirium can weaken attention and executive control.', 'Dementia can affect planning, insight, social judgment, or behavior.', 'Psychosis research often includes altered prefrontal control over salience and reward circuits.'],
    label: 'solid'
  },
  temporal: {
    title: 'Temporal lobe',
    role: 'Supports language, meaning, memory connections, emotion-linked memories, and some sensory interpretations.',
    why: ['Temporal-language systems can be relevant to auditory hallucinations.', 'Several dementias affect temporal regions and language or memory.', 'Seizures or inflammation in this region can sometimes mimic psychiatric symptoms.'],
    label: 'likely'
  },
  hippocampus: {
    title: 'Hippocampus',
    role: 'Helps form new memories and connect details into a timeline.',
    why: ['Alzheimer disease commonly involves memory network injury.', 'Delirium can temporarily disrupt memory encoding because attention is impaired.', 'Stress biology can affect hippocampal function, though mechanisms vary.'],
    label: 'solid'
  },
  thalamus: {
    title: 'Thalamus',
    role: 'Acts like a routing hub, helping decide which sensory and body signals reach conscious attention.',
    why: ['Delirium may involve disrupted routing and connectivity.', 'Psychosis research includes thalamic filtering and cerebello-thalamo-cortical networks.', 'Small strokes or metabolic problems involving hubs can have outsized effects.'],
    label: 'likely'
  },
  basal: {
    title: 'Basal ganglia',
    role: 'Helps select actions, habits, motivation, and salience through loops with the frontal cortex.',
    why: ['Dopamine pathways run through these loops.', 'Psychosis research includes prefrontal-basal ganglia circuit changes.', 'Parkinson disease and Lewy body conditions can affect movement, cognition, sleep, and hallucinations.'],
    label: 'likely'
  },
  brainstem: {
    title: 'Brainstem and arousal systems',
    role: 'Regulates wakefulness, breathing, autonomic tone, and sleep-wake cycling.',
    why: ['Delirium often includes sleep-wake reversal or altered alertness.', 'Medications, hypoxia, infection, and metabolic problems can affect arousal.', 'Some dementia syndromes include sleep and visual-perceptual symptoms.'],
    label: 'solid'
  }
};

const tabContent = {
  nt: [
    ['Acetylcholine', 'Attention and memory “tuning.” Low cholinergic activity is a major delirium hypothesis and is important in Alzheimer-related cognitive symptoms.', 'solid'],
    ['Dopamine', 'Salience, movement, reward, motivation, and prediction. Excess or dysregulated dopamine signaling is strongly linked to psychotic symptoms and is one target of antipsychotic medicines.', 'solid'],
    ['Glutamate', 'The major excitatory messenger. NMDA/glutamate theories are relevant to psychosis and neurodegeneration, but the clinical story is more complex than a simple high/low level.', 'likely'],
    ['GABA', 'A major inhibitory messenger. Sedatives, withdrawal states, seizures, and sleep-wake disruption can alter inhibitory balance and contribute to confusion or psychotic-like experiences.', 'likely'],
    ['Norepinephrine & serotonin', 'Arousal, stress response, mood, sleep, attention, and perception. Delirium reviews describe variable changes rather than one consistent direction.', 'likely'],
    ['Melatonin & circadian biology', 'Sleep-wake timing matters. Low or mistimed circadian signaling is one proposed contributor to delirium, especially in hospitals.', 'likely']
  ],
  network: [
    ['Default mode network', 'Often discussed in memory, self-reference, daydreaming, and Alzheimer disease research. It is not a single “memory center.”', 'likely'],
    ['Salience network', 'Helps decide what deserves attention. A teaching frame for psychosis is that the “importance detector” may tag neutral events as highly meaningful.', 'likely'],
    ['Frontoparietal attention network', 'Helps maintain focus and switch tasks. Delirium often looks like this system cannot stay online reliably.', 'likely'],
    ['Cerebello-thalamo-cortical network', 'A research pathway connecting coordination, timing, cognition, and psychosis risk findings.', 'likely'],
    ['Prefrontal-basal ganglia loops', 'Support motivation, habit, action selection, and salience. Research links these loops to psychosis and cognitive symptoms.', 'likely'],
    ['Whole-brain connectivity', 'Delirium may represent a temporary failure of network integration: many systems cannot coordinate under stress.', 'likely']
  ],
  metaphor: [
    ['Delirium as a power grid brownout', 'The lights may flicker room by room. The wiring is not necessarily permanently destroyed, but the system cannot meet demand right now.', 'metaphor'],
    ['Dementia as roads wearing out', 'Some routes become slower or blocked over months to years. People may take detours, but daily navigation gets harder.', 'metaphor'],
    ['Psychosis as a noisy alarm system', 'The alarm may ring for smoke that is not there. The experience is real to the person even when the outside cause is not present.', 'metaphor'],
    ['Neurotransmitters as volume knobs', 'They do not simply turn the whole brain on or off; they tune circuits differently depending on receptor, region, timing, and illness.', 'metaphor']
  ]
};

const checklistItems = [
  'When did the change start: exact day/time, sudden or gradual?',
  'Does alertness or attention fluctuate during the day?',
  'Any fever, pain, dehydration, urinary symptoms, breathing symptoms, constipation, or recent fall?',
  'Any new medications, dose changes, missed medications, alcohol/substance use, or withdrawal risk?',
  'What is the person’s usual memory and function baseline?',
  'Any hallucinations, paranoia, sleep changes, wandering, unsafe driving, or self-harm concerns?',
  'What helps: glasses/hearing aids, reorientation, family presence, sleep, hydration, mobility?'
];

const quizItems = [
  {
    q: 'Which pattern most strongly suggests delirium rather than a slowly progressive dementia?',
    options: ['Sudden fluctuating attention', 'Forgetting names over several years', 'Longstanding trouble balancing a checkbook'],
    answer: 0,
    feedback: 'Correct: sudden onset and fluctuating attention are key delirium clues.'
  },
  {
    q: 'Which statement is safest when explaining psychosis biology?',
    options: ['It is always just too much dopamine', 'Dopamine can matter, but networks and other transmitters can also matter', 'It only happens in schizophrenia'],
    answer: 1,
    feedback: 'Correct: dopamine is important, but psychosis biology is not one chemical in one direction.'
  }
];

const badge = label => `<span class="badge ${label}">${label === 'solid' ? 'Solid evidence' : label === 'likely' ? 'Likely / still studied' : 'Teaching metaphor'}</span>`;

function renderCondition(conditionKey) {
  selectedConditionKey = conditionKey;
  const item = conditions[conditionKey];
  document.getElementById('conditionSpotlight').innerHTML = `
    <h3>${item.title}</h3>
    <div class="spotlight-grid">
      <div><p class="eyebrow">Plain language</p><p>${item.core}</p>${badge('solid')}</div>
      <div><p class="eyebrow">Brain areas</p><p>${item.anatomy}</p>${badge(item.label)}</div>
      <div><p class="eyebrow">Science status</p><p>${item.science}</p>${badge(item.label)}</div>
    </div>`;
}

function renderRegion(regionKey) {
  const region = regions[regionKey];
  document.getElementById('regionPanel').innerHTML = `
    <h3>${region.title}</h3>
    ${badge(region.label)}
    <p><strong>Everyday job:</strong> ${region.role}</p>
    <p><strong>Why it can matter:</strong></p>
    <ul>${region.why.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function renderTab(tabKey) {
  const target = document.getElementById(`${tabKey}Panel`);
  const cards = tabKey === 'nt' ? (neurotransmittersByCondition[selectedConditionKey] || tabContent.nt) : tabContent[tabKey];
  target.innerHTML = `<div class="pathway-grid">${cards.map(([title, text, label]) => `
    <article class="pathway-card">
      <h3><span>${title}</span>${badge(label)}</h3>
      <p>${text}</p>
    </article>`).join('')}</div>`;
}

function renderChecklist() {
  document.getElementById('checklist').innerHTML = checklistItems.map((item, index) => `
    <label class="check-item">
      <input type="checkbox" data-check="${index}" />
      <span>${item}</span>
    </label>`).join('');
}

function renderQuiz() {
  document.getElementById('quiz').innerHTML = quizItems.map((item, questionIndex) => `
    <article class="question-card">
      <h3>${item.q}</h3>
      <div class="option-row">
        ${item.options.map((option, optionIndex) => `<button class="quiz-option" type="button" data-question="${questionIndex}" data-option="${optionIndex}">${option}</button>`).join('')}
      </div>
      <p class="feedback" id="feedback-${questionIndex}" aria-live="polite"></p>
    </article>`).join('');
}

function initNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
}

function initInteractions() {
  document.querySelectorAll('.condition-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.condition-card').forEach(item => {
        item.classList.remove('active');
        item.setAttribute('aria-pressed', 'false');
      });
      card.classList.add('active');
      card.setAttribute('aria-pressed', 'true');
      renderCondition(card.dataset.condition);
      renderTab('nt');
    });
  });

  document.querySelectorAll('.brain-node').forEach(node => {
    node.addEventListener('click', () => {
      document.querySelectorAll('.brain-node').forEach(item => item.classList.remove('active'));
      node.classList.add('active');
      renderRegion(node.dataset.region);
    });
  });

  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-button').forEach(item => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
        panel.hidden = true;
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
      const panel = document.getElementById(`${button.dataset.tab}Panel`);
      panel.hidden = false;
      panel.classList.add('active');
    });
  });

  document.getElementById('resetChecklist').addEventListener('click', () => {
    document.querySelectorAll('#checklist input').forEach(input => { input.checked = false; });
  });

  document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', () => {
      const questionIndex = Number(option.dataset.question);
      const selected = Number(option.dataset.option);
      const question = quizItems[questionIndex];
      document.querySelectorAll(`[data-question="${questionIndex}"]`).forEach(item => {
        item.classList.remove('correct', 'incorrect');
      });
      option.classList.add(selected === question.answer ? 'correct' : 'incorrect');
      document.getElementById(`feedback-${questionIndex}`).textContent = selected === question.answer ? question.feedback : 'Not quite. Try another answer and talk through why.';
    });
  });
}

renderCondition('delirium');
renderRegion('prefrontal');
Object.keys(tabContent).forEach(renderTab);
renderChecklist();
renderQuiz();
initNavigation();
initInteractions();
