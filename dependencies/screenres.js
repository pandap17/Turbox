class ScreenResolutionExtension {
    getInfo() {
        return {
            id: 'screenResolution',
            name: 'Screen Resolution',
            blocks: [
                {
                    opcode: 'getScreenWidth',
                    blockType: 'reporter',
                    text: 'screen width'
                },
                {
                    opcode: 'getScreenHeight',
                    blockType: 'reporter',
                    text: 'screen height'
                }
            ]
        };
    }

    getScreenWidth() {
        return window.screen.width;
    }

    getScreenHeight() {
        return window.screen.height;
    }
}

TurboWarp.addExtension(new ScreenResolutionExtension());
