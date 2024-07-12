import { useState } from "react"
import Cookie from "./Cookie"
import Video from "./Video"

function App() {
	const [openWin, setOpenWin] = useState<boolean>(false)
	return (
		<>
			{openWin === false && <Cookie setOpenWin={setOpenWin} />}
			{openWin === true && <Video />}
		</>
	)
}

export default App
