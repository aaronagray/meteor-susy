Package.describe({
  name: 'meta:susy',
  summary: 'Powerful grids for the web.',
  version: '2.3.0',
  git: 'https://github.com/aaronagray/meteor-susy'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('fourseven:scss@3.3.3_3');
  api.addFiles([

    // Susy API
    "imports/_susy.scss",
    "imports/susy/language/_susy.scss",
    "imports/susy/language/susy/_background.scss",
    "imports/susy/language/susy/_bleed.scss",
    "imports/susy/language/susy/_box-sizing.scss",
    "imports/susy/language/susy/_breakpoint-plugin.scss",
    "imports/susy/language/susy/_container.scss",
    "imports/susy/language/susy/_context.scss",
    "imports/susy/language/susy/_gallery.scss",
    "imports/susy/language/susy/_grids.scss",
    "imports/susy/language/susy/_gutters.scss",
    "imports/susy/language/susy/_isolate.scss",
    "imports/susy/language/susy/_margins.scss",
    "imports/susy/language/susy/_padding.scss",
    "imports/susy/language/susy/_rows.scss",
    "imports/susy/language/susy/_settings.scss",
    "imports/susy/language/susy/_span.scss",
    "imports/susy/language/susy/_validation.scss",

    // Susy Math
    "imports/susy/_su.scss",
    "imports/susy/su/_grid.scss",
    "imports/susy/su/_settings.scss",
    "imports/susy/su/_utilities.scss",
    "imports/susy/su/_validation.scss",

    // Susy Output
    // - Float
    "imports/susy/output/_float.scss",
    "imports/susy/output/float/_container.scss",
    "imports/susy/output/float/_end.scss",
    "imports/susy/output/float/_isolate.scss",
    "imports/susy/output/float/_span.scss",
    // - Shared
    "imports/susy/output/_shared.scss",
    "imports/susy/output/shared/_background.scss",
    "imports/susy/output/shared/_container.scss",
    "imports/susy/output/shared/_direction.scss",
    "imports/susy/output/shared/_inspect.scss",
    "imports/susy/output/shared/_margins.scss",
    "imports/susy/output/shared/_output.scss",
    "imports/susy/output/shared/_padding.scss",
    // - Support
    "imports/susy/output/_support.scss",
    "imports/susy/output/support/_background.scss",
    "imports/susy/output/support/_box-sizing.scss",
    "imports/susy/output/support/_clearfix.scss",
    "imports/susy/output/support/_prefix.scss",
    "imports/susy/output/support/_rem.scss",
    "imports/susy/output/support/_support.scss"
    ], ['server', 'client'],  {isImport: true});
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('meta:susy');
  api.addFiles('meta:susy-tests.js');
});
