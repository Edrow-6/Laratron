<p align="center">
  <a href="" rel="noopener">
 <img width=128px height=128px src="https://i.ibb.co/P5kV9PC/laratron.png" alt="Laratron Logo"></a>
</p>

<h3 align="center">Laratron</h3>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![GitHub Issues](https://img.shields.io/github/issues/edrow-6/Laratron.svg)](https://github.com/edrow-6/Laratron/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/edrow-6/Laratron.svg)](https://github.com/edrow-6/Laratron/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Laratron is a project allowing to launch and compile a desktop application under Laravel 8 with ElectronJS.
    <br> 
</p>

### Prerequisites
- [Composer](https://getcomposer.org/)
- [NodeJS](https://nodejs.org/en/download/) (LTS 12)
- PHP 7.4 (Included)

### Installing
Go in "www" folder, copy ".env.example" and rename it to ".env"

Next, in "www" folder, open Powershell or CMD by executing (Shift+Right-Click) and run composer:
```
composer install
```
After that, install all dependencies:
```
cd .. | npm install
```
To finish, you just need to edit Laravel as you like in "www". ([see documentation](https://laravel.com/docs/8.x/configuration))

## 🧤 Usage <a name="usage"></a>
```
npm start
```
(If key error showing, press "Generate Key" and "Refresh Now")

## 🌊 Deployment <a name="deployment"></a>
```
npm run build
```

## ⛏️ Built Using <a name="built_using"></a>
- [ElectronJS](https://www.electronjs.org/) - App Framework
- [Electron Builder](https://expressjs.com/) - App Builder
- [Laravel 8](https://laravel.com/) - Web Framework
- [NodeJS](https://nodejs.org/en/) - Server Environment

## 👥 Authors <a name="authors"></a>
- [@laravelarticle](https://github.com/laravelarticle/laravel-electron) - Initial idea
- [@edrow-6](https://github.com/edrow-6) - Rewrite and Update

## 👑 New features included in Laravel 8 <a name="laravel_features"></a>
- [Laravel Jetstream](https://jetstream.laravel.com)
- [Laravel Livewire](https://laravel-livewire.com/)
- [Tailwind CSS](https://tailwindcss.com/)