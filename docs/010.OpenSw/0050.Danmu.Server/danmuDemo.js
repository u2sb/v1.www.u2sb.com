import artplayerPluginDanmuku from "artplayer-plugin-danmuku";

export default {
  data() {
    return {
      dplayerDan: {
        video: {
          url: "/assets/video/s_720.mp4",
          thumbnails: "/assets/video/thumbnails.jpg",
        },
        danmaku: {
          api: "https://danmu.u2sb.com/api/dplayer/",
          id: "cENuyhsT2rMOCohK",
          addition: [
            "https://danmu.u2sb.com/api/dplayer/v3/bilibili/BV1zt411t79A",
          ],
        },
      },
      artDan: {
        url: "/assets/video/s_720.mp4",
        plugins: [
          artplayerPluginDanmuku({
            danmuku: () => Promise.all(
              [
                fetch("https://danmu.u2sb.com/api/artplayer/v1/bilibili/BV1zt411t79A.json")
                  .then((res) => res.json()).then((res) => res.data),
                fetch("https://danmu.u2sb.com/api/artplayer/v1/cENuyhsT2rMOCohK.json")
                  .then((res) => res.json()).then((res) => res.data),
              ]).then((res) => {
                let a = [];
                res.forEach((item) => {
                  a = a.concat(item);
                });
                return a;
              })
            ,
            speed: 5, // Animation time
            opacity: 1, // Opacity
            color: "#fff", // Font color
            size: 25, // Font size
            maxlength: 50, // The maximum number of words in the danmu
            margin: [10, 20], // Margin top and margin bottom
            synchronousPlayback: false, // Synchronous playback speed
          }),
        ],
      },
      artDanOn: {
        "artplayerPluginDanmuku:emit": (danmu) => {
          console.info('新增弹幕', danmu);
        },
      }
    };
  },
};
