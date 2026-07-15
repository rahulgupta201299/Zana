export enum REDIRECT_MAPPINGS_TYPE {
  PRODUCT = "product",
  BIKE = "bike",
}

export type RedirectMapping = {
  type: string;
  sourcePath: string;
  targetPath: string;
};

export const REDIRECT_MAPPINGS = Object.freeze(
[
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-texture-matt-black-cb350",
    targetPath: "/product/cb350-highness/crash-guard-with-slider-texture-matt-black-cb350/69e279ad5685096a33ad92dd"
  },
  {
    type: "product",
    sourcePath: "/vertical-handle-riser-ktm-adventure-250-aluminium",
    targetPath: "/product/adventure-250-390-390x-390-rally/vertical-handle-riser-ktm-adventure-250-aluminium/69e279ad5685096a33ad92e6"
  },
  {
    type: "product",
    sourcePath: "/head-light-grill-ss-type2-silver-himalayan-20162020",
    targetPath: "/product/himalayan-411-2016-2020/head-light-grill-ss-type2-silver-himalayan-20162020/69e279ad5685096a33ad92f2"
  },
  {
    type: "product",
    sourcePath: "/radiator-grill-black-ninja-300",
    targetPath: "/product/ninja-300/radiator-grill-black-ninja-300/69e279ad5685096a33ad92fc"
  },
  {
    type: "product",
    sourcePath: "/rear-master-cylinder-protector-himalayan-bs6-ss-2021",
    targetPath: "/product/himalayan-411-bs6-2021-23/rear-master-cylinder-protector-himalayan-bs6-ss-2021/69e279ad5685096a33ad9303"
  },
  {
    type: "product",
    sourcePath: "/front-disc-caliper-protector-g310-gs",
    targetPath: "/product/g-310-gs/front-disc-caliper-protector-g310-gs/69e279ad5685096a33ad9321"
  },
  {
    type: "product",
    sourcePath: "/fog-light-mount-re-gt-interceptor-650",
    targetPath: "/product/himalayan-411-bs6-2021-23/fog-light-mount-re-gt-interceptor-650/69e279ad5685096a33ad9330"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-t1-street-twin",
    targetPath: "/product/street-twin/top-rack-with-plate-t1-street-twin/69e279ad5685096a33ad92de"
  },
  {
    type: "product",
    sourcePath: "/gps-mount-versys-650",
    targetPath: "/product/versys-650/gps-mount-versys-650/69e279ad5685096a33ad92e0"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-ktm-adventure-250-texture-matt-black-aluminium",
    targetPath: "/product/adventure-250-390-390x-390-rally/radiator-guard-ktm-adventure-250-texture-matt-black-aluminium/69e279ad5685096a33ad92e7"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-texture-matt-black-ktm-250390-390-x-adv",
    targetPath: "/product/adventure-250-390-390x-390-rally/crash-guard-with-slider-texture-matt-black-ktm-250390-390-x-adv/69e279ad5685096a33ad92ed"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-bajaj-dominar400-texture-matt-black",
    targetPath: "/product/dominar-400-2017-2018/saddle-stay-bajaj-dominar400-texture-matt-black/69e279ad5685096a33ad92ee"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-texture-matt-black-dominar-400250201722",
    targetPath: "/product/dominar-250-400-2019-2022/crash-guard-texture-matt-black-dominar-400250201722/69e279ad5685096a33ad92ef"
  },
  {
    type: "product",
    sourcePath: "/head-light-grill-type2-black-ss-himalayan-20162022",
    targetPath: "/product/himalayan-411-bs6-2021-23/head-light-grill-type2-black-ss-himalayan-20162022/69e279ad5685096a33ad92f7"
  },
  {
    type: "product",
    sourcePath: "/toprack-plate-small-xpulse200-bs6",
    targetPath: "/product/xpulse-200/toprack-plate-small-xpulse200-bs6/69e279ad5685096a33ad9301"
  },
  {
    type: "product",
    sourcePath: "/pillion-backrest-for-gtinterceptor-650",
    targetPath: "/product/continental-gt-650-interceptor-650/pillion-backrest-for-gtinterceptor-650/69e279ad5685096a33ad9308"
  },
  {
    type: "product",
    sourcePath: "/headlight-grill-type-2-silver",
    targetPath: "/product/continental-gt-650-interceptor-650/headlight-grill-type-2-silver/69e279ad5685096a33ad92d8"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-type2-texture-matt-black-ktm-adv-250-390-390-x",
    targetPath: "/product/adventure-250-390-390x-390-rally/top-rack-with-plate-type2-texture-matt-black-ktm-adv-250-390-390-x/69e279ad5685096a33ad92ec"
  },
  {
    type: "product",
    sourcePath: "/front-disc-caliper-protector-ktm-adventure-250-stainless-steel",
    targetPath: "/product/adventure-250-390-390x-390-rally/front-disc-caliper-protector-ktm-adventure-250-stainless-steel/69e279ad5685096a33ad9322"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-ktm-adventure-250",
    targetPath: "/product/adventure-250-390-390x-390-rally/front-fluid-reservoir-cover-ktm-adventure-250/69e279ad5685096a33ad9325"
  },
  {
    type: "product",
    sourcePath: "/head-light-grill-ss-type-4a-black-himalayan-bs6-202122",
    targetPath: "/product/himalayan-411-bs6-2021-23/head-light-grill-ss-type-4a-black-himalayan-bs6-202122/69e279ad5685096a33ad932b"
  },
  {
    type: "product",
    sourcePath: "/vertical-handle-riser-for-interceptor650",
    targetPath: "/product/continental-gt-650-interceptor-650/vertical-handle-riser-for-interceptor650/69e279ad5685096a33ad932e"
  },
  {
    type: "product",
    sourcePath: "/bmw-310gs-radiator-guard-black-aluminum",
    targetPath: "/product/g-310-gs/bmw-310gs-radiator-guard-black-aluminum/69e279ad5685096a33ad92da"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-cb300r-ws-bs6-20222024",
    targetPath: "/product/cb300r/crash-guard-cb300r-ws-bs6-20222024/69e279ad5685096a33ad92ff"
  },
  {
    type: "product",
    sourcePath: "/top-rack-himalayan-411-steel-compatible-with-pillion-backrest",
    targetPath: "/product/himalayan-411-bs6-2021-23/top-rack-himalayan-411-steel-compatible-with-pillion-backrest/69e279ad5685096a33ad931f"
  },
  {
    type: "product",
    sourcePath: "/sporty-ss-bash-plate-all-black-gtinterceptor-650",
    targetPath: "/product/continental-gt-650-interceptor-650/sporty-ss-bash-plate-all-black-gtinterceptor-650/69e279ad5685096a33ad9323"
  },
  {
    type: "product",
    sourcePath: "/fluid-reservoir-cover-dominar-250400",
    targetPath: "/product/dominar-250-400-2019-2022/fluid-reservoir-cover-dominar-250400/69e279ad5685096a33ad9327"
  },
  {
    type: "product",
    sourcePath: "/kawasaki-radiator-guard-grill-black",
    targetPath: "/product/versys-650/kawasaki-radiator-guard-grill-black/69e279ad5685096a33ad92dc"
  },
  {
    type: "product",
    sourcePath: "/gps-mount-ktm-adventure-250-stainless-steel",
    targetPath: "/product/adventure-250-390-390x-390-rally/gps-mount-ktm-adventure-250-stainless-steel/69e279ad5685096a33ad92ea"
  },
  {
    type: "product",
    sourcePath: "/head-light-grill-continental-gt-interceptor-650-black",
    targetPath: "/product/continental-gt-650-interceptor-650/head-light-grill-continental-gt-interceptor-650-black/69e279ad5685096a33ad932a"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-continental-gt-650-texture-matt-black",
    targetPath: "/product/continental-gt-650-interceptor-650/saddle-stay-continental-gt-650-texture-matt-black/69e279ad5685096a33ad92d4"
  },
  {
    type: "product",
    sourcePath: "/leg-guard-continental-gt650-mild-steel-texture-matt-black",
    targetPath: "/product/continental-gt-650-interceptor-650/leg-guard-continental-gt650-mild-steel-texture-matt-black/69e279ad5685096a33ad92d5"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-continental-gt650-honeycomb-aluminum-black",
    targetPath: "/product/continental-gt-650-interceptor-650/radiator-guard-continental-gt650-honeycomb-aluminum-black/69e279ad5685096a33ad92d7"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-black-for-kawasaki-versys-650-bs6-20162025",
    targetPath: "/product/versys-650/crash-guard-with-slider-black-for-kawasaki-versys-650-bs6-20162025/69e279ad5685096a33ad92db"
  },
  {
    type: "product",
    sourcePath: "/top-rack-ktm-adventure-250-with-plate-texture-matt-black",
    targetPath: "/product/adventure-250-390-390x-390-rally/top-rack-ktm-adventure-250-with-plate-texture-matt-black/69e279ad5685096a33ad92eb"
  },
  {
    type: "product",
    sourcePath: "/engine-frame-texture-matt-black-himalayan-bs346-20162020",
    targetPath: "/product/himalayan-411-2016-2020/engine-frame-texture-matt-black-himalayan-bs346-20162020/69e279ad5685096a33ad92f1"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-duke-390250-texture-matt-black-20192022",
    targetPath: "/product/duke-250-390-2019-2022/saddle-stay-duke-390250-texture-matt-black-20192022/69e279ad5685096a33ad9310"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-continental-gt650-uk-flag-black",
    targetPath: "/product/continental-gt-650-interceptor-650/radiator-guard-continental-gt650-uk-flag-black/69e279ad5685096a33ad932c"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-aluminum-gtinterceptor650",
    targetPath: "/product/continental-gt-650-interceptor-650/front-fluid-reservoir-cover-aluminum-gtinterceptor650/69e279ad5685096a33ad9326"
  },
  {
    type: "product",
    sourcePath: "/radiator-grill-silver-rc-200390",
    targetPath: "/product/rc-200-390/radiator-grill-silver-rc-200390/69e279ad5685096a33ad92e5"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-for-z900-2017-2019",
    targetPath: "/product/z900/crash-guard-for-z900-2017-2019/69e279ad5685096a33ad92fd"
  },
  {
    type: "product",
    sourcePath: "/clipon-riser-continental-gt650",
    targetPath: "/product/continental-gt-650-interceptor-650/clipon-riser-continental-gt650/69e279ad5685096a33ad9306"
  },
  {
    type: "product",
    sourcePath: "/vertical-handle-riser-dominar-400250",
    targetPath: "/product/dominar-250-400-2019-2022/vertical-handle-riser-dominar-400250/69e279ad5685096a33ad930f"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-continental-gt-650-black-uk-flag",
    targetPath: "/product/continental-gt-650-interceptor-650/bash-plate-continental-gt-650-black-uk-flag/69e279ad5685096a33ad9312"
  },
  {
    type: "product",
    sourcePath: "/honeycomb-radiator-grill-premium-matt-black-dominar-250400-201921",
    targetPath: "/product/dominar-250-400-2019-2022/honeycomb-radiator-grill-premium-matt-black-dominar-250400-201921/69e279ad5685096a33ad9316"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-ktm-duke-250-texture-matt-black",
    targetPath: "/product/duke-250-390-2019-2022/crash-guard-ktm-duke-250-texture-matt-black/69e279ad5685096a33ad92e1"
  },
  {
    type: "product",
    sourcePath: "/radiator-grill-orange-rc200390",
    targetPath: "/product/rc-200-390/radiator-grill-orange-rc200390/69e279ad5685096a33ad92e4"
  },
  {
    type: "product",
    sourcePath: "/toprack-without-plate-compatible-with-pillion-backrest-version2-cb350-hness-split-seatsi-not-compatible-on-new-model-2024-cb350-dlx-pro-ngle-seat",
    targetPath: "/product/cb350-highness/toprack-without-plate-compatible-with-pillion-backrest-version2-cb350-hness-split-seatsi-not-compatible-on-new-model-2024-cb350-dlx-pro-ngle-seat/69e279ad5685096a33ad931e"
  },
  {
    type: "product",
    sourcePath: "/uk-flag-black-bash-plate-for-gt-interceptor-650",
    targetPath: "/product/continental-gt-650-interceptor-650/uk-flag-black-bash-plate-for-gt-interceptor-650/69e279ad5685096a33ad92d3"
  },
  {
    type: "product",
    sourcePath: "/backrest-continental-gt-650",
    targetPath: "/product/continental-gt-650-interceptor-650/backrest-continental-gt-650/69e279ad5685096a33ad92d6"
  },
  {
    type: "product",
    sourcePath: "/leg-guard-ms-with-slider-texture-matt-black-himalayan-bs6-202123",
    targetPath: "/product/himalayan-411-bs6-2021-23/leg-guard-ms-with-slider-texture-matt-black-himalayan-bs6-202123/69e279ad5685096a33ad92f4"
  },
  {
    type: "product",
    sourcePath: "/backrest-honda-cb350-with-parcel-shelf",
    targetPath: "/product/cb350-highness/backrest-honda-cb350-with-parcel-shelf/69e279ad5685096a33ad930e"
  },
  {
    type: "product",
    sourcePath: "/gps-mount-himalayan-411-aluminum-bs6",
    targetPath: "/product/xpulse-200/gps-mount-himalayan-411-aluminum-bs6/69e279ad5685096a33ad9318"
  },
  {
    type: "product",
    sourcePath: "/rear-paddock-spools-with-swing-arm-protector-silver-ktm-adventure-390-390-x",
    targetPath: "/product/adventure-250-390-390x-390-rally/rear-paddock-spools-with-swing-arm-protector-silver-ktm-adventure-390-390-x/69e279ad5685096a33ad92e9"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-dominar-250400-2019-21",
    targetPath: "/product/dominar-250-400-2019-2022/saddle-stay-dominar-250400-2019-21/69e279ad5685096a33ad92f0"
  },
  {
    type: "product",
    sourcePath: "/toprack-plate-big-himalayan-bs6-2021",
    targetPath: "/product/himalayan-411-bs6-2021-23/toprack-plate-big-himalayan-bs6-2021/69e279ad5685096a33ad92f9"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-texture-matt-black-rc-200390",
    targetPath: "/product/rc-200-390/saddle-stay-texture-matt-black-rc-200390/69e279ad5685096a33ad931c"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-ktm-adventure-250-texture-matt-black",
    targetPath: "/product/adventure-250-390-390x-390-rally/crash-guard-ktm-adventure-250-texture-matt-black/69e279ad5685096a33ad9331"
  },
  {
    type: "product",
    sourcePath: "/mudguard-riser-himalayan-bs6-2021",
    targetPath: "/product/himalayan-411-bs6-2021-23/mudguard-riser-himalayan-bs6-2021/69e279ad5685096a33ad9302"
  },
  {
    type: "product",
    sourcePath: "/fluid-reservoir-cover-bmw-310gs",
    targetPath: "/product/g-310-gs/fluid-reservoir-cover-bmw-310gs/69e279ad5685096a33ad9328"
  },
  {
    type: "product",
    sourcePath: "/single-rod-crash-bar-gt-interceptor-650",
    targetPath: "/product/continental-gt-650-interceptor-650/single-rod-crash-bar-gt-interceptor-650/69e279ad5685096a33ad932d"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-kawasaki-versys-650",
    targetPath: "/product/versys-650/saddle-stay-kawasaki-versys-650/69e279ad5685096a33ad92df"
  },
  {
    type: "product",
    sourcePath: "/front-fork-sliders-adventure-250390-390-x",
    targetPath: "/product/adventure-250-390-390x-390-rally/front-fork-sliders-adventure-250390-390-x/69e279ad5685096a33ad9320"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-duke-250390-aluminium",
    targetPath: "/product/duke-250-390-2019-2022/front-fluid-reservoir-cover-duke-250390-aluminium/69e279ad5685096a33ad9324"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-mild-steel-with-slider-glossy-black-gt-interceptor-650",
    targetPath: "/product/continental-gt-650-interceptor-650/crash-guard-mild-steel-with-slider-glossy-black-gt-interceptor-650/69e279ad5685096a33ad9332"
  },
  {
    type: "product",
    sourcePath: "/toprack-plate-big-xpulse200-bs6",
    targetPath: "/product/xpulse-200/toprack-plate-big-xpulse200-bs6/69e279ad5685096a33ad9300"
  },
  {
    type: "product",
    sourcePath: "/sporty-sump-guard-cb350-hness",
    targetPath: "/product/cb350-highness/sporty-sump-guard-cb350-hness/69e279ad5685096a33ad9317"
  },
  {
    type: "product",
    sourcePath: "/backrest-cb350-honda",
    targetPath: "/product/cb350-highness/backrest-cb350-honda/69e279ad5685096a33ad92e2"
  },
  {
    type: "product",
    sourcePath: "/ktm-linear-headlight-grill-stainless-steel-adventure-390-390-x",
    targetPath: "/product/adventure-250-390-390x-390-rally/ktm-linear-headlight-grill-stainless-steel-adventure-390-390-x/69e279ad5685096a33ad92e3"
  },
  {
    type: "product",
    sourcePath: "/radiator-grill-black-for-z900-2017-2019",
    targetPath: "/product/z900/radiator-grill-black-for-z900-2017-2019/69e279ad5685096a33ad92fe"
  },
  {
    type: "product",
    sourcePath: "/headlight-grill-continental-gt650-type-2-black",
    targetPath: "/product/continental-gt-650-interceptor-650/headlight-grill-continental-gt650-type-2-black/69e279ad5685096a33ad92d9"
  },
  {
    type: "product",
    sourcePath: "/head-light-grill-hexagonal-black-stainless-steel-ktm-adventure-390",
    targetPath: "/product/adventure-250-390-390x-390-rally/head-light-grill-hexagonal-black-stainless-steel-ktm-adventure-390/69e279ad5685096a33ad92e8"
  },
  {
    type: "product",
    sourcePath: "/top-rack-plate-himalayan411-small-bs6",
    targetPath: "/product/himalayan-411-bs6-2021-23/top-rack-plate-himalayan411-small-bs6/69e279ad5685096a33ad92fa"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-texture-matt-black-pulsar-200ns",
    targetPath: "/product/pulsar-ns200/crash-guard-with-slider-texture-matt-black-pulsar-200ns/69e279ad5685096a33ad9319"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-glossy-black-cb350",
    targetPath: "/product/cb350-highness/crash-guard-with-slider-glossy-black-cb350/69e279ad5685096a33ad9329"
  },
  {
    type: "product",
    sourcePath: "/yezdi-head-light-grill-ss-silver",
    targetPath: "/product/yezdi-scrambler/yezdi-head-light-grill-ss-silver/69e279ad5685096a33ad935f"
  },
  {
    type: "product",
    sourcePath: "/lower-engine-guard-bmw-g310-gs-black",
    targetPath: "/product/g-310-gs/lower-engine-guard-bmw-g310-gs-black/69e279ad5685096a33ad9362"
  },
  {
    type: "product",
    sourcePath: "/new-pillion-backrest-cushion-big-gtinterceptor-650",
    targetPath: "/product/himalayan-411-bs6-2021-23/new-pillion-backrest-cushion-big-gtinterceptor-650/69e279ad5685096a33ad9374"
  },
  {
    type: "product",
    sourcePath: "/paddock-stand-yezdi-adventure-texture-matt-black",
    targetPath: "/product/himalayan-411-2016-2020/paddock-stand-yezdi-adventure-texture-matt-black/69e279ad5685096a33ad9389"
  },
  {
    type: "product",
    sourcePath: "/saddle-stays-pannier-rack-for-soft-bags-honda-cb350-hness-version2",
    targetPath: "/product/cb350-highness/saddle-stays-pannier-rack-for-soft-bags-honda-cb350-hness-version2/69e279ad5685096a33ad9336"
  },
  {
    type: "product",
    sourcePath: "/yezdi-adventure-saddle-stay-black",
    targetPath: "/product/yezdi-adventure/yezdi-adventure-saddle-stay-black/69e279ad5685096a33ad9357"
  },
  {
    type: "product",
    sourcePath: "/bmw-g310-gs-upper-fairing-guard-ms-silver",
    targetPath: "/product/g-310-gs/bmw-g310-gs-upper-fairing-guard-ms-silver/69e279ad5685096a33ad9377"
  },
  {
    type: "product",
    sourcePath: "/saddle-stays-ms-with-exhaust-sheild-with-jerry-can-mounting-texture-matt-black-for-gtinterceptor650",
    targetPath: "/product/continental-gt-650-interceptor-650/saddle-stays-ms-with-exhaust-sheild-with-jerry-can-mounting-texture-matt-black-for-gtinterceptor650/69e279ad5685096a33ad9341"
  },
  {
    type: "product",
    sourcePath: "/yezdi-adventure-front-fluid-reservoir-cover",
    targetPath: "/product/yezdi-adventure/yezdi-adventure-front-fluid-reservoir-cover/69e279ad5685096a33ad935a"
  },
  {
    type: "product",
    sourcePath: "/backrest-honda-cb-350",
    targetPath: "/product/cb350-highness/backrest-honda-cb-350/69e279ad5685096a33ad9363"
  },
  {
    type: "product",
    sourcePath: "/test-yezdi-black",
    targetPath: "/product/yezdi-adventure/test-yezdi-black/69e279ad5685096a33ad9378"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-ktm-adventure-250-with-slider-orange",
    targetPath: "/product/adventure-250-390-390x-390-rally/crash-guard-ktm-adventure-250-with-slider-orange/69e279ad5685096a33ad9346"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-orange-ktm-250390-20192022",
    targetPath: "/product/duke-250-390-2019-2022/crash-guard-orange-ktm-250390-20192022/69e279ad5685096a33ad9347"
  },
  {
    type: "product",
    sourcePath: "/yezdi-adventure-bash-plate-silver-aluminium",
    targetPath: "/product/yezdi-scrambler/yezdi-adventure-bash-plate-silver-aluminium/69e279ad5685096a33ad9356"
  },
  {
    type: "product",
    sourcePath: "/yezdi-head-light-grill-ms-black",
    targetPath: "/product/yezdi-scrambler/yezdi-head-light-grill-ms-black/69e279ad5685096a33ad935e"
  },
  {
    type: "product",
    sourcePath: "/engine-frame-compatible-with-universal-slider-zi-8284-texture-matt-black-scram-411",
    targetPath: "/product/scram-411/engine-frame-compatible-with-universal-slider-zi-8284-texture-matt-black-scram-411/69e279ad5685096a33ad9367"
  },
  {
    type: "product",
    sourcePath: "/gtinterceptor-650-new-backrest-ms",
    targetPath: "/product/continental-gt-650-interceptor-650/gtinterceptor-650-new-backrest-ms/69e279ad5685096a33ad936f"
  },
  {
    type: "product",
    sourcePath: "/bmw-g310-gs-aluminium-heavy-duty-sump-guard-silver",
    targetPath: "/product/g-310-gs/bmw-g310-gs-aluminium-heavy-duty-sump-guard-silver/69e279ad5685096a33ad9361"
  },
  {
    type: "product",
    sourcePath: "/handle-bar-riser-ktm-adventure-250-aluminium-pull-back-angular",
    targetPath: "/product/adventure-250-390-390x-390-rally/handle-bar-riser-ktm-adventure-250-aluminium-pull-back-angular/69e279ad5685096a33ad9335"
  },
  {
    type: "product",
    sourcePath: "/yezdi-adventure-leg-guard-with-slider-black-lower",
    targetPath: "/product/yezdi-adventure/yezdi-adventure-leg-guard-with-slider-black-lower/69e279ad5685096a33ad9352"
  },
  {
    type: "product",
    sourcePath: "/bmw-g310gs-lower-engine-guard-ms-with-puck-silver",
    targetPath: "/product/g-310-gs/bmw-g310gs-lower-engine-guard-ms-with-puck-silver/69e279ad5685096a33ad9360"
  },
  {
    type: "product",
    sourcePath: "/backrest-honda-cb350",
    targetPath: "/product/cb350-highness/backrest-honda-cb350/69e279ad5685096a33ad9372"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-honeycomb-silver-half-aluminum-himalayan-bs346",
    targetPath: "/product/himalayan-411-bs6-2021-23/radiator-guard-honeycomb-silver-half-aluminum-himalayan-bs346/69e279ad5685096a33ad937b"
  },
  {
    type: "product",
    sourcePath: "/top-rack-dominar250-plate-compatible-with-pillion-backrest-texture-matt-black",
    targetPath: "/product/dominar-250-400-2019-2022/top-rack-dominar250-plate-compatible-with-pillion-backrest-texture-matt-black/69e279ad5685096a33ad9351"
  },
  {
    type: "product",
    sourcePath: "/yezdi-adventure-radiator-grill-honeycomb-black",
    targetPath: "/product/yezdi-adventure/yezdi-adventure-radiator-grill-honeycomb-black/69e279ad5685096a33ad9353"
  },
  {
    type: "product",
    sourcePath: "/yezdi-adventure-radiator-grill-honeycomb-silver",
    targetPath: "/product/yezdi-adventure/yezdi-adventure-radiator-grill-honeycomb-silver/69e279ad5685096a33ad935c"
  },
  {
    type: "product",
    sourcePath: "/top-rack-ktm-adventure-250-orange-black-new-compatible-with-grab-rail",
    targetPath: "/product/adventure-250-390-390x-390-rally/top-rack-ktm-adventure-250-orange-black-new-compatible-with-grab-rail/69e279ad5685096a33ad934d"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-w1-for-gt-interceptor-650-new",
    targetPath: "/product/continental-gt-650-interceptor-650/top-rack-with-plate-w1-for-gt-interceptor-650-new/69e279ad5685096a33ad9350"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-honeycomb-black-full-aluminum-himalayan-bs346",
    targetPath: "/product/himalayan-411-bs6-2021-23/radiator-guard-honeycomb-black-full-aluminum-himalayan-bs346/69e279ad5685096a33ad937a"
  },
  {
    type: "product",
    sourcePath: "/front-fork-slider-for-versys-650",
    targetPath: "/product/z900/front-fork-slider-for-versys-650/69e279ad5685096a33ad934b"
  },
  {
    type: "product",
    sourcePath: "/toprack-ktm-adv-250-390-390x-black-texture-matt-new",
    targetPath: "/product/adventure-250-390-390x-390-rally/toprack-ktm-adv-250-390-390x-black-texture-matt-new/69e279ad5685096a33ad934e"
  },
  {
    type: "product",
    sourcePath: "/paddock-stand-royal-enfield-himalayan-bs6-2021-22-glossy-red-color",
    targetPath: "/product/himalayan-411-bs6-2021-23/paddock-stand-royal-enfield-himalayan-bs6-2021-22-glossy-red-color/69e279ad5685096a33ad9387"
  },
  {
    type: "product",
    sourcePath: "/new-top-rack-with-aluminium-plate-and-compatible-with-pillion-backrest-for-gt-interceptor-650",
    targetPath: "/product/continental-gt-650-interceptor-650/new-top-rack-with-aluminium-plate-and-compatible-with-pillion-backrest-for-gt-interceptor-650/69e279ad5685096a33ad934c"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-black-for-cb350-hness",
    targetPath: "/product/cb350-highness/bash-plate-black-for-cb350-hness/69e279ad5685096a33ad933b"
  },
  {
    type: "product",
    sourcePath: "/pull-back-angular-handle-bar-riser-texture-matt-black-for-gtinterceptor-650",
    targetPath: "/product/continental-gt-650-interceptor-650/pull-back-angular-handle-bar-riser-texture-matt-black-for-gtinterceptor-650/69e279ad5685096a33ad933d"
  },
  {
    type: "product",
    sourcePath: "/yezdi-scrambler-top-rack-typew",
    targetPath: "/product/yezdi-scrambler/yezdi-scrambler-top-rack-typew/69e279ad5685096a33ad9371"
  },
  {
    type: "product",
    sourcePath: "/bmw-g310-gs-upper-fairing-guard-ms-black",
    targetPath: "/product/g-310-gs/bmw-g310-gs-upper-fairing-guard-ms-black/69e279ad5685096a33ad9370"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-honeycomb-black-half-aluminum-himalayan-bs346",
    targetPath: "/product/himalayan-411-bs6-2021-23/radiator-guard-honeycomb-black-half-aluminum-himalayan-bs346/69e279ad5685096a33ad9379"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-ktm-adventure250-silver",
    targetPath: "/product/adventure-250-390-390x-390-rally/saddle-stay-ktm-adventure250-silver/69e279ad5685096a33ad9340"
  },
  {
    type: "product",
    sourcePath: "/front-number-plate-relocator-dominar-250400-201922",
    targetPath: "/product/dominar-250-400-2019-2022/front-number-plate-relocator-dominar-250400-201922/69e279ad5685096a33ad9345"
  },
  {
    type: "product",
    sourcePath: "/pull-back-angular-handle-bar-riser-texture-matt-black-for-dominar-400250",
    targetPath: "/product/dominar-250-400-2019-2022/pull-back-angular-handle-bar-riser-texture-matt-black-for-dominar-400250/69e279ad5685096a33ad933e"
  },
  {
    type: "product",
    sourcePath: "/gps-mount-ktm-adventure-250-aluminium-stainless-steel",
    targetPath: "/product/adventure-250-390-390x-390-rally/gps-mount-ktm-adventure-250-aluminium-stainless-steel/69e279ad5685096a33ad9348"
  },
  {
    type: "product",
    sourcePath: "/honda-cb350-new-pillion-backrest-cushion-big",
    targetPath: "/product/cb350-highness/honda-cb350-new-pillion-backrest-cushion-big/69e279ad5685096a33ad9364"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-suzuki-vstrom-250-black-aluminium",
    targetPath: "/product/v-strom-sx-250/radiator-guard-suzuki-vstrom-250-black-aluminium/69e279ad5685096a33ad93a5"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-for-triumph-tiger-850",
    targetPath: "/product/tiger-850/saddle-stay-for-triumph-tiger-850/69e279ad5685096a33ad93d1"
  },
  {
    type: "product",
    sourcePath: "/top-rack-plate-4-mm-alu-for-triumph-tiger-850",
    targetPath: "/product/tiger-850/top-rack-plate-4-mm-alu-for-triumph-tiger-850/69e279ad5685096a33ad93d2"
  },
  {
    type: "product",
    sourcePath: "/engine-guard-for-triumph-street-scrambler-900",
    targetPath: "/product/street-scrambler-900/engine-guard-for-triumph-street-scrambler-900/69e279ad5685096a33ad93e3"
  },
  {
    type: "product",
    sourcePath: "/rear-paddock-spool-for-triumph-street-twin",
    targetPath: "/product/street-scrambler-900/rear-paddock-spool-for-triumph-street-twin/69e279ad5685096a33ad93e5"
  },
  {
    type: "product",
    sourcePath: "/fog-light-mount-for-honda-cb350",
    targetPath: "/product/cb350-highness/fog-light-mount-for-honda-cb350/69e279ad5685096a33ad93ea"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-w1-ms-compatible-with-pillion-backrest-for-royal-enfield-hunter-350",
    targetPath: "/product/hunter-350/top-rack-with-plate-w1-ms-compatible-with-pillion-backrest-for-royal-enfield-hunter-350/69e279ad5685096a33ad93f2"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-mild-steel-for-royal-enfield-hunter-350",
    targetPath: "/product/hunter-350/bash-plate-mild-steel-for-royal-enfield-hunter-350/69e279ad5685096a33ad93f3"
  },
  {
    type: "product",
    sourcePath: "/himalayan-bs6-202122-crash-guard-with-slider-silver-ms",
    targetPath: "/product/himalayan-411-bs6-2021-23/himalayan-bs6-202122-crash-guard-with-slider-silver-ms/69e279ad5685096a33ad93b4"
  },
  {
    type: "product",
    sourcePath: "/ktm-duke-250390-20192022-front-fluid-reservoir-oil-cover",
    targetPath: "/product/duke-250-390-2019-2022/ktm-duke-250390-20192022-front-fluid-reservoir-oil-cover/69e279ad5685096a33ad93b6"
  },
  {
    type: "product",
    sourcePath: "/top-rack-plate-aluminium-kawasaki-versys-650",
    targetPath: "/product/versys-650/top-rack-plate-aluminium-kawasaki-versys-650/69e279ad5685096a33ad93ba"
  },
  {
    type: "product",
    sourcePath: "/radiator-grill-honeycomb-black-texture-for-ducati-monster-950",
    targetPath: "/product/monster-950/radiator-grill-honeycomb-black-texture-for-ducati-monster-950/69e279ad5685096a33ad93cb"
  },
  {
    type: "product",
    sourcePath: "/radiator-grill-uk-flag-black-for-triumph-street-twin",
    targetPath: "/product/street-scrambler-900/radiator-grill-uk-flag-black-for-triumph-street-twin/69e279ad5685096a33ad93e0"
  },
  {
    type: "product",
    sourcePath: "/uk-flag-engine-cover-small-aluminium-for-triumph-street-twin",
    targetPath: "/product/street-scrambler-900/uk-flag-engine-cover-small-aluminium-for-triumph-street-twin/69e279ad5685096a33ad93e1"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-black-aluminium-for-ducati-scrambler",
    targetPath: "/product/scrambler/side-stand-extender-black-aluminium-for-ducati-scrambler/69e279ad5685096a33ad93e9"
  },
  {
    type: "product",
    sourcePath: "/top-rack-plate-suzuki-vstrom-250-aluminum-black",
    targetPath: "/product/v-strom-sx-250/top-rack-plate-suzuki-vstrom-250-aluminum-black/69e279ad5685096a33ad93a4"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-ktm-adventure-250390390-x",
    targetPath: "/product/adventure-250-390-390x-390-rally/side-stand-extender-for-ktm-adventure-250390390-x/69e279ad5685096a33ad93b1"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-4-mm-alu-for-triumph-tiger-850",
    targetPath: "/product/tiger-850/bash-plate-4-mm-alu-for-triumph-tiger-850/69e279ad5685096a33ad93d0"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-type2-for-triumph-street-twin",
    targetPath: "/product/street-scrambler-900/bash-plate-type2-for-triumph-street-twin/69e279ad5685096a33ad93de"
  },
  {
    type: "product",
    sourcePath: "/radiator-grill-honeycomb-black-for-triumph-street-twin",
    targetPath: "/product/street-scrambler-900/radiator-grill-honeycomb-black-for-triumph-street-twin/69e279ad5685096a33ad93df"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-with-jerry-can-mount-dominar-250400-201922",
    targetPath: "/product/dominar-250-400-2019-2022/saddle-stay-with-jerry-can-mount-dominar-250400-201922/69e279ad5685096a33ad939b"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-ms-with-slider-puck-black-for-vstrom-250",
    targetPath: "/product/v-strom-sx-250/crash-guard-ms-with-slider-puck-black-for-vstrom-250/69e279ad5685096a33ad93a2"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-honda-cb350",
    targetPath: "/product/cb350-highness/side-stand-extender-for-honda-cb350/69e279ad5685096a33ad93bf"
  },
  {
    type: "product",
    sourcePath: "/engine-frame-slider-assy-trident-660",
    targetPath: "/product/trident-660/engine-frame-slider-assy-trident-660/69e279ad5685096a33ad93c6"
  },
  {
    type: "product",
    sourcePath: "/front-fork-slider-for-triumph-street-twin",
    targetPath: "/product/street-scrambler-900/front-fork-slider-for-triumph-street-twin/69e279ad5685096a33ad93e4"
  },
  {
    type: "product",
    sourcePath: "/bmw-310-gs-front-fluid-reservoir-oil-cover-aluminium",
    targetPath: "/product/g-310-gs/bmw-310-gs-front-fluid-reservoir-oil-cover-aluminium/69e279ad5685096a33ad939c"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-ms-black-for-vstrom-250",
    targetPath: "/product/v-strom-sx-250/saddle-stay-ms-black-for-vstrom-250/69e279ad5685096a33ad93a3"
  },
  {
    type: "product",
    sourcePath: "/bmw-g-310-gs-new-vertical-handle-riser-aluminum-silver",
    targetPath: "/product/g-310-gs/bmw-g-310-gs-new-vertical-handle-riser-aluminum-silver/69e279ad5685096a33ad93b8"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-black-ms-for-royal-enfield-hunter-350",
    targetPath: "/product/hunter-350/crash-guard-with-slider-black-ms-for-royal-enfield-hunter-350/69e279ad5685096a33ad93bd"
  },
  {
    type: "product",
    sourcePath: "/rear-axle-protector-ducati-monster-950",
    targetPath: "/product/monster-950/rear-axle-protector-ducati-monster-950/69e279ad5685096a33ad93ca"
  },
  {
    type: "product",
    sourcePath: "/tank-guard-for-triumph-street-twin",
    targetPath: "/product/street-twin/tank-guard-for-triumph-street-twin/69e279ad5685096a33ad93d3"
  },
  {
    type: "product",
    sourcePath: "/frame-slider-for-ducati-scrambler",
    targetPath: "/product/scrambler/frame-slider-for-ducati-scrambler/69e279ad5685096a33ad93e7"
  },
  {
    type: "product",
    sourcePath: "/front-fork-slider-for-ducati-scrambler",
    targetPath: "/product/scrambler/front-fork-slider-for-ducati-scrambler/69e279ad5685096a33ad93e8"
  },
  {
    type: "product",
    sourcePath: "/gps-mount-suzuki-vstrom-250-aluminum-stainless-steel",
    targetPath: "/product/v-strom-sx-250/gps-mount-suzuki-vstrom-250-aluminum-stainless-steel/69e279ad5685096a33ad93b9"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-for-triumph-street-twin",
    targetPath: "/product/street-twin/top-rack-with-plate-for-triumph-street-twin/69e279ad5685096a33ad93d4"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-type1-for-triumph-street-twin",
    targetPath: "/product/street-scrambler-900/bash-plate-type1-for-triumph-street-twin/69e279ad5685096a33ad93dd"
  },
  {
    type: "product",
    sourcePath: "/linear-engine-cover-smallaluminium-for-triumph-street-scrambler",
    targetPath: "/product/street-scrambler-900/linear-engine-cover-smallaluminium-for-triumph-street-scrambler/69e279ad5685096a33ad93e2"
  },
  {
    type: "product",
    sourcePath: "/new-rear-master-cylinder-protector-for-ktm-adv-250-390-390-x",
    targetPath: "/product/adventure-250-390-390x-390-rally/new-rear-master-cylinder-protector-for-ktm-adv-250-390-390-x/69e279ad5685096a33ad93a8"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-oil-cover-for-suzuki-vstrom-250-ss",
    targetPath: "/product/v-strom-sx-250/front-fluid-reservoir-oil-cover-for-suzuki-vstrom-250-ss/69e279ad5685096a33ad93ad"
  },
  {
    type: "product",
    sourcePath: "/front-fork-slider-for-ktm-duke-390250200390-gen-3",
    targetPath: "/product/g-310-gs/front-fork-slider-for-ktm-duke-390250200390-gen-3/69e279ad5685096a33ad93b3"
  },
  {
    type: "product",
    sourcePath: "/dominar-250400-20192022-front-fluid-reservoir-oil-cover",
    targetPath: "/product/dominar-250-400-2019-2022/dominar-250400-20192022-front-fluid-reservoir-oil-cover/69e279ad5685096a33ad93b7"
  },
  {
    type: "product",
    sourcePath: "/honda-cb-300r-bash-plate-aluminium",
    targetPath: "/product/cb300r/honda-cb-300r-bash-plate-aluminium/69e279ad5685096a33ad93bb"
  },
  {
    type: "product",
    sourcePath: "/bmw-g310-gs-aluminium-heavy-duty-sump-guard-black",
    targetPath: "/product/g-310-gs/bmw-g310-gs-aluminium-heavy-duty-sump-guard-black/69e279ad5685096a33ad9396"
  },
  {
    type: "product",
    sourcePath: "/rear-master-cylinder-protector-re-gtinterceptor-650-aluminum",
    targetPath: "/product/continental-gt-650-interceptor-650/rear-master-cylinder-protector-re-gtinterceptor-650-aluminum/69e279ad5685096a33ad93a9"
  },
  {
    type: "product",
    sourcePath: "/rear-paddock-spools-aluminum-for-suzuki-vstrom-250",
    targetPath: "/product/v-strom-sx-250/rear-paddock-spools-aluminum-for-suzuki-vstrom-250/69e279ad5685096a33ad93ae"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-bmw-g-310gs-aluminum",
    targetPath: "/product/g-310-gs/side-stand-extender-bmw-g-310gs-aluminum/69e279ad5685096a33ad93b2"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-re-hunter350-aluminum",
    targetPath: "/product/hunter-350/bash-plate-re-hunter350-aluminum/69e279ad5685096a33ad93c1"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-honeycomb-black-2-mm-alu-set-for-triumph-tiger-850",
    targetPath: "/product/tiger-850/radiator-guard-honeycomb-black-2-mm-alu-set-for-triumph-tiger-850/69e279ad5685096a33ad93cd"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-ms-silver-for-vstrom-250",
    targetPath: "/product/v-strom-sx-250/bash-plate-ms-silver-for-vstrom-250/69e279ad5685096a33ad93a6"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-suzuki-vstrom-250-aluminum-stainless-steel",
    targetPath: "/product/v-strom-sx-250/side-stand-extender-suzuki-vstrom-250-aluminum-stainless-steel/69e279ad5685096a33ad93a7"
  },
  {
    type: "product",
    sourcePath: "/new-aluminum-top-rack-plate-silver-for-vstrom-250",
    targetPath: "/product/v-strom-sx-250/new-aluminum-top-rack-plate-silver-for-vstrom-250/69e279ad5685096a33ad93b5"
  },
  {
    type: "product",
    sourcePath: "/vertical-handle-riser-aluminum-suzuki-vstrom-250",
    targetPath: "/product/v-strom-sx-250/vertical-handle-riser-aluminum-suzuki-vstrom-250/69e279ad5685096a33ad93c3"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-re-hunter-350-aluminum-stainless-steel",
    targetPath: "/product/hunter-350/side-stand-extender-re-hunter-350-aluminum-stainless-steel/69e279ad5685096a33ad93c0"
  },
  {
    type: "product",
    sourcePath: "/front-fork-slider-ducati-monster-950",
    targetPath: "/product/monster-950/front-fork-slider-ducati-monster-950/69e279ad5685096a33ad93c8"
  },
  {
    type: "product",
    sourcePath: "/universal-paddock-spool-ss-304-ducati-monster-950",
    targetPath: "/product/monster-950/universal-paddock-spool-ss-304-ducati-monster-950/69e279ad5685096a33ad93c9"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-black-ms-for-vstrom-250",
    targetPath: "/product/v-strom-sx-250/bash-plate-black-ms-for-vstrom-250/69e279ad5685096a33ad93ab"
  },
  {
    type: "product",
    sourcePath: "/engine-guard-for-triumph-street-twin",
    targetPath: "/product/street-twin/engine-guard-for-triumph-street-twin/69e279ad5685096a33ad93d6"
  },
  {
    type: "product",
    sourcePath: "/top-rack-plate-big-for-triumph-street-scrambler-900",
    targetPath: "/product/street-scrambler-900/top-rack-plate-big-for-triumph-street-scrambler-900/69e279ad5685096a33ad93f6"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-oil-cover-for-honda-cb-350-aluminium",
    targetPath: "/product/cb350-highness/front-fluid-reservoir-oil-cover-for-honda-cb-350-aluminium/69e279ad5685096a33ad93aa"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-honda-cb300r",
    targetPath: "/product/cb300r/side-stand-extender-for-honda-cb300r/69e279ad5685096a33ad93be"
  },
  {
    type: "product",
    sourcePath: "/rear-paddock-spool-ss-304-for-triumph-tiger-850",
    targetPath: "/product/tiger-850/rear-paddock-spool-ss-304-for-triumph-tiger-850/69e279ad5685096a33ad93cf"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-himalayan-411-aluminum-stainless-steel",
    targetPath: "/product/scram-411/side-stand-extender-himalayan-411-aluminum-stainless-steel/69e279ad5685096a33ad93ef"
  },
  {
    type: "product",
    sourcePath: "/front-fork-slider-trident-660",
    targetPath: "/product/trident-660/front-fork-slider-trident-660/69e279ad5685096a33ad93c5"
  },
  {
    type: "product",
    sourcePath: "/honda-cb-300r-radiator-guard-honeycomb-black",
    targetPath: "/product/cb300r/honda-cb-300r-radiator-guard-honeycomb-black/69e279ad5685096a33ad93bc"
  },
  {
    type: "product",
    sourcePath: "/ducati-monster-950-frame-slider-lh-rh",
    targetPath: "/product/monster-950/ducati-monster-950-frame-slider-lh-rh/69e279ad5685096a33ad93c7"
  },
  {
    type: "product",
    sourcePath: "/upper-fairing-guard-triumph-tiger850-silver",
    targetPath: "/product/tiger-850/upper-fairing-guard-triumph-tiger850-silver/69e279ad5685096a33ad93cc"
  },
  {
    type: "product",
    sourcePath: "/rear-paddock-spool-for-ducati-scrambler",
    targetPath: "/product/scrambler/rear-paddock-spool-for-ducati-scrambler/69e279ad5685096a33ad93e6"
  },
  {
    type: "product",
    sourcePath: "/top-rack-plate-small-for-triumph-street-scrambler-900",
    targetPath: "/product/street-scrambler-900/top-rack-plate-small-for-triumph-street-scrambler-900/69e279ad5685096a33ad93f7"
  },
  {
    type: "product",
    sourcePath: "/back-rest-with-parcel-shelf-for-triumph-street-twin",
    targetPath: "/product/street-twin/back-rest-with-parcel-shelf-for-triumph-street-twin/69e279ad5685096a33ad93f8"
  },
  {
    type: "product",
    sourcePath: "/front-fork-slider-for-kawasaki-z900",
    targetPath: "/product/z900/front-fork-slider-for-kawasaki-z900/69e279ad5685096a33ad93fa"
  },
  {
    type: "product",
    sourcePath: "/top-rack-honda-cb350",
    targetPath: "/product/cb350-highness/top-rack-honda-cb350/69e279ad5685096a33ad93fb"
  },
  {
    type: "product",
    sourcePath: "/rear-master-cylinder-protector-himalayan-411",
    targetPath: "/product/himalayan-411-bs6-2021-23/rear-master-cylinder-protector-himalayan-411/69e279ad5685096a33ad93a1"
  },
  {
    type: "product",
    sourcePath: "/front-fork-slider-for-trumph-tiger-850",
    targetPath: "/product/tiger-850/front-fork-slider-for-trumph-tiger-850/69e279ad5685096a33ad93ce"
  },
  {
    type: "product",
    sourcePath: "/gps-mount-bmw-310gs-aluminum",
    targetPath: "/product/g-310-gs/gps-mount-bmw-310gs-aluminum/69e279ad5685096a33ad93ee"
  },
  {
    type: "product",
    sourcePath: "/backrest-with-parcel-shelf-mild-steel-for-royal-enfield-hunter-350",
    targetPath: "/product/hunter-350/backrest-with-parcel-shelf-mild-steel-for-royal-enfield-hunter-350/69e279ad5685096a33ad93f1"
  },
  {
    type: "product",
    sourcePath: "/himalayan-new-angular-handle-riser-aluminum",
    targetPath: "/product/himalayan-411-bs6-2021-23/himalayan-new-angular-handle-riser-aluminum/69e279ad5685096a33ad93af"
  },
  {
    type: "product",
    sourcePath: "/royal-enfield-hunter-350-headlight-guard-stainlesssteel",
    targetPath: "/product/hunter-350/royal-enfield-hunter-350-headlight-guard-stainlesssteel/69e279ad5685096a33ad93c2"
  },
  {
    type: "product",
    sourcePath: "/trident-universal-paddock-spool-ss-304",
    targetPath: "/product/trident-660/trident-universal-paddock-spool-ss-304/69e279ad5685096a33ad93c4"
  },
  {
    type: "product",
    sourcePath: "/back-rest-mild-steel-for-royal-enfield-hunter-350",
    targetPath: "/product/hunter-350/back-rest-mild-steel-for-royal-enfield-hunter-350/69e279ad5685096a33ad93f0"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-honeycomb-silver-2-mm-alu-set-for-triumph-tiger-850",
    targetPath: "/product/tiger-850/radiator-guard-honeycomb-silver-2-mm-alu-set-for-triumph-tiger-850/69e279ad5685096a33ad941d"
  },
  {
    type: "product",
    sourcePath: "/top-rack-ms-t1-compatible-with-backrest-for-super-meteor-650",
    targetPath: "/product/super-meteor-650/top-rack-ms-t1-compatible-with-backrest-for-super-meteor-650/69e279ad5685096a33ad9431"
  },
  {
    type: "product",
    sourcePath: "/universal-slider-puck-for-adventure-250390",
    targetPath: "/product/himalayan-411-bs6-2021-23/universal-slider-puck-for-adventure-250390/69e279ad5685096a33ad943f"
  },
  {
    type: "product",
    sourcePath: "/front-fork-slider-for-bmw-f850-gs",
    targetPath: "/product/f-850-gs-adventure/front-fork-slider-for-bmw-f850-gs/69e279ad5685096a33ad945a"
  },
  {
    type: "product",
    sourcePath: "/rear-axle-protector-for-bmw-f850-gs",
    targetPath: "/product/f-850-gs-adventure/rear-axle-protector-for-bmw-f850-gs/69e279ad5685096a33ad945d"
  },
  {
    type: "product",
    sourcePath: "/gps-mount-bmw-f850-gs",
    targetPath: "/product/f-850-gs/gps-mount-bmw-f850-gs/69e279ad5685096a33ad9407"
  },
  {
    type: "product",
    sourcePath: "/single-rod-slider-assy-ducati-diavel1260",
    targetPath: "/product/diavel-1260/single-rod-slider-assy-ducati-diavel1260/69e279ad5685096a33ad9420"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-bmw-f-850-gs",
    targetPath: "/product/f-850-gs/side-stand-extender-for-bmw-f-850-gs/69e279ad5685096a33ad9452"
  },
  {
    type: "product",
    sourcePath: "/engine-frame-slider-for-cb-300f",
    targetPath: "/product/cb300r/engine-frame-slider-for-cb-300f/69e279ad5685096a33ad9453"
  },
  {
    type: "product",
    sourcePath: "/rear-brake-protector-for-bmw-f850-gsa",
    targetPath: "/product/f-850-gs-adventure/rear-brake-protector-for-bmw-f850-gsa/69e279ad5685096a33ad945e"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-bmw-f850-gsa",
    targetPath: "/product/f-850-gs-adventure/side-stand-extender-for-bmw-f850-gsa/69e279ad5685096a33ad9460"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-silver-for-triumph-tiger-850",
    targetPath: "/product/tiger-850/saddle-stay-silver-for-triumph-tiger-850/69e279ad5685096a33ad940f"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-silver-aluminum-for-super-meteor-650",
    targetPath: "/product/super-meteor-650/bash-plate-silver-aluminum-for-super-meteor-650/69e279ad5685096a33ad942b"
  },
  {
    type: "product",
    sourcePath: "/backrest-ms-compatible-with-luggage-rack-for-super-meteor-650",
    targetPath: "/product/super-meteor-650/backrest-ms-compatible-with-luggage-rack-for-super-meteor-650/69e279ad5685096a33ad942f"
  },
  {
    type: "product",
    sourcePath: "/rear-footrest-pair-for-cb300r",
    targetPath: "/product/cb300r/rear-footrest-pair-for-cb300r/69e279ad5685096a33ad9456"
  },
  {
    type: "product",
    sourcePath: "/rear-footrest-mild-steel-pair-for-hunter-350",
    targetPath: "/product/hunter-350/rear-footrest-mild-steel-pair-for-hunter-350/69e279ad5685096a33ad9458"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-honda-cb300f",
    targetPath: "/product/cb300f/side-stand-extender-for-honda-cb300f/69e279ad5685096a33ad9400"
  },
  {
    type: "product",
    sourcePath: "/lower-engine-guard-sliver-for-triumph-tiger-850",
    targetPath: "/product/tiger-850/lower-engine-guard-sliver-for-triumph-tiger-850/69e279ad5685096a33ad940d"
  },
  {
    type: "product",
    sourcePath: "/top-rack-re-super-meteor-650-ms-with-pillion-backrest",
    targetPath: "/product/super-meteor-650/top-rack-re-super-meteor-650-ms-with-pillion-backrest/69e279ad5685096a33ad9411"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-honeycomb-black-for-kawasaki-vulcan-650",
    targetPath: "/product/vulcan-650/radiator-guard-honeycomb-black-for-kawasaki-vulcan-650/69e279ad5685096a33ad942d"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-aluminum-stainless-steel-for-gt-interceptor-650",
    targetPath: "/product/continental-gt-650-interceptor-650/side-stand-extender-aluminum-stainless-steel-for-gt-interceptor-650/69e279ad5685096a33ad944f"
  },
  {
    type: "product",
    sourcePath: "/top-rack-sheet-metal-with-pillion-backrest-for-super-meteor-650",
    targetPath: "/product/super-meteor-650/top-rack-sheet-metal-with-pillion-backrest-for-super-meteor-650/69e279ad5685096a33ad9451"
  },
  {
    type: "product",
    sourcePath: "/fog-light-mount-for-honda-cb300r",
    targetPath: "/product/cb300r/fog-light-mount-for-honda-cb300r/69e279ad5685096a33ad9462"
  },
  {
    type: "product",
    sourcePath: "/rear-fluid-reservoir-cover-for-honda-cb-350",
    targetPath: "/product/cb350-highness/rear-fluid-reservoir-cover-for-honda-cb-350/69e279ad5685096a33ad9410"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-super-meteor-650-black-uk-flag",
    targetPath: "/product/super-meteor-650/radiator-guard-super-meteor-650-black-uk-flag/69e279ad5685096a33ad9412"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-ducati-diavel1260-black",
    targetPath: "/product/diavel-1260/radiator-guard-ducati-diavel1260-black/69e279ad5685096a33ad941e"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-kawasaki-vulcan-650",
    targetPath: "/product/vulcan-650/side-stand-extender-for-kawasaki-vulcan-650/69e279ad5685096a33ad942e"
  },
  {
    type: "product",
    sourcePath: "/upper-crash-bars-silver-for-bmw-f850-gsa",
    targetPath: "/product/f-850-gs-adventure/upper-crash-bars-silver-for-bmw-f850-gsa/69e279ad5685096a33ad9461"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-for-super-meteor-650-with-slider",
    targetPath: "/product/super-meteor-650/crash-guard-for-super-meteor-650-with-slider/69e279ad5685096a33ad9465"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-bmw-f-850-gs-f-850-gsa-f-850-adventure",
    targetPath: "/product/f-850-gs/bash-plate-bmw-f-850-gs-f-850-gsa-f-850-adventure/69e279ad5685096a33ad9402"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-aluminium-bmw-f-900-xr",
    targetPath: "/product/f-900-xr/side-stand-extender-aluminium-bmw-f-900-xr/69e279ad5685096a33ad9423"
  },
  {
    type: "product",
    sourcePath: "/rear-footrest-pair-for-cb350",
    targetPath: "/product/cb350-highness/rear-footrest-pair-for-cb350/69e279ad5685096a33ad9455"
  },
  {
    type: "product",
    sourcePath: "/mirror-extender-for-suzuki-v-strom-250",
    targetPath: "/product/v-strom-sx-250/mirror-extender-for-suzuki-v-strom-250/69e279ad5685096a33ad9464"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-new-honda-cb300f-w1",
    targetPath: "/product/cb300f/top-rack-with-plate-new-honda-cb300f-w1/69e279ad5685096a33ad93fd"
  },
  {
    type: "product",
    sourcePath: "/frame-slider-for-kawasaki-z900",
    targetPath: "/product/z900/frame-slider-for-kawasaki-z900/69e279ad5685096a33ad9401"
  },
  {
    type: "product",
    sourcePath: "/lower-engine-guard-black-bmw-f-850-gs",
    targetPath: "/product/f-850-gs/lower-engine-guard-black-bmw-f-850-gs/69e279ad5685096a33ad9403"
  },
  {
    type: "product",
    sourcePath: "/lower-engine-guard-slider-puck-silver-bmw-f-850-gs",
    targetPath: "/product/f-850-gs/lower-engine-guard-slider-puck-silver-bmw-f-850-gs/69e279ad5685096a33ad9404"
  },
  {
    type: "product",
    sourcePath: "/tank-guard-black-for-bmw-f850-gs",
    targetPath: "/product/f-850-gs/tank-guard-black-for-bmw-f850-gs/69e279ad5685096a33ad9405"
  },
  {
    type: "product",
    sourcePath: "/rear-fluid-reservoir-cover-for-cb-300f",
    targetPath: "/product/cb300f/rear-fluid-reservoir-cover-for-cb-300f/69e279ad5685096a33ad940b"
  },
  {
    type: "product",
    sourcePath: "/front-fork-slider-for-ducati-diavel1260",
    targetPath: "/product/diavel-1260/front-fork-slider-for-ducati-diavel1260/69e279ad5685096a33ad941f"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-bmw-f-900-xr",
    targetPath: "/product/f-900-xr/crash-guard-bmw-f-900-xr/69e279ad5685096a33ad9425"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-aluminum-ss-for-royal-enfield-super-meteor-650",
    targetPath: "/product/super-meteor-650/side-stand-extender-aluminum-ss-for-royal-enfield-super-meteor-650/69e279ad5685096a33ad9442"
  },
  {
    type: "product",
    sourcePath: "/quickshifter-guard-for-bmw-f850-gsa",
    targetPath: "/product/f-850-gs-adventure/quickshifter-guard-for-bmw-f850-gsa/69e279ad5685096a33ad945c"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-texture-matt-black-honda-cb300f",
    targetPath: "/product/cb300f/crash-guard-with-slider-texture-matt-black-honda-cb300f/69e279ad5685096a33ad93fc"
  },
  {
    type: "product",
    sourcePath: "/fog-light-mount-for-honda-cb-300f",
    targetPath: "/product/cb300f/fog-light-mount-for-honda-cb-300f/69e279ad5685096a33ad9409"
  },
  {
    type: "product",
    sourcePath: "/rear-footrest-honda-cb300f-left-right",
    targetPath: "/product/cb300f/rear-footrest-honda-cb300f-left-right/69e279ad5685096a33ad9415"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-texture-matt-black-steel-for-meteor-350",
    targetPath: "/product/classic-350-reborn/crash-guard-with-slider-texture-matt-black-steel-for-meteor-350/69e279ad5685096a33ad9418"
  },
  {
    type: "product",
    sourcePath: "/rear-paddock-spool-for-kawasaki-z900",
    targetPath: "/product/z900/rear-paddock-spool-for-kawasaki-z900/69e279ad5685096a33ad941b"
  },
  {
    type: "product",
    sourcePath: "/backrest-for-triumph-speed-twin-1200",
    targetPath: "/product/speed-twin-900/backrest-for-triumph-speed-twin-1200/69e279ad5685096a33ad943c"
  },
  {
    type: "product",
    sourcePath: "/rear-footrest-re-super-meteor650",
    targetPath: "/product/super-meteor-650/rear-footrest-re-super-meteor650/69e279ad5685096a33ad9457"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-for-honda-cb-300f",
    targetPath: "/product/cb300f/front-fluid-reservoir-cover-for-honda-cb-300f/69e279ad5685096a33ad940a"
  },
  {
    type: "product",
    sourcePath: "/backrest-with-parcel-shelf-ms-for-classic-350-reborn",
    targetPath: "/product/classic-350-reborn/backrest-with-parcel-shelf-ms-for-classic-350-reborn/69e279ad5685096a33ad9419"
  },
  {
    type: "product",
    sourcePath: "/frame-slider-ducati-diavel1260",
    targetPath: "/product/diavel-1260/frame-slider-ducati-diavel1260/69e279ad5685096a33ad9421"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-ms-for-super-meteor-650",
    targetPath: "/product/super-meteor-650/crash-guard-ms-for-super-meteor-650/69e279ad5685096a33ad9429"
  },
  {
    type: "product",
    sourcePath: "/rear-master-cylinder-cover-small-aluminum-for-super-meteor-650",
    targetPath: "/product/super-meteor-650/rear-master-cylinder-cover-small-aluminum-for-super-meteor-650/69e279ad5685096a33ad9450"
  },
  {
    type: "product",
    sourcePath: "/rear-master-cylinder-cover-aluminum-big-for-super-meteor-650",
    targetPath: "/product/super-meteor-650/rear-master-cylinder-cover-aluminum-big-for-super-meteor-650/69e279ad5685096a33ad9463"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-gt-interceptor-650-aluminum-stainless-steel",
    targetPath: "/product/continental-gt-650-interceptor-650/side-stand-extender-gt-interceptor-650-aluminum-stainless-steel/69e279ad5685096a33ad9428"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-re-hunter-350-black",
    targetPath: "/product/hunter-350/saddle-stay-re-hunter-350-black/69e279ad5685096a33ad9454"
  },
  {
    type: "product",
    sourcePath: "/side-mirror-extender-bmw-f850-gsa",
    targetPath: "/product/f-850-gs-adventure/side-mirror-extender-bmw-f850-gsa/69e279ad5685096a33ad945f"
  },
  {
    type: "product",
    sourcePath: "/honda-cb-300fz-radiator-guard-honeycomb-black",
    targetPath: "/product/cb300f/honda-cb-300fz-radiator-guard-honeycomb-black/69e279ad5685096a33ad93ff"
  },
  {
    type: "product",
    sourcePath: "/backrest-for-super-meteor-650-with-luggage-rack",
    targetPath: "/product/super-meteor-650/backrest-for-super-meteor-650-with-luggage-rack/69e279ad5685096a33ad9430"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-black-for-honda-cb300f",
    targetPath: "/product/cb300f/bash-plate-black-for-honda-cb300f/69e279ad5685096a33ad9432"
  },
  {
    type: "product",
    sourcePath: "/rear-footrest-ktm-adventure-250-pair",
    targetPath: "/product/adventure-250-390-390x-390-rally/rear-footrest-ktm-adventure-250-pair/69e279ad5685096a33ad9459"
  },
  {
    type: "product",
    sourcePath: "/saddle-stays-for-soft-bags-honda-cb300f",
    targetPath: "/product/cb300f/saddle-stays-for-soft-bags-honda-cb300f/69e279ad5685096a33ad93fe"
  },
  {
    type: "product",
    sourcePath: "/heat-sink-guard-oil-cooler-guard-ducati-scrambler",
    targetPath: "/product/scrambler/heat-sink-guard-oil-cooler-guard-ducati-scrambler/69e279ad5685096a33ad9416"
  },
  {
    type: "product",
    sourcePath: "/gps-mount-bmw-f-900-xr",
    targetPath: "/product/f-900-xr/gps-mount-bmw-f-900-xr/69e279ad5685096a33ad9427"
  },
  {
    type: "product",
    sourcePath: "/top-rack-re-super-meteor-650-backrest",
    targetPath: "/product/super-meteor-650/top-rack-re-super-meteor-650-backrest/69e279ad5685096a33ad942c"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-for-cb300r",
    targetPath: "/product/cb300r/front-fluid-reservoir-cover-for-cb300r/69e279ad5685096a33ad9443"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-aluminum-black-for-classic-350-reborn",
    targetPath: "/product/classic-350-reborn/bash-plate-aluminum-black-for-classic-350-reborn/69e279ad5685096a33ad941a"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-hex-aluminium-for-super-meteor-650",
    targetPath: "/product/super-meteor-650/radiator-guard-hex-aluminium-for-super-meteor-650/69e279ad5685096a33ad942a"
  },
  {
    type: "product",
    sourcePath: "/rear-fluid-reservoir-cover-for-cb-300r",
    targetPath: "/product/cb300r/rear-fluid-reservoir-cover-for-cb-300r/69e279ad5685096a33ad940c"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-silver-for-triumph-tiger-850",
    targetPath: "/product/tiger-850/bash-plate-silver-for-triumph-tiger-850/69e279ad5685096a33ad940e"
  },
  {
    type: "product",
    sourcePath: "/chain-cover-for-triumph-speed-twin-900",
    targetPath: "/product/speed-twin-900/chain-cover-for-triumph-speed-twin-900/69e279ad5685096a33ad9435"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-for-super-meteor-650-aluminum-black",
    targetPath: "/product/super-meteor-650/bash-plate-for-super-meteor-650-aluminum-black/69e279ad5685096a33ad941c"
  },
  {
    type: "product",
    sourcePath: "/top-rack-triumph-speed-400-black",
    targetPath: "/product/speed-400/top-rack-triumph-speed-400-black/69e279ad5685096a33ad9485"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-triumph-speed-400-black",
    targetPath: "/product/speed-400/bash-plate-triumph-speed-400-black/69e279ad5685096a33ad9487"
  },
  {
    type: "product",
    sourcePath: "/headlight-guard-for-super-meteor-650-black-stainless-steel",
    targetPath: "/product/super-meteor-650/headlight-guard-for-super-meteor-650-black-stainless-steel/69e279ad5685096a33ad94a8"
  },
  {
    type: "product",
    sourcePath: "/rear-footrest-re-meteor-350-steel",
    targetPath: "/product/meteor-350/rear-footrest-re-meteor-350-steel/69e279ad5685096a33ad94b0"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-ktm-duke-390-black",
    targetPath: "/product/duke-390-250-200-390-gen-3/crash-guard-ktm-duke-390-black/69e279ad5685096a33ad94c8"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-black-for-triumph-speed-400",
    targetPath: "/product/speed-400/side-stand-extender-black-for-triumph-speed-400/69e279ad5685096a33ad948a"
  },
  {
    type: "product",
    sourcePath: "/front-fork-slider-for-triumph-speed-400",
    targetPath: "/product/speed-400/front-fork-slider-for-triumph-speed-400/69e279ad5685096a33ad9490"
  },
  {
    type: "product",
    sourcePath: "/fog-light-mount-ms-for-classic-350-reborn",
    targetPath: "/product/classic-350-reborn/fog-light-mount-ms-for-classic-350-reborn/69e279ad5685096a33ad9492"
  },
  {
    type: "product",
    sourcePath: "/front-fork-slider-for-ducati-hypermotard-950",
    targetPath: "/product/hypermotard-950/front-fork-slider-for-ducati-hypermotard-950/69e279ad5685096a33ad94aa"
  },
  {
    type: "product",
    sourcePath: "/retro-saddle-bag-for-gt-interceptor-650",
    targetPath: "/product/continental-gt-650-interceptor-650/retro-saddle-bag-for-gt-interceptor-650/69e279ad5685096a33ad94b3"
  },
  {
    type: "product",
    sourcePath: "/mirror-extender-for-honda-cb350",
    targetPath: "/product/cb350-highness/mirror-extender-for-honda-cb350/69e279ad5685096a33ad947b"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-puck-slider-black-for-triumph-speed-400",
    targetPath: "/product/speed-400/crash-guard-with-puck-slider-black-for-triumph-speed-400/69e279ad5685096a33ad9484"
  },
  {
    type: "product",
    sourcePath: "/top-rack-triumph-speed-400-aluminum-plate-black",
    targetPath: "/product/speed-400/top-rack-triumph-speed-400-aluminum-plate-black/69e279ad5685096a33ad9486"
  },
  {
    type: "product",
    sourcePath: "/fog-light-mount-ms-for-super-meteor-650",
    targetPath: "/product/super-meteor-650/fog-light-mount-ms-for-super-meteor-650/69e279ad5685096a33ad9491"
  },
  {
    type: "product",
    sourcePath: "/offset-handle-bar-riser-honda-cb300r-aluminum",
    targetPath: "/product/cb300r/offset-handle-bar-riser-honda-cb300r-aluminum/69e279ad5685096a33ad9497"
  },
  {
    type: "product",
    sourcePath: "/headlight-guard-stainless-steel-t1-for-for-royal-enfield-meteor-350",
    targetPath: "/product/meteor-350/headlight-guard-stainless-steel-t1-for-for-royal-enfield-meteor-350/69e279ad5685096a33ad94ae"
  },
  {
    type: "product",
    sourcePath: "/adventure-saddle-bag-for-classic-350-reborn",
    targetPath: "/product/tiger-900-rally-pro/adventure-saddle-bag-for-classic-350-reborn/69e279ad5685096a33ad94c3"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-black-for-triumph-speed-400",
    targetPath: "/product/scrambler-400-x/crash-guard-with-slider-black-for-triumph-speed-400/69e279ad5685096a33ad94c4"
  },
  {
    type: "product",
    sourcePath: "/rear-oil-reservoir-hex-cover-for-super-meteor-650-not-compatible-with-royal-enfield-big-leg-guard",
    targetPath: "/product/super-meteor-650/rear-oil-reservoir-hex-cover-for-super-meteor-650-not-compatible-with-royal-enfield-big-leg-guard/69e279ad5685096a33ad9475"
  },
  {
    type: "product",
    sourcePath: "/mirror-extender-for-bmw-f-900-xr",
    targetPath: "/product/tiger-850/mirror-extender-for-bmw-f-900-xr/69e279ad5685096a33ad947a"
  },
  {
    type: "product",
    sourcePath: "/handlebar-riser-for-super-meteor-650-vertical-aluminum",
    targetPath: "/product/super-meteor-650/handlebar-riser-for-super-meteor-650-vertical-aluminum/69e279ad5685096a33ad948b"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-bmw-f850-gs-adventure-black",
    targetPath: "/product/f-900-xr/bash-plate-bmw-f850-gs-adventure-black/69e279ad5685096a33ad949d"
  },
  {
    type: "product",
    sourcePath: "/overlander-saddle-bag-for-classic-350-reborna",
    targetPath: "/product/v-strom-sx-250/overlander-saddle-bag-for-classic-350-reborna/69e279ad5685096a33ad94b9"
  },
  {
    type: "product",
    sourcePath: "/offset-handlebar-riser-bmw-f-900-xr",
    targetPath: "/product/f-850-gs/offset-handlebar-riser-bmw-f-900-xr/69e279ad5685096a33ad9477"
  },
  {
    type: "product",
    sourcePath: "/fog-light-mount-bmw-310gs",
    targetPath: "/product/g-310-gs/fog-light-mount-bmw-310gs/69e279ad5685096a33ad9495"
  },
  {
    type: "product",
    sourcePath: "/side-stand-bmw-g-310gs-extender-aluminum",
    targetPath: "/product/g-310-gs/side-stand-bmw-g-310gs-extender-aluminum/69e279ad5685096a33ad9499"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-yamaha-mt-15",
    targetPath: "/product/mt-15/side-stand-extender-for-yamaha-mt-15/69e279ad5685096a33ad94a4"
  },
  {
    type: "product",
    sourcePath: "/head-light-grill-black-for-triumph-speed-400",
    targetPath: "/product/speed-400/head-light-grill-black-for-triumph-speed-400/69e279ad5685096a33ad948d"
  },
  {
    type: "product",
    sourcePath: "/mirror-extender-for-ktm-adv-390250",
    targetPath: "/product/hunter-350/mirror-extender-for-ktm-adv-390250/69e279ad5685096a33ad9493"
  },
  {
    type: "product",
    sourcePath: "/offset-handle-bar-riser-for-cb300f",
    targetPath: "/product/cb300f/offset-handle-bar-riser-for-cb300f/69e279ad5685096a33ad9498"
  },
  {
    type: "product",
    sourcePath: "/frame-slider-for-ducati-hypermotard-950-coming-soon-prebooking-open-now",
    targetPath: "/product/hypermotard-950/frame-slider-for-ducati-hypermotard-950-coming-soon-prebooking-open-now/69e279ad5685096a33ad94ac"
  },
  {
    type: "product",
    sourcePath: "/back-rest-black-for-for-triumph-speed-400",
    targetPath: "/product/scrambler-400-x/back-rest-black-for-for-triumph-speed-400/69e279ad5685096a33ad94c7"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-honda-cb-300r-for-bs4bs6",
    targetPath: "/product/cb300r/top-rack-with-plate-honda-cb-300r-for-bs4bs6/69e279ad5685096a33ad94a7"
  },
  {
    type: "product",
    sourcePath: "/radiator-grill-triumph-speed-400-black",
    targetPath: "/product/speed-400/radiator-grill-triumph-speed-400-black/69e279ad5685096a33ad9489"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-black-for-triumph-speed-400",
    targetPath: "/product/speed-400/front-fluid-reservoir-cover-black-for-triumph-speed-400/69e279ad5685096a33ad948f"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-black-for-yamaha-mt-15",
    targetPath: "/product/mt-15/crash-guard-with-slider-black-for-yamaha-mt-15/69e279ad5685096a33ad94a2"
  },
  {
    type: "product",
    sourcePath: "/top-rack-compatible-with-royal-enfield-backrest-ms-for-super-meteor-650",
    targetPath: "/product/super-meteor-650/top-rack-compatible-with-royal-enfield-backrest-ms-for-super-meteor-650/69e279ad5685096a33ad9466"
  },
  {
    type: "product",
    sourcePath: "/rear-footrest-pair-for-suzuki-vstrom-250",
    targetPath: "/product/v-strom-sx-250/rear-footrest-pair-for-suzuki-vstrom-250/69e279ad5685096a33ad9480"
  },
  {
    type: "product",
    sourcePath: "/radiator-grill-honeycomb-black-for-triumph-speed-400",
    targetPath: "/product/speed-400/radiator-grill-honeycomb-black-for-triumph-speed-400/69e279ad5685096a33ad9488"
  },
  {
    type: "product",
    sourcePath: "/offset-handle-bar-riser-black-for-triumph-speed-400",
    targetPath: "/product/speed-400/offset-handle-bar-riser-black-for-triumph-speed-400/69e279ad5685096a33ad949b"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-for-yamaha-mt-15",
    targetPath: "/product/mt-15/top-rack-with-plate-for-yamaha-mt-15/69e279ad5685096a33ad94a3"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-yamaha-mt-15",
    targetPath: "/product/mt-15/front-fluid-reservoir-cover-yamaha-mt-15/69e279ad5685096a33ad94a6"
  },
  {
    type: "product",
    sourcePath: "/fog-light-mount-for-xpulse-200",
    targetPath: "/product/xpulse-200/fog-light-mount-for-xpulse-200/69e279ad5685096a33ad9468"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-triumph-street-scrambler-900",
    targetPath: "/product/street-scrambler-900/side-stand-extender-for-triumph-street-scrambler-900/69e279ad5685096a33ad949f"
  },
  {
    type: "product",
    sourcePath: "/saddle-stays-mild-steel-with-exhaust-sheild-with-jerry-can-mounting-texture-matt-black-for-classic-350-reborn",
    targetPath: "/product/classic-350-reborn/saddle-stays-mild-steel-with-exhaust-sheild-with-jerry-can-mounting-texture-matt-black-for-classic-350-reborn/69e279ad5685096a33ad9476"
  },
  {
    type: "product",
    sourcePath: "/mirror-extender-aluminum-for-bmw-310-gs",
    targetPath: "/product/mt-15/mirror-extender-aluminum-for-bmw-310-gs/69e279ad5685096a33ad94a5"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-type1-for-royal-enfield-meteor-350",
    targetPath: "/product/meteor-350/top-rack-with-plate-type1-for-royal-enfield-meteor-350/69e279ad5685096a33ad94ad"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stays-mild-steel-with-exhaust-sheild-with-jerry-can-mount-texture-matt-black-for-meteor-350",
    targetPath: "/product/meteor-350/roadster-saddle-stays-mild-steel-with-exhaust-sheild-with-jerry-can-mount-texture-matt-black-for-meteor-350/69e279ad5685096a33ad94af"
  },
  {
    type: "product",
    sourcePath: "/backrest-sheet-metal-for-super-meteor-650",
    targetPath: "/product/super-meteor-650/backrest-sheet-metal-for-super-meteor-650/69e279ad5685096a33ad9470"
  },
  {
    type: "product",
    sourcePath: "/pillion-backrest-for-suzuki-vstrom-250",
    targetPath: "/product/v-strom-sx-250/pillion-backrest-for-suzuki-vstrom-250/69e279ad5685096a33ad9474"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-honeycom-black-for-xpulse-200",
    targetPath: "/product/xpulse-200/radiator-guard-honeycom-black-for-xpulse-200/69e279ad5685096a33ad946a"
  },
  {
    type: "product",
    sourcePath: "/top-rack-plate-xpulse-200-small",
    targetPath: "/product/xpulse-200/top-rack-plate-xpulse-200-small/69e279ad5685096a33ad946d"
  },
  {
    type: "product",
    sourcePath: "/pillion-backrest-for-ktm-adventure-250390",
    targetPath: "/product/adventure-250-390-390x-390-rally/pillion-backrest-for-ktm-adventure-250390/69e279ad5685096a33ad9473"
  },
  {
    type: "product",
    sourcePath: "/mirror-extender-aluminum-for-super-meteor-650",
    targetPath: "/product/super-meteor-650/mirror-extender-aluminum-for-super-meteor-650/69e279ad5685096a33ad947f"
  },
  {
    type: "product",
    sourcePath: "/saddle-bag-for-suzuki-vstrom-250",
    targetPath: "/product/v-strom-sx-250/saddle-bag-for-suzuki-vstrom-250/69e279ad5685096a33ad94ba"
  },
  {
    type: "product",
    sourcePath: "/vertical-handle-riser-black-for-triumph-speed-400",
    targetPath: "/product/speed-400/vertical-handle-riser-black-for-triumph-speed-400/69e279ad5685096a33ad948c"
  },
  {
    type: "product",
    sourcePath: "/fog-light-mount-for-ktm-adv-390250",
    targetPath: "/product/adventure-250-390-390x-390-rally/fog-light-mount-for-ktm-adv-390250/69e279ad5685096a33ad9496"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-re-meteor-350-aluminium",
    targetPath: "/product/meteor-350/front-fluid-reservoir-cover-re-meteor-350-aluminium/69e279ad5685096a33ad94b1"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-for-xpulse-200",
    targetPath: "/product/xpulse-200/crash-guard-with-slider-for-xpulse-200/69e279ad5685096a33ad9467"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-hero-xpulse-200",
    targetPath: "/product/xpulse-200/saddle-stay-hero-xpulse-200/69e279ad5685096a33ad946b"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-for-super-meteor-650-with-jerry-can-mount",
    targetPath: "/product/super-meteor-650/saddle-stay-for-super-meteor-650-with-jerry-can-mount/69e279ad5685096a33ad9472"
  },
  {
    type: "product",
    sourcePath: "/headlight-guard-type2-for-super-meteor-650",
    targetPath: "/product/super-meteor-650/headlight-guard-type2-for-super-meteor-650/69e279ad5685096a33ad94a9"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-hero-xpulse200",
    targetPath: "/product/xpulse-200/side-stand-extender-hero-xpulse200/69e279ad5685096a33ad946c"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-ktm-adventure-250-aluminium-black",
    targetPath: "/product/adventure-250-390-390x-390-rally/bash-plate-ktm-adventure-250-aluminium-black/69e279ad5685096a33ad9481"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-ms-for-triumph-speed-400",
    targetPath: "/product/speed-400/bash-plate-ms-for-triumph-speed-400/69e279ad5685096a33ad94a0"
  },
  {
    type: "product",
    sourcePath: "/mirror-extender-for-ducati-hypermotard-950",
    targetPath: "/product/hypermotard-950/mirror-extender-for-ducati-hypermotard-950/69e279ad5685096a33ad94ab"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-ms-for-classic-350-reborn",
    targetPath: "/product/classic-350-reborn/top-rack-with-plate-ms-for-classic-350-reborn/69e279ad5685096a33ad94b2"
  },
  {
    type: "product",
    sourcePath: "/tail-tidy-black-for-scrambler-400",
    targetPath: "/product/speed-400/tail-tidy-black-for-scrambler-400/69e279ad5685096a33ad94e1"
  },
  {
    type: "product",
    sourcePath: "/panniers-for-himalayan-450-36ltr-aluminium-silver-with-frame",
    targetPath: "/product/himalayan-450/panniers-for-himalayan-450-36ltr-aluminium-silver-with-frame/69e279ad5685096a33ad9504"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-for-shotgun-650-black-mild-steel-type1",
    targetPath: "/product/shotgun-650/crash-guard-for-shotgun-650-black-mild-steel-type1/69e279ad5685096a33ad9525"
  },
  {
    type: "product",
    sourcePath: "/lower-engine-guard-for-honda-nx500",
    targetPath: "/product/nx500/lower-engine-guard-for-honda-nx500/69e279ad5685096a33ad9539"
  },
  {
    type: "product",
    sourcePath: "/universal-mobile-holder-without-charger-for-ktm-adventure-250-390-390-x",
    targetPath: "/product/zana-accessories/universal-mobile-holder-without-charger-for-ktm-adventure-250-390-390-x/69e279ad5685096a33ad9541"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-for-honda-nx500-mild-steel-black",
    targetPath: "/product/nx500/top-rack-with-plate-for-honda-nx500-mild-steel-black/69e279ad5685096a33ad9547"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-rflat-black-with-frame-for-himalayan-411",
    targetPath: "/product/zana-accessories/panniers-36-ltr-aluminium-rflat-black-with-frame-for-himalayan-411/69e279ad5685096a33ad955d"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stay-exhaust-sheild-with-jerry-can-mount-for-kawasaki-versys-650",
    targetPath: "/product/versys-650/roadster-saddle-stay-exhaust-sheild-with-jerry-can-mount-for-kawasaki-versys-650/69e279ad5685096a33ad956b"
  },
  {
    type: "product",
    sourcePath: "/rear-footrest-for-honda-cb200x",
    targetPath: "/product/cb200x/rear-footrest-for-honda-cb200x/69e279ad5685096a33ad957c"
  },
  {
    type: "product",
    sourcePath: "/front-fuild-reservior-cover-for-honda-cb200x",
    targetPath: "/product/cb200x/front-fuild-reservior-cover-for-honda-cb200x/69e279ad5685096a33ad957e"
  },
  {
    type: "product",
    sourcePath: "/maximus-tail-bag-36-litre-single-bag",
    targetPath: "/product/g-310-gs/maximus-tail-bag-36-litre-single-bag/69e279ad5685096a33ad958d"
  },
  {
    type: "product",
    sourcePath: "/pluto-tail-bag-tank-bag",
    targetPath: "/product/zana-accessories/pluto-tail-bag-tank-bag/69e279ad5685096a33ad95a2"
  },
  {
    type: "product",
    sourcePath: "/drake-universal-fabric-saddle-bag-32-litre-single-bag",
    targetPath: "/product/zana-accessories/drake-universal-fabric-saddle-bag-32-litre-single-bag/69e279ad5685096a33ad95a5"
  },
  {
    type: "product",
    sourcePath: "/broozer-tail-bag-50-litre",
    targetPath: "/product/super-meteor-650/broozer-tail-bag-50-litre/69e279ad5685096a33ad95d1"
  },
  {
    type: "product",
    sourcePath: "/universal-gel-seat-cushion-small-495grm",
    targetPath: "/product/n-a/universal-gel-seat-cushion-small-495grm/69e279ad5685096a33ad9600"
  },
  {
    type: "product",
    sourcePath: "/top-rack-ktm-duke-390",
    targetPath: "/product/duke-390-250-200-390-gen-3/top-rack-ktm-duke-390/69e279ad5685096a33ad94cf"
  },
  {
    type: "product",
    sourcePath: "/tail-tidy-black-for-honda-cb300r",
    targetPath: "/product/cb300r/tail-tidy-black-for-honda-cb300r/69e279ad5685096a33ad9502"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-rally-pro-aluminium-stainless-steel",
    targetPath: "/product/tiger-900-rally-pro/side-stand-extender-rally-pro-aluminium-stainless-steel/69e279ad5685096a33ad950d"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-triumph-tiger850-aluminum-stainless-steel",
    targetPath: "/product/tiger-850/side-stand-extender-triumph-tiger850-aluminum-stainless-steel/69e279ad5685096a33ad9512"
  },
  {
    type: "product",
    sourcePath: "/universal-mobile-holder-with-usb-charger-for-ktm-adventure-250390390-x",
    targetPath: "/product/zana-accessories/universal-mobile-holder-with-usb-charger-for-ktm-adventure-250390390-x/69e279ad5685096a33ad953f"
  },
  {
    type: "product",
    sourcePath: "/lower-engine-guard-honda-nx500-silver-mild-steel",
    targetPath: "/product/nx500/lower-engine-guard-honda-nx500-silver-mild-steel/69e279ad5685096a33ad954e"
  },
  {
    type: "product",
    sourcePath: "/tail-tidy-for-triumph-street-triple-765",
    targetPath: "/product/street-triple-765/tail-tidy-for-triumph-street-triple-765/69e279ad5685096a33ad9583"
  },
  {
    type: "product",
    sourcePath: "/handle-weight-trident-660",
    targetPath: "/product/street-triple-765/handle-weight-trident-660/69e279ad5685096a33ad9584"
  },
  {
    type: "product",
    sourcePath: "/tripper-tank-bag-80-litre",
    targetPath: "/product/adventure-250-390-390x-390-rally/tripper-tank-bag-80-litre/69e279ad5685096a33ad95b8"
  },
  {
    type: "product",
    sourcePath: "/headlight-guard-for-himalayan-450-black-color-stainless-steel-type3",
    targetPath: "/product/guerrilla-450/headlight-guard-for-himalayan-450-black-color-stainless-steel-type3/69e279ad5685096a33ad95de"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stay-for-himalayan-450-with-jerry-can-mount-v2-mild-steel",
    targetPath: "/product/himalayan-450/roadster-saddle-stay-for-himalayan-450-with-jerry-can-mount-v2-mild-steel/69e279ad5685096a33ad94ed"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-ktm-duke-390-black",
    targetPath: "/product/duke-390-250-200-390-gen-3/saddle-stay-ktm-duke-390-black/69e279ad5685096a33ad94fe"
  },
  {
    type: "product",
    sourcePath: "/tail-tidy-for-super-meteor-650-black",
    targetPath: "/product/super-meteor-650/tail-tidy-for-super-meteor-650-black/69e279ad5685096a33ad9506"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-aluminum-stainlesssteel-for-himalayan-450",
    targetPath: "/product/himalayan-450/side-stand-extender-aluminum-stainlesssteel-for-himalayan-450/69e279ad5685096a33ad952c"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-honda-nx500-aluminium-stainless-steel",
    targetPath: "/product/nx500/side-stand-extender-for-honda-nx500-aluminium-stainless-steel/69e279ad5685096a33ad9536"
  },
  {
    type: "product",
    sourcePath: "/rear-oil-reservoir-cover-for-harley-davidson-x440",
    targetPath: "/product/harley-x440/rear-oil-reservoir-cover-for-harley-davidson-x440/69e279ad5685096a33ad953b"
  },
  {
    type: "product",
    sourcePath: "/top-rack-plate-himalayan-450-aluminium-silver",
    targetPath: "/product/himalayan-450/top-rack-plate-himalayan-450-aluminium-silver/69e279ad5685096a33ad954a"
  },
  {
    type: "product",
    sourcePath: "/headlight-guard-himalayan-450-black-stainless-steel",
    targetPath: "/product/himalayan-450/headlight-guard-himalayan-450-black-stainless-steel/69e279ad5685096a33ad954b"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-for-honda-nx500-black",
    targetPath: "/product/nx500/bash-plate-for-honda-nx500-black/69e279ad5685096a33ad9572"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-honda-cb200x",
    targetPath: "/product/cb200x/side-stand-extender-for-honda-cb200x/69e279ad5685096a33ad9579"
  },
  {
    type: "product",
    sourcePath: "/vader-hard-shell-tail-bag-65-litre",
    targetPath: "/product/zana-accessories/vader-hard-shell-tail-bag-65-litre/69e279ad5685096a33ad95a0"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-for-himalayan-450-ms-black",
    targetPath: "/product/guerrilla-450/bash-plate-for-himalayan-450-ms-black/69e279ad5685096a33ad95d8"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-re-himalayan-450-aluminium-black",
    targetPath: "/product/guerrilla-450/radiator-guard-re-himalayan-450-aluminium-black/69e279ad5685096a33ad95e2"
  },
  {
    type: "product",
    sourcePath: "/guerrilla450-panniers-36-litre-lflat-aluminium-silver",
    targetPath: "/product/guerrilla-450/guerrilla450-panniers-36-litre-lflat-aluminium-silver/69e279ad5685096a33ad9602"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-orange-for-ktm-duke-390250200390-gen-3",
    targetPath: "/product/duke-390-250-200-390-gen-3/crash-guard-with-slider-orange-for-ktm-duke-390250200390-gen-3/69e279ad5685096a33ad94cd"
  },
  {
    type: "product",
    sourcePath: "/tail-tidy-black-for-suzuki-hayabusa-1300",
    targetPath: "/product/hayabusa-1300/tail-tidy-black-for-suzuki-hayabusa-1300/69e279ad5685096a33ad94d4"
  },
  {
    type: "product",
    sourcePath: "/back-rest-sheet-metal-for-triumph-scrambler-400",
    targetPath: "/product/scrambler-400-x/back-rest-sheet-metal-for-triumph-scrambler-400/69e279ad5685096a33ad94da"
  },
  {
    type: "product",
    sourcePath: "/offset-handlebar-riser-for-himalayan-450-texture-black-aluminium-billet",
    targetPath: "/product/himalayan-450/offset-handlebar-riser-for-himalayan-450-texture-black-aluminium-billet/69e279ad5685096a33ad94e3"
  },
  {
    type: "product",
    sourcePath: "/tail-tidy-black-for-ktm-duke-390250200390-gen-3",
    targetPath: "/product/duke-390-250-200-390-gen-3/tail-tidy-black-for-ktm-duke-390250200390-gen-3/69e279ad5685096a33ad9507"
  },
  {
    type: "product",
    sourcePath: "/upper-fairing-guard-for-bmw-310-gs-silver-stainless-steel",
    targetPath: "/product/g-310-gs/upper-fairing-guard-for-bmw-310-gs-silver-stainless-steel/69e279ad5685096a33ad9521"
  },
  {
    type: "product",
    sourcePath: "/universal-top-box-cushion",
    targetPath: "/product/zana-accessories/universal-top-box-cushion/69e279ad5685096a33ad9545"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-suzuki-vstrom-250-aluminums-stainless-steel",
    targetPath: "/product/v-strom-sx-250/side-stand-extender-for-suzuki-vstrom-250-aluminums-stainless-steel/69e279ad5685096a33ad9549"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-rflat-silver-with-frame-for-ktm-adv-250-390",
    targetPath: "/product/adventure-250-390-390x-390-rally/panniers-36-ltr-aluminium-rflat-silver-with-frame-for-ktm-adv-250-390/69e279ad5685096a33ad9554"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-rflat-black-with-frame-for-super-meteor-650",
    targetPath: "/product/super-meteor-650/panniers-36-ltr-aluminium-rflat-black-with-frame-for-super-meteor-650/69e279ad5685096a33ad9557"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-puck-for-honda-cb200x-black",
    targetPath: "/product/cb200x/crash-guard-with-slider-puck-for-honda-cb200x-black/69e279ad5685096a33ad9577"
  },
  {
    type: "product",
    sourcePath: "/frame-slider-for-triumph-street-triple-765",
    targetPath: "/product/street-triple-765/frame-slider-for-triumph-street-triple-765/69e279ad5685096a33ad957f"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-bag-60-litres-pair-bag-30-litre-each",
    targetPath: "/product/zana-accessories/roadster-saddle-bag-60-litres-pair-bag-30-litre-each/69e279ad5685096a33ad95a6"
  },
  {
    type: "product",
    sourcePath: "/universal-gel-seat-cushion-large-800grm",
    targetPath: "/product/n-a/universal-gel-seat-cushion-large-800grm/69e279ad5685096a33ad95fe"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-puck-black-for-ktm-duke-390250200390-gen-3",
    targetPath: "/product/duke-390-250-200-390-gen-3/crash-guard-with-slider-puck-black-for-ktm-duke-390250200390-gen-3/69e279ad5685096a33ad94f6"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-puck-orange-for-ktm-duke-390250200390-gen-3",
    targetPath: "/product/duke-390-250-200-390-gen-3/crash-guard-with-slider-puck-orange-for-ktm-duke-390250200390-gen-3/69e279ad5685096a33ad94f7"
  },
  {
    type: "product",
    sourcePath: "/panniers-suzuki-vstrom-250-36ltr-aluminium-silver",
    targetPath: "/product/v-strom-sx-250/panniers-suzuki-vstrom-250-36ltr-aluminium-silver/69e279ad5685096a33ad9508"
  },
  {
    type: "product",
    sourcePath: "/panniers-himalayan-450-36ltr-aluminum-black",
    targetPath: "/product/himalayan-450/panniers-himalayan-450-36ltr-aluminum-black/69e279ad5685096a33ad9511"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stay-black-with-jerry-can-mounting-for-ktm-adv-250-390-390-x",
    targetPath: "/product/adventure-250-390-390x-390-rally/roadster-saddle-stay-black-with-jerry-can-mounting-for-ktm-adv-250-390-390-x/69e279ad5685096a33ad9563"
  },
  {
    type: "product",
    sourcePath: "/headlight-grill-guerrilla-450-black-type5",
    targetPath: "/product/guerrilla-450/headlight-grill-guerrilla-450-black-type5/69e279ad5685096a33ad95df"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-pulsar-ns400z-honeycomb-black",
    targetPath: "/product/pulsar-ns400z/radiator-guard-pulsar-ns400z-honeycomb-black/69e279ad5685096a33ad960f"
  },
  {
    type: "product",
    sourcePath: "/paddock-spools-for-suzuki-hayabusa-1300",
    targetPath: "/product/hayabusa-1300/paddock-spools-for-suzuki-hayabusa-1300/69e279ad5685096a33ad94d2"
  },
  {
    type: "product",
    sourcePath: "/himalayan-450-side-stand-extender-aluminium-stainless-steel",
    targetPath: "/product/himalayan-450/himalayan-450-side-stand-extender-aluminium-stainless-steel/69e279ad5685096a33ad94e8"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-re-himalayan-450",
    targetPath: "/product/himalayan-450/front-fluid-reservoir-cover-re-himalayan-450/69e279ad5685096a33ad94ef"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-aluminum-for-super-meteor-650",
    targetPath: "/product/super-meteor-650/front-fluid-reservoir-cover-aluminum-for-super-meteor-650/69e279ad5685096a33ad94f9"
  },
  {
    type: "product",
    sourcePath: "/fog-light-mount-for-harley-davidson-x440",
    targetPath: "/product/harley-x440/fog-light-mount-for-harley-davidson-x440/69e279ad5685096a33ad953c"
  },
  {
    type: "product",
    sourcePath: "/panniers-for-super-meteor-650-with-frame-36ltr-black-aluminium-lflat",
    targetPath: "/product/super-meteor-650/panniers-for-super-meteor-650-with-frame-36ltr-black-aluminium-lflat/69e279ad5685096a33ad9559"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-harley-davidson-x440",
    targetPath: "/product/harley-x440/side-stand-extender-for-harley-davidson-x440/69e279ad5685096a33ad952f"
  },
  {
    type: "product",
    sourcePath: "/handle-bar-riser-for-harley-davidson-x440",
    targetPath: "/product/harley-x440/handle-bar-riser-for-harley-davidson-x440/69e279ad5685096a33ad9530"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-for-harley-davidson-x440-black-colour",
    targetPath: "/product/harley-x440/crash-guard-with-slider-for-harley-davidson-x440-black-colour/69e279ad5685096a33ad9531"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-for-honda-nx500-aluminium-black",
    targetPath: "/product/nx500/front-fluid-reservoir-cover-for-honda-nx500-aluminium-black/69e279ad5685096a33ad9546"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-rflat-black-with-frame-for-kawasaki-versys-650",
    targetPath: "/product/versys-650/panniers-36-ltr-aluminium-rflat-black-with-frame-for-kawasaki-versys-650/69e279ad5685096a33ad955b"
  },
  {
    type: "product",
    sourcePath: "/vertical-handlebar-riser-for-kawasaki-versys-650",
    targetPath: "/product/versys-650/vertical-handlebar-riser-for-kawasaki-versys-650/69e279ad5685096a33ad956c"
  },
  {
    type: "product",
    sourcePath: "/rear-footrest-for-honda-nx500",
    targetPath: "/product/nx500/rear-footrest-for-honda-nx500/69e279ad5685096a33ad9573"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-for-honda-cb200x-black",
    targetPath: "/product/cb200x/bash-plate-for-honda-cb200x-black/69e279ad5685096a33ad957a"
  },
  {
    type: "product",
    sourcePath: "/rear-master-cylinder-cover-himalayan-450-aluminium-black",
    targetPath: "/product/guerrilla-450/rear-master-cylinder-cover-himalayan-450-aluminium-black/69e279ad5685096a33ad95e0"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-slider-pulsar-ns400z",
    targetPath: "/product/pulsar-ns400z/crash-guard-slider-pulsar-ns400z/69e279ad5685096a33ad95fb"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-silver-aluminium-for-himalayan-452",
    targetPath: "/product/himalayan-450/bash-plate-silver-aluminium-for-himalayan-452/69e279ad5685096a33ad94e5"
  },
  {
    type: "product",
    sourcePath: "/new-top-rack-texture-matt-black-v-2-compatible-with-grab-rail-ktm-adv-250390-390-x",
    targetPath: "/product/adventure-250-390-390x-390-rally/new-top-rack-texture-matt-black-v-2-compatible-with-grab-rail-ktm-adv-250390-390-x/69e279ad5685096a33ad94f8"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-himalayan-450-aluminium-silver",
    targetPath: "/product/himalayan-450/radiator-guard-himalayan-450-aluminium-silver/69e279ad5685096a33ad9505"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-lflat-silver-with-frame-for-ktm-adv-250-390",
    targetPath: "/product/adventure-250-390-390x-390-rally/panniers-36-ltr-aluminium-lflat-silver-with-frame-for-ktm-adv-250-390/69e279ad5685096a33ad9556"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-for-triumph-street-triple-765",
    targetPath: "/product/street-triple-765/radiator-guard-for-triumph-street-triple-765/69e279ad5685096a33ad9582"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-for-himalayan-450-with-slider-puck-black-texture-mild-steel-type-3",
    targetPath: "/product/himalayan-450/crash-guard-for-himalayan-450-with-slider-puck-black-texture-mild-steel-type-3/69e279ad5685096a33ad951e"
  },
  {
    type: "product",
    sourcePath: "/single-rod-crash-bar-for-hunter-350",
    targetPath: "/product/hunter-350/single-rod-crash-bar-for-hunter-350/69e279ad5685096a33ad952a"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-rflat-black-with-frame-for-ktm-adv-250390",
    targetPath: "/product/adventure-250-390-390x-390-rally/panniers-36-ltr-aluminium-rflat-black-with-frame-for-ktm-adv-250390/69e279ad5685096a33ad9553"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-rflat-black-with-frame-for-triumph-tiger-900-rally-pro",
    targetPath: "/product/zana-accessories/panniers-36-ltr-aluminium-rflat-black-with-frame-for-triumph-tiger-900-rally-pro/69e279ad5685096a33ad955f"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-rflat-silver-with-frame-for-triumph-tiger-900-rally-pro",
    targetPath: "/product/zana-accessories/panniers-36-ltr-aluminium-rflat-silver-with-frame-for-triumph-tiger-900-rally-pro/69e279ad5685096a33ad9560"
  },
  {
    type: "product",
    sourcePath: "/vetrical-handlebar-riser-for-honda-cb200x",
    targetPath: "/product/cb200x/vetrical-handlebar-riser-for-honda-cb200x/69e279ad5685096a33ad957d"
  },
  {
    type: "product",
    sourcePath: "/guerrilla-450-panniers-36ltr-aluminium-black",
    targetPath: "/product/guerrilla-450/guerrilla-450-panniers-36ltr-aluminium-black/69e279ad5685096a33ad9601"
  },
  {
    type: "product",
    sourcePath: "/tail-tidy-pulsar-ns400z",
    targetPath: "/product/pulsar-ns400z/tail-tidy-pulsar-ns400z/69e279ad5685096a33ad9611"
  },
  {
    type: "product",
    sourcePath: "/frame-slider-suzuki-hayabusa-1300-black",
    targetPath: "/product/hayabusa-1300/frame-slider-suzuki-hayabusa-1300-black/69e279ad5685096a33ad94d1"
  },
  {
    type: "product",
    sourcePath: "/gps-mount-aluminium-for-himalayan-452",
    targetPath: "/product/himalayan-450/gps-mount-aluminium-for-himalayan-452/69e279ad5685096a33ad94e9"
  },
  {
    type: "product",
    sourcePath: "/rear-footrest-re-himalayan-450",
    targetPath: "/product/himalayan-450/rear-footrest-re-himalayan-450/69e279ad5685096a33ad94fd"
  },
  {
    type: "product",
    sourcePath: "/rear-footrest-for-shotgun-650-black-mild-steel",
    targetPath: "/product/shotgun-650/rear-footrest-for-shotgun-650-black-mild-steel/69e279ad5685096a33ad9527"
  },
  {
    type: "product",
    sourcePath: "/upper-fairing-guard-for-honda-nx500",
    targetPath: "/product/nx500/upper-fairing-guard-for-honda-nx500/69e279ad5685096a33ad9538"
  },
  {
    type: "product",
    sourcePath: "/upper-fairing-guard-honda-nx500-silver-mild-steel",
    targetPath: "/product/nx500/upper-fairing-guard-honda-nx500-silver-mild-steel/69e279ad5685096a33ad954f"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-rflat-black-with-frame-for-suzuki-vstrom-250",
    targetPath: "/product/v-strom-sx-250/panniers-36-ltr-aluminium-rflat-black-with-frame-for-suzuki-vstrom-250/69e279ad5685096a33ad9550"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-lflat-black-with-frame-for-triumph-tiger-900-rally-pro",
    targetPath: "/product/zana-accessories/panniers-36-ltr-aluminium-lflat-black-with-frame-for-triumph-tiger-900-rally-pro/69e279ad5685096a33ad9561"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stay-with-exhaust-sheild-with-jerry-can-mount-for-himalayan-411",
    targetPath: "/product/zana-accessories/roadster-saddle-stay-with-exhaust-sheild-with-jerry-can-mount-for-himalayan-411/69e279ad5685096a33ad9562"
  },
  {
    type: "product",
    sourcePath: "/universal-gel-seat-cushion-medium-770grm",
    targetPath: "/product/n-a/universal-gel-seat-cushion-medium-770grm/69e279ad5685096a33ad95ff"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservior-cover-pulsar-ns400z",
    targetPath: "/product/pulsar-ns400z/front-fluid-reservior-cover-pulsar-ns400z/69e279ad5685096a33ad9610"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-for-suzuki-hayabusa-1300",
    targetPath: "/product/hayabusa-1300/radiator-guard-for-suzuki-hayabusa-1300/69e279ad5685096a33ad94d3"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-for-himalayan-450-with-slider-puck-black-texture-mild-steel-type-1",
    targetPath: "/product/himalayan-450/crash-guard-for-himalayan-450-with-slider-puck-black-texture-mild-steel-type-1/69e279ad5685096a33ad94e4"
  },
  {
    type: "product",
    sourcePath: "/top-rack-for-harley-davidson-x440-with-mild-steel-plate",
    targetPath: "/product/harley-x440/top-rack-for-harley-davidson-x440-with-mild-steel-plate/69e279ad5685096a33ad953a"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-harley-davidson-x440-small",
    targetPath: "/product/harley-x440/side-stand-extender-for-harley-davidson-x440-small/69e279ad5685096a33ad953e"
  },
  {
    type: "product",
    sourcePath: "/rear-footrest-for-gt-interceptor-650",
    targetPath: "/product/continental-gt-650-interceptor-650/rear-footrest-for-gt-interceptor-650/69e279ad5685096a33ad9571"
  },
  {
    type: "product",
    sourcePath: "/offset-handle-bar-riser-silver-for-triumph-scrambler-400",
    targetPath: "/product/scrambler-400-x/offset-handle-bar-riser-silver-for-triumph-scrambler-400/69e279ad5685096a33ad94c9"
  },
  {
    type: "product",
    sourcePath: "/top-rack-re-classic-350-steel",
    targetPath: "/product/classic-350-reborn/top-rack-re-classic-350-steel/69e279ad5685096a33ad94fc"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-for-himalayan-450-with-slider-puck-black-texture-mild-steel-type-2",
    targetPath: "/product/himalayan-450/crash-guard-for-himalayan-450-with-slider-puck-black-texture-mild-steel-type-2/69e279ad5685096a33ad9513"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stay-triumph-scrambler-400-mild-steel-with-jerry-can-mount",
    targetPath: "/product/speed-400/roadster-saddle-stay-triumph-scrambler-400-mild-steel-with-jerry-can-mount/69e279ad5685096a33ad951d"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-lflat-silver-with-frame-for-super-meteor-650",
    targetPath: "/product/super-meteor-650/panniers-36-ltr-aluminium-lflat-silver-with-frame-for-super-meteor-650/69e279ad5685096a33ad955a"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-for-honda-cb200x-type-w-black",
    targetPath: "/product/cb200x/top-rack-with-plate-for-honda-cb200x-type-w-black/69e279ad5685096a33ad957b"
  },
  {
    type: "product",
    sourcePath: "/radiator-grill-guerrilla-450-honeycomb-silver-type3",
    targetPath: "/product/guerrilla-450/radiator-grill-guerrilla-450-honeycomb-silver-type3/69e279ad5685096a33ad95e4"
  },
  {
    type: "product",
    sourcePath: "/honda-nx500-number-plate-mount",
    targetPath: "/product/nx500/honda-nx500-number-plate-mount/69e279ad5685096a33ad960b"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stay-jerry-can-mount-pulsar-ns400z",
    targetPath: "/product/pulsar-ns400z/roadster-saddle-stay-jerry-can-mount-pulsar-ns400z/69e279ad5685096a33ad960d"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-black-with-himalayan-logo-for-himalayan-452",
    targetPath: "/product/himalayan-450/radiator-guard-black-with-himalayan-logo-for-himalayan-452/69e279ad5685096a33ad94e7"
  },
  {
    type: "product",
    sourcePath: "/rear-hex-fluid-reservoir-cover-for-himalayan-452",
    targetPath: "/product/himalayan-450/rear-hex-fluid-reservoir-cover-for-himalayan-452/69e279ad5685096a33ad94f0"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservior-cover-aluminum-for-classic-350-reborn",
    targetPath: "/product/classic-350-reborn/front-fluid-reservior-cover-aluminum-for-classic-350-reborn/69e279ad5685096a33ad94fa"
  },
  {
    type: "product",
    sourcePath: "/top-rack-re-classic-500-steel",
    targetPath: "/product/classic-350-reborn/top-rack-re-classic-500-steel/69e279ad5685096a33ad94fb"
  },
  {
    type: "product",
    sourcePath: "/upper-fairing-guard-lower-engine-guard-for-honda-nx500",
    targetPath: "/product/nx500/upper-fairing-guard-lower-engine-guard-for-honda-nx500/69e279ad5685096a33ad9520"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-for-harley-davidson-x440",
    targetPath: "/product/harley-x440/front-fluid-reservoir-cover-for-harley-davidson-x440/69e279ad5685096a33ad9532"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-pillion-backrest-for-harley-davidson-x440",
    targetPath: "/product/harley-x440/top-rack-with-pillion-backrest-for-harley-davidson-x440/69e279ad5685096a33ad9533"
  },
  {
    type: "product",
    sourcePath: "/tail-tidy-black-for-shotgun-650",
    targetPath: "/product/shotgun-650/tail-tidy-black-for-shotgun-650/69e279ad5685096a33ad9548"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-for-honda-nx500-aluminum-silver",
    targetPath: "/product/nx500/top-rack-with-plate-for-honda-nx500-aluminum-silver/69e279ad5685096a33ad954d"
  },
  {
    type: "product",
    sourcePath: "/paddock-spools-for-triumph-street-triple-765",
    targetPath: "/product/street-triple-765/paddock-spools-for-triumph-street-triple-765/69e279ad5685096a33ad9581"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-pulsar-ns400z",
    targetPath: "/product/pulsar-ns400z/side-stand-extender-pulsar-ns400z/69e279ad5685096a33ad960e"
  },
  {
    type: "product",
    sourcePath: "/front-fork-slider-for-suzuki-hayabusa-1300",
    targetPath: "/product/hayabusa-1300/front-fork-slider-for-suzuki-hayabusa-1300/69e279ad5685096a33ad94d5"
  },
  {
    type: "product",
    sourcePath: "/rear-master-cylinder-cover-re-himalayan-450-aluminium-black",
    targetPath: "/product/himalayan-450/rear-master-cylinder-cover-re-himalayan-450-aluminium-black/69e279ad5685096a33ad94eb"
  },
  {
    type: "product",
    sourcePath: "/top-rack-plate-for-himalayan-452-black-mild-steel",
    targetPath: "/product/himalayan-450/top-rack-plate-for-himalayan-452-black-mild-steel/69e279ad5685096a33ad94ec"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-ms-for-himalayan-452",
    targetPath: "/product/himalayan-450/top-rack-with-plate-ms-for-himalayan-452/69e279ad5685096a33ad9500"
  },
  {
    type: "product",
    sourcePath: "/lower-engine-guard-bmw-310-gs-slider-silver-stainless-steel",
    targetPath: "/product/g-310-gs/lower-engine-guard-bmw-310-gs-slider-silver-stainless-steel/69e279ad5685096a33ad9522"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-rflat-silver-with-frame-for-suzuki-vstrom-250",
    targetPath: "/product/v-strom-sx-250/panniers-36-ltr-aluminium-rflat-silver-with-frame-for-suzuki-vstrom-250/69e279ad5685096a33ad9551"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-lflat-black-with-frame-for-ktm-adv-250390",
    targetPath: "/product/adventure-250-390-390x-390-rally/panniers-36-ltr-aluminium-lflat-black-with-frame-for-ktm-adv-250390/69e279ad5685096a33ad9555"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-lflat-silver-with-frame-for-kawasaki-versys-650",
    targetPath: "/product/versys-650/panniers-36-ltr-aluminium-lflat-silver-with-frame-for-kawasaki-versys-650/69e279ad5685096a33ad955c"
  },
  {
    type: "product",
    sourcePath: "/universal-mobile-holder-with-usb-charger-for-ktm-duke-390-250-200-390-gen-3",
    targetPath: "/product/duke-390-250-200-390-gen-3/universal-mobile-holder-with-usb-charger-for-ktm-duke-390-250-200-390-gen-3/69e279ad5685096a33ad950b"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-for-shotgun-650-with-slider-puck-black-mild-steel-type2",
    targetPath: "/product/shotgun-650/crash-guard-for-shotgun-650-with-slider-puck-black-mild-steel-type2/69e279ad5685096a33ad9524"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-rflat-silver-with-frame-for-super-meteor-650",
    targetPath: "/product/super-meteor-650/panniers-36-ltr-aluminium-rflat-silver-with-frame-for-super-meteor-650/69e279ad5685096a33ad9558"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-kawasaki-versys-650",
    targetPath: "/product/versys-650/side-stand-extender-for-kawasaki-versys-650/69e279ad5685096a33ad956d"
  },
  {
    type: "product",
    sourcePath: "/rear-footrest-for-harley-davidson-x440",
    targetPath: "/product/harley-x440/rear-footrest-for-harley-davidson-x440/69e279ad5685096a33ad9570"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stay-with-exhaust-sheild-with-jerry-can-mount-for-honda-nx500",
    targetPath: "/product/nx500/roadster-saddle-stay-with-exhaust-sheild-with-jerry-can-mount-for-honda-nx500/69e279ad5685096a33ad9574"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stay-with-exhaust-sheild-with-jerry-can-mount-for-honda-cb200x-black",
    targetPath: "/product/cb200x/roadster-saddle-stay-with-exhaust-sheild-with-jerry-can-mount-for-honda-cb200x-black/69e279ad5685096a33ad9578"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-guerrilla-450-slider-black-texture-mild-steel-type1",
    targetPath: "/product/guerrilla-450/crash-guard-guerrilla-450-slider-black-texture-mild-steel-type1/69e279ad5685096a33ad95d6"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-guerrilla-450-puck-black-texture-mild-steel-type2",
    targetPath: "/product/guerrilla-450/crash-guard-guerrilla-450-puck-black-texture-mild-steel-type2/69e279ad5685096a33ad95d7"
  },
  {
    type: "product",
    sourcePath: "/radiator-grill-guerrilla-450-honeycomb-black-texture-type2",
    targetPath: "/product/guerrilla-450/radiator-grill-guerrilla-450-honeycomb-black-texture-type2/69e279ad5685096a33ad95e3"
  },
  {
    type: "product",
    sourcePath: "/top-rack-plate-guerrilla-450-black",
    targetPath: "/product/guerrilla-450/top-rack-plate-guerrilla-450-black/69e279ad5685096a33ad95e6"
  },
  {
    type: "product",
    sourcePath: "/rear-footrest-pulsar-ns400z",
    targetPath: "/product/pulsar-ns400z/rear-footrest-pulsar-ns400z/69e279ad5685096a33ad95fc"
  },
  {
    type: "product",
    sourcePath: "/mirror-extender-ktm-duke-390",
    targetPath: "/product/duke-390-250-200-390-gen-3/mirror-extender-ktm-duke-390/69e279ad5685096a33ad94cb"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-honeycomb-black-for-ktm-duke-390250200390-gen-3",
    targetPath: "/product/duke-390-250-200-390-gen-3/radiator-guard-honeycomb-black-for-ktm-duke-390250200390-gen-3/69e279ad5685096a33ad94d0"
  },
  {
    type: "product",
    sourcePath: "/fog-light-mount-ms-for-meteor-350",
    targetPath: "/product/meteor-350/fog-light-mount-ms-for-meteor-350/69e279ad5685096a33ad950f"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-honeycomb-silver-for-honda-nx500-aluminium",
    targetPath: "/product/nx500/radiator-guard-honeycomb-silver-for-honda-nx500-aluminium/69e279ad5685096a33ad9534"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-honda-nx500-honeycomb-black",
    targetPath: "/product/nx500/radiator-guard-honda-nx500-honeycomb-black/69e279ad5685096a33ad9537"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-lflat-black-with-frame-for-suzuki-vstrom-250",
    targetPath: "/product/v-strom-sx-250/panniers-36-ltr-aluminium-lflat-black-with-frame-for-suzuki-vstrom-250/69e279ad5685096a33ad9552"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-lflat-silver-with-frame-for-himalayan-411",
    targetPath: "/product/zana-accessories/panniers-36-ltr-aluminium-lflat-silver-with-frame-for-himalayan-411/69e279ad5685096a33ad955e"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stay-with-exhaust-sheild-with-jerry-can-mount-bmw-310-gs",
    targetPath: "/product/g-310-gs/roadster-saddle-stay-with-exhaust-sheild-with-jerry-can-mount-bmw-310-gs/69e279ad5685096a33ad9576"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stay-jerry-can-mount-guerrilla-450-black-texture",
    targetPath: "/product/guerrilla-450/roadster-saddle-stay-jerry-can-mount-guerrilla-450-black-texture/69e279ad5685096a33ad95e5"
  },
  {
    type: "product",
    sourcePath: "/guerrilla-450-panniers-36-litre-rflat-aluminium-black",
    targetPath: "/product/guerrilla-450/guerrilla-450-panniers-36-litre-rflat-aluminium-black/69e279ad5685096a33ad9603"
  },
  {
    type: "product",
    sourcePath: "/top-rack-ms-plate-pulsar-ns400z",
    targetPath: "/product/pulsar-ns400z/top-rack-ms-plate-pulsar-ns400z/69e279ad5685096a33ad960c"
  },
  {
    type: "product",
    sourcePath: "/fog-light-mount-re-bear-650-mild-steel",
    targetPath: "/product/bear-650/fog-light-mount-re-bear-650-mild-steel/69e279ad5685096a33ad961d"
  },
  {
    type: "product",
    sourcePath: "/sliders-pair-crash-guard-dominar-250-400",
    targetPath: "/product/cb350-highness/sliders-pair-crash-guard-dominar-250-400/69e279ad5685096a33ad966b"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-honeycomb-black-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/radiator-guard-honeycomb-black-ktm-adv-390-2025/69e279ad5685096a33ad968d"
  },
  {
    type: "product",
    sourcePath: "/handle-riser-for-re-bear-650",
    targetPath: "/product/bear-650/handle-riser-for-re-bear-650/69e279ad5685096a33ad9699"
  },
  {
    type: "product",
    sourcePath: "/upper-lower-crash-guard-set-orange-for-ktm-adv-390",
    targetPath: "/product/adventure-250-390-390x-2025/upper-lower-crash-guard-set-orange-for-ktm-adv-390/69e279ad5685096a33ad969b"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-aluminum-silver-for-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/bash-plate-aluminum-silver-for-ktm-adv-390-2025/69e279ad5685096a33ad969e"
  },
  {
    type: "product",
    sourcePath: "/tapered-exhaust-compatible-panniers-with-frame-aluminium-46ltr-set-for-bmw-f-900-gsa",
    targetPath: "/product/f-900-gs-adventure/tapered-exhaust-compatible-panniers-with-frame-aluminium-46ltr-set-for-bmw-f-900-gsa/69e279ad5685096a33ad96a1"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-v1-with-jerry-can-mount-black-for-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/saddle-stay-v1-with-jerry-can-mount-black-for-ktm-adv-390-2025/69e279ad5685096a33ad96a9"
  },
  {
    type: "product",
    sourcePath: "/universal-led-fog-light-zfl50",
    targetPath: "/product/zana-accessories/universal-led-fog-light-zfl50/69e279ad5685096a33ad9614"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stay-bsa-goldstar-650-with-jerry-can-mount-mild-steel",
    targetPath: "/product/goldstar-650/roadster-saddle-stay-bsa-goldstar-650-with-jerry-can-mount-mild-steel/69e279ad5685096a33ad961e"
  },
  {
    type: "product",
    sourcePath: "/headlight-grill-bsa-goldstar-650-stainless-steel-black-t2",
    targetPath: "/product/goldstar-650/headlight-grill-bsa-goldstar-650-stainless-steel-black-t2/69e279ad5685096a33ad9620"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-bsa-goldstar-650-aluminum-black",
    targetPath: "/product/goldstar-650/bash-plate-bsa-goldstar-650-aluminum-black/69e279ad5685096a33ad962b"
  },
  {
    type: "product",
    sourcePath: "/rear-footrest-pair-ms-re-bear-650",
    targetPath: "/product/bear-650/rear-footrest-pair-ms-re-bear-650/69e279ad5685096a33ad964a"
  },
  {
    type: "product",
    sourcePath: "/universal-bungee-cord-large-150-cm",
    targetPath: "/product/n-a/universal-bungee-cord-large-150-cm/69e279ad5685096a33ad9663"
  },
  {
    type: "product",
    sourcePath: "/universal-led-fog-light-zfl70",
    targetPath: "/product/zana-accessories/universal-led-fog-light-zfl70/69e279ad5685096a33ad9615"
  },
  {
    type: "product",
    sourcePath: "/universall-bungee-cord-small-50-cm",
    targetPath: "/product/n-a/universall-bungee-cord-small-50-cm/69e279ad5685096a33ad9662"
  },
  {
    type: "product",
    sourcePath: "/universal-fog-light-mount",
    targetPath: "/product/n-a/universal-fog-light-mount/69e279ad5685096a33ad9664"
  },
  {
    type: "product",
    sourcePath: "/handle-bar-for-super-meteor-650",
    targetPath: "/product/super-meteor-650/handle-bar-for-super-meteor-650/69e279ad5685096a33ad96b6"
  },
  {
    type: "product",
    sourcePath: "/leg-guard-crash-guard-re-bear-650-with-slider-black",
    targetPath: "/product/bear-650/leg-guard-crash-guard-re-bear-650-with-slider-black/69e279ad5685096a33ad9616"
  },
  {
    type: "product",
    sourcePath: "/engine-guard-re-bear-650-with-slider-puck-black",
    targetPath: "/product/bear-650/engine-guard-re-bear-650-with-slider-puck-black/69e279ad5685096a33ad9619"
  },
  {
    type: "product",
    sourcePath: "/frame-slider-suzuki-hayabusa-1300-black-type-3",
    targetPath: "/product/hayabusa-1300/frame-slider-suzuki-hayabusa-1300-black-type-3/69e279ad5685096a33ad9633"
  },
  {
    type: "product",
    sourcePath: "/universal-bungee-cord-medium-80-cm",
    targetPath: "/product/n-a/universal-bungee-cord-medium-80-cm/69e279ad5685096a33ad9661"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-black-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/crash-guard-with-slider-black-ktm-adv-390-2025/69e279ad5685096a33ad9689"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-sheet-metal-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/side-stand-extender-sheet-metal-ktm-adv-390-2025/69e279ad5685096a33ad968f"
  },
  {
    type: "product",
    sourcePath: "/panniers-36ltr-with-frame-aluminium-l-flat-silver-for-bmw-r-1300-gs",
    targetPath: "/product/r-1300-gs/panniers-36ltr-with-frame-aluminium-l-flat-silver-for-bmw-r-1300-gs/69e279ad5685096a33ad96a3"
  },
  {
    type: "product",
    sourcePath: "/tank-guard-crash-guard-with-slider-puck-orange-for-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/tank-guard-crash-guard-with-slider-puck-orange-for-ktm-adv-390-2025/69e279ad5685096a33ad96a8"
  },
  {
    type: "product",
    sourcePath: "/universal-led-fog-light-zfl-r25",
    targetPath: "/product/zana-accessories/universal-led-fog-light-zfl-r25/69e279ad5685096a33ad96ba"
  },
  {
    type: "product",
    sourcePath: "/frame-slider-suzuki-hayabusa-1300-black-type-2",
    targetPath: "/product/hayabusa-1300/frame-slider-suzuki-hayabusa-1300-black-type-2/69e279ad5685096a33ad9632"
  },
  {
    type: "product",
    sourcePath: "/grab-rail-for-triumph-speed-twin",
    targetPath: "/product/speed-twin-1200/grab-rail-for-triumph-speed-twin/69e279ad5685096a33ad967f"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stay-with-jerry-can-mount-orange-for-ktm-adv-390",
    targetPath: "/product/adventure-250-390-390x-2025/roadster-saddle-stay-with-jerry-can-mount-orange-for-ktm-adv-390/69e279ad5685096a33ad969d"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-with-jerry-can-mount-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/saddle-stay-with-jerry-can-mount-ktm-adv-390-2025/69e279ad5685096a33ad968e"
  },
  {
    type: "product",
    sourcePath: "/front-fork-slider-for-km-adv-390",
    targetPath: "/product/adventure-250-390-390x-2025/front-fork-slider-for-km-adv-390/69e279ad5685096a33ad969a"
  },
  {
    type: "product",
    sourcePath: "/gps-mount-for-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/gps-mount-for-ktm-adv-390-2025/69e279ad5685096a33ad96aa"
  },
  {
    type: "product",
    sourcePath: "/universal-6led-fog-light-zfl60",
    targetPath: "/product/zana-accessories/universal-6led-fog-light-zfl60/69e279ad5685096a33ad96b1"
  },
  {
    type: "product",
    sourcePath: "/universal-mobile-holder-without-charger-blu",
    targetPath: "/product/n-a/universal-mobile-holder-without-charger-blu/69e279ad5685096a33ad9686"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-orange-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/crash-guard-with-slider-orange-ktm-adv-390-2025/69e279ad5685096a33ad968a"
  },
  {
    type: "product",
    sourcePath: "/universal-mobile-holder-with-usb-charger-rex",
    targetPath: "/product/n-a/universal-mobile-holder-with-usb-charger-rex/69e279ad5685096a33ad96b7"
  },
  {
    type: "product",
    sourcePath: "/vertical-handlebar-riser-texture-matt-black-for-himalayan-450",
    targetPath: "/product/himalayan-450/vertical-handlebar-riser-texture-matt-black-for-himalayan-450/69e279ad5685096a33ad96b8"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-bmw-f900-gs-gsa-black",
    targetPath: "/product/f-900-gs-adventure/saddle-stay-bmw-f900-gs-gsa-black/69e279ad5685096a33ad963b"
  },
  {
    type: "product",
    sourcePath: "/number-plate-mount-for-bmw-f900-gs-gsa",
    targetPath: "/product/f-900-gs-adventure/number-plate-mount-for-bmw-f900-gs-gsa/69e279ad5685096a33ad96a4"
  },
  {
    type: "product",
    sourcePath: "/universal-led-fog-light-zfl35",
    targetPath: "/product/zana-accessories/universal-led-fog-light-zfl35/69e279ad5685096a33ad9612"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-bsa-goldstar-650-with-slider-puck-steel-black",
    targetPath: "/product/goldstar-650/crash-guard-bsa-goldstar-650-with-slider-puck-steel-black/69e279ad5685096a33ad9622"
  },
  {
    type: "product",
    sourcePath: "/universal-mobile-holder-without-charger-rex",
    targetPath: "/product/n-a/universal-mobile-holder-without-charger-rex/69e279ad5685096a33ad9687"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-l-flat-black-with-frame-for-himalayan-450",
    targetPath: "/product/himalayan-450/panniers-36-ltr-aluminium-l-flat-black-with-frame-for-himalayan-450/69e279ad5685096a33ad96ae"
  },
  {
    type: "product",
    sourcePath: "/universal-led-fog-light-zfl40",
    targetPath: "/product/zana-accessories/universal-led-fog-light-zfl40/69e279ad5685096a33ad9613"
  },
  {
    type: "product",
    sourcePath: "/top-rack-re-bear-650-compatible-with-pillion-backrest",
    targetPath: "/product/bear-650/top-rack-re-bear-650-compatible-with-pillion-backrest/69e279ad5685096a33ad961b"
  },
  {
    type: "product",
    sourcePath: "/headlight-grill-bsa-goldstar-650-stainless-steel-black-t1",
    targetPath: "/product/goldstar-650/headlight-grill-bsa-goldstar-650-stainless-steel-black-t1/69e279ad5685096a33ad961f"
  },
  {
    type: "product",
    sourcePath: "/top-rack-for-bsa-goldstar-650-with-pillion-back-rest-mild-steel-black-type1",
    targetPath: "/product/goldstar-650/top-rack-for-bsa-goldstar-650-with-pillion-back-rest-mild-steel-black-type1/69e279ad5685096a33ad962d"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-ms-plate-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/top-rack-with-ms-plate-ktm-adv-390-2025/69e279ad5685096a33ad9691"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-r-flat-silver-with-frame-for-himalayan-450",
    targetPath: "/product/himalayan-450/panniers-36-ltr-aluminium-r-flat-silver-with-frame-for-himalayan-450/69e279ad5685096a33ad96a0"
  },
  {
    type: "product",
    sourcePath: "/gps-mount-for-honda-cb200x",
    targetPath: "/product/cb200x/gps-mount-for-honda-cb200x/69e279ad5685096a33ad96b0"
  },
  {
    type: "product",
    sourcePath: "/upper-and-lower-crash-guard-set-white-for-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/upper-and-lower-crash-guard-set-white-for-ktm-adv-390-2025/69e279ad5685096a33ad96b3"
  },
  {
    type: "product",
    sourcePath: "/fog-light-mount-bsa-goldstar-650-mild-steel",
    targetPath: "/product/goldstar-650/fog-light-mount-bsa-goldstar-650-mild-steel/69e279ad5685096a33ad9623"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-ss-304-black-for-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/bash-plate-ss-304-black-for-ktm-adv-390-2025/69e279ad5685096a33ad96ad"
  },
  {
    type: "product",
    sourcePath: "/fog-light-mount-for-himalayan-450",
    targetPath: "/product/himalayan-450/fog-light-mount-for-himalayan-450/69e279ad5685096a33ad96b9"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-bsa-goldstar-650-aluminum-stainless-steel",
    targetPath: "/product/goldstar-650/side-stand-extender-bsa-goldstar-650-aluminum-stainless-steel/69e279ad5685096a33ad9621"
  },
  {
    type: "product",
    sourcePath: "/top-rack-bsa-goldstar-650-with-pillion-backrest-steel-black-type2",
    targetPath: "/product/goldstar-650/top-rack-bsa-goldstar-650-with-pillion-backrest-steel-black-type2/69e279ad5685096a33ad962c"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-bmw-r-1300-gs-gsa",
    targetPath: "/product/r-1300-gs/side-stand-extender-bmw-r-1300-gs-gsa/69e279ad5685096a33ad9697"
  },
  {
    type: "product",
    sourcePath: "/engine-guard-with-slider-white-for-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/engine-guard-with-slider-white-for-ktm-adv-390-2025/69e279ad5685096a33ad96b5"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stay-re-bear-650-with-jerry-can-mount-mild-steel",
    targetPath: "/product/bear-650/roadster-saddle-stay-re-bear-650-with-jerry-can-mount-mild-steel/69e279ad5685096a33ad961a"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stay-for-super-meteor-650-with-exhaust-sheild-and-jerry-can-mount-v2",
    targetPath: "/product/super-meteor-650/roadster-saddle-stay-for-super-meteor-650-with-exhaust-sheild-and-jerry-can-mount-v2/69e279ad5685096a33ad9627"
  },
  {
    type: "product",
    sourcePath: "/tank-guard-with-slider-puck-black-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/tank-guard-with-slider-puck-black-ktm-adv-390-2025/69e279ad5685096a33ad968b"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-vmc-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/side-stand-extender-vmc-ktm-adv-390-2025/69e279ad5685096a33ad9690"
  },
  {
    type: "product",
    sourcePath: "/upper-lower-crash-guard-set-black-for-ktm-adv",
    targetPath: "/product/adventure-250-390-390x-2025/upper-lower-crash-guard-set-black-for-ktm-adv/69e279ad5685096a33ad969c"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stay-for-harley-davidson-x440-with-exhaust-sheild-and-jerry-can-mount",
    targetPath: "/product/harley-x440/roadster-saddle-stay-for-harley-davidson-x440-with-exhaust-sheild-and-jerry-can-mount/69e279ad5685096a33ad9626"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-for-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/front-fluid-reservoir-cover-for-ktm-adv-390-2025/69e279ad5685096a33ad969f"
  },
  {
    type: "product",
    sourcePath: "/panniers-46ltr-with-frame-aluminium-l-flat-black-for-tiger-900-rally-pro",
    targetPath: "/product/tiger-900-rally-pro/panniers-46ltr-with-frame-aluminium-l-flat-black-for-tiger-900-rally-pro/69e279ad5685096a33ad96a2"
  },
  {
    type: "product",
    sourcePath: "/angular-handlebar-riser-for-ktm-adv-390-2025-aluminium-black",
    targetPath: "/product/adventure-250-390-390x-2025/angular-handlebar-riser-for-ktm-adv-390-2025-aluminium-black/69e279ad5685096a33ad96ab"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-honeycomb-orange-for-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/radiator-guard-honeycomb-orange-for-ktm-adv-390-2025/69e279ad5685096a33ad96ac"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-ms-plate-orange-for-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/top-rack-with-ms-plate-orange-for-ktm-adv-390-2025/69e279ad5685096a33ad96b2"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-v1-with-jerry-can-mount-white-for-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/saddle-stay-v1-with-jerry-can-mount-white-for-ktm-adv-390-2025/69e279ae5685096a33ad96bd"
  },
  {
    type: "product",
    sourcePath: "/cooling-coil-cover-black-x-pulse-210",
    targetPath: "/product/x-pulse-210/cooling-coil-cover-black-x-pulse-210/69e279ae5685096a33ad96cb"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-texture-matt-black-for-x-pulse-210",
    targetPath: "/product/x-pulse-210/crash-guard-with-slider-texture-matt-black-for-x-pulse-210/69e279ae5685096a33ad96d8"
  },
  {
    type: "product",
    sourcePath: "/vertical-handlebar-riser-black-for-x-pulse-210",
    targetPath: "/product/x-pulse-210/vertical-handlebar-riser-black-for-x-pulse-210/69e279ae5685096a33ad96db"
  },
  {
    type: "product",
    sourcePath: "/vader-pro-hard-shell-tail-bag-50-liter-with-free-2-waterproof-storage-bag-and-1-bungee-cord",
    targetPath: "/product/n-a/vader-pro-hard-shell-tail-bag-50-liter-with-free-2-waterproof-storage-bag-and-1-bungee-cord/69e279ae5685096a33ad96ef"
  },
  {
    type: "product",
    sourcePath: "/rear-oil-reservoir-hex-cover-for-scrambler-400-x",
    targetPath: "/product/scrambler-400-x/rear-oil-reservoir-hex-cover-for-scrambler-400-x/69e279ae5685096a33ad96f0"
  },
  {
    type: "product",
    sourcePath: "/ktm-adv-390-2025-drl-r40-fog-light-mounting-adapter-kit-exclusive-for-zana-drl-r40-auxiliary-light",
    targetPath: "/product/adventure-250-390-390x-2025/ktm-adv-390-2025-drl-r40-fog-light-mounting-adapter-kit-exclusive-for-zana-drl-r40-auxiliary-light/69e279ae5685096a33ad96f1"
  },
  {
    type: "product",
    sourcePath: "/hand-guard-for-tiger-900-rally-pro-black",
    targetPath: "/product/tiger-900-rally-pro/hand-guard-for-tiger-900-rally-pro-black/69e279ae5685096a33ad96f7"
  },
  {
    type: "product",
    sourcePath: "/hand-guard-for-himalayan-450-white",
    targetPath: "/product/scrambler-400-x/hand-guard-for-himalayan-450-white/69e279ae5685096a33ad96fc"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-for-bmw-r-1300-gs-black",
    targetPath: "/product/r-1300-gs/top-rack-with-plate-for-bmw-r-1300-gs-black/69e279ae5685096a33ad9700"
  },
  {
    type: "product",
    sourcePath: "/universal-gtx-tank-bag-16ltr-expandable-to-20ltr",
    targetPath: "/product/n-a/universal-gtx-tank-bag-16ltr-expandable-to-20ltr/69e279ae5685096a33ad96e8"
  },
  {
    type: "product",
    sourcePath: "/panniers-36-ltr-aluminium-l-flat-black-with-frame-for-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/panniers-36-ltr-aluminium-l-flat-black-with-frame-for-ktm-adv-390-2025/69e279ae5685096a33ad96ea"
  },
  {
    type: "product",
    sourcePath: "/headlight-grill-for-triumph-speed-twin-1200",
    targetPath: "/product/speed-twin-1200/headlight-grill-for-triumph-speed-twin-1200/69e279ae5685096a33ad96de"
  },
  {
    type: "product",
    sourcePath: "/hand-guard-for-tiger-900-rally-pro-white",
    targetPath: "/product/tiger-900-rally-pro/hand-guard-for-tiger-900-rally-pro-white/69e279ae5685096a33ad96f6"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extenders-for-yezdi-adventure-2025-aluminium-stainless-steel",
    targetPath: "/product/yezdi-adventure-2025/side-stand-extenders-for-yezdi-adventure-2025-aluminium-stainless-steel/69e279ae5685096a33ad9707"
  },
  {
    type: "product",
    sourcePath: "/yezdi-adventure-master-cylender-silver-aluminium",
    targetPath: "/product/yezdi-adventure-2025/yezdi-adventure-master-cylender-silver-aluminium/69e279ae5685096a33ad970f"
  },
  {
    type: "product",
    sourcePath: "/hand-guard-for-yezdi-adventure-2025-black",
    targetPath: "/product/yezdi-adventure-2025/hand-guard-for-yezdi-adventure-2025-black/69e279ae5685096a33ad9710"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-for-re-bear-650-aluminum-black",
    targetPath: "/product/bear-650/bash-plate-for-re-bear-650-aluminum-black/69e279ae5685096a33ad96bc"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-ms-plate-black-for-honda-rebel-500",
    targetPath: "/product/rebel-500/top-rack-with-ms-plate-black-for-honda-rebel-500/69e279ae5685096a33ad96ce"
  },
  {
    type: "product",
    sourcePath: "/fog-light-mount-for-x-pulse-210",
    targetPath: "/product/x-pulse-210/fog-light-mount-for-x-pulse-210/69e279ae5685096a33ad96c6"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stay-with-jerry-can-mount-black-for-honda-rebel-500",
    targetPath: "/product/rebel-500/roadster-saddle-stay-with-jerry-can-mount-black-for-honda-rebel-500/69e279ae5685096a33ad96cf"
  },
  {
    type: "product",
    sourcePath: "/drake-saddle-stay-texture-black-for-x-pulse-210",
    targetPath: "/product/x-pulse-210/drake-saddle-stay-texture-black-for-x-pulse-210/69e279ae5685096a33ad96d9"
  },
  {
    type: "product",
    sourcePath: "/universal-stratos-tank-bag-6l-expandable-to-9l",
    targetPath: "/product/bear-650/universal-stratos-tank-bag-6l-expandable-to-9l/69e279ae5685096a33ad96e5"
  },
  {
    type: "product",
    sourcePath: "/caliper-protector-for-xpulse-210",
    targetPath: "/product/x-pulse-210/caliper-protector-for-xpulse-210/69e279ae5685096a33ad96c1"
  },
  {
    type: "product",
    sourcePath: "/universal-weekender-tail-bag-32-liters-expandable-to-39-liters",
    targetPath: "/product/n-a/universal-weekender-tail-bag-32-liters-expandable-to-39-liters/69e279ae5685096a33ad96e9"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-honeycomb-black-pair-for-bmw-r-1300-gs",
    targetPath: "/product/r-1300-gs/radiator-guard-honeycomb-black-pair-for-bmw-r-1300-gs/69e279ae5685096a33ad96ff"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stay-for-yezdi-adventure-2025-black",
    targetPath: "/product/yezdi-adventure-2025/roadster-saddle-stay-for-yezdi-adventure-2025-black/69e279ae5685096a33ad9704"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-t-1-for-triumph-speed-twin-900-1200-cc",
    targetPath: "/product/speed-twin-1200/saddle-stay-t-1-for-triumph-speed-twin-900-1200-cc/69e279ae5685096a33ad96e2"
  },
  {
    type: "product",
    sourcePath: "/hand-guard-for-ktm-adv-390-2025-white",
    targetPath: "/product/adventure-250-390-390x-2025/hand-guard-for-ktm-adv-390-2025-white/69e279ae5685096a33ad96f5"
  },
  {
    type: "product",
    sourcePath: "/fog-light-mount-universal",
    targetPath: "/product/n-a/fog-light-mount-universal/69e279ae5685096a33ad96fd"
  },
  {
    type: "product",
    sourcePath: "/offset-handlebar-riser-for-bmw-r-1300-gs",
    targetPath: "/product/r-1300-gs/offset-handlebar-riser-for-bmw-r-1300-gs/69e279ae5685096a33ad9702"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-honeycomb-black-for-yezdi-adventure-2025",
    targetPath: "/product/yezdi-adventure-2025/radiator-guard-honeycomb-black-for-yezdi-adventure-2025/69e279ae5685096a33ad9708"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-puck-slider-black-for-honda-rebel-500",
    targetPath: "/product/rebel-500/crash-guard-with-puck-slider-black-for-honda-rebel-500/69e279ae5685096a33ad96cd"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-honda-rebel-500",
    targetPath: "/product/rebel-500/side-stand-extender-for-honda-rebel-500/69e279ae5685096a33ad96d0"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-honeycomb-black-for-honda-rebel-500",
    targetPath: "/product/rebel-500/radiator-guard-honeycomb-black-for-honda-rebel-500/69e279ae5685096a33ad96d3"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-with-ktm-logo-orange-for-ktm-ddv-390-2025-black-ss-304",
    targetPath: "/product/adventure-250-390-390x-2025/radiator-guard-with-ktm-logo-orange-for-ktm-ddv-390-2025-black-ss-304/69e279ae5685096a33ad96ec"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-for-yezdi-adventure-2025-black",
    targetPath: "/product/yezdi-adventure-2025/crash-guard-with-slider-for-yezdi-adventure-2025-black/69e279ae5685096a33ad9703"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-for-yezdi-adventure-2025",
    targetPath: "/product/yezdi-adventure-2025/front-fluid-reservoir-cover-for-yezdi-adventure-2025/69e279ae5685096a33ad970e"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-aluminum-black-silver-for-xpulse-210",
    targetPath: "/product/x-pulse-210/bash-plate-aluminum-black-silver-for-xpulse-210/69e279ae5685096a33ad96c3"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-for-honda-rebel-500",
    targetPath: "/product/rebel-500/front-fluid-reservoir-cover-for-honda-rebel-500/69e279ae5685096a33ad96d5"
  },
  {
    type: "product",
    sourcePath: "/universal-pluto-carbon-hardshell-expandable-tail-bag-16l-to-20l",
    targetPath: "/product/n-a/universal-pluto-carbon-hardshell-expandable-tail-bag-16l-to-20l/69e279ae5685096a33ad96ed"
  },
  {
    type: "product",
    sourcePath: "/universal-dragon-belt",
    targetPath: "/product/n-a/universal-dragon-belt/69e279ae5685096a33ad96ee"
  },
  {
    type: "product",
    sourcePath: "/universal-mobile-holder-with-charger-blu",
    targetPath: "/product/n-a/universal-mobile-holder-with-charger-blu/69e279ae5685096a33ad96bf"
  },
  {
    type: "product",
    sourcePath: "/ktm-adv-390-2025-fog-light-mounting-kit",
    targetPath: "/product/adventure-250-390-390x-2025/ktm-adv-390-2025-fog-light-mounting-kit/69e279ae5685096a33ad96f8"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-for-bmw-r-1300-gs-black",
    targetPath: "/product/r-1300-gs/saddle-stay-for-bmw-r-1300-gs-black/69e279ae5685096a33ad9701"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-for-yezdi-adventure-2025-silver-aluminum",
    targetPath: "/product/yezdi-adventure-2025/bash-plate-for-yezdi-adventure-2025-silver-aluminum/69e279ae5685096a33ad9706"
  },
  {
    type: "product",
    sourcePath: "/drake-saddle-stay-texture-black-for-triumph-scrambler-400-x",
    targetPath: "/product/scrambler-400-x/drake-saddle-stay-texture-black-for-triumph-scrambler-400-x/69e279ae5685096a33ad970b"
  },
  {
    type: "product",
    sourcePath: "/speed-twin-1200-tail-tidy",
    targetPath: "/product/speed-twin-1200/speed-twin-1200-tail-tidy/69e279ae5685096a33ad96d7"
  },
  {
    type: "product",
    sourcePath: "/top-rack-plate-for-yezdi-adventure-2025-black",
    targetPath: "/product/yezdi-adventure-2025/top-rack-plate-for-yezdi-adventure-2025-black/69e279ae5685096a33ad9705"
  },
  {
    type: "product",
    sourcePath: "/drake-saddle-stay-glossy-red-for-x-pulse-210",
    targetPath: "/product/x-pulse-210/drake-saddle-stay-glossy-red-for-x-pulse-210/69e279ae5685096a33ad96c2"
  },
  {
    type: "product",
    sourcePath: "/hand-guard-for-black-himalayan-450",
    targetPath: "/product/himalayan-450/hand-guard-for-black-himalayan-450/69e279ae5685096a33ad96f4"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-glossy-red-for-xpulse-210",
    targetPath: "/product/x-pulse-210/crash-guard-with-slider-glossy-red-for-xpulse-210/69e279ae5685096a33ad96c0"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-x-pulse-210",
    targetPath: "/product/x-pulse-210/side-stand-extender-for-x-pulse-210/69e279ae5685096a33ad96c5"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-for-x-pulse-210",
    targetPath: "/product/x-pulse-210/front-fluid-reservoir-cover-for-x-pulse-210/69e279ae5685096a33ad96c7"
  },
  {
    type: "product",
    sourcePath: "/fog-light-mount-for-honda-rebel-500",
    targetPath: "/product/rebel-500/fog-light-mount-for-honda-rebel-500/69e279ae5685096a33ad96d4"
  },
  {
    type: "product",
    sourcePath: "/backrest-hex-cushion-for-honda-cb-350",
    targetPath: "/product/cb350-highness/backrest-hex-cushion-for-honda-cb-350/69e279ae5685096a33ad96df"
  },
  {
    type: "product",
    sourcePath: "/roadster-2-saddle-bag-50ltr-pair-bag-25ltr-each",
    targetPath: "/product/n-a/roadster-2-saddle-bag-50ltr-pair-bag-25ltr-each/69e279ae5685096a33ad96eb"
  },
  {
    type: "product",
    sourcePath: "/hand-guard-for-ktm-adv-390-2025-black",
    targetPath: "/product/adventure-250-390-390x-2025/hand-guard-for-ktm-adv-390-2025-black/69e279ae5685096a33ad96fa"
  },
  {
    type: "product",
    sourcePath: "/universal-led-fog-light-drl-r40",
    targetPath: "/product/zana-accessories/universal-led-fog-light-drl-r40/69e279ae5685096a33ad96bb"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-ms-black-for-x-pulse-210",
    targetPath: "/product/x-pulse-210/top-rack-with-plate-ms-black-for-x-pulse-210/69e279ae5685096a33ad96da"
  },
  {
    type: "product",
    sourcePath: "/rear-oil-reservoir-hex-cover-aluminum-for-ktm-adv-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/rear-oil-reservoir-hex-cover-aluminum-for-ktm-adv-390-2025/69e279ae5685096a33ad96be"
  },
  {
    type: "product",
    sourcePath: "/headlight-guard-black-for-x-pulse-210",
    targetPath: "/product/x-pulse-210/headlight-guard-black-for-x-pulse-210/69e279ae5685096a33ad96c4"
  },
  {
    type: "product",
    sourcePath: "/rear-footrest-pair-ms-for-x-pulse-210",
    targetPath: "/product/x-pulse-210/rear-footrest-pair-ms-for-x-pulse-210/69e279ae5685096a33ad96c8"
  },
  {
    type: "product",
    sourcePath: "/gps-mount-for-x-pulse-210",
    targetPath: "/product/x-pulse-210/gps-mount-for-x-pulse-210/69e279ae5685096a33ad96c9"
  },
  {
    type: "product",
    sourcePath: "/rear-footrest-for-honda-rebel-500",
    targetPath: "/product/rebel-500/rear-footrest-for-honda-rebel-500/69e279ae5685096a33ad96d2"
  },
  {
    type: "product",
    sourcePath: "/backrest-hex-cushion-with-parcel-shelf-for-honda-cb-350",
    targetPath: "/product/cb350-highness/backrest-hex-cushion-with-parcel-shelf-for-honda-cb-350/69e279ae5685096a33ad96e0"
  },
  {
    type: "product",
    sourcePath: "/gps-mount-for-yezdi-adventure-2025",
    targetPath: "/product/yezdi-adventure-2025/gps-mount-for-yezdi-adventure-2025/69e279ae5685096a33ad970a"
  },
  {
    type: "product",
    sourcePath: "/hand-guard-for-suzuki-v-strom-sx-250-black-silver-logo",
    targetPath: "/product/v-strom-sx-250/hand-guard-for-suzuki-v-strom-sx-250-black-silver-logo/69e279ae5685096a33ad975a"
  },
  {
    type: "product",
    sourcePath: "/hand-guard-for-ktm-adv-390-2025-orange",
    targetPath: "/product/adventure-250-390-390x-2025/hand-guard-for-ktm-adv-390-2025-orange/69e279ae5685096a33ad975c"
  },
  {
    type: "product",
    sourcePath: "/upper-lower-crash-guard-set-for-triumph-tiger-900-gt-black",
    targetPath: "/product/tiger-900-gt/upper-lower-crash-guard-set-for-triumph-tiger-900-gt-black/69e279ae5685096a33ad975e"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extenders-for-aprilia-tuono-457",
    targetPath: "/product/aprilia-rs457/side-stand-extenders-for-aprilia-tuono-457/69e279ae5685096a33ad971c"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-for-aprilia-tuono-457-black",
    targetPath: "/product/aprilia-rs457/front-fluid-reservoir-cover-for-aprilia-tuono-457-black/69e279ae5685096a33ad971d"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-for-triumph-tiger-660",
    targetPath: "/product/tiger-660/top-rack-with-plate-for-triumph-tiger-660/69e279ae5685096a33ad9724"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-for-jawa-bobber-42-honeycomb-black-aluminium",
    targetPath: "/product/bobber-42/radiator-guard-for-jawa-bobber-42-honeycomb-black-aluminium/69e279ae5685096a33ad973b"
  },
  {
    type: "product",
    sourcePath: "/upper-lower-crash-guard-orange-for-ktm-adv-390-2025",
    targetPath: "/product/enduro-390/upper-lower-crash-guard-orange-for-ktm-adv-390-2025/69e279ae5685096a33ad973d"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-for-jawa-bobber-42-aluminium-black",
    targetPath: "/product/bobber-42/bash-plate-for-jawa-bobber-42-aluminium-black/69e279ae5685096a33ad973a"
  },
  {
    type: "product",
    sourcePath: "/paddock-spool-for-aprilia-tuono-457",
    targetPath: "/product/aprilia-rs457/paddock-spool-for-aprilia-tuono-457/69e279ae5685096a33ad971b"
  },
  {
    type: "product",
    sourcePath: "/frame-slider-small-for-aprilia-rs-457",
    targetPath: "/product/aprilia-rs457/frame-slider-small-for-aprilia-rs-457/69e279ae5685096a33ad971f"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extenders-vmc-for-aprilia-rs-457-bash-red-top-black",
    targetPath: "/product/aprilia-tuono-457/side-stand-extenders-vmc-for-aprilia-rs-457-bash-red-top-black/69e279ae5685096a33ad9731"
  },
  {
    type: "product",
    sourcePath: "/upper-lower-crash-guard-black-for-xoom-160",
    targetPath: "/product/xoom-160/upper-lower-crash-guard-black-for-xoom-160/69e279ae5685096a33ad9734"
  },
  {
    type: "product",
    sourcePath: "/exhaust-protector-for-xoom-160",
    targetPath: "/product/xoom-160/exhaust-protector-for-xoom-160/69e279ae5685096a33ad9736"
  },
  {
    type: "product",
    sourcePath: "/front-fork-slider-for-aprilia-tuono-457-black",
    targetPath: "/product/aprilia-tuono-457/front-fork-slider-for-aprilia-tuono-457-black/69e279ae5685096a33ad9711"
  },
  {
    type: "product",
    sourcePath: "/rear-master-cylinder-cover-black-for-aprilia-tuono-457",
    targetPath: "/product/aprilia-tuono-457/rear-master-cylinder-cover-black-for-aprilia-tuono-457/69e279ae5685096a33ad9717"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-triumph-tiger-660",
    targetPath: "/product/tiger-660/side-stand-extender-for-triumph-tiger-660/69e279ae5685096a33ad972b"
  },
  {
    type: "product",
    sourcePath: "/rear-axle-protector-for-triumph-tiger-660",
    targetPath: "/product/tiger-660/rear-axle-protector-for-triumph-tiger-660/69e279ae5685096a33ad972d"
  },
  {
    type: "product",
    sourcePath: "/rear-fluid-reservoir-oil-cover-for-honda-cb-350-2025",
    targetPath: "/product/cb-350-2025/rear-fluid-reservoir-oil-cover-for-honda-cb-350-2025/69e279ae5685096a33ad974f"
  },
  {
    type: "product",
    sourcePath: "/frame-slider-puck-small-for-aprilia-rs-457",
    targetPath: "/product/aprilia-rs457/frame-slider-puck-small-for-aprilia-rs-457/69e279ae5685096a33ad9720"
  },
  {
    type: "product",
    sourcePath: "/rear-axle-protector-for-aprilia-rs-457",
    targetPath: "/product/aprilia-tuono-457/rear-axle-protector-for-aprilia-rs-457/69e279ae5685096a33ad972f"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-for-xoom-160",
    targetPath: "/product/xoom-160/top-rack-with-plate-for-xoom-160/69e279ae5685096a33ad9735"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-t-2-for-jawa-bobber-42-mild-steel-black",
    targetPath: "/product/bobber-42/crash-guard-with-slider-t-2-for-jawa-bobber-42-mild-steel-black/69e279ae5685096a33ad9738"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-ms-plate-black-for-honda-cb-350-2025",
    targetPath: "/product/cb-350-2025/top-rack-with-ms-plate-black-for-honda-cb-350-2025/69e279ae5685096a33ad9750"
  },
  {
    type: "product",
    sourcePath: "/jerry-can-mount-for-suzuki-v-strom-250",
    targetPath: "/product/v-strom-sx-250/jerry-can-mount-for-suzuki-v-strom-250/69e279ae5685096a33ad975b"
  },
  {
    type: "product",
    sourcePath: "/frame-slider-for-aprilia-tuono-457",
    targetPath: "/product/aprilia-tuono-457/frame-slider-for-aprilia-tuono-457/69e279ae5685096a33ad9715"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-for-triumph-tiger-660",
    targetPath: "/product/tiger-660/front-fluid-reservoir-cover-for-triumph-tiger-660/69e279ae5685096a33ad9727"
  },
  {
    type: "product",
    sourcePath: "/upper-lower-crash-guard-set-with-slider-for-ktm-enduro-390-black",
    targetPath: "/product/enduro-390/upper-lower-crash-guard-set-with-slider-for-ktm-enduro-390-black/69e279ae5685096a33ad973e"
  },
  {
    type: "product",
    sourcePath: "/tail-tidy-black-for-aprilia-tuono-457",
    targetPath: "/product/aprilia-tuono-457/tail-tidy-black-for-aprilia-tuono-457/69e279ae5685096a33ad9718"
  },
  {
    type: "product",
    sourcePath: "/saddle-stay-black-for-triumph-tiger-660",
    targetPath: "/product/tiger-660/saddle-stay-black-for-triumph-tiger-660/69e279ae5685096a33ad9723"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-honeycomb-black-for-triumph-tiger-660",
    targetPath: "/product/tiger-660/radiator-guard-honeycomb-black-for-triumph-tiger-660/69e279ae5685096a33ad9725"
  },
  {
    type: "product",
    sourcePath: "/drake-saddle-stay-for-triumph-tiger-660",
    targetPath: "/product/tiger-660/drake-saddle-stay-for-triumph-tiger-660/69e279ae5685096a33ad9729"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-puck-slider-t-3-for-jawa-bobber-42-mild-steel-black",
    targetPath: "/product/bobber-42/crash-guard-with-puck-slider-t-3-for-jawa-bobber-42-mild-steel-black/69e279ae5685096a33ad9737"
  },
  {
    type: "product",
    sourcePath: "/vertical-handlebar-riser-texture-matt-black-for-yezdi-adventure-2025",
    targetPath: "/product/yezdi-adventure-2025/vertical-handlebar-riser-texture-matt-black-for-yezdi-adventure-2025/69e279ae5685096a33ad9716"
  },
  {
    type: "product",
    sourcePath: "/rear-oil-reservoir-hex-cover-aluminum-for-triumph-tiger-660",
    targetPath: "/product/tiger-660/rear-oil-reservoir-hex-cover-aluminum-for-triumph-tiger-660/69e279ae5685096a33ad9728"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-red-for-aprilia-rs-457",
    targetPath: "/product/aprilia-tuono-457/front-fluid-reservoir-cover-red-for-aprilia-rs-457/69e279ae5685096a33ad9733"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-with-slider-t-1-for-jawa-bobber-42-mild-steel-black",
    targetPath: "/product/bobber-42/crash-guard-with-slider-t-1-for-jawa-bobber-42-mild-steel-black/69e279ae5685096a33ad9739"
  },
  {
    type: "product",
    sourcePath: "/hand-guard-for-x-pulse-210-black",
    targetPath: "/product/x-pulse-210/hand-guard-for-x-pulse-210-black/69e279ae5685096a33ad9760"
  },
  {
    type: "product",
    sourcePath: "/rear-oil-reservoir-hex-cover-for-bear-650",
    targetPath: "/product/bear-650/rear-oil-reservoir-hex-cover-for-bear-650/69e279ae5685096a33ad972e"
  },
  {
    type: "product",
    sourcePath: "/hand-guard-for-suzuki-v-strom-sx-250-black",
    targetPath: "/product/v-strom-sx-250/hand-guard-for-suzuki-v-strom-sx-250-black/69e279ae5685096a33ad9758"
  },
  {
    type: "product",
    sourcePath: "/hand-guard-for-suzuki-v-strom-sx-250-white",
    targetPath: "/product/v-strom-sx-250/hand-guard-for-suzuki-v-strom-sx-250-white/69e279ae5685096a33ad9759"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-black-for-triumph-tiger-660",
    targetPath: "/product/tiger-660/crash-guard-black-for-triumph-tiger-660/69e279ae5685096a33ad9722"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stay-with-jerry-can-mount-for-honda-cb-350-2025",
    targetPath: "/product/cb-350-2025/roadster-saddle-stay-with-jerry-can-mount-for-honda-cb-350-2025/69e279ae5685096a33ad974a"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-type-w-for-apache-rtx-300",
    targetPath: "/product/apache-rtx-300/top-rack-with-plate-type-w-for-apache-rtx-300/69e279ae5685096a33ad9785"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-for-kawasaki-klx-230-black",
    targetPath: "/product/klx-230/crash-guard-for-kawasaki-klx-230-black/69e279ae5685096a33ad978d"
  },
  {
    type: "product",
    sourcePath: "/aigis-hand-guard-for-tvs-apache-rtx-300-white",
    targetPath: "/product/apache-rtx-300/aigis-hand-guard-for-tvs-apache-rtx-300-white/69e279ae5685096a33ad97b7"
  },
  {
    type: "product",
    sourcePath: "/vertical-handlebar-riser-for-tvs-apache-rtx-300-silver",
    targetPath: "/product/apache-rtx-300/vertical-handlebar-riser-for-tvs-apache-rtx-300-silver/69e279ae5685096a33ad97b8"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-v2-for-hunter-350-ms-black",
    targetPath: "/product/hunter-350/top-rack-with-plate-v2-for-hunter-350-ms-black/69e279ae5685096a33ad97be"
  },
  {
    type: "product",
    sourcePath: "/fog-light-mount-for-aprilia-rs-457",
    targetPath: "/product/aprilia-rs457/fog-light-mount-for-aprilia-rs-457/69e279ae5685096a33ad97c2"
  },
  {
    type: "product",
    sourcePath: "/pillion-backrest-hex-cushion-for-honda-cb350-rs-black",
    targetPath: "/product/hunter-350/pillion-backrest-hex-cushion-for-honda-cb350-rs-black/69e279ae5685096a33ad97c4"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-for-kawasaki-klx-230-aluminum-silver",
    targetPath: "/product/klx-230/bash-plate-for-kawasaki-klx-230-aluminum-silver/69e279ae5685096a33ad978f"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-for-tvs-apache-rtx-300-ms-black",
    targetPath: "/product/apache-rtx-300/bash-plate-for-tvs-apache-rtx-300-ms-black/69e279ae5685096a33ad97b2"
  },
  {
    type: "product",
    sourcePath: "/vertical-handlebar-riser-silver-for-kawasaki-klx-230",
    targetPath: "/product/klx-230/vertical-handlebar-riser-silver-for-kawasaki-klx-230/69e279ae5685096a33ad9796"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-xoom-160",
    targetPath: "/product/xoom-160/side-stand-extender-for-xoom-160/69e279ae5685096a33ad97a9"
  },
  {
    type: "product",
    sourcePath: "/tail-tidy-for-kawasaki-klx-230",
    targetPath: "/product/klx-230/tail-tidy-for-kawasaki-klx-230/69e279ae5685096a33ad97a5"
  },
  {
    type: "product",
    sourcePath: "/front-fluid-reservoir-cover-black-for-tvs-apache-rtx-300",
    targetPath: "/product/apache-rtx-300/front-fluid-reservoir-cover-black-for-tvs-apache-rtx-300/69e279ae5685096a33ad97b3"
  },
  {
    type: "product",
    sourcePath: "/rear-oil-reservoir-hex-cover-black-for-tvs-apache-rtx-300",
    targetPath: "/product/apache-rtx-300/rear-oil-reservoir-hex-cover-black-for-tvs-apache-rtx-300/69e279ae5685096a33ad97b5"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-for-honda-cb350-rs-aluminum-black",
    targetPath: "/product/cb350-rs/bash-plate-for-honda-cb350-rs-aluminum-black/69e279ae5685096a33ad97bd"
  },
  {
    type: "product",
    sourcePath: "/gps-mount-for-bmw-f-900-gs",
    targetPath: "/product/f-900-gs/gps-mount-for-bmw-f-900-gs/69e279ae5685096a33ad9779"
  },
  {
    type: "product",
    sourcePath: "/upper-lower-crash-guard-with-slider-black-combo-for-tvs-apache-rtx-300-beak-version",
    targetPath: "/product/apache-rtx-300/upper-lower-crash-guard-with-slider-black-combo-for-tvs-apache-rtx-300-beak-version/69e279ae5685096a33ad97af"
  },
  {
    type: "product",
    sourcePath: "/upper-lower-crash-guard-with-slider-combo-red-for-tvs-apache-rtx-300-beak-version",
    targetPath: "/product/apache-rtx-300/upper-lower-crash-guard-with-slider-combo-red-for-tvs-apache-rtx-300-beak-version/69e279ae5685096a33ad97b0"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-v2-for-honda-cb350-rs",
    targetPath: "/product/cb350-rs/top-rack-with-plate-v2-for-honda-cb350-rs/69e279ae5685096a33ad97bc"
  },
  {
    type: "product",
    sourcePath: "/upper-lower-crash-guard-set-red-for-bmw-f900-gs",
    targetPath: "/product/f-900-gs/upper-lower-crash-guard-set-red-for-bmw-f900-gs/69e279ae5685096a33ad9773"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-for-kawasaki-klx-230-aluminum-black",
    targetPath: "/product/klx-230/bash-plate-for-kawasaki-klx-230-aluminum-black/69e279ae5685096a33ad978e"
  },
  {
    type: "product",
    sourcePath: "/crash-guard-for-himalayan-450-with-slider-red-mild-steel-type-1-v2",
    targetPath: "/product/himalayan-450/crash-guard-for-himalayan-450-with-slider-red-mild-steel-type-1-v2/69e279ae5685096a33ad97c5"
  },
  {
    type: "product",
    sourcePath: "/upper-lower-crash-guard-set-black-for-bmw-f900-gs",
    targetPath: "/product/f-900-gs/upper-lower-crash-guard-set-black-for-bmw-f900-gs/69e279ae5685096a33ad9774"
  },
  {
    type: "product",
    sourcePath: "/bash-plate-for-tvs-apache-rtx-300-aluminum-black",
    targetPath: "/product/apache-rtx-300/bash-plate-for-tvs-apache-rtx-300-aluminum-black/69e279ae5685096a33ad97b1"
  },
  {
    type: "product",
    sourcePath: "/coolant-oil-guard-black-for-ktm-adventure-390-2025",
    targetPath: "/product/adventure-250-390-390x-2025/coolant-oil-guard-black-for-ktm-adventure-390-2025/69e279ae5685096a33ad97c1"
  },
  {
    type: "product",
    sourcePath: "/upper-lower-crash-guard-combo-with-slider-for-tvs-apache-rtx-300",
    targetPath: "/product/apache-rtx-300/upper-lower-crash-guard-combo-with-slider-for-tvs-apache-rtx-300/69e279ae5685096a33ad9788"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-for-aprilia-rs-457-red-with-aprilia-457-logo",
    targetPath: "/product/aprilia-rs457/radiator-guard-for-aprilia-rs-457-red-with-aprilia-457-logo/69e279ae5685096a33ad9799"
  },
  {
    type: "product",
    sourcePath: "/roadster-saddle-stay-with-jerry-can-mount-for-tvs-apache-rtx-300",
    targetPath: "/product/apache-rtx-300/roadster-saddle-stay-with-jerry-can-mount-for-tvs-apache-rtx-300/69e279ae5685096a33ad979d"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-kawasaki-klx-230",
    targetPath: "/product/klx-230/side-stand-extender-for-kawasaki-klx-230/69e279ae5685096a33ad9795"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-for-aprilia-tuono-457-black-with-tuono-457-logo",
    targetPath: "/product/aprilia-tuono-457/radiator-guard-for-aprilia-tuono-457-black-with-tuono-457-logo/69e279ae5685096a33ad9797"
  },
  {
    type: "product",
    sourcePath: "/upper-lower-crash-guard-with-slider-combo-silver-for-tvs-apache-rtx-300-beak-version",
    targetPath: "/product/apache-rtx-300/upper-lower-crash-guard-with-slider-combo-silver-for-tvs-apache-rtx-300-beak-version/69e279ae5685096a33ad97ae"
  },
  {
    type: "product",
    sourcePath: "/universal-led-fog-light-drl-r35",
    targetPath: "/product/zana-accessories/universal-led-fog-light-drl-r35/69e279ae5685096a33ad9781"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-type-w-compatible-with-pillion-backrest-for-kawasaki-klx-230-black",
    targetPath: "/product/klx-230/top-rack-with-plate-type-w-compatible-with-pillion-backrest-for-kawasaki-klx-230-black/69e279ae5685096a33ad9790"
  },
  {
    type: "product",
    sourcePath: "/hand-guard-for-ktm-adv-390-2025-white-with-oange-logo",
    targetPath: "/product/adventure-250-390-390x-2025/hand-guard-for-ktm-adv-390-2025-white-with-oange-logo/69e279ae5685096a33ad97bf"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-honeycomb-aluminium-black-with-logo-silver-for-tvs-apache-rtx-300",
    targetPath: "/product/apache-rtx-300/radiator-guard-honeycomb-aluminium-black-with-logo-silver-for-tvs-apache-rtx-300/69e279ae5685096a33ad97b4"
  },
  {
    type: "product",
    sourcePath: "/rear-paddock-spool-black-for-tvs-apache-rtx-300",
    targetPath: "/product/apache-rtx-300/rear-paddock-spool-black-for-tvs-apache-rtx-300/69e279ae5685096a33ad97b6"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-honeycomb-aluminium-silver-with-logo-black-for-tvs-apache-rtx-300",
    targetPath: "/product/apache-rtx-300/radiator-guard-honeycomb-aluminium-silver-with-logo-black-for-tvs-apache-rtx-300/69e279ae5685096a33ad979f"
  },
  {
    type: "product",
    sourcePath: "/rear-oil-reservoir-hex-cover-for-tvs-apache-rtx-300",
    targetPath: "/product/apache-rtx-300/rear-oil-reservoir-hex-cover-for-tvs-apache-rtx-300/69e279ae5685096a33ad97a1"
  },
  {
    type: "product",
    sourcePath: "/gps-mount-for-xoom-160",
    targetPath: "/product/xoom-160/gps-mount-for-xoom-160/69e279ae5685096a33ad97a4"
  },
  {
    type: "product",
    sourcePath: "/pillion-back-rest-for-xoom-160",
    targetPath: "/product/xoom-160/pillion-back-rest-for-xoom-160/69e279ae5685096a33ad97aa"
  },
  {
    type: "product",
    sourcePath: "/drake-saddle-stay-for-honda-cb350-rs-black",
    targetPath: "/product/cb350-rs/drake-saddle-stay-for-honda-cb350-rs-black/69e279ae5685096a33ad97bb"
  },
  {
    type: "product",
    sourcePath: "/frame-slider-small-wing-for-aprilia-rs-457",
    targetPath: "/product/aprilia-rs457/frame-slider-small-wing-for-aprilia-rs-457/69e279ae5685096a33ad97c3"
  },
  {
    type: "product",
    sourcePath: "/drake-saddle-stay-for-apache-rtx-300-black",
    targetPath: "/product/apache-rtx-300/drake-saddle-stay-for-apache-rtx-300-black/69e279ae5685096a33ad9784"
  },
  {
    type: "product",
    sourcePath: "/side-stand-extender-for-tvs-apache-rtx-300",
    targetPath: "/product/apache-rtx-300/side-stand-extender-for-tvs-apache-rtx-300/69e279ae5685096a33ad97a6"
  },
  {
    type: "product",
    sourcePath: "/top-rack-with-plate-for-bmw-f-900-gs-black",
    targetPath: "/product/f-900-gs/top-rack-with-plate-for-bmw-f-900-gs-black/69e279ae5685096a33ad9772"
  },
  {
    type: "product",
    sourcePath: "/radiator-guard-for-aprilia-rs-457-black-with-aprilia-457-logo",
    targetPath: "/product/aprilia-rs457/radiator-guard-for-aprilia-rs-457-black-with-aprilia-457-logo/69e279ae5685096a33ad9798"
  },
  {
    type: "product",
    sourcePath: "/drake-saddle-stay-for-ktm-adv-390-2025-black",
    targetPath: "/product/adventure-250-390-390x-2025/drake-saddle-stay-for-ktm-adv-390-2025-black/69e279ae5685096a33ad97c0"
  },
  {
    type: "product",
    sourcePath: "/top-box-ktm-duke-390-35ltr-aluminium-silver",
    targetPath: "/product/zana-accessories/top-box-ktm-duke-390-35ltr-aluminium-silver/69e279d95685096a33ad97d2"
  },
  {
    type: "product",
    sourcePath: "/top-box-nomada-plastic-50ltr-rflat-black",
    targetPath: "/product/zana-accessories/top-box-nomada-plastic-50ltr-rflat-black/69e279d95685096a33ad97dd"
  },
  {
    type: "product",
    sourcePath: "/top-box-suzuki-vstrom-250-45ltr-aluminium-black",
    targetPath: "/product/zana-accessories/top-box-suzuki-vstrom-250-45ltr-aluminium-black/69e279d95685096a33ad97d3"
  },
  {
    type: "product",
    sourcePath: "/top-box-suzuki-vstrom-250-45ltr-plastic-black",
    targetPath: "/product/zana-accessories/top-box-suzuki-vstrom-250-45ltr-plastic-black/69e279d95685096a33ad97ce"
  },
  {
    type: "product",
    sourcePath: "/top-box-aluminium-silver-22ltr-for-hunter-350",
    targetPath: "/product/zana-accessories/top-box-aluminium-silver-22ltr-for-hunter-350/69e279d95685096a33ad97d0"
  },
  {
    type: "product",
    sourcePath: "/top-box-aluminium-45-ltr-lflat-black-for-bmw-310-gs",
    targetPath: "/product/zana-accessories/top-box-aluminium-45-ltr-lflat-black-for-bmw-310-gs/69e279d95685096a33ad97db"
  },
  {
    type: "product",
    sourcePath: "/top-box-himalayan-450-45ltr-aluminium-black",
    targetPath: "/product/zana-accessories/top-box-himalayan-450-45ltr-aluminium-black/69e279d95685096a33ad97cc"
  },
  {
    type: "product",
    sourcePath: "/top-box-himalayan-450-35ltr-aluminium-silver",
    targetPath: "/product/zana-accessories/top-box-himalayan-450-35ltr-aluminium-silver/69e279d95685096a33ad97d8"
  },
  {
    type: "product",
    sourcePath: "/universal-top-box-aluminium-22-litre-rflat-black",
    targetPath: "/product/zana-accessories/universal-top-box-aluminium-22-litre-rflat-black/69e279d95685096a33ad97df"
  },
  {
    type: "product",
    sourcePath: "/top-box-aluminium-black-55ltr-for-bmw-310-gs",
    targetPath: "/product/zana-accessories/top-box-aluminium-black-55ltr-for-bmw-310-gs/69e279d95685096a33ad97d6"
  },
  {
    type: "product",
    sourcePath: "/sticker-top-box-aluminium-45-ltr-lflat-silver-for-bmw-310-gs",
    targetPath: "/product/zana-accessories/sticker-top-box-aluminium-45-ltr-lflat-silver-for-bmw-310-gs/69e279d95685096a33ad97da"
  },
  {
    type: "product",
    sourcePath: "/top-box-plastic-45-ltr-nomada-series-black",
    targetPath: "/product/zana-accessories/top-box-plastic-45-ltr-nomada-series-black/69e279d95685096a33ad97e0"
  },
  {
    type: "product",
    sourcePath: "/top-box-moto-32-ltr-plastic-with-backrest-black",
    targetPath: "/product/zana-accessories/top-box-moto-32-ltr-plastic-with-backrest-black/69e279d95685096a33ad97e2"
  },
  {
    type: "product",
    sourcePath: "/top-box-aluminium-black-35ltr-for-ktm-duke-250390-gen3",
    targetPath: "/product/zana-accessories/top-box-aluminium-black-35ltr-for-ktm-duke-250390-gen3/69e279d95685096a33ad97d1"
  },
  {
    type: "product",
    sourcePath: "/top-box-suzuki-vstrom-250-45ltr-aluminium-silver",
    targetPath: "/product/zana-accessories/top-box-suzuki-vstrom-250-45ltr-aluminium-silver/69e279d95685096a33ad97d4"
  },
  {
    type: "product",
    sourcePath: "/top-box-plastic-55ltr-lflat-black-for-himalayan-450",
    targetPath: "/product/zana-accessories/top-box-plastic-55ltr-lflat-black-for-himalayan-450/69e279d95685096a33ad97d9"
  },
  {
    type: "product",
    sourcePath: "/top-box-aluminium-silver-55ltr-for-bmw-850-gs",
    targetPath: "/product/zana-accessories/top-box-aluminium-silver-55ltr-for-bmw-850-gs/69e279d95685096a33ad97d5"
  },
  {
    type: "product",
    sourcePath: "/top-box-re-himalayan-450-45ltr-aluminium-silver",
    targetPath: "/product/zana-accessories/top-box-re-himalayan-450-45ltr-aluminium-silver/69e279d95685096a33ad97cd"
  },
  {
    type: "product",
    sourcePath: "/top-box-re-hunter-350-22ltr-aluminium-black",
    targetPath: "/product/zana-accessories/top-box-re-hunter-350-22ltr-aluminium-black/69e279d95685096a33ad97cf"
  },
  {
    type: "product",
    sourcePath: "/top-box-ktm-duke-390-35ltr-aluminium-black",
    targetPath: "/product/zana-accessories/top-box-ktm-duke-390-35ltr-aluminium-black/69e279d95685096a33ad97d7"
  },
  {
    type: "product",
    sourcePath: "/top-box-aluminium-bmw-f900-gs-gsa-55ltr-l-flat-brown",
    targetPath: "/product/zana-accessories/top-box-aluminium-bmw-f900-gs-gsa-55ltr-l-flat-brown/69e279d95685096a33ad97dc"
  },
  {
    type: "product",
    sourcePath: "/universal-top-box-aluminium-22-litre-rflat-silver",
    targetPath: "/product/zana-accessories/universal-top-box-aluminium-22-litre-rflat-silver/69e279d95685096a33ad97de"
  },
  {
    type: "product",
    sourcePath: "/top-box-rhino-36-ltr-plastic-with-backrest-black-gray",
    targetPath: "/product/zana-accessories/top-box-rhino-36-ltr-plastic-with-backrest-black-gray/69e279d95685096a33ad97e1"
  },
  {
    type: "bike",
    sourcePath: "/product/front-fluid-reservoir-cover-ktm-adventure-250-black",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/ssc/ducati-hypermotard-950-frame-slider",
    targetPath: "/bike-accessories/zpro/bike/ducati/hypermotard-950/69bea3ebc222d7fdd0662a9e"
  },
  {
    type: "bike",
    sourcePath: "/ssc/suzuki-hayabusa-1300-radiator-guard",
    targetPath: "/bike-accessories/zpro/bike/suzuki/hayabusa-1300/69bea3ebc222d7fdd0662aa1"
  },
  {
    type: "bike",
    sourcePath: "/product/uk-flag-type-1-radiator-grill-silver-with-black-gt-interceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/tank-guard-for-triumph-street-twin",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-twin/69bea3ebc222d7fdd0662aa2"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-kustom-silver-bmw-g310gs",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/sliders-pair-crash-guard-re-hunter-350",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/hunter-350/69bea3ebc222d7fdd0662a67"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/roadster-saddle-bag-30-litre-single-60-litre-pair-bag-triumph-scrambler-400",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/universal-top-box",
    targetPath: "/product/aluminium-box/zana-universal-top-box-aluminium-silver-l-flat-with-back-rest-cushion/69e279d95685096a33ad97d2"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/crash-guard-with-slider-glossy-white-for-xpulse-210",
    targetPath: "/bike-accessories/zana/bike/hero/x-pulse-210/69bea3ebc222d7fdd0662a84"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/engine-cover-black-for-triumph-speed-400",
    targetPath: "/bike-accessories/zana/bike/triumph/speed-400/69bea3ebc222d7fdd0662aa8"
  },
  {
    type: "bike",
    sourcePath: "/zpro/sc/honda-cb350-accessories",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-master-cylinder-cover-black-for-aprilia-tuono-457",
    targetPath: "/bike-accessories/zana/bike/aprilia/aprilia-tuono-457/69bea3ebc222d7fdd0662a98"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/radiator-guard-honeycomb-black-for-ktm-duke-390250200390-gen-3",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/product/universal-weekender-tail-bag-32-liters-expandable-to-39-liters-for-apache-rtx-300",
    targetPath: "/bike-accessories/zana/bike/tvs/apache-rtx-300/69bea3ebc222d7fdd0662a97"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/front-disc-caliper-protector-ktm-adventure-250-stainless-steel",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/ssc/yezdi-adventure-bash-plate",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-adventure/69bea3ebc222d7fdd0662aae"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/honda-cb350-rs-new-pillion-backrest-cushion-big",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-rs/69bea3ebc222d7fdd0662a7d"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-with-plate-w1-ms-compatible-with-pillion-backrest-for-royal-enfield-hunter-350",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/hunter-350/69bea3ebc222d7fdd0662a67"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/panniers-36-ltr-aluminium-rflat-black-with-frame-for-triumph-tiger-900-rally-pro",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/zpro/product/front-fork-slider-for-ducati-scrambler",
    targetPath: "/bike-accessories/zpro/bike/ducati/scrambler/69bea3ebc222d7fdd0662a9c"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/universall-bungee-cord-small-50-cm",
    targetPath: "/product/small/zana-universal-small-bungee-cord/69e279ad5685096a33ad9662"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/new-pillion-backrest-cushion-big-gtinterceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/zpro/sc/ktm-adventure-390-cc-accessories",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/ssc/gel-seat-cushion-vstrom-sx-250",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/ssc/bmw-g-310-gs-upper-fairing-guard",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/side-stand-extender-suzuki-vstrom-250-aluminum-stainless-steel",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/brat-mini-handle-bar-for-gtinterceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/number-plate-mount-for-bmw-f900-gs-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/pluto-tail-bag-tank-bag-for-ktm-duke-250-gen3",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/saddle-bag-super-meteor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/upper-crash-bars-silver-for-bmw-f850-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-850-gs-adventure/69bea3ebc222d7fdd0662a76"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/headlight-guard-for-super-meteor-650-black-stainless-steel",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/gps-mount-for-honda-cb200x",
    targetPath: "/bike-accessories/zana/bike/honda/cb200x/69bea3ebc222d7fdd0662a7f"
  },
  {
    type: "bike",
    sourcePath: "/product/bash-plate-for-tvs-apache-rtx-300-aluminum-silver",
    targetPath: "/bike-accessories/zana/bike/tvs/apache-rtx-300/69bea3ebc222d7fdd0662a97"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/fog-light-mount-for-honda-cb-300f",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/zpro/ssc/triumph-tiger900-top-box",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/roadster-saddle-bag-30-litre-single-60-litre-pair-bag-triumph-speed-400",
    targetPath: "/bike-accessories/zana/bike/triumph/speed-400/69bea3ebc222d7fdd0662aa8"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-with-puck-slider-black-for-triumph-speed-400",
    targetPath: "/bike-accessories/zana/bike/triumph/speed-400/69bea3ebc222d7fdd0662aa8"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-plastic-45ltr-black-for-meteor-350",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/meteor-350/69bea3ebc222d7fdd0662a69"
  },
  {
    type: "bike",
    sourcePath: "/product/top-box-super-meteor-650-35ltr-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/side-stand-extender-for-honda-cb350",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-bash-plate",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "product",
    sourcePath: "/ssc/saddle-bag-1",
    targetPath: "/product/saddle-bag/zana-universal-adventure-saddle-bag/69e279ad5685096a33ad9543"
  },
  {
    type: "product",
    sourcePath: "/ssc/top-box-plastic-45-ltr-nomada-series-black",
    targetPath: "/product/abs-box/zana-universal-top-box-nomada-plastic-with-backrest/69e279d95685096a33ad97e0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/yezdi-scrambler-top-rack-plate-black-type-1",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-scrambler/69bea3ebc222d7fdd0662aaf"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/retro-saddle-bag-for-hunter-350-small",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/hunter-350/69bea3ebc222d7fdd0662a67"
  },
  {
    type: "bike",
    sourcePath: "/ssc/handlebar-riser-apache -rtx-300",
    targetPath: "/bike-accessories/zana/bike/tvs/apache-rtx-300/69bea3ebc222d7fdd0662a97"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/gps-mount-bmw-f-900-xr",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-xr/69bea3ebc222d7fdd0662a75"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-guerrilla450-tank-bag",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/sc/aprilia-tuono-457-accessories",
    targetPath: "/bike-accessories/zana/bike/aprilia/aprilia-tuono-457/69bea3ebc222d7fdd0662a98"
  },
  {
    type: "bike",
    sourcePath: "/ssc/hand-guard-yezdi-adventure-2025",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-adventure-2025/69bea3ebc222d7fdd0662ab0"
  },
  {
    type: "bike",
    sourcePath: "/ssc/bajaj-dominar-250-400-radiator-grill",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/bash-plate-black-for-xpulse-200",
    targetPath: "/bike-accessories/zana/bike/hero/xpulse-200/69bea3ebc222d7fdd0662a83"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/radiator-guard-honeycomb-black-for-yezdi-adventure-2025",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-adventure-2025/69bea3ebc222d7fdd0662ab0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-footrest-pulsar-ns400z",
    targetPath: "/bike-accessories/zana/bike/bajaj/pulsar-ns400z/69bea3ebc222d7fdd0662a71"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/universal-top-box-aluminium-35ltr-rflat-black",
    targetPath: "/product/aluminium-box/zana-universal-top-box-aluminium-black-l-flat-with-back-rest-cushion/69e279d95685096a33ad97d1"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-paddock-spool-for-aprilia-rs-457",
    targetPath: "/bike-accessories/zana/bike/aprilia/aprilia-rs457/69bea3ebc222d7fdd0662a99"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-super-meteor-650-aluminium-black-45ltr-l-flat",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-ms-with-slider-puck-black-for-vstrom-250",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/product/drake-saddle-stay-texture-black-for-x-pulse-210",
    targetPath: "/bike-accessories/zana/bike/hero/x-pulse-210/69bea3ebc222d7fdd0662a84"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-with-plate-ms-for-classic-350-reborn",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/front-fork-slider-for-bmw-f850-gs",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-850-gs/69bea3ebc222d7fdd0662a74"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/rear-master-cylinder-protector-gtinterceptor-650-bs6-ss",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/roadster-saddle-stay-black-with-jerry-can-mounting-for-ktm-adv-250-390-390-x",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/top-box-aluminium-black-55ltr-bmw-f-900-xr",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-xr/69bea3ebc222d7fdd0662a75"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/vader-hard-shell-tail-bag-tiger-900-rally-pro-65ltr",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/top-box-plastic-58-ltr-lflat-black-for-triumph-tiger-900-rally-pro",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/offset-handle-bar-riser-black-for-triumph-speed-400",
    targetPath: "/bike-accessories/zana/bike/triumph/speed-400/69bea3ebc222d7fdd0662aa8"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-without-plate-classic-350500",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/radiator-grill-uk-flag-black-for-triumph-street-twin",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-twin/69bea3ebc222d7fdd0662aa2"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/product/side-stand-extender-for-triumph-street-triple-765",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-triple-765/69bea3ebc222d7fdd0662aaa"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-hunter-350-crash-guard",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/hunter-350/69bea3ebc222d7fdd0662a67"
  },
  {
    type: "bike",
    sourcePath: "/index.php/product/rear-footrest-pair-for-tvs-apache-rtx-300",
    targetPath: "/bike-accessories/zana/bike/tvs/apache-rtx-300/69bea3ebc222d7fdd0662a97"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-himalayan-2016-2020-headlight-grill",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-2016-2020/69bea3ebc222d7fdd0662a64"
  },
  {
    type: "bike",
    sourcePath: "/product/top-box-re-classic-350-45ltr-black-aluminium",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/bash-plate-for-himalayan-450-ms-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-aluminium-45ltr-rflat-sliver-for-harley-davidson-x440",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-hunter-350-headlight-guard",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/hunter-350/69bea3ebc222d7fdd0662a67"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-with-slider-red-dominar400-20172022",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/crash-guard-with-slider-for-xpulse-200",
    targetPath: "/bike-accessories/zana/bike/hero/xpulse-200/69bea3ebc222d7fdd0662a83"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/gps-mount-bmw-310gs-aluminum",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-himalayan-2016-2020-pillion-backrest",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-2016-2020/69bea3ebc222d7fdd0662a64"
  },
  {
    type: "bike",
    sourcePath: "/ssc/kawasaki-versys-650-handlebar-riser",
    targetPath: "/bike-accessories/zana/bike/kawasaki/versys-650/69bea3ebc222d7fdd0662a88"
  },
  {
    type: "bike",
    sourcePath: "/ssc/number-plate-mount-bmw-r-1300-gs",
    targetPath: "/bike-accessories/zpro/bike/bmw/r-1300-gs/69bea3ebc222d7fdd0662a79"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/retro-saddle-bag-for-scram-411",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/scram-411/69bea3ebc222d7fdd0662a66"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/clubman-handle-bar-interceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/ssc/ktm-adventure-250-390-handle-riser",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/maximus-tail-bag-36-litre-single-kawasaki-versys-650",
    targetPath: "/bike-accessories/zana/bike/kawasaki/versys-650/69bea3ebc222d7fdd0662a88"
  },
  {
    type: "bike",
    sourcePath: "/product/offset-handle-riser-guerrilla-450",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/handlebar-riser-for-super-meteor-650-vertical-aluminum",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/ssc/triumph-street-scrambler-900-radiator-guard",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-scrambler-900/69bea3ebc222d7fdd0662aa3"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/mirror-extender-for-honda-cb300f",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/ducati-monster-950-frame-slider-lh-rh",
    targetPath: "/bike-accessories/zpro/bike/ducati/monster-950/69bea3ebc222d7fdd0662a9b"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/angular-handlebar-riser-for-ktm-adv-390-2025-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/public/index.php/product/pull-back-angular-handle-bar-riser-for-ktm-390250--390-x-adventure-aluminium",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/upper-lower-crash-guard-set-black-for-ktm-adv",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/index.php/sc/bajaj-dominar-250-cc-400-cc-accessories",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/front-fork-sliders-ktm-duke-200-bs6-2021",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-200-bs6-2021-22/69bea3ebc222d7fdd0662a90"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/top-rack-with-plate-trident-660",
    targetPath: "/bike-accessories/zpro/bike/triumph/trident-660/69bea3ebc222d7fdd0662aa5"
  },
  {
    type: "bike",
    sourcePath: "/zpro/ssc/honda-cb-350-rs-fog-light-mount",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-rs/69bea3ebc222d7fdd0662a7d"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/bash-plate-bmw-f900-gs-gsa-silver",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/bash-plate-triumph-speed-400-black",
    targetPath: "/bike-accessories/zana/bike/triumph/speed-400/69bea3ebc222d7fdd0662aa8"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/saddle-bag-re-meteor-350",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/meteor-350/69bea3ebc222d7fdd0662a69"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-with-plate-w1-ms-compatible-with-pillion-backrest-for-royal-enfield-hunter-350",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/hunter-350/69bea3ebc222d7fdd0662a67"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/honda-cb300r-new-pillion-backrest-cushion-big",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/fog-light-mount-for-honda-cb350",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/backrest-triumph-speed-twin-1200",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-1200/69bea3ebc222d7fdd0662aab"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/gps-mount-versys-650",
    targetPath: "/bike-accessories/zana/bike/kawasaki/versys-650/69bea3ebc222d7fdd0662a88"
  },
  {
    type: "bike",
    sourcePath: "/zpro/product/gtx-tank-bag-16ltr-expandable-to-20ltr-for-bmw-f900-gs",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs/69bea3ebc222d7fdd0662a78"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-scram-411-engine-frame",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/scram-411/69bea3ebc222d7fdd0662a66"
  },
  {
    type: "bike",
    sourcePath: "/zpro/product/bash-plate-triumph-street-scrambler",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-scrambler-900/69bea3ebc222d7fdd0662aa3"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/tank-guard-crash-guard-with-slider-puck-orange-for-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/ssc/ktm-adventure-250-390-top-rack",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/clubman-handle-bar-interceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/royal-enfield-hunter-350-headlight-guard-stainlesssteel",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/hunter-350/69bea3ebc222d7fdd0662a67"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/mirror-extender-for-honda-cb-350-rs",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-rs/69bea3ebc222d7fdd0662a7d"
  },
  {
    type: "bike",
    sourcePath: "/ssc/gel-seat-cushion-cb-200x",
    targetPath: "/bike-accessories/zana/bike/honda/cb200x/69bea3ebc222d7fdd0662a7f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/guerrilla-450-top-box-lflat-45-litre-black-aluminium",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/radiator-grill-black-ninja-300",
    targetPath: "/bike-accessories/zana/bike/kawasaki/ninja-300/69bea3ebc222d7fdd0662a89"
  },
  {
    type: "bike",
    sourcePath: "/ssc/ktm-duke-125-bs6-paddock-stand",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-125-2020-22/69bea3ebc222d7fdd0662a92"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/fog-light-mount-for-honda-cb300r",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/ssc/triumph-scrambler-400x-fluid-reservoir-cover",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/ssc/ktm-adventure-390-top-box",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/exhaust-protector-for-xoom-160",
    targetPath: "/bike-accessories/zana/bike/hero/xoom-160/69bea3ebc222d7fdd0662a85"
  },
  {
    type: "bike",
    sourcePath: "/product/universal-top-box-plasitc-50-litre-r-flat-black-with-backrest-for-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/offset-handle-bar-riser-silver-for-triumph-scrambler-400",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/tail-tidy-black-for-ktm-duke-390250200390-gen-3",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/sliders-pair-crash-guard-himalayan-450",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/back-rest-black-for-for-triumph-scrambler-400-x",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/ssc/bajaj-dominar-250-400-handle-riser",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/zpro/sc/suzuki-v-strom-sx-250-accessories",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/zpro/ssc/panniers-bmw-f-900-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/product/universal-top-box-aluminium-45ltr-l-flat-black-with-back-rest-cushion-for-tvs-apache-rtx-300",
    targetPath: "/bike-accessories/zana/bike/tvs/apache-rtx-300/69bea3ebc222d7fdd0662a97"
  },
  {
    type: "bike",
    sourcePath: "/ssc/gel-seat-cushion-xpulse-200",
    targetPath: "/bike-accessories/zana/bike/hero/xpulse-200/69bea3ebc222d7fdd0662a83"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-himalayan-450-sliders",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/top-box-aluminium-55ltr-l-flat-black-with-back-rest-cushion-for-bmw-r-1300-gs",
    targetPath: "/bike-accessories/zpro/bike/bmw/r-1300-gs/69bea3ebc222d7fdd0662a79"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-with-slider-for-yezdi-adventure-2025-black",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-adventure-2025/69bea3ebc222d7fdd0662ab0"
  },
  {
    type: "bike",
    sourcePath: "/ssc/gel-seat-cushion-meteor-350",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/meteor-350/69bea3ebc222d7fdd0662a69"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/gps-mount-dominar400-20192021",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-himalayan-2016-2020-saddle-stay",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-2016-2020/69bea3ebc222d7fdd0662a64"
  },
  {
    type: "bike",
    sourcePath: "/product/saddle-stay-hero-xpulse-200",
    targetPath: "/bike-accessories/zana/bike/hero/xpulse-200/69bea3ebc222d7fdd0662a83"
  },
  {
    type: "bike",
    sourcePath: "/ssc/gel-seat-cushion-super-meteor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/handle-weight-for-triumph-street-triple-765",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-triple-765/69bea3ebc222d7fdd0662aaa"
  },
  {
    type: "bike",
    sourcePath: "/ssc/gel-seat-cushion-hunter-350",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/hunter-350/69bea3ebc222d7fdd0662a67"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/hand-guard-for-ktm-adv-390-2025-black",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/zpro/sc/triumph-speed-twin-accessories",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-900/69bea3ebc222d7fdd0662aa6"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/guerrilla450-tripper-tank-bag-8-litre",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/zpro/sc/triumph-street-scrambler-900-accessories",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-scrambler-900/69bea3ebc222d7fdd0662aa3"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/paddock-stand-duke-125-202022",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-125-2020-22/69bea3ebc222d7fdd0662a92"
  },
  {
    type: "bike",
    sourcePath: "/public/sc/honda-cb350-accessories",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/pillion-backrest-cushion-big-for-royal-enfield-hunter-350",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/hunter-350/69bea3ebc222d7fdd0662a67"
  },
  {
    type: "bike",
    sourcePath: "/ssc/honda-cb-350-rs-fog-light-mount",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-rs/69bea3ebc222d7fdd0662a7d"
  },
  {
    type: "bike",
    sourcePath: "/ssc/ktm-adventure-390-side-stand-extender",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-bsa-goldstar-650-aluminium-22l-lflat-silver",
    targetPath: "/bike-accessories/zana/bike/bsa/goldstar-650/69bea3ebc222d7fdd0662a9a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/side-stand-extender-pulsar-ns400z",
    targetPath: "/bike-accessories/zana/bike/bajaj/pulsar-ns400z/69bea3ebc222d7fdd0662a71"
  },
  {
    type: "bike",
    sourcePath: "/sc/ktm-rc-200-cc-390-cc-accessories",
    targetPath: "/bike-accessories/zana/bike/ktm/rc-200-390/69bea3ebc222d7fdd0662a8f"
  },
  {
    type: "bike",
    sourcePath: "/sc/bajaj-pulsar-ns200-accessories",
    targetPath: "/bike-accessories/zana/bike/bajaj/pulsar-ns200/69bea3ebc222d7fdd0662a70"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/handle-bar-riser-for-harley-davidson-x440",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/ssc/himalayan-450-rear-master-cylinder-cover",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/universal-fog-lights",
    targetPath: "/product/fog-lights/zana-universal-led-fog-light/69e279ad5685096a33ad9614"
  },
  {
    type: "bike",
    sourcePath: "/ssc/bajaj-dominar-250-400-gps-mount",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "product",
    sourcePath: "/ssc/universal-tail-tank-saddle-bags",
    targetPath: "/product/tank-bag/zana-universal-gtx-tank-bag-tail-bag/69e279ae5685096a33ad96e8"
  },
  {
    type: "bike",
    sourcePath: "/public/index.php/zpro/sc/triumph-speed-twin",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-900/69bea3ebc222d7fdd0662aa6"
  },
  {
    type: "bike",
    sourcePath: "/ssc/tail-tidy-shotgun-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/shotgun-650/69bea3ebc222d7fdd0662a6b"
  },
  {
    type: "bike",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-top-rack",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/sc/bajaj-pulsar-ns400z-accessories",
    targetPath: "/bike-accessories/zana/bike/bajaj/pulsar-ns400z/69bea3ebc222d7fdd0662a71"
  },
  {
    type: "bike",
    sourcePath: "/ssc/ktm-adv-390-bash-plate",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-bsa-goldstar-650-with-slider-puck-steel-black",
    targetPath: "/bike-accessories/zana/bike/bsa/goldstar-650/69bea3ebc222d7fdd0662a9a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/gps-mount-xpulse-200",
    targetPath: "/bike-accessories/zana/bike/hero/xpulse-200/69bea3ebc222d7fdd0662a83"
  },
  {
    type: "bike",
    sourcePath: "/ssc/honda-cb300f-pillion-backrest",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/dominar-400-2019-21-combo-offer-saddle-stay-texture-matt-black-dominar-250400-2019-21-front-number-plate-relocator-dominar-250400-2019-22-fluid-reserv",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/uk-flag-engine-cover-for-triumph-speed-twin-900",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-900/69bea3ebc222d7fdd0662aa6"
  },
  {
    type: "bike",
    sourcePath: "/ssc/bmw-g-310-gs-paddock-stand",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/ssc/crash-guard-gs-310g",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-with-slider-puck-for-honda-cb200x-black",
    targetPath: "/bike-accessories/zana/bike/honda/cb200x/69bea3ebc222d7fdd0662a7f"
  },
  {
    type: "bike",
    sourcePath: "/ssc/bmw-g-310-gs-front-fork-slider",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/ssc/crash-guard-yezdi-adventure-2025",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-adventure-2025/69bea3ebc222d7fdd0662ab0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/mirror-extender-ktm-duke-390",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/ssc/hero-xpulse-200-top-rack",
    targetPath: "/bike-accessories/zana/bike/hero/xpulse-200/69bea3ebc222d7fdd0662a83"
  },
  {
    type: "bike",
    sourcePath: "/ssc/honda-cb350rs-top-rack",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-rs/69bea3ebc222d7fdd0662a7d"
  },
  {
    type: "bike",
    sourcePath: "/ssc/saddle-stay-hunter-350",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/hunter-350/69bea3ebc222d7fdd0662a67"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-interceptor-650-saddle-bag",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/public/product/pull-back-angular-handle-bar-riser-for-ktm-390250--390-x-adventure-aluminium",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/ssc/top-box duke gen 3",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/hand-guard-for-triumph-scrambler-400-x-black",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/ssc/top-rack duke 390 gen 3",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/ssc/fog-lights-hero-x-pulse-210",
    targetPath: "/bike-accessories/zana/bike/hero/x-pulse-210/69bea3ebc222d7fdd0662a84"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/yezdi-adventure-bash-plate-silver-aluminium",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-adventure/69bea3ebc222d7fdd0662aae"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-handlebar-riser",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/ssc/triumph-scrambler-400x-handle-bar-riser",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "product",
    sourcePath: "/sc/universal-gel-seat-cushion",
    targetPath: "/product/small/zana-universal-gel-seat-cushion-small/69e279ad5685096a33ad9600"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/vader-hard-shell-tail-bag-65-litre",
    targetPath: "/product/tail-bag/zana-vader-hard-shell-tail-bag-with-free-2-waterproof-storage-bag/69e279ad5685096a33ad9564"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/vertical-handlebar-riser-black-for-x-pulse-210",
    targetPath: "/bike-accessories/zana/bike/hero/x-pulse-210/69bea3ebc222d7fdd0662a84"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/tank-guard-silver-for-bmw-f850-gs",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-850-gs/69bea3ebc222d7fdd0662a74"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/bash-plate-type2-for-triumph-street-twin",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-twin/69bea3ebc222d7fdd0662aa2"
  },
  {
    type: "bike",
    sourcePath: "/sc/royal-enfield-himalayan-2016-2020-accessories",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-2016-2020/69bea3ebc222d7fdd0662a64"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-with-slider-texture-matt-black-pulsar-200ns",
    targetPath: "/bike-accessories/zana/bike/bajaj/pulsar-ns200/69bea3ebc222d7fdd0662a70"
  },
  {
    type: "bike",
    sourcePath: "/public/index.php/zpro/sc/bmw-zp-f-850-gs-accessories",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-850-gs/69bea3ebc222d7fdd0662a74"
  },
  {
    type: "bike",
    sourcePath: "/ssc/mobile-holder-guerrilla-450",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/ssc/triumph-street-scrambler-900-front-fork-slider",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-scrambler-900/69bea3ebc222d7fdd0662aa3"
  },
  {
    type: "bike",
    sourcePath: "/ssc/ktm-adventure-250-390-crash-guard",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/radiator-grill-uk-flag-trident-black-texture-for-triumph-trident-660",
    targetPath: "/bike-accessories/zpro/bike/triumph/trident-660/69bea3ebc222d7fdd0662aa5"
  },
  {
    type: "bike",
    sourcePath: "/zpro/ssc/triumph-tiger850-mirror-extender",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-850/69bea3ebc222d7fdd0662aa4"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/universal-top-box-aluminium-55-ltr-black",
    targetPath: "/product/aluminium-box/zana-universal-top-box-aluminium-black-l-falt-with-back-rest-cushion/69e279d95685096a33ad97d6"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/mirror-extender-aluminum-for-hunter-350",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/hunter-350/69bea3ebc222d7fdd0662a67"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/headlight-guard-stainless-steel-t1-for-for-royal-enfield-meteor-350",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/meteor-350/69bea3ebc222d7fdd0662a69"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/top-box-triumph-tiger850-45ltr-aluminium-black",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-850/69bea3ebc222d7fdd0662aa4"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/rear-oil-reservoir-hex-cover-for-super-meteor-650-not-compatible-with-royal-enfield-big-leg-guard",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/ssc/kawasaki-z900-crash-guard",
    targetPath: "/bike-accessories/zpro/bike/kawasaki/z900/69bea3ebc222d7fdd0662a8a"
  },
  {
    type: "bike",
    sourcePath: "/ssc/honda-cb350-fluid-reservoir-cover",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/frame-slider-for-ducati-scrambler",
    targetPath: "/bike-accessories/zpro/bike/ducati/scrambler/69bea3ebc222d7fdd0662a9c"
  },
  {
    type: "product",
    sourcePath: "/index.php/all-reviews/universal-led-fog-light-zfl50",
    targetPath: "/product/fog-lights/zana-universal-led-fog-light/69e279ad5685096a33ad9614"
  },
  {
    type: "bike",
    sourcePath: "/zpro/product/front-fork-slider-for-triumph-tiger-900-gt",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-gt/69bea3ebc222d7fdd0662aad"
  },
  {
    type: "bike",
    sourcePath: "/ssc/gel-seat-cushion-scrambler-400x",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-classic350-reborn-fluid-reservoir-cover",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "bike",
    sourcePath: "/ssc/triumph-speed-twin-1200-grab-rail",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-1200/69bea3ebc222d7fdd0662aab"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/sliders-pair-for-crash-guard-re-classic-350-reborn",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/paddock-stand-ms-bmw-310-gs-texture-matt-black",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/sc/royal-enfield-meteor-350-accessories",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/meteor-350/69bea3ebc222d7fdd0662a69"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/saddle-stay-fz25-2017-2019",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-400-2017-2018/69bea3ebc222d7fdd0662a6f"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/fog-light-mount-for-honda-cb-300f",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-fog-light-mount",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/frame-slider-for-kawasaki-z900",
    targetPath: "/bike-accessories/zpro/bike/kawasaki/z900/69bea3ebc222d7fdd0662a8a"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/chain-cover-for-triumph-speed-twin-900",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-900/69bea3ebc222d7fdd0662aa6"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-with-new-plate-compatible-with-pillion-backrest-texture-matt-black-dominar-20172018",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/crash-guard-ktm-duke-390-black",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-250-390-2019-2022/69bea3ebc222d7fdd0662a8d"
  },
  {
    type: "bike",
    sourcePath: "/ssc/honda-cb350-sump-guard",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/drake-universal-fabric-saddle-bag-32-litre-single-64-litre-pair-bag-for-x-pulse-210",
    targetPath: "/bike-accessories/zana/bike/hero/x-pulse-210/69bea3ebc222d7fdd0662a84"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/universal-top-box-aluminium-45ltr-lflat-black",
    targetPath: "/product/aluminium-box/zana-universal-top-box-aluminium-black-r-flat-with-back-rest-cushion/69e279d95685096a33ad97d3"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-footrest-pair-for-cb300r",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-super-meteor-650-radiator-guard",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/product/radiator-guard-honeycomb-black-for-honda-rebel-500",
    targetPath: "/bike-accessories/zana/bike/honda/rebel-500/69bea3ebc222d7fdd0662a82"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/mirror-extender-re-bear-650-aluminum",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/mirror-extender-for-honda-cb350",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/universal-slider-puck-for-triumph-scrambler-400-compatible-with-oem-crash-guard",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/radiator-guard-for-suzuki-hayabusa-1300",
    targetPath: "/bike-accessories/zpro/bike/suzuki/hayabusa-1300/69bea3ebc222d7fdd0662aa1"
  },
  {
    type: "bike",
    sourcePath: "/sc/yamaha-mt-15-accessories",
    targetPath: "/bike-accessories/zana/bike/yamaha/mt-15/69bea3ebc222d7fdd0662ab1"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/handle-bar-for-super-meteor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/pillion-backrest-for-gtinterceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-footrest-pair-for-honda-cb350rs",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-rs/69bea3ebc222d7fdd0662a7d"
  },
  {
    type: "bike",
    sourcePath: "/ssc/triumph-trident660-front-fork-slider",
    targetPath: "/bike-accessories/zpro/bike/triumph/trident-660/69bea3ebc222d7fdd0662aa5"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/backrest-for-triumph-speed-twin-1200",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-1200/69bea3ebc222d7fdd0662aab"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/side-stand-extender-scram-411-aluminum-stainless-steel",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/scram-411/69bea3ebc222d7fdd0662a66"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/rear-footrest-for-gt-interceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-paddock-spools-with-swing-arm-protector-ktm-duke-200-bs6-2021",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-200-bs6-2021-22/69bea3ebc222d7fdd0662a90"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/radiator-guard-honeycomb-black-for-ktm-duke-390250200390-gen-3",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/side-stand-extender-for-x-pulse-210",
    targetPath: "/bike-accessories/zana/bike/hero/x-pulse-210/69bea3ebc222d7fdd0662a84"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/roadster-saddle-stay-with-jerry-can-mount-black-for-honda-rebel-500",
    targetPath: "/bike-accessories/zana/bike/honda/rebel-500/69bea3ebc222d7fdd0662a82"
  },
  {
    type: "bike",
    sourcePath: "/product/mobile-holder-touch-charger-bmw-f900-gs-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/universal-gel-seat-cushion-medium-770grm",
    targetPath: "/product/medium/zana-universal-gel-seat-cushion-medium/69e279ad5685096a33ad95ff"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/universal-led-fog-light-zfl50",
    targetPath: "/product/fog-lights/zana-universal-led-fog-light/69e279ad5685096a33ad9614"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/rear-paddock-spools-for-ktm-duke-390250200390-gen-3",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "product",
    sourcePath: "/product/fog-light-mount-universal",
    targetPath: "/product/fog-light-mount/zana-universal-fog-light-mount/69e279ad5685096a33ad9664"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/linear-engine-cover-smallaluminium-for-triumph-street-scrambler",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-scrambler-900/69bea3ebc222d7fdd0662aa3"
  },
  {
    type: "bike",
    sourcePath: "/product/front-fluid-reservoir-cover-ktm-adventure-250",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/ssc/harley-davidson-x440-crash-guard",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/bash-plate-ss-304-black-for-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/tail-tidy-black-for-honda-cb300r",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/guerrilla450-top-box-aluminium-35-litre-lflat-silver",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/vetrical-handlebar-riser-for-honda-cb200x",
    targetPath: "/bike-accessories/zana/bike/honda/cb200x/69bea3ebc222d7fdd0662a7f"
  },
  {
    type: "bike",
    sourcePath: "/sc/ktm-duke-125-accessories",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-125-2020-22/69bea3ebc222d7fdd0662a92"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/saddle-stay-hero-xpulse-200",
    targetPath: "/bike-accessories/zana/bike/hero/xpulse-200/69bea3ebc222d7fdd0662a83"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/backrest-with-parcel-shelf-ms-for-classic-350-reborn",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/offset-handle-bar-riser-bmw-f900-gs-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/speed-twin-1200-tail-tidy",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-1200/69bea3ebc222d7fdd0662aab"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/product/saddle-stay-for-bmw-f900-gs-black",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "product",
    sourcePath: "/index.php/all-reviews/paddock-stand-fz25-glossy-red-color",
    targetPath: "/product/paddock-stand/zana-universal-paddock-stand/69e279ad5685096a33ad9660"
  },
  {
    type: "bike",
    sourcePath: "/zpro/sc/ducati-scrambler-accessories",
    targetPath: "/bike-accessories/zpro/bike/ducati/scrambler/69bea3ebc222d7fdd0662a9c"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/front-fork-slider-for-bmw-f850-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-850-gs-adventure/69bea3ebc222d7fdd0662a76"
  },
  {
    type: "bike",
    sourcePath: "/ssc/ktm-adventure-390-top-rack",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-handlebar",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/tripper-tank-bag-80-litre-for-speed-twin-1200",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-1200/69bea3ebc222d7fdd0662aab"
  },
  {
    type: "bike",
    sourcePath: "/zpro/ssc/bajaj-dominar-400-2017-2018-paddock-stand",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-400-2017-2018/69bea3ebc222d7fdd0662a6f"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-with-slider-red-bs346-2016-2020",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-2016-2020/69bea3ebc222d7fdd0662a64"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/honda-cb-300fz-radiator-guard-honeycomb-black",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/headlight-grill-guerrilla-450-black-type5",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/product/crash-guard-with-puck-slider-black-for-honda-rebel-500",
    targetPath: "/bike-accessories/zana/bike/honda/rebel-500/69bea3ebc222d7fdd0662a82"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/front-fluid-reservoir-cover-ktm-adventure-250-black",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/sc/hero-xpulse200-accessories",
    targetPath: "/bike-accessories/zana/bike/hero/xpulse-200/69bea3ebc222d7fdd0662a83"
  },
  {
    type: "bike",
    sourcePath: "/ssc/triumph-speed-twin-1200-engine-guard",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-1200/69bea3ebc222d7fdd0662aab"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/top-box-aluminium-black-45ltr-bmw-f-900-xr",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-xr/69bea3ebc222d7fdd0662a75"
  },
  {
    type: "bike",
    sourcePath: "/product/jerry-can-mount-for-suzuki-v-strom-250",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/sc/honda-cb350-rs-accessories",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-rs/69bea3ebc222d7fdd0662a7d"
  },
  {
    type: "bike",
    sourcePath: "/zpro/sc/triumph-tiger-850-accessories",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-850/69bea3ebc222d7fdd0662aa4"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/ktm-adv-390-2025-drl-r40-fog-light-mounting-adapter-kit-exclusive-for-zana-drl-r40-auxiliary-light",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-footrest-honda-cb300f-left-right",
    targetPath: "/bike-accessories/zana/bike/honda/cb300f/69bea3ebc222d7fdd0662a7e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/paddock-stand-dominar-400-20172018-texture-matt-black",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/sliders-pair-crash-guard-dominar-250-400",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-ktm-duke-250-matt-black",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/mirror-extender-for-himalayan-450-texture-black-aluminium",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-for-bsa-goldstar-650-with-pillion-back-rest-mild-steel-black-type1",
    targetPath: "/bike-accessories/zana/bike/bsa/goldstar-650/69bea3ebc222d7fdd0662a9a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/tank-guard-bmw-f900-gs-gsa-silver",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/universal-top-box-aluminium-22-ltr-rflat-silver",
    targetPath: "/product/aluminium-box/zana-universal-top-box-aluminium-silver-l-flat/69e279d95685096a33ad97d0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-paddock-spools-aluminum-for-suzuki-vstrom-250",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/side-stand-extender-sheet-metal-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-plastic-45ltr-black-for-cb350-rs",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-rs/69bea3ebc222d7fdd0662a7d"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/drake-universal-fabric-saddle-bag-32-litre-single-64-litre-pair-bag-ktm-duke-250-gen3",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/ssc/honda-cb350-backrest",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/tail-tidy-black-for-triumph-speed-400",
    targetPath: "/bike-accessories/zana/bike/triumph/speed-400/69bea3ebc222d7fdd0662aa8"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/pluto-tail-bag-tank-bag-himalayan-450",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/sliders-pair-crash-guard-honda-cb300r",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/radiator-guard-re-himalayan-450-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/fog-light-mount-re-bear-650-mild-steel",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/vader-pro-hard-shell-tail-bag-50-liter-with-free-2-waterproof-storage-bag-and-1-bungee-cord",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/product/pillion-backrest-guerrilla-450",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/bash-plate-meteor-350-aluminum-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/meteor-350/69bea3ebc222d7fdd0662a69"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/top-rack-plate-big-for-triumph-street-scrambler-900",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-scrambler-900/69bea3ebc222d7fdd0662aa3"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-texture-matt-black-dominar-400250-20172018",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-bash-plate",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/ssc/triumph-scrambler-400x-headlight-guard",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/frame-slider-suzuki-hayabusa-1300-black",
    targetPath: "/bike-accessories/zpro/bike/suzuki/hayabusa-1300/69bea3ebc222d7fdd0662aa1"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-bajaj-dominar-250-22ltr-aluminium-silver",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-with-plate-for-yamaha-mt-15",
    targetPath: "/bike-accessories/zana/bike/yamaha/mt-15/69bea3ebc222d7fdd0662ab1"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/backrest-hex-cushion-with-parcel-shelf-for-honda-cb-350",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/panniers-36-ltr-aluminium-rflat-black-with-frame-for-himalayan-411",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/mirror-extender-for-xpulse-200",
    targetPath: "/bike-accessories/zana/bike/hero/xpulse-200/69bea3ebc222d7fdd0662a83"
  },
  {
    type: "bike",
    sourcePath: "/ssc/triumph-speed-twin-1200-radiator-guard",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-1200/69bea3ebc222d7fdd0662aab"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/offset-handle-bar-riser-for-cb300f",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/ssc/honda-nx500-fluid-reservoir-cover",
    targetPath: "/bike-accessories/zana/bike/honda/nx500/69bea3ebc222d7fdd0662a81"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/hand-guard-for-black-himalayan-450",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/ssc/harley-davidosn-x440-sliders",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/zpro/product/tapered-exhaust-compatible-panniers-with-frame-aluminium-46ltr-set-for-bmw-f-850-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-850-gs-adventure/69bea3ebc222d7fdd0662a76"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-plate-suzuki-vstrom-250-aluminum-black",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/pillion-backrest-for-honda-cb200x",
    targetPath: "/bike-accessories/zana/bike/honda/cb200x/69bea3ebc222d7fdd0662a7f"
  },
  {
    type: "bike",
    sourcePath: "/ssc/honda-cb300r-sliders",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/saddle-stay-bmw-f900-gs-gsa-black",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/leg-guard-ms-with-slider-texture-matt-black-himalayan-bs6-202123",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "product",
    sourcePath: "/sc/universal-bungee-cord",
    targetPath: "/product/large/zana-universal-large-bungee-cord/69e279ad5685096a33ad9663"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/vertical-handlebar-riser-for-kawasaki-versys-650",
    targetPath: "/bike-accessories/zana/bike/kawasaki/versys-650/69bea3ebc222d7fdd0662a88"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/pillion-backrest-bsa-goldstar-650-compatible-with-zana-top-rack",
    targetPath: "/bike-accessories/zana/bike/bsa/goldstar-650/69bea3ebc222d7fdd0662a9a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-without-plate-compatible-with-pillion-backrest-for-royal-enfield-hunter-350",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/hunter-350/69bea3ebc222d7fdd0662a67"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-with-plate-t2-black-duke-125-20192022",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-125-2020-22/69bea3ebc222d7fdd0662a92"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-hunter-350-saddle-bag",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/hunter-350/69bea3ebc222d7fdd0662a67"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/grab-rail-for-triumph-speed-twin",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-1200/69bea3ebc222d7fdd0662aab"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/frame-slider-for-kawasaki-z900",
    targetPath: "/bike-accessories/zpro/bike/kawasaki/z900/69bea3ebc222d7fdd0662a8a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-paddock-spools-with-swing-arm-protector-silver-ktm-duke-250390",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-250-390-2019-2022/69bea3ebc222d7fdd0662a8d"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/backrest-re-continental-gt-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/ssc/side-stand-extender-honda-cb-350-2025",
    targetPath: "/bike-accessories/zana/bike/honda/cb-350-2025/69bea3ebc222d7fdd0662a80"
  },
  {
    type: "bike",
    sourcePath: "/zpro/sc/kawasaki-z900-accessories",
    targetPath: "/bike-accessories/zpro/bike/kawasaki/z900/69bea3ebc222d7fdd0662a8a"
  },
  {
    type: "bike",
    sourcePath: "/zpro/product/side-stand-extender-for-triumph-tiger-900-gt",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-gt/69bea3ebc222d7fdd0662aad"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-aluminium-silver-35ltr-l-flat-for-classic-350-reborn",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "bike",
    sourcePath: "/zpro/product/roadster-2-saddle-bag-50ltr-pair-bag-25ltr-each-for-bmw-f900-gs",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs/69bea3ebc222d7fdd0662a78"
  },
  {
    type: "bike",
    sourcePath: "/zpro/product/top-rack-with-plate-for-bmw-f-900-gs-black",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs/69bea3ebc222d7fdd0662a78"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-kawasaki-versys-650-45ltr-black-aluminium",
    targetPath: "/bike-accessories/zana/bike/kawasaki/versys-650/69bea3ebc222d7fdd0662a88"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/pillion-backrest-for-scram-411-bs6-2022",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/scram-411/69bea3ebc222d7fdd0662a66"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/new-top-rack-with-aluminium-plate-and-compatible-with-pillion-backrest-for-gt-interceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/universal-paddock-stand-classic-42-glossy-red-color",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "product",
    sourcePath: "/index.php/all-reviews/universal-paddock-stand-v-2-black",
    targetPath: "/product/paddock-stand/zana-universal-paddock-stand/69e279ad5685096a33ad9660"
  },
  {
    type: "bike",
    sourcePath: "/index.php/product/bash-plate-for-honda-cb350-rs-aluminum-black",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-rs/69bea3ebc222d7fdd0662a7d"
  },
  {
    type: "bike",
    sourcePath: "/zpro/ssc/bmw-f900gsa-adventure-saddle-stay",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-bear-650-engine-guard",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/mirror-extender-bmw-f-900-gs-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/ssc/gel-seat-cushion-scram-411",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/scram-411/69bea3ebc222d7fdd0662a66"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-with-ms-plate-orange-for-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/ssc/panniers-bmw-f-900-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/crash-guard-bmw-f-900-xr",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-xr/69bea3ebc222d7fdd0662a75"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/side-stand-extender-vmc-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/top-box-aluminium-45ltr-lflat-black-for-ducati-scrambler",
    targetPath: "/bike-accessories/zpro/bike/ducati/scrambler/69bea3ebc222d7fdd0662a9c"
  },
  {
    type: "bike",
    sourcePath: "/ssc/gel-seat-cushion-speed 400",
    targetPath: "/bike-accessories/zana/bike/triumph/speed-400/69bea3ebc222d7fdd0662aa8"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/maximus-tail-bag-36-litre-single-super-meteor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/frame-slider-suzuki-hayabusa-1300-black-type-3",
    targetPath: "/bike-accessories/zpro/bike/suzuki/hayabusa-1300/69bea3ebc222d7fdd0662aa1"
  },
  {
    type: "product",
    sourcePath: "/ssc/universal-accessories-top-box-plastic-45ltr-l-flat-black",
    targetPath: "/product/aluminium-box/zana-universal-top-box-aluminium-black-r-flat-with-back-rest-cushion/69e279d95685096a33ad97d3"
  },
  {
    type: "bike",
    sourcePath: "/ssc/kawasaki-versys-650-radiator-grill",
    targetPath: "/bike-accessories/zana/bike/kawasaki/versys-650/69bea3ebc222d7fdd0662a88"
  },
  {
    type: "bike",
    sourcePath: "/ssc/bmw-f900gs-saddle-stay",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/saddle-stays-mild-steel-with-exhaust-sheild-with-jerry-can-mounting-texture-matt-black-for-himalayan201622",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/product/panniers-36-ltr-aluminium-lflat-black-with-frame-for-suzuki-vstrom-250",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-paddock-spools-for-ktm-duke-390250200390-gen-3",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/ssc/gel-seat-cushion-pulsar-ns400z",
    targetPath: "/bike-accessories/zana/bike/bajaj/pulsar-ns400z/69bea3ebc222d7fdd0662a71"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/radiator-guard-for-triumph-street-triple-765",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-triple-765/69bea3ebc222d7fdd0662aaa"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/saddle-bag-scram-411",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/scram-411/69bea3ebc222d7fdd0662a66"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/lower-engine-guard-black-bmw-f-850-gs",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-850-gs/69bea3ebc222d7fdd0662a74"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-himalayan-bs6-2021-2022-new-handle-riser",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/zpro/ssc/crash-guard-tiger-900-gt",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-gt/69bea3ebc222d7fdd0662aad"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/panniers-36ltr-with-frame-aluminium-l-flat-silver-for-bmw-r-1300-gs",
    targetPath: "/bike-accessories/zpro/bike/bmw/r-1300-gs/69bea3ebc222d7fdd0662a79"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/universal-mobile-holder-with-usb-charger-for-ktm-duke-390-250-200-390-gen-3",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/mirror-extender-for-shotgun-650-black-aluminum",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/shotgun-650/69bea3ebc222d7fdd0662a6b"
  },
  {
    type: "bike",
    sourcePath: "/ssc/honda-cb350-crash-guard",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/product/upper-lower-crash-guard-with-slider-combo-silver-for-tvs-apache-rtx-300-beak-version",
    targetPath: "/bike-accessories/zana/bike/tvs/apache-rtx-300-beak-version/69bea3ebc222d7fdd0662a96"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-aluminium-re-bear-650-35litre-lflat-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "bike",
    sourcePath: "/ssc/honda-cb200x-tank-bag",
    targetPath: "/bike-accessories/zana/bike/honda/cb200x/69bea3ebc222d7fdd0662a7f"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/universal-led-fog-light-zfl20",
    targetPath: "/product/fog-lights/zana-universal-led-fog-light/6a143d35dacf4bb0c25c707a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-footrest-for-gt-interceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/radiator-guard-honeycomb-black-full-aluminum-himalayan-bs346",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/ssc/hero-xpulse-200-crash-guard",
    targetPath: "/bike-accessories/zana/bike/hero/xpulse-200/69bea3ebc222d7fdd0662a83"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-footrest-re-himalayan-450",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/rear-paddock-spool-for-triumph-street-scrambler",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-scrambler-900/69bea3ebc222d7fdd0662aa3"
  },
  {
    type: "bike",
    sourcePath: "/ssc/tail-bag-tvs-apache-rtx-300",
    targetPath: "/bike-accessories/zana/bike/tvs/apache-rtx-300/69bea3ebc222d7fdd0662a97"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/tripper-tank-bag-80-litre-for-ktm-duke-250-gen3",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/mudguard-riser-gtinterceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/engine-guard-re-bear-650-with-slider-puck-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/universal-mobile-holder-with-usb-charger-rex",
    targetPath: "/product/with-usb-charger/zana-universal-mobile-holder-with-usb-charger-rex/69e279ad5685096a33ad96b7"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/top-box-aluminium-black-45ltr-bmw-f-900-xr",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-xr/69bea3ebc222d7fdd0662a75"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/tapered-exhaust-compatible-panniers-with-frame-aluminium-46ltr-set-for-bmw-f-900-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/bash-plate-black-for-triumph-scrambler-400-x",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/tripper-tank-bag-80-litre",
    targetPath: "/product/tank-bag/zana-tripper-tank-bag/69e279ad5685096a33ad9566"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-with-slider-texture-matt-black-cb350-rs",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-rs/69bea3ebc222d7fdd0662a7d"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/side-stand-extender-bmw-g-310gs-aluminum",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/ssc/saddle-stay-meteor-350",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/meteor-350/69bea3ebc222d7fdd0662a69"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/pluto-tail-bag-tank-bag-suzuki-vstrom-250",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-footrest-pair-guerrilla-450",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/crash-guard-with-slider-black-for-triumph-scrambler-400-x",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/panniers-36-ltr-aluminium-rflat-black-with-frame-for-suzuki-vstrom-250",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/ssc/himalayan-450-handlebar-riser",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/sc/hero-x-pulse-210-cc-accessories",
    targetPath: "/bike-accessories/zana/bike/hero/x-pulse-210/69bea3ebc222d7fdd0662a84"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/hand-guard-for-black-himalayan-450",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/ssc/triumph-tiger850-bash-plate",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-850/69bea3ebc222d7fdd0662aa4"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/toprack-ms-w1-compatible-with-pillion-backrest-himalayan-bs6-201620",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/product/leg-guard-with-slider-himalayan-silver-bs62021-22",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/new-uk-flag-radiator-grill-silver-with-black-gt-interceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/top-box-triumph-tiger900-rally-pro-45ltr-aluminium",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/offset-handle-bar-riser-for-cb300f",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/front-fork-slider-for-triumph-speed-twin-900",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-900/69bea3ebc222d7fdd0662aa6"
  },
  {
    type: "bike",
    sourcePath: "/zpro/sc/triumph-tiger-900-rally-pro-accessories",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-fluid-reservoir-cover-guerrilla-450-black-texture",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/ssc/triumph-tiger900-bash-plate",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/engine-guard-for-triumph-speed-twin",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-900/69bea3ebc222d7fdd0662aa6"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/side-stand-extender-for-ktm-adv-390250",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/bash-plate-aluminum-silver-for-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/sc/tvs-apache-rtx-300cc-accessories",
    targetPath: "/bike-accessories/zana/bike/tvs/apache-rtx-300/69bea3ebc222d7fdd0662a97"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-triumph-speed-400-35lt-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/triumph/speed-400/69bea3ebc222d7fdd0662aa8"
  },
  {
    type: "bike",
    sourcePath: "/ssc/tank-bag-tvs-apache-rtx-300",
    targetPath: "/bike-accessories/zana/bike/tvs/apache-rtx-300/69bea3ebc222d7fdd0662a97"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/handle-bar-riser-for-harley-davidson-x440",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/side-stand-extender-for-triumph-tiger-660",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-660/69bea3ebc222d7fdd0662aac"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/front-number-plate-relocator-dominar-250400-201922",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-with-slider-glossy-white-for-xpulse-210",
    targetPath: "/bike-accessories/zana/bike/hero/x-pulse-210/69bea3ebc222d7fdd0662a84"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/upper-fairing-guard-honda-nx500-silver-mild-steel",
    targetPath: "/bike-accessories/zana/bike/honda/nx500/69bea3ebc222d7fdd0662a81"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/ssc/frame-slider-ducati-diavel-1260",
    targetPath: "/bike-accessories/zpro/bike/ducati/diavel-1260/69bea3ebc222d7fdd0662a9d"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/bash-plate-ktm-adventure-250-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/front-fluid-reservoir-cover-for-harley-davidson-x440",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-suzuki-vstrom-250-22ltr-aluminium-silver",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-aluminium-silver-22ltr-bmw-310-gs",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/ktm-adventure-250390-combo-offer--crash-guard-front-brake-reservoir",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/ssc/suzuki-v-strom-sx-250-top-rack",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/yezdi-adventure-top-rack-plate-black-type-1",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-adventure-2025/69bea3ebc222d7fdd0662ab0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/pluto-tail-bag-tank-bag-kawasaki-versys-650",
    targetPath: "/bike-accessories/zana/bike/kawasaki/versys-650/69bea3ebc222d7fdd0662a88"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/head-light-grill-black-for-triumph-speed-400",
    targetPath: "/bike-accessories/zana/bike/triumph/speed-400/69bea3ebc222d7fdd0662aa8"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/engine-frame-texture-matt-black-himalayan-bs346-20162020",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/front-fluid-reservoir-cover-for-harley-davidson-x440",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-for-harley-davidson-x440-with-mild-steel-plate",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-suzuki-vstrom-250-45ltr-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/front-fork-slider-for-aprilia-tuono-457-black",
    targetPath: "/bike-accessories/zana/bike/aprilia/aprilia-tuono-457/69bea3ebc222d7fdd0662a98"
  },
  {
    type: "product",
    sourcePath: "/index.php/all-reviews/top-box-aluminium-45-litre-lflat-sliver",
    targetPath: "/product/aluminium-box/zana-universal-top-box-aluminium-black-r-flat-with-back-rest-cushion/69e279d95685096a33ad97d3"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/vader-hard-shell-tail-bag-65-litre-kawasaki-versys-650",
    targetPath: "/bike-accessories/zana/bike/kawasaki/versys-650/69bea3ebc222d7fdd0662a88"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/pluto-tail-bag-tank-bag-triumph-speed-400",
    targetPath: "/bike-accessories/zana/bike/triumph/speed-400/69bea3ebc222d7fdd0662aa8"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/radiator-guard-re-bear-650-black-uk-flag",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/tripper-tank-bag-80-litre-super-meteor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-w-1-with-plate-with-backrest-for-classic-350500",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/pluto-tail-bag-tank-bag-kawasaki-versys-650",
    targetPath: "/bike-accessories/zana/bike/kawasaki/versys-650/69bea3ebc222d7fdd0662a88"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/pull-back-angular-handle-bar-riser-texture-matt-black-for-gtinterceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/top-box-aluminium-silver-45ltr-lflat-bmw-f-900-xr",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-xr/69bea3ebc222d7fdd0662a75"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/drake-universal-fabric-saddle-bag-32-litre-single-64-litre-pair-bag-for-bmw-310-gs",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/head-light-grill-continental-gt-interceptor-650-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/head-light-grill-hexagonal-black-stainless-steel-ktm-adventure-390",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/universal-top-box-aluminium-22-litre-rflat-black",
    targetPath: "/product/aluminium-box/zana-universal-top-box-aluminium-r-flat-black/69e279d95685096a33ad97df"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/z-pro-universal-slider-puck",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-footrest-pair-ms-re-bear-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-re-classic-500-steel",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/maximus-tail-bag-36-litre-single-for-bmw-310-gs",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/crash-guard-with-slider-for-harley-davidson-x440-black-colour",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/front-fluid-reservoir-cover-aluminum-for-super-meteor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-master-cylinder-cover-black-for-aprilia-rs-457",
    targetPath: "/bike-accessories/zana/bike/aprilia/aprilia-rs457/69bea3ebc222d7fdd0662a99"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/maximus-tail-bag-36-litre-single-triumph-speed-400",
    targetPath: "/bike-accessories/zana/bike/triumph/speed-400/69bea3ebc222d7fdd0662aa8"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/universal-led-fog-light-zfl35",
    targetPath: "/product/fog-lights/zana-universal-led-fog-light/69e279ad5685096a33ad9612"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/toprack-t1-with-aluminium-plate-compatible-with-pillion-backrest-himalayan-bs6-2021",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/pluto-tail-bag-tank-bag-triumph-scrambler-400",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-aluminium-silver-55ltr-for-bmw-310-gs",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/front-fluid-reservoir-cover-black-for-aprilia-rs-457",
    targetPath: "/bike-accessories/zana/bike/aprilia/aprilia-rs457/69bea3ebc222d7fdd0662a99"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/side-stand-extender-rally-pro-aluminium-stainless-steel",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-with-plate-new-honda-cb300f-w1",
    targetPath: "/bike-accessories/zana/bike/honda/cb300f/69bea3ebc222d7fdd0662a7e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/yezdi-adventure-leg-guard-with-slider-black-lower",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-adventure/69bea3ebc222d7fdd0662aae"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/master-cylinder-cover-for-yezdi-adventure-2025-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-adventure-2025/69bea3ebc222d7fdd0662ab0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-with-slider-texture-matt-black-cb350",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/lower-engine-guard-sliver-for-triumph-tiger-850",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-850/69bea3ebc222d7fdd0662aa4"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-triumph-scrambler-400x-aluminum-plate-black",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/heat-sink-guard-oil-cooler-guard-ducati-scrambler",
    targetPath: "/bike-accessories/zpro/bike/ducati/scrambler/69bea3ebc222d7fdd0662a9c"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/yezdi-head-light-grill-ms-black",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-scrambler/69bea3ebc222d7fdd0662aaf"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/lower-engine-guard-honda-nx500-silver-mild-steel",
    targetPath: "/bike-accessories/zana/bike/honda/nx500/69bea3ebc222d7fdd0662a81"
  },
  {
    type: "bike",
    sourcePath: "/zpro/ssc/radiator-grill-gs-310g",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/top-box-aluminium-black-45ltr-l-flat-with-back-rest-cushion-for-bmw-r-1300-gs",
    targetPath: "/bike-accessories/zpro/bike/bmw/r-1300-gs/69bea3ebc222d7fdd0662a79"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-with-double-slider-type1-black-for-tvs-apache-rtr-160180200",
    targetPath: "/bike-accessories/zana/bike/tvs/apache-rtx-300/69bea3ebc222d7fdd0662a97"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/paddock-stand-triumph-speed-twin-1200",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-1200/69bea3ebc222d7fdd0662aab"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-plastic-55-litre-lflat-black-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/universal-led-fog-light-zfl15",
    targetPath: "/bike-accessories/zana/bike/yamaha/mt-15/69bea3ebc222d7fdd0662ab1"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/paddock-stand-xpulse-200-glossy-red-color",
    targetPath: "/bike-accessories/zana/bike/hero/xpulse-200/69bea3ebc222d7fdd0662a83"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/vader-hard-shell-tail-bag-65-litre-honda-cb200x",
    targetPath: "/bike-accessories/zana/bike/honda/cb200x/69bea3ebc222d7fdd0662a7f"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-footrest-for-harley-davidson-x440",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/universal-top-box-aluminium-45ltr-lflat-black",
    targetPath: "/product/aluminium-box/zana-universal-top-box-aluminium-black-r-flat-with-back-rest-cushion/69e279d95685096a33ad97d3"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/bashplate-ktm-adventure-250-aluminium-black-new",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/side-mirror-extender-bmw-f850-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-850-gs-adventure/69bea3ebc222d7fdd0662a76"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/leg-guard-ms-with-slider-himalayan-bs6202123-red",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/front-fork-sliders-adventure-250390-390-x",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/front-fork-slider-trident-660",
    targetPath: "/bike-accessories/zpro/bike/triumph/trident-660/69bea3ebc222d7fdd0662aa5"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-with-plate-for-yamaha-mt-15",
    targetPath: "/bike-accessories/zana/bike/yamaha/mt-15/69bea3ebc222d7fdd0662ab1"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-aluminium-re-bear-650-45l-rflat-silver",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-kawasaki-versys-650-45ltr-black-aluminium",
    targetPath: "/bike-accessories/zana/bike/kawasaki/versys-650/69bea3ebc222d7fdd0662a88"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/radiator-guard-honeycomb-silver-for-honda-nx500-aluminium",
    targetPath: "/bike-accessories/zana/bike/honda/nx500/69bea3ebc222d7fdd0662a81"
  },
  {
    type: "bike",
    sourcePath: "/zpro/ssc/triumph-street-twin-radiator-guard",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-twin/69bea3ebc222d7fdd0662aa2"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/vertical-handle-riser-aluminum-suzuki-vstrom-250",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/vader-hard-shell-tail-bag-65-litre-honda-cb200x",
    targetPath: "/bike-accessories/zana/bike/honda/cb200x/69bea3ebc222d7fdd0662a7f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/engine-frame-slider-assy-trident-660",
    targetPath: "/bike-accessories/zpro/bike/triumph/trident-660/69bea3ebc222d7fdd0662aa5"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/top-box-aluminium-silver-45ltr-l-flat-with-back-rest-cushion-for-bmw-r-1300-gs",
    targetPath: "/bike-accessories/zpro/bike/bmw/r-1300-gs/69bea3ebc222d7fdd0662a79"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-suzuki-vstrom-250-45ltr-silver-aluminium",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/ssc/radiator-guard-tiger-900-gt",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-gt/69bea3ebc222d7fdd0662aad"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/paddock-stand-suzuki-hayabusa-1300-black",
    targetPath: "/bike-accessories/zpro/bike/suzuki/hayabusa-1300/69bea3ebc222d7fdd0662aa1"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/drake-saddle-stay-texture-black-for-triumph-scrambler-400-x",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/top-box-aluminium-silver-45ltr-lflat-bmw-850-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-850-gs-adventure/69bea3ebc222d7fdd0662a76"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/fog-light-mount-ms-for-scram-411-bs6-2022",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/scram-411/69bea3ebc222d7fdd0662a66"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/headlight-grill-ss-type-0-black-himalayan-bs6-2021",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/top-box--",
    targetPath: "/product/aluminium-box/zana-universal-top-box-aluminium-silver-l-flat-with-back-rest-cushion/69e279d95685096a33ad97d2"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/universal-slider-puck-for-triumph-speed-400-compatible-with-oem-crash-guard",
    targetPath: "/bike-accessories/zana/bike/triumph/speed-400/69bea3ebc222d7fdd0662aa8"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/drake-universal-fabric-saddle-bag-32-litre-single-bag",
    targetPath: "/product/saddle-bag/zana-drake-universal-fabric-saddle-bag/69e279ad5685096a33ad956a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/mobile-holder-without-charger-bmw-f900-gs-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-t1-texture-matt-black-duke-250390-201718",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/heat-sink-guard-oil-cooler-guard-ducati-scrambler",
    targetPath: "/bike-accessories/zpro/bike/ducati/scrambler/69bea3ebc222d7fdd0662a9c"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/universal-led-fog-light-drl-r40",
    targetPath: "/product/fog-lights/zana-universal-led-fog-light/69e279ae5685096a33ad96bb"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/stratos-tank-bag-6l-expandable-to-9l-for-bmw-310-gs",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-re-bear-650-compatible-with-pillion-backrest",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/roadster-saddle-bag-re-bear-650-30l-single-60l-pair",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/universal-top-box-aluminium-35-ltr-lflat-silver",
    targetPath: "/product/aluminium-box/zana-universal-top-box-aluminium-silver-l-flat-with-back-rest-cushion/69e279d95685096a33ad97d2"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/rear-footrest-re-super-meteor650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "product",
    sourcePath: "/index.php/all-reviews/universal-gel-seat-cushion-small-495grm",
    targetPath: "/product/small/zana-universal-gel-seat-cushion-small/69e279ad5685096a33ad9600"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/saddle-bag-t1-small-for-scram-411",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/scram-411/69bea3ebc222d7fdd0662a66"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/saddle-bag-triumph-tiger-900-rally-pro",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/radiator-guard-re-scram-411-black-aluminum",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/scram-411/69bea3ebc222d7fdd0662a66"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/saddle-stay-duke-200-bs6-texture-matt-black-2019-2022",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-200-bs6-2021-22/69bea3ebc222d7fdd0662a90"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/top-box-aluminium-silver-55ltr-for-bmw-850-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-850-gs-adventure/69bea3ebc222d7fdd0662a76"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-re-classic-350-45ltr-black-aluminium",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/handle-bar-riser-ktm-adventure-250-aluminium-pull-back-angular",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/product/handle-weight-for-triumph-street-triple-765",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-triple-765/69bea3ebc222d7fdd0662aaa"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/sliders-pair-for-crash-guard-pulsar-ns400z",
    targetPath: "/bike-accessories/zana/bike/bajaj/pulsar-ns400z/69bea3ebc222d7fdd0662a71"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-aluminium-45ltr-lflat-sliver-for-harley-davidson-x440",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/roadstar-saddle-bag-30-litre-single-60-litre-pair-bag-kawasaki-versys-650",
    targetPath: "/bike-accessories/zana/bike/kawasaki/versys-650/69bea3ebc222d7fdd0662a88"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/crash-guard-triumph-scrambler-400x-black",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-ktm-adventure-250-35ltr-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/front-fluid-reservoir-cover-for-yezdi-adventure-2025",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-adventure-2025/69bea3ebc222d7fdd0662ab0"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-ktm-adventure-250-45ltr-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/ssc/ktm-adventure-250-390-fluid-reservoir-cover",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/mudguard-riser-himalayan-bs6-2021",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/roadstar-saddle-bag-30-litre-single-60-litre-pair-bag-for-ktm-adventure-250",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/bmw-g310-gs-aluminium-heavy-duty-sump-guard-silver",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/radiator-guard-continental-gt650-uk-flag-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/clipon-riser-continental-gt650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-with-new-plate-compatible-with-pillion-backrest-kustom-silver-dominar-20192022",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/front-fluid-reservoir-cover-duke-250390-aluminium",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-250-390-2019-2022/69bea3ebc222d7fdd0662a8d"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-re-bear-650-compatible-with-pillion-backrest",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/front-fluid-reservoir-cover-for-honda-nx500-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/honda/nx500/69bea3ebc222d7fdd0662a81"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-aluminium-bmw-f900-gs-gsa-45ltr-l-flat-silver",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/panniers-36-ltr-aluminium-rflat-silver-with-frame-for-triumph-tiger-900-rally-pro",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/rear-fluid-reservoir-cover-for-cb-300f",
    targetPath: "/bike-accessories/zana/bike/honda/cb300f/69bea3ebc222d7fdd0662a7e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/sliders-pair-crash-guard-dominar-250-400",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/bash-plate-black-for-cb350-hness",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/radiator-grill-honeycomb-black-for-triumph-street-twin",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-twin/69bea3ebc222d7fdd0662aa2"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/mobile-holder-without-charger-bmw-f900-gs-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/radiator-guard-continental-gt650-honeycomb-aluminum-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/roadster-saddle-stay-for-harley-davidson-x440-with-exhaust-sheild-and-jerry-can-mount",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-suzuki-vstrom-250-55ltr-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/paddock-stand-suzuki-hayabusa-1300-red",
    targetPath: "/bike-accessories/zpro/bike/suzuki/hayabusa-1300/69bea3ebc222d7fdd0662aa1"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/side-stand-extender-aluminum--stainlesssteel-for-suzuki-vstrom-250",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/ssc/triumph-street-triple-765-side-stand-extender",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-triple-765/69bea3ebc222d7fdd0662aaa"
  },
  {
    type: "product",
    sourcePath: "/index.php/all-reviews/universal-top-box-aluminium-22-litre-rflat-black",
    targetPath: "/product/aluminium-box/zana-universal-top-box-aluminium-r-flat-black/69e279d95685096a33ad97df"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/sticker-top-box-aluminium-bmw-f900-gs-gsa-45ltr-l-flat-black",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/universal-paddock-stand-red-for-suzuki-vstrom-250",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/handlebar-riser-for-super-meteor-650-vertical-aluminum",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "product",
    sourcePath: "/index.php/all-reviews/universal-top-box-aluminium-35-ltr-rflat-silver",
    targetPath: "/product/aluminium-box/zana-universal-top-box-aluminium-silver-l-flat-with-back-rest-cushion/69e279d95685096a33ad97d2"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-re-super-meteor-650-ms-with-pillion-backrest",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-aluminium-re-bear-650-22l-lflat-silver",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/honda-cb300r-new-pillion-backrest-cushion-big",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/universal-mobile-holder-with-usb-charger-for-ktm-duke-390-250-200-390-gen-3",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-aluminium-45ltr-rflat-sliver-for-honda-nx500",
    targetPath: "/bike-accessories/zana/bike/honda/nx500/69bea3ebc222d7fdd0662a81"
  },
  {
    type: "bike",
    sourcePath: "/product/top-rack-with-ms-plate--for-ktm-duke-390250200390-gen-3",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/hand-guard-for-tiger-900-rally-pro-white",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/zpro/ssc/mirror-extender-bmw-f-900-xr",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-xr/69bea3ebc222d7fdd0662a75"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/top-rack-black-for-ducati-scrambler",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/side-stand-extender-aluminum-stainless-steel-for-gt-interceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/sliders-pair-crash-guard-ktm-duke-250-390",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/frame-sliders-ktm-rc-200390",
    targetPath: "/bike-accessories/zana/bike/ktm/rc-200-390/69bea3ebc222d7fdd0662a8f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/radiator-guard-honda-nx500-honeycomb-black",
    targetPath: "/bike-accessories/zana/bike/honda/nx500/69bea3ebc222d7fdd0662a81"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/mirror-extender-for-honda-cb350",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-bajaj-dominar-250-22ltr-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/lower-engine-guard-bmw-310-gs-slider-silver-stainless-steel",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/pluto-tail-bag-tank-bag-bmw-f900-gs-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/front-fork-slider-for-himalayan-452",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-bsa-goldstar-650-aluminium-45l-rflat-black",
    targetPath: "/bike-accessories/zana/bike/bsa/goldstar-650/69bea3ebc222d7fdd0662a9a"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/panniers-for-himalayan-450-36ltr-aluminium-silver-with-frame",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/crash-guard-texture-matt-black-ktm-250390-201718",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/mirror-extender-for-honda-rebel-500",
    targetPath: "/bike-accessories/zana/bike/honda/rebel-500/69bea3ebc222d7fdd0662a82"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/saddle-stay-ktm-adventure-250-silver",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/quickshifter-guard-for-bmw-f850-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-850-gs-adventure/69bea3ebc222d7fdd0662a76"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/front-fluid-reservoir-oil-cover-for-honda-cb-350-aluminium",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-bsa-goldstar-650-aluminium-22litre-lflat-black",
    targetPath: "/bike-accessories/zana/bike/bsa/goldstar-650/69bea3ebc222d7fdd0662a9a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/uk-flag-black-bash-plate-for-gt-interceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-aluminium-35-ltr-r-flat-silver-with-back-rest-cushion-for-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/vader-hard-shell-tail-bag-65litre-re-bear-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-with-plate-ms-for-himalayan-452",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/radiator-guard-honeycomb-silver-full-himalayan-bs346",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/zpro/sc/royal-enfield-himalayan-bs6-2021-accessories",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/side-stand-extender-re-hunter-350-aluminum-stainless-steel",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/hunter-350/69bea3ebc222d7fdd0662a67"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/saddle-stay-with-jerry-can-mount-dominar-250400-201922",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-aluminium-bmw-f900-gs-gsa-45ltr-r-flat-black",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/saddle-stays-pannier-rack-for-soft-bags-honda-cb350-hness-version2",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-ktm-adventure-250-texture-matt-black",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/saddle-stay-black-texture-matt-black-ktm-adv-250-390-390-x",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-250-390-2019-2022/69bea3ebc222d7fdd0662a8d"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-suzuki-vstrom-250-55ltr-aluminium-silver",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/broozer-tail-bag-50-litre-for-suzuki-v-strom-250",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/roadster-saddle-bag-30-litre-single-60-litre-pair-bag",
    targetPath: "/product/saddle-bag/zana-roadster-saddle-bag-30-litre-single-bag/69e279ad5685096a33ad958f"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/grab-rail-triumph-speed-twin-1200",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-1200/69bea3ebc222d7fdd0662aab"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/engine-frame-himalayan-bs-346-2022-silver",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/top-box-triumph-trident-660-22ltr-aluminium-black",
    targetPath: "/bike-accessories/zpro/bike/triumph/trident-660/69bea3ebc222d7fdd0662aa5"
  },
  {
    type: "product",
    sourcePath: "/index.php/all-reviews/broozer-tail-bag-50-litre",
    targetPath: "/product/tail-bag/zana-broozer-tail-bag-with-free-2-waterproof-storage-bag/69e279ad5685096a33ad9565"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-bsa-goldstar-650-aluminium-35litre-lflat-black",
    targetPath: "/bike-accessories/zana/bike/bsa/goldstar-650/69bea3ebc222d7fdd0662a9a"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/honda-nx500-number-plate-mount",
    targetPath: "/bike-accessories/zana/bike/honda/nx500/69bea3ebc222d7fdd0662a81"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/honda-cb-300r-bash-plate-aluminium",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/stratos-tank-bag-6l-expandable-to-9l-for-bear-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/bash-plate-for-triumph-tiger-900-rally-pro-silver",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/broozer-tail-bag-50-litre-triumph-scrambler-400",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/side-stand-extender-triumph-tiger850-aluminum-stainless-steel",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-850/69bea3ebc222d7fdd0662aa4"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/maximus-tail-bag-36-litre-single-triumph-scrambler-400",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-aluminium-bmw-f900-gs-gsa-55ltr-l-flat-black",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/gt-interceptor-650-combo-offer--crashguard-with-slider-saddle-stay-uk-flag-radiator-grillblack",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/trident-universal-paddock-spool-ss-304",
    targetPath: "/bike-accessories/zpro/bike/triumph/trident-660/69bea3ebc222d7fdd0662aa5"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/tank-guard-for-triumph-street-scrambler-900",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-scrambler-900/69bea3ebc222d7fdd0662aa3"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-suzuki-vstrom-250-45ltr-black-aluminium",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-aluminium-35-ltr-l-flat-silver-with-back-rest-cushion-for-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-with-slider-texture-matt-black-for-x-pulse-210",
    targetPath: "/bike-accessories/zana/bike/hero/x-pulse-210/69bea3ebc222d7fdd0662a84"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-aluminium-22-litre-r-flat-black-for-honda-rebel-500",
    targetPath: "/bike-accessories/zana/bike/honda/rebel-500/69bea3ebc222d7fdd0662a82"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/overlander-saddle-bag-ktm-adventure-250",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-re-meteor-350-35ltr-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/meteor-350/69bea3ebc222d7fdd0662a69"
  },
  {
    type: "product",
    sourcePath: "/index.php/all-reviews/universal-bungee-cord-medium-80-cm",
    targetPath: "/product/medium/zana-universal-medium-bungee-cord/69e279ad5685096a33ad9661"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/front-fork-slider-for-ducati-scrambler",
    targetPath: "/bike-accessories/zpro/bike/ducati/scrambler/69bea3ebc222d7fdd0662a9c"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/guerrilla450-top-box-plastic-45-litre-lflat-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/maximus-tail-bag-triumph-tiger-900-rally-pro-36-litre-single-bag",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-bsa-goldstar-650-with-pillion-backrest-steel-black-type2",
    targetPath: "/bike-accessories/zana/bike/bsa/goldstar-650/69bea3ebc222d7fdd0662a9a"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/upper-fairing-guard-triumph-tiger850-silver",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-850/69bea3ebc222d7fdd0662aa4"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/yezdi-adventure-radiator-grill-honeycomb-silver",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-adventure/69bea3ebc222d7fdd0662aae"
  },
  {
    type: "product",
    sourcePath: "/index.php/all-reviews/universal-top-box-aluminium-35-ltr-lflat-silver",
    targetPath: "/product/aluminium-box/zana-universal-top-box-aluminium-silver-l-flat-with-back-rest-cushion/69e279d95685096a33ad97d2"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/sliders-pair-crash-guard-guerrilla-450",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/zpro/sc/royal-enfield-himalayan-411-accessories",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/top-box-plastic-45ltr-black-for-ktm-adv-250390390-x",
    targetPath: "/product/abs-box/zana-universal-top-box-plastic-black-with-back-rest-cushion/69e279d95685096a33ad97ce"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/side-stand-extender-aluminum-stainless-steel-for-gt-interceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/headlight-grill-continental-gt650-type-2-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/vader-hard-shell-tail-bag-65-litre-harley-davidson-x440",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/radiator-guard-super-meteor-650-black-uk-flag",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-aluminium-55-ltr-black-for-honda-nx500",
    targetPath: "/bike-accessories/zana/bike/honda/nx500/69bea3ebc222d7fdd0662a81"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/paddock-stand-mild-steel-for-scram-411-texture-matt-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/scram-411/69bea3ebc222d7fdd0662a66"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/radiator-guard-honeycomb-black-for-honda-rebel-500",
    targetPath: "/bike-accessories/zana/bike/honda/rebel-500/69bea3ebc222d7fdd0662a82"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/radiator-guard-honeycomb-silver-2-mm-alu-set-for-triumph-tiger-900-rally-pro",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/adventure-saddle-bag-for-classic-350-reborn",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/top-box-triumph-tiger850-55ltr-aluminium-silver",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-850/69bea3ebc222d7fdd0662aa4"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-plastic-45ltr-black-for-super-meteor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/pluto-tail-bag-tank-bag-for-harley-davidson-x440",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/maximus-tail-bag-36litre-single-re-shotgun-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/shotgun-650/69bea3ebc222d7fdd0662a6b"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-plastic-45-ltr-l-flat-black-with-back-rest-cushion-for-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-kawasaki-versys-650-45ltr-aluminium-silver",
    targetPath: "/bike-accessories/zana/bike/kawasaki/versys-650/69bea3ebc222d7fdd0662a88"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/roadster-saddle-stay-for-himalayan-450-with-jerry-can-mount-v2-mild-steel",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/head-light-grill-type2-black-ss-himalayan-bs6-2021",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/headlight-grill-continental-gt-650-black-type-4",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/top-rack-plate-small-for-triumph-street-scrambler-900",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-scrambler-900/69bea3ebc222d7fdd0662aa3"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-aluminium-black-35ltr-for-ktm-duke-250390-gen3",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/vader-hard-shell-tail-bag-65-litre-suzuki-v-strom-250",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/radiator-guard-triumph-speed-twin-1200-uk-flag-black",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-1200/69bea3ebc222d7fdd0662aab"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/universal-stratos-tank-bag-6l-expandable-to-9l-for-hayabusa-1300",
    targetPath: "/bike-accessories/zpro/bike/suzuki/hayabusa-1300/69bea3ebc222d7fdd0662aa1"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/paddock-stand-ninja-300-texture-matt-black",
    targetPath: "/bike-accessories/zana/bike/kawasaki/ninja-300/69bea3ebc222d7fdd0662a89"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/hand-guard-for-tiger-900-rally-pro-black",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-triumph-scrambler-400x-black",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/fog-light-mount-for-honda-cb300r",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/front-fluid-reservoir-cover-for-honda-nx500-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/honda/nx500/69bea3ebc222d7fdd0662a81"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/saddle-stay-duke-200-bs6-orange-202122",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-200-bs6-2021-22/69bea3ebc222d7fdd0662a90"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/tail-tidy-black-for-shotgun-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/shotgun-650/69bea3ebc222d7fdd0662a6b"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/saddle-stay-t-1-for-triumph-speed-twin-900-1200-cc",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-1200/69bea3ebc222d7fdd0662aab"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/vertical-handlebar-riser-texture-matt-black-for-himalayan-450",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/side-stand-extender-black-aluminium-for-ducati-scrambler",
    targetPath: "/bike-accessories/zpro/bike/ducati/scrambler/69bea3ebc222d7fdd0662a9c"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/pillion-backrest-for-suzuki-vstrom-250",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/headlight-grill-continental-gt-interceptor-650-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/gps-mount-texture-matt-black-himalayan-20162020",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/tripper-tank-bag-80-litre-harley-davidson-x440",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-bmw-310gs-45ltr-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-bmw-310gs-aluminium-black-45ltr",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-suzuki-vstrom-250-55ltr-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-plastic-45ltr-black-for-bmw-310gs",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/rear-footrest-for-shotgun-650-black-mild-steel",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/shotgun-650/69bea3ebc222d7fdd0662a6b"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-footrest-for-shotgun-650-black-mild-steel",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/shotgun-650/69bea3ebc222d7fdd0662a6b"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/vertical-handlebar-riser-for-kawasaki-versys-650",
    targetPath: "/bike-accessories/zana/bike/kawasaki/versys-650/69bea3ebc222d7fdd0662a88"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/universal-stratos-tank-bag-6l-expandable-to-9l",
    targetPath: "/product/tank-bag/zana-universal-stratos-tank-bag/69e279ae5685096a33ad96e3"
  },
  {
    type: "bike",
    sourcePath: "/zpro/ssc/mirror-extender-f-850-gs-adventure",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-850-gs-adventure/69bea3ebc222d7fdd0662a76"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/ktm-adv-390-2025-fog-light-mounting-kit",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/bash-plate-triumph-speed-twin-1200",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-1200/69bea3ebc222d7fdd0662aab"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-plastic-45ltr-black-for-cb300f",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/zpro/ssc/fluid-reservoir-cover-dominar-250-400-cc",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/fog-light-mount-for-harley-davidson-x440",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/roadster-saddle-bag-30-litre-single-60-litre-pair-bag-honda-cb200x",
    targetPath: "/bike-accessories/zana/bike/honda/cb200x/69bea3ebc222d7fdd0662a7f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/crash-guard-cb300r-ws-bs6-20222024",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/top-box-aluminium-35ltr-lflat-black-for-ducati-scrambler",
    targetPath: "/bike-accessories/zpro/bike/ducati/scrambler/69bea3ebc222d7fdd0662a9c"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/saddle-bag-for-triumph-tiger-900-rally-pro",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/offset-handlebar-riser-for-bmw-r-1300-gs",
    targetPath: "/bike-accessories/zpro/bike/bmw/r-1300-gs/69bea3ebc222d7fdd0662a79"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/top-box-aluminium-silver-45ltr-r-flat-with-back-rest-cushion-for-bmw-r-1300-gs",
    targetPath: "/bike-accessories/zpro/bike/bmw/r-1300-gs/69bea3ebc222d7fdd0662a79"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-suzuki-vstrom-250-45ltr-plastic-black",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-yamaha-mt15-22ltr-aluminium-silver",
    targetPath: "/bike-accessories/zana/bike/yamaha/mt-15/69bea3ebc222d7fdd0662ab1"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-paddock-spool-black-for-triumph-tiger-660",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-660/69bea3ebc222d7fdd0662aac"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-super-meteor-650-aluminium-silver",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/yezdi-head-light-grill-ss-silver",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-scrambler/69bea3ebc222d7fdd0662aaf"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/paddock-stand-triumph-speed-twin-1200-v2-red",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-1200/69bea3ebc222d7fdd0662aab"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/bmw-g-310-gs-front-fork-slider",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/pluto-tail-bag-tank-bag-for-dominar-250-dominar-400",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/roadster-saddle-bag-30-litre-single-60-litre-pair-bag-rebel-500",
    targetPath: "/bike-accessories/zana/bike/honda/rebel-500/69bea3ebc222d7fdd0662a82"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/side-stand-extender-vmc-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/side-stand-extender-for-honda-cb200x",
    targetPath: "/bike-accessories/zana/bike/honda/cb200x/69bea3ebc222d7fdd0662a7f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/paddock-stand-yezdi-scrambler-glossy-red-color",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-scrambler/69bea3ebc222d7fdd0662aaf"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/engine-frame-mild-steel-red-himalayan-bs6-201620",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-master-cylinder-cover-re-himalayan-450-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/lower-engine-guard-for-honda-nx500",
    targetPath: "/bike-accessories/zana/bike/honda/nx500/69bea3ebc222d7fdd0662a81"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/vader-hard-shell-tail-bag-65-litre-super-meteor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/mirror-extender-bmw-f-900-gs-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/bash-plate-meteor-350-aluminum-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/meteor-350/69bea3ebc222d7fdd0662a69"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/pull-back-angular-handle-bar-riser-texture-matt-black-for-dominar-400250",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/drake-universal-fabric-saddle-bag-32-litre-single-64-litre-pair-bag-triumph-speed-400",
    targetPath: "/bike-accessories/zana/bike/triumph/speed-400/69bea3ebc222d7fdd0662aa8"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-aluminum-black-22ltr-for-bmw-310-gs",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-re-meteor-350-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/meteor-350/69bea3ebc222d7fdd0662a69"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/vader-hard-shell-tail-bag-65-litre-continental-gt-interceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "product",
    sourcePath: "/index.php/all-reviews/universal-paddock-stand-black",
    targetPath: "/product/paddock-stand/zana-universal-paddock-stand/69e279ad5685096a33ad9660"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-with-new-plate-type-1-2021-texture-matt-black-dominar-2019-2021",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/fog-light-mount-ms-for-meteor-350",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/meteor-350/69bea3ebc222d7fdd0662a69"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/paddock-spool-for-triumph-speed-twin-900",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-900/69bea3ebc222d7fdd0662aa6"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/rear-master-cylinder-protector-himalayan-411",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/top-rack-plate-big-for-triumph-street-scrambler-900",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-scrambler-900/69bea3ebc222d7fdd0662aa3"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-ktm-duke-250-with-plate-black",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-ktm-adventure-250-35ltr-aluminium-silver",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-triumph-scrambler400-45ltr-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/pillion-backrest-cushion-big-for-cb300f",
    targetPath: "/bike-accessories/zana/bike/honda/cb300f/69bea3ebc222d7fdd0662a7e"
  },
  {
    type: "product",
    sourcePath: "/index.php/all-reviews/universal-top-box-plastic-45-ltr-lflat-black",
    targetPath: "/product/abs-box/zana-universal-top-box-plastic-black-with-back-rest-cushion/69e279d95685096a33ad97ce"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/brat-mini-handle-bar-for-gtinterceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/crash-guard-with-slider-for-himalayan-bs34-20162019",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/paddock-stand-ktm-adventure-250-glossy-red",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/rear-axle-protector-bmw-f900-gs-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-harley-x440-45ltr-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/raditor-guard-kawasaki-z900-black",
    targetPath: "/bike-accessories/zpro/bike/kawasaki/z900/69bea3ebc222d7fdd0662a8a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/engine-frame-himalayan-bs-346-2016-2020-silver",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-2016-2020/69bea3ebc222d7fdd0662a64"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/paddock-stand-re-classic-350-steel-red",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/gt-interceptor-650-combo-offer-crash-guard-with-slider-saddle-stay-uk-flag-radiator-grill",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/panniers-36-ltr-aluminium-rflat-black-with-frame-for-ktm-adv-250390",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/side-stand-extender-hero-xpulse200",
    targetPath: "/bike-accessories/zana/bike/hero/xpulse-200/69bea3ebc222d7fdd0662a83"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/guerrilla450-top-box-aluminium-22-litre-lflat-silver",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/pillion-backrest-harley-davidson-x440",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-aluminium-35-ltr-r-flat-silver-with-back-rest-cushion-for-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/leg-guard-continental-gt650-mild-steel-texture-matt-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/rear-footrest-re-meteor-350-steel",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/meteor-350/69bea3ebc222d7fdd0662a69"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-classic-350-35ltr-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/universal-mobile-holder-without-charger-for-ktm-adventure-250-390-390-x",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-with-plate-t1-black-duke-200-bs6-202021",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-200-bs6-2021-22/69bea3ebc222d7fdd0662a90"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-aluminium-bmw-f900-gs-gsa-55ltr-l-flat-black",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/rear-paddock-spool-for-kawasaki-z900",
    targetPath: "/bike-accessories/zpro/bike/kawasaki/z900/69bea3ebc222d7fdd0662a8a"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/universal-bungee-cord-large-150-cm",
    targetPath: "/product/large/zana-universal-large-bungee-cord/69e279ad5685096a33ad9663"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/radiator-guard-ktm-adventure-250-texture-matt-black-aluminium",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/paddock-stand-duke-250390-20192022-texture-matt-black",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-125-2020-22/69bea3ebc222d7fdd0662a92"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/mirror-extender-re-meteor-350-aluminium",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/meteor-350/69bea3ebc222d7fdd0662a69"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-re-classic-350-45ltr-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/maximus-tail-bag-single-bsa-goldstar-650-36litre",
    targetPath: "/bike-accessories/zana/bike/bsa/goldstar-650/69bea3ebc222d7fdd0662a9a"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/handle-riser-for-re-bear-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-himalayan-bs6-2021-2022-saddle-stay",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/maximus-tail-bag-re-bear-650-36litre-single",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "bike",
    sourcePath: "/zpro/ssc/triumph-tiger900-mirror-extender",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/mirror-extender-bmw-r-1300-gs-adventure",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/drake-universal-fabric-saddle-bag-32-litre-single-64-litre-pair-bag-harley-davidson-x440",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/crash-guard-with-slider-black-for-yamaha-mt-15",
    targetPath: "/bike-accessories/zana/bike/yamaha/mt-15/69bea3ebc222d7fdd0662ab1"
  },
  {
    type: "product",
    sourcePath: "/index.php/all-reviews/paddock-stand-svartpilen-and-vitpilen-glossy-red-color",
    targetPath: "/product/paddock-stand/zana-universal-paddock-stand/69e279ad5685096a33ad9660"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-with-slider-kustom-silver-dominar-400-2017-2018",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-400-2017-2018/69bea3ebc222d7fdd0662a6f"
  },
  {
    type: "bike",
    sourcePath: "/ssc/kawasaki-versys-650-top-rack",
    targetPath: "/bike-accessories/zana/bike/kawasaki/versys-650/69bea3ebc222d7fdd0662a88"
  },
  {
    type: "bike",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-handle-riser",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/paddock-spool-for-aprilia-tuono-457",
    targetPath: "/bike-accessories/zana/bike/aprilia/aprilia-tuono-457/69bea3ebc222d7fdd0662a98"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/vader-hard-shell-tail-bag-65-litre-harley-davidson-x440",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-t2-with-aluminium-plate-compatible-with-pillion-backrest-for-gt-interceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/mirror-extender-for-honda-cb300r",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/backrest-for-triumph-speed-twin-1200",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-1200/69bea3ebc222d7fdd0662aab"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/tripper-tank-bag-80-litre-dominar-250-dominar-400",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/yezdi-adventure-saddle-stay-black",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-adventure/69bea3ebc222d7fdd0662aae"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/single-rod-slider-assy-ducati-diavel1260",
    targetPath: "/bike-accessories/zpro/bike/ducati/diavel-1260/69bea3ebc222d7fdd0662a9d"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/sliders-pair-crash-guard-ktm-duke-250-390",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/backrest-honda-cb350-with-parcel-shelf",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/drake-universal-fabric-saddle-bag-32-litre-single-64-litre-pair-bag-honda-nx500",
    targetPath: "/bike-accessories/zana/bike/honda/nx500/69bea3ebc222d7fdd0662a81"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/tripper-tank-bag-80-litre-dominar-250-dominar-400",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/paddock-stand-rc-200390-texture-matt-black",
    targetPath: "/bike-accessories/zana/bike/ktm/rc-200-390/69bea3ebc222d7fdd0662a8f"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/honda-cb-300r-bash-plate-aluminium",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "product",
    sourcePath: "/index.php/all-reviews/universal-paddock-stand-orange",
    targetPath: "/product/paddock-stand/zana-universal-paddock-stand/69e279ad5685096a33ad9660"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/front-fork-slider-ducati-monster-950",
    targetPath: "/bike-accessories/zpro/bike/ducati/monster-950/69bea3ebc222d7fdd0662a9b"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/head-light-grill-cb300r",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/gps-mount-versys-650",
    targetPath: "/bike-accessories/zana/bike/kawasaki/versys-650/69bea3ebc222d7fdd0662a88"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/bash-plate-guerrilla-450-ms-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/yezdi-adventure-front-fluid-reservoir-cover",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-adventure/69bea3ebc222d7fdd0662aae"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/himalayan-450-side-stand-extender-aluminium-stainless-steel",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/side-stand-extender-triumph-tiger850-aluminum-stainless-steel",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-850/69bea3ebc222d7fdd0662aa4"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/top-box-aluminium-45ltr-rflat-sliver-for-ducati-scrambler",
    targetPath: "/bike-accessories/zpro/bike/ducati/scrambler/69bea3ebc222d7fdd0662a9c"
  },
  {
    type: "bike",
    sourcePath: "/ssc/honda-cb300f-rear-footrest",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/top-box-aluminium-black-55ltr-for-triumph-tiger-850",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-850/69bea3ebc222d7fdd0662aa4"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/front-fork-slider-for-suzuki-hayabusa-1300",
    targetPath: "/bike-accessories/zpro/bike/suzuki/hayabusa-1300/69bea3ebc222d7fdd0662aa1"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-duke125-bs6-202022",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-125-2020-22/69bea3ebc222d7fdd0662a92"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/headlight-grill-bsa-goldstar-650-stainless-steel-black-t2",
    targetPath: "/bike-accessories/zana/bike/bsa/goldstar-650/69bea3ebc222d7fdd0662a9a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/broozer-tail-bag-50-litre-ktm-adventure-250",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/bash-plate-for-honda-cb200x-black",
    targetPath: "/bike-accessories/zana/bike/honda/cb200x/69bea3ebc222d7fdd0662a7f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/rear-paddock-spools-for-kawasaki-versys-650",
    targetPath: "/bike-accessories/zana/bike/kawasaki/versys-650/69bea3ebc222d7fdd0662a88"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/toprack-t1-with-aluminium-plate-compatible-with-pillion-backrest-himalayan-bs6-2021",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/roadster-saddle-stay-for-super-meteor-650-with-exhaust-sheild-and-jerry-can-mount-v2",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/head-light-grill-black-for-triumph-speed-400",
    targetPath: "/bike-accessories/zana/bike/triumph/speed-400/69bea3ebc222d7fdd0662aa8"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/panniers-himalayan-450-36ltr-aluminum-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-footrest-pair-for-suzuki-vstrom-250",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "product",
    sourcePath: "/index.php/all-reviews/universal-overlander-saddle-bag",
    targetPath: "/product/saddle-bag/zana-universal-overlander-saddle-bag/69e279ad5685096a33ad9544"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/drake-universal-fabric-saddle-bag-tiger-900-rally-pro-32-litre-single-bag",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/frame-slider--black-for-suzuki-hayabusa--1300",
    targetPath: "/bike-accessories/zpro/bike/suzuki/hayabusa-1300/69bea3ebc222d7fdd0662aa1"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/yezdi-scrambler-bash-plate-silver-aluminium",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-scrambler/69bea3ebc222d7fdd0662aaf"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-guerrilla-450-puck-black-texture-mild-steel-type2",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/sporty-ss-bash-plate-all-black-gtinterceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/top-box-aluminium-45ltr-lflat-sliver-for-ducati-scrambler",
    targetPath: "/bike-accessories/zpro/bike/ducati/scrambler/69bea3ebc222d7fdd0662a9c"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/roadster-saddle-stay-triumph-scrambler-400-mild-steel-with-jerry-can-mount",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/engine-frame-slider-for-cb-300f",
    targetPath: "/bike-accessories/zana/bike/honda/cb300f/69bea3ebc222d7fdd0662a7e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-plastic-45ltr-black-for-kawasaki-vulcan-650",
    targetPath: "/bike-accessories/zana/bike/kawasaki/vulcan-650/69bea3ebc222d7fdd0662a8b"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-plate-for-yezdi-adventure-2025-black",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-adventure-2025/69bea3ebc222d7fdd0662ab0"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/pluto-tail-bag-tank-bag-for-super-meteor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/leg-guard-ms-with-slider-himalayan-red-bs6202122",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-with-puck-slider-black-for-honda-rebel-500",
    targetPath: "/bike-accessories/zana/bike/honda/rebel-500/69bea3ebc222d7fdd0662a82"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/universal-top-box-aluminium-55-ltr-silver",
    targetPath: "/product/aluminium-box/zana-universal-top-box-aluminium-silver-l-flat-with-back-rest-cushion/69e279d95685096a33ad97d5"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/fog-light-mount-re-bear-650-mild-steel",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/saddle-stay-bmw-g310-gs-texture-matt-black",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/paddock-stand-mild-steel-for-scram-411-glossy-red-color",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/scram-411/69bea3ebc222d7fdd0662a66"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/engine-frame-himalayan-bs-346-2022-silver",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/paddock-stand-ktm-adventure-250-black",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-super-meteor-650-aluminium-black-45ltr-l-flat",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/bash-plate-ms-for-triumph-speed-400",
    targetPath: "/bike-accessories/zana/bike/triumph/speed-400/69bea3ebc222d7fdd0662aa8"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/overlander-saddle-bag-suzuki-vstrom-250",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-radiator-guard",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/paddock-stand-honda-cb300r-glossy-red",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/toprack-ms-w1-compatible-with-pillion-backrest-scram-411-bs6-2022",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/scram-411/69bea3ebc222d7fdd0662a66"
  },
  {
    type: "bike",
    sourcePath: "/zpro/ssc/paddock-spool-ducati-monster-950",
    targetPath: "/bike-accessories/zpro/bike/ducati/monster-950/69bea3ebc222d7fdd0662a9b"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/saddle-stay-for-triumph-tiger-850",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-850/69bea3ebc222d7fdd0662aa4"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-triumph-scrambler-400x-black",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/zpro/ssc/saddle-stay-pulsar-200ns",
    targetPath: "/bike-accessories/zana/bike/bajaj/pulsar-ns200/69bea3ebc222d7fdd0662a70"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/fog-light-mount-for-himalayan-20162020",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/pluto-tail-bag-tank-bag-triumph-tiger-900-rally-pro",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/rear-paddock-spools-with-swing-arm-protector-ktm-duke-200-bs6-2021",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-200-bs6-2021-22/69bea3ebc222d7fdd0662a90"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/universal-paddock-stand-black-for-suzuki-vstrom-250",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-aluminium-22-ltr-rflat-silver-for-harley-davidson-x440",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/paddock-stand-honda-cb300r-glossy-red",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/front-fluid-reservoir-cover-guerrilla-450",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/radiator-guard-uk-flag-black-for-triumph-scrambler-400-x",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-aluminium-black-22ltr-for-yamaha-mt-15",
    targetPath: "/bike-accessories/zana/bike/yamaha/mt-15/69bea3ebc222d7fdd0662ab1"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/rear-fluid-reservoir-cover-guerrilla-450-black-texture",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/yezdi-scrambler-front-fluid-reservoir-cover",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-scrambler/69bea3ebc222d7fdd0662aaf"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-ktm-adventure-250-35ltr-aluminium-silver",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/leg-guard-continental-gt650-mild-steel-texture-matt-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/panniers-36-ltr-aluminium-lflat-silver-with-frame-for-himalayan-411",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-2016-2020/69bea3ebc222d7fdd0662a64"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/paddock-stand-z900-texture-matt-black",
    targetPath: "/bike-accessories/zpro/bike/kawasaki/z900/69bea3ebc222d7fdd0662a8a"
  },
  {
    type: "product",
    sourcePath: "/zpro/all-reviews/top-box-aluminium-45-ltr-lflat-black-for-bmw",
    targetPath: "/product/aluminium-box/zana-universal-top-box-aluminium-black-r-flat-with-back-rest-cushion/69e279d95685096a33ad97d3"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/paddock-stand-suzuki-hayabusa-1300-red",
    targetPath: "/bike-accessories/zpro/bike/suzuki/hayabusa-1300/69bea3ebc222d7fdd0662aa1"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/new-bash-plate-aluminium-for-cb350-hness",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/paddock-spool-triumph-speed-twin-1200",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-1200/69bea3ebc222d7fdd0662aab"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-re-classic-350-22ltr-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-re-classic-350-45ltr-silver-aluminium",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "bike",
    sourcePath: "/index.php/sc/triumph-speed-400-accessories",
    targetPath: "/bike-accessories/zana/bike/triumph/speed-400/69bea3ebc222d7fdd0662aa8"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-with-plate-for-honda-cb200x-type-w-black",
    targetPath: "/bike-accessories/zana/bike/honda/cb200x/69bea3ebc222d7fdd0662a7f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-plastic-45ltr-black-for-himalayan-452",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/crash-guard-with-slider-orange-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-triumph-scrambler-400-35ltr-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/bash-plate-for-triumph-tiger-900-rally-pro-silver",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/lower-engine-guard-for-honda-nx500-black",
    targetPath: "/bike-accessories/zana/bike/honda/nx500/69bea3ebc222d7fdd0662a81"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/radiator-guard-uk-flag-black-triumph-speed-twin-900",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-900/69bea3ebc222d7fdd0662aa6"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/paddock-spool-for-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/side-stand-extender-black-aluminium-for-ducati-scrambler",
    targetPath: "/bike-accessories/zpro/bike/ducati/scrambler/69bea3ebc222d7fdd0662a9c"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/top-box-aluminium-45ltr-lflat-sliver-for-ducati-scrambler",
    targetPath: "/bike-accessories/zpro/bike/ducati/scrambler/69bea3ebc222d7fdd0662a9c"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/universal-led-fog-light-zfl40",
    targetPath: "/product/fog-lights/zana-universal-led-fog-light/69e279ad5685096a33ad9613"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/vader-hard-shell-tail-bag-65litre-bsa-goldstar-650",
    targetPath: "/bike-accessories/zana/bike/bsa/goldstar-650/69bea3ebc222d7fdd0662a9a"
  },
  {
    type: "product",
    sourcePath: "/index.php/all-reviews/universal-gel-seat-cushion-large-800grm",
    targetPath: "/product/large/zana-universal-gel-seat-cushion-large/69e279ad5685096a33ad95fe"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/mirror-extender-aluminum-for-scrambler-400",
    targetPath: "/bike-accessories/zana/bike/triumph/scrambler-400-x/69bea3ebc222d7fdd0662aa9"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/rear-oil-reservoir-hex-cover-aluminum-for-super-meteor-650-not-compatible-with-royal-enfield-big-leg-guard",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/rear-oil-reservoir-cover-for-harley-davidson-x440",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/single-rod-crash-bar-gt-interceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/index.php/ssc/fog-light-mount-aprilia-rs457",
    targetPath: "/bike-accessories/zana/bike/aprilia/aprilia-rs457/69bea3ebc222d7fdd0662a99"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/top-box-tiger900-rally-pro-45ltr-aluminium-silver",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-re-classic-350-45ltr-black-aluminium",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/side-stand-extender-aluminum-ss-for-royal-enfield-super-meteor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-super-meteor-650-35ltr-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/front-fork-slider-bmw-r-1300-gs-adventure",
    targetPath: "/bike-accessories/zpro/bike/bmw/r-1300-gs/69bea3ebc222d7fdd0662a79"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/paddock-spools-for-suzuki-hayabusa-1300",
    targetPath: "/bike-accessories/zpro/bike/suzuki/hayabusa-1300/69bea3ebc222d7fdd0662aa1"
  },
  {
    type: "bike",
    sourcePath: "/zpro/ssc/triumph-street-twin-engine-cover",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-twin/69bea3ebc222d7fdd0662aa2"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/radiator-guard-ducati-diavel1260-black",
    targetPath: "/bike-accessories/zpro/bike/ducati/diavel-1260/69bea3ebc222d7fdd0662a9d"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/top-rack-with-plate-for-bmw-r-1300-gs-black",
    targetPath: "/bike-accessories/zpro/bike/bmw/r-1300-gs/69bea3ebc222d7fdd0662a79"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-ktm-adventure-250-45ltr-silver-aluminium",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-aluminium-silver-55ltr-for-himalayan-452",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/guerrilla-450-maximus-tail-bag-36-litre",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/linear-engine-cover-smallaluminium-for-triumph-street--scrambler",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-scrambler-900/69bea3ebc222d7fdd0662aa3"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/radiator-guard-honeycomb-black-for-kawasaki-vulcan-650",
    targetPath: "/bike-accessories/zana/bike/kawasaki/vulcan-650/69bea3ebc222d7fdd0662a8b"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/side-stand-extender-himalayan-411-aluminum-stainless-steel",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-plastic-ktm-adventure-250-55-ltr-black",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/bash-plate-ss-304-black-for-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-aluminium-bsa-goldstar-650-45l-rflat-silver",
    targetPath: "/bike-accessories/zana/bike/bsa/goldstar-650/69bea3ebc222d7fdd0662a9a"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/new-top-rack-with-aluminium-plate-and-compatible-with-pillion-backrest-for-gt-interceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/paddock-stand-z900-texture-matt-black",
    targetPath: "/bike-accessories/zpro/bike/kawasaki/z900/69bea3ebc222d7fdd0662a8a"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-with-new-plate-compatible-with-pillion-backrest-texture-matt-black-dominar-20192022",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/maximus-tail-bag-36-litre-single-continental-gt-interceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/radiator-guard-triumph-speed-twin-900-uk-flag-silver",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-900/69bea3ebc222d7fdd0662aa6"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-aluminium-35-ltr-rflat-silver-for-harley-davidson-x440",
    targetPath: "/bike-accessories/zana/bike/harley-davidson/harley-x440/69bea3ebc222d7fdd0662a9f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/side-stand-extender-gt-interceptor-650-aluminum-stainless-steel",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/mirror-extender-re-scram-411-aluminum",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/scram-411/69bea3ebc222d7fdd0662a66"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/mirror-extender-for-himalayan-450-texture-black-aluminium",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/radiator-grill-honeycomb-trident-black-texture",
    targetPath: "/bike-accessories/zpro/bike/triumph/trident-660/69bea3ebc222d7fdd0662aa5"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-plate-guerrilla-450-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/headlight-grill-ss-type-0-black-himalayan-20162022",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/uk-flag-type-1-radiator-grill-silver-with-black-gt-interceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-aluminium-silver-35ltr-for-yezdi-adventure",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-adventure-2025/69bea3ebc222d7fdd0662ab0"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/gtinterceptor-650-new-backrest-ms",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/pluto-tail-bag-tank-bag-for-dominar-250-dominar-400",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/front-fluid-reservior-cover-aluminum-for-classic-350-reborn",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "bike",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-rear-master-cylinder-protector",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-plastic-45ltr-black-for-super-meteor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/rear-paddock-spool-for-triumph-street-scrambler",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-scrambler-900/69bea3ebc222d7fdd0662aa3"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/rear-hex-fluid-reservoir-cover-for-himalayan-452",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/front-fork-slider-for-triumph-street-triple-765",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-triple-765/69bea3ebc222d7fdd0662aaa"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-ktm-duke-390-35ltr-aluminium-silver",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/zpro/ssc/triumph-speed-twin-1200-front-fork-slider",
    targetPath: "/bike-accessories/zpro/bike/triumph/speed-twin-1200/69bea3ebc222d7fdd0662aab"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/frame-slider-puck-small-for-aprilia-rs-457",
    targetPath: "/bike-accessories/zana/bike/aprilia/aprilia-rs457/69bea3ebc222d7fdd0662a99"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/retro-sump-guard-cb350-hness",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/bash-plate-bmw-f900-gs-gsa-silver",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-gs-adventure/69bea3ebc222d7fdd0662a77"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/bmw-g-310-gs-combo-offer-bmw-g310-gs-upper-fairing-guard-black-bmw-g310-gs-lower-engine-guard-with-puck-blackbmw-g310-gs-aluminium-heavy-duty-sump-gua",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/side-stand-extender-for-bmw-f850-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-850-gs-adventure/69bea3ebc222d7fdd0662a76"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/guerrilla450-top-box-aluminium-35litre-rflat-silver",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/paddock-stand-re-classic-350-steel-red",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/classic-350-reborn/69bea3ebc222d7fdd0662a65"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-bajaj-dominar-250-45ltr-aluminium-silver",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/broozer-tail-bag-50-litre-ktm-adventure-250",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/top-box-triumph-tiger900-rally-pro-45ltr-aluminium-silver",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-rack-with-plate-type2-for-triumph-street-scrambler-900",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-scrambler-900/69bea3ebc222d7fdd0662aa3"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/crash-guard-for-shotgun-650-black-mild-steel-type1",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/shotgun-650/69bea3ebc222d7fdd0662a6b"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/universal--mobile-holder-without-charger-for-ktm-duke-390250200390-gen-3",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/index.php/product/ktm-adv-390-2025-drl-r40-fog-light-mounting-adapter-kit-exclusive-for-zana-drl-r40-auxiliary-light",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/yezdi-adventure-radiator-grill-honeycomb-silver",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-adventure/69bea3ebc222d7fdd0662aae"
  },
  {
    type: "bike",
    sourcePath: "/index.php/ssc/honda-cb300r-tail-tidy",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/top-box-triumph-tiger900-rally-pro-45ltr-aluminium",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/index.php/product/leg-guard-continental-gt650-mild-steel-texture-matt-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/index.php/sc/honda-cb300r-accessories",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/master-cylinder-cover-guerrilla-450-black-type1",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/guerrilla-450/69bea3ebc222d7fdd0662a6c"
  },
  {
    type: "bike",
    sourcePath: "/sc/honda-rebel-500-accessories",
    targetPath: "/bike-accessories/zana/bike/honda/rebel-500/69bea3ebc222d7fdd0662a82"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/side-stand-extender-pulsar-ns400z",
    targetPath: "/bike-accessories/zana/bike/bajaj/pulsar-ns400z/69bea3ebc222d7fdd0662a71"
  },
  {
    type: "bike",
    sourcePath: "/index.php/sc/honda-rebel-500-accessories",
    targetPath: "/bike-accessories/zana/bike/honda/rebel-500/69bea3ebc222d7fdd0662a82"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/front-fork-slider-for-ktm-duke-390250200390-gen-3",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/ssc/bajaj-dominar-250-400-top-rack",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/product/crash-guard-with-slider-texture-matt-black-steel-for-meteor-350",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/meteor-350/69bea3ebc222d7fdd0662a69"
  },
  {
    type: "bike",
    sourcePath: "/index.php/ssc/kawasaki-z900-paddock-stand",
    targetPath: "/bike-accessories/zpro/bike/kawasaki/z900/69bea3ebc222d7fdd0662a8a"
  },
  {
    type: "bike",
    sourcePath: "/index.php/product/top-rack-honda-350-rs-with-plate",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-rs/69bea3ebc222d7fdd0662a7d"
  },
  {
    type: "bike",
    sourcePath: "/zpro/ssc/triumph-trident660-top-rack",
    targetPath: "/bike-accessories/zpro/bike/triumph/trident-660/69bea3ebc222d7fdd0662aa5"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/front-fluid-reservoir-cover-re-bear-650-aluminum",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "bike",
    sourcePath: "/index.php/product/rear-footrest-pair-for-suzuki-vstrom-250",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/index.php/sc/ktm-duke390-250-200-390-gen-3",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/sliders-pair-crash-guard-gt-interceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/front-fork-slider-for-ducati-hypermotard-950",
    targetPath: "/bike-accessories/zpro/bike/ducati/hypermotard-950/69bea3ebc222d7fdd0662a9e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/front-fork-slider-for-km-adv-390",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/product/ktm-linear-headlight-grill-adventure-250390",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/product/rear-footrest-pair-for-cb350",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/rear-paddock-spools-with-swing-arm-protector-silver-ktm-adventure-390-390-x",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-for-super-meteor-650-metal-sheet",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "product",
    sourcePath: "/index.php/all-reviews/universal-mobile-holder-with-usb-charger",
    targetPath: "/product/with-usb-charger/zana-universal-mobile-holder-with-usb-charger/69e279ad5685096a33ad953f"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/tapered-exhaust-compatible-panniers-with-frame-aluminium-46ltr-set-for-bmw-f-850-gsa",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-850-gs-adventure/69bea3ebc222d7fdd0662a76"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/rear-master-cylinder-protector-re-gtinterceptor-650-aluminum",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/side-stand-extender-re-himalayan-411-aluminum-stainless-steel",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/universal-bungee-cord-medium-80-cm",
    targetPath: "/product/medium/zana-universal-medium-bungee-cord/69e279ad5685096a33ad9661"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/rear-axle-protector-ducati-monster-950",
    targetPath: "/bike-accessories/zpro/bike/ducati/monster-950/69bea3ebc222d7fdd0662a9b"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/paddock-stand-street-twin-glossy-red-color",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-twin/69bea3ebc222d7fdd0662aa2"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/sliders-pair-for-crash-guard-himalayan-411",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-2016-2020/69bea3ebc222d7fdd0662a64"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/universal-adventure-saddle-bag",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/side-stand-extender-aluminum-ss-for-royal-enfield-super-meteor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/sliders-pair-crash-guard-himalayan-411-bs6",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/index.php/ssc/royal-enfield-gt-interceptor-650-handlebar",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-texture-matt-black-ktm-250390-201718",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/mirror-extender-for-honda-cb300f",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/tapered-exhaust-compatible-panniers-with-frame-aluminium-46ltr-set-for-bmw-f-850-gs",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-850-gs/69bea3ebc222d7fdd0662a74"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-yezdi-adventure-35ltr-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-adventure-2025/69bea3ebc222d7fdd0662ab0"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/gps-mount-bmw-310gs-aluminum",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/index.php/ssc/bajaj-dominar-250-400-radiator-grill",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-kawasaki-versys-650-45ltr-aluminium-black",
    targetPath: "/bike-accessories/zana/bike/kawasaki/versys-650/69bea3ebc222d7fdd0662a88"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/toprack-plate-new-black-ms-g310-r",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/side-stand-extender-bsa-goldstar-650-aluminum-stainless-steel",
    targetPath: "/bike-accessories/zana/bike/bsa/goldstar-650/69bea3ebc222d7fdd0662a9a"
  },
  {
    type: "bike",
    sourcePath: "/index.php/sc/bajaj-pulsar-ns200-accessories",
    targetPath: "/bike-accessories/zana/bike/bajaj/pulsar-ns200/69bea3ebc222d7fdd0662a70"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/saddle-stay-black-pulsar-200ns",
    targetPath: "/bike-accessories/zana/bike/bajaj/pulsar-ns200/69bea3ebc222d7fdd0662a70"
  },
  {
    type: "bike",
    sourcePath: "/ssc/kawasaki-versys-650-crash-guard",
    targetPath: "/bike-accessories/zana/bike/kawasaki/versys-650/69bea3ebc222d7fdd0662a88"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/universal-paddock-stand-red-for-suzuki-vstrom-250",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-with-plate-t1-black-duke-125-bs6-202022",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-200-bs6-2021-22/69bea3ebc222d7fdd0662a90"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/rear-master-cylinder-protector-himalayan-ss-20162020",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-411-bs6-2021-23/69bea3ebc222d7fdd0662a62"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/top-box-aluminium-black-45ltr-rflat-bmw-f-900-xr",
    targetPath: "/bike-accessories/zpro/bike/bmw/f-900-xr/69bea3ebc222d7fdd0662a75"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-ktm-adventure-250-with-plate-texture-matt-black",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-390-rally/69bea3ebc222d7fdd0662a8e"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/crash-guard-with-slider-orange-for-ktm-duke-390250200390-gen-3",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/index.php/ssc/radiator-grill-gs-310g",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/side-stand-extender-for-yamaha-mt-15",
    targetPath: "/bike-accessories/zana/bike/yamaha/mt-15/69bea3ebc222d7fdd0662ab1"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/broozer-tail-bag-tiger-900-rally-pro-50ltr-waterproof-storage",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/all-reviews/front-fork-slider-for-triumph-tiger-900-rally-pro",
    targetPath: "/bike-accessories/zpro/bike/triumph/tiger-900-rally-pro/69bea3ebc222d7fdd0662aa7"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/universal-6led-fog-light-zfl60",
    targetPath: "/product/fog-lights/zana-universal-6led-fog-light/69e279ad5685096a33ad96b1"
  },
  {
    type: "bike",
    sourcePath: "/ssc/yezdi-scrambler-top-rack",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-scrambler/69bea3ebc222d7fdd0662aaf"
  },
  {
    type: "bike",
    sourcePath: "/zpro/blogs/z-pro-for-suzuki-hayabusa-1300",
    targetPath: "/bike-accessories/zpro/bike/suzuki/hayabusa-1300/69bea3ebc222d7fdd0662aa1"
  },
  {
    type: "bike",
    sourcePath: "/index.php/product/brat-with-rod-handle-bar-interceptor-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/continental-gt-650-interceptor-650/69bea3ebc222d7fdd0662a63"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/roadster-saddle-bag-60-litres-pair-bag-30-litre-each",
    targetPath: "/product/saddle-bag/zana-roadster-saddle-bag-30-litre-each/69e279ad5685096a33ad9569"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/paddock-stand-versys-650-glossy-red-color",
    targetPath: "/bike-accessories/zana/bike/kawasaki/versys-650/69bea3ebc222d7fdd0662a88"
  },
  {
    type: "product",
    sourcePath: "/index.php/product/top-box-plastic-55litre-lflat-black",
    targetPath: "/product/abs-box/zana-universal-top-box-plastic-l-flat-black-with-back-rest-cushion/69e279d95685096a33ad97d9"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-plate-xpulse-200-small",
    targetPath: "/bike-accessories/zana/bike/hero/xpulse-200/69bea3ebc222d7fdd0662a83"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/toprack-without-plate-compatible-with-pillion-backrest-texture-matt-black-dominar-201718",
    targetPath: "/bike-accessories/zana/bike/bajaj/dominar-250-400-2019-2022/69bea3ebc222d7fdd0662a6e"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/sliders-pair-crash-guard-honda-cb300f",
    targetPath: "/bike-accessories/zana/bike/honda/cb300r/69bea3ebc222d7fdd0662a7c"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/paddock-stand-yezdi-adventure-texture-matt-black",
    targetPath: "/bike-accessories/zana/bike/yezdi/yezdi-adventure/69bea3ebc222d7fdd0662aae"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/saddle-stay-silver-with-jerry-can-mount--for-bmw-g310gs",
    targetPath: "/bike-accessories/zana/bike/bmw/g-310-gs/69bea3ebc222d7fdd0662a72"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-bsa-goldstar-650-aluminium-22l-lflat-silver",
    targetPath: "/bike-accessories/zana/bike/bsa/goldstar-650/69bea3ebc222d7fdd0662a9a"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/bash-plate-for-super-meteor-650-aluminum-black",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/super-meteor-650/69bea3ebc222d7fdd0662a68"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/maximus-tail-bag-36-litre-single-honda-nx500",
    targetPath: "/bike-accessories/zana/bike/honda/nx500/69bea3ebc222d7fdd0662a81"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/frame-slider-for-ktm-duke-390-gen3",
    targetPath: "/bike-accessories/zana/bike/ktm/duke-390-250-200-390-gen-3/69bea3ebc222d7fdd0662a93"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/saddle-stay-texture-matt-black-rc-200390",
    targetPath: "/bike-accessories/zana/bike/ktm/rc-200-390/69bea3ebc222d7fdd0662a8f"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-rack-honda-cb350",
    targetPath: "/bike-accessories/zana/bike/honda/cb350-highness/69bea3ebc222d7fdd0662a7b"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-aluminium-45ltr-r-flat-black-with-back-rest-cushion-for-honda-rebel-500",
    targetPath: "/bike-accessories/zana/bike/honda/rebel-500/69bea3ebc222d7fdd0662a82"
  },
  {
    type: "bike",
    sourcePath: "/index.php/zpro/ssc/triumph-street-scrambler-900-paddock-spool",
    targetPath: "/bike-accessories/zpro/bike/triumph/street-scrambler-900/69bea3ebc222d7fdd0662aa3"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/sliders-pair-crash-guard-himalayan-450",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-crash-guard",
    targetPath: "/bike-accessories/zana/bike/suzuki/v-strom-sx-250/69bea3ebc222d7fdd0662aa0"
  },
  {
    type: "bike",
    sourcePath: "/zpro/all-reviews/top-box-aluminium-35-ltr-rflat-silver-for-ducati-scrambler",
    targetPath: "/bike-accessories/zpro/bike/ducati/scrambler/69bea3ebc222d7fdd0662a9c"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/tripper-tank-bag-re-shotgun-650-80litre",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/shotgun-650/69bea3ebc222d7fdd0662a6b"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/sliders-pair-crash-guard-re-bear-650",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-aluminium-45ltr-r-flat-silver-with-back-rest-cushion-for-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-aluminium-re-bear-650-35l-rflat-silver",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/tripper-tank-bag-re-shotgun-650-80litre",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/shotgun-650/69bea3ebc222d7fdd0662a6b"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/drake-universal-fabric-saddle-bag-re-shotgun-650-32l-single-64l-pair",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/shotgun-650/69bea3ebc222d7fdd0662a6b"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/top-box-aluminium-35ltr-r-flat-black-with-back-rest-cushion-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/panniers-36-ltr-aluminium-l-flat-black-with-frame-for-himalayan-450",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-aluminium-re-bear-650-35l-rflat-silver",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/bear-650/69bea3ebc222d7fdd0662a6d"
  },
  {
    type: "product",
    sourcePath: "/all-reviews/universal-top-box-aluminium-22-litre-rflat-silver",
    targetPath: "/product/aluminium-box/zana-universal-top-box-aluminium-r-flat-silver/69e279d95685096a33ad97de"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/drake-universal-fabric-saddle-bag-re-shotgun-650-32l-single-64l-pair",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/shotgun-650/69bea3ebc222d7fdd0662a6b"
  },
  {
    type: "bike",
    sourcePath: "/all-reviews/panniers-36-ltr-aluminium-l-flat-black-with-frame-for-himalayan-450",
    targetPath: "/bike-accessories/zana/bike/royal-enfield/himalayan-450/69bea3ebc222d7fdd0662a6a"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-aluminium-35ltr-r-flat-black-with-back-rest-cushion-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/index.php/all-reviews/top-box-aluminium-45ltr-r-flat-black-with-back-rest-cushion-for-ktm-adv-390-2025",
    targetPath: "/bike-accessories/zana/bike/ktm/adventure-250-390-390x-2025/69bea3ebc222d7fdd0662a94"
  },
  {
    type: "bike",
    sourcePath: "/category/royal-enfield-accessories",
    targetPath: "/zana/bikes/royal-enfield/"
  },
  {
    type: "bike",
    sourcePath: "/category/honda-accessories",
    targetPath: "/zana/bikes/honda"
  },
  {
    type: "bike",
    sourcePath: "/category/tvs-motorcycle-accessories",
    targetPath: "/zana/bikes/tvs"
  },
  {
    type: "bike",
    sourcePath: "/category/ktm-accessories",
    targetPath: "/zana/bikes/ktm"
  },
  {
    type: "bike",
    sourcePath: "/category/triumph-accessories",
    targetPath: "/zana/bikes/triumph"
  },
  {
    type: "bike",
    sourcePath: "/category/bajaj-accessories",
    targetPath: "/zana/bikes/bajaj"
  },
  {
    type: "bike",
    sourcePath: "/zpro/category/universal-accessories",
    targetPath: "/product-catalog/all"
  },
  {
    type: "bike",
    sourcePath: "/category/yezdi-accessories",
    targetPath: "/zana/bikes/yezdi"
  },
  {
    type: "bike",
    sourcePath: "/zpro/category/suzuki-accessories",
    targetPath: "/zpro/bikes/suzuki"
  },
  {
    type: "bike",
    sourcePath: "/category/hero-accessories",
    targetPath: "/zana/bikes/hero"
  },
  {
    type: "bike",
    sourcePath: "/category/universal-accessories",
    targetPath: "/product-catalog/all"
  },
  {
    type: "bike",
    sourcePath: "/category/yamaha-accessories",
    targetPath: "/zana/bikes/yamaha"
  },
  {
    type: "bike",
    sourcePath: "/zpro/category/royal-enfield-accessories",
    targetPath: "/zana/bikes/royal-enfield"
  },
  {
    type: "bike",
    sourcePath: "/zpro/category/yamaha-accessories",
    targetPath: "/zana/bikes/yamaha"
  },
  {
    type: "bike",
    sourcePath: "/zpro/category/triumph-accessories",
    targetPath: "/zpro/bikes/triumph"
  },
  {
    type: "bike",
    sourcePath: "/category/jawa-accessories",
    targetPath: "www.zanamotorcycle.com"
  },
  {
    type: "bike",
    sourcePath: "/category/bmw-accessories",
    targetPath: "/zana/bikes/bmw"
  },
  {
    type: "bike",
    sourcePath: "/category/aprilia-tuono-accessories",
    targetPath: "/zana/bikes/aprilia"
  },
  {
    type: "bike",
    sourcePath: "/zpro/category/bmw-accessories",
    targetPath: "/zpro/bikes/bmw"
  },
  {
    type: "bike",
    sourcePath: "/zpro/category/yezdi-accessories",
    targetPath: "/zana/bikes/yezdi"
  },
  {
    type: "bike",
    sourcePath: "/zpro/category/honda-accessories",
    targetPath: "/zana/bikes/honda"
  },
  {
    type: "bike",
    sourcePath: "/category/ducati-accessories",
    targetPath: "/zpro/bikes/ducati"
  },
  {
    type: "bike",
    sourcePath: "/category/suzuki-accessories",
    targetPath: "/zana/bikes/suzuki"
  },
  {
    type: "bike",
    sourcePath: "/category/harley-davidson-accessories",
    targetPath: "/zana/bikes/harley-davidson"
  },
  {
    type: "bike",
    sourcePath: "/category/kawasaki-accessories",
    targetPath: "/zana/bikes/kawasaki"
  },
  {
    type: "bike",
    sourcePath: "/zpro/category/kawasaki-accessories",
    targetPath: "/zpro/bikes/kawasaki"
  },
  {
    type: "bike",
    sourcePath: "/zpro/category/ducati-accessories",
    targetPath: "/zpro/bikes/ducati"
  },
  {
    type: "bike",
    sourcePath: "/category/bsa-motorcycles-accessories",
    targetPath: "/zana/bikes/bsa"
  },
  {
    type: "bike",
    sourcePath: "/zpro/category/hero-accessories",
    targetPath: "/zana/bikes/hero"
  },
  {
    type: "bike",
    sourcePath: "/zpro/category/ktm-accessories",
    targetPath: "/zana/bikes/ktm"
  },
  {
    type: "bike",
    sourcePath: "/zpro/category/bajaj-accessories",
    targetPath: "/zana/bikes/bajaj"
  },
  {
    type: "product",
    sourcePath: "/product/ergonomics/zana-rear-footrest-for-super-meteor-650-pair-ms/69e279ad5685096a33ad9457",
    targetPath: "/product/bike-protection/zana-crash-guard-with-slider-texture-matt-black-dominar-400-250-2017-22/69e279ad5685096a33ad92ef"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-slider-texture-matt-black-cb350",
    targetPath: "/product/bike-protection/zana-crash-guard-v-2-with-slider-texture-matt-black-cb350-rs/6a43ca4f54bc92ff52b1f7b1"
  },
  {
    type: "product",
    sourcePath: "/product/mirror-extender-for-honda-cb350",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-honda-cb350/69e279ad5685096a33ad947b"
  },
  {
    type: "product",
    sourcePath: "/product/universal-slider-for-all-zana-crash-guards",
    targetPath: "/product/bike-protection/zana-universal-slider-compatible-with-zana-crash-guard-only/69e279ad5685096a33ad9678"
  },
  {
    type: "product",
    sourcePath: "/product/upper-lower-crash-guard-with-slider-combo-red-for-tvs-apache-rtx-300-beak-version",
    targetPath: "/product/bike-protection/zana-upper-lower-crash-guard-with-slider-combo-red-for-tvs-apache-rtx-300-beak-version/69e279ae5685096a33ad97b0"
  },
  {
    type: "product",
    sourcePath: "/product/pillion-back-rest-for-xoom-160",
    targetPath: "/product/touring-essentials/zana-pillion-back-rest-for-xoom-160/69e279ae5685096a33ad97aa"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-slider-texture-matt-black-steel-for-meteor-350",
    targetPath: "/product/bike-protection/zana-crash-guard-with-slider-texture-matt-black-steel-for-meteor-350/69e279ad5685096a33ad9417"
  },
  {
    type: "product",
    sourcePath: "/product/universal-top-box-plastic-45-ltr-lflat-black",
    targetPath: "/product/top-box/zana-universal-top-box-nomada-45-ltr-plastic-with-backrest-black/69e279d95685096a33ad97e0"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/universal-led-fog-light-drl-r40",
    targetPath: "/product/fog-light/zana-universal-led-fog-light-drl-r-40/69e279ae5685096a33ad96bb"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-ms-with-slider-texture-matt-black-for-classic-350",
    targetPath: "/product/bike-protection/zana-crash-guard-ms-with-slider-texture-matt-black-for-classic-350/69e279ad5685096a33ad9418"
  },
  {
    type: "product",
    sourcePath: "/product/hand-guard-for-yezdi-adventure-2025-black",
    targetPath: "/product/bike-protection/zana-hand-guard-for-yezdi-adventure-2025-black/69e279ae5685096a33ad9710"
  },
  {
    type: "product",
    sourcePath: "/product/hand-guard-for-black-himalayan-450",
    targetPath: "/product/bike-protection/zana-hand-guard-for-himalayan-450-black/69e279ae5685096a33ad96f4"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-slider-puck-for-honda-cb200x-black",
    targetPath: "/product/bike-protection/zana-upper-crash-guard-with-slider-puck-for-honda-cb200x-black/69e279ad5685096a33ad9577"
  },
  {
    type: "product",
    sourcePath: "/product/handle-bar-for-super-meteor-650",
    targetPath: "/product/bike-protection/zana-crash-guard-ms-for-super-meteor-650/69e279ad5685096a33ad9429"
  },
  {
    type: "product",
    sourcePath: "/product/offset-handlebar-riser-for-himalayan-450-texture-black-aluminium-billet",
    targetPath: "/product/ergonomics/zana-offset-handlebar-riser-for-himalayan-450-texture-black-billet-aluminium/69e279ad5685096a33ad94e3"
  },
  {
    type: "product",
    sourcePath: "/product/gps-mount-for-x-pulse-210",
    targetPath: "/product/accessories/zana-gps-mount-for-x-pulse-210/69e279ae5685096a33ad96c9"
  },
  {
    type: "product",
    sourcePath: "/product/mirror-extender-for-honda-cb-350-rs",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-honda-cb-350-rs/69e279ad5685096a33ad9482"
  },
  {
    type: "product",
    sourcePath: "/product/offset-handle-bar-riser-black-for-triumph-speed-400",
    targetPath: "/product/ergonomics/zana-offset-handlebar-riser-black-for-triumph-speed-400-speed-t4/69e279ad5685096a33ad949b"
  },
  {
    type: "product",
    sourcePath: "/product/gps-mount-for-yezdi-adventure-2025",
    targetPath: "/product/accessories/zana-gps-mount-for-yezdi-adventure-2025/69e279ae5685096a33ad970a"
  },
  {
    type: "product",
    sourcePath: "/product/bash-plate-for-tvs-apache-rtx-300-aluminum-black",
    targetPath: "/product/bike-protection/zana-bash-plate-for-tvs-apache-rtx-300-ms-black/69e279ae5685096a33ad97b2"
  },
  {
    type: "product",
    sourcePath: "/product/exhaust-protector-for-xoom-160",
    targetPath: "/product/bike-protection/zana-exhaust-protector-for-xoom-160/69e279ae5685096a33ad9736"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-stays-pannier-rack-for-soft-bags-honda-cb350-hness-version2",
    targetPath: "/product/zana-accessories/zana-saddle-stays-pannier-rack-for-soft-bags-honda-cb350-h-ness-version-2-cb350-highness-zana-motorcycles/69e279ad5685096a33ad9336"
  },
  {
    type: "product",
    sourcePath: "/product/angular-handlebar-riser-for-ktm-adv-390-2025-aluminium-black",
    targetPath: "/product/ergonomics/zana-angular-handlebar-riser-for-ktm-adv-390-2025-aluminium-black/69e279ad5685096a33ad96ab"
  },
  {
    type: "product",
    sourcePath: "/product/gps-mount-for-xoom-160",
    targetPath: "/product/accessories/zana-gps-mount-for-xoom-160/69e279ae5685096a33ad97a4"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-slider-for-yezdi-adventure-2025-black",
    targetPath: "/product/bike-protection/zana-hand-guard-for-yezdi-adventure-2025-black/69e279ae5685096a33ad9710"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-slider-pulsar-ns400z",
    targetPath: "/product/bike-protection/zana-crash-guard-with-slider-for-pulsar-ns400z/69e279ad5685096a33ad95fb"
  },
  {
    type: "product",
    sourcePath: "/product/radiator-guard-pulsar-ns400z-honeycomb-black",
    targetPath: "/product/bike-protection/zana-radiator-guard-honeycomb-black-for-pulsar-ns400z/69e279ad5685096a33ad960f"
  },
  {
    type: "product",
    sourcePath: "/product/rear-paddock-spools-for-ktm-duke-390250200390-gen-3",
    targetPath: "/product/side-stand-support/zana-rear-paddock-spools-for-ktm-duke-390-250-200-390-gen-3/69e279ad5685096a33ad94ca"
  },
  {
    type: "product",
    sourcePath: "/product/gps-mount-for-tvs-apache-rtx-300",
    targetPath: "/product/accessories/zana-gps-mount-for-tvs-apache-rtx-300/69e279ae5685096a33ad97c8"
  },
  {
    type: "product",
    sourcePath: "/product/front-number-plate-relocator-dominar-250400-201922",
    targetPath: "/product/accessories/zana-front-number-plate-relocator-dominar-250-400-2019-22/69e279ad5685096a33ad9345"
  },
  {
    type: "product",
    sourcePath: "/product/retro-saddle-bag-for-hunter-350-small",
    targetPath: "/product/bags/zana-retro-saddle-bag-for-hunter-350/69e279ad5685096a33ad94b4"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-pillion-backrest-for-harley-davidson-x440",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-and-pillion-backrest-for-harley-davidson-x440/69e279ad5685096a33ad9533"
  },
  {
    type: "product",
    sourcePath: "/product/vertical-handlebar-riser-black-for-x-pulse-210",
    targetPath: "/product/ergonomics/zana-vertical-handlebar-riser-black-for-x-pulse-210/69e279ae5685096a33ad96db"
  },
  {
    type: "product",
    sourcePath: "/product/vertical-handlebar-riser-texture-matt-black-for-yezdi-adventure-2025",
    targetPath: "/product/ergonomics/zana-vertical-handlebar-riser-texture-matt-black-for-yezdi-adventure-2025/69e279ae5685096a33ad9716"
  },
  {
    type: "product",
    sourcePath: "/product/tail-tidy-black-for-ktm-duke-390250200390-gen-3",
    targetPath: "/product/bike-protection/zana-tail-tidy-black-for-ktm-duke-390-250-200-390-gen-3/69e279ad5685096a33ad9507"
  },
  {
    type: "product",
    sourcePath: "/product/rear-paddock-spool-black-for-tvs-apache-rtx-300",
    targetPath: "/product/side-stand-support/zana-rear-paddock-spool-black-for-tvs-apache-rtx-300/69e279ae5685096a33ad97b6"
  },
  {
    type: "product",
    sourcePath: "/product/rear-footrest-ktm-adventure-250-pair",
    targetPath: "/product/ergonomics/zana-rear-footrest-pair-for-ktm-adventure-250-390-390x-390-rally/69e279ad5685096a33ad9459"
  },
  {
    type: "product",
    sourcePath: "/product/hand-guard-for-suzuki-v-strom-sx-250-black",
    targetPath: "/product/bike-protection/zana-hand-guard-for-suzuki-v-strom-sx-250-black/69e279ae5685096a33ad9758"
  },
  {
    type: "product",
    sourcePath: "/product/universal-led-fog-light-drl-45",
    targetPath: "/product/fog-light/zana-universal-led-fog-light-drl-45/69e279ae5685096a33ad97c7"
  },
  {
    type: "product",
    sourcePath: "/product/ktm-adv-390-2025-drl-r40-fog-light-mounting-adapter-kit-exclusive-for-zana-drl-r40-auxiliary-light",
    targetPath: "/product/fog-light/zana-ktm-adv-390-2025-drl-r-40-fog-light-mounting-adapter-kit-exclusive-for-zana-drl-r-40-auxiliary-light/69e279ae5685096a33ad96f1"
  },
  {
    type: "product",
    sourcePath: "/product/universal-top-box-aluminium-45ltr-l-flat-black-with-back-rest-cushion-for-tvs-apache-rtx-300",
    targetPath: "/product/top-box/zana-universal-top-box-aluminium-black-45ltr-l-flat-with-back-rest-cushion/69e279d95685096a33ad97cc"
  },
  {
    type: "product",
    sourcePath: "/product/top-box-moto-32-ltr-plastic-with-backrest-black",
    targetPath: "/product/top-box/zana-universal-top-box-moto-32-ltr-plastic-with-backrest-black/69e279d95685096a33ad97e2"
  },
  {
    type: "product",
    sourcePath: "/product/side-stand-extenders-for-yezdi-adventure-2025-aluminium-stainless-steel",
    targetPath: "/product/side-stand-support/zana-side-stand-extenders-for-yezdi-adventure-2025-aluminium-stainless-steel/69e279ae5685096a33ad9707"
  },
  {
    type: "product",
    sourcePath: "/product/rear-footrest-mild-steel-pair-for-hunter-350",
    targetPath: "/product/ergonomics/zana-rear-footrest-mild-steel-pair-for-hunter-350/69e279ad5685096a33ad9458"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-slider-for-harley-davidson-x440-black-colour",
    targetPath: "/product/bike-protection/zana-crash-guard-with-slider-for-harley-davidson-x440-black/69e279ad5685096a33ad9531"
  },
  {
    type: "product",
    sourcePath: "/product/fog-light-mount-universal",
    targetPath: "/product/fog-light/zana-universal-fog-light-mount/69e279ad5685096a33ad9664"
  },
  {
    type: "product",
    sourcePath: "/product/pillion-backrest-for-suzuki-vstrom-250",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-suzuki-v-strom-250/69e279ad5685096a33ad9474"
  },
  {
    type: "product",
    sourcePath: "/product/mirror-extender-for-tvs-apache-rtx-300",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-tvs-apache-rtx-300/69e279ae5685096a33ad97a0"
  },
  {
    type: "product",
    sourcePath: "/product/front-fork-slider-for-triumph-scrambler-400-x",
    targetPath: "/product/bike-protection/z-pro-front-fork-slider-for-triumph-street-scrambler/69e279ad5685096a33ad93e4"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-plate-ms-for-classic-350-reborn",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-ms-for-classic-350-reborn/69e279ad5685096a33ad94b2"
  },
  {
    type: "product",
    sourcePath: "/product/himalayan-new-angular-handle-riser-aluminum",
    targetPath: "/product/ergonomics/zana-new-angular-handle-bar-riser-aluminum-for-scram-411/69e279ad5685096a33ad9448"
  },
  {
    type: "product",
    sourcePath: "/product/roadster-2-saddle-bag-50ltr-pair-bag-25ltr-each-for-tvs-apache-rtx-300",
    targetPath: "/product/bags/zana-roadster-2-saddle-bag-50ltr-pair-bag-25ltr-each-for-tvs-apache-rtx-300/69e279ae5685096a33ad97a3"
  },
  {
    type: "product",
    sourcePath: "/product/universal-mobile-holder-with-charger-blu",
    targetPath: "/product/mobile-holder/zana-universal-mobile-holder-with-charger-blu/69e279ae5685096a33ad96bf"
  },
  {
    type: "product",
    sourcePath: "/product/tail-tidy-for-kawasaki-klx-230",
    targetPath: "/product/bike-protection/zana-tail-tidy-for-kawasaki-klx-230/69e279ae5685096a33ad97a5"
  },
  {
    type: "product",
    sourcePath: "/product/jerry-can-mount-for-suzuki-v-strom-250",
    targetPath: "/product/touring-essentials/zana-jerry-can-mount-for-suzuki-v-strom-250/69e279ae5685096a33ad975b"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-bag-re-meteor-350",
    targetPath: "/product/bags/zana-retro-saddle-bag-for-hunter-350/69e279ad5685096a33ad94b4"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-compatible-with-royal-enfield-backrest-ms-for-super-meteor-650",
    targetPath: "/product/touring-essentials/zana-top-rack-compatible-with-royal-enfield-backrest-ms-for-super-meteor-650/69e279ad5685096a33ad9466"
  },
  {
    type: "product",
    sourcePath: "/product/brat-mini-handle-bar-for-gtinterceptor-650",
    targetPath: "/product/touring-essentials/zana-backrest-ms-for-interceptor-gt-650/69e279ad5685096a33ad92d6"
  },
  {
    type: "product",
    sourcePath: "/product/hand-guard-for-honda-cb-350-2025-black",
    targetPath: "/product/bike-protection/zana-hand-guard-for-honda-cb-350-2025-black/69e279ae5685096a33ad9753"
  },
  {
    type: "product",
    sourcePath: "/product/universal-led-fog-light-drk-r35-for-himalayan-450",
    targetPath: "/product/fog-light/zana-universal-led-fog-light-drl-r-35-for-himalayan-450/69e279ae5685096a33ad9794"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/backrest-for-triumph-speed-twin-1200",
    targetPath: "/product/touring-essentials/z-pro-backrest-for-speed-twin-1200/69e279ad5685096a33ad943c"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-plate-type1-for-royal-enfield-meteor-350",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-type-1-for-royal-enfield-meteor-350/69e279ad5685096a33ad94ad"
  },
  {
    type: "product",
    sourcePath: "/product/pull-back-angular-handle-bar-riser-texture-matt-black-for-gtinterceptor-650",
    targetPath: "/product/ergonomics/zana-pull-back-angular-handlebar-riser-texture-matt-black-for-gt-interceptor-650/69e279ad5685096a33ad933d"
  },
  {
    type: "product",
    sourcePath: "/product/sliders-pair-crash-guard-gt-interceptor-650",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-gt-650-interceptor-650/69e279ad5685096a33ad9670"
  },
  {
    type: "product",
    sourcePath: "/product/fog-light-mount-for-honda-cb350",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-honda-cb350/69e279ad5685096a33ad93ea"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-plate-new-honda-cb300f-w1",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-new-honda-cb300f-w-1/69e279ad5685096a33ad93fd"
  },
  {
    type: "product",
    sourcePath: "/product/side-stand-extender-for-xoom-160",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-xoom-160/69e279ae5685096a33ad97a9"
  },
  {
    type: "product",
    sourcePath: "/product/side-stand-extender-for-tvs-apache-rtx-300",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-tvs-apache-rtx-300-sheet-metal/69e279ae5685096a33ad97a6"
  },
  {
    type: "product",
    sourcePath: "/product/top-box-himalayan-450-35ltr-silver-aluminium",
    targetPath: "/product/touring-essentials/zana-top-rack-plate-aluminium-silver-for-himalayan-450/69e279ad5685096a33ad954a"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-slider-texture-matt-black-cb350-rs",
    targetPath: "/product/bike-protection/zana-crash-guard-v-2-with-slider-texture-matt-black-cb350-rs/6a43ca4f54bc92ff52b1f7b1"
  },
  {
    type: "product",
    sourcePath: "/product/roadster-2-saddle-bag-50ltr-pair-bag-25ltr-each",
    targetPath: "/product/bags/zana-roadster-2-saddle-bag-50ltr-pair-bag-25ltr-each/69e279ae5685096a33ad96eb"
  },
  {
    type: "product",
    sourcePath: "/product/offset-handle-riser-guerrilla-450",
    targetPath: "/product/ergonomics/zana-offset-handle-riser-for-guerrilla-450/69e279ad5685096a33ad95dc"
  },
  {
    type: "product",
    sourcePath: "/product/handlebar-riser-for-super-meteor-650-vertical-aluminum",
    targetPath: "/product/ergonomics/zana-handlebar-riser-for-super-meteor-650-vertical-aluminum/69e279ad5685096a33ad948b"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/top-box-plastic-45-ltr-nomada-series-black",
    targetPath: "/product/top-box/zana-universal-top-box-nomada-45-ltr-plastic-with-backrest-black/69e279d95685096a33ad97e0"
  },
  {
    type: "product",
    sourcePath: "/product/handle-bar-riser-for-harley-davidson-x440",
    targetPath: "/product/ergonomics/zana-handle-bar-riser-for-harley-davidson-x440/69e279ad5685096a33ad9530"
  },
  {
    type: "product",
    sourcePath: "/product/sliders-pair-crash-guard-dominar-250-400",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-dominar-250-400/69e279ad5685096a33ad9665"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-ms-with-slider-puck-black-for-vstrom-250",
    targetPath: "/product/bike-protection/zana-crash-guard-ms-with-slider-puck-black-for-v-strom-250/69e279ad5685096a33ad93a2"
  },
  {
    type: "product",
    sourcePath: "/product/tripper-tank-bag-80-litre",
    targetPath: "/product/bags/zana-tripper-tank-bag-8-0-litre-for-bmw-310-gs/69e279ad5685096a33ad959d"
  },
  {
    type: "product",
    sourcePath: "/product/side-stand-extender-for-honda-cb350",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-honda-cb350/69e279ad5685096a33ad93bf"
  },
  {
    type: "product",
    sourcePath: "/product/back-rest-black-for-for-triumph-speed-400",
    targetPath: "/product/bike-protection/zana-bash-plate-ms-for-triumph-speed-400/69e279ad5685096a33ad94a0"
  },
  {
    type: "product",
    sourcePath: "/product/sliders-pair-crash-guard-guerrilla-450",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-guerrilla-450/69e279ad5685096a33ad9671"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-stay-for-super-meteor-650-with-jerry-can-mount",
    targetPath: "/product/touring-essentials/zana-saddle-stay-for-super-meteor-650-with-jerry-can-mount-ms/69e279ad5685096a33ad9472"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-slider-glossy-black-cb350",
    targetPath: "/product/bike-protection/zana-crash-guard-with-slider-glossy-black-cb350/69e279ad5685096a33ad9329"
  },
  {
    type: "product",
    sourcePath: "/product/front-fork-slider-for-ktm-duke-390250200390-gen-3",
    targetPath: "/product/bike-protection/zana-front-fork-slider-for-ktm-duke-390-250-200-390-gen-3/69e279ad5685096a33ad94cc"
  },
  {
    type: "product",
    sourcePath: "/product/fog-light-mount-for-himalayan-450",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-himalayan-450/69e279ad5685096a33ad96b9"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-slider-glossy-red-for-xpulse-210",
    targetPath: "/product/bike-protection/zana-crash-guard-with-slider-glossy-red-for-x-pulse-210/69e279ae5685096a33ad96c0"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/universal-top-box-plastic-45-ltr-lflat-black",
    targetPath: "/product/top-box/zana-universal-top-box-nomada-45-ltr-plastic-with-backrest-black/69e279d95685096a33ad97e0"
  },
  {
    type: "product",
    sourcePath: "/product/mirror-extender-for-hero-xoom-160",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-hero-xoom-160/69e279ae5685096a33ad97a7"
  },
  {
    type: "product",
    sourcePath: "/product/bash-plate-for-honda-cb200x-black",
    targetPath: "/product/bike-protection/zana-bash-plate-for-honda-cb200x-black/69e279ad5685096a33ad957a"
  },
  {
    type: "product",
    sourcePath: "/product/upper-lower-crash-guard-combo-with-slider-for-tvs-apache-rtx-300",
    targetPath: "/product/bike-protection/zana-upper-lower-crash-guard-with-slider-combo-red-for-tvs-apache-rtx-300-beak-version/69e279ae5685096a33ad97b0"
  },
  {
    type: "product",
    sourcePath: "/product/gps-mount-suzuki-vstrom-250-aluminum-stainless-steel",
    targetPath: "/product/accessories/zana-gps-mount-aluminum-stainless-steel-for-suzuki-vstrom-250/69e279ad5685096a33ad93b9"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-stay-with-jerry-can-mount-ktm-adv-390-2025",
    targetPath: "/product/touring-essentials/zana-roadster-saddle-stay-with-jerry-can-mount-black-for-ktm-adv-390-2025/69e279ad5685096a33ad968e"
  },
  {
    type: "product",
    sourcePath: "/product/fog-light-mount-for-x-pulse-210",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-x-pulse-210/69e279ae5685096a33ad96c6"
  },
  {
    type: "product",
    sourcePath: "/product/backrest-for-super-meteor-650-with-luggage-rack",
    targetPath: "/product/touring-essentials/zana-backrest-ms-compatible-with-luggage-rack-for-super-meteor-650/69e279ad5685096a33ad942f"
  },
  {
    type: "product",
    sourcePath: "/product/weekender-tail-bag-32-liters-expandable-to-39-liters-for-ktm-enduro-390",
    targetPath: "/product/bags/zana-weekender-tail-bag-32-liters-expandable-to-39-liters-for-ktm-enduro-390/69e279ae5685096a33ad9768"
  },
  {
    type: "product",
    sourcePath: "/product/tripper-tank-bag-80-litre-himalayan-450",
    targetPath: "/product/bags/zana-tripper-tank-bag-8-0-litre-for-himalayan-450/69e279ad5685096a33ad959f"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/top-box-rhino-36-ltr-plastic-with-backrest-black-gray",
    targetPath: "/product/top-box/zana-universal-top-box-rhino-36-ltr-plastic-with-backrest-black-gray/69e279d95685096a33ad97e1"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-mild-steel-with-slider-glossy-black-gt-interceptor-650",
    targetPath: "/product/bike-protection/zana-crash-guard-for-bsa-goldstar-650-with-slider-puck-mild-steel-black/69e279ad5685096a33ad9622"
  },
  {
    type: "product",
    sourcePath: "/product/paddock-stand-yezdi-adventure-texture-matt-black",
    targetPath: "/product/touring-essentials/zana-yezdi-adventure-saddle-stay-black/69e279ad5685096a33ad9357"
  },
  {
    type: "product",
    sourcePath: "/product/tail-tidy-black-for-honda-cb300r",
    targetPath: "/product/bike-protection/zana-tail-tidy-black-for-honda-cb300r/69e279ad5685096a33ad9502"
  },
  {
    type: "product",
    sourcePath: "/product/top-box-himalayan-450-35ltr-aluminium-black",
    targetPath: "/product/bike-protection/zana-radiator-guard-aluminium-black-for-himalayan-450/69e279ad5685096a33ad94e6"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-for-himalayan-450-with-slider-red-mild-steel-type-1-v2",
    targetPath: "/product/bike-protection/zana-crash-guard-for-himalayan-450-with-slider-red-mild-steel-type-1-v-2/69e279ae5685096a33ad97c5"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/rear-paddock-spool-for-triumph-street-scrambler",
    targetPath: "/product/side-stand-support/z-pro-rear-paddock-spool-for-triumph-street-scrambler/69e279ad5685096a33ad93e5"
  },
  {
    type: "product",
    sourcePath: "/product/radiator-guard-honeycomb-black-for-ktm-duke-390250200390-gen-3",
    targetPath: "/product/bike-protection/zana-radiator-guard-honeycomb-black-for-ktm-duke-390-250-200-390-gen-3/69e279ad5685096a33ad94d0"
  },
  {
    type: "product",
    sourcePath: "/product/sliders-pair-crash-guard-ktm-duke-390-250",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-ktm-duke-250-390/69e279ad5685096a33ad966d"
  },
  {
    type: "product",
    sourcePath: "/product/gps-mount-duke-250390",
    targetPath: "/product/accessories/zana-gps-mount-duke-250-390/69e279ad5685096a33ad9313"
  },
  {
    type: "product",
    sourcePath: "/product/gps-mount-dominar400-20192021",
    targetPath: "/product/accessories/zana-gps-mount-dominar400-2019-2021/69e279ad5685096a33ad9311"
  },
  {
    type: "product",
    sourcePath: "/product/rear-footrest-pair-for-suzuki-vstrom-250",
    targetPath: "/product/ergonomics/zana-rear-footrest-pair-for-suzuki-v-strom-250/69e279ad5685096a33ad9480"
  },
  {
    type: "product",
    sourcePath: "/product/hand-guard-for-himalayan-450-white",
    targetPath: "/product/bike-protection/zana-hand-guard-for-himalayan-450-white/69e279ae5685096a33ad96f9"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-plate-type-w-for-apache-rtx-300",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-type-w-for-apache-rtx-300/69e279ae5685096a33ad9785"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-re-super-meteor-650-backrest",
    targetPath: "/product/touring-essentials/zana-top-rack-with-ms-plate-for-super-meteor-650-black/6a35368d66b713f40b19a351"
  },
  {
    type: "product",
    sourcePath: "/product/rear-footrest-for-honda-cb200x",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-honda-cb200x/69e279ad5685096a33ad957c"
  },
  {
    type: "product",
    sourcePath: "/product/backrest-with-parcel-shelf-ms-for-classic-350-reborn",
    targetPath: "/product/touring-essentials/zana-backrest-with-parcel-shelf-ms-for-classic-350-reborn/69e279ad5685096a33ad9419"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-stay-continental-gt-650-texture-matt-black",
    targetPath: "/product/touring-essentials/zana-saddle-stay-ms-texture-matt-black-for-gt-interceptor-650/69e279ad5685096a33ad92d4"
  },
  {
    type: "product",
    sourcePath: "/product/backrest-hex-cushion-for-honda-cb-350",
    targetPath: "/product/touring-essentials/zana-backrest-hex-cushion-for-honda-cb-350/69e279ae5685096a33ad96df"
  },
  {
    type: "product",
    sourcePath: "/product/pluto-tail-bag-tank-bag-for-apache-rtx-300",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-apache-rtx-300/69e279ae5685096a33ad9791"
  },
  {
    type: "product",
    sourcePath: "/product/universal-6led-fog-light-zfl60",
    targetPath: "/product/fog-light/zana-universal-6led-fog-light-zfl-60/69e279ad5685096a33ad96b1"
  },
  {
    type: "product",
    sourcePath: "/product/pillion-backrest-cushion-small-for-cb300f",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-cushion-small-for-cb300f/69e279ad5685096a33ad9414"
  },
  {
    type: "product",
    sourcePath: "/product/rear-footrest-honda-cb300f-left-right",
    targetPath: "/product/ergonomics/zana-rear-footrest-left-right-for-cb300f/69e279ad5685096a33ad9415"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-bag-re-himalayan-450",
    targetPath: "/product/bags/zana-overlander-saddle-bag-for-himalayan-450/69e279ad5685096a33ad94ee"
  },
  {
    type: "product",
    sourcePath: "/product/universal-top-box-aluminium-22-ltr-rflat-silver",
    targetPath: "/product/top-box/zana-universal-top-box-aluminium-silver-22ltr-l-flat/69e279d95685096a33ad97d0"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-plate-for-yamaha-mt-15",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-for-yamaha-mt-15/69e279ad5685096a33ad94a3"
  },
  {
    type: "product",
    sourcePath: "/product/rear-footrest-for-gt-interceptor-650",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-gt-interceptor-650/69e279ad5685096a33ad9571"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-slider-orange-ktm-adv-390-2025",
    targetPath: "/product/bike-protection/zana-engine-guard-with-slider-orange-for-ktm-adv-390-2025/69e279ad5685096a33ad968a"
  },
  {
    type: "product",
    sourcePath: "/product/side-stand-extender-for-ktm-duke-390250200390-gen-3",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-ktm-duke-390-250-200-390-gen-3/69e279ad5685096a33ad94ce"
  },
  {
    type: "product",
    sourcePath: "/product/tripper-tank-bag-80-litre-for-ktm-duke-250-gen3",
    targetPath: "/product/bags/zana-tripper-tank-bag-8-0-litre-for-ktm-duke-250-390-gen-3/69e279ad5685096a33ad95bf"
  },
  {
    type: "product",
    sourcePath: "/product/rear-footrest-re-himalayan-450",
    targetPath: "/product/ergonomics/zana-rear-footrest-pair-for-himalayan-450/69e279ad5685096a33ad94fd"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-guerrilla-450-slider-black-texture-mild-steel-type1",
    targetPath: "/product/bike-protection/zana-crash-guard-for-guerrilla-450-with-slider-black-texture-mild-steel-type-1/69e279ad5685096a33ad95d6"
  },
  {
    type: "product",
    sourcePath: "/product/upper-lower-crash-guard-set-black-for-ktm-adv",
    targetPath: "/product/bike-protection/zana-upper-lower-crash-guard-set-black-for-ktm-adv-390-2025/69e279ad5685096a33ad969c"
  },
  {
    type: "product",
    sourcePath: "/product/offset-handle-bar-riser-silver-for-triumph-scrambler-400",
    targetPath: "/product/ergonomics/zana-offset-handlebar-riser-black-for-triumph-speed-400-speed-t4/69e279ad5685096a33ad949b"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/tail-tidy-for-triumph-street-triple-765",
    targetPath: "/product/bike-protection/z-pro-tail-tidy-for-triumph-street-triple-765/69e279ad5685096a33ad9583"
  },
  {
    type: "product",
    sourcePath: "/product/maximus-tail-bag-36-litre-single-dominar-250-dominar-400",
    targetPath: "/product/bags/zana-maximus-tail-bag-36-litre-single-for-dominar-250-400-2019-2022/69e279ad5685096a33ad9588"
  },
  {
    type: "product",
    sourcePath: "/product/aigis-hand-guard-for-tvs-apache-rtx-300-white",
    targetPath: "/product/bike-protection/zana-aigis-hand-guard-for-tvs-apache-rtx-300-white/69e279ae5685096a33ad97b7"
  },
  {
    type: "product",
    sourcePath: "/product/top-box-himalayan-450-45ltr-aluminium-black",
    targetPath: "/product/bike-protection/zana-radiator-guard-aluminium-black-for-himalayan-450/69e279ad5685096a33ad94e6"
  },
  {
    type: "product",
    sourcePath: "/product/bash-plate-honda-cb350-silver-aluminium",
    targetPath: "/product/bike-protection/zana-bash-plate-for-honda-cb350-rs-aluminum-black/69e279ae5685096a33ad97bd"
  },
  {
    type: "product",
    sourcePath: "/product/offset-handle-bar-riser-honda-cb300r-aluminum",
    targetPath: "/product/ergonomics/zana-offset-handle-bar-riser-aluminum-for-cb300r/69e279ad5685096a33ad9497"
  },
  {
    type: "product",
    sourcePath: "/product/honda-cb-300r-bash-plate-aluminium",
    targetPath: "/product/bike-protection/zana-honda-cb-300r-bash-plate-aluminium/69e279ad5685096a33ad93bb"
  },
  {
    type: "product",
    sourcePath: "/product/fog-light-mount-for-honda-cb350-rs",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-honda-cb350-rs/69e279ad5685096a33ad93eb"
  },
  {
    type: "product",
    sourcePath: "/product/panniers-for-himalayan-450-36ltr-aluminium-silver-with-frame",
    targetPath: "/product/luggage/zana-panniers-for-himalayan-450-36-ltr-aluminium-silver-with-frame/69e279ad5685096a33ad9504"
  },
  {
    type: "product",
    sourcePath: "/product/broozer-tail-bag-50-litre",
    targetPath: "/product/bags/zana-broozer-tail-bag-50-litre-himalayan-411/69e279ad5685096a33ad95a1"
  },
  {
    type: "product",
    sourcePath: "/product/tripper-tank-bag-80-litre-himalayan-411",
    targetPath: "/product/bags/zana-tripper-tank-bag-8-0-litre-for-himalayan-411/69e279ad5685096a33ad95a3"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-plate-compatible-with-pillion-backrest-cb350-hnesss-version2-plit-seatsingle-seat",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-v2-compatible-with-pillion-backrest-for-honda-cb-300-r-bs4-bs6/69e279ad5685096a33ad94a7"
  },
  {
    type: "product",
    sourcePath: "/product/panniers-for-super-meteor-650-with-frame-36ltr-black-aluminium-lflat",
    targetPath: "/product/luggage/zana-panniers-for-super-meteor-650-with-frame-aluminium-black-36-ltr-l-flat/69e279ad5685096a33ad9559"
  },
  {
    type: "product",
    sourcePath: "/product/universal-mobile-holder-without-charger",
    targetPath: "/product/mobile-holder/zana-universal-mobile-holder-without-charger/69e279ad5685096a33ad9541"
  },
  {
    type: "product",
    sourcePath: "/product/panniers-36-ltr-aluminium-rflat-black-with-frame-for-himalayan-411",
    targetPath: "/product/luggage/zana-panniers-36-ltr-aluminium-r-flat-black-with-frame-for-himalayan-411/69e279ad5685096a33ad955d"
  },
  {
    type: "product",
    sourcePath: "/product/roadster-saddle-stay-for-himalayan-450-with-jerry-can-mount-v2-mild-steel",
    targetPath: "/product/touring-essentials/zana-roadster-saddle-stay-for-himalayan-450-with-jerry-can-mount-v2-mild-steel/69e279ad5685096a33ad94ed"
  },
  {
    type: "product",
    sourcePath: "/product/paddock-stand-dominar-400-20172018-texture-matt-black",
    targetPath: "/product/touring-essentials/zana-saddle-stay-texture-matt-black-dominar-250-400-2019-22/69e279ad5685096a33ad92f0"
  },
  {
    type: "product",
    sourcePath: "/product/rear-paddock-spool-for-aprilia-rs-457",
    targetPath: "/product/side-stand-support/zana-rear-paddock-spool-for-aprilia-rs-457/69e279ae5685096a33ad971b"
  },
  {
    type: "product",
    sourcePath: "/product/toprack-ms-w1-compatible-with-pillion-backrest-scram-411-bs6-2022",
    targetPath: "/product/touring-essentials/zana-top-rack-for-scram-411-bs6-2022-ms-w-1-compatible-with-pillion-backrest/69e279ad5685096a33ad936a"
  },
  {
    type: "product",
    sourcePath: "/product/tripper-tank-bag-8litre-ktm-adv-390-2025",
    targetPath: "/product/bags/zana-tripper-tank-bag-8-0-litre-for-ktm-adv-390-2025/69e279ad5685096a33ad9694"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-stay-with-jerry-can-mount-dominar-250400-201922",
    targetPath: "/product/touring-essentials/zana-saddle-stay-with-jerry-can-mount-dominar-250-400-2019-22/69e279ad5685096a33ad939b"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/universal-stratos-tank-bag-6l-expandable-to-9l",
    targetPath: "/product/bags/zana-universal-stratos-tank-bag-6l-expandable-to-9l/69e279ae5685096a33ad96e3"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-for-kawasaki-klx-230-black",
    targetPath: "/product/bike-protection/zana-crash-guard-for-kawasaki-klx-230-black/69e279ae5685096a33ad978d"
  },
  {
    type: "product",
    sourcePath: "/product/pillion-backrest-harley-davidson-x440",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-hex-cushion-for-harley-davidson-x440/6a17e5b88bce4b00a14a76fa"
  },
  {
    type: "product",
    sourcePath: "/product/universal-gtx-tank-bag-16ltr-expandable-to-20ltr-for-apache-rtx-300",
    targetPath: "/product/bags/zana-universal-gtx-tank-bag-tail-bag-16ltr-expandable-to-20ltr-for-apache-rtx-300/69e279ae5685096a33ad978c"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-stays-ms-with-exhaust-sheild-with-jerry-can-mounting-texture-matt-black-for-gtinterceptor650",
    targetPath: "/product/touring-essentials/zana-saddle-stay-ms-with-exhaust-shield-with-jerry-can-mount-for-gt-interceptor-650-texture-matt-black/69e279ad5685096a33ad9341"
  },
  {
    type: "product",
    sourcePath: "/product/maximus-tail-bag-36-litre-single-bag",
    targetPath: "/product/bags/zana-maximus-tail-bag-36-litre-single-re-bear-650/69e279ad5685096a33ad9650"
  },
  {
    type: "product",
    sourcePath: "/product/backrest-honda-cb350",
    targetPath: "/product/touring-essentials/zana-backrest-for-honda-cb350/69e279ad5685096a33ad9372"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/paddock-spools-for-triumph-street-triple-765",
    targetPath: "/product/side-stand-support/z-pro-paddock-spools-for-triumph-street-triple-765/69e279ad5685096a33ad9581"
  },
  {
    type: "product",
    sourcePath: "/index.php/product/bash-plate-for-honda-cb350-rs-aluminum-black",
    targetPath: "/product/bike-protection/zana-bash-plate-for-honda-cb350-rs-aluminum-black/69e279ae5685096a33ad97bd"
  },
  {
    type: "product",
    sourcePath: "/product/front-fork-slider-for-km-adv-390",
    targetPath: "/product/bike-protection/zana-front-fork-slider-for-ktm-adv-390-2025/69e279ad5685096a33ad969a"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/saddle-stay-silver-for-triumph-tiger-900-rally-pro",
    targetPath: "/product/touring-essentials/z-pro-saddle-stay-silver-for-triumph-tiger-900-rally-pro/69e279ad5685096a33ad944d"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/upper-lower-crash-guard-set-red-for-bmw-f900-gs",
    targetPath: "/product/bike-protection/z-pro-upper-lower-crash-guard-set-for-bmw-f900-gs-black-coming-soon/69e279ae5685096a33ad9774"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-slider-orange-for-ktm-duke-390250200390-gen-3",
    targetPath: "/product/bike-protection/zana-crash-guard-with-slider-orange-for-ktm-duke-390-250-200-390-gen-3/69e279ad5685096a33ad94cd"
  },
  {
    type: "product",
    sourcePath: "/product/rear-footrest-re-meteor-350-steel",
    targetPath: "/product/ergonomics/zana-rear-footrest-steel-pair-for-meteor-350/69e279ad5685096a33ad94b0"
  },
  {
    type: "product",
    sourcePath: "/product/yezdi-adventure-saddle-stay-black",
    targetPath: "/product/touring-essentials/zana-yezdi-adventure-saddle-stay-black/69e279ad5685096a33ad9357"
  },
  {
    type: "product",
    sourcePath: "/product/tripper-tank-bag-80-litre-continental-gt-interceptor-650",
    targetPath: "/product/bags/zana-tripper-tank-bag-8-0-litre-for-continental-gt-interceptor-650/69e279ad5685096a33ad95f9"
  },
  {
    type: "product",
    sourcePath: "/product/vertical-handle-riser-dominar-400",
    targetPath: "/product/ergonomics/zana-vertical-handle-riser-dominar-400/69e279ad5685096a33ad9314"
  },
  {
    type: "product",
    sourcePath: "/product/universal-mobile-holder-with-usb-charger",
    targetPath: "/product/mobile-holder/zana-universal-mobile-holder-with-usb-charger/69e279ad5685096a33ad953f"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-bsa-goldstar-650-with-pillion-backrest-steel-black-type2",
    targetPath: "/product/touring-essentials/zana-top-rack-for-bsa-goldstar-650-with-pillion-back-rest-mild-steel-black-type-1/69e279ad5685096a33ad962d"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-plate-w1-ms-compatible-with-pillion-backrest-for-royal-enfield-hunter-350",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-w-1-ms-compatible-with-pillion-backrest-for-royal-enfield-hunter-350/69e279ad5685096a33ad93f2"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/frame-slider-for-triumph-street-triple-765",
    targetPath: "/product/bike-protection/z-pro-frame-slider-for-triumph-street-triple-765/69e279ad5685096a33ad957f"
  },
  {
    type: "product",
    sourcePath: "/product/back-rest-black-for-for-triumph-scrambler-400-x",
    targetPath: "/product/bags/zana-broozer-tail-bag-50-litre-for-triumph-scrambler-400/69e279ad5685096a33ad95a8"
  },
  {
    type: "product",
    sourcePath: "/product/universal-slider-puck",
    targetPath: "/product/bike-protection/zana-universal-slider-puck/69e279ad5685096a33ad9441"
  },
  {
    type: "product",
    sourcePath: "/product/vertical-handlebar-riser-for-tvs-apache-rtx-300-silver",
    targetPath: "/product/ergonomics/zana-vertical-handlebar-riser-for-tvs-apache-rtx-300-silver/69e279ae5685096a33ad97b8"
  },
  {
    type: "product",
    sourcePath: "/product/universal-led-fog-light-zfl50",
    targetPath: "/product/fog-light/zana-universal-led-fog-light-zfl-50/69e279ad5685096a33ad9614"
  },
  {
    type: "product",
    sourcePath: "/product/radiator-guard-for-jawa-bobber-42-honeycomb-black-aluminium",
    targetPath: "/product/bike-protection/zana-radiator-guard-for-jawa-bobber-42-honeycomb-black-aluminium/69e279ae5685096a33ad973b"
  },
  {
    type: "product",
    sourcePath: "/product/sliders-pair-crash-guard-ktm-duke-250-390",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-ktm-duke-250-390/69e279ad5685096a33ad966d"
  },
  {
    type: "product",
    sourcePath: "/product/top-box-aluminium-22-litre-r-flat-silver-for-honda-rebel-500",
    targetPath: "/product/top-box/zana-universal-top-box-aluminium-22-litre-r-flat-silver/69e279d95685096a33ad97de"
  },
  {
    type: "product",
    sourcePath: "/product/pillion-backrest-for-ktm-adventure-250390",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-ktm-adventure-250-390/69e279ad5685096a33ad9473"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-stays-mild-steel-with-exhaust-sheild-with-jerry-can-mounting-texture-matt-black-for-classic-350-reborn",
    targetPath: "/product/touring-essentials/zana-saddle-stays-mild-steel-with-exhaust-sheild-with-jerry-can-mounting-texture-matt-black-for-classic-350-reborn/69e279ad5685096a33ad9476"
  },
  {
    type: "product",
    sourcePath: "/product/roadster-saddle-bag-30-litre-single-60-litre-pair-bag-himalayan-411",
    targetPath: "/product/bags/zana-drake-universal-fabric-saddle-bag-32-litre-single-64-litre-pair-bag-for-himalayan-411/69e279ad5685096a33ad95a5"
  },
  {
    type: "product",
    sourcePath: "/product/front-fork-sliders-adventure-250390-390-x",
    targetPath: "/product/bike-protection/zana-front-fork-sliders-adventure-250-390-390-x/69e279ad5685096a33ad9320"
  },
  {
    type: "product",
    sourcePath: "/product/pillion-backrest-for-bear-650",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-hex-cushion-for-bear-650/6a168c0110cace8659fb6df6"
  },
  {
    type: "product",
    sourcePath: "/product/upper-lower-crash-guard-set-orange-for-ktm-adv-390",
    targetPath: "/product/bike-protection/zana-upper-lower-crash-guard-set-orange-for-ktm-adv-390-2025/69e279ad5685096a33ad969b"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/side-stand-extender-rally-pro-aluminium-stainless-steel",
    targetPath: "/product/side-stand-support/z-pro-side-stand-extender-for-tiger-900-rally-pro-aluminium-stainless-steel/6a131adfdacf4bb0c25c6f6a"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/back-rest-with-parcel-shelf-for-triumph-street-twin",
    targetPath: "/product/touring-essentials/z-pro-back-rest-with-parcel-shelf-for-triumph-street-twin-900cc/69e279ad5685096a33ad93f8"
  },
  {
    type: "product",
    sourcePath: "/product/mirror-extender-for-honda-cb-350-2025",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-honda-cb-350-2025/69e279ae5685096a33ad974d"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-plate-for-xoom-160",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-for-xoom-160/69e279ae5685096a33ad9735"
  },
  {
    type: "product",
    sourcePath: "/product/bash-plate-ktm-adventure-250-aluminium-black",
    targetPath: "/product/bike-protection/zana-new-bashplate-v3-aluminium-black-ktm-adventure-250-390-390-x/69e279ad5685096a33ad9481"
  },
  {
    type: "product",
    sourcePath: "/index.php/product/drake-saddle-stay-for-honda-cb350-rs-black",
    targetPath: "/product/touring-essentials/zana-drake-saddle-stay-for-honda-cb350-rs-black/69e279ae5685096a33ad97bb"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-slider-black-ms-for-royal-enfield-hunter-350",
    targetPath: "/product/bike-protection/zana-crash-guard-with-slider-black-ms-for-royal-enfield-hunter-350/69e279ad5685096a33ad93bd"
  },
  {
    type: "product",
    sourcePath: "/product/fog-light-mount-ms-for-meteor-350",
    targetPath: "/product/fog-light/zana-fog-light-mount-ms-for-meteor-350/69e279ad5685096a33ad950f"
  },
  {
    type: "product",
    sourcePath: "/product/vader-hard-shell-tail-bag-65-litre-super-meteor-650",
    targetPath: "/product/bags/zana-vader-hard-shell-tail-bag-65-litre-for-super-meteor-650/69e279ad5685096a33ad95d0"
  },
  {
    type: "product",
    sourcePath: "/product/universal-fog-light-mount",
    targetPath: "/product/fog-light/zana-universal-fog-light-mount/69e279ad5685096a33ad9664"
  },
  {
    type: "product",
    sourcePath: "/product/new-top-rack-with-aluminium-plate-and-compatible-with-pillion-backrest-for-gt-interceptor-650",
    targetPath: "/product/touring-essentials/zana-new-top-rack-with-aluminum-plate-and-compatible-with-pillion-backrest-for-gt-interceptor-650/69e279ad5685096a33ad934c"
  },
  {
    type: "product",
    sourcePath: "/product/ktm-adv-390-2025-fog-light-mounting-kit",
    targetPath: "/product/fog-light/zana-ktm-adv-390-2025-fog-light-mounting-kit/69e279ae5685096a33ad96f8"
  },
  {
    type: "product",
    sourcePath: "/product/tripper-tank-bag-80-litre-super-meteor-650",
    targetPath: "/product/bags/zana-tripper-tank-bag-8-0-litre-for-super-meteor-650/69e279ad5685096a33ad95e8"
  },
  {
    type: "product",
    sourcePath: "/product/mudguard-riser-gtinterceptor-650",
    targetPath: "/product/bike-protection/zana-mudguard-riser-for-gt-interceptor-650/69e279ad5685096a33ad9307"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/engine-guard-for-triumph-speed-twin",
    targetPath: "/product/bike-protection/z-pro-engine-guard-for-triumph-speed-twin-900/69e279ad5685096a33ad947d"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/universal-weekender-tail-bag-32-liters-expandable-to-39-liters",
    targetPath: "/product/bags/zana-universal-weekender-tail-bag-32-liters-expandable-to-39-liters/69e279ae5685096a33ad96e9"
  },
  {
    type: "product",
    sourcePath: "/product/roadster-saddle-bag-60-litres-pair-bag-30-litre-each-for-tvs-apache-rtx-300",
    targetPath: "/product/bags/zana-roadster-2-saddle-bag-50ltr-pair-bag-25ltr-each-for-tvs-apache-rtx-300/69e279ae5685096a33ad97a3"
  },
  {
    type: "product",
    sourcePath: "/product/ktm-duke-250390-20192022-front-fluid-reservoir-oil-cover",
    targetPath: "/product/bike-protection/zana-ktm-duke-250-390-2019-2022-front-fluid-reservoir-oil-cover/69e279ad5685096a33ad93b6"
  },
  {
    type: "product",
    sourcePath: "/product/top-box-super-meteor-650-35ltr-aluminium-black",
    targetPath: "/product/bike-protection/zana-bash-plate-for-super-meteor-650-aluminum-black/69e279ad5685096a33ad941c"
  },
  {
    type: "product",
    sourcePath: "/product/roadster-saddle-stay-with-jerry-can-mount-for-honda-cb-350-2025",
    targetPath: "/product/touring-essentials/zana-roadster-saddle-stay-with-jerry-can-mount-for-honda-cb-350-2025/69e279ae5685096a33ad974a"
  },
  {
    type: "product",
    sourcePath: "/product/roadster-saddle-stay-with-exhaust-sheild-with-jerry-can-mount-for-himalayan-411",
    targetPath: "/product/touring-essentials/zana-roadster-saddle-stay-with-exhaust-sheild-with-jerry-can-mount-for-himalayan-411-scram-411/69e279ad5685096a33ad9562"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-stay-bmw-f900-gs-gsa-black",
    targetPath: "/product/touring-essentials/z-pro-saddle-stay-for-bmw-f900-gs-gsa-black/69e279ad5685096a33ad963b"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/upper-crash-bars-silver-for-bmw-f850-gsa",
    targetPath: "/product/bike-protection/z-pro-upper-crash-bars-silver-for-bmw-f850-gsa/69e279ad5685096a33ad9461"
  },
  {
    type: "product",
    sourcePath: "/product/hand-guard-for-ktm-adv-390-2025-white-with-oange-logo",
    targetPath: "/product/bike-protection/zana-hand-guard-for-ktm-adv-390-2025-white-with-orange-logo-coming-soon/69e279ae5685096a33ad97bf"
  },
  {
    type: "product",
    sourcePath: "/product/yezdi-adventure-leg-guard-with-slider-black-lower",
    targetPath: "/product/bike-protection/zana-yezdi-adventure-leg-guard-with-slider-black-lower/69e279ad5685096a33ad9352"
  },
  {
    type: "product",
    sourcePath: "/product/royal-enfield-hunter-350-headlight-guard-stainlesssteel",
    targetPath: "/product/bike-protection/zana-royal-enfield-hunter-350-headlight-guard-stainless-steel/69e279ad5685096a33ad93c2"
  },
  {
    type: "product",
    sourcePath: "/product/paddock-stand-ms-gtinterceptor-650-texture-matt-black",
    targetPath: "/product/touring-essentials/zana-saddle-stay-ms-texture-matt-black-for-gt-interceptor-650/69e279ad5685096a33ad92d4"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/broozer-tail-bag-50-litre",
    targetPath: "/product/bags/zana-broozer-tail-bag-50-litre-himalayan-411/69e279ad5685096a33ad95a1"
  },
  {
    type: "product",
    sourcePath: "/product/mirror-extender-aluminum-for-super-meteor-650",
    targetPath: "/product/ergonomics/zana-mirror-extender-aluminum-for-super-meteor-650/69e279ad5685096a33ad947f"
  },
  {
    type: "product",
    sourcePath: "/product/new-angular-handle-bar-riser-aluminum-for-scram-411",
    targetPath: "/product/ergonomics/zana-new-angular-handle-bar-riser-aluminum-for-scram-411/69e279ad5685096a33ad9448"
  },
  {
    type: "product",
    sourcePath: "/product/rear-footrest-pair-ms-for-x-pulse-210",
    targetPath: "/product/ergonomics/zana-rear-footrest-pair-ms-for-x-pulse-210/69e279ae5685096a33ad96c8"
  },
  {
    type: "product",
    sourcePath: "/product/leg-guard-ms-with-slider-texture-matt-black-himalayan-bs6-202123",
    targetPath: "/product/bike-protection/zana-leg-guard-ms-with-slider-texture-matt-black-himalayan-bs6-2021-23/69e279ad5685096a33ad92f4"
  },
  {
    type: "product",
    sourcePath: "/product/leg-guard-crash-guard-re-bear-650-with-slider-black",
    targetPath: "/product/bike-protection/zana-crash-guard-with-slider-for-bear-650-ms-black/69e279ad5685096a33ad9616"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-ms-plate-ktm-adv-390-2025",
    targetPath: "/product/touring-essentials/zana-top-rack-with-ms-plate-black-for-ktm-adv-390-2025/69e279ad5685096a33ad9691"
  },
  {
    type: "product",
    sourcePath: "/product/rear-footrest-re-super-meteor650",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-super-meteor-650-pair-ms/69e279ad5685096a33ad9457"
  },
  {
    type: "product",
    sourcePath: "/product/panniers-36-ltr-aluminium-l-flat-black-with-frame-for-himalayan-450",
    targetPath: "/product/luggage/zana-panniers-36-ltr-aluminium-l-flat-black-with-frame-for-himalayan-450/69e279ad5685096a33ad96ae"
  },
  {
    type: "product",
    sourcePath: "/product/pillion-backrest-pulsar-ns400z",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-pulsar-ns-400z/69e279ad5685096a33ad9628"
  },
  {
    type: "product",
    sourcePath: "/product/overlander-saddle-bag-for-super-meteor-650",
    targetPath: "/product/bags/zana-overlander-saddle-bag-for-super-meteor-650/69e279ad5685096a33ad94bc"
  },
  {
    type: "product",
    sourcePath: "/product/engine-frame-texture-matt-black-himalayan-compatible-with-scram-411-bs6-202122",
    targetPath: "/product/bike-protection/zana-engine-frame-texture-matt-black-himalayan-compatible-with-scram-411-bs6-2021-22/69e279ad5685096a33ad92f5"
  },
  {
    type: "product",
    sourcePath: "/product/brat-with-rod-handle-bar-interceptor-650",
    targetPath: "/product/bike-protection/zana-single-rod-crash-bar-gt-interceptor-650/69e279ad5685096a33ad932d"
  },
  {
    type: "product",
    sourcePath: "/product/roadster-saddle-stay-with-exhaust-sheild-with-jerry-can-mount-for-honda-nx500",
    targetPath: "/product/touring-essentials/zana-roadster-saddle-stay-with-exhaust-sheild-with-jerry-can-mount-for-honda-nx500/69e279ad5685096a33ad9574"
  },
  {
    type: "product",
    sourcePath: "/product/backrest-honda-cb350-with-parcel-shelf",
    targetPath: "/product/touring-essentials/zana-backrest-hex-cushion-with-parcel-shelf-for-honda-cb-350/69e279ae5685096a33ad96e0"
  },
  {
    type: "product",
    sourcePath: "/product/frame-slider-small-wing-for-aprilia-rs-457",
    targetPath: "/product/bike-protection/zana-frame-slider-small-wing-for-aprilia-rs-457/69e279ae5685096a33ad97c3"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-plate-v2-compatible-with-pillion-backrest-for-honda-cb-300-r-bs4bs6",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-v2-compatible-with-pillion-backrest-for-honda-cb-300-r-bs4-bs6/69e279ad5685096a33ad94a7"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-plate-himalayan411-small-bs6",
    targetPath: "/product/touring-essentials/zana-toprack-plate-small-himalayan-bs6-2021-ms/69e279ad5685096a33ad92fa"
  },
  {
    type: "product",
    sourcePath: "/product/pillion-backrest-classic-350500-659",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-classic-350-500/69e279ad5685096a33ad9334"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/side-stand-extender-for-triumph-street-scrambler-900",
    targetPath: "/product/side-stand-support/z-pro-side-stand-extender-for-triumph-street-scrambler-900/69e279ad5685096a33ad949f"
  },
  {
    type: "product",
    sourcePath: "/product/bash-plate-guerrilla-450-ms-black",
    targetPath: "/product/bike-protection/zana-bash-plate-for-guerrilla-450-ms-black/69e279ad5685096a33ad95d8"
  },
  {
    type: "product",
    sourcePath: "/product/mudguard-riser-scram-411-bs6-2022",
    targetPath: "/product/bike-protection/zana-mudguard-riser-scram-411-bs6-2022/69e279ad5685096a33ad9369"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-bsa-goldstar-650-with-slider-puck-steel-black",
    targetPath: "/product/bike-protection/zana-crash-guard-for-bsa-goldstar-650-with-slider-puck-mild-steel-black/69e279ad5685096a33ad9622"
  },
  {
    type: "product",
    sourcePath: "/product/roadster-saddle-bag-30-litre-single-60-litre-pair-bag-for-ktm-adventure-250",
    targetPath: "/product/bags/zana-drake-universal-fabric-saddle-bag-32-litre-single-64-litre-pair-bag-for-ktm-adv-250-390/69e279ad5685096a33ad95ba"
  },
  {
    type: "product",
    sourcePath: "/product/hand-guard-for-triumph-scrambler-400-x-white",
    targetPath: "/product/bike-protection/zana-hand-guard-white-for-triumph-scrambler-400-x-scrambler-400-xc-tracker-400/69e279ae5685096a33ad96fc"
  },
  {
    type: "product",
    sourcePath: "/product/broozer-tail-bag-50-litre-harley-davidson-x440",
    targetPath: "/product/bags/zana-broozer-tail-bag-50-litre-for-harley-davidson-x440/69e279ad5685096a33ad95f1"
  },
  {
    type: "product",
    sourcePath: "/product/mirror-extender-for-ktm-adv-390250",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-ktm-adv-390-250-g-1/69e279ad5685096a33ad946f"
  },
  {
    type: "product",
    sourcePath: "/product/panniers-36-ltr-aluminium-lflat-black-with-frame-for-suzuki-vstrom-250",
    targetPath: "/product/luggage/zana-panniers-36-ltr-aluminium-r-flat-black-with-frame-for-suzuki-v-strom-250/69e279ad5685096a33ad9550"
  },
  {
    type: "product",
    sourcePath: "/product/backrest-sheet-metal-for-super-meteor-650",
    targetPath: "/product/touring-essentials/zana-backrest-sheet-metal-for-super-meteor-650/69e279ad5685096a33ad9470"
  },
  {
    type: "product",
    sourcePath: "/product/roadster-saddle-stay-for-yezdi-adventure-2025-black",
    targetPath: "/product/touring-essentials/zana-roadster-saddle-stay-with-jerry-can-mount-for-yezdi-adventure-2025-black/69e279ae5685096a33ad9704"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-slider-for-honda-cb-350-2025-texture-matt-black",
    targetPath: "/product/bike-protection/zana-crash-guard-v-2-with-slider-for-honda-cb-350-2025-texture-matt-black/6a43ceba54bc92ff52b1f7b6"
  },
  {
    type: "product",
    sourcePath: "/product/pluto-tail-bag-tank-bag",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag/69e279ad5685096a33ad9568"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/frame-slider-suzuki-hayabusa-1300-black",
    targetPath: "/product/bike-protection/z-pro-front-fork-slider-for-suzuki-hayabusa-1300/69e279ad5685096a33ad94d5"
  },
  {
    type: "product",
    sourcePath: "/product/yezdi-scrambler-leg-guard-with-slider-black",
    targetPath: "/product/bike-protection/zana-yezdi-adventure-leg-guard-with-slider-black-lower/69e279ad5685096a33ad9352"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/paddock-spools-for-suzuki-hayabusa-1300",
    targetPath: "/product/side-stand-support/z-pro-paddock-spools-for-suzuki-hayabusa-1300/69e279ad5685096a33ad94d2"
  },
  {
    type: "product",
    sourcePath: "/product/universal-mobile-holder-with-usb-charger-rex",
    targetPath: "/product/mobile-holder/zana-universal-mobile-holder-with-usb-charger-rex/69e279ad5685096a33ad96b7"
  },
  {
    type: "product",
    sourcePath: "/product/tripper-tank-bag-80-litre-harley-davidson-x440",
    targetPath: "/product/bags/zana-tripper-tank-bag-8-0-litre-for-harley-davidson-x440/69e279ad5685096a33ad95f3"
  },
  {
    type: "product",
    sourcePath: "/product/bashplate-ktm-adventure-250-aluminium-black-new",
    targetPath: "/product/bike-protection/zana-new-bashplate-v3-aluminium-black-ktm-adventure-250-390-390-x/69e279ad5685096a33ad9481"
  },
  {
    type: "product",
    sourcePath: "/product/mirror-extender-re-meteor-350-aluminium",
    targetPath: "/product/ergonomics/zana-mirror-extender-aluminium-for-meteor-350/69e279ad5685096a33ad94f1"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-new-plate-compatible-with-pillion-backrest-texture-matt-black-dominar-201718",
    targetPath: "/product/touring-essentials/zana-top-rack-with-new-plate-compatible-with-pillion-backrest-texture-matt-black-dominar-2017-18/69e279ad5685096a33ad93b0"
  },
  {
    type: "product",
    sourcePath: "/product/honda-nx500-number-plate-mount",
    targetPath: "/product/accessories/zana-number-plate-mount-for-honda-nx500/69e279ad5685096a33ad960b"
  },
  {
    type: "product",
    sourcePath: "/product/toprack-plate-small-xpulse200-bs6",
    targetPath: "/product/touring-essentials/zana-toprack-plate-small-xpulse200-bs6/69e279ad5685096a33ad9301"
  },
  {
    type: "product",
    sourcePath: "/product/radiator-guard-ktm-adventure-250-texture-matt-black-aluminium",
    targetPath: "/product/bike-protection/zana-radiator-guard-texture-matt-black-ktm-adv-250-390-390-x-aluminium/69e279ad5685096a33ad92e7"
  },
  {
    type: "product",
    sourcePath: "/index.php/zpro/product/upper-lower-crash-guard-set-black-for-bmw-f900-gs",
    targetPath: "/product/bike-protection/z-pro-upper-lower-crash-guard-set-for-bmw-f900-gs-black-coming-soon/69e279ae5685096a33ad9774"
  },
  {
    type: "product",
    sourcePath: "/index.php/product/top-rack-with-new-plate-compatible-with-pillion-backrest-texture-matt-black-dominar-201718",
    targetPath: "/product/touring-essentials/zana-top-rack-with-new-plate-compatible-with-pillion-backrest-texture-matt-black-dominar-2017-18/69e279ad5685096a33ad93b0"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-slider-black-for-yamaha-mt-15",
    targetPath: "/product/bike-protection/zana-crash-guard-with-slider-black-for-yamaha-mt-15/69e279ad5685096a33ad94a2"
  },
  {
    type: "product",
    sourcePath: "/product/fog-light-mount-for-himalayan-bs6-2021",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-himalayan-bs6-2021/69e279ad5685096a33ad9330"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-ms-plate-pulsar-ns400z",
    targetPath: "/product/touring-essentials/zana-top-rack-with-ms-plate-for-pulsar-ns400z/69e279ad5685096a33ad960c"
  },
  {
    type: "product",
    sourcePath: "/product/mirror-extender-ktm-duke-390",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-ktm-enduro-390-black/69e279ae5685096a33ad9751"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-type-1-black-with-plate-dominar-2017-18",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-type-1-texture-matt-black-ktm-adv-390/69e279ad5685096a33ad92eb"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-re-super-meteor-650-ms-with-pillion-backrest",
    targetPath: "/product/touring-essentials/zana-top-rack-sheet-metal-with-pillion-backrest-for-super-meteor-650/69e279ad5685096a33ad9451"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/frame-slider-for-kawasaki-z900",
    targetPath: "/product/bike-protection/z-pro-frame-slider-for-kawasaki-z-900/69e279ad5685096a33ad9401"
  },
  {
    type: "product",
    sourcePath: "/product/fog-light-mount-ms-for-super-meteor-650",
    targetPath: "/product/fog-light/zana-fog-light-mount-ms-for-super-meteor-650/69e279ad5685096a33ad9491"
  },
  {
    type: "product",
    sourcePath: "/product/retro-saddle-bag-for-honda-cb-350",
    targetPath: "/product/bags/zana-retro-saddle-bag-for-honda-cb-350/69e279ad5685096a33ad94bb"
  },
  {
    type: "product",
    sourcePath: "/product/broozer-tail-bag-50-litre-himalayan-411",
    targetPath: "/product/bags/zana-broozer-tail-bag-50-litre-himalayan-411/69e279ad5685096a33ad95a1"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-texture-matt-black-dominar-400250-20172018",
    targetPath: "/product/bike-protection/zana-crash-guard-with-slider-texture-matt-black-dominar-400-250-2017-2018/69e279ad5685096a33ad931a"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-for-super-meteor-650-with-slider",
    targetPath: "/product/bike-protection/zana-crash-guard-for-super-meteor-650-with-slider-ms-type-2/69e279ad5685096a33ad9465"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/engine-guard-for-triumph-street-scrambler-900",
    targetPath: "/product/bike-protection/z-pro-engine-guard-for-triumph-street-scrambler-900/69e279ad5685096a33ad93e3"
  },
  {
    type: "product",
    sourcePath: "/product/paddock-stand-duke-200-bs6-202122-texture-matt-black",
    targetPath: "/product/touring-essentials/zana-saddle-stay-with-jerry-can-mount-duke-200-bs6-texture-matt-black-2019-2022/69e279ad5685096a33ad934f"
  },
  {
    type: "product",
    sourcePath: "/product/single-rod-crash-bar-gt-interceptor-650",
    targetPath: "/product/bike-protection/zana-single-rod-crash-bar-gt-interceptor-650/69e279ad5685096a33ad932d"
  },
  {
    type: "product",
    sourcePath: "/product/tripper-tank-bag-80-litre-triumph-scrambler-400",
    targetPath: "/product/bags/zana-tripper-tank-bag-8-0-litre-for-triumph-scrambler-400/69e279ad5685096a33ad95aa"
  },
  {
    type: "product",
    sourcePath: "/product/side-stand-extender-for-x-pulse-210",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-x-pulse-210/69e279ae5685096a33ad96c5"
  },
  {
    type: "product",
    sourcePath: "/product/mirror-extender-harley-davidson-x440",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-harley-davidson-x440/69e279ad5685096a33ad953d"
  },
  {
    type: "product",
    sourcePath: "/product/guerrilla450-top-box-aluminium-22litre-lflat-black",
    targetPath: "/product/top-box/zana-universal-top-box-aluminium-black-22ltr-l-flat/69e279d95685096a33ad97cf"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/number-plate-mount-for-bmw-f900-gs-gsa",
    targetPath: "/product/accessories/z-pro-number-plate-mount-for-bmw-f900-gs-gsa/69e279ad5685096a33ad96a4"
  },
  {
    type: "product",
    sourcePath: "/product/fog-light-mount-for-harley-davidson-x440",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-harley-davidson-x440/69e279ad5685096a33ad953c"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-stay-bajaj-dominar400-texture-matt-black",
    targetPath: "/product/touring-essentials/zana-saddle-stay-for-dominar-400-texture-matt-black-2017-18/69e279ad5685096a33ad92ee"
  },
  {
    type: "product",
    sourcePath: "/product/backrest-with-parcel-shelf-mild-steel-for-royal-enfield-hunter-350",
    targetPath: "/product/touring-essentials/zana-backrest-with-parcel-shelf-mild-steel-for-royal-enfield-hunter-350/69e279ad5685096a33ad93f1"
  },
  {
    type: "product",
    sourcePath: "/product/vetrical-handlebar-riser-for-honda-cb200x",
    targetPath: "/product/ergonomics/zana-vetrical-handlebar-riser-for-honda-cb200x/69e279ad5685096a33ad957d"
  },
  {
    type: "product",
    sourcePath: "/product/mirror-extender-for-suzuki-v-strom-250",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-suzuki-v-strom-250/69e279ad5685096a33ad9464"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/universal-gel-seat-cushion-medium-770grm",
    targetPath: "/product/gel-seat/zana-universal-gel-seat-cushion-medium-770grm/69e279ad5685096a33ad95ff"
  },
  {
    type: "product",
    sourcePath: "/product/engine-guard-with-slider-white-for-ktm-adv-390-2025",
    targetPath: "/product/bike-protection/zana-lower-engine-guard-with-slider-white-for-ktm-adv-390-2025/69e279ad5685096a33ad96b5"
  },
  {
    type: "product",
    sourcePath: "/product/gps-mount-for-honda-cb200x",
    targetPath: "/product/accessories/zana-gps-mount-for-honda-cb200x/69e279ad5685096a33ad96b0"
  },
  {
    type: "product",
    sourcePath: "/product/mudguard-riser-himalayan-20162020",
    targetPath: "/product/bike-protection/zana-mudguard-riser-for-himalayan-2016-2020/69e279ad5685096a33ad9304"
  },
  {
    type: "product",
    sourcePath: "/product/toprack-ms-w1-compatible-with-pillion-backrest-himalayan-bs6-201620",
    targetPath: "/product/touring-essentials/zana-top-rack-ms-w-1-compatible-with-pillion-backrest-himalayan-bs6-2016-20/69e279ad5685096a33ad9349"
  },
  {
    type: "product",
    sourcePath: "/product/front-fork-slider-re-bear-650",
    targetPath: "/product/bike-protection/zana-front-fork-slider-for-bear-650/69e279ad5685096a33ad9624"
  },
  {
    type: "product",
    sourcePath: "/product/mirror-extender-aluminum-for-classic-350-reborn",
    targetPath: "/product/ergonomics/zana-mirror-extender-aluminum-for-classic-350-reborn/69e279ad5685096a33ad9471"
  },
  {
    type: "product",
    sourcePath: "/product/roadster-saddle-bag-30-litre-single-60-litre-pair-bag-himalayan-450",
    targetPath: "/product/bags/zana-drake-universal-fabric-saddle-bag-32-litre-single-64-litre-pair-bag-for-himalayan-450/69e279ad5685096a33ad959a"
  },
  {
    type: "product",
    sourcePath: "/product/tripper-tank-bag-80-litre-for-tvs-apache-rtx-300",
    targetPath: "/product/bags/zana-tripper-tank-bag-8-0-litre-for-tvs-apache-rtx-300/69e279ae5685096a33ad978a"
  },
  {
    type: "product",
    sourcePath: "/index.php/product/crash-guard-with-slider-for-xpulse-200",
    targetPath: "/product/bike-protection/zana-crash-guard-with-slider-for-x-pulse-200/69e279ad5685096a33ad9467"
  },
  {
    type: "product",
    sourcePath: "/product/rear-fluid-reservoir-cover-for-honda-cb-350",
    targetPath: "/product/bike-protection/zana-rear-fluid-reservoir-cover-for-honda-cb-350/69e279ad5685096a33ad9410"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/offset-handle-bar-riser-bmw-f900-gs-gsa",
    targetPath: "/product/ergonomics/z-pro-offset-handle-bar-riser-for-bmw-f900-gs-gsa/69e279ad5685096a33ad9639"
  },
  {
    type: "product",
    sourcePath: "/product/universal-led-fog-light-drl-r40",
    targetPath: "/product/fog-light/zana-universal-led-fog-light-drl-r-40/69e279ae5685096a33ad96bb"
  },
  {
    type: "product",
    sourcePath: "/product/honda-cb350-rs-new-pillion-backrest-cushion-big",
    targetPath: "/product/touring-essentials/zana-honda-cb350-rs-new-pillion-backrest-cushion-big/69e279ad5685096a33ad939d"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-plate-guerrilla-450-black",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-for-guerrilla-450-black/69e279ad5685096a33ad95e6"
  },
  {
    type: "product",
    sourcePath: "/product/panniers-36-ltr-aluminium-lflat-black-with-frame-for-ktm-adv-250390",
    targetPath: "/product/luggage/zana-panniers-36-ltr-aluminium-l-flat-black-with-frame-for-ktm-adv-250-390/69e279ad5685096a33ad9555"
  },
  {
    type: "product",
    sourcePath: "/product/roadster-saddle-stay-jerry-can-mount-guerrilla-450-black-texture",
    targetPath: "/product/touring-essentials/zana-roadster-saddle-stay-with-jerry-can-mount-for-guerrilla-450-black-texture/69e279ad5685096a33ad95e5"
  },
  {
    type: "product",
    sourcePath: "/product/bash-plate-for-jawa-bobber-42-aluminium-black",
    targetPath: "/product/bike-protection/zana-bash-plate-for-jawa-bobber-42-aluminium-black/69e279ae5685096a33ad973a"
  },
  {
    type: "product",
    sourcePath: "/product/yezdi-adventure-master-cylender-silver-aluminium",
    targetPath: "/product/bike-protection/zana-yezdi-adventure-bash-plate-silver-aluminium/69e279ad5685096a33ad9355"
  },
  {
    type: "product",
    sourcePath: "/product/drake-universal-fabric-saddle-bag-32-litre-single-bag",
    targetPath: "/product/bags/zana-drake-universal-fabric-saddle-bag-32-litre-single-bag/69e279ad5685096a33ad956a"
  },
  {
    type: "product",
    sourcePath: "/product/retro-saddle-bag-for-gt-interceptor-650",
    targetPath: "/product/bags/zana-retro-saddle-bag-for-gt-interceptor-650/69e279ad5685096a33ad94b3"
  },
  {
    type: "product",
    sourcePath: "/product/rear-fluid-reservoir-cover-for-honda-cb-350-rs",
    targetPath: "/product/bike-protection/zana-rear-fluid-reservoir-cover-for-honda-cb-350-rs/69e279ad5685096a33ad94e0"
  },
  {
    type: "product",
    sourcePath: "/product/sliders-pair-crash-guard-harley-davidson-x440",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-harley-davidson-x440/69e279ad5685096a33ad9667"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-plate-type2-texture-matt-black-ktm-adv-250-390-390-x",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-type-2-texture-matt-black-ktm-adv-250-390-390-x/69e279ad5685096a33ad92ec"
  },
  {
    type: "product",
    sourcePath: "/product/new-bash-plate-aluminum-himalayan-bs6-202122-black",
    targetPath: "/product/bike-protection/new-bash-plate-aluminum-himalayan-bs6-2021-22-black/69f86a7f6f8d6277f9a84e90"
  },
  {
    type: "product",
    sourcePath: "/product/drake-saddle-stay-glossy-red-for-x-pulse-210",
    targetPath: "/product/touring-essentials/zana-drake-saddle-stay-glossy-red-for-x-pulse-210/69e279ae5685096a33ad96c2"
  },
  {
    type: "product",
    sourcePath: "/product/bash-plate-triumph-speed-400-black",
    targetPath: "/product/bike-protection/zana-bash-plate-ms-for-triumph-speed-400/69e279ad5685096a33ad94a0"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/top-rack-plate-for-triumph-tiger-900-rally-pro",
    targetPath: "/product/touring-essentials/z-pro-top-rack-plate-v-2-for-triumph-tiger-900-rally-pro/69e279ad5685096a33ad9685"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-ms-for-super-meteor-650",
    targetPath: "/product/bike-protection/zana-crash-guard-ms-for-super-meteor-650/69e279ad5685096a33ad9429"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-slider-texture-matt-black-honda-cb300f",
    targetPath: "/product/bike-protection/zana-crash-guard-with-slider-texture-matt-black-honda-cb300f/69e279ad5685096a33ad93fc"
  },
  {
    type: "product",
    sourcePath: "/product/broozer-tail-bag-50-litre-ktm-adventure-250",
    targetPath: "/product/bags/zana-broozer-tail-bag-50-litre-for-ktm-adv-250-390/69e279ad5685096a33ad95b6"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/top-rack-plate-big-for-triumph-street-scrambler-900",
    targetPath: "/product/touring-essentials/z-pro-top-rack-plate-big-for-triumph-street-scrambler-900/69e279ad5685096a33ad93f6"
  },
  {
    type: "product",
    sourcePath: "/product/tripper-tank-bag-re-bear-650-80litre",
    targetPath: "/product/bags/zana-tripper-tank-bag-8-0-litre-for-re-bear-650/69e279ad5685096a33ad964f"
  },
  {
    type: "product",
    sourcePath: "/product/backrest-cb350-honda",
    targetPath: "/product/touring-essentials/zana-backrest-for-honda-cb350/69e279ad5685096a33ad9372"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-bag-for-meteor-350",
    targetPath: "/product/bags/zana-adventure-saddle-bag-for-meteor-350/69e279ad5685096a33ad94de"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-black-for-triumph-tiger-660",
    targetPath: "/product/bike-protection/zana-crash-guard-black-for-triumph-tiger-660/69e279ae5685096a33ad9722"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/paddock-spool-for-triumph-speed-twin-900",
    targetPath: "/product/side-stand-support/z-pro-paddock-spool-for-triumph-speed-twin-900/69e279ad5685096a33ad9439"
  },
  {
    type: "product",
    sourcePath: "/product/sliders-pair-for-crash-guard-honda-cb350rs",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-honda-cb350rs/69e279ad5685096a33ad966c"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-stay-black-for-triumph-tiger-660",
    targetPath: "/product/touring-essentials/zana-saddle-stay-black-for-triumph-tiger-660/69e279ae5685096a33ad9723"
  },
  {
    type: "product",
    sourcePath: "/index.php/product/roadster-saddle-stay-with-jerry-can-mount-for-tvs-apache-rtx-300",
    targetPath: "/product/touring-essentials/zana-roadster-saddle-stay-with-jerry-can-mount-black-for-tvs-apache-rtx-300/69e279ae5685096a33ad979d"
  },
  {
    type: "product",
    sourcePath: "/product/side-stand-extender-aluminum-stainless-steel-for-gt-interceptor-650",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-aluminum-stainless-steel-for-gt-interceptor-650/69e279ad5685096a33ad9428"
  },
  {
    type: "product",
    sourcePath: "/product/rear-fluid-reservoir-cover-for-cb-300f",
    targetPath: "/product/bike-protection/zana-rear-fluid-reservoir-cover-for-cb-300f/69e279ad5685096a33ad940b"
  },
  {
    type: "product",
    sourcePath: "/product/pillion-backrest-for-dominar-25040020192021",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-dominar-250-400-2019-2021/69e279ad5685096a33ad9309"
  },
  {
    type: "product",
    sourcePath: "/product/panniers-36-ltr-aluminium-l-flat-black-with-frame-for-ktm-adv-390-2025",
    targetPath: "/product/luggage/zana-panniers-36-ltr-aluminium-l-flat-black-with-frame-for-ktm-adv-250-390/69e279ad5685096a33ad9555"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/vader-hard-shell-tail-bag-65-litre",
    targetPath: "/product/bags/zana-vader-hard-shell-tail-bag-65-litre-for-bmw-310-gs/69e279ad5685096a33ad958a"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-plate-sheet-metal-type2-for-royal-enfield-meteor-350",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-type-1-for-royal-enfield-meteor-350/69e279ad5685096a33ad94ad"
  },
  {
    type: "product",
    sourcePath: "/product/side-stand-extender-for-yamaha-mt-15",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-yamaha-mt-15/69e279ad5685096a33ad94a4"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-for-himalayan-450-with-slider-puck-black-texture-mild-steel-type-3",
    targetPath: "/product/bike-protection/zana-crash-guard-for-himalayan-450-with-slider-puck-black-texture-mild-steel-type-3/69e279ad5685096a33ad951e"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/grab-rail-for-triumph-speed-twin",
    targetPath: "/product/touring-essentials/z-pro-grab-rail-for-triumph-speed-twin-1200/69e279ad5685096a33ad967f"
  },
  {
    type: "product",
    sourcePath: "/product/pluto-tail-bag-tank-bag-himalayan-450",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-himalayan-450/69e279ad5685096a33ad9598"
  },
  {
    type: "product",
    sourcePath: "/product/gps-mount-xpulse-200",
    targetPath: "/product/accessories/zana-gps-mount-xpulse-200/69e279ad5685096a33ad9318"
  },
  {
    type: "product",
    sourcePath: "/product/fog-light-mount-for-ktm-adv-390250",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-ktm-adv-390-250/69e279ad5685096a33ad9496"
  },
  {
    type: "product",
    sourcePath: "/product/vader-hard-shell-tail-bag-65-litre-himalayan-450",
    targetPath: "/product/bags/zana-vader-hard-shell-tail-bag-65-litre-for-himalayan-450/69e279ad5685096a33ad9596"
  },
  {
    type: "product",
    sourcePath: "/product/vertical-handle-riser-dominar-400250",
    targetPath: "/product/ergonomics/zana-vertical-handle-riser-dominar-400/69e279ad5685096a33ad9314"
  },
  {
    type: "product",
    sourcePath: "/product/overlander-saddle-bag-suzuki-vstrom-250",
    targetPath: "/product/bags/zana-overlander-saddle-bag-for-suzuki-v-strom-250/69e279ad5685096a33ad94b9"
  },
  {
    type: "product",
    sourcePath: "/product/broozer-tail-bag-50-litre-for-himalayan-450",
    targetPath: "/product/bags/zana-broozer-tail-bag-50-litre-himalayan-411/69e279ad5685096a33ad95a1"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/radiator-guard-for-triumph-street-triple-765",
    targetPath: "/product/bike-protection/z-pro-radiator-guard-for-triumph-street-triple-765/69e279ad5685096a33ad9582"
  },
  {
    type: "product",
    sourcePath: "/index.php/product/hand-guard-for-suzuki-v-strom-sx-250-black-silver-logo",
    targetPath: "/product/bike-protection/zana-hand-guard-for-suzuki-v-strom-sx-250-black-silver-logo/69e279ae5685096a33ad975a"
  },
  {
    type: "product",
    sourcePath: "/product/front-fork-slider-guerrilla-450",
    targetPath: "/product/bike-protection/zana-front-fork-slider-for-guerrilla-450/69e279ad5685096a33ad95da"
  },
  {
    type: "product",
    sourcePath: "/product/upper-lower-crash-guard-with-slider-black-combo-for-tvs-apache-rtx-300-beak-version",
    targetPath: "/product/bike-protection/zana-upper-lower-crash-guard-with-slider-black-combo-for-tvs-apache-rtx-300-beak-version/69e279ae5685096a33ad97af"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-for-shotgun-650-with-slider-puck-black-mild-steel-type2",
    targetPath: "/product/bike-protection/zana-crash-guard-for-shotgun-650-with-slider-puck-black-mild-steel-type-2/69e279ad5685096a33ad9524"
  },
  {
    type: "product",
    sourcePath: "/product/gps-mount-texture-matt-black-himalayan-20162020",
    targetPath: "/product/bike-protection/zana-engine-frame-texture-matt-black-himalayan-bs-3-4-6-2016-2020/69e279ad5685096a33ad92f1"
  },
  {
    type: "product",
    sourcePath: "/product/upper-lower-crash-guard-with-slider-combo-white-for-tvs-apache-rtx-300-beak-version",
    targetPath: "/product/bike-protection/zana-upper-lower-crash-guard-with-slider-combo-white-for-tvs-apache-rtx-300-beak-version/69e279ae5685096a33ad97ca"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-plate-himalayan-450-aluminium-silver",
    targetPath: "/product/touring-essentials/zana-top-rack-plate-aluminium-silver-for-himalayan-450/69e279ad5685096a33ad954a"
  },
  {
    type: "product",
    sourcePath: "/product/tank-guard-bmw-f900-gs-gsa-silver",
    targetPath: "/product/bike-protection/z-pro-tank-guard-for-bmw-f-900-gs-gsa-silver/69e279ad5685096a33ad9635"
  },
  {
    type: "product",
    sourcePath: "/product/front-fork-slider-for-himalayan-452",
    targetPath: "/product/bike-protection/zana-front-fork-slider-for-himalayan-452/69e279ad5685096a33ad94ea"
  },
  {
    type: "product",
    sourcePath: "/product/fog-light-mount-re-bear-650-mild-steel",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-bear-650-mild-steel/69e279ad5685096a33ad961d"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/engine-guard-for-triumph-street-twin",
    targetPath: "/product/bike-protection/z-pro-engine-guard-for-triumph-street-twin/69e279ad5685096a33ad93d6"
  },
  {
    type: "product",
    sourcePath: "/product/honda-cb-300r-radiator-guard-honeycomb-black",
    targetPath: "/product/bike-protection/zana-honda-cb300f-radiator-guard-honeycomb-black/69e279ad5685096a33ad93ff"
  },
  {
    type: "product",
    sourcePath: "/product/bash-plate-silver-aluminum-for-super-meteor-650",
    targetPath: "/product/bike-protection/zana-bash-plate-silver-aluminum-for-super-meteor-650/69e279ad5685096a33ad942b"
  },
  {
    type: "product",
    sourcePath: "/product/upper-lower-crash-guard-with-slider-combo-red-for-tvs-apache-rtx-300-without-beak-version",
    targetPath: "/product/bike-protection/zana-upper-lower-crash-guard-with-slider-combo-red-for-tvs-apache-rtx-300-beak-version/69e279ae5685096a33ad97b0"
  },
  {
    type: "product",
    sourcePath: "/product/tripper-tank-bag-re-shotgun-650-80litre",
    targetPath: "/product/bags/zana-tripper-tank-bag-8-0-litre-for-re-shotgun-650/69e279ad5685096a33ad9656"
  },
  {
    type: "product",
    sourcePath: "/product/bash-plate-black-ms-for-vstrom-250",
    targetPath: "/product/bike-protection/zana-bash-plate-ms-silver-for-v-strom-250/69e279ad5685096a33ad93a6"
  },
  {
    type: "product",
    sourcePath: "/product/rear-paddock-spools-with-swing-arm-protector-silver-ktm-duke-250390",
    targetPath: "/product/side-stand-support/zana-rear-paddock-spools-with-swing-arm-protector-silver-ktm-duke-250-390/69e279ad5685096a33ad9337"
  },
  {
    type: "product",
    sourcePath: "/product/fog-light-mount-for-himalayan-20162020",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-himalayan-2016-2020/69e279ad5685096a33ad933f"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/universal-gtx-tank-bag-16ltr-expandable-to-20ltr",
    targetPath: "/product/bags/zana-universal-gtx-tank-bag-tail-bag-16ltr-expandable-to-20ltr/69e279ae5685096a33ad96e8"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/front-fork-slider-for-suzuki-hayabusa-1300",
    targetPath: "/product/bike-protection/z-pro-front-fork-slider-for-suzuki-hayabusa-1300/69e279ad5685096a33ad94d5"
  },
  {
    type: "product",
    sourcePath: "/product/maximus-tail-bag-36-litre-single-for-himalayan-450",
    targetPath: "/product/bags/zana-maximus-tail-bag-36-litre-single-for-himalayan-450/69e279ad5685096a33ad9599"
  },
  {
    type: "product",
    sourcePath: "/product/front-fork-sliders-ktm-duke-250390",
    targetPath: "/product/bike-protection/zana-front-fork-sliders-ktm-duke-250-390/69e279ad5685096a33ad9339"
  },
  {
    type: "product",
    sourcePath: "/product/tripper-tank-bag-80-litre-suzuki-v-strom-250",
    targetPath: "/product/bags/zana-tripper-tank-bag-8-0-litre-for-suzuki-v-strom-250/69e279ad5685096a33ad95cd"
  },
  {
    type: "product",
    sourcePath: "/product/vertical-handle-riser-for-interceptor650",
    targetPath: "/product/ergonomics/zana-vertical-handle-riser-for-interceptor-650/69e279ad5685096a33ad932e"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/number-plate-mount-for-bmw-r-1300-gs",
    targetPath: "/product/accessories/z-pro-number-plate-mount-for-bmw-r-1300-gs/69e279ae5685096a33ad96fe"
  },
  {
    type: "product",
    sourcePath: "/product/frame-slider-for-aprilia-tuono-457",
    targetPath: "/product/bike-protection/zana-frame-slider-black-for-aprilia-tuono-457/69e279ae5685096a33ad9715"
  },
  {
    type: "product",
    sourcePath: "/product/bash-plate-for-tvs-apache-rtx-300-aluminum-silver",
    targetPath: "/product/bike-protection/zana-bash-plate-for-tvs-apache-rtx-300-aluminum-silver/69e279ae5685096a33ad97b1"
  },
  {
    type: "product",
    sourcePath: "/product/broozer-tail-bag-re-bear-650-50litre",
    targetPath: "/product/bags/zana-broozer-tail-bag-50-litre-for-re-bear-650/69e279ad5685096a33ad964d"
  },
  {
    type: "product",
    sourcePath: "/product/rear-footrest-pair-guerrilla-450",
    targetPath: "/product/ergonomics/zana-rear-footrest-pair-for-guerrilla-450/69e279ad5685096a33ad95d9"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-plate-v2-for-hunter-350-ms-black",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-v-2-for-hunter-350-ms-black/69e279ae5685096a33ad97be"
  },
  {
    type: "product",
    sourcePath: "/product/rear-oil-reservoir-cover-for-harley-davidson-x440",
    targetPath: "/product/bike-protection/zana-rear-oil-reservoir-cover-for-harley-davidson-x440/69e279ad5685096a33ad953b"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-stay-ktm-duke-390-black",
    targetPath: "/product/touring-essentials/zana-drake-saddle-stay-for-ktm-adv-390-2025-black/69e279ae5685096a33ad97c0"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/universal-top-box-cushion",
    targetPath: "/product/top-box/zana-universal-top-box-cushion/69e279ad5685096a33ad9545"
  },
  {
    type: "product",
    sourcePath: "/product/pluto-tail-bag-tank-bag-bsa-goldstar-650",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-bsa-goldstar-650/69e279ad5685096a33ad965b"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-plate-new-w1-cb350-hness-honda-split-seatsingle-seat-version-not-compatible-on-new-model-2024-cb350-dlx-pro",
    targetPath: "/product/zana-accessories/zana-top-rack-with-plate-new-w-1-cb350-h-ness-honda-split-seat-single-seat-version-2-not-compatible-on-new-model-2024-cb350-dlx-pro-cb350-highness-zana-motorcycles/69e279ad5685096a33ad93fb"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-plate-black-for-shotgun-650",
    targetPath: "/product/touring-essentials/zana-top-rack-with-ms-plate-for-bear-650-black/6a35485a66b713f40b19a368"
  },
  {
    type: "product",
    sourcePath: "/product/head-light-grill-ss-type-4a-black-himalayan-bs6-202122",
    targetPath: "/product/bike-protection/zana-head-light-grill-ss-type-4a-black-himalayan-bs6-2016-2020/69e279ad5685096a33ad9342"
  },
  {
    type: "product",
    sourcePath: "/product/bmw-g310r-aluminium-heavy-duty-sump-guard-silver",
    targetPath: "/product/bike-protection/zana-bmw-g310r-aluminium-heavy-duty-sump-guard-silver/69e279ad5685096a33ad9398"
  },
  {
    type: "product",
    sourcePath: "/product/universal-slider-puck-for-suzuki-vstrom-250",
    targetPath: "/product/bike-protection/zana-universal-slider-puck-for-suzuki-v-strom-250/69e279ad5685096a33ad943e"
  },
  {
    type: "product",
    sourcePath: "/product/panniers-36-ltr-aluminium-rflat-black-with-frame-for-ktm-adv-250390",
    targetPath: "/product/luggage/zana-panniers-36-ltr-aluminium-r-flat-black-with-frame-for-ktm-adv-250-390/69e279ad5685096a33ad9553"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-stay-v1-with-jerry-can-mount-white-for-ktm-adv-390-2025",
    targetPath: "/product/touring-essentials/zana-roadster-saddle-stay-with-jerry-can-mount-black-for-ktm-adv-390-2025/69e279ad5685096a33ad968e"
  },
  {
    type: "product",
    sourcePath: "/product/pillion-backrest-dominar400-2017-2018",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-dominar400-2017-2018/69e279ad5685096a33ad930d"
  },
  {
    type: "product",
    sourcePath: "/product/toprack-without-plate-with-backrest-jawa",
    targetPath: "/product/touring-essentials/top-rack-with-plate-without-backrest-for-classic-350-500/69f86a7f6f8d6277f9a84e8a"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/maximus-tail-bag-36-litre-single-bag",
    targetPath: "/product/bags/zana-maximus-tail-bag-36-litre-single-re-bear-650/69e279ad5685096a33ad9650"
  },
  {
    type: "product",
    sourcePath: "/product/bash-plate-for-kawasaki-klx-230-aluminum-silver",
    targetPath: "/product/bike-protection/zana-bash-plate-for-kawasaki-klx-230-aluminum-silver/69e279ae5685096a33ad978f"
  },
  {
    type: "product",
    sourcePath: "/product/top-box-plastic-50-litre-rflat-black-ktm-adv-390-2025",
    targetPath: "/product/touring-essentials/zana-top-rack-with-ms-plate-black-for-ktm-adv-390-2025/69e279ad5685096a33ad9691"
  },
  {
    type: "product",
    sourcePath: "/product/mirror-extender-aluminum-for-gtinterceptor-650",
    targetPath: "/product/ergonomics/zana-mirror-extender-aluminum-for-gt-interceptor-650/69e279ad5685096a33ad947c"
  },
  {
    type: "product",
    sourcePath: "/index.php/product/rear-footrest-pair-for-tvs-apache-rtx-300",
    targetPath: "/product/ergonomics/zana-rear-footrest-pair-for-tvs-apache-rtx-300/69e279ae5685096a33ad97c9"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/grab-rail-triumph-speed-twin-1200",
    targetPath: "/product/touring-essentials/z-pro-grab-rail-for-triumph-speed-twin-1200/69e279ad5685096a33ad967f"
  },
  {
    type: "product",
    sourcePath: "/product/tail-tidy-black-for-aprilia-rs-457",
    targetPath: "/product/bike-protection/zana-tail-tidy-black-for-aprilia-rs-457/69e279ae5685096a33ad9719"
  },
  {
    type: "product",
    sourcePath: "/product/top-box-aluminium-22-ltr-l-flat-black-for-ktm-adv-390",
    targetPath: "/product/luggage/zana-panniers-36-ltr-aluminium-l-flat-black-with-frame-for-ktm-adv-250-390/69e279ad5685096a33ad9555"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/bash-plate-triumph-speed-twin-1200",
    targetPath: "/product/bike-protection/z-pro-bash-plate-for-triumph-speed-twin-1200/69e279ad5685096a33ad967a"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-compatible-with-pillion-backrest-for-kawasaki-vulcan-650",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-bsa-goldstar-650-compatible-with-zana-top-rack/69e279ad5685096a33ad962e"
  },
  {
    type: "product",
    sourcePath: "/product/universal-pluto-carbon-hardshell-expandable-tail-bag-16l-to-20l",
    targetPath: "/product/bags/zana-universal-pluto-carbon-hardshell-expandable-tail-bag-16l-to-20l/69e279ae5685096a33ad96ed"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-new-plate-compatible-with-pillion-backrest-kustom-silver-dominar-2017-2018",
    targetPath: "/product/touring-essentials/zana-top-rack-with-new-plate-compatible-with-pillion-backrest-texture-matt-black-dominar-2017-18/69e279ad5685096a33ad93b0"
  },
  {
    type: "product",
    sourcePath: "/product/fog-light-mount-for-aprilia-rs-457",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-aprilia-rs-457/69e279ae5685096a33ad97c2"
  },
  {
    type: "product",
    sourcePath: "/product/side-stand-extenders-vmc-for-aprilia-tuono-457-bash-red-top-black",
    targetPath: "/product/side-stand-support/zana-side-stand-extenders-vmc-for-aprilia-tuono-457-bash-red-top-black/69e279ae5685096a33ad9731"
  },
  {
    type: "product",
    sourcePath: "/product/top-box-himalayan-450-45ltr-aluminium-silver",
    targetPath: "/product/touring-essentials/zana-top-rack-plate-aluminium-silver-for-himalayan-450/69e279ad5685096a33ad954a"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/side-stand-extender-for-triumph-tiger-900-gt",
    targetPath: "/product/side-stand-support/z-pro-side-stand-extender-for-triumph-tiger-900-gt/69e279ae5685096a33ad9764"
  },
  {
    type: "product",
    sourcePath: "/product/sticker-top-box-aluminium-45-ltr-l-flat-silver-with-back-rest-cushion",
    targetPath: "/product/top-box/zana-universal-top-box-aluminium-silver-45-ltr-r-flat-with-back-rest-cushion/69e279d95685096a33ad97cd"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-ms-plate-black-for-honda-cb-350-2025",
    targetPath: "/product/touring-essentials/zana-top-rack-with-ms-plate-black-for-honda-cb-350-2025/69e279ae5685096a33ad9750"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/top-rack-with-plate-trident-660",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-for-triumph-tiger-660/69e279ae5685096a33ad9724"
  },
  {
    type: "product",
    sourcePath: "/product/bmw-g310-gs-aluminium-heavy-duty-sump-guard-silver",
    targetPath: "/product/bike-protection/zana-bmw-g310-gs-aluminium-heavy-duty-sump-guard-silver/69e279ad5685096a33ad9361"
  },
  {
    type: "product",
    sourcePath: "/index.php/zpro/product/saddle-stay-for-bmw-r-1300-gs-black",
    targetPath: "/product/touring-essentials/z-pro-saddle-stay-for-bmw-r-1300-gs-black/69e279ae5685096a33ad9701"
  },
  {
    type: "product",
    sourcePath: "/product/side-mirror-extender-aluminum-for-yamaha-mt-15",
    targetPath: "/product/ergonomics/zana-side-mirror-extender-aluminum-for-yamaha-mt-15/69e279ad5685096a33ad94a5"
  },
  {
    type: "product",
    sourcePath: "/product/side-stand-extender-for-harley-davidson-x440",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-harley-davidson-x440/69e279ad5685096a33ad952f"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-ktm-duke-250-texture-matt-black",
    targetPath: "/product/bike-protection/zana-crash-guard-texture-matt-black-ktm-250-390-2017-18/69e279ad5685096a33ad9366"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/rear-paddock-spool-for-kawasaki-z900",
    targetPath: "/product/side-stand-support/z-pro-rear-paddock-spool-for-kawasaki-z900/69e279ad5685096a33ad941b"
  },
  {
    type: "product",
    sourcePath: "/product/universal-gel-seat-cushion-medium-770grm",
    targetPath: "/product/gel-seat/zana-universal-gel-seat-cushion-medium-770grm/69e279ad5685096a33ad95ff"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/tank-guard-bmw-f900-gs-gsa-silver",
    targetPath: "/product/bike-protection/z-pro-tank-guard-for-bmw-f-900-gs-gsa-silver/69e279ad5685096a33ad9635"
  },
  {
    type: "product",
    sourcePath: "/product/engine-guard-re-bear-650-with-slider-puck-black",
    targetPath: "/product/bike-protection/zana-engine-guard-with-slider-puck-for-bear-650-ms-black/69e279ad5685096a33ad9619"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-for-bsa-goldstar-650-with-pillion-back-rest-mild-steel-black-type1",
    targetPath: "/product/touring-essentials/zana-top-rack-for-bsa-goldstar-650-with-pillion-back-rest-mild-steel-black-type-1/69e279ad5685096a33ad962d"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/tripper-tank-bag-triumph-street-triple-765-belt-8ltr",
    targetPath: "/product/bags/zana-tripper-tank-bag-and-belt-8-0-litre-for-triumph-street-triple-765/69e279ad5685096a33ad9631"
  },
  {
    type: "product",
    sourcePath: "/product/back-rest-mild-steel-for-royal-enfield-hunter-350",
    targetPath: "/product/touring-essentials/zana-back-rest-mild-steel-for-royal-enfield-hunter-350/69e279ad5685096a33ad93f0"
  },
  {
    type: "product",
    sourcePath: "/product/vader-hard-shell-tail-bag-65-litre",
    targetPath: "/product/bags/zana-vader-hard-shell-tail-bag-65-litre-for-bmw-310-gs/69e279ad5685096a33ad958a"
  },
  {
    type: "product",
    sourcePath: "/product/drake-saddle-stay-texture-black-for-x-pulse-210",
    targetPath: "/product/touring-essentials/zana-drake-saddle-stay-texture-black-for-x-pulse-210/69e279ae5685096a33ad96d9"
  },
  {
    type: "product",
    sourcePath: "/product/panniers-36-ltr-aluminium-lflat-silver-with-frame-for-himalayan-411",
    targetPath: "/product/luggage/zana-panniers-36-ltr-aluminium-l-flat-silver-with-frame-for-himalayan-411/69e279ad5685096a33ad955e"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/quick-shifter-guard-bmw-f900-gs-adventure",
    targetPath: "/product/bike-protection/z-pro-quick-shifter-guard-for-bmw-f900-gs/69e279ae5685096a33ad9776"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-plate-for-triumph-tiger-660",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-for-triumph-tiger-660/69e279ae5685096a33ad9724"
  },
  {
    type: "product",
    sourcePath: "/product/engine-frame-mild-steel-red-himalayan-bs6-compatible-with-scram-411-202122",
    targetPath: "/product/bike-protection/zana-engine-frame-texture-matt-black-himalayan-compatible-with-scram-411-bs6-2021-22/69e279ad5685096a33ad92f5"
  },
  {
    type: "product",
    sourcePath: "/product/pillion-backrest-big-for-guerrilla-450",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-big-for-guerrilla-450/69e279ad5685096a33ad96b4"
  },
  {
    type: "product",
    sourcePath: "/product/pluto-tail-bag-tank-bag-triumph-street-triple-765",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-triumph-street-triple-765/69e279ad5685096a33ad9630"
  },
  {
    type: "product",
    sourcePath: "/product/universal-retro-saddle-bag",
    targetPath: "/product/bags/zana-universal-retro-saddle-bag/69e279ad5685096a33ad9542"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-slider-kustom-silver-dominar-400-2017-2018",
    targetPath: "/product/bike-protection/zana-crash-guard-with-slider-texture-matt-black-dominar-400-250-2017-2018/69e279ad5685096a33ad931a"
  },
  {
    type: "product",
    sourcePath: "/product/vader-hard-shell-tail-bag-65-litre-ktm-duke-250-gen3",
    targetPath: "/product/bags/zana-vader-hard-shell-tail-bag-65-litre-for-ktm-duke-250-390-gen-3/69e279ad5685096a33ad95bc"
  },
  {
    type: "product",
    sourcePath: "/product/guerrilla-450-panniers-36ltr-aluminium-black",
    targetPath: "/product/luggage/zana-panniers-for-guerrilla-450-l-flat-aluminium-black-36-litre/69e279ad5685096a33ad9601"
  },
  {
    type: "product",
    sourcePath: "/product/luggage-rack-compatible-with-backrest-for-super-meteor-650",
    targetPath: "/product/touring-essentials/zana-backrest-ms-compatible-with-luggage-rack-for-super-meteor-650/69e279ad5685096a33ad942f"
  },
  {
    type: "product",
    sourcePath: "/product/sliders-pair-crash-guard-himalayan-411-bs6",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-himalayan-411-bs6-2021-2022/69e279ad5685096a33ad9673"
  },
  {
    type: "product",
    sourcePath: "/product/front-fluid-reservoir-cover-for-yezdi-adventure-2025",
    targetPath: "/product/bike-protection/zana-front-fluid-reservoir-cover-for-yezdi-adventure-2025/69e279ae5685096a33ad970e"
  },
  {
    type: "product",
    sourcePath: "/product/panniers-suzuki-vstrom-250-36ltr-aluminium-silver",
    targetPath: "/product/luggage/zana-panniers-for-suzuki-v-strom-250-36ltr-aluminium-silver-with-frame/69e279ad5685096a33ad9508"
  },
  {
    type: "product",
    sourcePath: "/product/mirror-extender-for-himalayan-450-texture-black-aluminium",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-himalayan-450-black-texture-aluminium/69e279ad5685096a33ad94e2"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-puck-slider-t-3-for-jawa-bobber-42-mild-steel-black",
    targetPath: "/product/bike-protection/zana-crash-guard-with-puck-slider-t-3-for-jawa-bobber-42-mild-steel-black/69e279ae5685096a33ad9737"
  },
  {
    type: "product",
    sourcePath: "/product/universal-mobile-holder-without-charger-blu",
    targetPath: "/product/mobile-holder/zana-universal-mobile-holder-without-charger-blu/69e279ad5685096a33ad9686"
  },
  {
    type: "product",
    sourcePath: "/product/drake-saddle-stay-for-apache-rtx-300-black",
    targetPath: "/product/touring-essentials/zana-drake-saddle-stay-for-apache-rtx-300-black/69e279ae5685096a33ad9784"
  },
  {
    type: "product",
    sourcePath: "/product/panniers-36-ltr-aluminium-rflat-black-with-frame-for-super-meteor-650",
    targetPath: "/product/luggage/zana-panniers-36-ltr-aluminium-r-flat-black-with-frame-for-super-meteor-650/69e279ad5685096a33ad9557"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-re-classic-500-steel",
    targetPath: "/product/touring-essentials/zana-top-rack-mild-steel-for-classic-500/69e279ad5685096a33ad94fb"
  },
  {
    type: "product",
    sourcePath: "/product/master-cylinder-cover-guerrilla-450-black-type1",
    targetPath: "/product/bike-protection/zana-master-cylinder-cover-for-guerrilla-450-without-logo-black-type-1/69e279ad5685096a33ad95e0"
  },
  {
    type: "product",
    sourcePath: "/product/radiator-guard-honeycomb-black-ktm-adv-390-2025",
    targetPath: "/product/bike-protection/zana-radiator-guard-honeycomb-black-for-ktm-adv-390-2025/69e279ad5685096a33ad968d"
  },
  {
    type: "product",
    sourcePath: "/product/bash-plate-mild-steel-for-royal-enfield-hunter-350",
    targetPath: "/product/touring-essentials/zana-back-rest-mild-steel-for-royal-enfield-hunter-350/69e279ad5685096a33ad93f0"
  },
  {
    type: "product",
    sourcePath: "/product/pillion-backrest-for-gtinterceptor-650",
    targetPath: "/product/touring-essentials/zana-backrest-ms-for-interceptor-gt-650/69e279ad5685096a33ad92d6"
  },
  {
    type: "product",
    sourcePath: "/product/honda-cb300r-new-pillion-backrest-cushion-big",
    targetPath: "/product/touring-essentials/zana-honda-cb300r-new-pillion-backrest-cushion-big/69e279ad5685096a33ad93ac"
  },
  {
    type: "product",
    sourcePath: "/product/fog-light-mount-bmw-310gs",
    targetPath: "/product/fog-light/zana-fog-light-mount-ms-for-bmw-310-gs/69e279ad5685096a33ad9495"
  },
  {
    type: "product",
    sourcePath: "/product/yezdi-scrambler-saddle-stay-black",
    targetPath: "/product/bike-protection/zana-yezdi-scrambler-head-light-grill-ss-black/69e279ad5685096a33ad935e"
  },
  {
    type: "product",
    sourcePath: "/product/single-rod-crash-bar-for-hunter-350",
    targetPath: "/product/bike-protection/zana-single-rod-crash-bar-for-hunter-350/69e279ad5685096a33ad952a"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-stay-ktm-adventure-250-silver",
    targetPath: "/product/touring-essentials/zana-saddle-stay-custom-silver-ktm-adv-250-390-390-x/69e279ad5685096a33ad9340"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-re-bear-650-compatible-with-pillion-backrest",
    targetPath: "/product/touring-essentials/zana-top-rack-with-w-plate-for-bear-650-compatible-with-pillion-backrest/69e279ad5685096a33ad961b"
  },
  {
    type: "product",
    sourcePath: "/product/honda-cb350-new-pillion-backrest-cushion-big",
    targetPath: "/product/touring-essentials/zana-honda-cb350-new-pillion-backrest-cushion-big/69e279ad5685096a33ad9364"
  },
  {
    type: "product",
    sourcePath: "/product/guerrilla-450-vader-hard-shell-tail-bag-65-litre",
    targetPath: "/product/bags/zana-vader-hard-shell-tail-bag-for-guerrilla-450-65-litre/69e279ad5685096a33ad9604"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-stay-jawa-classic-and-42",
    targetPath: "/product/accessories/zana-gps-mount-jawa-classic-and-42/69e279ad5685096a33ad92fb"
  },
  {
    type: "product",
    sourcePath: "/product/bmw-g310-gs-upper-fairing-guard-ms-silver",
    targetPath: "/product/bike-protection/zana-bmw-g310-gs-upper-fairing-guard-ms-silver/69e279ad5685096a33ad9377"
  },
  {
    type: "product",
    sourcePath: "/product/offset-handle-bar-riser-for-cb300f",
    targetPath: "/product/ergonomics/zana-offset-handle-bar-riser-for-cb300f/69e279ad5685096a33ad9498"
  },
  {
    type: "product",
    sourcePath: "/product/sliders-pair-for-crash-guard-re-classic-350-reborn",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-re-classic-350-reborn/69e279ad5685096a33ad966f"
  },
  {
    type: "product",
    sourcePath: "/product/ktm-linear-headlight-grill-stainless-steel-adventure-390-390-x",
    targetPath: "/product/bike-protection/zana-ktm-linear-headlight-grill-stainless-steel-adventure-390-390-x/69e279ad5685096a33ad92e3"
  },
  {
    type: "product",
    sourcePath: "/product/rear-paddock-spools-with-swing-arm-protector-silver-ktm-adventure-390-390-x",
    targetPath: "/product/side-stand-support/zana-rear-paddock-spools-with-swing-arm-protector-silver-ktm-adventure-390-390-x/69e279ad5685096a33ad92e9"
  },
  {
    type: "product",
    sourcePath: "/product/gps-mount-versys-650",
    targetPath: "/product/accessories/zana-gps-mount-for-kawasaki-versys-650/69e279ad5685096a33ad92e0"
  },
  {
    type: "product",
    sourcePath: "/product/front-fork-sliders-ktm-duke-200-bs6-2021",
    targetPath: "/product/bike-protection/zana-front-fork-sliders-ktm-duke-200-bs6-2021/69e279ad5685096a33ad933a"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-plate-for-ninja-300",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-for-kawasaki-ninja-300/6a01b9127c2ba81cc5fac1d0"
  },
  {
    type: "product",
    sourcePath: "/product/upper-fairing-guard-silver-for-tvs-apache-rtx-300-beak-version",
    targetPath: "/product/bike-protection/zana-upper-lower-crash-guard-with-slider-combo-silver-for-tvs-apache-rtx-300-beak-version/69e279ae5685096a33ad97ae"
  },
  {
    type: "product",
    sourcePath: "/index.php/product/roadster-saddle-stay-for-harley-davidson-x440-with-exhaust-sheild-and-jerry-can-mount",
    targetPath: "/product/touring-essentials/zana-roadster-saddle-stay-for-harley-davidson-x440-with-exhaust-sheild-and-jerry-can-mount/69e279ad5685096a33ad9626"
  },
  {
    type: "product",
    sourcePath: "/product/side-stand-extender-for-kawasaki-versys-650",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-kawasaki-versys-650/69e279ad5685096a33ad956d"
  },
  {
    type: "product",
    sourcePath: "/product/side-stand-extender-for-ktm-adventure-250390390-x",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-ktm-adventure-250-390-390-x/69e279ad5685096a33ad93b1"
  },
  {
    type: "product",
    sourcePath: "/product/toprack-without-plate-compatible-with-pillion-backrest-version2-cb350-hness-split-seatsi-not-compatible-on-new-model-2024-cb350-dlx-pro-ngle-seat",
    targetPath: "/product/touring-essentials/zana-toprack-without-plate-compatible-with-pillion-backrest-version-2-cb350-h-ness-split-seat-si-not-compatible-on-new-model-2024-cb350-dlx-pro-ngle-seat-cb350-highness-zana-motorcycles/69e279ad5685096a33ad931e"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/tank-guard-for-triumph-street-twin",
    targetPath: "/product/bike-protection/z-pro-engine-guard-for-triumph-street-twin/69e279ad5685096a33ad93d6"
  },
  {
    type: "product",
    sourcePath: "/product/toprack-t2-with-aluminium-plate-compatible-with-pillion-backrest-scram-411-bs6-2022",
    targetPath: "/product/touring-essentials/zana-top-rack-for-scram-411-bs6-2022-ms-w-1-compatible-with-pillion-backrest/69e279ad5685096a33ad936a"
  },
  {
    type: "product",
    sourcePath: "/index.php/product/pluto-tail-bag-tank-bag-for-ktm-duke-250-gen3",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-ktm-duke-250-390-gen-3/69e279ad5685096a33ad95be"
  },
  {
    type: "product",
    sourcePath: "/product/maximus-tail-bag-36-litre-single-himalayan-411",
    targetPath: "/product/bags/zana-maximus-tail-bag-36-litre-single-for-himalayan-411/69e279ad5685096a33ad95a4"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/tripper-tank-bag-80-litre-for-speed-twin-1200",
    targetPath: "/product/bags/zana-tripper-tank-bag-8-0-litre-for-speed-twin-1200/69e279ae5685096a33ad96e1"
  },
  {
    type: "product",
    sourcePath: "/product/bash-plate-for-shotgun-650-black-aluminum",
    targetPath: "/product/bike-protection/zana-bash-plate-for-shotgun-650-black-aluminum/69e279ad5685096a33ad9526"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/pluto-tail-bag-tank-bag",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag/69e279ad5685096a33ad9568"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-new-plate-type-1-2021-texture-matt-black-dominar-2019-2021",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-type-1-texture-matt-black-ktm-adv-390/69e279ad5685096a33ad92eb"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-plate-ms-black-for-x-pulse-210",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-ms-black-for-x-pulse-210/69e279ae5685096a33ad96da"
  },
  {
    type: "product",
    sourcePath: "/product/maximus-tail-bag-36-litre-single-triumph-speed-400",
    targetPath: "/product/bags/zana-maximus-tail-bag-36-litre-single-for-triumph-speed-400/69e279ad5685096a33ad95b2"
  },
  {
    type: "product",
    sourcePath: "/product/bmw-g310-gs-upper-fairing-guard-ms-black",
    targetPath: "/product/bike-protection/zana-bmw-g310-gs-upper-fairing-guard-ms-black/69e279ad5685096a33ad9370"
  },
  {
    type: "product",
    sourcePath: "/product/pluto-tail-bag-tank-bag-bmw-f900-gs-gsa",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-bmw-f900-gs-gsa/69e279ad5685096a33ad9641"
  },
  {
    type: "product",
    sourcePath: "/product/tank-guard-with-slider-puck-black-ktm-adv-390-2025",
    targetPath: "/product/bike-protection/zana-tank-guard-crash-guard-with-slider-puck-black-for-ktm-adv-390-2025/69e279ad5685096a33ad968b"
  },
  {
    type: "product",
    sourcePath: "/product/mobile-holder-without-charger-bmw-f900-gs-gsa",
    targetPath: "/product/mobile-holder/zana-mobile-holder-without-charger-for-bmw-f900-gs-gsa/69e279ad5685096a33ad963d"
  },
  {
    type: "product",
    sourcePath: "/index.php/product/guerrilla-450-panniers-36ltr-aluminium-black",
    targetPath: "/product/luggage/zana-panniers-for-guerrilla-450-l-flat-aluminium-black-36-litre/69e279ad5685096a33ad9601"
  },
  {
    type: "product",
    sourcePath: "/product/universal-weekender-tail-bag-32-liters-expandable-to-39-liters",
    targetPath: "/product/bags/zana-universal-weekender-tail-bag-32-liters-expandable-to-39-liters/69e279ae5685096a33ad96e9"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-stay-kustom-silver-bmw-g310gs",
    targetPath: "/product/touring-essentials/saddle-stay-kustom-silver-bmw-g310gs/69f86a7f6f8d6277f9a84e8e"
  },
  {
    type: "product",
    sourcePath: "/product/rear-footrest-for-shotgun-650-black-mild-steel",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-shotgun-650-black-mild-steel/69e279ad5685096a33ad9527"
  },
  {
    type: "product",
    sourcePath: "/product/yezdi-scrambler-pillion-backrest-cushion-gaddi-small",
    targetPath: "/product/touring-essentials/zana-yezdi-scrambler-new-pillion-backrest-cushion-big/69e279ad5685096a33ad9375"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/speed-twin-1200-tail-tidy",
    targetPath: "/product/bike-protection/z-pro-tail-tidy-for-triumph-speed-twin-1200/69e279ae5685096a33ad96d7"
  },
  {
    type: "product",
    sourcePath: "/product/fog-light-mount-for-honda-cb300r",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-honda-cb300r/69e279ad5685096a33ad9462"
  },
  {
    type: "product",
    sourcePath: "/product/front-fork-slider-for-aprilia-rs-457",
    targetPath: "/product/bike-protection/zana-front-fork-slider-for-aprilia-rs-457/69e279ae5685096a33ad971a"
  },
  {
    type: "product",
    sourcePath: "/product/vertical-handlebar-riser-for-kawasaki-versys-650",
    targetPath: "/product/ergonomics/zana-vertical-handlebar-riser-for-kawasaki-versys-650/69e279ad5685096a33ad956c"
  },
  {
    type: "product",
    sourcePath: "/product/bash-plate-black-for-triumph-scrambler-400-x",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-triumph-scrambler-400/69e279ad5685096a33ad95a9"
  },
  {
    type: "product",
    sourcePath: "/product/top-box-re-himalayan-450-45ltr-aluminium-silver",
    targetPath: "/product/touring-essentials/zana-top-rack-plate-aluminium-silver-for-himalayan-450/69e279ad5685096a33ad954a"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/mirror-extender-for-triumph-tiger-850",
    targetPath: "/product/ergonomics/z-pro-mirror-extender-for-triumph-tiger-850/69e279ad5685096a33ad947a"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/upper-lower-crash-guard-set-for-triumph-tiger-900-gt-black",
    targetPath: "/product/bike-protection/z-pro-upper-lower-crash-guard-set-for-triumph-tiger-900-gt-black/69e279ae5685096a33ad975e"
  },
  {
    type: "product",
    sourcePath: "/product/pillion-backrest-hex-cushion-for-hunter-350",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-hex-cushion-for-hunter-350/69e279ae5685096a33ad97c4"
  },
  {
    type: "product",
    sourcePath: "/product/sliders-pair-crash-guard-re-hunter-350",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-hunter-350/69e279ad5685096a33ad9675"
  },
  {
    type: "product",
    sourcePath: "/product/rear-paddock-spools-aluminum-for-suzuki-vstrom-250",
    targetPath: "/product/side-stand-support/zana-rear-paddock-spools-aluminum-for-suzuki-vstrom-250/69e279ad5685096a33ad93ae"
  },
  {
    type: "product",
    sourcePath: "/product/broozer-tail-bag-50-litre-honda-cb200x",
    targetPath: "/product/bags/zana-broozer-tail-bag-50-litre-for-honda-cb200x/69e279ad5685096a33ad95c4"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/bash-plate-for-bmw-f-900-xr-20172023",
    targetPath: "/product/bike-protection/z-pro-bash-plate-black-for-bmw-f-900-xr-2017-2023/69e279ad5685096a33ad949d"
  },
  {
    type: "product",
    sourcePath: "/product/front-fuild-reservior-cover-for-honda-cb200x",
    targetPath: "/product/bike-protection/zana-front-fluid-reservoir-cover-for-honda-cb200x/69e279ad5685096a33ad957e"
  },
  {
    type: "product",
    sourcePath: "/product/pluto-tail-bag-tank-bag-re-bear-650",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-re-bear-650/69e279ad5685096a33ad964e"
  },
  {
    type: "product",
    sourcePath: "/product/head-light-grill-guerrilla-450-black-type2",
    targetPath: "/product/bike-protection/zana-headlight-grill-for-guerrilla-450-black-type-5/69e279ad5685096a33ad95df"
  },
  {
    type: "product",
    sourcePath: "/product/roadster-saddle-bag-30-litre-single-60-litre-pair-bag-triumph-scrambler-400",
    targetPath: "/product/bags/zana-drake-universal-fabric-saddle-bag-32-litre-single-64-litre-pair-bag-for-triumph-scrambler-400/69e279ad5685096a33ad95ac"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/linear-engine-cover-for-triumph-speed-twin-900",
    targetPath: "/product/bike-protection/z-pro-linear-engine-cover-for-triumph-speed-twin-900/69e279ad5685096a33ad9437"
  },
  {
    type: "product",
    sourcePath: "/product/backrest-ms-compatible-with-luggage-rack-for-super-meteor-650",
    targetPath: "/product/touring-essentials/zana-backrest-ms-compatible-with-luggage-rack-for-super-meteor-650/69e279ad5685096a33ad942f"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-stay-ms-black-for-vstrom-250",
    targetPath: "/product/touring-essentials/drake-saddle-stay-black-for-v-strom-sx-250/69f978f46f8d6277f9a84ea8"
  },
  {
    type: "product",
    sourcePath: "/product/gtx-tank-bag-16ltr-expandable-to-20ltr-for-ktm-enduro-390",
    targetPath: "/product/bags/zana-gtx-tank-bag-16ltr-expandable-to-20ltr-for-ktm-enduro-390/69e279ae5685096a33ad9756"
  },
  {
    type: "product",
    sourcePath: "/product/drake-universal-fabric-saddle-bag-32-litre-single-64-litre-pair-bag-triumph-speed-400",
    targetPath: "/product/bags/zana-drake-universal-fabric-saddle-bag-32-litre-single-64-litre-pair-bag-for-triumph-speed-400/69e279ad5685096a33ad95b3"
  },
  {
    type: "product",
    sourcePath: "/product/paddock-spool-for-ktm-adv-390-2025",
    targetPath: "/product/side-stand-support/zana-paddock-spool-for-ktm-adv-390-2025/69e279ad5685096a33ad968c"
  },
  {
    type: "product",
    sourcePath: "/index.php/product/upper-lower-crash-guard-black-for-ktm-adv-390-2025",
    targetPath: "/product/bike-protection/zana-upper-lower-crash-guard-black-for-ktm-adv-390-2025/69e279ae5685096a33ad976b"
  },
  {
    type: "product",
    sourcePath: "/product/roadster-saddle-stay-exhaust-sheild-with-jerry-can-mount-for-kawasaki-versys-650",
    targetPath: "/product/touring-essentials/zana-roadster-saddle-stay-with-exhaust-sheild-with-jerry-can-mount-for-kawasaki-versys-650/69e279ad5685096a33ad956b"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/bash-plate-type1-for-triumph-street-twin",
    targetPath: "/product/bike-protection/z-pro-bash-plate-type-1-for-triumph-street-twin/69e279ad5685096a33ad93d5"
  },
  {
    type: "product",
    sourcePath: "/product/cooling-coil-cover-black-x-pulse-210",
    targetPath: "/product/bike-protection/zana-cooling-coil-cover-black-for-x-pulse-210/69e279ae5685096a33ad96cb"
  },
  {
    type: "product",
    sourcePath: "/product/bash-plate-re-scram-411-aluminum-black",
    targetPath: "/product/bike-protection/bash-plate-aluminum-black-for-scram-411/69f86a7f6f8d6277f9a84e91"
  },
  {
    type: "product",
    sourcePath: "/product/drake-universal-fabric-saddle-bag-32-litre-single-64-litre-pair-bag",
    targetPath: "/product/bags/zana-drake-universal-fabric-saddle-bag-32-litre-single-64-litre-pair-bag/69e279ad5685096a33ad9589"
  },
  {
    type: "product",
    sourcePath: "/product/bmw-g310-r-lower-engine-guard-ms-with-puck-black",
    targetPath: "/product/bike-protection/zana-bmw-g310-r-lower-engine-guard-ms-with-puck-black/69e279ad5685096a33ad949a"
  },
  {
    type: "product",
    sourcePath: "/product/lower-engine-guard-for-honda-nx500-black",
    targetPath: "/product/bike-protection/zana-lower-engine-guard-for-honda-nx500-black/69e279ad5685096a33ad9539"
  },
  {
    type: "product",
    sourcePath: "/product/drake-universal-fabric-saddle-bag-32-litre-single-64-litre-pair-bag-honda-cb200x",
    targetPath: "/product/bags/zana-drake-universal-fabric-saddle-bag-32-litre-single-64-litre-pair-bag-for-honda-cb200x/69e279ad5685096a33ad95c8"
  },
  {
    type: "product",
    sourcePath: "/product/top-box-aluminium-22-ltr-l-flat-silver-for-ktm-adv-390-2025",
    targetPath: "/product/bike-protection/zana-bash-plate-aluminum-silver-for-ktm-adv-390-2025/69e279ad5685096a33ad969e"
  },
  {
    type: "product",
    sourcePath: "/product/maximus-tail-bag-36-litre-single-suzuki-v-strom-250",
    targetPath: "/product/bags/zana-maximus-tail-bag-36-litre-single-for-suzuki-v-strom-250/69e279ad5685096a33ad95ce"
  },
  {
    type: "product",
    sourcePath: "/product/head-light-grill-type2-black-ss-himalayan-20162022",
    targetPath: "/product/bike-protection/zana-head-light-grill-type-2-black-ss-himalayan-2016-2022/69e279ad5685096a33ad92f3"
  },
  {
    type: "product",
    sourcePath: "/product/headlight-grill-bsa-goldstar-650-stainless-steel-black-t2",
    targetPath: "/product/bike-protection/zana-headlight-grill-for-bsa-goldstar-650-stainless-steel-black-t-2/69e279ad5685096a33ad9620"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-ms-without-plate-compatible-with-pillion-backrest-for-gtinterceptor-650",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-w-1-for-gt-interceptor-650-new-compatible-with-pillion-backrest/69e279ad5685096a33ad9350"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-stay-for-himalayan-450-with-jerry-can-mount-v2-mild-steel",
    targetPath: "/product/touring-essentials/zana-roadster-saddle-stay-for-himalayan-450-with-jerry-can-mount-v2-mild-steel/69e279ad5685096a33ad94ed"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-for-super-meteor-650-metal-sheet",
    targetPath: "/product/touring-essentials/zana-top-rack-sheet-metal-with-pillion-backrest-for-super-meteor-650/69e279ad5685096a33ad9451"
  },
  {
    type: "product",
    sourcePath: "/product/universal-pluto-carbon-hardshell-expandable-tail-bag-16l-to-20l-for-tvs-apache-rtx-300",
    targetPath: "/product/bags/zana-universal-pluto-carbon-hardshell-expandable-tail-bag-16l-to-20l-for-tvs-apache-rtx-300/69e279ae5685096a33ad9792"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/backrest-triumph-speed-twin-1200",
    targetPath: "/product/touring-essentials/z-pro-backrest-for-speed-twin-1200/69e279ad5685096a33ad943c"
  },
  {
    type: "product",
    sourcePath: "/product/maximus-tail-bag-36litre-single-re-shotgun-650",
    targetPath: "/product/bags/zana-maximus-tail-bag-36-litre-single-re-shotgun-650/69e279ad5685096a33ad9657"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-slider-puck-black-ktm-adv-390-2025",
    targetPath: "/product/bike-protection/zana-tank-guard-crash-guard-with-slider-puck-black-for-ktm-adv-390-2025/69e279ad5685096a33ad968b"
  },
  {
    type: "product",
    sourcePath: "/product/universal-dragon-belt",
    targetPath: "/product/bags/zana-universal-dragon-belt/69e279ae5685096a33ad96ee"
  },
  {
    type: "product",
    sourcePath: "/product/bash-plate-for-kawasaki-klx-230-aluminum-black",
    targetPath: "/product/bike-protection/zana-bash-plate-for-kawasaki-klx-230-aluminum-black/69e279ae5685096a33ad978e"
  },
  {
    type: "product",
    sourcePath: "/product/top-box-aluminium-35ltr-rflat-black-with-back-rest-cushion-for-honda-rebel-500",
    targetPath: "/product/top-box/zana-universal-top-box-aluminium-black-35ltr-l-flat-with-back-rest-cushion/69e279d95685096a33ad97d1"
  },
  {
    type: "product",
    sourcePath: "/product/top-box-aluminium-45ltr-l-flat-sliver-with-back-rest-cushion-for-honda-rebel-500",
    targetPath: "/product/top-box/zana-universal-top-box-aluminium-silver-45ltr-l-flat-with-back-rest-cushion/69e279d95685096a33ad97d4"
  },
  {
    type: "product",
    sourcePath: "/product/top-box-aluminium-45ltr-rflat-sliver-for-honda-nx500",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-for-honda-nx500-aluminum-silver/69e279ad5685096a33ad954d"
  },
  {
    type: "product",
    sourcePath: "/index.php/product/universal-slider-puck-for-triumph-speed-400-compatible-with-oem-crash-guard",
    targetPath: "/product/bike-protection/zana-universal-slider-puck-for-triumph-speed-400-compatible-with-oem-crash-guard/69e279ad5685096a33ad9514"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-stay-kawasaki-versys-650",
    targetPath: "/product/touring-essentials/zana-saddle-stay-for-kawasaki-versys-650/69e279ad5685096a33ad92df"
  },
  {
    type: "product",
    sourcePath: "/index.php/zpro/product/side-stand-extender-for-bmw-f900-gs",
    targetPath: "/product/side-stand-support/z-pro-side-stand-extender-for-bmw-f900-gs/69e279ae5685096a33ad977a"
  },
  {
    type: "product",
    sourcePath: "/product/broozer-tail-bag-re-shotgun-650-50litre",
    targetPath: "/product/bags/zana-broozer-tail-bag-50-litre-for-re-shotgun-650/69e279ad5685096a33ad9654"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/radiator-grill-honeycomb-trident-black-texture",
    targetPath: "/product/bike-protection/z-pro-radiator-grill-honeycomb-black-for-triumph-street-twin/69e279ad5685096a33ad93d7"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-w-1-with-aluminium-plate-for-gt-interceptor-650",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-w-1-for-gt-interceptor-650-new-compatible-with-pillion-backrest/69e279ad5685096a33ad9350"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-for-harley-davidson-x440-with-mild-steel-plate",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-and-pillion-backrest-for-harley-davidson-x440/69e279ad5685096a33ad9533"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-stay-dominar-250400-2019-21",
    targetPath: "/product/touring-essentials/zana-saddle-stay-texture-matt-black-dominar-250-400-2019-22/69e279ad5685096a33ad92f0"
  },
  {
    type: "product",
    sourcePath: "/product/panniers-himalayan-450-36ltr-aluminum-black",
    targetPath: "/product/luggage/zana-panniers-36-ltr-aluminium-l-flat-black-with-frame-for-himalayan-450/69e279ad5685096a33ad96ae"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/universal-led-fog-light-zfl50",
    targetPath: "/product/fog-light/zana-universal-led-fog-light-zfl-50/69e279ad5685096a33ad9614"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-for-himalayan-450-with-slider-puck-black-texture-mild-steel-type-2",
    targetPath: "/product/bike-protection/zana-crash-guard-for-himalayan-450-with-slider-puck-black-texture-mild-steel-type-3/69e279ad5685096a33ad951e"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-with-plate-for-honda-cb200x-type-w-black",
    targetPath: "/product/touring-essentials/zana-top-rack-with-plate-for-honda-cb200x-type-w-black/69e279ad5685096a33ad957b"
  },
  {
    type: "product",
    sourcePath: "/product/front-fluid-reservior-cover-pulsar-ns400z",
    targetPath: "/product/bike-protection/zana-front-fluid-reservoir-cover-for-pulsar-ns400z/69e279ad5685096a33ad9610"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/universal-top-box-aluminium-22-litre-rflat-black",
    targetPath: "/product/top-box/zana-universal-top-box-aluminium-22-litre-r-flat-black/69e279d95685096a33ad97df"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/universal-top-box-aluminium-22-ltr-rflat-silver",
    targetPath: "/product/top-box/zana-universal-top-box-aluminium-silver-22ltr-l-flat/69e279d95685096a33ad97d0"
  },
  {
    type: "product",
    sourcePath: "/product/tripper-tank-bag-80-litre-kawasaki-versys-650",
    targetPath: "/product/bags/zana-tripper-tank-bag-8-0-litre-for-kawasaki-versys-650/69e279ad5685096a33ad959e"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-for-himalayan-450-with-slider-puck-black-texture-mild-steel-type-1",
    targetPath: "/product/bike-protection/zana-crash-guard-for-himalayan-450-with-slider-puck-black-texture-mild-steel-type-3/69e279ad5685096a33ad951e"
  },
  {
    type: "product",
    sourcePath: "/product/frame-slider-for-ktm-duke-390-gen3",
    targetPath: "/product/bike-protection/zana-front-fork-sliders-ktm-duke-250-390/69e279ad5685096a33ad9339"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-slider-texture-matt-black-pulsar-200ns",
    targetPath: "/product/bike-protection/zana-crash-guard-with-slider-texture-matt-black-pulsar-200ns/69e279ad5685096a33ad9319"
  },
  {
    type: "product",
    sourcePath: "/product/universal-overlander-saddle-bag",
    targetPath: "/product/bags/zana-universal-overlander-saddle-bag/69e279ad5685096a33ad9544"
  },
  {
    type: "product",
    sourcePath: "/product/panniers-36-ltr-aluminium-lflat-silver-with-frame-for-kawasaki-versys-650",
    targetPath: "/product/luggage/zana-panniers-36-ltr-aluminium-l-flat-silver-with-frame-for-kawasaki-versys-650/69e279ad5685096a33ad955c"
  },
  {
    type: "product",
    sourcePath: "/product/hand-guard-for-suzuki-v-strom-sx-250-white",
    targetPath: "/product/bike-protection/zana-hand-guard-for-suzuki-v-strom-sx-250-white/69e279ae5685096a33ad9759"
  },
  {
    type: "product",
    sourcePath: "/product/vader-pro-hard-shell-tail-bag-50-liter-with-free-2-waterproof-storage-bag-and-1-bungee-cord",
    targetPath: "/product/bags/zana-vader-pro-hard-shell-tail-bag-50-liter-with-free-2-waterproof-storage-bag/69e279ae5685096a33ad96ef"
  },
  {
    type: "product",
    sourcePath: "/product/panniers-36-ltr-aluminium-rflat-silver-with-frame-for-ktm-adv-250-390",
    targetPath: "/product/luggage/zana-panniers-36-ltr-aluminium-r-flat-silver-with-frame-for-ktm-adv-250-390/69e279ad5685096a33ad9554"
  },
  {
    type: "product",
    sourcePath: "/product/fog-light-mount-ms-for-scram-411-bs6-2022",
    targetPath: "/product/fog-light/zana-fog-light-mount-ms-for-scram-411-bs6-2022/69e279ad5685096a33ad936c"
  },
  {
    type: "product",
    sourcePath: "/product/side-stand-extender-for-honda-cb300r",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-honda-cb300r/69e279ad5685096a33ad93be"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-slider-red-bs346-2016-2020",
    targetPath: "/product/bike-protection/crash-guard-with-slider-for-himalayan-bs3-4-2016-2019/69f86a7f6f8d6277f9a84e8c"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/tripper-tank-bag-triumph-tiger-900-rally-pro-8litre",
    targetPath: "/product/bags/zana-tripper-tank-bag-8-0-litre-for-triumph-tiger-900-rally-pro/69e279ad5685096a33ad9646"
  },
  {
    type: "product",
    sourcePath: "/product/pluto-tail-bag-tank-bag-triumph-speed-400",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-triumph-speed-400/69e279ad5685096a33ad95b0"
  },
  {
    type: "product",
    sourcePath: "/product/yezdi-adventure-radiator-grill-honeycomb-black",
    targetPath: "/product/bike-protection/zana-yezdi-adventure-radiator-grill-honeycomb-aluminium-black/69e279ad5685096a33ad9353"
  },
  {
    type: "product",
    sourcePath: "/product/vader-hard-shell-tail-bag-65-litre-triumph-scrambler-400",
    targetPath: "/product/bags/zana-vader-hard-shell-tail-bag-65-litre-for-triumph-scrambler-400/69e279ad5685096a33ad95a7"
  },
  {
    type: "product",
    sourcePath: "/product/side-stand-extender-re-hunter-350-aluminum-stainless-steel",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-aluminum-stainless-steel-for-royal-enfield-hunter-350/69e279ad5685096a33ad93c0"
  },
  {
    type: "product",
    sourcePath: "/product/pluto-tail-bag-tank-bag-suzuki-hayabusa-1300",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-suzuki-hayabusa-1300/69e279ad5685096a33ad9648"
  },
  {
    type: "product",
    sourcePath: "/product/fog-light-mount-re-gt-interceptor-650",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-gt-interceptor-650/69e279ad5685096a33ad932f"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/tail-tidy-black-for-suzuki-hayabusa-1300",
    targetPath: "/product/bike-protection/z-pro-tail-tidy-black-for-suzuki-hayabusa-1300/69e279ad5685096a33ad94d4"
  },
  {
    type: "product",
    sourcePath: "/product/tail-tidy-pulsar-ns400z",
    targetPath: "/product/bike-protection/zana-tail-tidy-for-pulsar-ns400z/69e279ad5685096a33ad9611"
  },
  {
    type: "product",
    sourcePath: "/product/top-box-himalayan-450-aluminium-silver",
    targetPath: "/product/touring-essentials/zana-top-rack-plate-aluminium-silver-for-himalayan-450/69e279ad5685096a33ad954a"
  },
  {
    type: "product",
    sourcePath: "/product/sliders-pair-crash-guard-himalayan-450",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-himalayan-450/69e279ad5685096a33ad9674"
  },
  {
    type: "product",
    sourcePath: "/product/fog-light-mount-for-honda-cb-300f",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-honda-cb-300f/69e279ad5685096a33ad9409"
  },
  {
    type: "product",
    sourcePath: "/product/top-box-aluminium-silver-22ltr-for-hunter-350",
    targetPath: "/product/top-box/zana-universal-top-box-aluminium-silver-22ltr-l-flat/69e279d95685096a33ad97d0"
  },
  {
    type: "product",
    sourcePath: "/product/engine-frame-texture-matt-black-himalayan-bs346-20162020",
    targetPath: "/product/bike-protection/zana-engine-frame-texture-matt-black-himalayan-bs-3-4-6-2016-2020/69e279ad5685096a33ad92f1"
  },
  {
    type: "product",
    sourcePath: "/product/roadster-saddle-bag-30-litre-single-60-litre-pair-bag-honda-nx500",
    targetPath: "/product/bags/zana-drake-universal-fabric-saddle-bag-32-litre-single-64-litre-pair-bag-for-honda-nx500/69e279ad5685096a33ad95ee"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/pluto-tail-bag-tank-bag-suzuki-hayabusa-1300",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-suzuki-hayabusa-1300/69e279ad5685096a33ad9648"
  },
  {
    type: "product",
    sourcePath: "/product/crash-guard-with-slider-texture-matt-black-for-x-pulse-210",
    targetPath: "/product/bike-protection/zana-crash-guard-with-slider-texture-matt-black-for-x-pulse-210/69e279ae5685096a33ad96d8"
  },
  {
    type: "product",
    sourcePath: "/product/universal-top-box-cushion",
    targetPath: "/product/top-box/zana-universal-top-box-cushion/69e279ad5685096a33ad9545"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-hero-xpulse200-with-plate",
    targetPath: "/product/touring-essentials/zana-top-rack-plate-big-xpulse200-bs6/69e279ad5685096a33ad9300"
  },
  {
    type: "product",
    sourcePath: "/product/headlight-guard-stainless-steel-t1-for-for-royal-enfield-meteor-350",
    targetPath: "/product/bike-protection/zana-headlight-guard-stainless-steel-t-1-for-for-royal-enfield-meteor-350/69e279ad5685096a33ad94ae"
  },
  {
    type: "product",
    sourcePath: "/product/side-stand-extender-aluminum-ss-for-royal-enfield-super-meteor-650",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-aluminum-ss-for-royal-enfield-super-meteor-650/69e279ad5685096a33ad9442"
  },
  {
    type: "product",
    sourcePath: "/product/front-fork-slider-for-versys-650",
    targetPath: "/product/bike-protection/zana-front-fork-slider-for-versys-650/69e279ad5685096a33ad934a"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/universal-retro-saddle-bag",
    targetPath: "/product/bags/zana-universal-retro-saddle-bag/69e279ad5685096a33ad9542"
  },
  {
    type: "product",
    sourcePath: "/product/side-stand-extender-for-suzuki-vstrom-250-aluminums-stainless-steel",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-suzuki-v-strom-250-aluminums-stainless-steel/69e279ad5685096a33ad9549"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-t2-with-aluminium-plate-compatible-with-pillion-backrest-for-gt-interceptor-650",
    targetPath: "/product/touring-essentials/zana-new-top-rack-with-aluminum-plate-and-compatible-with-pillion-backrest-for-gt-interceptor-650/69e279ad5685096a33ad934c"
  },
  {
    type: "product",
    sourcePath: "/product/rear-master-cylinder-protector-re-gtinterceptor-650-aluminum",
    targetPath: "/product/bike-protection/zana-rear-master-cylinder-protector-aluminum-for-gt-interceptor-650/69e279ad5685096a33ad93a9"
  },
  {
    type: "product",
    sourcePath: "/product/upper-fairing-guard-for-honda-nx500",
    targetPath: "/product/bike-protection/zana-upper-fairing-guard-for-honda-nx500/69e279ad5685096a33ad9538"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-bag-for-suzuki-vstrom-250",
    targetPath: "/product/bags/zana-adventure-saddle-bag-for-suzuki-v-strom-250/69e279ad5685096a33ad94ba"
  },
  {
    type: "product",
    sourcePath: "/product/new-uk-flag-radiator-grill-silver-with-black-gt-interceptor-650",
    targetPath: "/product/bike-protection/zana-radiator-guard-for-gt-interceptor-650-black-new-uk-flag/69e279ad5685096a33ad932c"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/gps-mount-bmw-f-900-xr",
    targetPath: "/product/accessories/z-pro-gps-mount-for-bmw-f-900-xr/69e279ad5685096a33ad9427"
  },
  {
    type: "product",
    sourcePath: "/product/maximus-tail-bag-36-litre-single-continental-gt-interceptor-650",
    targetPath: "/product/bags/zana-tripper-tank-bag-8-0-litre-for-continental-gt-interceptor-650/69e279ad5685096a33ad95f9"
  },
  {
    type: "product",
    sourcePath: "/product/roadster-2-saddle-bag-50ltr-pair-bag-25ltr-each-for-suzuki-v-strom-250",
    targetPath: "/product/bags/zana-roadster-2-saddle-bag-50ltr-pair-bag-25ltr-each-for-suzuki-v-strom-250/69e279ae5685096a33ad975d"
  },
  {
    type: "product",
    sourcePath: "/product/adventure-saddle-bag-for-ktm-adventure-250",
    targetPath: "/product/bags/zana-adventure-saddle-bag-for-ktm-adventure-250-390-390-x/69e279ad5685096a33ad94b8"
  },
  {
    type: "product",
    sourcePath: "/product/mirror-extender-for-x-pulse-210",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-x-pulse-210/69e279ae5685096a33ad96cc"
  },
  {
    type: "product",
    sourcePath: "/product/mirror-extender-aluminum-for-bmw-310-gs",
    targetPath: "/product/ergonomics/zana-mirror-extender-aluminum-for-bmw-310-gs/69e279ad5685096a33ad9494"
  },
  {
    type: "product",
    sourcePath: "/product/saddle-bag-super-meteor-650",
    targetPath: "/product/bags/zana-adventure-saddle-bag-for-super-meteor-650/69e279ad5685096a33ad94bd"
  },
  {
    type: "product",
    sourcePath: "/product/vader-hard-shell-tail-bag-65-litre-harley-davidson-x440",
    targetPath: "/product/bags/zana-vader-hard-shell-tail-bag-65-litre-for-harley-davidson-x440/69e279ad5685096a33ad95f0"
  },
  {
    type: "product",
    sourcePath: "/product/top-box-plastic-58-litre-lflat-black-ktm-adv-390-2025",
    targetPath: "/product/touring-essentials/zana-top-rack-with-ms-plate-black-for-ktm-adv-390-2025/69e279ad5685096a33ad9691"
  },
  {
    type: "product",
    sourcePath: "/product/pillion-backrest-cb350",
    targetPath: "/product/touring-essentials/zana-backrest-for-honda-cb350/69e279ad5685096a33ad9372"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-plate-for-yezdi-adventure-2025-black",
    targetPath: "/product/touring-essentials/zana-top-rack-plate-for-yezdi-adventure-2025-black/69e279ae5685096a33ad9705"
  },
  {
    type: "product",
    sourcePath: "/product/vertical-handle-riser-aluminum-suzuki-vstrom-250",
    targetPath: "/product/ergonomics/zana-vertical-handle-riser-aluminum-suzuki-v-strom-250/69e279ad5685096a33ad93c3"
  },
  {
    type: "product",
    sourcePath: "/product/top-rack-ktm-adventure-250-orange-black-new-compatible-with-grab-rail",
    targetPath: "/product/touring-essentials/zana-top-rack-for-ktm-adventure-250-390-390x-orange-black-new-compatible-with-grab-rail/69e279ad5685096a33ad934d"
  },
  {
    type: "product",
    sourcePath: "/zpro/product/universal-mobile-holder-without-charger-rex",
    targetPath: "/product/mobile-holder/zana-universal-mobile-holder-without-charger-rex/69e279ad5685096a33ad9687"
  },
  {
    type: "product",
    sourcePath: "/product/upper-lower-crash-guard-orange-for-ktm-adv-390-2025",
    targetPath: "/product/bike-protection/zana-upper-lower-crash-guard-orange-for-ktm-adv-390-2025/69e279ae5685096a33ad973c"
  },
  {
    type: "product",
    sourcePath: "/sc/universal-gel-seat-cushion",
    targetPath: "/product/gel-seat/zana-universal-gel-seat-cushion-medium-770grm/69e279ad5685096a33ad95ff"
  },
  {
    type: "product",
    sourcePath: "/sc/honda-cb350-accessories",
    targetPath: "/product/touring-essentials/zana-backrest-for-honda-cb350/69e279ad5685096a33ad9372"
  },
  {
    type: "product",
    sourcePath: "/sc/universal-top-box",
    targetPath: "/product/top-box/zana-universal-top-box-cushion/69e279ad5685096a33ad9545"
  },
  {
    type: "product",
    sourcePath: "/sc/universal-fog-lights",
    targetPath: "/product/fog-light/zana-universal-fog-light-mount/69e279ad5685096a33ad9664"
  },
  {
    type: "product",
    sourcePath: "/sc/suzuki-v-strom-sx-250-accessories",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-suzuki-v-strom-250/69e279ad5685096a33ad9474"
  },
  {
    type: "product",
    sourcePath: "/sc/royal-enfield-gt-interceptor-650-accessories",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-gt-interceptor-650/69e279ad5685096a33ad9571"
  },
  {
    type: "product",
    sourcePath: "/sc/universal-top-box?page=1&sortBy=&price=",
    targetPath: "/product/top-box/zana-universal-top-box-cushion/69e279ad5685096a33ad9545"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/universal-fog-lights",
    targetPath: "/product/fog-light/zana-universal-fog-light-mount/69e279ad5685096a33ad9664"
  },
  {
    type: "product",
    sourcePath: "/sc/universal-paddock-stand",
    targetPath: "/product/bike-protection/zana-universal-slider-puck/69e279ad5685096a33ad9441"
  },
  {
    type: "product",
    sourcePath: "/sc/triumph-speed-400-accessories",
    targetPath: "/product/bike-protection/zana-bash-plate-ms-for-triumph-speed-400/69e279ad5685096a33ad94a0"
  },
  {
    type: "product",
    sourcePath: "/sc/honda-cb350-accessories?ordername=saleprice&order=asc",
    targetPath: "/product/touring-essentials/zana-backrest-for-honda-cb350/69e279ad5685096a33ad9372"
  },
  {
    type: "product",
    sourcePath: "/sc/universal-saddle-bag",
    targetPath: "/product/bags/zana-universal-retro-saddle-bag/69e279ad5685096a33ad9542"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/suzuki-v-strom-sx-250-accessories",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-suzuki-v-strom-250/69e279ad5685096a33ad9474"
  },
  {
    type: "product",
    sourcePath: "/sc/universal-mobile-holder",
    targetPath: "/product/mobile-holder/zana-universal-mobile-holder-without-charger/69e279ad5685096a33ad9541"
  },
  {
    type: "product",
    sourcePath: "/sc/universal-dragon-belt",
    targetPath: "/product/bags/zana-universal-dragon-belt/69e279ae5685096a33ad96ee"
  },
  {
    type: "product",
    sourcePath: "/sc/triumph-street-twin-accessories?ordername=id&order=desc",
    targetPath: "/product/bike-protection/z-pro-linear-engine-cover-for-triumph-street-twin/6a1ed06527fd6e98b2a79018"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/universal-saddle-bag",
    targetPath: "/product/bags/zana-universal-retro-saddle-bag/69e279ad5685096a33ad9542"
  },
  {
    type: "product",
    sourcePath: "/sc/universal-top-box-cushion",
    targetPath: "/product/top-box/zana-universal-top-box-cushion/69e279ad5685096a33ad9545"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/honda-cb350-accessories",
    targetPath: "/product/touring-essentials/zana-backrest-for-honda-cb350/69e279ad5685096a33ad9372"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-street-triple-765-accessories",
    targetPath: "/product/bike-protection/z-pro-frame-slider-for-triumph-street-triple-765/69e279ad5685096a33ad957f"
  },
  {
    type: "product",
    sourcePath: "/sc/honda-cb350-accessories?page=1&sortBy=&price=",
    targetPath: "/product/touring-essentials/zana-backrest-for-honda-cb350/69e279ad5685096a33ad9372"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/universal-top-box",
    targetPath: "/product/top-box/zana-universal-top-box-cushion/69e279ad5685096a33ad9545"
  },
  {
    type: "product",
    sourcePath: "/sc/kawasaki-versys-650-accessories",
    targetPath: "/product/accessories/zana-gps-mount-for-kawasaki-versys-650/69e279ad5685096a33ad92e0"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/universal-gel-seat-cushion",
    targetPath: "/product/gel-seat/zana-universal-gel-seat-cushion-medium-770grm/69e279ad5685096a33ad95ff"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-tiger-900-rally-pro-accessories",
    targetPath: "/product/bike-protection/z-pro-bash-plate-for-triumph-tiger-900-rally-pro-silver/69e279ad5685096a33ad951f"
  },
  {
    type: "product",
    sourcePath: "/sc/triumph-speed-400-accessories?page=2&sortBy=&price=",
    targetPath: "/product/bike-protection/zana-bash-plate-ms-for-triumph-speed-400/69e279ad5685096a33ad94a0"
  },
  {
    type: "product",
    sourcePath: "/sc/triumph-tiger-660-accessories",
    targetPath: "/product/touring-essentials/zana-saddle-stay-black-for-triumph-tiger-660/69e279ae5685096a33ad9723"
  },
  {
    type: "product",
    sourcePath: "/sc/universal-sliders",
    targetPath: "/product/bike-protection/zana-universal-slider-puck/69e279ad5685096a33ad9441"
  },
  {
    type: "product",
    sourcePath: "/sc/suzuki-v-strom-sx-250-accessories?page=3&sortBy=&price=",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-suzuki-v-strom-250/69e279ad5685096a33ad9474"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/royal-enfield-gt-interceptor-650-accessories",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-gt-interceptor-650/69e279ad5685096a33ad9571"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-street-scrambler-900-accessories",
    targetPath: "/product/bike-protection/z-pro-engine-guard-for-triumph-street-scrambler-900/69e279ad5685096a33ad93e3"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-speed-twin-accessories",
    targetPath: "/product/bike-protection/z-pro-chain-cover-for-triumph-speed-twin-900/69e279ad5685096a33ad9435"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-speed-twin-1200-accessories",
    targetPath: "/product/bike-protection/z-pro-bash-plate-for-triumph-speed-twin-1200/69e279ad5685096a33ad967a"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/universal-mobile-holder",
    targetPath: "/product/mobile-holder/zana-universal-mobile-holder-without-charger/69e279ad5685096a33ad9541"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-street-twin-accessories",
    targetPath: "/product/bike-protection/z-pro-linear-engine-cover-for-triumph-street-twin/6a1ed06527fd6e98b2a79018"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-tiger-900-rally-pro-accessories?page=1&sortBy=&price=",
    targetPath: "/product/bike-protection/z-pro-bash-plate-for-triumph-tiger-900-rally-pro-silver/69e279ad5685096a33ad951f"
  },
  {
    type: "product",
    sourcePath: "/sc/honda-cb350-accessories?page=2&sortBy=&price=",
    targetPath: "/product/touring-essentials/zana-backrest-for-honda-cb350/69e279ad5685096a33ad9372"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-speed-twin-accessories?ordername=id&order=desc",
    targetPath: "/product/bike-protection/z-pro-chain-cover-for-triumph-speed-twin-900/69e279ad5685096a33ad9435"
  },
  {
    type: "product",
    sourcePath: "/sc/suzuki-v-strom-sx-250-accessories?page=4&sortBy=&price=",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-suzuki-v-strom-250/69e279ad5685096a33ad9474"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/z-pro-universal-slider-puck",
    targetPath: "/product/bike-protection/zana-universal-slider-puck/69e279ad5685096a33ad9441"
  },
  {
    type: "product",
    sourcePath: "/sc/suzuki-v-strom-sx-250-accessories?ordername=name&order=desc",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-suzuki-v-strom-250/69e279ad5685096a33ad9474"
  },
  {
    type: "product",
    sourcePath: "/index.php/sc/honda-cb350-accessories",
    targetPath: "/product/touring-essentials/zana-backrest-for-honda-cb350/69e279ad5685096a33ad9372"
  },
  {
    type: "product",
    sourcePath: "/sc/suzuki-v-strom-sx-250-accessories?ordername=name&order=asc",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-suzuki-v-strom-250/69e279ad5685096a33ad9474"
  },
  {
    type: "product",
    sourcePath: "/sc/kawasaki-versys-650-accessories?ordername=saleprice&order=asc",
    targetPath: "/product/accessories/zana-gps-mount-for-kawasaki-versys-650/69e279ad5685096a33ad92e0"
  },
  {
    type: "product",
    sourcePath: "/sc/triumph-speed-400-accessories?page=1&sortBy=&price=",
    targetPath: "/product/bike-protection/zana-bash-plate-ms-for-triumph-speed-400/69e279ad5685096a33ad94a0"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-tiger-850-accessories",
    targetPath: "/product/touring-essentials/z-pro-saddle-stay-for-triumph-tiger-850/69e279ad5685096a33ad93d1"
  },
  {
    type: "product",
    sourcePath: "/sc/honda-cb350-accessories?ordername=name&order=desc",
    targetPath: "/product/touring-essentials/zana-backrest-for-honda-cb350/69e279ad5685096a33ad9372"
  },
  {
    type: "product",
    sourcePath: "/sc/universal-fog-light-mounts",
    targetPath: "/product/fog-light/zana-universal-fog-light-mount/69e279ad5685096a33ad9664"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/universal-top-box?page=1&sortBy=&price=",
    targetPath: "/product/top-box/zana-universal-top-box-cushion/69e279ad5685096a33ad9545"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/royal-enfield-gt-interceptor-650-accessories?page=1&sortBy=&price=",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-gt-interceptor-650/69e279ad5685096a33ad9571"
  },
  {
    type: "product",
    sourcePath: "/sc/suzuki-v-strom-sx-250-accessories?page=1&sortBy=&price=",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-suzuki-v-strom-250/69e279ad5685096a33ad9474"
  },
  {
    type: "product",
    sourcePath: "/sc/triumph-speed-twin-1200-accessories",
    targetPath: "/product/bike-protection/z-pro-bash-plate-for-triumph-speed-twin-1200/69e279ad5685096a33ad967a"
  },
  {
    type: "product",
    sourcePath: "/sc/royal-enfield-gt-interceptor-650-accessories?page=2&sortBy=&price=",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-gt-interceptor-650/69e279ad5685096a33ad9571"
  },
  {
    type: "product",
    sourcePath: "/sc/royal-enfield-gt-interceptor-650-accessories?page=3&sortBy=&price=",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-gt-interceptor-650/69e279ad5685096a33ad9571"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-tiger-900-rally-pro-accessories?page=2&sortBy=&price=",
    targetPath: "/product/bike-protection/z-pro-bash-plate-for-triumph-tiger-900-rally-pro-silver/69e279ad5685096a33ad951f"
  },
  {
    type: "product",
    sourcePath: "/sc/triumph-street-twin-accessories",
    targetPath: "/product/bike-protection/z-pro-linear-engine-cover-for-triumph-street-twin/6a1ed06527fd6e98b2a79018"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/royal-enfield-gt-interceptor-650-accessories?page=2&sortBy=&price=",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-gt-interceptor-650/69e279ad5685096a33ad9571"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-street-scrambler-900-accessories?ordername=id&order=desc",
    targetPath: "/product/bike-protection/z-pro-engine-guard-for-triumph-street-scrambler-900/69e279ad5685096a33ad93e3"
  },
  {
    type: "product",
    sourcePath: "/sc/triumph-speed-400-accessories?page=3&sortBy=&price=",
    targetPath: "/product/bike-protection/zana-bash-plate-ms-for-triumph-speed-400/69e279ad5685096a33ad94a0"
  },
  {
    type: "product",
    sourcePath: "/sc/suzuki-v-strom-sx-250-accessories?ordername=saleprice&order=desc",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-suzuki-v-strom-250/69e279ad5685096a33ad9474"
  },
  {
    type: "product",
    sourcePath: "/sc/royal-enfield-gt-interceptor-650-accessories?ordername=name&order=desc",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-gt-interceptor-650/69e279ad5685096a33ad9571"
  },
  {
    type: "product",
    sourcePath: "/sc/universal-top-box?page=2&sortBy=&price=",
    targetPath: "/product/top-box/zana-universal-top-box-cushion/69e279ad5685096a33ad9545"
  },
  {
    type: "product",
    sourcePath: "/sc/royal-enfield-gt-interceptor-650-accessories?page=4&sortBy=&price=",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-gt-interceptor-650/69e279ad5685096a33ad9571"
  },
  {
    type: "product",
    sourcePath: "/sc/suzuki-v-strom-sx-250-accessories?page=2&sortBy=&price=",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-suzuki-v-strom-250/69e279ad5685096a33ad9474"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/universal-top-box?page=2&sortBy=&price=",
    targetPath: "/product/top-box/zana-universal-top-box-cushion/69e279ad5685096a33ad9545"
  },
  {
    type: "product",
    sourcePath: "/sc/kawasaki-versys-650-accessories?page=2&sortBy=&price=",
    targetPath: "/product/accessories/zana-gps-mount-for-kawasaki-versys-650/69e279ad5685096a33ad92e0"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/kawasaki-versys-650-accessories",
    targetPath: "/product/accessories/zana-gps-mount-for-kawasaki-versys-650/69e279ad5685096a33ad92e0"
  },
  {
    type: "product",
    sourcePath: "/sc/kawasaki-versys-650-accessories?page=1&sortBy=&price=",
    targetPath: "/product/accessories/zana-gps-mount-for-kawasaki-versys-650/69e279ad5685096a33ad92e0"
  },
  {
    type: "product",
    sourcePath: "/sc/triumph-tiger-850-accessories",
    targetPath: "/product/touring-essentials/z-pro-saddle-stay-for-triumph-tiger-850/69e279ad5685096a33ad93d1"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-street-twin-accessories?ordername=id&order=desc",
    targetPath: "/product/bike-protection/z-pro-linear-engine-cover-for-triumph-street-twin/6a1ed06527fd6e98b2a79018"
  },
  {
    type: "product",
    sourcePath: "/sc/kawasaki-versys-650-accessories?page=3&sortBy=&price=",
    targetPath: "/product/accessories/zana-gps-mount-for-kawasaki-versys-650/69e279ad5685096a33ad92e0"
  },
  {
    type: "product",
    sourcePath: "/sc/honda-cb350-accessories?page=3&sortBy=&price=",
    targetPath: "/product/touring-essentials/zana-backrest-for-honda-cb350/69e279ad5685096a33ad9372"
  },
  {
    type: "product",
    sourcePath: "/sc/royal-enfield-gt-interceptor-650-accessories?page=1&sortBy=&price=",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-gt-interceptor-650/69e279ad5685096a33ad9571"
  },
  {
    type: "product",
    sourcePath: "/sc/triumph-street-scrambler-900-accessories",
    targetPath: "/product/bike-protection/z-pro-engine-guard-for-triumph-street-scrambler-900/69e279ad5685096a33ad93e3"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-tiger-900-rally-pro-accessories?ordername=id&order=desc",
    targetPath: "/product/bike-protection/z-pro-bash-plate-for-triumph-tiger-900-rally-pro-silver/69e279ad5685096a33ad951f"
  },
  {
    type: "product",
    sourcePath: "/sc/royal-enfield-gt-interceptor-650-accessories?ordername=saleprice&order=desc",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-gt-interceptor-650/69e279ad5685096a33ad9571"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/kawasaki-versys-650-accessories?page=1&sortBy=&price=",
    targetPath: "/product/accessories/zana-gps-mount-for-kawasaki-versys-650/69e279ad5685096a33ad92e0"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-street-twin-accessories?ordername=name&order=desc",
    targetPath: "/product/bike-protection/z-pro-linear-engine-cover-for-triumph-street-twin/6a1ed06527fd6e98b2a79018"
  },
  {
    type: "product",
    sourcePath: "/sc/suzuki-v-strom-sx-250-accessories?ordername=saleprice&order=asc",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-suzuki-v-strom-250/69e279ad5685096a33ad9474"
  },
  {
    type: "product",
    sourcePath: "/sc/royal-enfield-gt-interceptor-650-accessories?ordername=saleprice&order=asc",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-gt-interceptor-650/69e279ad5685096a33ad9571"
  },
  {
    type: "product",
    sourcePath: "/sc/triumph-speed-twin-accessories",
    targetPath: "/product/bike-protection/z-pro-chain-cover-for-triumph-speed-twin-900/69e279ad5685096a33ad9435"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-street-scrambler-900-accessories?ordername=name&order=asc",
    targetPath: "/product/bike-protection/z-pro-engine-guard-for-triumph-street-scrambler-900/69e279ad5685096a33ad93e3"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-speed-twin-accessories?ordername=name&order=asc",
    targetPath: "/product/bike-protection/z-pro-chain-cover-for-triumph-speed-twin-900/69e279ad5685096a33ad9435"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/honda-cb350-accessories?page=1&sortBy=&price=",
    targetPath: "/product/touring-essentials/zana-backrest-for-honda-cb350/69e279ad5685096a33ad9372"
  },
  {
    type: "product",
    sourcePath: "/sc/triumph-street-triple-765-accessories",
    targetPath: "/product/bike-protection/z-pro-frame-slider-for-triumph-street-triple-765/69e279ad5685096a33ad957f"
  },
  {
    type: "product",
    sourcePath: "/sc/kawasaki-versys-650-accessories?ordername=saleprice&order=desc",
    targetPath: "/product/accessories/zana-gps-mount-for-kawasaki-versys-650/69e279ad5685096a33ad92e0"
  },
  {
    type: "product",
    sourcePath: "/sc/royal-enfield-gt-interceptor-650-accessories?ordername=name&order=asc",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-gt-interceptor-650/69e279ad5685096a33ad9571"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-tiger-900-rally-pro-accessories?ordername=name&order=asc",
    targetPath: "/product/bike-protection/z-pro-bash-plate-for-triumph-tiger-900-rally-pro-silver/69e279ad5685096a33ad951f"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-tiger-660-accessories",
    targetPath: "/product/touring-essentials/zana-saddle-stay-black-for-triumph-tiger-660/69e279ae5685096a33ad9723"
  },
  {
    type: "product",
    sourcePath: "/sc/universal-slider-puck-509",
    targetPath: "/product/bike-protection/zana-universal-slider-puck/69e279ad5685096a33ad9441"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/universal-slider-puck-509",
    targetPath: "/product/bike-protection/zana-universal-slider-puck/69e279ad5685096a33ad9441"
  },
  {
    type: "product",
    sourcePath: "/sc/honda-cb350-accessories?ordername=saleprice&order=desc",
    targetPath: "/product/touring-essentials/zana-backrest-for-honda-cb350/69e279ad5685096a33ad9372"
  },
  {
    type: "product",
    sourcePath: "/sc/kawasaki-versys-650-accessories?ordername=id&order=desc",
    targetPath: "/product/accessories/zana-gps-mount-for-kawasaki-versys-650/69e279ad5685096a33ad92e0"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/honda-cb350-accessories?page=2&sortBy=&price=",
    targetPath: "/product/touring-essentials/zana-backrest-for-honda-cb350/69e279ad5685096a33ad9372"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-tiger-850-accessories?ordername=id&order=desc",
    targetPath: "/product/touring-essentials/z-pro-saddle-stay-for-triumph-tiger-850/69e279ad5685096a33ad93d1"
  },
  {
    type: "product",
    sourcePath: "/zpro/sc/triumph-tiger-900-rally-pro-accessories?ordername=saleprice&order=asc",
    targetPath: "/product/bike-protection/z-pro-bash-plate-for-triumph-tiger-900-rally-pro-silver/69e279ad5685096a33ad951f"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb350rs-crash-guard",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-honda-cb350rs/69e279ad5685096a33ad966c"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-handle-riser",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-ktm-adventure-390-250/6a1d920f43abc2dda8ffabf6"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb350-backrest",
    targetPath: "/product/touring-essentials/zana-backrest-for-honda-cb350/69e279ad5685096a33ad9372"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-crash-guard",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-ktm-adventure-250-390/69e279ad5685096a33ad9473"
  },
  {
    type: "product",
    sourcePath: "/ssc/bajaj-dominar-250-400-handle-riser",
    targetPath: "/product/ergonomics/zana-vertical-handle-riser-dominar-400-250/69e279ad5685096a33ad930f"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-handlebar-riser",
    targetPath: "/product/ergonomics/zana-vertical-handle-riser-for-interceptor-650/69e279ad5685096a33ad932e"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-backrest",
    targetPath: "/product/touring-essentials/zana-backrest-ms-for-interceptor-gt-650/69e279ad5685096a33ad92d6"
  },
  {
    type: "product",
    sourcePath: "/ssc/himalayan-450-handlebar-riser",
    targetPath: "/product/ergonomics/z-pro-universal-pivoting-handlebar-risers-for-himalayan-450/6a2278319a7fe492f4f4efd5"
  },
  {
    type: "product",
    sourcePath: "/ssc/universal-tail-tank-saddle-bags",
    targetPath: "/product/bags/zana-universal-retro-saddle-bag/69e279ad5685096a33ad9542"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-hunter-350-crash-guard",
    targetPath: "/product/bike-protection/zana-crash-guard-with-slider-black-ms-for-royal-enfield-hunter-350/69e279ad5685096a33ad93bd"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-hunter-350-backrest",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-cushion-big-for-royal-enfield-hunter-350/69e279ad5685096a33ad93f4"
  },
  {
    type: "product",
    sourcePath: "/ssc/himalayan-450-crash-guard",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-himalayan-450/69e279ad5685096a33ad9674"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-classic-350-500-top-rack",
    targetPath: "/product/touring-essentials/zana-top-rack-mild-steel-for-classic-500/69e279ad5685096a33ad94fb"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-crash-guard",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-gt-650-interceptor-650/69e279ad5685096a33ad9670"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-himalayan-bs6-2021-2022-crash-guard",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-himalayan-411-bs6-2021-2022/69e279ad5685096a33ad9673"
  },
  {
    type: "product",
    sourcePath: "/ssc/himalayan-450-top-rack",
    targetPath: "/product/touring-essentials/zana-top-rack-for-himalayan-450-with-ms-plate/69e279ad5685096a33ad9500"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-saddle-stay",
    targetPath: "/product/bags/zana-retro-saddle-bag-for-gt-interceptor-650/69e279ad5685096a33ad94b3"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-390-saddle-stay",
    targetPath: "/product/touring-essentials/zana-yezdi-adventure-saddle-stay-black/69e279ad5685096a33ad9357"
  },
  {
    type: "product",
    sourcePath: "/ssc/handlebar-riser-apache -rtx-300",
    targetPath: "/product/ergonomics/zana-vertical-handlebar-riser-for-tvs-apache-rtx-300-silver/69e279ae5685096a33ad97b8"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-390-2025-crash-guard",
    targetPath: "/product/bike-protection/zana-coolant-oil-guard-black-for-ktm-adventure-390-2025/69e279ae5685096a33ad97c1"
  },
  {
    type: "product",
    sourcePath: "/ssc/hand-guard-ktm-adv-390-2025",
    targetPath: "/product/bike-protection/zana-hand-guard-for-ktm-adv-390-2025-white/69e279ae5685096a33ad96f5"
  },
  {
    type: "product",
    sourcePath: "/ssc/harley-davidson-x440-crash-guard",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-harley-davidson-x440/69e279ad5685096a33ad9667"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-interceptor-650-saddle-bag",
    targetPath: "/product/bags/zana-retro-saddle-bag-for-gt-interceptor-650/69e279ad5685096a33ad94b3"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-gps-mount",
    targetPath: "/product/touring-essentials/zana-jerry-can-mount-for-suzuki-v-strom-250/69e279ae5685096a33ad975b"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb350-crash-guard?ordername=id&order=desc",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-honda-cb350/69e279ad5685096a33ad966b"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-speed-400-crash-guard",
    targetPath: "/product/bike-protection/zana-bash-plate-ms-for-triumph-speed-400/69e279ad5685096a33ad94a0"
  },
  {
    type: "product",
    sourcePath: "/ssc/top-box-adventure-250-390-390x-390-rally-pro",
    targetPath: "/product/ergonomics/zana-rear-footrest-pair-for-ktm-adventure-250-390-390x-390-rally/69e279ad5685096a33ad9459"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-light-mount-ktm-adv-390-2025",
    targetPath: "/product/fog-light/zana-ktm-adv-390-2025-fog-light-mounting-kit/69e279ae5685096a33ad96f8"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-saddle-stay",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-ktm-adventure-390-250/6a1d920f43abc2dda8ffabf6"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-handle-riser",
    targetPath: "/product/ergonomics/zana-vertical-handle-riser-aluminum-suzuki-v-strom-250/69e279ad5685096a33ad93c3"
  },
  {
    type: "product",
    sourcePath: "/ssc/hand-guard-tvs-apache-rtx-300",
    targetPath: "/product/bike-protection/zana-aigis-hand-guard-for-tvs-apache-rtx-300-white/69e279ae5685096a33ad97b7"
  },
  {
    type: "product",
    sourcePath: "/ssc/crash-guard-yezdi-adventure-2025",
    targetPath: "/product/bike-protection/zana-hand-guard-for-yezdi-adventure-2025-black/69e279ae5685096a33ad9710"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-speed-400-backrest",
    targetPath: "/product/bike-protection/zana-bash-plate-ms-for-triumph-speed-400/69e279ad5685096a33ad94a0"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-speed-400-handle-riser",
    targetPath: "/product/bike-protection/zana-bash-plate-ms-for-triumph-speed-400/69e279ad5685096a33ad94a0"
  },
  {
    type: "product",
    sourcePath: "/ssc/tank-bag-tvs-apache-rtx-300",
    targetPath: "/product/bags/zana-tripper-tank-bag-8-0-litre-for-tvs-apache-rtx-300/69e279ae5685096a33ad978a"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-crash-guard?ordername=name&order=desc",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-gt-650-interceptor-650/69e279ad5685096a33ad9670"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-duke-250-390-2019-2022-crash-guard",
    targetPath: "/product/bike-protection/zana-crash-guard-texture-matt-black-ktm-duke-250-390-bs4-bs6-2019-2022/69e279ad5685096a33ad92e1"
  },
  {
    type: "product",
    sourcePath: "/ssc/pillion-back-rest",
    targetPath: "/product/touring-essentials/zana-pillion-back-rest-for-xoom-160/69e279ae5685096a33ad97aa"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-super-meteor-650-top-rack",
    targetPath: "/product/touring-essentials/zana-top-rack-compatible-with-royal-enfield-backrest-ms-for-super-meteor-650/69e279ad5685096a33ad9466"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-guerrilla-450-crash-guard",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-guerrilla-450/69e279ad5685096a33ad9671"
  },
  {
    type: "product",
    sourcePath: "/ssc/tail-tidy-aprilia-rs-457",
    targetPath: "/product/bike-protection/zana-tail-tidy-black-for-aprilia-rs-457/69e279ae5685096a33ad9719"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-guerrilla-450-handle-riser",
    targetPath: "/product/ergonomics/zana-offset-handle-riser-for-guerrilla-450/69e279ad5685096a33ad95dc"
  },
  {
    type: "product",
    sourcePath: "/ssc/gel-seat-cushion-super-meteor-650",
    targetPath: "/product/bike-protection/zana-crash-guard-ms-for-super-meteor-650/69e279ad5685096a33ad9429"
  },
  {
    type: "product",
    sourcePath: "/ssc/saddle-stay-honda-cb350-rs",
    targetPath: "/product/touring-essentials/zana-drake-saddle-stay-for-honda-cb350-rs-black/69e279ae5685096a33ad97bb"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-hunter-350-crash-guard?ordername=id&order=desc",
    targetPath: "/product/bike-protection/zana-crash-guard-with-slider-black-ms-for-royal-enfield-hunter-350/69e279ad5685096a33ad93bd"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-crash-guard",
    targetPath: "/product/bike-protection/zana-hand-guard-for-suzuki-v-strom-sx-250-black/69e279ae5685096a33ad9758"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-bash-plate",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-suzuki-v-strom-250/69e279ad5685096a33ad9474"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-handle-riser?ordername=name&order=asc",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-ktm-adventure-390-250/6a1d920f43abc2dda8ffabf6"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adv-390-2025-gps-mount",
    targetPath: "/product/accessories/zana-gps-mount-duke-250-390/69e279ad5685096a33ad9313"
  },
  {
    type: "product",
    sourcePath: "/ssc/yezdi-adventure-tank-guard",
    targetPath: "/product/bike-protection/zana-hand-guard-for-yezdi-adventure-2025-black/69e279ae5685096a33ad9710"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-hunter-350-saddle-bag",
    targetPath: "/product/bags/zana-retro-saddle-bag-for-hunter-350/69e279ad5685096a33ad94b4"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb300r-crash-guard",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-honda-cb300r/69e279ad5685096a33ad966a"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-pillion-backrest?ordername=name&order=asc",
    targetPath: "/product/touring-essentials/zana-new-pillion-backrest-cushion-big-gt-interceptor-650/69e279ad5685096a33ad936e"
  },
  {
    type: "product",
    sourcePath: "/ssc/bajaj-dominar-250-400-handle-riser?ordername=name&order=asc",
    targetPath: "/product/ergonomics/zana-vertical-handle-riser-dominar-400-250/69e279ad5685096a33ad930f"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-bash-plate",
    targetPath: "/product/bike-protection/zana-uk-flag-black-bash-plate-for-gt-interceptor-650/69e279ad5685096a33ad92d3"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-saddle-bag",
    targetPath: "/product/bags/zana-adventure-saddle-bag-for-ktm-adventure-250-390-390-x/69e279ad5685096a33ad94b8"
  },
  {
    type: "product",
    sourcePath: "/ssc/handle-bar-riser cb300f",
    targetPath: "/product/ergonomics/zana-offset-handle-bar-riser-for-cb300f/69e279ad5685096a33ad9498"
  },
  {
    type: "product",
    sourcePath: "/ssc/bajaj-pulsar-ns400z-radiator-guard",
    targetPath: "/product/bike-protection/zana-radiator-guard-honeycomb-black-for-pulsar-ns400z/69e279ad5685096a33ad960f"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-bash-plate",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-ktm-adventure-250-390/69e279ad5685096a33ad9473"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-side-stand-extender",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-suzuki-v-strom-250/69e279ad5685096a33ad9464"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-classic-350-500-top-rack?ordername=name&order=asc",
    targetPath: "/product/touring-essentials/zana-top-rack-mild-steel-for-classic-500/69e279ad5685096a33ad94fb"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-390x-390-rally-panniers",
    targetPath: "/product/ergonomics/zana-rear-footrest-pair-for-ktm-adventure-250-390-390x-390-rally/69e279ad5685096a33ad9459"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-gps-mount",
    targetPath: "/product/accessories/zana-gps-mount-duke-250-390/69e279ad5685096a33ad9313"
  },
  {
    type: "product",
    sourcePath: "/ssc/saddle-stay-tvs-apache-rtx-300",
    targetPath: "/product/touring-essentials/zana-drake-saddle-stay-for-apache-rtx-300-black/69e279ae5685096a33ad9784"
  },
  {
    type: "product",
    sourcePath: "/ssc/universal-top-box-plastic-50ltr",
    targetPath: "/product/top-box/zana-universal-top-box-cushion/69e279ad5685096a33ad9545"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-super-meteor-650-crash-guard",
    targetPath: "/product/bike-protection/zana-crash-guard-ms-for-super-meteor-650/69e279ad5685096a33ad9429"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-hunter-350-side-stand-extender",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-aluminum-stainless-steel-for-royal-enfield-hunter-350/69e279ad5685096a33ad93c0"
  },
  {
    type: "product",
    sourcePath: "/ssc/kawasaki-versys-650-crash-guard?ordername=name&order=desc",
    targetPath: "/product/accessories/zana-gps-mount-for-kawasaki-versys-650/69e279ad5685096a33ad92e0"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-lights-adv-250-390",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-ktm-adv-390-250/69e279ad5685096a33ad9496"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-radiator-guard",
    targetPath: "/product/bike-protection/zana-hand-guard-for-suzuki-v-strom-sx-250-black/69e279ae5685096a33ad9758"
  },
  {
    type: "product",
    sourcePath: "/ssc/front-fork-slider-tvs-apache-rtx-300",
    targetPath: "/product/bike-protection/zana-front-fork-slider-for-tvs-apache-rtx-300/69e279ae5685096a33ad979c"
  },
  {
    type: "product",
    sourcePath: "/ssc/super-meteor-650-top-box",
    targetPath: "/product/bike-protection/zana-tail-tidy-for-super-meteor-650-black/69e279ad5685096a33ad9506"
  },
  {
    type: "product",
    sourcePath: "/ssc/saddle-stay-honda-cb300f",
    targetPath: "/product/touring-essentials/zana-saddle-stays-for-soft-bags-honda-cb300f/69e279ad5685096a33ad93fe"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-handlebar-riser?ordername=name&order=desc",
    targetPath: "/product/ergonomics/zana-vertical-handle-riser-for-interceptor-650/69e279ad5685096a33ad932e"
  },
  {
    type: "product",
    sourcePath: "/ssc/pillion-backrest-ktm-adv-390-2025",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-ktm-adventure-250-390/69e279ad5685096a33ad9473"
  },
  {
    type: "product",
    sourcePath: "/ssc/himalayan-450-saddle-bag",
    targetPath: "/product/bags/zana-overlander-saddle-bag-for-himalayan-450/69e279ad5685096a33ad94ee"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-speed-400-tank-bag",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-triumph-speed-400/69e279ad5685096a33ad95b0"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-390-side-stand-extender",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-ktm-adventure-390-250/6a1d920f43abc2dda8ffabf6"
  },
  {
    type: "product",
    sourcePath: "/ssc/universal-accessories-top-box-plastic-45ltr-l-flat-black",
    targetPath: "/product/top-box/zana-universal-top-box-nomada-45-ltr-plastic-with-backrest-black/69e279d95685096a33ad97e0"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb350-crash-guard?ordername=name&order=asc",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-honda-cb350/69e279ad5685096a33ad966b"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-scrambler-400x-tail-bag",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-triumph-scrambler-400/69e279ad5685096a33ad95a9"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-lights-meteor-350",
    targetPath: "/product/fog-light/zana-fog-light-mount-ms-for-meteor-350/69e279ad5685096a33ad950f"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-lights-himalayan-450",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-himalayan-450/69e279ad5685096a33ad96b9"
  },
  {
    type: "product",
    sourcePath: "/ssc/harley-davison-x440-saddle-bag",
    targetPath: "/product/ergonomics/zana-handle-bar-riser-for-harley-davidson-x440/69e279ad5685096a33ad9530"
  },
  {
    type: "product",
    sourcePath: "/ssc/hand-guard-x-pulse-210",
    targetPath: "/product/bike-protection/zana-hand-guard-for-x-pulse-210-black/69e279ae5685096a33ad9760"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-himalayan-2016-2020-crash-guard",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-himalayan-411-2016-2020/69e279ad5685096a33ad9672"
  },
  {
    type: "product",
    sourcePath: "/ssc/universal-accessories-top-box-aluminium-22ltr",
    targetPath: "/product/top-box/zana-universal-top-box-aluminium-black-22ltr-l-flat/69e279d95685096a33ad97cf"
  },
  {
    type: "product",
    sourcePath: "/ssc/side-stand-extender",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-xoom-160/69e279ae5685096a33ad97a9"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-handle-riser?ordername=name&order=asc",
    targetPath: "/product/ergonomics/zana-vertical-handle-riser-aluminum-suzuki-v-strom-250/69e279ad5685096a33ad93c3"
  },
  {
    type: "product",
    sourcePath: "/ssc/himalayan-450-bash-plate",
    targetPath: "/product/bike-protection/zana-bash-plate-for-himalayan-450-ms-black/69e279ad5685096a33ad94f5"
  },
  {
    type: "product",
    sourcePath: "/ssc/himalayan-450-radiator-guard",
    targetPath: "/product/bike-protection/zana-radiator-guard-aluminium-black-for-himalayan-450/69e279ad5685096a33ad94e6"
  },
  {
    type: "product",
    sourcePath: "/ssc/top-rack-yezdi-adventure-2025",
    targetPath: "/product/touring-essentials/zana-top-rack-plate-for-yezdi-adventure-2025-black/69e279ae5685096a33ad9705"
  },
  {
    type: "product",
    sourcePath: "/ssc/yezdi-scrambler-pillion-backrest",
    targetPath: "/product/touring-essentials/zana-yezdi-scrambler-new-pillion-backrest-cushion-big/69e279ad5685096a33ad9375"
  },
  {
    type: "product",
    sourcePath: "/ssc/rear-footrest-tvs-apache-rtx-300",
    targetPath: "/product/ergonomics/zana-rear-footrest-pair-for-tvs-apache-rtx-300/69e279ae5685096a33ad97c9"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-himalayan-bs6-2021-2022-crash-guard?ordername=saleprice&order=asc",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-himalayan-411-bs6-2021-2022/69e279ad5685096a33ad9673"
  },
  {
    type: "product",
    sourcePath: "/ssc/gps-mount-apache-rtx-300",
    targetPath: "/product/accessories/zana-gps-mount-for-tvs-apache-rtx-300/69e279ae5685096a33ad97c8"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-speed-400-crash-guard?ordername=name&order=asc",
    targetPath: "/product/bike-protection/zana-bash-plate-ms-for-triumph-speed-400/69e279ad5685096a33ad94a0"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-saddle-stay?ordername=saleprice&order=desc",
    targetPath: "/product/bags/zana-retro-saddle-bag-for-gt-interceptor-650/69e279ad5685096a33ad94b3"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-fog-light-mount",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-gt-interceptor-650/69e279ad5685096a33ad932f"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-lights-gt-650-interceptor-650",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-gt-interceptor-650/69e279ad5685096a33ad932f"
  },
  {
    type: "product",
    sourcePath: "/ssc/kawasaki-z900-paddock-stand",
    targetPath: "/product/side-stand-support/z-pro-rear-paddock-spool-for-kawasaki-z900/69e279ad5685096a33ad941b"
  },
  {
    type: "product",
    sourcePath: "/ssc/bajaj-dominar-250-400-pillion-backrest",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-dominar400-2017-2018/69e279ad5685096a33ad930d"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/suzuki-hayabusa-1300-tail-tidy",
    targetPath: "/product/bike-protection/z-pro-tail-tidy-black-for-suzuki-hayabusa-1300/69e279ad5685096a33ad94d4"
  },
  {
    type: "product",
    sourcePath: "/ssc/tail-bag-tvs-apache-rtx-300",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-apache-rtx-300/69e279ae5685096a33ad9791"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-headlight-grill",
    targetPath: "/product/bike-protection/zana-ktm-linear-headlight-grill-stainless-steel-adventure-390-390-x/69e279ad5685096a33ad92e3"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb200x-footrest",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-honda-cb200x/69e279ad5685096a33ad957c"
  },
  {
    type: "product",
    sourcePath: "/ssc/saddle-bag-apache-rtx-300",
    targetPath: "/product/touring-essentials/zana-drake-saddle-stay-for-apache-rtx-300-black/69e279ae5685096a33ad9784"
  },
  {
    type: "product",
    sourcePath: "/ssc/frame-slider-aprilia-457",
    targetPath: "/product/bike-protection/zana-frame-slider-small-for-aprilia-rs-457/69e279ae5685096a33ad971f"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-speed-twin-bash-plate",
    targetPath: "/product/bike-protection/z-pro-bash-plate-for-triumph-speed-twin-1200/69e279ad5685096a33ad967a"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-paddock-stand",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-ktm-adventure-390-250/6a1d920f43abc2dda8ffabf6"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-duke-250-390-crash-guard",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-ktm-duke-250-390/69e279ad5685096a33ad966d"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-lights-duke-390-250-200-390-gen-3",
    targetPath: "/product/bike-protection/zana-tail-tidy-black-for-ktm-duke-390-250-200-390-gen-3/69e279ad5685096a33ad9507"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-pillion-backrest",
    targetPath: "/product/touring-essentials/zana-new-pillion-backrest-cushion-big-gt-interceptor-650/69e279ad5685096a33ad936e"
  },
  {
    type: "product",
    sourcePath: "/ssc/exhaust-protector-hero-xoom-160",
    targetPath: "/product/bike-protection/zana-exhaust-protector-for-xoom-160/69e279ae5685096a33ad9736"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-lights-super-meteor-650",
    targetPath: "/product/fog-light/zana-fog-light-mount-ms-for-super-meteor-650/69e279ad5685096a33ad9491"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-hayabusa-paddock-stand",
    targetPath: "/product/side-stand-support/z-pro-paddock-spools-for-suzuki-hayabusa-1300/69e279ad5685096a33ad94d2"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-lights-hero-x-pulse-210",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-x-pulse-210/69e279ae5685096a33ad96c6"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/bajaj-dominar-250-400-gps-mount",
    targetPath: "/product/accessories/zana-gps-mount-dominar400-2019-2021/69e279ad5685096a33ad9311"
  },
  {
    type: "product",
    sourcePath: "/ssc/mirror-extender-350",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-honda-cb350/69e279ad5685096a33ad947b"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adv-390-fluid-reservoir-cover",
    targetPath: "/product/bike-protection/zana-front-fluid-reservoir-cover-for-ktm-adv-390-2025/69e279ad5685096a33ad969f"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-speed-twin-backrest",
    targetPath: "/product/bike-protection/z-pro-bash-plate-for-triumph-speed-twin-1200/69e279ad5685096a33ad967a"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-scrambler-400x-tank-bag",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-triumph-scrambler-400/69e279ad5685096a33ad95a9"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-speed-400-saddle-bag",
    targetPath: "/product/bike-protection/zana-bash-plate-ms-for-triumph-speed-400/69e279ad5685096a33ad94a0"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-headlight-grill",
    targetPath: "/product/bike-protection/zana-headlight-grill-type-2-ss-black-gt-interceptor-650/69e279ad5685096a33ad92d9"
  },
  {
    type: "product",
    sourcePath: "/ssc/himalayan-411-saddle-bag",
    targetPath: "/product/bags/zana-retro-saddle-bag-for-himalayan-bs6-411/69e279ad5685096a33ad951a"
  },
  {
    type: "product",
    sourcePath: "/ssc/kawasaki-versys-650-handlebar-riser",
    targetPath: "/product/ergonomics/zana-vertical-handlebar-riser-for-kawasaki-versys-650/69e279ad5685096a33ad956c"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-lights-xpulse-200",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-x-pulse-200/69e279ad5685096a33ad9468"
  },
  {
    type: "product",
    sourcePath: "/ssc/hunter-350-mirror-extender",
    targetPath: "/product/ergonomics/zana-mirror-extender-aluminum-for-hunter-350/69e279ad5685096a33ad9493"
  },
  {
    type: "product",
    sourcePath: "/ssc/mirror-extender-ktm-adv-390-2025",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-ktm-adv-390-2025-black/69e279ae5685096a33ad9752"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-lights-himalayan-411-bs6",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-himalayan-bs6-2021/69e279ad5685096a33ad9330"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb350-backrest?ordername=name&order=desc",
    targetPath: "/product/touring-essentials/zana-backrest-for-honda-cb350/69e279ad5685096a33ad9372"
  },
  {
    type: "product",
    sourcePath: "/ssc/front-fork-slider-ktm-adv-390",
    targetPath: "/product/bike-protection/zana-front-fork-slider-for-ktm-adv-390-2025/69e279ad5685096a33ad969a"
  },
  {
    type: "product",
    sourcePath: "/ssc/hand-guard-suzuki-v-strom-250",
    targetPath: "/product/bike-protection/zana-hand-guard-for-suzuki-v-strom-sx-250-black/69e279ae5685096a33ad9758"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-saddle-stay?ordername=name&order=desc",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-ktm-adventure-390-250/6a1d920f43abc2dda8ffabf6"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-speed-400-crash-guard?ordername=saleprice&order=asc",
    targetPath: "/product/bike-protection/zana-bash-plate-ms-for-triumph-speed-400/69e279ad5685096a33ad94a0"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-light-mount-himalayan-450",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-himalayan-450/69e279ad5685096a33ad96b9"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-gps-mount?ordername=saleprice&order=asc",
    targetPath: "/product/accessories/zana-gps-mount-duke-250-390/69e279ad5685096a33ad9313"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-super-meteor-650-crash-guard?ordername=name&order=desc",
    targetPath: "/product/bike-protection/zana-crash-guard-ms-for-super-meteor-650/69e279ad5685096a33ad9429"
  },
  {
    type: "product",
    sourcePath: "/ssc/mirror extender cb 350 rs",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-honda-cb-350-rs/69e279ad5685096a33ad9482"
  },
  {
    type: "product",
    sourcePath: "/ssc/bajaj-pulsar-ns400z-tail-tidy",
    targetPath: "/product/bike-protection/zana-tail-tidy-for-pulsar-ns400z/69e279ad5685096a33ad9611"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adv-390-2025-tank-guard",
    targetPath: "/product/bike-protection/zana-hand-guard-for-ktm-adv-390-2025-orange/69e279ae5685096a33ad975c"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-speed-400-tail-bag",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-triumph-speed-400/69e279ad5685096a33ad95b0"
  },
  {
    type: "product",
    sourcePath: "/ssc/himalayan-450-rear-master-cylinder-cover",
    targetPath: "/product/bike-protection/zana-rear-master-cylinder-cover-aluminium-black-t-1-for-himalayan-450/69e279ad5685096a33ad94f4"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-interceptor-650-tail-bag",
    targetPath: "/product/bags/zana-retro-saddle-bag-for-gt-interceptor-650/69e279ad5685096a33ad94b3"
  },
  {
    type: "product",
    sourcePath: "/ssc/universal-paddock-stand",
    targetPath: "/product/bike-protection/zana-universal-slider-puck/69e279ad5685096a33ad9441"
  },
  {
    type: "product",
    sourcePath: "/ssc/mirror-extender-x-pulse-210",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-x-pulse-210/69e279ae5685096a33ad96cc"
  },
  {
    type: "product",
    sourcePath: "/ssc/radiator-guard-tvs-apache-rtx-300",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-tvs-apache-rtx-300/69e279ae5685096a33ad97a0"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-speed-400-mobile-holder",
    targetPath: "/product/bike-protection/zana-bash-plate-ms-for-triumph-speed-400/69e279ad5685096a33ad94a0"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-scrambler-400x-front-fork-slider",
    targetPath: "/product/bike-protection/z-pro-front-fork-slider-for-triumph-street-scrambler/69e279ad5685096a33ad93e4"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-guerrilla-450-fluid-reservoir-cover",
    targetPath: "/product/bike-protection/zana-front-fluid-reservoir-cover-for-guerrilla-450/69e279ad5685096a33ad95db"
  },
  {
    type: "product",
    sourcePath: "/index.php/ssc/yezdi-adventure-top-rack-plate",
    targetPath: "/product/touring-essentials/zana-top-rack-plate-for-yezdi-adventure-2025-black/69e279ae5685096a33ad9705"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/bmw-f900gsa-adventure-handle-riser",
    targetPath: "/product/ergonomics/z-pro-offset-handle-bar-riser-for-bmw-f900-gs/69e279ae5685096a33ad976f"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb300r-radiator-guard",
    targetPath: "/product/bike-protection/zana-honda-cb300f-radiator-guard-honeycomb-black/69e279ad5685096a33ad93ff"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb350-side-stand-extender",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-honda-cb350/69e279ad5685096a33ad93bf"
  },
  {
    type: "product",
    sourcePath: "/ssc/frame-slider-aprilia-rs-457",
    targetPath: "/product/bike-protection/zana-frame-slider-small-for-aprilia-rs-457/69e279ae5685096a33ad971f"
  },
  {
    type: "product",
    sourcePath: "/ssc/bash-plate-tvs-apache-rtx-300",
    targetPath: "/product/bike-protection/zana-bash-plate-for-tvs-apache-rtx-300-ms-black/69e279ae5685096a33ad97b2"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/tail-tidy-speed-twin-1200",
    targetPath: "/product/bike-protection/z-pro-tail-tidy-for-triumph-speed-twin-1200/69e279ae5685096a33ad96d7"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-handle-riser?ordername=saleprice&order=desc",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-ktm-adventure-390-250/6a1d920f43abc2dda8ffabf6"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-duke-250-390-2019-2022-gps-mount",
    targetPath: "/product/accessories/zana-gps-mount-duke-250-390/69e279ad5685096a33ad9313"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-saddle-stay?ordername=saleprice&order=asc",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-ktm-adventure-390-250/6a1d920f43abc2dda8ffabf6"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-light-mount-aprilia-rs457",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-aprilia-rs-457/69e279ae5685096a33ad97c2"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-saddle-stay?ordername=name&order=asc",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-ktm-adventure-390-250/6a1d920f43abc2dda8ffabf6"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-crash-guard?ordername=name&order=asc",
    targetPath: "/product/bike-protection/zana-hand-guard-for-suzuki-v-strom-sx-250-black/69e279ae5685096a33ad9758"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-hunter-350-headlight-guard",
    targetPath: "/product/bike-protection/zana-royal-enfield-hunter-350-headlight-guard-stainless-steel/69e279ad5685096a33ad93c2"
  },
  {
    type: "product",
    sourcePath: "/ssc/kawasaki-versys-650-crash-guard",
    targetPath: "/product/accessories/zana-gps-mount-for-kawasaki-versys-650/69e279ad5685096a33ad92e0"
  },
  {
    type: "product",
    sourcePath: "/ssc/hand-guard-himalayan-450",
    targetPath: "/product/bike-protection/zana-hand-guard-for-himalayan-450-white/69e279ae5685096a33ad96f9"
  },
  {
    type: "product",
    sourcePath: "/ssc/universal-mobile-holder",
    targetPath: "/product/mobile-holder/zana-universal-mobile-holder-without-charger/69e279ad5685096a33ad9541"
  },
  {
    type: "product",
    sourcePath: "/ssc/gt-interceptor-650-footrest",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-gt-interceptor-650/69e279ad5685096a33ad9571"
  },
  {
    type: "product",
    sourcePath: "/ssc/harley-davison-x440-tail-bag",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-harley-davidson-x440/69e279ad5685096a33ad95f2"
  },
  {
    type: "product",
    sourcePath: "/ssc/himalayan-450-gps-mount",
    targetPath: "/product/accessories/zana-gps-mount-aluminium-for-himalayan-450/69e279ad5685096a33ad94e9"
  },
  {
    type: "product",
    sourcePath: "/ssc/himalayan-450-rear-footrest",
    targetPath: "/product/ergonomics/zana-rear-footrest-pair-for-himalayan-450/69e279ad5685096a33ad94fd"
  },
  {
    type: "product",
    sourcePath: "/ssc/bajaj-dominar-250-400-crash-guard",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-dominar-250-400/69e279ad5685096a33ad9665"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-pillion-back-rest",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-suzuki-v-strom-250/69e279ad5685096a33ad9474"
  },
  {
    type: "product",
    sourcePath: "/ssc/sde-stand-extender-apache-rtx-300",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-tvs-apache-rtx-300-sheet-metal/69e279ae5685096a33ad97a6"
  },
  {
    type: "product",
    sourcePath: "/ssc/bajaj-dominar-250-400-front-number-plate-relocator",
    targetPath: "/product/accessories/zana-front-number-plate-relocator-dominar-250-400-2019-22/69e279ad5685096a33ad9345"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-saddle-stay?ordername=saleprice&order=asc",
    targetPath: "/product/bags/zana-retro-saddle-bag-for-gt-interceptor-650/69e279ad5685096a33ad94b3"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-390-paddock-spools",
    targetPath: "/product/side-stand-support/zana-paddock-spool-for-ktm-enduro-390/6a0c3d920fe84fd6728b70bc"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-handle-riser?ordername=name&order=desc",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-ktm-adventure-390-250/6a1d920f43abc2dda8ffabf6"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-super-meteor-650-top-rack?ordername=name&order=asc",
    targetPath: "/product/touring-essentials/zana-top-rack-compatible-with-royal-enfield-backrest-ms-for-super-meteor-650/69e279ad5685096a33ad9466"
  },
  {
    type: "product",
    sourcePath: "/ssc/yamaha-mt15-side-stand-extender",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-yamaha-mt-15/69e279ad5685096a33ad94a4"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-hunter-350-mobile-holder",
    targetPath: "/product/touring-essentials/zana-back-rest-mild-steel-for-royal-enfield-hunter-350/69e279ad5685096a33ad93f0"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-street-twin-crash-guard",
    targetPath: "/product/bike-protection/z-pro-engine-guard-for-triumph-street-twin/69e279ad5685096a33ad93d6"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb-350-rs-fog-light-mount?ordername=id&order=desc",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-honda-cb350-rs/69e279ad5685096a33ad93eb"
  },
  {
    type: "product",
    sourcePath: "/ssc/himalayan-450-headlight-guard",
    targetPath: "/product/bike-protection/zana-hand-guard-for-himalayan-450-white/69e279ae5685096a33ad96f9"
  },
  {
    type: "product",
    sourcePath: "/ssc/kawasaki-versys-650-panniers",
    targetPath: "/product/touring-essentials/zana-saddle-stay-for-kawasaki-versys-650/69e279ad5685096a33ad92df"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-himalayan-2021-22-side-stand-extender",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-aluminum-stainless-steel-for-royal-enfield-himalayan-bs6-2021-2022/69e279ad5685096a33ad93ed"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-hunter350-bash-plate-973",
    targetPath: "/product/bike-protection/zana-bash-plate-aluminum-royal-enfield-hunter350/69e279ad5685096a33ad93c1"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-tiger-900-rally-pro-panniers",
    targetPath: "/product/bike-protection/z-pro-bash-plate-for-triumph-tiger-900-rally-pro-silver/69e279ad5685096a33ad951f"
  },
  {
    type: "product",
    sourcePath: "/ssc/harley-davidson-x440-footrest",
    targetPath: "/product/ergonomics/zana-rear-footrest-single-for-harley-davidson-x440/69e279ad5685096a33ad9570"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-bear-650-fog-light-mount",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-bear-650-mild-steel/69e279ad5685096a33ad961d"
  },
  {
    type: "product",
    sourcePath: "/ssc/gps-mount-yezdi-adventure-2025",
    targetPath: "/product/accessories/zana-gps-mount-for-yezdi-adventure-2025/69e279ae5685096a33ad970a"
  },
  {
    type: "product",
    sourcePath: "/ssc/himalayan-450-fluid-reservoir-cover",
    targetPath: "/product/bike-protection/zana-front-fluid-reservoir-cover-for-himalayan-450/69e279ad5685096a33ad94ef"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/universal-tail-tank-saddle-bags",
    targetPath: "/product/bags/zana-universal-retro-saddle-bag/69e279ad5685096a33ad9542"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb350-backrest?ordername=name&order=asc",
    targetPath: "/product/touring-essentials/zana-backrest-for-honda-cb350/69e279ad5685096a33ad9372"
  },
  {
    type: "product",
    sourcePath: "/ssc/gps-mount-hero-xoom-160",
    targetPath: "/product/accessories/zana-gps-mount-for-xoom-160/69e279ae5685096a33ad97a4"
  },
  {
    type: "product",
    sourcePath: "/ssc/handlebar-riser-x-pulse-210",
    targetPath: "/product/ergonomics/zana-vertical-handlebar-riser-black-for-x-pulse-210/69e279ae5685096a33ad96db"
  },
  {
    type: "product",
    sourcePath: "/ssc/hand-guard-cb-350-2025",
    targetPath: "/product/bike-protection/zana-hand-guard-for-honda-cb-350-2025-black/69e279ae5685096a33ad9753"
  },
  {
    type: "product",
    sourcePath: "/ssc/hand-guard-yezdi-adventure-2025",
    targetPath: "/product/bike-protection/zana-hand-guard-for-yezdi-adventure-2025-black/69e279ae5685096a33ad9710"
  },
  {
    type: "product",
    sourcePath: "/ssc/bsa-goldstar650-fog-light-mount",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-bsa-goldstar-650-mild-steel/69e279ad5685096a33ad9623"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb200x-bash-plate",
    targetPath: "/product/bike-protection/zana-bash-plate-for-honda-cb200x-black/69e279ad5685096a33ad957a"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-mudguard-riser",
    targetPath: "/product/bike-protection/zana-mudguard-riser-for-gt-interceptor-650/69e279ad5685096a33ad9307"
  },
  {
    type: "product",
    sourcePath: "/ssc/harley-davidson-x440-mirror-extender",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-harley-davidson-x440/69e279ad5685096a33ad953d"
  },
  {
    type: "product",
    sourcePath: "/ssc/gps-mount-x-pulse-210",
    targetPath: "/product/accessories/zana-gps-mount-for-x-pulse-210/69e279ae5685096a33ad96c9"
  },
  {
    type: "product",
    sourcePath: "/ssc/crash-guard-dominar-400-2017-2018",
    targetPath: "/product/bike-protection/zana-crash-guard-for-z900-2017-2019/69e279ad5685096a33ad92fd"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-saddle-stay?ordername=name&order=desc",
    targetPath: "/product/bags/zana-retro-saddle-bag-for-gt-interceptor-650/69e279ad5685096a33ad94b3"
  },
  {
    type: "product",
    sourcePath: "/ssc/kawasaki-versys-650-top-rack?ordername=saleprice&order=desc",
    targetPath: "/product/touring-essentials/zana-top-rack-plate-aluminium-kawasaki-versys-650/69e279ad5685096a33ad93ba"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-street-triple-765-radiator-guard",
    targetPath: "/product/bike-protection/z-pro-radiator-guard-for-triumph-street-triple-765/69e279ad5685096a33ad9582"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-street-scrambler-900-paddock-spool",
    targetPath: "/product/side-stand-support/z-pro-rear-paddock-spool-for-triumph-street-scrambler/69e279ad5685096a33ad93e5"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-guerrilla-450-headlight-grill",
    targetPath: "/product/bike-protection/zana-headlight-grill-for-guerrilla-450-black-type-5/69e279ad5685096a33ad95df"
  },
  {
    type: "product",
    sourcePath: "/ssc/kawasaki-versys-650-saddle-stay",
    targetPath: "/product/touring-essentials/zana-saddle-stay-for-kawasaki-versys-650/69e279ad5685096a33ad92df"
  },
  {
    type: "product",
    sourcePath: "/ssc/hero-xpulse-200-gps-mount",
    targetPath: "/product/accessories/zana-gps-mount-xpulse-200/69e279ad5685096a33ad9318"
  },
  {
    type: "product",
    sourcePath: "/ssc/kawasaki-versys-650-front-fork-sliders",
    targetPath: "/product/bike-protection/zana-front-fork-slider-for-versys-650/69e279ad5685096a33ad934a"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adv-390-rear-master-cylinder-cover",
    targetPath: "/product/bike-protection/zana-rear-master-cylinder-cover-for-ktm-adv-390-2025-aluminium-black/69e279ad5685096a33ad96a5"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-fluid-reservoir-cover",
    targetPath: "/product/bike-protection/zana-front-fluid-reservoir-oil-cover-for-suzuki-vstrom-250-ss/69e279ad5685096a33ad93ad"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-scram-411-mudguard-riser",
    targetPath: "/product/bike-protection/zana-mudguard-riser-scram-411-bs6-2022/69e279ad5685096a33ad9369"
  },
  {
    type: "product",
    sourcePath: "/ssc/radiator-guard-honda-cb300f",
    targetPath: "/product/bike-protection/zana-honda-cb300f-radiator-guard-honeycomb-black/69e279ad5685096a33ad93ff"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-street-twin-saddle-stay",
    targetPath: "/product/side-stand-support/z-pro-rear-paddock-spool-for-triumph-street-twin/69e279ad5685096a33ad93db"
  },
  {
    type: "product",
    sourcePath: "/ssc/mirror-extender-honda-cb-350-2025",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-honda-cb-350-2025/69e279ae5685096a33ad974d"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/bajaj-dominar-250-400-handle-riser",
    targetPath: "/product/ergonomics/zana-vertical-handle-riser-dominar-400-250/69e279ad5685096a33ad930f"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-handlebar-riser?ordername=saleprice&order=asc",
    targetPath: "/product/ergonomics/zana-vertical-handle-riser-for-interceptor-650/69e279ad5685096a33ad932e"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb350-fluid-reservoir-cover",
    targetPath: "/product/bike-protection/zana-rear-fluid-reservoir-cover-for-honda-cb-350/69e279ad5685096a33ad9410"
  },
  {
    type: "product",
    sourcePath: "/ssc/harley-davidson-x440-pillion-backrest",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-hex-cushion-for-harley-davidson-x440/6a17e5b88bce4b00a14a76fa"
  },
  {
    type: "product",
    sourcePath: "/ssc/jawa-classic-42-gps-mount",
    targetPath: "/product/accessories/zana-gps-mount-jawa-classic-and-42/69e279ad5685096a33ad92fb"
  },
  {
    type: "product",
    sourcePath: "/ssc/rear-footrest-shotgun-650",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-shotgun-650-black-mild-steel/69e279ad5685096a33ad9527"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-light-mount",
    targetPath: "/product/fog-light/zana-universal-fog-light-mount/69e279ad5685096a33ad9664"
  },
  {
    type: "product",
    sourcePath: "/ssc/bmw-g-310-gs-engine-guard-with-puck",
    targetPath: "/product/bike-protection/zana-lower-engine-guard-for-bmw-g310-gs-with-puck-black/69e279ad5685096a33ad9362"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-light-mount-kawasaki-klx-230",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-kawasaki-klx-230/69e279ae5685096a33ad97a8"
  },
  {
    type: "product",
    sourcePath: "/ssc/kawasaki-versys-650-radiator-grill",
    targetPath: "/product/touring-essentials/zana-saddle-stay-for-kawasaki-versys-650/69e279ad5685096a33ad92df"
  },
  {
    type: "product",
    sourcePath: "/ssc/bajaj-dominar-250-400-gps-mount",
    targetPath: "/product/accessories/zana-gps-mount-dominar400-2019-2021/69e279ad5685096a33ad9311"
  },
  {
    type: "product",
    sourcePath: "/ssc/pillion-backrest-bajaj-dominar-400-2017-2018",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-dominar400-2017-2018/69e279ad5685096a33ad930d"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-mirror-extender",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-suzuki-v-strom-250/69e279ad5685096a33ad9464"
  },
  {
    type: "product",
    sourcePath: "/ssc/front-fluid-reservoir-cover-meteor-450",
    targetPath: "/product/bike-protection/zana-front-fluid-reservoir-cover-for-guerrilla-450/69e279ad5685096a33ad95db"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-street-twin-front-fork-slider",
    targetPath: "/product/bike-protection/z-pro-front-fork-slider-for-triumph-speed-twin-900/69e279ad5685096a33ad9438"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/bmw-f900gs-axle-protector",
    targetPath: "/product/bike-protection/z-pro-rear-axle-protector-for-bmw-f900-gs-gsa/69e279ad5685096a33ad963a"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb-300-f-fog-light-mount?ordername=name&order=asc",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-honda-cb-300f/69e279ad5685096a33ad9409"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-gps-mount?ordername=saleprice&order=asc",
    targetPath: "/product/touring-essentials/zana-jerry-can-mount-for-suzuki-v-strom-250/69e279ae5685096a33ad975b"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-tiger850-saddle-stay?ordername=id&order=desc",
    targetPath: "/product/touring-essentials/z-pro-saddle-stay-for-triumph-tiger-850/69e279ad5685096a33ad93d1"
  },
  {
    type: "product",
    sourcePath: "/ssc/crash-guard-tiger-660",
    targetPath: "/product/bike-protection/zana-crash-guard-black-for-triumph-tiger-660/69e279ae5685096a33ad9722"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/hand-guard-triumph-tiger-900-rally-pro",
    targetPath: "/product/bike-protection/z-pro-hand-guard-for-tiger-900-rally-pro-white/69e279ae5685096a33ad96f6"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-scram-411-fog-light-mount-for",
    targetPath: "/product/fog-light/zana-fog-light-mount-ms-for-scram-411-bs6-2022/69e279ad5685096a33ad936c"
  },
  {
    type: "product",
    sourcePath: "/ssc/yezdi-scrambler-top-rack",
    targetPath: "/product/touring-essentials/zana-yezdi-scrambler-top-rack-type-w/69e279ad5685096a33ad9371"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-lights-duke-250-390",
    targetPath: "/product/accessories/zana-gps-mount-duke-250-390/69e279ad5685096a33ad9313"
  },
  {
    type: "product",
    sourcePath: "/ssc/rear-footrest-meteor-350",
    targetPath: "/product/ergonomics/zana-rear-footrest-steel-pair-for-meteor-350/69e279ad5685096a33ad94b0"
  },
  {
    type: "product",
    sourcePath: "/ssc/universal-top-box-58-ltr",
    targetPath: "/product/top-box/zana-universal-top-box-cushion/69e279ad5685096a33ad9545"
  },
  {
    type: "product",
    sourcePath: "/ssc/yezdi-adventure-radiator-guard?ordername=name&order=desc",
    targetPath: "/product/bike-protection/zana-radiator-guard-honeycomb-black-for-yezdi-adventure-2025/69e279ae5685096a33ad9708"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-street-scrambler-900-top-rack",
    targetPath: "/product/touring-essentials/z-pro-top-rack-plate-big-for-triumph-street-scrambler-900/69e279ad5685096a33ad93f6"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-rc-200-390-saddle-stay",
    targetPath: "/product/touring-essentials/zana-saddle-stay-for-rc-200-390-texture-matt-black/69e279ad5685096a33ad931c"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-speed-400-bash-plate",
    targetPath: "/product/bike-protection/zana-bash-plate-ms-for-triumph-speed-400/69e279ad5685096a33ad94a0"
  },
  {
    type: "product",
    sourcePath: "/ssc/yezdi-scrambler-pillion-backrest?ordername=name&order=asc",
    targetPath: "/product/touring-essentials/zana-yezdi-scrambler-new-pillion-backrest-cushion-big/69e279ad5685096a33ad9375"
  },
  {
    type: "product",
    sourcePath: "/ssc/hero-xpulse-200-pillion-backrest",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-xpulse-200/69e279ad5685096a33ad930c"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-hayabusa-1300-tank-bag",
    targetPath: "/product/bike-protection/z-pro-tail-tidy-black-for-suzuki-hayabusa-1300/69e279ad5685096a33ad94d4"
  },
  {
    type: "product",
    sourcePath: "/ssc/bajaj-dominar-250-400-front-number-plate-relocator?ordername=name&order=asc",
    targetPath: "/product/accessories/zana-front-number-plate-relocator-dominar-250-400-2019-22/69e279ad5685096a33ad9345"
  },
  {
    type: "product",
    sourcePath: "/ssc/radiator-guard- yezdi-adventure -2025",
    targetPath: "/product/bike-protection/zana-radiator-guard-honeycomb-black-for-yezdi-adventure-2025/69e279ae5685096a33ad9708"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-footrest",
    targetPath: "/product/ergonomics/zana-rear-footrest-pair-for-suzuki-v-strom-250/69e279ad5685096a33ad9480"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-front-spools",
    targetPath: "/product/bike-protection/zana-front-fork-sliders-ktm-duke-250-390/69e279ad5685096a33ad9339"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-street-triple-765-front-fork-slider",
    targetPath: "/product/bike-protection/z-pro-front-fork-slider-for-triumph-street-triple-765/69e279ad5685096a33ad9580"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-street-twin-top-rack",
    targetPath: "/product/touring-essentials/z-pro-top-rack-with-plate-for-triumph-street-twin/69e279ad5685096a33ad93d4"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-hunter350-bash-plate-973?ordername=name&order=desc",
    targetPath: "/product/bike-protection/zana-bash-plate-aluminum-royal-enfield-hunter350/69e279ad5685096a33ad93c1"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb-350-rs-side-stand-extender",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-honda-cb350/69e279ad5685096a33ad93bf"
  },
  {
    type: "product",
    sourcePath: "/ssc/yezdi-scrambler-pillion-backrest?ordername=saleprice&order=desc",
    targetPath: "/product/touring-essentials/zana-yezdi-scrambler-new-pillion-backrest-cushion-big/69e279ad5685096a33ad9375"
  },
  {
    type: "product",
    sourcePath: "/ssc/side-stand-extenders-aprilia-rs-457",
    targetPath: "/product/side-stand-support/zana-side-stand-extenders-black-for-aprilia-rs-457/69e279ae5685096a33ad971c"
  },
  {
    type: "product",
    sourcePath: "/ssc/tail-tidy-kawasaki-klx-230",
    targetPath: "/product/bike-protection/zana-tail-tidy-for-kawasaki-klx-230/69e279ae5685096a33ad97a5"
  },
  {
    type: "product",
    sourcePath: "/ssc/handle-riser-bajaj-dominar-400-2017-2018",
    targetPath: "/product/ergonomics/zana-vertical-handle-riser-dominar-400-250/69e279ad5685096a33ad930f"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb200x-handlebar-riser",
    targetPath: "/product/ergonomics/zana-vetrical-handlebar-riser-for-honda-cb200x/69e279ad5685096a33ad957d"
  },
  {
    type: "product",
    sourcePath: "/ssc/saddle-bag-super-meteor-650",
    targetPath: "/product/bags/zana-adventure-saddle-bag-for-super-meteor-650/69e279ad5685096a33ad94bd"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-rear-master-cylinder-protector",
    targetPath: "/product/bike-protection/zana-rear-master-cylinder-protector-gt-interceptor-650-bs6-ss/69e279ad5685096a33ad9315"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-street-triple-765-handlebar-weights",
    targetPath: "/product/bike-protection/z-pro-frame-slider-for-triumph-street-triple-765/69e279ad5685096a33ad957f"
  },
  {
    type: "product",
    sourcePath: "/ssc/bajaj-pulsar-ns400z-side-stand",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-pulsar-ns400z/69e279ad5685096a33ad960e"
  },
  {
    type: "product",
    sourcePath: "/ssc/fluid-reservoir-oil-cover",
    targetPath: "/product/bike-protection/zana-rear-fluid-reservoir-cover-for-cb-300f/69e279ad5685096a33ad940b"
  },
  {
    type: "product",
    sourcePath: "/ssc/bajaj-pulsar-ns400z-pillion-backrest",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-pulsar-ns-400z/69e279ad5685096a33ad9628"
  },
  {
    type: "product",
    sourcePath: "/ssc/yezdi-adventure-paddock-stand",
    targetPath: "/product/touring-essentials/zana-yezdi-adventure-saddle-stay-black/69e279ad5685096a33ad9357"
  },
  {
    type: "product",
    sourcePath: "/ssc/pillion-backrest-hero-xoom-160",
    targetPath: "/product/touring-essentials/zana-pillion-back-rest-for-xoom-160/69e279ae5685096a33ad97aa"
  },
  {
    type: "product",
    sourcePath: "/ssc/front-fork-slider-aprilia-rs-457",
    targetPath: "/product/bike-protection/zana-front-fork-slider-for-aprilia-rs-457/69e279ae5685096a33ad971a"
  },
  {
    type: "product",
    sourcePath: "/ssc/mirror extender super meteor 650",
    targetPath: "/product/ergonomics/zana-mirror-extender-aluminum-for-super-meteor-650/69e279ad5685096a33ad947f"
  },
  {
    type: "product",
    sourcePath: "/ssc/side-stand-extender-hero-xoom-160",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-xoom-160/69e279ae5685096a33ad97a9"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-street-twin-radiator-guard",
    targetPath: "/product/bike-protection/z-pro-radiator-guard-for-triumph-street-triple-765/69e279ad5685096a33ad9582"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-fluid-reservoir-cover",
    targetPath: "/product/bike-protection/zana-front-fluid-reservoir-cover-for-ktm-adv-390-2025/69e279ad5685096a33ad969f"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/saddle-stay-tiger-900-gt",
    targetPath: "/product/touring-essentials/z-pro-saddle-stay-black-for-triumph-tiger-900-gt/69e279ae5685096a33ad975f"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-scram-411-pillion-backrest?ordername=name&order=desc",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-hex-cushion-for-scram-411/6a16a7b110cace8659fb6e0a"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-street-scrambler-900-side-stand-extender",
    targetPath: "/product/side-stand-support/z-pro-side-stand-extender-for-triumph-street-scrambler-900/69e279ad5685096a33ad949f"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/tank-guard-bmw-f-850-gs",
    targetPath: "/product/bike-protection/z-pro-tank-guard-black-for-bmw-f850-gs/69e279ad5685096a33ad9405"
  },
  {
    type: "product",
    sourcePath: "/ssc/universal-top-box-plastic-55ltr",
    targetPath: "/product/top-box/zana-universal-top-box-cushion/69e279ad5685096a33ad9545"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-street-scrambler-900-backrest",
    targetPath: "/product/bike-protection/z-pro-engine-guard-for-triumph-street-scrambler-900/69e279ad5685096a33ad93e3"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/bmw-f900gs-saddle-stay",
    targetPath: "/product/touring-essentials/z-pro-saddle-stay-for-bmw-f900-gs-black/69e279ae5685096a33ad9771"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-gps-mount?ordername=name&order=asc",
    targetPath: "/product/accessories/zana-gps-mount-duke-250-390/69e279ad5685096a33ad9313"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-super-meteor-650-radiator-guard?ordername=name&order=desc",
    targetPath: "/product/bike-protection/zana-radiator-guard-hex-aluminum-for-super-meteor-650/69e279ad5685096a33ad942a"
  },
  {
    type: "product",
    sourcePath: "/ssc/kawasaki-versys-650-saddle-stay?ordername=name&order=desc",
    targetPath: "/product/touring-essentials/zana-saddle-stay-for-kawasaki-versys-650/69e279ad5685096a33ad92df"
  },
  {
    type: "product",
    sourcePath: "/ssc/bash-plate-yezdi-adventure-2025",
    targetPath: "/product/touring-essentials/zana-top-rack-plate-for-yezdi-adventure-2025-black/69e279ae5685096a33ad9705"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-himalayan-2016-2020-pillion-backrest?ordername=id&order=desc",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-himalayan-2016-2020/69e279ad5685096a33ad930b"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-hayabusa-1300-tail-tidy",
    targetPath: "/product/bike-protection/z-pro-tail-tidy-black-for-suzuki-hayabusa-1300/69e279ad5685096a33ad94d4"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-lights-bmw-g-310-gs",
    targetPath: "/product/fog-light/zana-fog-light-mount-ms-for-bmw-310-gs/69e279ad5685096a33ad9495"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-street-twin-backrest",
    targetPath: "/product/side-stand-support/z-pro-rear-paddock-spool-for-triumph-street-twin/69e279ad5685096a33ad93db"
  },
  {
    type: "product",
    sourcePath: "/ssc/bajaj-dominar-250-400-front-number-plate-relocator?ordername=saleprice&order=asc",
    targetPath: "/product/accessories/zana-front-number-plate-relocator-dominar-250-400-2019-22/69e279ad5685096a33ad9345"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-street-scrambler-900-top-rack",
    targetPath: "/product/touring-essentials/z-pro-top-rack-plate-big-for-triumph-street-scrambler-900/69e279ad5685096a33ad93f6"
  },
  {
    type: "product",
    sourcePath: "/ssc/rear-axle-protector-aprilia-rs-457",
    targetPath: "/product/bike-protection/zana-rear-axle-protector-for-aprilia-rs-457/69e279ae5685096a33ad9721"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-side-stand-extender?ordername=id&order=desc",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-ktm-adventure-390-250/6a1d920f43abc2dda8ffabf6"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/handle-bar-riser-bmw-f-850-gs",
    targetPath: "/product/ergonomics/z-pro-offset-handlebar-riser-bmw-f-850-gs/69e279ad5685096a33ad9477"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb350-side-stand-extender?ordername=saleprice&order=asc",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-honda-cb350/69e279ad5685096a33ad93bf"
  },
  {
    type: "product",
    sourcePath: "/ssc/bmw-f900gs-saddle-stay",
    targetPath: "/product/touring-essentials/z-pro-saddle-stay-for-bmw-f900-gs-black/69e279ae5685096a33ad9771"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-lights-bsa-goldstar-650",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-bsa-goldstar-650-mild-steel/69e279ad5685096a33ad9623"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-street-triple-765-paddock-spool",
    targetPath: "/product/side-stand-support/z-pro-paddock-spools-for-triumph-street-triple-765/69e279ad5685096a33ad9581"
  },
  {
    type: "product",
    sourcePath: "/ssc/kawasaki-versys-650-bash-plate",
    targetPath: "/product/accessories/zana-gps-mount-for-kawasaki-versys-650/69e279ad5685096a33ad92e0"
  },
  {
    type: "product",
    sourcePath: "/ssc/front-fork-slider-aprilia-tuono-457",
    targetPath: "/product/bike-protection/zana-front-fork-slider-for-aprilia-tuono-457-black/69e279ae5685096a33ad9711"
  },
  {
    type: "product",
    sourcePath: "/ssc/kawasaki-versys-650-gps-mount",
    targetPath: "/product/accessories/zana-gps-mount-for-kawasaki-versys-650/69e279ad5685096a33ad92e0"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/handlebar-riser-bmw-r-1300-gs",
    targetPath: "/product/ergonomics/z-pro-pivoting-handlebar-risers-for-bmw-r-1300-gs/6a2261039a7fe492f4f4efba"
  },
  {
    type: "product",
    sourcePath: "/ssc/saddle-bag-bmw-f900-gs",
    targetPath: "/product/touring-essentials/z-pro-saddle-stay-for-bmw-f900-gs-black/69e279ae5685096a33ad9771"
  },
  {
    type: "product",
    sourcePath: "/ssc/front-fork-slider-duke 390 gen 3",
    targetPath: "/product/bike-protection/zana-front-fork-sliders-ktm-duke-250-390/69e279ad5685096a33ad9339"
  },
  {
    type: "product",
    sourcePath: "/ssc/harley-davidson-x440-side-stand-extender",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-harley-davidson-x440/69e279ad5685096a33ad952f"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-guerrilla-450-front-fork-slider",
    targetPath: "/product/bike-protection/zana-front-fork-slider-for-guerrilla-450/69e279ad5685096a33ad95da"
  },
  {
    type: "product",
    sourcePath: "/ssc/yezdi-adventure-radiator-guard",
    targetPath: "/product/bike-protection/zana-radiator-guard-honeycomb-black-for-yezdi-adventure-2025/69e279ae5685096a33ad9708"
  },
  {
    type: "product",
    sourcePath: "/ssc/harley-davidson-x440-handle-bar-riser",
    targetPath: "/product/ergonomics/zana-handle-bar-riser-for-harley-davidson-x440/69e279ad5685096a33ad9530"
  },
  {
    type: "product",
    sourcePath: "/ssc/himayan-411-bs6-tank-bag",
    targetPath: "/product/bags/zana-retro-saddle-bag-for-himalayan-bs6-411/69e279ad5685096a33ad951a"
  },
  {
    type: "product",
    sourcePath: "/ssc/rear-footrest-hunter-350",
    targetPath: "/product/ergonomics/zana-rear-footrest-mild-steel-pair-for-hunter-350/69e279ad5685096a33ad9458"
  },
  {
    type: "product",
    sourcePath: "/ssc/hero-xpulse-200-fog-light-mount",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-x-pulse-200/69e279ad5685096a33ad9468"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-hunter-350-backrest?ordername=saleprice&order=asc",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-cushion-big-for-royal-enfield-hunter-350/69e279ad5685096a33ad93f4"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-himalayan-2016-2020-rear-master-cylinder-protector",
    targetPath: "/product/bike-protection/zana-rear-master-cylinder-protector-himalayan-ss-2016-2020/69e279ad5685096a33ad9305"
  },
  {
    type: "product",
    sourcePath: "/ssc/bajaj-pulsar-ns400z-rear-footrest",
    targetPath: "/product/ergonomics/zana-rear-footrest-for-pulsar-ns400z/69e279ad5685096a33ad95fc"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-caliper-protector",
    targetPath: "/product/bike-protection/zana-front-disc-caliper-protector-ktm-adventure-250-390-390-x-stainless-steel/69e279ad5685096a33ad9322"
  },
  {
    type: "product",
    sourcePath: "/ssc/bmw-g-310-gs-front-fork-slider",
    targetPath: "/product/bike-protection/zana-bmw-g-310-gs-front-fork-slider/69e279ad5685096a33ad93b3"
  },
  {
    type: "product",
    sourcePath: "/ssc/himalayan-411-tail-bag",
    targetPath: "/product/bags/zana-broozer-tail-bag-50-litre-himalayan-411/69e279ad5685096a33ad95a1"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-crash-guard?ordername=saleprice&order=asc",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-gt-650-interceptor-650/69e279ad5685096a33ad9670"
  },
  {
    type: "product",
    sourcePath: "/ssc/bash-plate-tvs-apache-rtx-300-beak-version",
    targetPath: "/product/bike-protection/zana-bash-plate-for-tvs-apache-rtx-300-ms-black/69e279ae5685096a33ad97b2"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-super-meteor-650-radiator-guard",
    targetPath: "/product/bike-protection/zana-radiator-guard-hex-aluminum-for-super-meteor-650/69e279ad5685096a33ad942a"
  },
  {
    type: "product",
    sourcePath: "/ssc/kawasaki-versys-650-side-stand-extender",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-kawasaki-versys-650/69e279ad5685096a33ad956d"
  },
  {
    type: "product",
    sourcePath: "/ssc/rear-master-cylinder-cover-aprilia-rs-457",
    targetPath: "/product/bike-protection/zana-rear-master-cylinder-cover-black-for-aprilia-rs-457/69e279ae5685096a33ad971e"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-himalayan-bs6-2021-2022-headlight-grill",
    targetPath: "/product/bike-protection/zana-headlight-grill-ss-type-4a-black-himalayan-bs6-2021-22/69e279ad5685096a33ad932b"
  },
  {
    type: "product",
    sourcePath: "/ssc/yezdi-adventure-headlight-grill",
    targetPath: "/product/bike-protection/zana-yezdi-head-light-grill-ss-black/69e279ad5685096a33ad9359"
  },
  {
    type: "product",
    sourcePath: "/ssc/coolant-oil-guard-ktm-adv-390-2025",
    targetPath: "/product/bike-protection/zana-coolant-oil-guard-black-for-ktm-adventure-390-2025/69e279ae5685096a33ad97c1"
  },
  {
    type: "product",
    sourcePath: "/ssc/mirror-extender-honda-cb-200x",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-honda-cb-200x/69e279ae5685096a33ad9782"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-paddock-stand",
    targetPath: "/product/bike-protection/zana-hand-guard-for-suzuki-v-strom-sx-250-black/69e279ae5685096a33ad9758"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/top-rack-ducati-scrambler",
    targetPath: "/product/side-stand-support/z-pro-rear-paddock-spool-for-ducati-scrambler/69e279ad5685096a33ad93e6"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-scram-411-pillion-backrest",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-hex-cushion-for-scram-411/6a16a7b110cace8659fb6e0a"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-street-twin-paddock-spool",
    targetPath: "/product/side-stand-support/z-pro-rear-paddock-spool-for-triumph-street-twin/69e279ad5685096a33ad93db"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-side-stand-extender",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-ktm-adventure-390-250/6a1d920f43abc2dda8ffabf6"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-street-triple-765-tail-tidy",
    targetPath: "/product/bike-protection/z-pro-tail-tidy-for-triumph-street-triple-765/69e279ad5685096a33ad9583"
  },
  {
    type: "product",
    sourcePath: "/ssc/yezdi-adventure-headlight-grill?ordername=id&order=desc",
    targetPath: "/product/bike-protection/zana-yezdi-head-light-grill-ss-black/69e279ad5685096a33ad9359"
  },
  {
    type: "product",
    sourcePath: "/ssc/universal--slider--puck",
    targetPath: "/product/bike-protection/zana-universal-slider-puck/69e279ad5685096a33ad9441"
  },
  {
    type: "product",
    sourcePath: "/ssc/bmw-g-310-gs-upper-fairing-guard",
    targetPath: "/product/bike-protection/zana-bmw-g310-gs-upper-fairing-guard-ms-black/69e279ad5685096a33ad9370"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-crash-guard?ordername=saleprice&order=desc",
    targetPath: "/product/bike-protection/zana-hand-guard-for-suzuki-v-strom-sx-250-black/69e279ae5685096a33ad9758"
  },
  {
    type: "product",
    sourcePath: "/ssc/saddle-stay-yezdi-adventure-2025",
    targetPath: "/product/touring-essentials/zana-yezdi-adventure-saddle-stay-black/69e279ad5685096a33ad9357"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-street-triple-765-radiator-guard",
    targetPath: "/product/bike-protection/z-pro-radiator-guard-for-triumph-street-triple-765/69e279ad5685096a33ad9582"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-fog-light-mount?ordername=name&order=asc",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-gt-interceptor-650/69e279ad5685096a33ad932f"
  },
  {
    type: "product",
    sourcePath: "/ssc/mirror extender for cb300r",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-honda-cb300r/69e279ad5685096a33ad947e"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/kawasaki-z900-paddock-stand",
    targetPath: "/product/side-stand-support/z-pro-rear-paddock-spool-for-kawasaki-z900/69e279ad5685096a33ad941b"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/suzuki-hayabusa-1300-paddock-spool",
    targetPath: "/product/side-stand-support/z-pro-paddock-spools-for-suzuki-hayabusa-1300/69e279ad5685096a33ad94d2"
  },
  {
    type: "product",
    sourcePath: "/ssc/kawasaki-versys-650-saddle-bag",
    targetPath: "/product/touring-essentials/zana-saddle-stay-for-kawasaki-versys-650/69e279ad5685096a33ad92df"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-speed-twin-paddock-spools",
    targetPath: "/product/side-stand-support/z-pro-paddock-spool-for-triumph-speed-twin-900/69e279ad5685096a33ad9439"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/ktm-adventure-250-390-bash-plate",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-ktm-adventure-250-390/69e279ad5685096a33ad9473"
  },
  {
    type: "product",
    sourcePath: "/ssc/kawasaki-versys-650-mobile-holder",
    targetPath: "/product/accessories/zana-gps-mount-for-kawasaki-versys-650/69e279ad5685096a33ad92e0"
  },
  {
    type: "product",
    sourcePath: "/ssc/kawasaki-versys-650-paddock-spool",
    targetPath: "/product/side-stand-support/zana-rear-paddock-spools-for-kawasaki-versys-650/69e279ad5685096a33ad956e"
  },
  {
    type: "product",
    sourcePath: "/ssc/fluid-reservoir-cover-tvs-apache-rtx-300",
    targetPath: "/product/bike-protection/zana-front-fluid-reservoir-cover-black-for-tvs-apache-rtx-300/69e279ae5685096a33ad97b3"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-fog-light-mount",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-ktm-adv-390-250/69e279ad5685096a33ad9496"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-tiger900-rally-pro-tank-bag",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-triumph-tiger-900-rally-pro/69e279ad5685096a33ad9644"
  },
  {
    type: "product",
    sourcePath: "/ssc/bash-plate-honda-cb-350-2025",
    targetPath: "/product/bike-protection/zana-bash-plate-for-honda-cb-350-2025-aluminum-black/69e279ae5685096a33ad974b"
  },
  {
    type: "product",
    sourcePath: "/index.php/ssc/ktm-rc-200-390-saddle-stay",
    targetPath: "/product/touring-essentials/zana-saddle-stay-for-rc-200-390-texture-matt-black/69e279ad5685096a33ad931c"
  },
  {
    type: "product",
    sourcePath: "/ssc/kawasaki-ninja-300-radiator-grill",
    targetPath: "/product/bike-protection/zana-radiator-grill-black-ninja-300/69e279ad5685096a33ad92fc"
  },
  {
    type: "product",
    sourcePath: "/ssc/mirror-extender-tvs-apache-rtx-300",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-tvs-apache-rtx-300/69e279ae5685096a33ad97a0"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-speed-400-crash-guard?ordername=saleprice&order=desc",
    targetPath: "/product/bike-protection/zana-bash-plate-ms-for-triumph-speed-400/69e279ad5685096a33ad94a0"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-street-scrambler-900-engine-cover",
    targetPath: "/product/bike-protection/z-pro-engine-guard-for-triumph-street-scrambler-900/69e279ad5685096a33ad93e3"
  },
  {
    type: "product",
    sourcePath: "/ssc/mirror-extender-hero-xoom-160",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-hero-xoom-160/69e279ae5685096a33ad97a7"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/quick-shifter-guard-bmw-f900-gs-gsa",
    targetPath: "/product/bike-protection/z-pro-quick-shifter-guard-for-bmw-f900-gs-gsa/69e279ad5685096a33ad9698"
  },
  {
    type: "product",
    sourcePath: "/ssc/front-frok-slider",
    targetPath: "/product/bike-protection/zana-front-fork-sliders-for-z900/69e279ad5685096a33ad934b"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-himalayan-bs6-2021-2022-crash-guard?ordername=id&order=desc",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-himalayan-411-bs6-2021-2022/69e279ad5685096a33ad9673"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-tiger850-saddle-stay",
    targetPath: "/product/touring-essentials/z-pro-saddle-stay-for-triumph-tiger-850/69e279ad5685096a33ad93d1"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb300r-tail-tidy",
    targetPath: "/product/bike-protection/zana-tail-tidy-black-for-honda-cb300r/69e279ad5685096a33ad9502"
  },
  {
    type: "product",
    sourcePath: "/ssc/yezdi-adventure-top-rack-plate",
    targetPath: "/product/touring-essentials/zana-top-rack-plate-for-yezdi-adventure-2025-black/69e279ae5685096a33ad9705"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/honda-cb-350-rs-fog-light-mount",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-honda-cb350-rs/69e279ad5685096a33ad93eb"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-speed-twin-1200-backrest",
    targetPath: "/product/touring-essentials/z-pro-backrest-for-speed-twin-1200/69e279ad5685096a33ad943c"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb200x-pillion-backrest",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-honda-cb200x/69e279ad5685096a33ad962a"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-hunter-350-headlight-guard?ordername=saleprice&order=asc",
    targetPath: "/product/bike-protection/zana-royal-enfield-hunter-350-headlight-guard-stainless-steel/69e279ad5685096a33ad93c2"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/royal-enfield-gt-interceptor-650-pillion-backrest",
    targetPath: "/product/touring-essentials/zana-new-pillion-backrest-cushion-big-gt-interceptor-650/69e279ad5685096a33ad936e"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/ktm-adventure-250-390-headlight-grill",
    targetPath: "/product/bike-protection/zana-ktm-linear-headlight-grill-stainless-steel-adventure-390-390-x/69e279ad5685096a33ad92e3"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-light-mount-x-pulse-210",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-x-pulse-210/69e279ae5685096a33ad96c6"
  },
  {
    type: "product",
    sourcePath: "/index.php/ssc/suzuki-v-strom-sx-250-crash-guard",
    targetPath: "/product/bike-protection/zana-hand-guard-for-suzuki-v-strom-sx-250-black/69e279ae5685096a33ad9758"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-trident660-paddock-spool",
    targetPath: "/product/side-stand-support/z-pro-rear-paddock-spool-for-triumph-street-twin/69e279ad5685096a33ad93db"
  },
  {
    type: "product",
    sourcePath: "/ssc/headlight-guard-x-pulse-210",
    targetPath: "/product/bike-protection/zana-headlight-guard-black-for-x-pulse-210/69e279ae5685096a33ad96c4"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/front-fork-slider-zp",
    targetPath: "/product/bike-protection/zana-front-fork-sliders-for-z900/69e279ad5685096a33ad934b"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-tiger850-saddle-stay",
    targetPath: "/product/touring-essentials/z-pro-saddle-stay-for-triumph-tiger-850/69e279ad5685096a33ad93d1"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/suzuki-hayabusa-1300-front-fork-slider",
    targetPath: "/product/bike-protection/z-pro-front-fork-slider-for-suzuki-hayabusa-1300/69e279ad5685096a33ad94d5"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-nx500-fluid-reservoir-cover",
    targetPath: "/product/bike-protection/zana-rear-fluid-reservoir-cover-for-honda-nx500/69e279ad5685096a33ad9575"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-front-spools?ordername=name&order=desc",
    targetPath: "/product/bike-protection/zana-front-fork-sliders-ktm-duke-250-390/69e279ad5685096a33ad9339"
  },
  {
    type: "product",
    sourcePath: "/ssc/harley-davidson-x440-fog-light-mount",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-harley-davidson-x440/69e279ad5685096a33ad953c"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb-350-rs-fog-light-mount?ordername=name&order=asc",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-honda-cb350-rs/69e279ad5685096a33ad93eb"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-speed-twin-grabrail",
    targetPath: "/product/touring-essentials/z-pro-grab-rail-for-triumph-speed-twin-1200/69e279ad5685096a33ad967f"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/bmw-f900gs-quickshifter-guard",
    targetPath: "/product/bike-protection/z-pro-quick-shifter-guard-for-bmw-f900-gs/69e279ae5685096a33ad9776"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-hunter-350-crash-guard?ordername=name&order=desc",
    targetPath: "/product/bike-protection/zana-crash-guard-with-slider-black-ms-for-royal-enfield-hunter-350/69e279ad5685096a33ad93bd"
  },
  {
    type: "product",
    sourcePath: "/ssc/paddock-spool-tvs-apache-rtx-300",
    targetPath: "/product/side-stand-support/zana-rear-paddock-spool-black-for-tvs-apache-rtx-300/69e279ae5685096a33ad97b6"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/rear-brake-protector",
    targetPath: "/product/bike-protection/z-pro-rear-brake-protector-for-bmw-f850-gsa/69e279ad5685096a33ad945e"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-bash-plate?ordername=name&order=desc",
    targetPath: "/product/bike-protection/zana-uk-flag-black-bash-plate-for-gt-interceptor-650/69e279ad5685096a33ad92d3"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-fluid-reservoir-cover?ordername=name&order=desc",
    targetPath: "/product/bike-protection/zana-front-fluid-reservoir-oil-cover-for-suzuki-vstrom-250-ss/69e279ad5685096a33ad93ad"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-tiger850-front-fork-slider",
    targetPath: "/product/bike-protection/z-pro-front-fork-slider-for-triumph-tiger-850/69e279ad5685096a33ad93ce"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/rear-master-cylinder-protector",
    targetPath: "/product/bike-protection/zana-rear-master-cylinder-protector-for-himalayan-2022/69e279ad5685096a33ad93a1"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-tiger850-saddle-stay?ordername=name&order=asc",
    targetPath: "/product/touring-essentials/z-pro-saddle-stay-for-triumph-tiger-850/69e279ad5685096a33ad93d1"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-street-twin-crash-guard",
    targetPath: "/product/bike-protection/z-pro-engine-guard-for-triumph-street-twin/69e279ad5685096a33ad93d6"
  },
  {
    type: "product",
    sourcePath: "/ssc/kawasaki-z900-radiator-grill",
    targetPath: "/product/bike-protection/zana-kawasaki-radiator-guard-grill-black/69e279ad5685096a33ad92dc"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/front-fork-slider-tiger-900-gt",
    targetPath: "/product/bike-protection/z-pro-front-fork-slider-for-triumph-tiger-900-gt/69e279ae5685096a33ad9762"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/single-rod-slider-ducati-monster-950",
    targetPath: "/product/bike-protection/z-pro-front-fork-slider-ducati-monster-950/69e279ad5685096a33ad93c8"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-himalayan-bs6-2021-2022-mudguard-riser",
    targetPath: "/product/bike-protection/zana-mudguard-riser-for-himalayan-bs6-2021/69e279ad5685096a33ad9302"
  },
  {
    type: "product",
    sourcePath: "/ssc/top-box-plastic-45-ltr-nomada-series-black",
    targetPath: "/product/top-box/zana-universal-top-box-nomada-45-ltr-plastic-with-backrest-black/69e279d95685096a33ad97e0"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb200x-reservior-cover",
    targetPath: "/product/bike-protection/zana-front-fluid-reservoir-cover-for-honda-cb200x/69e279ad5685096a33ad957e"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/suzuki-hayabusa-1300-frame-slider",
    targetPath: "/product/bike-protection/z-pro-front-fork-slider-for-suzuki-hayabusa-1300/69e279ad5685096a33ad94d5"
  },
  {
    type: "product",
    sourcePath: "/ssc/number-plate-mount-bmw-r-1300-gs",
    targetPath: "/product/accessories/z-pro-number-plate-mount-for-bmw-r-1300-gs/69e279ae5685096a33ad96fe"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/side-stand-extender-ducati-scrambler?ordername=saleprice&order=desc",
    targetPath: "/product/side-stand-support/z-pro-side-stand-extender-black-aluminium-for-ducati-scrambler/69e279ad5685096a33ad93e9"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/ducati-hypermotard-950-frame-slider",
    targetPath: "/product/bike-protection/z-pro-frame-slider-for-ducati-hypermotard/69e279ad5685096a33ad94ac"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb350-fluid-reservoir-cover?ordername=id&order=desc",
    targetPath: "/product/bike-protection/zana-rear-fluid-reservoir-cover-for-honda-cb-350/69e279ad5685096a33ad9410"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-tiger850-engine-guard",
    targetPath: "/product/bike-protection/z-pro-engine-guard-for-triumph-street-twin/69e279ad5685096a33ad93d6"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-street-scrambler-900-paddock-spool",
    targetPath: "/product/side-stand-support/z-pro-rear-paddock-spool-for-triumph-street-scrambler/69e279ad5685096a33ad93e5"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-scrambler-400x-bash-plate",
    targetPath: "/product/bike-protection/zana-bash-plate-ms-for-triumph-speed-400/69e279ad5685096a33ad94a0"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/kawasaki-z900-rear-spools",
    targetPath: "/product/side-stand-support/z-pro-rear-paddock-spool-for-kawasaki-z900/69e279ad5685096a33ad941b"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-tiger850-engine-guard",
    targetPath: "/product/bike-protection/z-pro-engine-guard-for-triumph-street-twin/69e279ad5685096a33ad93d6"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/ktm-adventure-250-390-fluid-reservoir-cover",
    targetPath: "/product/bike-protection/zana-front-fluid-reservoir-cover-for-ktm-adv-390-2025/69e279ad5685096a33ad969f"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb300r-side-stand-extender",
    targetPath: "/product/side-stand-support/zana-side-stand-extender-for-honda-cb300r/69e279ad5685096a33ad93be"
  },
  {
    type: "product",
    sourcePath: "/ssc/fluid-reservoir-cover-aprilia-tuono-457",
    targetPath: "/product/bike-protection/zana-front-fluid-reservoir-cover-red-for-aprilia-tuono-457/69e279ae5685096a33ad9733"
  },
  {
    type: "product",
    sourcePath: "/ssc/universal-slider-puck",
    targetPath: "/product/bike-protection/zana-universal-slider-puck/69e279ad5685096a33ad9441"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/ducati-hypermotard-950-front-fork-slider",
    targetPath: "/product/bike-protection/z-pro-front-fork-slider-for-ducati-hypermotard-950/69e279ad5685096a33ad94aa"
  },
  {
    type: "product",
    sourcePath: "/ssc/mirror-extender-yezdi-adventure-2025",
    targetPath: "/product/ergonomics/zana-mirror-extender-for-yezdi-adventure-2025-black-texture-aluminium/69e279ae5685096a33ad970d"
  },
  {
    type: "product",
    sourcePath: "/ssc/rear-brake-protector",
    targetPath: "/product/bike-protection/z-pro-rear-brake-protector-for-bmw-f850-gsa/69e279ad5685096a33ad945e"
  },
  {
    type: "product",
    sourcePath: "/ssc/side-stand-extender-ducati-scrambler",
    targetPath: "/product/side-stand-support/z-pro-side-stand-extender-black-aluminium-for-ducati-scrambler/69e279ad5685096a33ad93e9"
  },
  {
    type: "product",
    sourcePath: "/ssc/saddle-stay-tiger-900-gt",
    targetPath: "/product/touring-essentials/z-pro-saddle-stay-black-for-triumph-tiger-900-gt/69e279ae5685096a33ad975f"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-crash-guard?ordername=id&order=desc",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-for-ktm-adventure-250-390/69e279ad5685096a33ad9473"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-handlebar-riser?ordername=id&order=desc",
    targetPath: "/product/ergonomics/zana-vertical-handle-riser-for-interceptor-650/69e279ad5685096a33ad932e"
  },
  {
    type: "product",
    sourcePath: "/ssc/himalayan-411-bs6-saddle-bag",
    targetPath: "/product/bags/zana-retro-saddle-bag-for-himalayan-bs6-411/69e279ad5685096a33ad951a"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/kawasaki-z900-front-fork-sliders-zpro",
    targetPath: "/product/bike-protection/z-pro-front-fork-slider-for-kawasaki-z-900/69e279ad5685096a33ad93fa"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-duke-250-390-2019-2022-front-fork-sliders",
    targetPath: "/product/bike-protection/zana-front-fork-sliders-ktm-duke-250-390/69e279ad5685096a33ad9339"
  },
  {
    type: "product",
    sourcePath: "/ssc/yezdi-scrambler-paddock-stand",
    targetPath: "/product/touring-essentials/zana-yezdi-scrambler-top-rack-type-w/69e279ad5685096a33ad9371"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-street-scrambler-900-bash-plate",
    targetPath: "/product/touring-essentials/z-pro-top-rack-plate-big-for-triumph-street-scrambler-900/69e279ad5685096a33ad93f6"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-speed-twin-1200-grab-rail",
    targetPath: "/product/touring-essentials/z-pro-grab-rail-for-triumph-speed-twin-1200/69e279ad5685096a33ad967f"
  },
  {
    type: "product",
    sourcePath: "/ssc/honda-cb350-crash-guard?ordername=saleprice&order=desc",
    targetPath: "/product/bike-protection/zana-sliders-pair-for-crash-guard-honda-cb350/69e279ad5685096a33ad966b"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-hunter350-pillion-backrest",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-cushion-big-for-royal-enfield-hunter-350/69e279ad5685096a33ad93f4"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-scram-411-rear-master-cylinder-protector",
    targetPath: "/product/bike-protection/zana-rear-master-cylinder-protector-for-scram-411-bs6-ss-2022/69e279ad5685096a33ad9368"
  },
  {
    type: "product",
    sourcePath: "/ssc/fluid-reservoir-cover-x-pulse-210",
    targetPath: "/product/bike-protection/zana-front-fluid-reservoir-cover-for-x-pulse-210/69e279ae5685096a33ad96c7"
  },
  {
    type: "product",
    sourcePath: "/ssc/kawasaki-versys-650-top-rack",
    targetPath: "/product/touring-essentials/zana-top-rack-plate-aluminium-kawasaki-versys-650/69e279ad5685096a33ad93ba"
  },
  {
    type: "product",
    sourcePath: "/ssc/ktm-adventure-250-390-rear-master-cylinder",
    targetPath: "/product/bike-protection/zana-rear-master-cylinder-cover-for-ktm-adv-390-2025-aluminium-black/69e279ad5685096a33ad96a5"
  },
  {
    type: "product",
    sourcePath: "/ssc/universal-slider-puck-791",
    targetPath: "/product/bike-protection/zana-universal-slider-puck/69e279ad5685096a33ad9441"
  },
  {
    type: "product",
    sourcePath: "/ssc/bsa-goldstar650-pillion-backrest",
    targetPath: "/product/touring-essentials/zana-pillion-backrest-hex-cushion-for-bsa-goldstar-650/6a16ca4f10cace8659fb6e24"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-gt-interceptor-650-rear-master-cylinder",
    targetPath: "/product/bike-protection/zana-rear-master-cylinder-protector-gt-interceptor-650-bs6-ss/69e279ad5685096a33ad9315"
  },
  {
    type: "product",
    sourcePath: "/ssc/radiator-guard-honda-cb300f?ordername=id&order=desc",
    targetPath: "/product/bike-protection/zana-honda-cb300f-radiator-guard-honeycomb-black/69e279ad5685096a33ad93ff"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-v-strom-sx-250-mobile-holder",
    targetPath: "/product/mobile-holder/zana-mobile-holder-without-charger-for-suzuki-v-strom-250/69e279ad5685096a33ad952e"
  },
  {
    type: "product",
    sourcePath: "/ssc/harley-davison-x440-tank-bag",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-harley-davidson-x440/69e279ad5685096a33ad95f2"
  },
  {
    type: "product",
    sourcePath: "/ssc/bajaj-dominar-250-400-front-number-plate-relocator?ordername=id&order=desc",
    targetPath: "/product/accessories/zana-front-number-plate-relocator-dominar-250-400-2019-22/69e279ad5685096a33ad9345"
  },
  {
    type: "product",
    sourcePath: "/ssc/suzuki-hayabusa-1300-radiator-guard",
    targetPath: "/product/side-stand-support/z-pro-paddock-spools-for-suzuki-hayabusa-1300/69e279ad5685096a33ad94d2"
  },
  {
    type: "product",
    sourcePath: "/ssc/triumph-street-triple765-tail-bag",
    targetPath: "/product/bike-protection/z-pro-tail-tidy-for-triumph-street-triple-765/69e279ad5685096a33ad9583"
  },
  {
    type: "product",
    sourcePath: "/ssc/rear-master-cylinder-protector",
    targetPath: "/product/bike-protection/zana-rear-master-cylinder-protector-for-himalayan-2022/69e279ad5685096a33ad93a1"
  },
  {
    type: "product",
    sourcePath: "/ssc/royal-enfield-super-meteor-650-crash-guard?ordername=id&order=desc",
    targetPath: "/product/bike-protection/zana-crash-guard-ms-for-super-meteor-650/69e279ad5685096a33ad9429"
  },
  {
    type: "product",
    sourcePath: "/zpro/ssc/triumph-tiger900-rally-pro-tail-bag",
    targetPath: "/product/bags/zana-pluto-tail-bag-tank-bag-for-triumph-tiger-900-rally-pro/69e279ad5685096a33ad9644"
  },
  {
    type: "product",
    sourcePath: "/ssc/rear-oil-reservoir-hex-cover",
    targetPath: "/product/bike-protection/zana-rear-oil-reservoir-hex-cover-for-bear-650/69e279ae5685096a33ad972e"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-light-mount-honda-cb300r",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-honda-cb300r/69e279ad5685096a33ad9462"
  },
  {
    type: "product",
    sourcePath: "/ssc/fog-light-mount-honda-rebel-500",
    targetPath: "/product/fog-light/zana-fog-light-mount-for-honda-rebel-500/69e279ae5685096a33ad96d4"
  },
]
) as readonly RedirectMapping[];

export const PRODUCT_REDIRECT_MAPPINGS = REDIRECT_MAPPINGS.filter(
  (mapping) => mapping.type === REDIRECT_MAPPINGS_TYPE.PRODUCT,
);

function normalizeRedirectPath(pathname: string): string {
  const [pathOnly = ""] = pathname.split(/[?#]/);
  const withoutDuplicateSlashes = pathOnly.replace(/\/+/g, "/");
  const withoutTrailingSlash = withoutDuplicateSlashes.replace(/\/+$/, "");
  return withoutTrailingSlash.startsWith("/")
    ? withoutTrailingSlash
    : `/${withoutTrailingSlash}`;
}

export function getRedirectMappings(
  pathname: string,
): RedirectMapping[] {
  const normalizedPath = normalizeRedirectPath(pathname);
  return REDIRECT_MAPPINGS.filter(
    (mapping) =>
      normalizeRedirectPath(mapping.sourcePath) === normalizedPath,
  );
}

export function getRedirectTarget(pathname: string): string | null {
  const normalizedPath = normalizeRedirectPath(pathname);
  const mapping = getRedirectMappings(normalizedPath)?.[0];

  if (!mapping) return null;
  if (mapping.targetPath === normalizedPath) return null;

  return mapping.targetPath;
}
