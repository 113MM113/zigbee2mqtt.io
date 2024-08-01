"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[45935],{85756:(s,n,e)=>{e.r(n),e.d(n,{comp:()=>k,data:()=>v});var a=e(64516);const t=(0,a.Lk)("h1",{id:"heiman-hs2irc",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#heiman-hs2irc"},[(0,a.Lk)("span",null,"HEIMAN HS2IRC")])],-1),l=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1),i=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"HS2IRC")],-1),o=(0,a.Lk)("td",null,"Vendor",-1),p=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Smart IR Control")],-1),c=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"battery, linkquality")],-1),r=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/HS2IRC.png",alt:"HEIMAN HS2IRC"})])],-1),d=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p>Device can learn up to 15 devices and up to 30 keycodes for each device.</p><h3 id="configuring" tabindex="-1"><a class="header-anchor" href="#configuring"><span>Configuring</span></a></h3><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> various device attributes can be configured:</p><h4 id="create-device" tabindex="-1"><a class="header-anchor" href="#create-device"><span>Create device</span></a></h4><p>Request:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;create&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;model_type&quot;</span><span class="token operator">:</span> <span class="token number">55</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>model_type</strong>: User-defined model ID. Used just for reference. Can be <code>1..255</code>.</li></ul><p>Response:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;create&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;action_result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;action_model_type&quot;</span><span class="token operator">:</span> <span class="token number">55</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;action_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>action_result</strong>: (<code>success</code>/<code>error</code>). Action result.</li><li><strong>action_model_type</strong>: User-defined model ID. <code>1..255</code></li><li><strong>action_id</strong>: Internal device slot ID. Total IR transmitter can store up to 15 devices with ID <code>1..15</code></li></ul><p>NOTE: You should call <code>get_list</code> manually to refresh <code>devices</code> topic.</p><h4 id="learn-key" tabindex="-1"><a class="header-anchor" href="#learn-key"><span>Learn key</span></a></h4><p>Request:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;learn&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token property">&quot;key_code&quot;</span><span class="token operator">:</span> <span class="token number">31</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>id</strong>: Internal device slot ID. <code>1..15</code>.</li><li><strong>key_code</strong>: Keycode slot ID. <code>1..30</code> - Store/replace specific key in specified slot ID. <code>&gt;=31</code> - Create slot ID.</li></ul><p>NOTE: You should store keys one-by-one if you specified <code>key_code</code> by yourself.</p><p>Response:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;learn&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;action_result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;action_key_code&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;action_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>action_result</strong>: (<code>success</code>/<code>error</code>). Action result.</li><li><strong>action_key_code</strong>: Internal keycode slot ID, where key was stored. <code>1...30</code></li><li><strong>action_id</strong>: Internal device slot ID. <code>1..15</code></li></ul><p>NOTE: You should call <code>get_list</code> manually to refresh <code>devices</code> topic after learning key.</p><h4 id="send-stored-key" tabindex="-1"><a class="header-anchor" href="#send-stored-key"><span>Send stored key</span></a></h4><p>Request:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;send_key&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token property">&quot;key_code&quot;</span><span class="token operator">:</span> <span class="token number">1</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>id</strong>: Internal device slot ID. <code>1..15</code>.</li><li><strong>key_code</strong>: Keycode slot ID. <code>1..30</code>.</li></ul><h4 id="get-list-of-the-stored-devices-and-keys" tabindex="-1"><a class="header-anchor" href="#get-list-of-the-stored-devices-and-keys"><span>Get list of the stored devices and keys</span></a></h4><p>Request:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;get_list&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Response:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token property">&quot;devices&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>\n<span class="line">    <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>\n<span class="line">      <span class="token property">&quot;key_codes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>\n<span class="line">        <span class="token number">1</span><span class="token punctuation">,</span></span>\n<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line">      <span class="token property">&quot;model_type&quot;</span><span class="token operator">:</span> <span class="token number">55</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">]</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delete-device-or-keycode" tabindex="-1"><a class="header-anchor" href="#delete-device-or-keycode"><span>Delete device or keycode</span></a></h4><p>Request:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token property">&quot;key_code&quot;</span><span class="token operator">:</span> <span class="token number">31</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>id</strong>: <code>1..15</code> - Delete specific device with ID. <code>&gt;=16</code> - Delete all devices.</li><li><strong>key_code</strong>: <code>1..30</code> -Delete specific keycode. <code>&gt;=31</code> - Delete all keycodes for specified device ID.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',39),u={},k=(0,e(40681).A)(u,[["render",function(s,n){const e=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t,(0,a.Lk)("table",null,[l,(0,a.Lk)("tbody",null,[i,(0,a.Lk)("tr",null,[o,(0,a.Lk)("td",null,[(0,a.bF)(e,{to:"/supported-devices/#v=HEIMAN"},{default:(0,a.k6)((()=>[(0,a.eW)("HEIMAN")])),_:1})])]),p,c,r])]),d])}]]),v=JSON.parse('{"path":"/devices/HS2IRC.html","title":"HEIMAN HS2IRC control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"HEIMAN HS2IRC control via MQTT","description":"Integrate your HEIMAN HS2IRC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-09-30T20:52:56.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Configuring","slug":"configuring","link":"#configuring","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722537665000},"filePathRelative":"devices/HS2IRC.md"}')}}]);