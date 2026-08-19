# Noeleen Portfolio Website

## Project purpose

This repository contains Noeleen Sisson's personal design portfolio.

The website should present Noeleen as an experienced multidisciplinary designer with strong digital, web, visual and technical design skills.

The portfolio should feel:

- modern
- confident
- editorial
- image-led
- spacious
- polished
- creative without becoming overly experimental

The work itself should remain the main focus.

Avoid making the site feel like a generic agency template.

---

## Current project structure

The project is a static HTML/CSS/JavaScript website hosted with GitHub Pages.

Important files currently include:

- `index.html` — main portfolio/homepage
- `winetourism.html` — Winetourism case study
- `ascenta.html` — Ascenta case study
- `declare-cloud.html` — Declare Cloud case study
- `ocado-brandshops.html` — Ocado Brandshops case study
- `css/agency.css` — main editable site CSS
- `css/agency.min.css` — generated/minified CSS used by the site
- `js/agency.js` — main editable custom JavaScript
- `js/agency.min.js` — generated/minified JavaScript used by the site
- `img/portfolio/` — portfolio and case-study imagery

The site currently uses Bootstrap and some existing JavaScript/CSS libraries.

Do not introduce a framework such as React, Vue, Next.js or similar unless explicitly requested.

---

## Source files vs generated/vendor files

### CSS

Make design and CSS changes in:

`css/agency.css`

Do not manually edit:

`css/agency.min.css`

After changing `css/agency.css`, regenerate the minified CSS using:

`npm run minify:css`

Treat `agency.min.css` as generated output.

### JavaScript

Make custom JavaScript changes in the appropriate editable source file, such as:

`js/agency.js`

Do not manually edit a minified JavaScript counterpart when an editable source file exists.

If `js/agency.js` is changed, regenerate the minified output from the source using:

`npx terser js\agency.js -c -m -o js\agency.min.js`

Treat `agency.min.js` as generated output.

### Vendor files

Do not modify Bootstrap, Font Awesome, Animate.css or other third-party/vendor files unless explicitly requested.

Avoid modifying:

- `css/bootstrap.css`
- `css/bootstrap.min.css`
- third-party JavaScript libraries
- vendored Font Awesome files

If custom styling is required, implement it in the project's own CSS instead.

---

## Development approach

Before making a change:

1. Inspect the relevant HTML, CSS and JavaScript.
2. Understand how the existing implementation works.
3. Search for similar existing patterns.
4. Check `.agents/references/` for documented project patterns where relevant, if that folder exists.
5. Reuse existing project patterns where appropriate.
6. Make the smallest sensible change that solves the task.

Avoid unnecessary rewrites.

Do not refactor unrelated areas unless required to safely implement the requested change.

Do not replace working code simply because another implementation would be more modern.

Preserve the existing static-site approach unless the user explicitly asks for an architectural change.

---

## Design direction

The visual direction should remain:

- contemporary
- editorial
- minimal
- image-focused
- spacious
- distinctive
- professional without feeling corporate

Typography, imagery, composition and whitespace should provide most of the site's personality rather than excessive decorative UI.

The site may take inspiration from strong independent designer portfolios and modern editorial portfolio design.

Reference sites may be used to understand principles such as:

- hierarchy
- typography
- spacing
- navigation
- animation
- composition
- transitions
- interaction
- scale
- visual rhythm

Never reproduce another portfolio's design or motion implementation exactly.

Extract the underlying design principle and reinterpret it for Noeleen's portfolio.

---

## Typography

Typography should provide strong visual hierarchy and personality.

The current portfolio typography system uses:

- `Geist` for headings, large display text, portfolio titles and strong visual hierarchy
- `Montserrat` for navigation, buttons, labels, muted subheadings and supporting UI text
- `Roboto Slab` for body copy and longer readable text

Do not reintroduce additional fonts unless there is a clear design reason and the user approves the change.

Prefer:

- large expressive headings
- strong contrast between display and supporting text
- concise body copy
- comfortable line lengths
- generous spacing
- intentional alignment
- clear hierarchy between primary and secondary information

Avoid:

- too many arbitrary font sizes
- unnecessary typography variations
- inconsistent heading treatments
- excessive uppercase text
- overly small body copy
- changing established typography without a clear design reason

### Heading alignment

Heading alignment should follow the composition.

Centred section headings are a recurring and intentional design pattern in this portfolio and should be preserved where established.

Many primary section headings and some supporting content should remain centred where this creates a strong, balanced composition.

