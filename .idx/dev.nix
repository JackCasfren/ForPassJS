#im just going to use live server and call it a day.
/*
{ pkgs, ... }: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
    pkgs.python3
    pkgs.nodePackages.live-server
  ];
  env = {};
  idx = {
    extensions = [];
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["live-server" "--port=$PORT" "--host=0.0.0.0" "--no-browser"];
          manager = "web";
        };
      };
    };
  };
}
*/