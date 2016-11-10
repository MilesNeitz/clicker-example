import { home } from './home.component'
import { configure } from './home.config'

export default
  angular
    .module('clicker-home', [])
    .component('clickerHome', home)
    .config(configure)
    .name
