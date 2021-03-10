    require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "esri/widgets/Legend",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home, Legend) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"bfeb5fd6fb254b5987a759e682caf252" 
        }
      });
      
      var camera = new Camera({
        position: [
          -90.25, 38.52,
          25000// elevation in meters
        ],
        tilt:25,
        heading: 0
      });
    
      
      
      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });
      
       view.ui.add(homeBtn, "top-left");

      view.when(function() {
      
      var featureLayer = scene.layers.getItemAt(0);

        var legend = new Legend({
          view: view,
          layerInfos: [{
            layer: featureLayer,
            title: "Unique pings from 8pm - 9pm"
          }]
        });
    
      view.ui.add(legend, "bottom-right");
          
   });
    });