Some sections may intentionally use left-aligned or asymmetric headings when the relationship between heading, imagery and content benefits from it.

Do not enforce one heading alignment across the entire site.

Do not change centred headings to left-aligned simply for variation or because left alignment may appear more editorial in another design.

Consistency should come from typography, scale, weight, rhythm and spacing rather than forcing identical alignment everywhere.

---

## Layout and composition

Use generous whitespace and strong visual rhythm.

Portfolio sections do not need to use identical compositions.

Prefer layouts that feel intentionally designed around the content.

Avoid:

- unnecessary card layouts
- excessive borders
- too many rounded rectangles
- overcrowding
- repeating the exact same section structure unnecessarily
- using alignment without considering the composition
- decorative elements that compete with portfolio work
- adding visual complexity simply to make a section look different

### Centred composition

Centred composition is an established part of the portfolio's design language.

It is appropriate for:

- major section headings
- section introductions
- project titles
- selected supporting content
- compositions where symmetry creates stronger visual balance

Do not treat centred content as a problem that needs correcting.

Left-aligned or asymmetric compositions may be introduced when they improve the relationship between text, imagery and surrounding content.

Variation should be intentional rather than introduced simply to make sections different.

### Visual consistency

Do not interpret consistency as requiring every section to have the same layout.

Consistency should primarily come from:

- typography
- spacing
- colour
- scale
- container widths
- imagery treatment
- interaction behaviour
- motion
- overall visual rhythm

Individual sections can then use different compositions within that shared visual language.

---

## Homepage

The homepage currently includes:

- redesigned navigation/menu
- hero section
- featured portfolio work
- earlier work
- About content
- contact/footer areas

Featured work should receive significantly more visual emphasis than older work.

Do not automatically give every project equal prominence.

Standalone case studies should be preferred for major projects.

Older or smaller projects may remain in simpler formats where appropriate.

When modifying the homepage, consider how the change affects the overall scrolling experience rather than reviewing the section entirely in isolation.

---

## Portfolio hierarchy

Major portfolio projects currently include:

- Winetourism
- Ascenta
- Declare Cloud
- Ocado

Important projects should receive more space and visual emphasis than supporting or historical work.

Ocado-related work may include multiple pieces within a broader project story rather than requiring every piece to become its own top-level case study.

Historical work may remain in the portfolio where it demonstrates useful skills.

Do not remove work simply because it is older.

Instead, adjust its prominence if it is less representative of Noeleen's current work.

---

## Case studies

Major projects should use standalone HTML pages rather than being added as large Bootstrap modals.

Before creating or changing a case study:

1. Inspect existing standalone case-study pages.
2. Check `.agents/references/case-study-patterns.md` if it exists.
3. Identify patterns that are already working.
4. Reuse the underlying design language where appropriate.
5. Adapt the composition to the individual project.

A case study should usually communicate:

1. project context
2. challenge or objective
3. Noeleen's role
4. design and/or development work
5. important decisions or process
6. final outcome

Not every project requires all of these sections.

Do not add sections simply to satisfy a template.

Copy should remain concise.

Let imagery communicate a significant portion of the story.

Avoid generic portfolio language such as:

- "seamless experience"
- "user-centric solution"
- "innovative digital experience"

Describe what was actually designed, built, changed or improved.

---

## Case-study consistency

Case studies should clearly belong to the same portfolio without becoming identical templates.

Reuse established elements such as:

- typography
- project-title treatments
- spacing rhythm
- page widths
- navigation
- image behaviour
- supporting labels
- motion patterns

Allow individual projects to vary in:

- image composition
- content order
- section layout
- background treatments
- visual pacing
- amount of supporting copy

Do not force every case study into the same sequence or image grid.

---

## Case-study imagery

Portfolio imagery should be treated as primary content.

Prefer:

- large imagery
- varied image layouts
- full-width images where appropriate
- paired images
- detail crops
- mockups when they add context
- generous breathing space around strong visual work

Do not automatically put every image inside the same card or frame.

Do not make every case study visually identical.

Reuse design language while allowing each project to have its own visual rhythm.

When choosing between additional explanatory UI and allowing a strong image to speak for itself, prefer the simpler presentation unless additional context is genuinely useful.

---

## Images and optimisation

Prefer WebP for portfolio images where practical.

Before adding or replacing an image, consider:

- pixel dimensions
- intended rendered size
- file size
- visual quality
- mobile usage
- whether an optimised version already exists

