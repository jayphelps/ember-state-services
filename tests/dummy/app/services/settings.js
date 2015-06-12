import Ember from 'ember';

export default Ember.Service.extend({
  init() { 
    window.settings = this;
  },

  favoriteColor: 'hot pink',
  pissMeOff: true,

  save() {
    alert('make ajax call');
  }
});
