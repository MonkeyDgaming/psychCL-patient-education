# psychCL-patient-education

A mobile-friendly, patient-facing education prototype for explaining delirium, dementia, and psychosis in plain language while clearly separating:

- **Solid evidence**: broadly accepted clinical or research findings.
- **Likely / still studied**: plausible explanations supported by research but still incomplete or variable.
- **Teaching metaphor**: simplified analogies that help patients and family members remember key ideas.

## Files

- `index.html` — static page structure, content sections, selected references, and accessibility landmarks.
- `styles.css` — responsive phone/tablet layout, evidence labels, cards, and simplified brain-map styling.
- `script.js` — interactive condition cards, tappable neuroanatomy map, pathway tabs, checklist, and teach-back quiz.

## Local preview

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Clinical-use note

This is an educational prototype and should be reviewed, customized, and maintained by clinicians before being shared with patients or family members. It is not a diagnostic tool and does not replace urgent care or individualized medical advice.
