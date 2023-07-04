(function(Scratch) {
  'use strict';
  
  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Screen resolution extension must be run unsandboxed');
  }
  
  class ScreenResolution {
    getInfo () {
      return {
        id: 'screenResolution',
        name: 'Screen Resolution',
        color1: '#4a90d9',
        color2: '#4280d7',
        color3: '#3871d6',
        blocks: [
          {
            opcode: 'getScreenWidth',
            blockType: Scratch.BlockType.REPORTER,
            text: 'screen width'
          },
          {
            opcode: 'getScreenHeight',
            blockType: Scratch.BlockType.REPORTER,
            text: 'screen height'
          }
        ]
      };
    }
    
    getScreenWidth () {
      return window.innerWidth;
    }
    
    getScreenHeight () {
      return window.innerHeight;
    }
  }
  
  Scratch.extensions.register(new ScreenResolution());
})(Scratch);
