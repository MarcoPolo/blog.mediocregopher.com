---
title: >-
    Trading in the Rain
description: >-
    All those... gains... will be lost like... tears...
---

<!-- MIDI.js -->
<!-- polyfill -->
<script src="/assets/trading-in-the-rain/MIDI.js/inc/shim/Base64.js" type="text/javascript"></script>
<script src="/assets/trading-in-the-rain/MIDI.js/inc/shim/Base64binary.js" type="text/javascript"></script>
<script src="/assets/trading-in-the-rain/MIDI.js/inc/shim/WebAudioAPI.js" type="text/javascript"></script>
<!-- MIDI.js package -->
<script src="/assets/trading-in-the-rain/MIDI.js/js/midi/audioDetect.js" type="text/javascript"></script>
<script src="/assets/trading-in-the-rain/MIDI.js/js/midi/gm.js" type="text/javascript"></script>
<script src="/assets/trading-in-the-rain/MIDI.js/js/midi/loader.js" type="text/javascript"></script>
<script src="/assets/trading-in-the-rain/MIDI.js/js/midi/plugin.audiotag.js" type="text/javascript"></script>
<script src="/assets/trading-in-the-rain/MIDI.js/js/midi/plugin.webaudio.js" type="text/javascript"></script>
<script src="/assets/trading-in-the-rain/MIDI.js/js/midi/plugin.webmidi.js" type="text/javascript"></script>
<!-- utils -->
<script src="/assets/trading-in-the-rain/MIDI.js/js/util/dom_request_xhr.js" type="text/javascript"></script>
<script src="/assets/trading-in-the-rain/MIDI.js/js/util/dom_request_script.js" type="text/javascript"></script>
<!-- / MIDI.js -->

<script src="/assets/trading-in-the-rain/Distributor.js" type="text/javascript"></script>
<script src="/assets/trading-in-the-rain/MusicBox.js" type="text/javascript"></script>
<script src="/assets/trading-in-the-rain/RainCanvas.js" type="text/javascript"></script>
<script src="/assets/trading-in-the-rain/CW.js" type="text/javascript"></script>
<script src="/assets/trading-in-the-rain/SeriesComposer.js" type="text/javascript"></script>
<script src="/assets/trading-in-the-rain/main.js" type="text/javascript"></script>


<div id="tradingInRainModal">
For each pair listed below, live trade data will be pulled down from the
<a href="https://docs.cryptowat.ch/websocket-api/">Cryptowat.ch Websocket
API</a> and used to generate musical rain drops. The price of each trade
determines both the musical note and position of the rain drop on the screen,
while the volume of each trade determines how long the note is held and how big
the rain drop is.

<p id="markets">Pairs to be generated, by color:<br/><br/></p>

<button id="button" onclick="run()">Click Here to Begin</button>
<p id="progress"></p>

<script type="text/javascript">
  fillMarketP();
  if (window.addEventListener) window.addEventListener("load", autorun, false);
  else if (window.attachEvent) window.attachEvent("onload", autorun);
  else window.onload = autorun;
</script>
</div>


<canvas id="rainCanvas" style=""></canvas>
