//= require vendor/jquery/jquery
//= require vendor/history.js/scripts/uncompressed/history.adapter.jquery
//= require vendor/history.js/scripts/uncompressed/history
//= require vendor/jquery-ui/ui/jquery.ui.core
//= require vendor/jquery-ui/ui/jquery.ui.widget
//= require vendor/jquery-ui/ui/jquery.ui.mouse
//= require vendor/jquery-ui/ui/jquery.ui.selectable
//= require vendor/jquery-ui/ui/jquery.ui.slider
//= require bootstrap_custom/
//= require vendor/typeahead.js/dist/typeahead
//= require vendor/jszip/jszip
//= require vendor/jszip/jszip-inflate
//= require vendor/jszip/jszip-load
//= require_self
//= require client


window.NodecaLoader.execute(function (N, require) {
  'use strict';

  var init = require('../../lib/system/client/n.js.ejs');

  init(N);
});
