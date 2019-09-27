# Projeto básico para configuração de debug de WebDriverIO com VS Code

Fazemos uma configuração no launch.json e outra configuração no wdio.conf.js

Toda a explicação está no artigo abaixo:

https://www.intricatecloud.io/2019/03/debugging-webdriverio-tests-with-vscode/


Outro recurso interessante é o REPL, que permite enviar comandos do webdriverIO para o browser, via linha de comando. É necessário ter uma instancia do selenium rodando na porta 4444.
https://webdriver.io/docs/repl.html


Para configurar o autocomplete com o Visual Studio Code, utilizar a seguinte bibilioteca: 
npm install @types/webdriverio