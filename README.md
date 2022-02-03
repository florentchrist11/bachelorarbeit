MCDM Application
========================

The "Multi Criteria Decision Marking" is a decision-making software according to specific criteria for top managers and created according to the architecture of the Symfony framework 

Requirements
------------

  * PHP 7.2.9 or higher;
  * and the [usual Symfony application requirements](https://symfony.com/download).
  * Node js

Installation
------------

  * git clone https://github.com/jaures-kano/civil_engeneering_tools.git
  * composer install
  * npm install or yarn install
  * php -S 127.0.0.1:8000 -t public (to run server)

**Struture of application**
```
project/
├─ assets/
│  ├─ component/
│  ├─ layout/
│  ├─ theme/
│  ├─ utils/
│  ├─ views/
│  ├─ App.js
│  ├─ index.js
│  ├─ routes.js
│  └─ serviceWorker.js
├─ bin/
│  ├─ console
│  └─ phpunit
├─ config/
│  ├─ packages/
│  ├─ routes/
│  ├─ Bundle.php
│  ├─ preload.php
│  ├─ routes.yaml
│  └─ services.yaml
├─ node_module/
├─ public/
│  ├─ build/
│  ├─ static/
│  ├─ .htaccess
│  ├─ favicon.ico
│  └─ index.php
├─ src/
│  ├─ Controller/
│  ├─ Entity/
│  ├─ Repository/
│  ├─ services/
│  └─ Kernel.php
├─ templates/
│  ├─ vitrine/
│  └─ base.html.twig
├─ tests/
│  └─ bootstrap.php
├─ translations/
├─ var/
│  ├─ cache/
│  └─ log/
└─ vendor/
```

Usage
-----
****Explanation of folders containt****     
- asset: consisting mainly of JavaScript files
  - component: contains the notification, dialog, alert components and table structures contained in the application
  - layout: contains the JavaScript structure contained in the footer, body and header of all pages of software 
  - theme: contains the files related to the theme shades used for the graphical interface of the software
  - utils: containt a base tools use in the software
  - views: contains all the JavaScript functions related to the calculation, the error handling and the appearance of the software views
- ___src___
  - __controller__: contains the calculation management part of the matrix
  - __services__: formalizes the results of the decision making according to the chosen criteria
- ___Templates___: Contain all the views of software
