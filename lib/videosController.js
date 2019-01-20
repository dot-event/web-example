export default function({ beforeAny }) {
  beforeAny("videosController", videosController)
}

function videosController(prop, arg = {}, dot) {
  dot.on("store", prop, "videos", () =>
    dot.videosView(prop)
  )
  dot.videosModel(prop)
  return dot.videosView(prop, { element: arg.element })
}