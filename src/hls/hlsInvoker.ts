import Hls from "hls.js";

export const hlsInvoker = (videoElementId, streamUrl) => {
  const videoElement = document.getElementById(
    videoElementId
  ) as HTMLMediaElement;
  if (Hls.isSupported) {
    const hls = new Hls();
    hls.loadSource(streamUrl);
    hls.attachMedia(videoElement);
  } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
    videoElement.src = streamUrl;
  }
};
