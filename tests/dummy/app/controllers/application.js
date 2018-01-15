import Controller from '@ember/controller';

export default Controller.extend({
  name: "<div>this field should be focused</div>",
  number: "416",

  filter(currentValue, event) {
    var k = event.which;
    if (k <= 48 || k >= 58) {
      event.preventDefault();
    }
  },

  processor(s) {
    if (s.indexOf('X') > -1) {
      return s.substring(0, s.indexOf('X'));
    } else {
      return s;
    }
  }
});
