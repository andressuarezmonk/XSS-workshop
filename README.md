# Media.Monks XSS Workshop
Work In Progress

This project was built with the goal of providing an easy and fun way to fully understand how cross side scripting attacks essentially work and should we do in order to prevent them.

I plan to add pages with explanations and excersises to play around those concepts.

## Introduction
According to [OWASP Top 10 2021](https://owasp.org/Top10/) most of the principal security treats are on the BE side (which makes sense, that's the part of the system that connects with potentially sensitive data). However on 2021 XSS ended in third position of the OWASP Top 10, which means is our duty to be ready to secure our applications regardless of the technology we're using.

### What is XSS
Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application with malicious code injected on it and sends it to a different user. Since the malicious script is executed as javascript by the browser, it has permissions to access any cookies, session tokens, or other sensitive information retained by the browser, that's why we should be aware that **storage of user personal identifiable information / financial / medical data is prohibited**.
