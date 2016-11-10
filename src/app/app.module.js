import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'

import clickerHome from './home/home.module'
import clickerGame from './game/game.module'

import { app } from './app.component'
import { configure } from './app.config'
import { visualizeRouting } from './app.run'

export default
  angular
    .module('clicker-app', [
      ngAnimate,
      ngAria,
      ngMaterial,
      ngMessages,
      uiRouter,

      clickerHome,
      clickerGame
    ])
    .component('app', app)
    .config(configure)
    .run(visualizeRouting)
    .name
