Package.describe({
  summary: "Provides bootstrap with slate theme."
});

Package.on_use(function (api) {
  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('bootstrap-3');
  api.add_files(path.join(asset_path, 'css', 'bootstrap.css'), 'client');
});