Avoid unnecessarily large source images.

Do not sacrifice visible quality in:

- typography inside screenshots
- UI details
- mockups
- gradients
- branding work
- fine visual details

If an image is replaced using the same source filename, ensure any corresponding WebP output is also updated where required.

Do not overwrite original design source files unless explicitly requested.

When possible, reuse the project's established image naming and folder conventions.

---

## Responsive design

Every design change must be considered for:

- desktop
- tablet
- mobile

Do not treat responsive behaviour as an afterthought.

Check:

- typography scaling
- image proportions
- menu behaviour
- section spacing
- horizontal overflow
- touch targets
- long headings
- image grids
- stacked content
- case-study layouts
- centred compositions
- asymmetric layouts

A composition that is centred on desktop may remain centred on mobile if it continues to work well.

Do not automatically convert centred content to left alignment at smaller breakpoints.

Likewise, an asymmetric desktop composition may need to become simpler or stacked on mobile.

Choose the responsive treatment that best preserves hierarchy and readability.

Avoid solving mobile problems with fragile one-off CSS hacks where a reusable responsive rule would work better.

---

## Navigation

The current navigation uses the site's established fixed-top navigation pattern with a translucent fill and compact mobile behaviour.

Preserve the current navigation structure, opacity, alignment and interaction direction unless specifically asked to redesign it.

When changing navigation:

- check desktop behaviour
- check mobile behaviour
- preserve accessibility attributes
- ensure overlay state behaves correctly
- ensure scroll/page links still work
- ensure keyboard behaviour remains usable
- avoid introducing unnecessary interaction libraries

Do not recreate another portfolio's navigation exactly, even when using it as a visual or interaction reference.

---

## Motion and animation

Motion should support the portfolio experience rather than dominate it.

Appropriate effects may include:

- subtle reveals
- restrained parallax
- natural easing
- hover transitions
- image movement
- scrolling typography
- section transitions
- subtle text animation

Avoid:

- animation on every element
- excessive delays
- distracting motion
- effects that interfere with navigation
- motion that makes the site feel slow
- unnecessary animation libraries
- directly copying another portfolio's animations

Motion should feel cohesive across the site.

Before creating a new effect, inspect existing motion patterns and reuse their timing, easing or behaviour where appropriate.

Respect `prefers-reduced-motion` where practical.

---

## Accessibility

Do not sacrifice usability for visual styling.

Maintain:

- semantic HTML
- appropriate heading hierarchy
- descriptive image alt text
- keyboard-accessible controls
- readable colour contrast
- visible interactive states
- appropriate ARIA attributes where required
- usable touch targets

Decorative elements should not introduce unnecessary screen-reader content.

Do not remove existing accessibility improvements unless replacing them with an equivalent or better implementation.

---

## CSS conventions

Prefer reusable classes and existing project patterns.

Avoid:

- unnecessary inline styles
- duplicated CSS rules
- excessive `!important`
- deeply specific selectors
- unnecessarily complex selectors
- adding a new class when an existing reusable class already solves the problem
- modifying Bootstrap source to solve project-specific styling

When introducing a new pattern, use meaningful class names based on purpose rather than appearance alone.

Prefer:

`case-study-intro`

over:

`big-left-text`

Before adding a new responsive rule, check whether an existing breakpoint or responsive pattern can be reused.

---

## JavaScript conventions

Use JavaScript only where it adds meaningful behaviour.

Prefer simple native JavaScript for new functionality unless the existing implementation requires jQuery.

Do not introduce a new JavaScript dependency for behaviour that can reasonably be implemented with existing project tools.

Preserve existing behaviour when editing shared scripts.

Check for unintended effects on:

- navigation
- scrolling
- animations
- case-study interactions
- mobile behaviour
- accessibility

Avoid creating JavaScript solutions for behaviour that can be implemented cleanly with CSS.

---

## Design system and project references

Reusable project knowledge should be stored under:

`.agents/references/`

This folder may not exist yet. If it exists, expected reference files may include:

- `design-system.md`
- `section-patterns.md`
- `case-study-patterns.md`
- `motion-patterns.md`

These files should document established project decisions and point to working implementations in the source code.

They should not contain large duplicated blocks of production code unless there is a specific reason.

Before creating a new visual pattern, check the relevant reference documentation and inspect the referenced source implementation.

---

## Reusing design patterns

Before creating a new layout, interaction or visual treatment:

