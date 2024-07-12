import { IMG_URL } from "./sys"

const Video = () => {
	return (
		<section className='vid'>
			<video src={`${IMG_URL}video.mp4`} autoPlay>
				<source src={`${IMG_URL}video.mp4`} />
			</video>
		</section>
	)
}

export default Video
