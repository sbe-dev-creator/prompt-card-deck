  (function(){
    const MAX_SELECTION = 3;
    const selectedIds = [];
    const workflows = [
      {
        key: 'campaign-launch-stack',
        bucket: 'Launch',
        ids: ['Email Builder','Landing Page Builder','Subject Line Generator'],
        title: 'Campaign Launch Stack',
        text: 'A practical launch sequence for building the email, tightening the landing page and sharpening the subject line.',
        inputs: [
          'Campaign or event: ______',
          'Audience / persona: ______',
          'Goal: ______',
          'Core message: ______'
        ],
        example: [
          'Subject line: From pilot to production: what AI leaders need next',
          'Preheader: Join the EMEA conversation on the foundations that make AI scalable.',
          'Landing page hero: Move from AI pilots to production with stronger data foundations.',
          'CTA: Save your seat'
        ].join('\n'),
        prompt: function(){ return [
          'Act as a senior field marketer building a campaign launch workflow.',
          '',
          'Use the shared inputs below once, then complete each step in order.',
          '',
          'Shared inputs',
          '- Campaign or event: [campaign]',
          '- Audience / persona: [persona]',
          '- Goal: [register / attend / engage]',
          '- Core message: [message]',
          '',
          'Step 1 — Email Builder',
          'Write a concise campaign email under 125 words with a clear subject line and preheader. Keep the tone professional and understated.',
          '',
          'Step 2 — Landing Page Builder',
          'Write the landing page hero copy, supporting copy, CTA and 3 bullet-point reasons to act now. Keep the messaging aligned with the same campaign and audience.',
          '',
          'Step 3 — Subject Line Generator',
          'Generate 5 subject lines and 5 matching preheaders for the same campaign. Include a one-line rationale for the 2 strongest options.',
          '',
          'Return the output in sequence with clear headings.'
        ].join('\n'); }
      },
      {
        key: 'event-promotion-sprint',
        bucket: 'Launch',
        ids: ['Webinar Abstract Builder','LinkedIn Post Engine','Email Builder'],
        title: 'Event Promotion Sprint',
        text: 'A focused promotion workflow for turning one event into a clean abstract, social copy and launch email.',
        inputs: [
          'Event name: ______',
          'Audience / persona: ______',
          'Topic or theme: ______',
          'CTA: ______'
        ],
        example: [
          'Webinar abstract: A practical session on how data leaders are reducing AI friction before scale.',
          'LinkedIn hook: Most AI pilots do not fail in the model. They fail in the foundations.',
          'Email CTA: Register now'
        ].join('\n'),
        prompt: function(){ return [
          'Act as a senior field marketer promoting an event across channels.',
          '',
          'Use the shared inputs below once, then complete each step in order.',
          '',
          'Shared inputs',
          '- Event name: [event]',
          '- Audience / persona: [persona]',
          '- Topic or theme: [topic]',
          '- CTA: [register / save your seat / watch on-demand]',
          '',
          'Step 1 — Webinar Abstract Builder',
          'Write a webinar abstract, short description and 3 learning points for the event.',
          '',
          'Step 2 — LinkedIn Post Engine',
          'Write 3 LinkedIn post variations with different hooks to promote the same event. Keep each variation under 120 words and avoid buzzwords.',
          '',
          'Step 3 — Email Builder',
          'Write a promotional email for the same event with subject line, preheader and a simple CTA.',
          '',
          'Return the output in sequence with clear headings.'
        ].join('\n'); }
      },
      {
        key: 'campaign-localisation-sprint',
        bucket: 'Launch',
        ids: ['Translate Campaign Assets','Email Optimiser','Landing Page Builder'],
        title: 'Campaign Localisation Sprint',
        text: 'A localisation workflow for adapting campaign assets cleanly across markets without losing the original intent.',
        inputs: [
          'Original campaign or event: ______',
          'Source language: ______',
          'Target market / language: ______',
          'Audience / persona: ______',
          'Desired tone: ______'
        ],
        example: [
          'Translated CTA: Découvrez comment industrialiser l’IA sur des bases plus fiables.',
          'Email refinement: tightened for local readability and inbox clarity.',
          'Landing page hero adapted to feel locally written rather than translated.'
        ].join('\n'),
        prompt: function(){ return [
          'Act as a field marketer localising a campaign for another market.',
          '',
          'Use the shared inputs below once, then complete each step in order.',
          '',
          'Shared inputs',
          '- Original campaign or event: [campaign]',
          '- Source language: [language]',
          '- Target market / language: [market]',
          '- Audience / persona: [persona]',
          '- Desired tone: [tone]',
          '',
          'Step 1 — Translate Campaign Assets',
          'Translate the campaign asset into the target market language. Keep the meaning intact but make the wording natural for that market.',
          '',
          'Step 2 — Email Optimiser',
          'Refine the translated email copy for clarity, flow and credibility. Also provide 3 improved subject lines.',
          '',
          'Step 3 — Landing Page Builder',
          'Adapt the landing page hero copy, CTA and support copy so the page feels locally written rather than directly translated.',
          '',
          'Return the output in sequence with clear headings.'
        ].join('\n'); }
      },
      {
        key: 'executive-event-briefing-pack',
        bucket: 'Launch',
        ids: ['Persona Insight Builder','Messaging Architect','Campaign Challenger'],
        title: 'Executive Event Briefing Pack',
        text: 'A senior-level preparation workflow for shaping the message, pressure-testing it and turning it into practical event talking points.',
        inputs: [
          'Event or meeting: ______',
          'Audience / persona: ______',
          'Industry or account context: ______',
          'Strategic theme: ______',
          'Desired outcome: ______'
        ],
        example: [
          'Priority: reduce AI risk without slowing decision-making.',
          'Core message: trusted data foundations matter before scale.',
          'Sceptical question: what is genuinely different here versus another data platform?'
        ].join('\n'),
        prompt: function(){ return [
          'Act as a senior field marketer preparing an executive briefing pack for an event.',
          '',
          'Use the shared inputs below once, then complete each step in order.',
          '',
          'Shared inputs',
          '- Event or meeting: [event]',
          '- Audience / persona: [persona]',
          '- Industry or account context: [industry or account]',
          '- Strategic theme: [theme]',
          '- Desired outcome: [outcome]',
          '',
          'Step 1 — Persona Insight Builder',
          'Summarise the persona priorities, likely challenges, buying triggers and what will matter most in a live conversation.',
          '',
          'Step 2 — Messaging Architect',
          'Create one core message, 3 supporting angles, the key problem being solved and why it matters now for this audience.',
          '',
          'Step 3 — Campaign Challenger',
          'Pressure-test the angle. Highlight the main risks, the questions a sceptical executive may raise and the sharper talking points to use instead.',
          '',
          'Return the output as an executive briefing pack with sections for audience insight, message, objections and conversation hooks.'
        ].join('\n'); }
      },
      {
        key: 'campaign-differentiation-sprint',
        bucket: 'Launch',
        ids: ['Campaign Ideator','Messaging Architect','Campaign Challenger'],
        title: 'Campaign Differentiation Sprint',
        text: 'A sharp workflow for generating campaign directions, selecting the strongest angle and pressure-testing it before launch.',
        inputs: [
          'Objective: ______',
          'Audience / persona: ______',
          'Theme or market issue: ______',
          'Region or segment: ______'
        ],
        example: [
          'Recommended angle: move from AI momentum to defensible production foundations.',
          'Supporting angle: reduce cost, data movement and governance friction.',
          'Risk flagged: too generic unless the message names a real tension.'
        ].join('\n'),
        prompt: function(){ return [
          'Act as a senior field marketing strategist running a campaign differentiation sprint.',
          '',
          'Use the shared inputs below once, then complete each step in order.',
          '',
          'Shared inputs',
          '- Objective: [goal]',
          '- Audience / persona: [persona]',
          '- Theme or market issue: [theme]',
          '- Region or segment: [region]',
          '',
          'Step 1 — Campaign Ideator',
          'Generate 5 campaign ideas for the brief. For each, explain the concept, why it works and the suggested channels.',
          '',
          'Step 2 — Messaging Architect',
          'Take the strongest idea and turn it into one core message, 3 supporting angles, the key problem being solved and why it matters now.',
          '',
          'Step 3 — Campaign Challenger',
          'Challenge the chosen angle. Identify the main weaknesses, assumptions and buyer objections, then sharpen the positioning.',
          '',
          'Return the output in sequence with a final recommendation on which angle should be taken forward and why.'
        ].join('\n'); }
      },
      {
        key: 'abx-outreach-play',
        bucket: 'Engage',
        ids: ['ABX Personaliser','Sales Follow-Up Builder','Campaign Challenger'],
        title: 'ABX Outreach Play',
        text: 'A high-value account workflow that builds the message, follows up intelligently and then pressure-tests the angle.',
        inputs: [
          'Account: ______',
          'Industry: ______',
          'Persona / role: ______',
          'Outreach goal: ______',
          'Relevant angle or trigger: ______'
        ],
        example: [
          'Priority: reduce data complexity before AI expansion.',
          'First-touch angle: connect current transformation pressure to a relevant data foundation conversation.',
          'Follow-up CTA: open to a short architecture discussion next week?'
        ].join('\n'),
        prompt: function(){ return [
          'Act as a strategic account marketer running an ABX outreach play.',
          '',
          'Use the shared inputs below once, then complete each step in order.',
          '',
          'Shared inputs',
          '- Account: [company]',
          '- Industry: [industry]',
          '- Persona / role: [role]',
          '- Outreach goal: [goal]',
          '- Relevant angle or trigger: [trigger]',
          '',
          'Step 1 — ABX Personaliser',
          'Create a tailored outreach message for the account, including likely priorities and a relevant angle.',
          '',
          'Step 2 — Sales Follow-Up Builder',
          'Write a concise follow-up email for the same account if there is no response after the first message.',
          '',
          'Step 3 — Campaign Challenger',
          'Pressure-test the angle. Identify the main weaknesses, assumptions and sceptical questions a buyer could raise, then sharpen the positioning.',
          '',
          'Return the output in sequence with clear headings.'
        ].join('\n'); }
      },
      {
        key: 'content-repurposing-engine',
        bucket: 'Engage',
        ids: ['Blog Post Writer','SEO Optimiser','Content Multiplier'],
        title: 'Content Repurposing Engine',
        text: 'A content workflow that creates the core article, improves findability and then repurposes it across channels.',
        inputs: [
          'Topic: ______',
          'Audience / persona: ______',
          'Primary keyword: ______',
          'Goal: ______'
        ],
        example: [
          'Blog angle: trusted data is what makes AI usable at scale.',
          'Meta title: Trusted data foundations for enterprise AI scale',
          'Repurposed output: 3 LinkedIn posts, 3 quotes, 1 email snippet, 1 carousel outline.'
        ].join('\n'),
        prompt: function(){ return [
          'Act as a content strategist building a repurposing workflow.',
          '',
          'Use the shared inputs below once, then complete each step in order.',
          '',
          'Shared inputs',
          '- Topic: [topic]',
          '- Audience / persona: [persona]',
          '- Primary keyword: [keyword]',
          '- Goal: [thought leadership / registrations / demand]',
          '',
          'Step 1 — Blog Post Writer',
          'Write a blog post outline and first draft on the topic for the audience.',
          '',
          'Step 2 — SEO Optimiser',
          'Optimise the same blog post for search visibility, including a suggested meta title and meta description.',
          '',
          'Step 3 — Content Multiplier',
          'Repurpose the same blog into 3 LinkedIn posts, 3 short quotes, 1 email snippet and 1 short carousel outline.',
          '',
          'Return the output in sequence with clear headings.'
        ].join('\n'); }
      },
      {
        key: 'post-event-pipeline-builder',
        bucket: 'Engage',
        ids: ['Event Follow-Up','Sales Follow-Up Builder','ABX Personaliser'],
        title: 'Post-Event Pipeline Builder',
        text: 'A follow-up workflow for turning event momentum into more relevant outreach and stronger next steps.',
        inputs: [
          'Event: ______',
          'Audience / persona: ______',
          'Key takeaway or talking point: ______',
          'Desired next step: ______',
          'Account or segment context: ______'
        ],
        example: [
          'Follow-up opener: good to continue the conversation from the event.',
          'Takeaway used: AI readiness depends on trusted and current data, not just model choice.',
          'Next step offered: short follow-up meeting with an architect.'
        ].join('\n'),
        prompt: function(){ return [
          'Act as a field marketer building post-event follow-up that creates pipeline.',
          '',
          'Use the shared inputs below once, then complete each step in order.',
          '',
          'Shared inputs',
          '- Event: [event]',
          '- Audience / persona: [persona]',
          '- Key takeaway or talking point: [takeaway]',
          '- Desired next step: [meeting / resource / demo]',
          '- Account or segment context: [account or segment]',
          '',
          'Step 1 — Event Follow-Up',
          'Write a post-event follow-up email that references the event, highlights one key takeaway and offers one clear next step.',
          '',
          'Step 2 — Sales Follow-Up Builder',
          'Write a concise seller follow-up for the same audience if there is no reply after the first message.',
          '',
          'Step 3 — ABX Personaliser',
          'Tailor the outreach for a high-priority account or segment using the same event context and next step.',
          '',
          'Return the output in sequence with clear headings.'
        ].join('\n'); }
      },
      {
        key: 'thought-leadership-engine',
        bucket: 'Engage',
        ids: ['Blog Post Writer','LinkedIn Post Engine','Carousel Creator'],
        title: 'Thought Leadership Engine',
        text: 'A narrative workflow for turning one strong idea into a blog article, social posts and a visual carousel.',
        inputs: [
          'Topic: ______',
          'Audience / persona: ______',
          'Core point of view: ______',
          'CTA or desired action: ______'
        ],
        example: [
          'Blog thesis: production AI exposes weak foundations faster than pilots do.',
          'LinkedIn hook: pilots create momentum, production reveals the architecture.',
          'Carousel CTA: continue the conversation with the full guide or event registration.'
        ].join('\n'),
        prompt: function(){ return [
          'Act as a field marketer building a thought leadership engine from one strong idea.',
          '',
          'Use the shared inputs below once, then complete each step in order.',
          '',
          'Shared inputs',
          '- Topic: [topic]',
          '- Audience / persona: [persona]',
          '- Core point of view: [point of view]',
          '- CTA or desired action: [cta]',
          '',
          'Step 1 — Blog Post Writer',
          'Write a blog post outline and first draft on the topic for the audience, with a clear point of view and a practical takeaway.',
          '',
          'Step 2 — LinkedIn Post Engine',
          'Write 3 LinkedIn post variations drawn from the same article. Use different hooks but keep the argument consistent.',
          '',
          'Step 3 — Carousel Creator',
          'Turn the same idea into a 4-slide carousel with a hook, insight, implication and CTA.',
          '',
          'Return the output in sequence with clear headings.'
        ].join('\n'); }
      },
      {
        key: 'seo-content-optimisation-loop',
        bucket: 'Optimise',
        ids: ['Blog Post Writer','SEO Optimiser','Performance Analyser'],
        title: 'SEO Content Optimisation Loop',
        text: 'A focused workflow for drafting an article, improving search visibility and then analysing how strong the asset is before publishing.',
        inputs: [
          'Topic: ______',
          'Audience / persona: ______',
          'Primary keyword: ______',
          'Search intent: ______',
          'Goal: ______'
        ],
        example: [
          'H1: How to strengthen AI readiness with trusted data foundations',
          'Meta description: Practical ways to reduce data friction and improve enterprise AI execution.',
          'Performance score: 8.2/10 with improvements suggested for hook and specificity.'
        ].join('\n'),
        prompt: function(){ return [
          'Act as a content strategist running an SEO content optimisation loop.',
          '',
          'Use the shared inputs below once, then complete each step in order.',
          '',
          'Shared inputs',
          '- Topic: [topic]',
          '- Audience / persona: [persona]',
          '- Primary keyword: [keyword]',
          '- Search intent: [informational / commercial / comparison]',
          '- Goal: [traffic / awareness / conversions]',
          '',
          'Step 1 — Blog Post Writer',
          'Write a blog post outline and first draft on the topic for the audience.',
          '',
          'Step 2 — SEO Optimiser',
          'Optimise the same draft for search visibility, including suggested H1 and H2 structure, meta title, meta description and keyword placement advice.',
          '',
          'Step 3 — Performance Analyser',
          'Analyse the draft and score how strong it is in terms of hook, clarity, relevance and engagement potential. Then suggest the main improvements before publishing.',
          '',
          'Return the output in sequence with clear headings.'
        ].join('\n'); }
      }
    ];

    function byId(id){ return document.getElementById(id); }
    const selectedWrap = byId('play-selected');
    const playCount = byId('play-count');
    const comboBanner = byId('combo-banner');
    const comboTitle = byId('combo-title');
    const comboText = byId('combo-text');
    const playOutput = byId('play-output');
    const playOutputText = byId('play-output-text');
    const playStatus = byId('play-status');
    const generateBtn = byId('generate-play-btn');
    const copyPlayBtn = byId('copy-play-btn');
    const copyWithInputsBtn = byId('copy-with-inputs-btn');
    const clearPlayBtn = byId('clear-play-btn');
    const workflowSelect = byId('workflow-select');
    const languageSelect = byId('language-select');

    const languageOptions = {
      'en-GB': { label: 'British English', instruction: 'Deliver the final output in British English. Use British English spelling, grammar and tone throughout, including conventions such as organisation, programme and localisation.' },
      'en-US': { label: 'American English', instruction: 'Deliver the final output in American English. Use American English spelling, grammar and tone throughout, including conventions such as organization, program and localization.' },
      'fr-FR': { label: 'French', instruction: 'Deliver the final output in French. Use natural, idiomatic French appropriate for a professional B2B audience. Adapt phrasing for the market rather than translating literally.' },
      'de-DE': { label: 'German', instruction: 'Deliver the final output in German. Use natural, idiomatic German appropriate for a professional B2B audience. Adapt phrasing for the market rather than translating literally.' },
      'it-IT': { label: 'Italian', instruction: 'Deliver the final output in Italian. Use natural, idiomatic Italian appropriate for a professional B2B audience. Adapt phrasing for the market rather than translating literally.' },
      'ja-JP': { label: 'Japanese', instruction: 'Deliver the final output in Japanese. Use natural, idiomatic Japanese appropriate for a professional B2B audience. Adapt phrasing for the market rather than translating literally.' },
      'pt-BR': { label: 'Portuguese (Brazil)', instruction: 'Deliver the final output in Brazilian Portuguese. Use natural, idiomatic Brazilian Portuguese appropriate for a professional B2B audience. Adapt phrasing for the market rather than translating literally.' },
      'es-ES': { label: 'Spanish (Spain)', instruction: 'Deliver the final output in Spanish for Spain. Use natural, idiomatic European Spanish appropriate for a professional B2B audience. Adapt phrasing for the market rather than translating literally.' },
      'es-LATAM': { label: 'Spanish (LATAM)', instruction: 'Deliver the final output in neutral Latin American Spanish. Use natural, idiomatic language appropriate for a professional B2B audience and avoid country-specific slang unless the user asks for it.' }
    };
    const loadWorkflowBtn = byId('load-workflow-btn');
    const startPlayBtn = byId('start-play-btn');

    function detectPreferredLanguageOption(){
      const browserLang = ((navigator.language || navigator.userLanguage || '') + '').toLowerCase();

      if (browserLang.startsWith('en-gb')) return 'en-GB';
      if (browserLang.startsWith('en-us')) return 'en-US';
      if (browserLang.startsWith('fr')) return 'fr-FR';
      if (browserLang.startsWith('de')) return 'de-DE';
      if (browserLang.startsWith('it')) return 'it-IT';
      if (browserLang.startsWith('ja')) return 'ja-JP';
      if (browserLang.startsWith('pt-br')) return 'pt-BR';
      if (
        browserLang.startsWith('es-mx') ||
        browserLang.startsWith('es-ar') ||
        browserLang.startsWith('es-co') ||
        browserLang.startsWith('es-cl') ||
        browserLang.startsWith('es-pe') ||
        browserLang.startsWith('es-uy') ||
        browserLang.startsWith('es-ec') ||
        browserLang.startsWith('es-ve') ||
        browserLang.startsWith('es-cr') ||
        browserLang.startsWith('es-pa') ||
        browserLang.startsWith('es-do') ||
        browserLang.startsWith('es-gt') ||
        browserLang.startsWith('es-sv') ||
        browserLang.startsWith('es-hn') ||
        browserLang.startsWith('es-ni') ||
        browserLang.startsWith('es-pr') ||
        browserLang.startsWith('es-bo') ||
        browserLang.startsWith('es-py')
      ) return 'es-LATAM';
      if (browserLang.startsWith('es')) return 'es-ES';

      return 'en-GB';
    }

    function initialiseLanguagePreference(){
      if (!languageSelect) return;

      try {
        const savedLanguage = localStorage.getItem('qlikPromptDeckLanguage');
        if (savedLanguage && languageOptions[savedLanguage]) {
          languageSelect.value = savedLanguage;
        } else {
          const detectedLanguage = detectPreferredLanguageOption();
          languageSelect.value = languageOptions[detectedLanguage] ? detectedLanguage : 'en-GB';
          localStorage.setItem('qlikPromptDeckLanguage', languageSelect.value);
        }

        languageSelect.addEventListener('change', function(){
          localStorage.setItem('qlikPromptDeckLanguage', this.value);
        });
      } catch (error) {
        languageSelect.value = languageOptions[detectPreferredLanguageOption()] ? detectPreferredLanguageOption() : 'en-GB';
      }
    }

    const toggleExampleBtn = byId('toggle-example-btn');
    const playOutputWithInputsText = byId('play-output-with-inputs-text');
    const playExample = byId('play-example');
    const playExampleText = byId('play-example-text');
    let activeWorkflowKey = '';

    const cards = Array.from(document.querySelectorAll('.card-flip')).map(function(flip, index){
      const front = flip.querySelector('.card.front');
      const back = flip.querySelector('.card.back');
      const title = (back.querySelector('.back-title') || {}).textContent || 'Card';
      const meta = (back.querySelector('.back-meta') || {}).textContent || '';
      const type = (front.querySelector('.type-pill') || {}).textContent || '';
      const promptArea = back.querySelector('textarea.sr-only');
      const prompt = promptArea ? promptArea.value.trim() : '';
      const cardId = 'card-' + String(index + 1).padStart(2,'0');
      flip.dataset.cardId = cardId;
      flip.dataset.cardTitle = title;
      flip.dataset.cardMeta = meta;
      flip.dataset.cardType = type;
      flip.dataset.cardPrompt = prompt;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'card-select-btn';
      btn.setAttribute('data-card-id', cardId);
      btn.setAttribute('aria-pressed', 'false');
      btn.innerHTML = '<span class="plus">+</span><span>Select</span>';
      front.querySelector('.front-frame').appendChild(btn);

      return { id: cardId, title: title, meta: meta, type: type, prompt: prompt, flip: flip, front: front, btn: btn };
    });

    function escapeHtml(str){
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }
    function getCard(id){ return cards.find(function(card){ return card.id === id; }); }
    function getCardByTitle(title){ return cards.find(function(card){ return card.title === title; }); }
    function currentCards(){ return selectedIds.map(getCard).filter(Boolean); }
    function currentWorkflow(){ return workflows.find(function(workflow){ return workflow.key === activeWorkflowKey; }); }

    function workflowMatchFromSelection(){
      const selectedTitles = currentCards().map(function(card){ return card.title; }).sort();
      return workflows.find(function(workflow){
        return workflow.ids.length === selectedTitles.length && workflow.ids.slice().sort().every(function(title, i){ return title === selectedTitles[i]; });
      }) || null;
    }

    function defaultInputTemplate(){
      return [
        'Campaign or initiative: ______',
        'Audience / persona: ______',
        'Goal: ______',
        'Region or market: ______',
        'Additional context: ______'
      ];
    }

    function buildPromptWithInputs(prompt){
      const workflow = currentWorkflow() || workflowMatchFromSelection();
      const inputs = workflow && workflow.inputs && workflow.inputs.length ? workflow.inputs : defaultInputTemplate();
      return ['Shared inputs', inputs.map(function(item){ return '- ' + item; }).join('\n'), '', prompt].join('\n');
    }

    function appendLanguageConstraint(baseText){
      const text = (baseText || '').trim();
      if (!text) return '';
      const selected = languageSelect && languageSelect.value ? languageSelect.value : 'en-GB';
      const option = languageOptions[selected] || languageOptions['en-GB'];
      const instruction = option && option.instruction ? option.instruction : '';
      if (!instruction) return text;

      const normalizedText = text.replace(/\s+$/, '');
      const escapedInstruction = instruction.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const alreadyIncluded = new RegExp(escapedInstruction + '$').test(normalizedText);
      if (alreadyIncluded) return normalizedText;

      return [
        normalizedText,
        '',
        'Output language requirement:',
        instruction
      ].join('\n');
    }

    function updateExamplePanel(){
      const workflow = currentWorkflow() || workflowMatchFromSelection();
      if (workflow && workflow.example) {
        playExampleText.textContent = workflow.example;
        toggleExampleBtn.disabled = false;
      } else {
        playExampleText.textContent = 'Examples are available for the guided workflows. Load one from the dropdown to preview a realistic output.';
        toggleExampleBtn.disabled = true;
        playExample.classList.remove('active');
        toggleExampleBtn.textContent = 'What you will get';
      }
    }


    function updateCombo(){
      const workflow = workflowMatchFromSelection();
      if (workflow){
        comboTitle.textContent = workflow.title;
        comboText.textContent = workflow.text;
        comboBanner.classList.add('active');
      } else {
        comboBanner.classList.remove('active');
      }
    }

    function updatePlayUI(){
      playCount.textContent = selectedIds.length + ' / ' + MAX_SELECTION + ' selected';
      selectedWrap.innerHTML = '';
      if (!selectedIds.length){
        selectedWrap.innerHTML = '<div class="play-empty">Choose up to 3 cards from the deck or load a guided workflow. The strongest plays usually combine one creation card, one refinement card and one scale or challenge card.</div>' ;
      } else {
        currentCards().forEach(function(card){
          const chip = document.createElement('div');
          chip.className = 'play-chip';
          chip.innerHTML = '<div class="play-chip-meta"><div class="play-chip-level">' + escapeHtml(card.meta) + ' · ' + escapeHtml(card.type) + '</div><div class="play-chip-title">' + escapeHtml(card.title) + '</div></div><button class="play-chip-remove" type="button" aria-label="Remove ' + escapeHtml(card.title) + '" data-remove-card="' + card.id + '">×</button>' ;
          selectedWrap.appendChild(chip);
        });
      }
      cards.forEach(function(card){
        const active = selectedIds.indexOf(card.id) > -1;
        card.front.classList.toggle('has-play-selected', active);
        card.btn.classList.toggle('is-selected', active);
        card.btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        card.btn.querySelector('span:last-child').textContent = active ? 'Selected' : 'Select';
      });
      generateBtn.disabled = selectedIds.length < 2;
      updateCombo();
      updateExamplePanel();
    }

    function toggleCardSelection(cardId){
      activeWorkflowKey = '';
      if (workflowSelect) workflowSelect.value = '';
      const idx = selectedIds.indexOf(cardId);
      if (idx > -1){
        selectedIds.splice(idx, 1);
      } else {
        if (selectedIds.length >= MAX_SELECTION){
          playStatus.textContent = 'You can combine up to 3 cards at a time.';
          return;
        }
        selectedIds.push(cardId);
      }
      updatePlayUI();
    }

    function clearSelection(){
      selectedIds.length = 0;
      activeWorkflowKey = '';
      if (workflowSelect) workflowSelect.value = '';
      updatePlayUI();
      playStatus.textContent = 'Build a play, then copy it into ChatGPT.';
    }

    function loadWorkflow(){
      const key = workflowSelect ? workflowSelect.value : '';
      if (!key) {
        playStatus.textContent = 'Choose a workflow first.';
        return;
      }
      const workflow = workflows.find(function(item){ return item.key === key; });
      if (!workflow) return;
      selectedIds.length = 0;
      workflow.ids.forEach(function(title){
        const card = getCardByTitle(title);
        if (card && selectedIds.indexOf(card.id) === -1 && selectedIds.length < MAX_SELECTION) selectedIds.push(card.id);
      });
      activeWorkflowKey = workflow.key;
      updatePlayUI();
      renderGeneratedPlay();
      playStatus.textContent = workflow.title + ' loaded with shared inputs requested only once.';
    }

    function buildGenericPrompt(){
      const cardsInPlay = currentCards();
      if (cardsInPlay.length < 2){ return ''; }
      const intro = [
        'Act as a senior field marketer using a chained play.',
        '',
        'Work through the following steps in order and keep the output practical, specific and ready to use.',
        ''
      ].join('\n');
      const steps = cardsInPlay.map(function(card, index){
        return 'Step ' + (index + 1) + ' — ' + card.title + '\n' + card.prompt;
      }).join('\n\n');
      const outro = '\n\nReturn the output in sequence. Keep each step clearly labelled.';
      return intro + steps + outro;
    }

    function buildCombinedPrompt(){
      const workflow = currentWorkflow() || workflowMatchFromSelection();
      if (workflow) return workflow.prompt();
      return buildGenericPrompt();
    }

    function renderGeneratedPlay(){
      const prompt = buildCombinedPrompt();
      if (!prompt){
        playOutput.innerHTML = '<span class="play-output-placeholder">Your combined play will appear here.</span>';
        playOutputText.value = '';
        playOutputWithInputsText.value = '';
        copyPlayBtn.disabled = true;
        if (copyWithInputsBtn) copyWithInputsBtn.disabled = true;
        return;
      }
      playOutput.textContent = prompt;
      playOutputText.value = prompt;
      playOutputWithInputsText.value = buildPromptWithInputs(prompt);
      copyPlayBtn.disabled = false;
      if (copyWithInputsBtn) copyWithInputsBtn.disabled = false;
      const workflow = currentWorkflow() || workflowMatchFromSelection();
      playStatus.textContent = workflow ? (workflow.title + ' generated as one guided play.') : (currentCards().length + ' cards combined into one reusable play.');
    }

    function copyFromTextarea(textarea, button, normalLabel, copiedLabel){
      const text = appendLanguageConstraint(textarea.value);
      if (!text) return;
      const original = button.textContent;
      function copied(){
        button.textContent = copiedLabel;
        setTimeout(function(){ button.textContent = normalLabel || original; }, 1800);
      }
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(copied).catch(fallback);
      } else { fallback(); }
      function fallback(){
        const helper = document.createElement('textarea');
        try {
          helper.value = text;
          helper.setAttribute('readonly', '');
          helper.style.position = 'fixed';
          helper.style.top = '0';
          helper.style.opacity = '0';
          document.body.appendChild(helper);
          helper.focus();
          helper.select();
          helper.setSelectionRange(0, text.length);
          document.execCommand('copy');
          helper.blur();
          copied();
        } catch (e) {
          button.textContent = 'Select manually';
        } finally {
          if (helper.parentNode) helper.parentNode.removeChild(helper);
        }
      }
    }

    document.addEventListener('click', function(e){
      const playSelect = e.target.closest('.card-select-btn');
      if (playSelect) {
        e.preventDefault();
        e.stopPropagation();
        toggleCardSelection(playSelect.dataset.cardId);
        return;
      }

      const removeChip = e.target.closest('[data-remove-card]');
      if (removeChip){
        toggleCardSelection(removeChip.dataset.removeCard);
        return;
      }

      const tabBtn = e.target.closest('.tab-btn');
      if (tabBtn) {
        const tabId = tabBtn.dataset.tab;
        document.querySelectorAll('.tab-btn').forEach(function(btn){
          const active = btn === tabBtn;
          btn.classList.toggle('active', active);
          btn.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        document.querySelectorAll('.tab-panel').forEach(function(panel){
          const active = panel.id === 'panel-' + tabId;
          panel.classList.toggle('active', active);
          panel.hidden = !active;
        });
        return;
      }

      const closeBtn = e.target.closest('.close-btn');
      if (closeBtn) {
        const flip = closeBtn.closest('.card-flip');
        if (flip) flip.classList.remove('is-flipped');
        return;
      }

      const frontCard = e.target.closest('.card.front');
      if (frontCard) {
        const flip = frontCard.closest('.card-flip');
        if (flip) flip.classList.add('is-flipped');
        return;
      }

      const btn = e.target.closest('.copy-btn');
      if (btn) {
        const targetId = btn.dataset.target;
        const ta = document.getElementById(targetId);
        if (!ta) return;
        const label = btn.querySelector('span:last-child');
        const originalText = label.textContent;
        copyFromTextarea(ta, label, originalText, 'Copied');
        return;
      }

      if (e.target.id === 'generate-play-btn') {
        renderGeneratedPlay();
        return;
      }
      if (e.target.id === 'copy-play-btn') {
        copyFromTextarea(playOutputText, e.target, 'Copy play', 'Copied');
        return;
      }
      if (e.target.id === 'copy-with-inputs-btn') {
        copyFromTextarea(playOutputWithInputsText, e.target, 'Copy with inputs', 'Copied');
        return;
      }
      if (e.target.id === 'toggle-example-btn') {
        const active = playExample.classList.toggle('active');
        e.target.textContent = active ? 'Hide example output' : 'What you will get';
        return;
      }
      if (e.target.id === 'start-play-btn') {
        if (workflowSelect) workflowSelect.value = 'campaign-launch-stack';
        loadWorkflow();
        return;
      }
      if (e.target.id === 'clear-play-btn') {
        clearSelection();
        renderGeneratedPlay();
        return;
      }
      if (e.target.id === 'load-workflow-btn') {
        loadWorkflow();
        return;
      }
    });

    document.addEventListener('keydown', function(e){
      const frontCard = e.target.closest('.card.front');
      if (frontCard && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        const flip = frontCard.closest('.card-flip');
        if (flip) flip.classList.add('is-flipped');
      }
    });

    initialiseLanguagePreference();
    if (workflowSelect) workflowSelect.value = 'campaign-launch-stack';
    updatePlayUI();
    updateExamplePanel();
  })();
