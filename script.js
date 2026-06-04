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

const regions = {
  prefrontal: {
    title: 'Prefrontal cortex',
    role: 'Helps with planning, judgment, impulse control, reality testing, flexible thinking, and holding goals in mind.',
    why: ['Delirium can weaken attention and executive control.', 'TBI can cause executive dysfunction: trouble initiating, organizing, multitasking, or inhibiting responses.', 'Mania can involve disinhibition, impulsive risk-taking, and reduced pause-before-action control.', 'MDD can bring slowed thinking, indecision, and negative-bias filtering of information.', 'Dementia can affect planning, insight, social judgment, or behavior.', 'Psychosis research often includes altered prefrontal control over salience and reward circuits.'],
    label: 'solid'
  },
  temporal: {
    title: 'Temporal lobe',
    role: 'Supports language, meaning, memory connections, emotion-linked memories, and some sensory interpretations.',
    why: ['Temporal-language systems can be relevant to auditory hallucinations.', 'TBI can affect temporal networks involved in memory, irritability, anxiety, or emotion-linked symptoms.', 'Severe mood disorders can include psychotic features when applicable, such as mood-congruent voices or beliefs.', 'Several dementias affect temporal regions and language or memory.', 'Seizures or inflammation in this region can sometimes mimic psychiatric symptoms.'],
    label: 'likely'
  },
  hippocampus: {
    title: 'Hippocampus',
    role: 'Helps form new memories and connect details into a timeline.',
    why: ['Alzheimer disease commonly involves memory network injury.', 'Delirium can temporarily disrupt memory encoding because attention is impaired.', 'Depression and chronic stress are linked with memory symptoms and hippocampal stress biology; the exact pathways are likely and still studied.', 'Stress biology can affect hippocampal function, though mechanisms vary.'],
    label: 'solid'
  },
  thalamus: {
    title: 'Thalamus',
    role: 'Acts like a routing hub, helping decide which sensory and body signals reach conscious attention.',
    why: ['Delirium may involve disrupted routing and connectivity.', 'After TBI, thalamic hub or connection disruption may affect arousal, filtering, attention, and information flow.', 'Psychosis research includes thalamic filtering and cerebello-thalamo-cortical networks.', 'Small strokes or metabolic problems involving hubs can have outsized effects.'],
    label: 'likely'
  },
  basal: {
    title: 'Basal ganglia',
    role: 'Helps select actions, habits, reward learning, motivation, psychomotor speed, and salience through loops with the frontal cortex.',
    why: ['Dopamine pathways run through these loops.', 'Reward, drive, psychomotor slowing, and activation states are relevant to mania and MDD as well as psychosis.', 'Psychosis research includes prefrontal-basal ganglia circuit changes.', 'Parkinson disease and Lewy body conditions can affect movement, cognition, sleep, and hallucinations.'],
    label: 'likely'
  },
  brainstem: {
    title: 'Brainstem and arousal systems',
    role: 'Regulates wakefulness, breathing, autonomic tone, and sleep-wake cycling.',
    why: ['Delirium often includes sleep-wake reversal or altered alertness.', 'TBI, mania, and depression can each disrupt sleep-wake regulation, alertness, or daily rhythm.', 'Medications, hypoxia, infection, and metabolic problems can affect arousal.', 'Some dementia syndromes include sleep and visual-perceptual symptoms.'],
    label: 'solid'
  }
};

const tabContent = {
  nt: [
    ['Acetylcholine', 'Attention and memory “tuning.” Low cholinergic activity is a major delirium hypothesis and is important in Alzheimer-related cognitive symptoms.', 'solid'],
    ['Dopamine', 'Salience, movement, reward, motivation, and prediction. Dysregulated dopamine signaling is strongly linked to psychotic symptoms, reward/salience assignment, and some manic activation; it is one target of antipsychotic medicines.', 'solid'],
    ['Glutamate', 'The major excitatory messenger. TBI research includes glutamate-related excitotoxic injury, while NMDA/glutamate theories are also relevant to psychosis and depression research; the clinical story is more complex than a simple high/low level.', 'likely'],
    ['GABA', 'A major inhibitory messenger. Sedatives, withdrawal states, seizures, sleep-wake disruption, and manic activation can alter inhibitory balance and contribute to confusion, agitation, insomnia, or psychotic-like experiences.', 'likely'],
    ['Norepinephrine & serotonin', 'Arousal, stress response, anxiety, mood, sleep, attention, and perception. These systems are central to many MDD treatment models, but delirium and TBI reviews describe variable changes rather than one consistent direction.', 'likely'],
    ['Melatonin & circadian biology', 'Sleep-wake timing matters. Circadian disruption is relevant to mania, depression, delirium, and TBI-related sleep-wake problems; low or mistimed circadian signaling is one proposed contributor to delirium, especially in hospitals.', 'likely']
  ],
  network: [
    ['Default mode network', 'Often discussed in memory, self-reference, daydreaming, Alzheimer disease research, and depression rumination. It is not a single “memory center.”', 'likely'],
    ['Salience network', 'Helps decide what deserves attention. A teaching frame for psychosis is that the “importance detector” may tag neutral events as highly meaningful; this overlaps with reward/salience circuitry.', 'likely'],
    ['Prefrontal-limbic regulation', 'Prefrontal regions help regulate limbic threat, emotion, and stress responses. This framework is relevant to mood disorders, trauma symptoms, and emotion regulation after brain injury.', 'likely'],
    ['Frontoparietal attention network', 'Helps maintain focus and switch tasks. Delirium often looks like this system cannot stay online reliably.', 'likely'],
    ['Cerebello-thalamo-cortical network', 'A research pathway connecting coordination, timing, cognition, and psychosis risk findings.', 'likely'],
    ['Prefrontal-basal ganglia loops', 'Support motivation, habit, action selection, reward learning, drive, and salience. Research links these loops to psychosis, mania, depression, and cognitive symptoms.', 'likely'],
    ['Whole-brain connectivity', 'Delirium may represent a temporary failure of network integration: many systems cannot coordinate under stress. TBI can also cause diffuse network injury, especially when axons and long-range connections are stretched or sheared.', 'likely']
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
  target.innerHTML = `<div class="pathway-grid">${tabContent[tabKey].map(([title, text, label]) => `
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
