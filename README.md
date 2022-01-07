# Media.Monks XSS Workshop
Work In Progress

This project was built with the goal of providing an easy and fun way to fully understand how cross-site scripting attacks essentially work and what should we do in order to prevent them.

I plan to add pages with explanations and exercises to play around with those concepts.

## Introduction
According to [OWASP Top 10 2021](https://owasp.org/Top10/), most of the principal security threats are on the BE side (which makes sense, that's the part of the system that connects with potentially sensitive data). However, in 2021 XSS ended in the third position of the OWASP Top 10, which means is our duty to be ready to secure our applications regardless of the technology we're using.

### What is XSS
Cross-Site Scripting (XSS) attacks are a type of injection in which the attacker somehow manages to execute its own malicious scripts into our websites. This is a threat especially when the attacker manages to provoke another user to run that malicious in their own machine. Since the malicious script is executed as javascript by the browser, it has permissions to access any cookies, session tokens, or other sensitive information retained by the browser, that's why we should be aware that **storage of user personally identifiable information/financial/medical data is prohibited**.

Typically people tend to think the security of an application is a backend-only concern, and that is true to a certain extent since the backend can always be hit at any time with an HTTP request without requiring a web application to interact with it, besides it's the backend (typically) the one that has access to the raw information in any database we might have. However there are certain cases where a vulnerability on the frontend could compromise an application, and we need to always be aware of this.

### Enriched text
When we open a website and scan the final source code we can divide it into two categories, the *code of the page* and the *content*. When I say code of the page I mean that we might want to display a title, and that would be an `h1`, but the actual text that we want to display may vary. That `h1` tag is what I call *page code* (like the 'template' of the website). On the other hand, the **actual text** inside that `h1` is what I call *content*.

It's a pretty common case that when we don't exactly know which content to render -perhaps it depends on the language we're displaying, or a certain recommendation algorithm, or we're allowing our client to update it over time-. When we face those cases we host the content in the backend and consume it from the frontend to proceed and fill our website. Usually and as a rule of thumb, you should **always** manage the content as text. That means if I want to render a title the backend will send you a text, but it will not send an `h1` tag. Following this rule, and as long as you respect the standard to render content of your chosen framework, you should be able to sleep pretty confidently at night.

Now, there are certain cases where you might want your backend to send page code instead. A practical example I found on a project at Media.Monks was handling tooltips on a text. The client wanted to highlight certain words and add a custom tooltip on hover to display more information. On top of that, we had support for several languages on the website, so we had virtually no way to know which words to highlight since the highlighted parts vary depending on the language, hence the text came from the backend. To make it even worse the highlight could not be present on certain parts, depending on the language.

We had two alternatives, crying or allowing the backend to send us page code at a certain degree so we could somehow figure out which word to highlight and what to show on the tooltip. That way when we ask the backend for a text we would receive something along the lines of:
```json
{
  "enrichedText": "This is the text copy with a <highlight id='tooltip-1'>highlighted</highlight> word",
  "tooltip-1": "This is the text that will be shown on the tooltip box on hover"
}
```

This is not the only case I found with solid arguments to allow page code from the backend, and that's why I adopted a fancy name for it: *Enriched text*.

We should always explore all the alternatives before relying on displaying enriched text since it requires full trust in the backend. If somehow an attacker figures a way to update the content of our enriched text we might end up displaying malicious code to our users. That's why whenever you choose to display enriched code **stop and think** if there's a better way, and if there isn't ask yourself (and your team too) if there's a way a user input data ends up in that enriched code somehow.