1. Inspect existing implementations.
2. Check `.agents/references/` for approved patterns.
3. Identify whether an existing pattern solves all or part of the problem.
4. Reuse or adapt an established pattern where appropriate.
5. Create a new pattern only when the content or design problem genuinely requires one.

Do not blindly duplicate an existing layout.

Reuse the underlying:

- typography
- spacing
- proportions
- interaction behaviour
- visual rhythm
- responsive logic

while adapting the composition to the new content.

---

## Approved patterns

A design change should not automatically become a reusable project pattern simply because it has been implemented.

Only treat something as an approved reusable pattern when the user:

- explicitly asks for it to be reused
- uses `/remember-pattern`
- states that the treatment should become part of the design system
- clearly identifies the implementation as the preferred pattern for future work

When recording an approved pattern:

1. Inspect the final working implementation.
2. Identify which aspects are actually reusable.
3. Record the relevant files, selectors or elements.
4. Explain when the pattern should be reused.
5. Explain any important limitations or exceptions.
6. Reference the actual source implementation rather than duplicating large amounts of code.

Approval of one section does not mean every characteristic of that section becomes a global rule.

---

## Project commands

This repository may use reusable agent skills for common portfolio tasks.

Planned or supported project commands may include:

- `/polish <section>` — make restrained visual improvements without major restructuring
- `/design-review <section>` — review and improve composition, hierarchy and visual design
- `/build-section <description>` — create a new section using established site patterns
- `/build-case-study <project>` — create or extend a standalone portfolio case study
- `/mobile-check <page-or-section>` — review and fix responsive behaviour
- `/optimise-images <page-or-project>` — review portfolio imagery and optimisation
- `/remember-pattern <name>` — record an approved implementation for future reuse
- `/reuse-pattern <pattern> <target>` — adapt an approved pattern to another area
- `/check-site` — perform a broader visual, responsive, accessibility and code review
- `/commit-ready` — perform relevant checks and prepare the project for commit

Detailed command behaviour should be defined in corresponding `SKILL.md` files before a command is treated as active.

Do not invent additional behaviour for a project command when its skill defines the expected workflow.

---

## Working with user requests

When a request is visually ambiguous:

1. Inspect the existing section.
2. Inspect neighbouring sections.
3. Check established patterns.
4. Infer intent from the surrounding design.
5. Make a restrained first implementation.

Avoid changing unrelated sections.

When the user requests a small change, do not expand the task into a redesign.

When the user asks to polish something, preserve the existing concept unless there is a clear problem that prevents the requested improvement.

When the user requests experimentation or a redesign, stronger composition changes are acceptable while still respecting the established design language.

When given a screenshot or reference website, determine what principle the user is responding to rather than copying the reference literally.

---

## Visual review

Code correctness alone does not mean a design task is complete.

For visual changes, consider:

- composition
- hierarchy
- balance
- spacing
- alignment
- typography
- imagery
- relationship with neighbouring sections
- desktop presentation
- mobile presentation

If the result cannot be visually verified in the current environment, explicitly mention that browser/visual verification is still required.

Do not claim a design looks correct solely because the HTML and CSS are valid.

---

## Completing a change

Before considering work complete:

1. Review the changed HTML, CSS and JavaScript.
2. Check for obvious syntax errors.
3. Check desktop behaviour.
4. Check tablet behaviour where relevant.
5. Check mobile behaviour.
6. Check that neighbouring sections have not been unintentionally affected.
7. Check accessibility implications.
8. Regenerate `css/agency.min.css` if `css/agency.css` was changed.
9. Do not manually edit generated output.
10. Check that image paths and links are valid.
11. Summarise which files were changed and why.
12. Mention anything that still needs visual verification in a browser.

Do not commit or push changes unless explicitly requested.

---

## Scope control

Respect the scope of the user's request.

For example:

`/polish about`

should not result in:

- redesigning the navigation
- restructuring case studies
- changing global colours
- replacing the typography system
- modifying unrelated sections

If a broader change would substantially improve the result, mention it separately rather than silently expanding the task.

---

## Priority when instructions conflict

For project-level decisions, use the following priority, while still respecting higher-priority system, developer and tool instructions:

1. the user's current explicit request
2. this `AGENTS.md`
3. approved patterns under `.agents/references/`
4. the relevant `SKILL.md`
5. existing implementation conventions

If a requested change intentionally overrides an existing design rule, follow the user's current request.

If the user approves an exception for one section, do not automatically turn that exception into a global rule.
