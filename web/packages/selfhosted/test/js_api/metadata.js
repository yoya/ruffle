const { js_api_before } = require("../polyfill/utils");
const { expect, use } = require("chai");
const chaiHtml = require("chai-html");

use(chaiHtml);

describe("RufflePlayer.metadata", () => {
    js_api_before("/test_assets/example.swf");

    it("has metadata after load", () => {
        const player = browser.$("<ruffle-player>");
        const metadata = browser.execute((player) => player.metadata, player);
        expect(metadata).to.eql({
            width: 550,
            height: 400,
            frameRate: 24,
            numFrames: 1,
            swfVersion: 15,
        });
    });
});
