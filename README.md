## Silex & Angular Skeleton

My own vision of Silex & Angular webapp.

## Configurations

There is an Exemple controller in Angular & Silex. Help me to keep productive. To reset follow instructions.

# AngularJS

Edit the application name in files :
* `angular/app.modules.js`
* `angular/app.config.js`
* `angular/shared/message/messageController.js`
* `angular/shared/message/messageService.js`

Delete folder :
* `angular/components/Exemple`

# Silex

Edit the files :
* `app/routes.php`

Be free to edit `app/env.php`

Delete file :
* `src/Controllers/ExempleController.php`

# Assets :

Delete files :
* `resources/assets/less/style.less`
* `resources/views/index.twig`

# Bower

Edit the `bower.json` :
* name
* dependencies
* overrides (for Gulp)

# Composer

Edit the `composer.json` :
* name
* require
* autoload (preset to `Skeleton`)

## Todo

* Make it a `yo generator`

## Install

Just create a projet with composer (and remove the existing VCS) :

`composer create-project thcolin/skeleton PROJECT dev-master`

Next, updates dependencies, run :
* `composer update`
* `bower update`
* `npm update`

Then run `gulp` (got a watch function)