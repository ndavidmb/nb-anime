import { VideoCard } from "../VideoCard"
import styles from "./VideosContainer.module.css"

export const VideosContainer = () => {
  return (
    <div className={styles["cards-grid"]}>
      <VideoCard id={1} />
      <VideoCard id={2} />
      <VideoCard id={3} />
      <VideoCard id={4} />
      <VideoCard id={5} />
      <VideoCard id={6} />
      <VideoCard id={7} />
      <VideoCard id={8} />
      <VideoCard id={9} />
    </div>
  )
}
