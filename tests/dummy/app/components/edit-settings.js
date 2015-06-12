import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  settings: Ember.inject.service('settings'),
  editSettingsService: Ember.inject.service('edit-settings'),
  settingsState: Ember.computed('email', function() {
    return this.get('editSettingsService').stateFor(this.get('settings'));
  }).readOnly(),

  actions: {
    save() {
      this.get('settingsState').applyChanges();
      this.get('settings').save();
    },

    cancel() {
      this.get('settingsState').discardChanges();
    }
  }
});
