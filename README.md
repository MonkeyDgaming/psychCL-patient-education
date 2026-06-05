# psychCL-patient-education

A mobile-friendly, patient-facing brain-and-behavior education prototype for explaining delirium, dementia, psychosis, traumatic brain injury (TBI), mania, and major depressive disorder (MDD) in plain language while clearly separating:

- **Solid evidence**: broadly accepted clinical or research findings.
- **Likely / still studied**: plausible explanations supported by research but still incomplete or variable.
- **Teaching metaphor**: simplified analogies that help patients and family members remember key ideas.

## Files

- `index.html` — static page structure, content sections, selected references, and accessibility landmarks.
- `styles.css` — responsive phone/tablet layout, evidence labels, cards, and simplified brain-map styling.
- `script.js` — interaction layer for the six supported condition cards, tappable neuroanatomy map, pathway tabs, checklist, and teach-back quiz; it is also the planned home for explanation-mode controls and condition-specific neurotransmitter (NT) comparison behavior.

## Local preview

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Clinical-use note

This is an educational prototype and should be reviewed, customized, and maintained by clinicians before being shared with patients or family members. It is not a diagnostic tool and does not replace urgent care or individualized medical advice.
