var mappings = {
  behaviours: {},
  mappings: {
    painting: {
      common: {
        'grip.down': 'undo',
        'trigger.changed': 'paint'
      },

      'vive-controls': {
        'axismove': 'changeBrushSizeInc',
        'trackpad.touchstart': 'startChangeBrushSize',
        'menu.down': 'toggleMenu',

        // Teleport
        'trackpad.down': 'aim',
        'trackpad.up': 'teleport'
      },

      'oculus-touch-controls': {
        'axismove': 'changeBrushSizeAbs',
        'abutton.down': 'toggleMenu',
        'xbutton.down': 'toggleMenu',

        // Teleport
        'ybutton.down': 'aim',
        'ybutton.up': 'teleport',

        'bbutton.down': 'aim',
        'bbutton.up': 'teleport'
      },

      'windows-motion-controls': {
        'axismove': 'changeBrushSizeAbs',
        'menu.down': 'toggleMenu',

        // Teleport
        'trackpad.down': 'aim',
        'trackpad.up': 'teleport'
      },
      keyboard: {
        't_down': 'aim',
        't_up': 'teleport'
      }
    }
  }
};
  
AFRAME.registerInputMappings(mappings);