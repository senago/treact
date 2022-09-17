import { useState } from "src/treact/@hooks/useState";
import { State } from "src/treact/core/models";

export const useUpdate = () => {
	const [, setState] = useState(null);
	return () => {
		State.pendingUpdate = true;
		setState(null);
	};
};
